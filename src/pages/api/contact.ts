import type { APIRoute } from "astro";
import { sendEmail } from "../../lib/nodemailer";

export const prerender = false;

// Simple in-memory rate limiting
const RATE_LIMIT_DURATION = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 50; // max 50 emails per hour
const requestLog = new Map<string, { count: number; timestamp: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const userLog = requestLog.get(ip);

  if (!userLog) {
    requestLog.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - userLog.timestamp > RATE_LIMIT_DURATION) {
    requestLog.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (userLog.count >= MAX_REQUESTS) {
    return true;
  }

  userLog.count++;
  return false;
}

export const POST: APIRoute = async ({ request }) => {
  // CORS check
  const origin = request.headers.get("origin");
  const allowedOrigins = [
    import.meta.env.DEV ? "http://localhost:4321" : null, // Default Astro dev port
    import.meta.env.SITE || "https://doguyilmaz.com",
  ].filter(Boolean); // Remove any undefined values

  if (!origin || !allowedOrigins.includes(origin)) {
    console.log(`Blocked request from origin: ${origin}`);
    return new Response(
      JSON.stringify({
        message: "Unauthorized origin",
        origin,
        allowed: allowedOrigins,
      }),
      {
        status: 403,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Rate limiting
  const clientIP = request.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(clientIP)) {
    return new Response(
      JSON.stringify({ message: "Too many requests. Please try again later." }),
      {
        status: 429,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const token = formData.get("token") as string;

    // Verify form token
    if (token !== import.meta.env.FORM_TOKEN) {
      return new Response(JSON.stringify({ message: "Invalid request" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    await sendEmail({
      type: "contact",
      data: { name, email, message },
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": origin,
        },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

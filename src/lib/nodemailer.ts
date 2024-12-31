import nodemailer from "nodemailer";

// const testAccount = await nodemailer.createTestAccount();
// nodemailer.getTestMessageUrl({})

const transporter = nodemailer.createTransport({
  host: import.meta.env.NODEMAILER_HOST,
  port: Number(import.meta.env.NODEMAILER_PORT),
  secure: true, // use SSL
  auth: {
    user: import.meta.env.NODEMAILER_USER,
    pass: import.meta.env.NODEMAILER_PASSWORD,
  },
});

type SendEmailProps = {
  type: "contact" | "subscribe";
  data: {
    name: string;
    email: string;
    message: string;
  };
};

export const sendEmail = ({ type, data }: SendEmailProps) => {
  return transporter.sendMail({
    from: `${data.name} <${data.email}>`,
    to: import.meta.env.NODEMAILER_MAILTO,
    subject:
      type === "contact"
        ? `dogukyilmaz.com: Contact from ${data.name}`
        : `dogukyilmaz.com: Subscription from ${data.name}`,
    html: getEmailTemplate(data),
  });
};

const getEmailTemplate = ({ name, email, message }: SendEmailProps["data"]) => {
  const currentYear = new Date().getFullYear();

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="icon" type="image/x-icon" href="https://doguyilmaz.com/favicon.ico">
        <style>
          @media only screen and (max-width: 620px) {
            .content {
              padding: 24px !important;
            }
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          }
        </style>
      </head>
      <body style="background: #f6f9fc; padding: 40px 0;">
        <div class="content" style="background: white; max-width: 600px; margin: 0 auto; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 32px;">
            <div style="margin-bottom: 16px; background: #7c3aed; width: 48px; height: 48px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center;">
              <img src="https://doguyilmaz.com/favicon.ico" alt="DY" width="48" height="48" style="object-fit: contain;" />
            </div>
            <h1 style="color: #1a1a1a; font-size: 24px; font-weight: 600; margin-bottom: 8px;">New Message Received!</h1>
            <p style="color: #666; font-size: 16px;">You have a new contact form submission</p>
          </div>

          <!-- Message Content -->
          <div style="background: #f8fafc; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
            <div style="margin-bottom: 16px;">
              <p style="color: #666; font-size: 14px; margin-bottom: 4px;">From</p>
              <p style="color: #1a1a1a; font-size: 16px; font-weight: 500;">${name}</p>
            </div>
            <div style="margin-bottom: 16px;">
              <p style="color: #666; font-size: 14px; margin-bottom: 4px;">Email</p>
              <p style="color: #1a1a1a; font-size: 16px; font-weight: 500;">${email}</p>
            </div>
            <div>
              <p style="color: #666; font-size: 14px; margin-bottom: 4px;">Message</p>
              <p style="color: #1a1a1a; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <!-- Quick Actions -->
          <div style="text-align: center; margin-bottom: 32px;">
            <a href="mailto:${email}" style="display: inline-block; background: #7c3aed; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 500; font-size: 16px;">Reply to ${name}</a>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding-top: 32px; border-top: 1px solid #e5e7eb;">
            <p style="color: #666; font-size: 14px;">This email was sent from your website's contact form</p>
            <p style="color: #666; font-size: 14px; margin-top: 8px;">© ${currentYear} Dogu Yilmaz. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(to right, #2563eb, #3b82f6)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '24px',
              padding: '40px 80px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1
              style={{
                fontSize: 64,
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #2563eb, #3b82f6)',
                backgroundClip: 'text',
                color: 'transparent',
                margin: '0 0 20px 0',
                display: 'flex',
              }}
            >
              doguyilmaz.com
            </h1>
            <p
              style={{
                fontSize: 32,
                color: '#334155',
                margin: 0,
                display: 'flex',
              }}
            >
              Crafting digital experiences with passion
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        debug: true,
        headers: {
          'content-type': 'image/png',
          'cache-control': 'public, max-age=31536000, immutable',
        },
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    m: {
      homeserver: {
        base_url: 'https://matrix-backend.yourdomain.com',
      },
    },
  });
}

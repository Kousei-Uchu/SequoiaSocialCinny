import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    m: {
      server: 'socialserver.sequoiasupport.com:443',
    },
  });
}

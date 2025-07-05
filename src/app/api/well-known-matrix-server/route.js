export async function GET() {
  return new Response(
    JSON.stringify({
      m: {
        homeserver: 'socialserver.sequoiasupport.com:443',
      },
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

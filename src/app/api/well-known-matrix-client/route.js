export async function GET() {
  return new Response(
    JSON.stringify({
      m: {
        homeserver: {
          base_url: 'https://socialserver.sequoiasupport.com',
        },
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

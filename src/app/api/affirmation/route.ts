// app/api/affirmation/route.ts

export async function GET() {
  try {
    const res = await fetch('https://www.affirmations.dev/');

    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch' }), { status: 500 });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
    });
  }
}

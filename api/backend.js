export default {
  async fetch(request) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle preflight request (IMPORTANT)
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders
      });
    }

    const url = new URL(request.url);

    if (url.pathname === "/generate") {
      return Response.json(
        {
          imageUrl: "https://picsum.photos/512"
        },
        {
          headers: corsHeaders
        }
      );
    }

    return new Response("Not found", {
      status: 404,
      headers: corsHeaders
    });
  },
};
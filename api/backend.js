export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders
      });
    }

    const url = new URL(request.url);

    if (url.pathname === "/generate") {
      const { prompt } = await request.json();

      const image = await env.AI.run(
        "@cf/black-forest-labs/flux-1-schnell",
        {
          prompt
        }
      );

      return new Response(image, {
        headers: {
          ...corsHeaders,
          "Content-Type": "image/jpeg"
        }
      });
    }

    return new Response("Not found", {
      status: 404,
      headers: corsHeaders
    });
  },
};
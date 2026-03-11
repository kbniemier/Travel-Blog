import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const email = data.get("email")?.toString();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = import.meta.env.MAILCHIMP_API_KEY;
    const server = import.meta.env.MAILCHIMP_SERVER;
    const listId = import.meta.env.MAILCHIMP_LIST_ID;

    const auth = btoa(`anystring:${apiKey}`);

    const response = await fetch(
      `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      if (result.title === "Member Exists") {
        return new Response(JSON.stringify({ message: "Already subscribed!" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: result.detail ?? "Subscription failed" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "Subscribed!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Subscribe error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

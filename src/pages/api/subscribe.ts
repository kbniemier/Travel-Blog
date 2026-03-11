import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email")?.toString();

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), {
      status: 400,
    });
  }

  const apiKey = import.meta.env.MAILCHIMP_API_KEY;
  const server = import.meta.env.MAILCHIMP_SERVER;
  const listId = import.meta.env.MAILCHIMP_LIST_ID;

  const response = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    if (error.title === "Member Exists") {
      return new Response(JSON.stringify({ message: "Already subscribed!" }), { status: 200 });
    }
    return new Response(JSON.stringify({ error: "Subscription failed" }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: "Subscribed!" }), { status: 200 });
};

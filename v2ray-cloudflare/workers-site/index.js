addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response("V2Ray Server is Running via Cloudflare Pages!", {
    headers: { "content-type": "text/plain" },
  })
}

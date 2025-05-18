export default {
  async fetch(request) {
    const url = new URL(request.url);
    const originalHost = url.hostname;

    const targetUrl = `https://reverse-proxy-server-p4z0.onrender.com${url.pathname}${url.search}`;

    const modifiedRequest = new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "manual"
    });

    modifiedRequest.headers.set("X-Original-Host", originalHost);

    return fetch(modifiedRequest);
  }
}

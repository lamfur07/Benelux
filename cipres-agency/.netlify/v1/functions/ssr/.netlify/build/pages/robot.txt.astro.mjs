export { renderers } from '../renderers.mjs';

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /404
Disallow: /404.html
Sitemap: ${new URL("sitemap-index.xml", void 0).href}
`.trim();
const GET = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

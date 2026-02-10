import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_CTr1BA6W.mjs';
import 'piccolore';
import { $ as $$Layout, t, n as navItems, a as $$Button, H as House, M as Mail } from '../chunks/Layout_gfwsFi8H.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("meta.404.title"), "description": t("meta.404.description") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex min-h-screen items-center justify-center px-4 py-20"> <div class="mx-auto max-w-3xl text-center"> <!-- Large 404 --> <div class="mb-8"> <h1 class="font-anton-sc text-secondary text-[150px] leading-none md:text-[200px] lg:text-[250px]"> ${t("404.h1")} </h1> </div> <!-- Error Message --> <div class="mb-12 space-y-6"> <h2 class="font-anton-sc text-accent text-4xl leading-tight uppercase md:text-5xl lg:text-6xl"> ${t("404.h2")} </h2> <p class="text-muted mx-auto max-w-2xl font-sans text-lg md:text-xl"> ${t("404.description")} </p> </div> <!-- Navigation Options --> <div class="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"> ${renderComponent($$result2, "Button", $$Button, { "variant": "primary", "size": "lg", "class": "w-full sm:w-auto" }, { "default": ($$result3) => renderTemplate` <a href="/" class="flex items-center gap-2"> ${renderComponent($$result3, "Home", House, { "size": 24 })} <span>${t("404.back.btn")}</span> </a> ` })} ${renderComponent($$result2, "Button", $$Button, { "variant": "outline", "size": "lg", "class": "w-full sm:w-auto" }, { "default": ($$result3) => renderTemplate` <a href="/contact" class="flex items-center gap-2"> ${renderComponent($$result3, "Mail", Mail, { "size": 24 })} <span>${t("404.contact.btn")}</span> </a> ` })} </div> <!-- Quick Links --> <div class="border-muted border-t pt-12"> <p class="text-muted font-grotesk mb-6 text-sm uppercase"> ${t("404.quick.link")} </p> <div class="grid grid-cols-2 gap-4 md:grid-cols-4"> ${navItems.map((item) => {
    const IconComponent = item.icon;
    return renderTemplate`<a${addAttribute(item.href, "href")} class="border-muted hover:border-secondary group rounded-lg border-2 p-4 transition-colors"> ${IconComponent && renderTemplate`${renderComponent($$result2, "IconComponent", IconComponent, { "class": "text-muted group-hover:text-secondary mx-auto mb-2 transition-colors", "size": 38 })}`} <p class="font-space-grotesk text-accent text-sm uppercase">${item.title}</p> </a>`;
  })} </div> </div> </div> </section> ` })}`;
}, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/pages/404.astro", void 0);

const $$file = "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

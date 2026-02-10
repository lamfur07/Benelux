import { c as createComponent, f as createAstro, m as maybeRenderHead, r as renderComponent, g as renderScript, d as renderTemplate } from './astro/server_CTr1BA6W.mjs';
import 'piccolore';
import { t, a as $$Button } from './Layout_gfwsFi8H.mjs';

const $$Astro = createAstro();
const $$CTABanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTABanner;
  const {
    title = t("cta.title"),
    description = t("cta.description"),
    buttonText = t("cta.button"),
    buttonHref = "/contact"
  } = Astro2.props;
  const titleWords = title.split(" ");
  return renderTemplate`${maybeRenderHead()}<section id="cta-banner" class="cta-section overflow-hidden rounded-3xl px-6 py-16 md:px-16 md:py-24 lg:px-20"> <div class="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 lg:gap-16"> <div> <h2 class="font-anton-sc text-accent flex flex-wrap gap-x-4 text-5xl tracking-tight md:text-6xl lg:text-9xl"> ${titleWords.map((word) => renderTemplate`<span class="cta-word inline-block translate-y-16 opacity-0">${word}</span>`)} </h2> </div> <div class="flex flex-col gap-6"> <p class="font-space-grotesk cta-description text-muted leading-relaxed opacity-0 text-lg lg:text-xl"> ${description} </p> <div class="cta-button translate-y-8 opacity-0 md:text-center"> ${renderComponent($$result, "Button", $$Button, { "href": buttonHref, "variant": "primary" }, { "default": ($$result2) => renderTemplate`${buttonText}` })} </div> </div> </div> </section> ${renderScript($$result, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/common/CTABanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/common/CTABanner.astro", void 0);

export { $$CTABanner as $ };

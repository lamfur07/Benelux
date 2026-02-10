import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_CTr1BA6W.mjs';
import 'piccolore';
import { $ as $$Layout, c as contactInfo, t } from '../chunks/Layout_gfwsFi8H.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("meta.privacy.title"), "description": t("meta.privacy.description") }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-primary text-accent"> <div class="container mx-auto px-4 py-24 lg:py-32"> <div class="mx-auto max-w-4xl"> <h1 class="font-anton-sc text-accent text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
Privacy Policy
</h1> <p class="text-muted font-space-grotesk mt-4 text-sm leading-relaxed sm:text-base">
Last updated: ${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)} </p> <div class="mt-10 space-y-8"> <p class="text-muted font-space-grotesk text-base leading-relaxed sm:text-lg">
This Privacy Policy explains how Benelux Global Solutions ("we", "us", "our") collects, uses, and shares personal
            information when you visit our website or contact us through our forms.
</p> <div class="space-y-4"> <h2 class="font-space-grotesk text-accent text-2xl font-semibold">1. Information We Collect</h2> <div class="space-y-3"> <p class="text-muted font-space-grotesk text-base leading-relaxed">
We may collect the following categories of information:
</p> <ul class="text-muted font-space-grotesk list-disc space-y-2 pl-6 text-base leading-relaxed"> <li>Contact details (such as name and email address) when you submit a form.</li> <li>Message content you send us (project details, requirements, or other inquiries).</li> <li>Technical data (such as browser type, device information, and IP address) via standard logs.</li> </ul> </div> </div> <div class="space-y-4"> <h2 class="font-space-grotesk text-accent text-2xl font-semibold">2. How We Use Your Information</h2> <ul class="text-muted font-space-grotesk list-disc space-y-2 pl-6 text-base leading-relaxed"> <li>To respond to your inquiries and communicate about potential projects.</li> <li>To provide and improve our services and website experience.</li> <li>To prevent fraud, spam, or abuse of our forms and systems.</li> <li>To comply with legal obligations when applicable.</li> </ul> </div> <div class="space-y-4"> <h2 class="font-space-grotesk text-accent text-2xl font-semibold">3. Legal Basis</h2> <p class="text-muted font-space-grotesk text-base leading-relaxed">
We process personal data based on legitimate interests (responding to requests and operating our
              business), your consent (when you submit forms), and contractual necessity (when you engage us for
              services), as applicable.
</p> </div> <div class="space-y-4"> <h2 class="font-space-grotesk text-accent text-2xl font-semibold">4. Sharing of Information</h2> <p class="text-muted font-space-grotesk text-base leading-relaxed">
We do not sell your personal information. We may share information with trusted service providers that
              help us operate, such as email delivery providers, hosting platforms, and analytics tools, solely for the
              purposes described in this policy and subject to their own privacy practices.
</p> </div> <div class="space-y-4"> <h2 class="font-space-grotesk text-accent text-2xl font-semibold">5. Data Retention</h2> <p class="text-muted font-space-grotesk text-base leading-relaxed">
We retain personal information only as long as needed to respond to your request, maintain our records,
              comply with legal obligations, and enforce our agreements, unless a longer retention period is required or
              permitted by law.
</p> </div> <div class="space-y-4"> <h2 class="font-space-grotesk text-accent text-2xl font-semibold">6. Security</h2> <p class="text-muted font-space-grotesk text-base leading-relaxed">
We use reasonable administrative, technical, and organizational measures to protect personal information.
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute
              security.
</p> </div> <div class="space-y-4"> <h2 class="font-space-grotesk text-accent text-2xl font-semibold">7. Your Rights</h2> <p class="text-muted font-space-grotesk text-base leading-relaxed">
Depending on your location and applicable laws, you may have rights to access, correct, delete, or object
              to the processing of your personal information. To request changes, contact us using the details below.
</p> </div> <div class="space-y-4"> <h2 class="font-space-grotesk text-accent text-2xl font-semibold">8. Cookies</h2> <p class="text-muted font-space-grotesk text-base leading-relaxed">
We may use cookies and similar technologies to operate the site and understand usage. You can control
              cookies through your browser settings. Disabling cookies may affect site functionality.
</p> </div> <div class="space-y-4"> <h2 class="font-space-grotesk text-accent text-2xl font-semibold">9. Changes to This Policy</h2> <p class="text-muted font-space-grotesk text-base leading-relaxed">
We may update this Privacy Policy from time to time. We will post the updated policy on this page with an
              updated date.
</p> </div> <div class="space-y-4"> <h2 class="font-space-grotesk text-accent text-2xl font-semibold">10. Contact</h2> <p class="text-muted font-space-grotesk text-base leading-relaxed">
If you have questions about this Privacy Policy or your data, contact us at${" "} <a${addAttribute(`mailto:${contactInfo.email}`, "href")} class="text-secondary hover:text-accent transition-colors"> ${contactInfo.email} </a>
.
</p> </div> <div class="rounded-2xl border border-white/10 bg-white/5 p-6"> <p class="text-muted font-space-grotesk text-sm leading-relaxed">
This page is provided for general information and does not constitute legal advice. For legal guidance
              tailored to your situation, consult a qualified attorney.
</p> </div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/pages/privacy.astro", void 0);

const $$file = "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

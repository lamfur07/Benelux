import { c as createComponent, f as createAstro, m as maybeRenderHead, r as renderComponent, g as renderScript, d as renderTemplate } from '../chunks/astro/server_CTr1BA6W.mjs';
import 'piccolore';
import { a as $$Button, t, c as contactInfo, $ as $$Layout } from '../chunks/Layout_gfwsFi8H.mjs';
import { a as actions } from '../chunks/virtual_EPcy4nOy.mjs';
import { i as isInputError } from '../chunks/shared_CxlMxdNA.mjs';
/* empty css                                   */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useId, useMemo, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const result = Astro2.getActionResult(actions.send);
  const inputErrors = isInputError(result?.error) ? result.error.fields : {};
  return renderTemplate`${maybeRenderHead()}<form class="space-y-4" method="POST" id="contact-form"> ${result?.data && renderTemplate`<div class="rounded-xl border-2 border-green-500 bg-green-100 p-4 text-green-800"> <p class="font-semibold">Message sent successfully!</p> </div>`} ${result?.error && !isInputError(result.error) && renderTemplate`<div class="rounded-xl border-2 border-red-500 bg-red-100 p-4 text-red-800"> <p class="font-semibold">${result.error.message}</p> </div>`} <!-- Messages container for JS --> <div id="form-message" class="hidden"></div> <!-- Honeypot field --> <input type="text" name="company" style="position:absolute;left:-9999px;width:1px;height:1px;" tabindex="-1" autocomplete="off" aria-hidden="true"> <!-- Name and Email in Grid --> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"> <!-- Name Field --> <div class="space-y-2"> <input type="text" id="first-name" name="name" required placeholder="Enter your name" class="placeholder:text-accent/80 w-full rounded-lg border border-[#333] bg-[#1a1a1a] px-6 py-4 text-white transition-colors duration-300 outline-none placeholder:text-xl focus:border-[#666]"> ${inputErrors.name && renderTemplate`<p class="text-sm text-red-500">${inputErrors.name}</p>`} <p class="hidden text-sm text-red-500" data-error="name"></p> </div> <!-- Email Field --> <div class="space-y-2"> <input type="email" id="email" name="email" required placeholder="Email" class="placeholder:text-accent/80 w-full rounded-lg border border-[#333] bg-[#1a1a1a] px-6 py-4 text-white transition-colors duration-300 outline-none placeholder:text-xl focus:border-[#666]"> ${inputErrors.email && renderTemplate`<p class="text-sm text-red-500">${inputErrors.email}</p>`} <p class="hidden text-sm text-red-500" data-error="email"></p> </div> </div> <!-- Message --> <div class="space-y-2"> <textarea id="message" name="message" rows="5" required placeholder="Message" class="placeholder:text-accent/80 w-full resize-none rounded-lg border border-[#333] bg-[#1a1a1a] px-6 py-4 text-white transition-colors duration-300 outline-none placeholder:text-xl focus:border-[#666]"></textarea> ${inputErrors.message && renderTemplate`<p class="text-sm text-red-500">${inputErrors.message}</p>`} <p class="hidden text-sm text-red-500" data-error="message"></p> </div> <!-- Submit Button --> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "size": "md", "class": "w-full px-12 md:w-auto", "id": "submit-btn" }, { "default": async ($$result2) => renderTemplate` <span id="btn-text">Submit</span> <span id="btn-loader" class="hidden"> <svg class="inline-block h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg>
Sending...
</span> ` })} </form> ${renderScript($$result, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/sections/contact/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/sections/contact/ContactForm.astro", void 0);

const $$Astro = createAstro();
const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactSection;
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="bg-primary-foreground text-accent flex items-center lg:h-dvh" data-astro-cid-gbnwivrg> <div class="container mx-auto px-4 py-24 lg:py-32" data-astro-cid-gbnwivrg> <div class="grid items-start gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-12" data-astro-cid-gbnwivrg> <div class="contact-left space-y-10" data-astro-cid-gbnwivrg> <div class="space-y-5" data-astro-cid-gbnwivrg> <h1 class="contact-title font-anton-sc text-accent text-[72px] leading-[0.9] tracking-tight sm:text-[96px] lg:text-[132px]" data-astro-cid-gbnwivrg> <span class="contact-title-line block max-w-lg" data-astro-cid-gbnwivrg>${t("contact.title")}</span> </h1> </div> <p class="contact-desc text-muted font-space-grotesk max-w-md text-base leading-relaxed sm:text-xl" data-astro-cid-gbnwivrg> ${t("contact.description")} </p> </div> <div class="contact-right space-y-10" data-astro-cid-gbnwivrg> ${renderComponent($$result, "ContactForm", $$ContactForm, { "data-astro-cid-gbnwivrg": true })} <div class="contact-visit space-y-6 border-t border-white/10 pt-9" data-astro-cid-gbnwivrg> <h2 class="font-space-grotesk text-accent text-3xl font-semibold" data-astro-cid-gbnwivrg>${t("contact.visit")}</h2> <div class="grid gap-10 md:grid-cols-2" data-astro-cid-gbnwivrg> <div class="space-y-3" data-astro-cid-gbnwivrg> <p class="text-muted text-sm tracking-widest uppercase" data-astro-cid-gbnwivrg>${t("contact.address")}</p> <p class="font-space-grotesk text-accent text-lg leading-relaxed" data-astro-cid-gbnwivrg> ${contactInfo.address.street},<br data-astro-cid-gbnwivrg> ${contactInfo.address.city},<br data-astro-cid-gbnwivrg> ${contactInfo.address.country} </p> </div> <div class="space-y-3" data-astro-cid-gbnwivrg> <p class="text-muted text-sm tracking-widest uppercase" data-astro-cid-gbnwivrg>${t("contact.hours")}</p> <p class="font-space-grotesk text-accent text-lg leading-relaxed" data-astro-cid-gbnwivrg> ${contactInfo.workingHours} </p> </div> </div> </div> </div> </div> </div> </section>  ${renderScript($$result, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/sections/contact/ContactSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/sections/contact/ContactSection.astro", void 0);

const faqItems = [
  {
    question: "What’s your typical process for a new project?",
    answer: "We begin with a discovery session to understand your business goals, technical environment, and growth plans. From there, we define a structured roadmap and execution strategy."
  },
  {
    question: "What industries does Benelux work with?",
    answer: "We’ve worked with clients across healthcare, manufacturing, fintech, e-commerce, and more. Our team’s diverse experience allows us to adapt our approach to fit the unique needs of each industry."
  },
  {
    question: "Do you build custom software or work with existing systems?",
    answer: "We build custom software tailored to your specific needs, but we also integrate with existing systems when appropriate. Our team is experienced in both approaches and will recommend the best path based on your goals."
  },
  {
    question: "Do you provide ERP software?",
    answer: "We do not sell proprietary ERP software. We provide ERP consulting, implementation, customization, integration, and optimization services using leading enterprise platforms."
  },
  {
    question: "What makes your QA automation approach different?",
    answer: "We focus on scalable, enterprise-grade automation frameworks integrated with CI/CD pipelines. Our goal is not just test coverage, but continuous quality validation with real release confidence."
  },
  {
    question: "How long does a project usually take?",
    answer: "Project timeline varies depending on scope, content readiness, and feedback cycles. After discovery, we’ll share a clear timeline with milestones so you always know what’s next."
  },
  {
    question: "Can you work with our existing dev or marketing team?",
    answer: "Yes. We often collaborate with in-house teams, agencies, or freelancers. We can plug into your existing workflow and ship work that’s easy to maintain."
  }
];

function ContactFaqSection() {
  const baseId = useId();
  const items = useMemo(() => faqItems, []);
  const [openIndex, setOpenIndex] = useState(0);
  return /* @__PURE__ */ jsx("section", { id: "faq", className: "bg-primary-foreground text-accent relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-24 lg:py-32 relative", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-14 lg:grid-cols-[1fr_1.45fr] lg:gap-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-anton-sc text-accent text-[88px] leading-[0.9] tracking-tight sm:text-[110px] lg:text-[140px]", children: t("faq.title") }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted font-space-grotesk text-lg leading-relaxed", children: [
        t("faq.description"),
        " ",
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "text-secondary hover:text-accent transition-colors", children: t("faq.contact") })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: items.map((item, idx) => {
      const isOpen = idx === openIndex;
      const contentId = `${baseId}-faq-content-${idx}`;
      const buttonId = `${baseId}-faq-button-${idx}`;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "border-muted/20 bg-primary/30 rounded-2xl border backdrop-blur-md",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                id: buttonId,
                type: "button",
                "aria-expanded": isOpen,
                "aria-controls": contentId,
                onClick: () => setOpenIndex((current) => current === idx ? -1 : idx),
                className: "w-full flex items-center justify-between gap-6 px-6 py-5 text-left cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-space-grotesk text-accent text-lg font-medium sm:text-xl", children: item.question }),
                  /* @__PURE__ */ jsx("span", { className: "text-secondary flex h-10 w-10 items-center justify-center", children: isOpen ? /* @__PURE__ */ jsx(Minus, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Plus, { className: "h-5 w-5" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                id: contentId,
                role: "region",
                "aria-labelledby": buttonId,
                className: `grid px-6 transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-70 pb-0"}`,
                children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "text-muted font-space-grotesk text-sm leading-relaxed sm:text-base", children: item.answer }) })
              }
            )
          ]
        },
        item.question
      );
    }) })
  ] }) }) });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("meta.contact.title"), "description": t("meta.contact.description"), "keywords": t("meta.contact.keywords") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} ${renderComponent($$result2, "ContactFaqSection", ContactFaqSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/sections/contact/ContactFaqSection", "client:component-export": "default" })} ` })}`;
}, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/pages/contact.astro", void 0);

const $$file = "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

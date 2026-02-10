import { c as createComponent, f as createAstro, m as maybeRenderHead, e as addAttribute, g as renderScript, d as renderTemplate, r as renderComponent } from '../chunks/astro/server_CTr1BA6W.mjs';
import 'piccolore';
import { $ as $$CTABanner } from '../chunks/CTABanner_Cbhfdl8w.mjs';
import 'clsx';
import { t, T as Twitter, I as Instagram, L as Linkedin, $ as $$Layout } from '../chunks/Layout_gfwsFi8H.mjs';
import { u as underlineGif } from '../chunks/underline_CSEvD94X.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const asterisk = new Proxy({"src":"/_astro/asterisk.5ddUCjXf.gif","width":99,"height":74,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/public/gifs/asterisk.gif";
							}
							
							return target[name];
						}
					});

const scribble = new Proxy({"src":"/_astro/scribble3.B2oNRoOO.gif","width":242,"height":125,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/public/gifs/scribble3.gif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$AboutHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutHero;
  return renderTemplate`${maybeRenderHead()}<section id="about-hero" class="bg-primary text-accent relative container mx-auto flex min-h-screen flex-col justify-center px-4 py-24" data-astro-cid-hex5pcsm> <div class="relative z-10" data-astro-cid-hex5pcsm> <!-- Title Section --> <div class="relative mb-12 w-full sm:mb-20" data-astro-cid-hex5pcsm> <h1 class="about-hero-title font-anton-sc text-accent text-[80px] leading-[0.9] tracking-tight sm:text-[120px] lg:text-[160px]" data-astro-cid-hex5pcsm> ${t("about.hero.title")} </h1> <!-- Decorative Asterisk near title --> <div class="pointer-events-none absolute -top-4 left-[280px] hidden sm:left-[400px] md:block lg:left-[550px]" data-astro-cid-hex5pcsm> <img${addAttribute(asterisk.src, "src")} alt="gift" class="h-12 w-12 sm:h-16 sm:w-16" data-astro-cid-hex5pcsm> </div> </div> <!-- Content Blocks with Staggered Layout --> <div class="flex w-full flex-col gap-12 md:gap-28" data-astro-cid-hex5pcsm> <!-- First Paragraph (Left Aligned) --> <div class="relative max-w-2xl self-start" data-astro-cid-hex5pcsm> <p class="about-hero-desc font-space-grotesk text-accent/90 text-xl leading-snug sm:text-2xl lg:text-3xl" data-astro-cid-hex5pcsm> ${t("about.hero.description")} </p> </div> <!-- Second Paragraph (Right Aligned) --> <div class="relative mt-12 max-w-2xl self-end text-left sm:text-right lg:mt-0" data-astro-cid-hex5pcsm> <p class="about-hero-desc-2 font-space-grotesk text-accent/90 text-xl leading-snug sm:text-2xl lg:text-3xl" data-astro-cid-hex5pcsm> ${t("about.hero.second.description")} </p> <!-- Decorative Underline --> <div class="pointer-events-none absolute right-0 -bottom-8 flex w-full justify-end" data-astro-cid-hex5pcsm> <img${addAttribute(underlineGif.src, "src")} alt="gift" class="w-32 sm:w-48" data-astro-cid-hex5pcsm> </div> </div> </div> </div> <!-- Subtle Background Element --> <div class="pointer-events-none absolute bottom-10 left-10 hidden lg:block" data-astro-cid-hex5pcsm> <img${addAttribute(scribble.src, "src")} alt="gift" class="h-48 w-48" data-astro-cid-hex5pcsm> </div> </section>  ${renderScript($$result, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/sections/about/AboutHero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/sections/about/AboutHero.astro", void 0);

const teamImg = new Proxy({"src":"/_astro/team-meeting.CbkHv-0z.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/public/images/team-meeting.webp";
							}
							
							return target[name];
						}
					});

const $$AboutMission = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about-mission" class="bg-primary text-accent container mx-auto px-4 py-12 lg:py-24"> <!-- Heading --> <h2 class="about-mission-title font-anton-sc mb-10 lg:mb-20 text-5xl leading-[1.1] tracking-tight sm:text-6xl lg:text-8xl"> ${t("about.mission.title")} </h2> <!-- Text Columns --> <div class="text-muted mb-20 grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]"> <!-- Left Column --> <div class="w-full"> <p class="about-mission-left font-space-grotesk text-xl leading-relaxed sm:text-2xl"> ${t("about.mission.description.left")} </p> </div> <!-- Right Column --> <div class="max-w-sm self-end lg:justify-self-end"> <p class="about-mission-right font-space-grotesk text-xl leading-relaxed font-medium"> ${t("about.mission.description.right")} </p> </div> </div> <!-- Team Image --> <div class="about-mission-image mb-12 h-[400px] w-full overflow-hidden rounded-md sm:h-[600px]"> <img${addAttribute(teamImg.src, "src")}${addAttribute(t("about.mission.alt.img"), "alt")} class="about-mission-image-inner h-full w-full object-cover"> </div> <!-- Bottom Mission Statement --> <div class="w-full"> <p class="about-mission-statement font-space-grotesk text-muted text-xl leading-relaxed sm:text-2xl"> ${t("about.mission.statement")} </p> </div> </section> ${renderScript($$result, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/sections/about/AboutMission.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/sections/about/AboutMission.astro", void 0);

const expertAreas = [
  {
    title: "AI Dev",
    description: "Designing custom-tailored AI solutions to elevate your digital presence and efficiency."
  },
  {
    title: "Development",
    description: "Expert frontend/backend development using the latest technologies."
  },
  {
    title: "QA Testing",
    description: "Ensuring quality and reliability through comprehensive testing and automation."
  },
  {
    title: "ERP Solutions",
    description: "Building robust, custom-tailored ERP solutions to streamline your business operations."
  },
  {
    title: "Cybersecurity",
    description: "Implementing robust security measures to protect your digital assets and infrastructure."
  }
];

const $$ExpertSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="expert-section" class="text-accent container mx-auto px-4 py-12 lg:py-24" data-astro-cid-bmwwfjvb> <!-- Top Heading --> <h2 class="font-anton-sc mb-10 lg:mb-20 text-5xl leading-[1.1] tracking-tight sm:text-6xl lg:text-8xl" data-astro-cid-bmwwfjvb> ${t("about.expert.title")} </h2> <!-- Cards Grid --> <div class="grid grid-cols-1 overflow-hidden border-2 border-white/10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" data-astro-cid-bmwwfjvb> ${expertAreas.map((item, index) => renderTemplate`<div class="expert-card -mr-1 -mb-1 flex min-h-[320px] flex-col justify-between border-r-2 border-b-2 border-white/10 p-4 md:min-h-[380px] lg:min-h-[420px]" data-astro-cid-bmwwfjvb> <span class="font-anton-sc text-muted flex items-center text-3xl tracking-wide lg:text-5xl" data-astro-cid-bmwwfjvb> ${(index + 1).toString().padStart(2, "0")} <span class="bg-secondary m-1 h-2 w-2 self-end" data-astro-cid-bmwwfjvb></span> </span> <div class="space-y-4 md:space-y-6" data-astro-cid-bmwwfjvb> <h3 class="font-space-grotesk text-2xl leading-tight font-medium md:text-3xl" data-astro-cid-bmwwfjvb>${item.title}</h3> <p class="font-poppins text-muted text-base leading-relaxed md:text-lg" data-astro-cid-bmwwfjvb>${item.description}</p> </div> </div>`)} </div> </section>  ${renderScript($$result, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/sections/about/ExpertSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/sections/about/ExpertSection.astro", void 0);

const teamMembers = [
  {
    name: "Ayesha Sufyan",
    role: "CEO, Co-FOUNDER",
    image: "/images/team/oliver.webp",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/" },
      { platform: "instagram", url: "https://www.instagram.com/" },
      { platform: "twitter", url: "https://www.twitter.com/" }
    ]
  },
  {
    name: "Muhammad Sufyan",
    role: "CTO, Co-FOUNDER",
    image: "/images/team/Sufyan.jpeg",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/" },
      { platform: "instagram", url: "https://www.instagram.com/" },
      { platform: "twitter", url: "https://www.twitter.com/" }
    ]
  },
  {
    name: "Mohammad Uzair Bawany",
    role: "Technical Projects Lead",
    image: "/images/team/ethan.webp",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/" },
      { platform: "instagram", url: "https://www.instagram.com/" },
      { platform: "twitter", url: "https://www.twitter.com/" }
    ]
  },
  {
    name: "Arsal Arif",
    role: "Procurement Lead",
    image: "/images/team/audrey.webp",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/" },
      { platform: "instagram", url: "https://www.instagram.com/" },
      { platform: "twitter", url: "https://www.twitter.com/" }
    ]
  },
  {
    name: "Muhammad Gigani",
    role: "Partnerships Manager",
    image: "/images/team/audrey.webp",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/" },
      { platform: "instagram", url: "https://www.instagram.com/" },
      { platform: "twitter", url: "https://www.twitter.com/" }
    ]
  },
  {
    name: "Zayyan",
    role: "Cybersecurity Lead",
    image: "/images/team/audrey.webp",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/" },
      { platform: "instagram", url: "https://www.instagram.com/" },
      { platform: "twitter", url: "https://www.twitter.com/" }
    ]
  },
  {
    name: "Ibrahim Ali Khan",
    role: "ERP Solutions Lead",
    image: "/images/team/audrey.webp",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/" },
      { platform: "instagram", url: "https://www.instagram.com/" },
      { platform: "twitter", url: "https://www.twitter.com/" }
    ]
  }
];
const getSocialIcon = (platform) => {
  const icons = {
    linkedin: Linkedin,
    instagram: Instagram,
    twitter: Twitter
  };
  return icons[platform];
};

const $$TeamSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="team-section" class="text-accent py-12 lg:py-24 overflow-hidden container mx-auto px-4" data-astro-cid-myy3awcn> <!-- Header --> <div class="mb-20 space-y-4" data-astro-cid-myy3awcn> <h2 class="font-anton-sc text-5xl leading-[1.1] tracking-tight sm:text-6xl lg:text-8xl" data-astro-cid-myy3awcn> ${t("about.team.title")} </h2> <p class="font-space-grotesk text-muted text-xl leading-relaxed sm:text-2xl max-w-4xl" data-astro-cid-myy3awcn> ${t("about.team.description")} </p> </div> <!-- Team Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-myy3awcn> ${teamMembers.map((member) => renderTemplate`<div class="team-card group relative overflow-hidden rounded-lg border-3 border-white/10 flex flex-col h-full" data-astro-cid-myy3awcn> <!-- Image Container --> <div class="aspect-square w-full overflow-hidden shrink-0" data-astro-cid-myy3awcn> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} class="h-full w-full object-cover" data-astro-cid-myy3awcn> </div> <!-- Content Overlay/Bottom --> <div class="p-6 bg-primary-foreground grow flex flex-col justify-between" data-astro-cid-myy3awcn> <h3 class="font-space-grotesk text-2xl font-bold mb-6 text-white" data-astro-cid-myy3awcn>${member.name}</h3> <div class="flex items-center justify-between border-t border-white/10 pt-4 mt-auto" data-astro-cid-myy3awcn> <div class="flex items-center gap-3" data-astro-cid-myy3awcn> <span class="h-2 w-2 bg-secondary" data-astro-cid-myy3awcn></span> <span class="font-space-grotesk text-xs tracking-wider text-muted uppercase" data-astro-cid-myy3awcn> ${member.role} </span> </div> ${member.socials.length > 0 && renderTemplate`<div class="flex items-center gap-3" data-astro-cid-myy3awcn> ${member.socials.map((social) => {
    const Icon = getSocialIcon(social.platform);
    return renderTemplate`<a${addAttribute(social.url, "href")} class="text-muted hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer"${addAttribute(`${member.name} on ${social.platform}`, "aria-label")} data-astro-cid-myy3awcn> ${renderComponent($$result, "Icon", Icon, { "class": "h-5 w-5", "data-astro-cid-myy3awcn": true })} </a>`;
  })} </div>`} </div> </div> </div>`)} </div> </section>  ${renderScript($$result, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/sections/about/TeamSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/sections/about/TeamSection.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("meta.about.title"), "description": t("meta.about.description"), "keywords": t("meta.about.keywords") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutHero", $$AboutHero, {})} ${renderComponent($$result2, "AboutMission", $$AboutMission, {})} ${renderComponent($$result2, "ExpertSection", $$ExpertSection, {})} ${renderComponent($$result2, "TeamSection", $$TeamSection, {})} ${renderComponent($$result2, "CTABanner", $$CTABanner, {})} ` })}`;
}, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/pages/about.astro", void 0);

const $$file = "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

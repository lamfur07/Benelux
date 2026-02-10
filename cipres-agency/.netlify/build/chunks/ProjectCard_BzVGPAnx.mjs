import { c as createComponent, f as createAstro, m as maybeRenderHead, e as addAttribute, h as renderTransition, r as renderComponent, d as renderTemplate } from './astro/server_CTr1BA6W.mjs';
import 'piccolore';
/* empty css                          */
import { A as ArrowRight } from './_astro_content_8Oa4-YLJ.mjs';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { id, title, category, image, variant = "standard", showArrow = true } = Astro2.props;
  const heightClasses = {
    featured: "h-[300px] md:h-[600px]",
    standard: "h-[300px] md:h-[400px]"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/projects/${id}`, "href")} class="group block overflow-hidden rounded-3xl transition-transform hover:scale-[1.02]"> <div${addAttribute(`relative ${heightClasses[variant]}`, "class")}> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"${addAttribute(renderTransition($$result, "25w5hlsb", "", `project-${id}`), "data-astro-transition-scope")}> <div class="absolute inset-x-3 bottom-3"> <div class="group-hover:bg-secondary flex items-center justify-between gap-4 rounded-2xl bg-transparent/40 px-4 py-2 text-white backdrop-blur-xl transition-all duration-300"> <div class="flex flex-col gap-1"> <div class="font-space-grotesk flex flex-wrap items-center gap-2"> <h3 class="text-base md:text-xl"> ${title} / ${category} </h3> </div> </div> ${showArrow && renderTemplate`<div class="p-3 text-white transition-all duration-300 group-hover:-rotate-45"> ${renderComponent($$result, "ArrowRight", ArrowRight, {})} </div>`} </div> </div> </div> </a>`;
}, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/components/ui/cards/ProjectCard.astro", "self");

export { $$ProjectCard as $ };

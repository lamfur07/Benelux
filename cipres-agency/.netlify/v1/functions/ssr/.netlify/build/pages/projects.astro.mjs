import { c as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CTr1BA6W.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_8Oa4-YLJ.mjs';
import { $ as $$Layout, t } from '../chunks/Layout_gfwsFi8H.mjs';
import { $ as $$ProjectCard } from '../chunks/ProjectCard_BzVGPAnx.mjs';
import { $ as $$CTABanner } from '../chunks/CTABanner_Cbhfdl8w.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects");
  const projectFilter = projects.sort((a, b) => b.data.yearFinished - a.data.yearFinished);
  const [featuredProject, ...otherProjects] = projectFilter;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("meta.projects.title"), "description": t("meta.projects.description"), "keywords": t("meta.projects.keywords") }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 py-28"> <div class="mx-auto max-w-7xl"> <h1 class="font-anton-sc text-accent mb-12 text-5xl md:text-6xl lg:text-7xl"> ${t("projects.title")} </h1> ${featuredProject && renderTemplate`<div class="mb-8"> ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "id": featuredProject.id, "title": featuredProject.data.title, "category": featuredProject.data.category, "image": featuredProject.data.image, "variant": "featured" })} </div>`} <div class="grid gap-8 md:grid-cols-2"> ${otherProjects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "id": project.id, "title": project.data.title, "category": project.data.category, "image": project.data.image })}`)} </div> </div> </section> ${renderComponent($$result2, "CTABanner", $$CTABanner, {})} ` })}`;
}, "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/uzair/OneDrive/Desktop/TNI/Website/cipres-web-agency/cipres-agency/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

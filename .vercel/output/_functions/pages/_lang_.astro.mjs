import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dbtk8NeX.mjs';
import { l as languages, $ as $$Layout, a as $$Header, b as $$Hero, c as $$Countdown, d as $$ParallaxSection, e as $$FAQ, f as $$Footer } from '../chunks/Footer_C-0V7kiD.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  if (!lang || !Object.keys(languages).includes(lang)) {
    return Astro2.redirect("/es/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Un Sue\xF1o Moderno - Marina & Oswald" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="flex flex-col min-h-screen w-full pt-16"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Countdown", $$Countdown, {})} ${renderComponent($$result2, "ParallaxSection", $$ParallaxSection, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "D:/wedding-landing/src/pages/[lang]/index.astro", void 0);

const $$file = "D:/wedding-landing/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_Dbtk8NeX.mjs';
import { $ as $$Layout, a as $$Header, b as $$Hero, c as $$Countdown, d as $$ParallaxSection, e as $$FAQ, f as $$Footer } from './Footer_C-0V7kiD.mjs';

const $$Astro = createAstro();
const $$MainPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainPage;
  const { lang } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Un Sue\xF1o Moderno - Marina & Oswald" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="flex flex-col min-h-screen w-full pt-16"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Countdown", $$Countdown, {})} ${renderComponent($$result2, "ParallaxSection", $$ParallaxSection, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "D:/wedding-landing/src/components/MainPage.astro", void 0);

export { $$MainPage as $ };

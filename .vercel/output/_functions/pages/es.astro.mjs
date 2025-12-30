import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_Dbtk8NeX.mjs';
import { $ as $$MainPage } from '../chunks/MainPage_DSSF257T.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainPage", $$MainPage, { "lang": "es" })}`;
}, "D:/wedding-landing/src/pages/es/index.astro", void 0);

const $$file = "D:/wedding-landing/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

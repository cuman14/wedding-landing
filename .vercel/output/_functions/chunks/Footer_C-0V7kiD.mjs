import { e as createComponent, f as createAstro, h as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate, m as maybeRenderHead, o as renderScript, k as renderComponent, u as unescapeHTML } from './astro/server_Dbtk8NeX.mjs';
/* empty css                         */

const languages = {
  es: "Español",
  en: "English"
};
const defaultLang = "es";
const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.countdown": "Momento",
    "nav.details": "Detalles",
    "nav.confirm": "Confirmar",
    "hero.subtitle": "Un Amor Moderno",
    "hero.title_connector": "&",
    "hero.slogan": "¡Nuestro sueño, vuestra compañía!",
    "hero.sub_slogan": "Enlazando almas por siempre",
    "hero.location": "Lago de Como, Italia",
    "hero.story": "Nuestra historia de amor",
    "countdown.date": "10 de Octubre de 2026",
    "countdown.title": "El Mágico Inicio de un Para Siempre",
    "countdown.text": "Contamos los latidos hasta nuestro día. Únete a la celebración de un amor que trasciende.",
    "countdown.days": "Días",
    "countdown.hours": "Horas",
    "countdown.minutes": "Minutos",
    "countdown.seconds": "Segundos",
    "countdown.saveDate": "Guardar la Fecha",
    "parallax.title": "Un fin de semana de ensueño",
    "parallax.text": "Hemos orquestado una celebración mágica y deseamos compartir cada instante con nuestros seres más queridos.",
    "faq.subtitle": "Vuestra guía moderna",
    "faq.title": "Detalles de la Celebración",
    "faq.intro": "Respuestas a vuestras preguntas, para que la magia fluya sin preocupaciones.",
    "faq.venue": "Villa del Balbianello",
    "faq.address": "Via Guido Monzino, 1",
    "faq.q1": "¿Dónde se encuentra este paraíso?",
    "faq.a1": "La ceremonia y la celebración se desplegarán en la majestuosa <strong>Villa del Balbianello</strong> en Lenno, Lago de Como. Habrá barcos que os transportarán desde el muelle principal de Lenno a partir de las 3:00 PM. Vuestra puntualidad es esencial, ya que el barco es la única vía a la villa.",
    "faq.q2": "¿Dónde podemos soñar mientras dura la magia?",
    "faq.a2": 'Hemos reservado un número de habitaciones en el <strong>Grand Hotel Tremezzo</strong> y <strong>Albergo Lenno</strong>. Mencionad la "Boda de Marina & Oswald" para acceder a una tarifa especial. También encontraréis encantadores Airbnbs en Lenno y Tremezzo para una experiencia más íntima.',
    "faq.guide_link": "Guía de Alojamiento",
    "faq.q3": "¿Cuándo comienza este cuento de hadas?",
    "faq.a3": "Los barcos zarparán a las **3:00 PM**. Un cóctel de bienvenida os espera a las 3:30 PM en la logia de la Villa, seguido por la ceremonia en el jardín puntualmente a las **4:30 PM**. Recomendamos llegar al muelle de Lenno antes de las 2:45 PM.",
    "faq.q4": "¿Cuál es el atuendo para la ocasión?",
    "faq.a4": "El código es <strong>Etiqueta Rigurosa Opcional (Black Tie Optional)</strong>. Sugerimos esmoquin o traje oscuro para caballeros, y vestidos largos o cóctel elegantes para las damas. La ceremonia será al aire libre sobre césped, así que elegid vuestro calzado con la magia en mente.",
    "footer.msg": "¡No podemos esperar a veros ahí, amados!",
    "footer.links.confirm": "Confirmar",
    "footer.links.gifts": "Regalos",
    "footer.links.contact": "Contacto",
    "footer.copyright": "© 2026 Marina & Oswald. Creado con amor."
  },
  en: {
    "nav.home": "Home",
    "nav.countdown": "Moment",
    "nav.details": "Details",
    "nav.confirm": "RSVP",
    "hero.subtitle": "A Modern Love",
    "hero.title_connector": "&",
    "hero.slogan": "Our dream, your company!",
    "hero.sub_slogan": "Binding souls forever",
    "hero.location": "Lake Como, Italy",
    "hero.story": "Our love story",
    "countdown.date": "October 10, 2026",
    "countdown.title": "The Magical Beginning of Forever",
    "countdown.text": "We count the heartbeats until our day. Join the celebration of a love that transcends.",
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Minutes",
    "countdown.seconds": "Seconds",
    "countdown.saveDate": "Save the Date",
    "parallax.title": "A Dream Weekend",
    "parallax.text": "We have orchestrated a magical celebration and wish to share every moment with our dearest ones.",
    "faq.subtitle": "Your Modern Guide",
    "faq.title": "Celebration Details",
    "faq.intro": "Answers to your questions, so the magic flows without worry.",
    "faq.venue": "Villa del Balbianello",
    "faq.address": "Via Guido Monzino, 1",
    "faq.q1": "Where is this paradise located?",
    "faq.a1": "The ceremony and celebration will unfold at the majestic <strong>Villa del Balbianello</strong> in Lenno, Lake Como. Boats will transport you from the main Lenno pier starting at 3:00 PM. Your punctuality is essential, as the boat is the only way to the villa.",
    "faq.q2": "Where can we dream while the magic lasts?",
    "faq.a2": 'We have reserved a number of rooms at the <strong>Grand Hotel Tremezzo</strong> and <strong>Albergo Lenno</strong>. Mention the "Marina & Oswald Wedding" to access a special rate. You will also find charming Airbnbs in Lenno and Tremezzo for a more intimate experience.',
    "faq.guide_link": "Accommodation Guide",
    "faq.q3": "When does this fairytale begin?",
    "faq.a3": "Boats will set sail at **3:00 PM**. A welcome cocktail awaits you at 3:30 PM in the Villa loggia, followed by the ceremony in the garden promptly at **4:30 PM**. We recommend arriving at the Lenno pier before 2:45 PM.",
    "faq.q4": "What is the attire for the occasion?",
    "faq.a4": "The dress code is <strong>Black Tie Optional</strong>. We suggest tuxedos or dark suits for gentlemen, and elegant long or cocktail dresses for ladies. The ceremony will be outdoors on grass, so choose your footwear with magic in mind.",
    "footer.msg": "We can't wait to see you there, beloved!",
    "footer.links.confirm": "RSVP",
    "footer.links.gifts": "Gifts",
    "footer.links.contact": "Contact",
    "footer.copyright": "© 2026 Marina & Oswald. Created with love."
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

const $$Astro$7 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`<html${addAttribute(lang, "lang")} class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Google Fonts CDN fallback/alternative if explicit local control needed or strictly matching prototype --><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">${renderHead()}</head> <body class="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark font-body transition-colors duration-200"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/wedding-landing/src/layouts/Layout.astro", void 0);

const $$Astro$6 = createAstro();
const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MobileMenu;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div id="mobile-menu" class="fixed inset-0 z-40 bg-background-light dark:bg-background-dark transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center gap-8"> <button id="close-menu" class="absolute top-6 right-6 p-2 text-primary focus-visible:ring-2 focus-visible:ring-primary rounded-full" aria-label="Cerrar menú"> <span class="material-symbols-outlined text-3xl" aria-hidden="true">close</span> </button> <nav class="flex flex-col items-center gap-6"> <a class="text-2xl font-body font-medium hover:text-primary transition-colors mobile-link" href="#hero">${t("nav.home")}</a> <a class="text-2xl font-body font-medium hover:text-primary transition-colors mobile-link" href="#countdown">${t("nav.countdown")}</a> <a class="text-2xl font-body font-medium hover:text-primary transition-colors mobile-link" href="#faq">${t("nav.details")}</a> </nav> <button class="mt-4 flex min-w-30 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark text-white text-lg font-bold transition-colors shadow-lg shadow-primary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"${addAttribute(t("nav.confirm"), "aria-label")}> <span class="truncate">${t("nav.confirm")}</span> </button> </div> ${renderScript($$result, "D:/wedding-landing/src/components/MobileMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/wedding-landing/src/components/MobileMenu.astro", void 0);

const $$Astro$5 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-pearl-grey dark:border-white/10 transition-all duration-300"> <div class="px-4 lg:px-40 flex justify-center py-0"> <div class="flex flex-col max-w-[1200px] flex-1"> <div class="flex items-center justify-between whitespace-nowrap px-4 lg:px-10 py-4"> <div class="flex items-center gap-4"> <div class="size-6 text-primary"> <span class="material-symbols-outlined">favorite</span> </div> <h2 class="text-xl font-display font-medium leading-tight tracking-normal">Marina & Oswald</h2> </div> <nav class="hidden md:flex flex-1 justify-end gap-8 items-center"> <div class="flex items-center gap-9"> <a class="text-sm font-body font-normal hover:text-primary transition-colors" href="#hero">${t("nav.home")}</a> <a class="text-sm font-body font-normal hover:text-primary transition-colors" href="#countdown">${t("nav.countdown")}</a> <a class="text-sm font-body font-normal hover:text-primary transition-colors" href="#faq">${t("nav.details")}</a> </div> <!-- Language Switcher --> <div class="flex items-center gap-2 border-l border-pearl-grey dark:border-white/10 pl-4 h-6"> ${Object.entries(languages).map(([l, label]) => renderTemplate`<a${addAttribute(`/${l}/`, "href")}${addAttribute(`text-xs uppercase font-bold transition-colors ${lang === l ? "text-primary" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"}`, "class")}${addAttribute(`Switch to ${label}`, "aria-label")}> ${l} </a>`)} </div> <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-primary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"${addAttribute(t("nav.confirm"), "aria-label")}> <span class="truncate">${t("nav.confirm")}</span> </button> </nav> <div class="flex items-center gap-4 md:hidden"> <!-- Mobile Language Switcher --> <nav class="flex gap-2" aria-label="Language selection"> ${Object.entries(languages).map(([l, label]) => renderTemplate`<a${addAttribute(`/${l}/`, "href")}${addAttribute(`text-xs uppercase font-bold transition-colors ${lang === l ? "text-primary" : "text-gray-500"}`, "class")}${addAttribute(`Switch to ${label}`, "aria-label")}${addAttribute(lang === l ? "page" : void 0, "aria-current")}> ${l} </a>`)} </nav> <button id="open-menu" class="p-2 text-text-main-light dark:text-text-main-dark focus-visible:ring-2 focus-visible:ring-primary rounded-md" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu"> <span class="material-symbols-outlined" aria-hidden="true">menu</span> </button> </div> </div> </div> </div> </header> ${renderComponent($$result, "MobileMenu", $$MobileMenu, {})} ${renderScript($$result, "D:/wedding-landing/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/wedding-landing/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative w-full h-[85vh] overflow-hidden flex items-center justify-center bg-gray-900 group"> <div class="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRYrcZGjcjoLvdvJTeXjkklYqc_OknCoV0qi6-a1HquRriHQeGZ5syH6D5znfwdD2AV9OXRg9_l2c-pjUsrwj5wxdpeqrai1sBpj9yabOfCvc6ESE_7_hLHQrQYMCNOYVt2TmKBxdY7Cd5p5xHwUWhYggPRpE-J6pEfJFWHnWQLU6xPr2_Yq8G75JhDXjb5goBVbbRK88_LVYfXdIeRobLnHzBgRm_mrKsrEOYGsAD8bQt2d3AdJQIxH_F_LIlghg7cV4RikVkoQM');" role="img" aria-label="Paisaje romántico de Lago de Como al atardecer"> <div class="absolute inset-0 bg-black/20 dark:bg-black/40 bg-linear-to-t from-black/10 to-transparent"></div> </div> <div class="relative z-10 text-center px-4 max-w-4xl mx-auto text-white flex flex-col items-center gap-6 animate-fade-in-up"> <div class="uppercase tracking-[0.2em] text-sm font-body font-light text-white/90 mb-2">${t("hero.subtitle")}</div> <h1 class="text-6xl md:text-7xl lg:text-8xl font-display font-normal tracking-tight leading-tight">
Marina <span class="text-primary-light font-display mx-2">${t("hero.title_connector")}</span> Oswald
</h1> <p class="text-xl md:text-2xl font-body font-medium text-primary-light mt-2 tracking-wide drop-shadow-lg"> ${t("hero.slogan")} </p> <p class="text-lg md:text-xl font-body font-light text-white/90 mt-2 tracking-wide"> ${t("hero.sub_slogan")} </p> <div class="mt-8 flex items-center gap-2 text-white/80 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20"> <span class="material-symbols-outlined text-sm">location_on</span> <span class="text-sm font-body font-light tracking-wide">${t("hero.location")}</span> </div> <div class="mt-8"> <button class="flex items-center justify-center rounded-full size-16 bg-white/20 hover:bg-primary/80 backdrop-blur-md text-white transition-all duration-300 group-hover:scale-110 cursor-pointer focus-visible:ring-4 focus-visible:ring-primary"${addAttribute(t("hero.story"), "aria-label")}> <span class="material-symbols-outlined text-[32px]! ml-1" aria-hidden="true">play_arrow</span> </button> <p class="mt-3 text-xs tracking-widest uppercase opacity-70 font-body">${t("hero.story")}</p> </div> </div> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50"> <span class="material-symbols-outlined">keyboard_arrow_down</span> </div> </section>`;
}, "D:/wedding-landing/src/components/Hero.astro", void 0);

const $$Astro$3 = createAstro();
const $$Countdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Countdown;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const weddingDate = /* @__PURE__ */ new Date("2026-10-10T16:30:00");
  const formattedDate = new Intl.DateTimeFormat(lang, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(weddingDate);
  return renderTemplate`${maybeRenderHead()}<section id="countdown" class="py-24 px-4 md:px-10 lg:px-40 bg-secondary-mint dark:bg-background-dark"> <div class="max-w-240 mx-auto flex flex-col items-center gap-12"> <div class="text-center space-y-4"> <div class="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-bold uppercase tracking-wider mb-2"> ${formattedDate} </div> <h2 class="text-4xl md:text-5xl font-body text-text-main-light dark:text-text-main-dark tracking-tight font-semibold"> ${t("countdown.title")} </h2> <p class="text-gray-600 dark:text-gray-400 max-w-lg mx-auto font-body font-light leading-relaxed"> ${t("countdown.text")} </p> </div> <div class="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center" id="countdown-timer"${addAttribute(weddingDate.toISOString(), "data-date")} aria-live="polite" aria-atomic="true"> <div class="flex flex-col items-center gap-3 p-6 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-pearl-grey dark:border-white/5"> <span class="text-4xl md:text-5xl font-body font-light text-text-main-light dark:text-text-main-dark tabular-nums" data-type="days">00</span> <span class="text-xs uppercase tracking-[0.15em] text-gray-500 font-body">${t("countdown.days")}</span> </div> <div class="flex flex-col items-center gap-3 p-6 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-pearl-grey dark:border-white/5"> <span class="text-4xl md:text-5xl font-body font-light text-text-main-light dark:text-text-main-dark tabular-nums" data-type="hours">00</span> <span class="text-xs uppercase tracking-[0.15em] text-gray-500 font-body">${t("countdown.hours")}</span> </div> <div class="flex flex-col items-center gap-3 p-6 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-pearl-grey dark:border-white/5"> <span class="text-4xl md:text-5xl font-body font-light text-text-main-light dark:text-text-main-dark tabular-nums" data-type="minutes">00</span> <span class="text-xs uppercase tracking-[0.15em] text-gray-500 font-body">${t("countdown.minutes")}</span> </div> <div class="flex flex-col items-center gap-3 p-6 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-pearl-grey dark:border-white/5 relative overflow-hidden group"> <div class="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -mr-8 -mt-8"></div> <span class="text-4xl md:text-5xl font-body font-medium text-primary tabular-nums" data-type="seconds">00</span> <span class="text-xs uppercase tracking-[0.15em] text-gray-500 font-body">${t("countdown.seconds")}</span> </div> </div> <div class="mt-4"> <button class="flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 font-body cursor-pointer"> <span class="material-symbols-outlined">calendar_month</span> <span>${t("countdown.saveDate")}</span> </button> </div> </div> </section> ${renderScript($$result, "D:/wedding-landing/src/components/Countdown.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/wedding-landing/src/components/Countdown.astro", void 0);

const $$Astro$2 = createAstro();
const $$ParallaxSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ParallaxSection;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="w-full h-[400px] md:h-[500px] bg-fixed bg-cover bg-center relative" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUrsVtV4TzQ7ZrojdTSlA2eKFUK76YppdhOWupyN5VvMUrjHHOAloQmePi-EK_gKGPwpcY1M-a6e7XCBiI_a6FOy9exixyodx-DSBgLfQfd-EuFlrFY3FmXBfFRD-L2co7beslWs88FgLJIgejaQJqt75C4IKwrauUa8V5w28QsPBkpRVPaMyrmx3YxDDApDhv4RxMg9ydueTQvDXhi49v92l-zRh0vTnHoHOcMI2iQpDkntwvzgjzQeG3NJJ29s5DLrmsG5ZCFG4');"> <div class="absolute inset-0 bg-black/20 dark:bg-black/40 flex items-center justify-center"> <div class="bg-white/90 dark:bg-background-dark/90 backdrop-blur p-8 md:p-12 max-w-lg text-center rounded-lg mx-4 border border-pearl-grey dark:border-white/10 shadow-lg"> <h3 class="text-3xl font-body font-semibold mb-4 text-text-main-light dark:text-text-main-dark"> ${t("parallax.title")} </h3> <p class="text-gray-600 dark:text-gray-300 leading-relaxed font-body font-light"> ${t("parallax.text")} </p> </div> </div> </section>`;
}, "D:/wedding-landing/src/components/ParallaxSection.astro", void 0);

const $$Astro$1 = createAstro();
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FAQ;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section id="faq" class="py-24 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark" data-astro-cid-al2ca2vr> <div class="max-w-240 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16" data-astro-cid-al2ca2vr> <div class="flex flex-col gap-4" data-astro-cid-al2ca2vr> <span class="text-primary font-body font-medium uppercase tracking-widest text-sm" data-astro-cid-al2ca2vr>${t("faq.subtitle")}</span> <h2 class="text-4xl font-body font-semibold leading-tight text-text-main-light dark:text-text-main-dark" data-astro-cid-al2ca2vr> ${t("faq.title")} </h2> <p class="text-gray-600 dark:text-gray-400 mt-2 font-body font-light leading-relaxed" data-astro-cid-al2ca2vr> ${t("faq.intro")} </p> <div class="mt-8" data-astro-cid-al2ca2vr> <div class="w-full aspect-square rounded-xl bg-secondary-mint dark:bg-gray-800 overflow-hidden relative border border-pearl-grey dark:border-white/10" data-astro-cid-al2ca2vr> <img alt="Mapa indicando la ubicación de Villa del Balbianello en el Lago de Como" class="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnNysRRhE8mk_tKdgAC5iqBOJKoL8tUlZKe-Zc1mYkpoZ5EaCQoYH_ZcKsrpgtROLyoooCzb6lJYRpA05_hA2mgaEUFYnc_BaJy0FQd5JvChHfRfK0PiLYjjhmewnbkWTuk_wIyYOmdMiG9ZqXgU7bT4fgBHgq3kvhsI7YjRZlCC9zVOKVRSRyxHGKsZVYgtw_gqzhSxleawoT1iAZq-lyL6ZT_rcCE7OjRRPZyaFH_Othi5D7ENBZSy2thMoz-cJcNKzIqriv1AI" data-astro-cid-al2ca2vr> <div class="absolute bottom-4 left-4 bg-white dark:bg-gray-900 p-3 rounded-lg shadow-md flex items-center gap-3 border border-pearl-grey dark:border-white/10" data-astro-cid-al2ca2vr> <span class="material-symbols-outlined text-primary" data-astro-cid-al2ca2vr>location_on</span> <div data-astro-cid-al2ca2vr> <p class="text-xs font-bold text-gray-900 dark:text-white font-body" data-astro-cid-al2ca2vr>${t("faq.venue")}</p> <p class="text-[10px] text-gray-500 font-body" data-astro-cid-al2ca2vr>${t("faq.address")}</p> </div> </div> </div> </div> </div> <div class="flex flex-col gap-6" data-astro-cid-al2ca2vr> <div class="group border-b border-pearl-grey dark:border-white/10 pb-6" data-astro-cid-al2ca2vr> <details class="group" data-astro-cid-al2ca2vr> <summary class="flex items-center justify-between cursor-pointer list-none py-2 text-xl font-body font-medium text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors" data-astro-cid-al2ca2vr> <span data-astro-cid-al2ca2vr>${t("faq.q1")}</span> <span class="transition-transform duration-300 group-open:rotate-180" data-astro-cid-al2ca2vr> <span class="material-symbols-outlined" data-astro-cid-al2ca2vr>expand_more</span> </span> </summary> <div class="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed animate-fade-in font-body font-light" data-astro-cid-al2ca2vr>${unescapeHTML(t("faq.a1"))}</div> </details> </div> <div class="group border-b border-pearl-grey dark:border-white/10 pb-6" data-astro-cid-al2ca2vr> <details class="group" data-astro-cid-al2ca2vr> <summary class="flex items-center justify-between cursor-pointer list-none py-2 text-xl font-body font-medium text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors" data-astro-cid-al2ca2vr> <span data-astro-cid-al2ca2vr>${t("faq.q2")}</span> <span class="transition-transform duration-300 group-open:rotate-180" data-astro-cid-al2ca2vr> <span class="material-symbols-outlined" data-astro-cid-al2ca2vr>expand_more</span> </span> </summary> <div class="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed animate-fade-in font-body font-light" data-astro-cid-al2ca2vr> <span data-astro-cid-al2ca2vr>${unescapeHTML(t("faq.a2"))}</span> <br data-astro-cid-al2ca2vr><br data-astro-cid-al2ca2vr> <a class="text-primary font-bold hover:underline inline-flex items-center gap-1 font-body" href="#" data-astro-cid-al2ca2vr> ${t("faq.guide_link")} <span class="material-symbols-outlined text-sm" data-astro-cid-al2ca2vr>arrow_outward</span> </a> </div> </details> </div> <div class="group border-b border-pearl-grey dark:border-white/10 pb-6" data-astro-cid-al2ca2vr> <details class="group" data-astro-cid-al2ca2vr> <summary class="flex items-center justify-between cursor-pointer list-none py-2 text-xl font-body font-medium text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors" data-astro-cid-al2ca2vr> <span data-astro-cid-al2ca2vr>${t("faq.q3")}</span> <span class="transition-transform duration-300 group-open:rotate-180" data-astro-cid-al2ca2vr> <span class="material-symbols-outlined" data-astro-cid-al2ca2vr>expand_more</span> </span> </summary> <div class="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed animate-fade-in font-body font-light" data-astro-cid-al2ca2vr>${unescapeHTML(t("faq.a3"))}</div> </details> </div> <div class="group border-b border-pearl-grey dark:border-white/10 pb-6" data-astro-cid-al2ca2vr> <details class="group" data-astro-cid-al2ca2vr> <summary class="flex items-center justify-between cursor-pointer list-none py-2 text-xl font-body font-medium text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors" data-astro-cid-al2ca2vr> <span data-astro-cid-al2ca2vr>${t("faq.q4")}</span> <span class="transition-transform duration-300 group-open:rotate-180" data-astro-cid-al2ca2vr> <span class="material-symbols-outlined" data-astro-cid-al2ca2vr>expand_more</span> </span> </summary> <div class="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed animate-fade-in font-body font-light" data-astro-cid-al2ca2vr>${unescapeHTML(t("faq.a4"))}</div> </details> </div> </div> </div> </section> `;
}, "D:/wedding-landing/src/components/FAQ.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<footer class="bg-secondary-mint dark:bg-background-dark py-12 border-t border-pearl-grey dark:border-white/5"> <div class="max-w-240 mx-auto px-4 md:px-10 flex flex-col items-center text-center gap-8"> <div class="size-8 text-primary"> <span class="material-symbols-outlined text-3xl!">favorite</span> </div> <h3 class="text-3xl font-body font-semibold text-text-main-light dark:text-text-main-dark"> ${t("footer.msg")} </h3> <nav class="flex gap-6 text-sm font-body font-normal text-gray-600 dark:text-gray-400" aria-label="Enlaces secundarios"> <a class="hover:text-primary transition-colors focus-visible:underline decoration-primary underline-offset-4" href="#">${t("footer.links.confirm")}</a> <a class="hover:text-primary transition-colors focus-visible:underline decoration-primary underline-offset-4" href="#">${t("footer.links.gifts")}</a> <a class="hover:text-primary transition-colors focus-visible:underline decoration-primary underline-offset-4" href="#">${t("footer.links.contact")}</a> </nav> <p class="text-xs text-gray-500 mt-4 font-body">${t("footer.copyright")}</p> </div> </footer>`;
}, "D:/wedding-landing/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Header as a, $$Hero as b, $$Countdown as c, $$ParallaxSection as d, $$FAQ as e, $$Footer as f, languages as l };

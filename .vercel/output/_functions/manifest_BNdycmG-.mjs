import { p as decodeKey } from './chunks/astro/server_Dbtk8NeX.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_F-ZiesMk.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/wedding-landing/","cacheDir":"file:///D:/wedding-landing/node_modules/.astro/","outDir":"file:///D:/wedding-landing/dist/","srcDir":"file:///D:/wedding-landing/src/","publicDir":"file:///D:/wedding-landing/public/","buildClientDir":"file:///D:/wedding-landing/dist/client/","buildServerDir":"file:///D:/wedding-landing/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_rollup@4.54.0_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.DKFNucqA.css"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.DKFNucqA.css"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.DKFNucqA.css"}],"routeData":{"route":"/[lang]","isIndex":true,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}]],"params":["lang"],"component":"src/pages/[lang]/index.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"fallback","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/wedding-landing/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["D:/wedding-landing/src/pages/es/index.astro",{"propagation":"none","containsHead":true}],["D:/wedding-landing/src/pages/[lang]/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:src/pages/[lang]/index@_@astro":"pages/_lang_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_rollup@4.54.0_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BNdycmG-.mjs","D:/wedding-landing/node_modules/.pnpm/astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_rollup@4.54.0_typescript@5.9.3/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DnJ9hzw9.mjs","D:/wedding-landing/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.CeRQCUwk.js","D:/wedding-landing/src/components/Countdown.astro?astro&type=script&index=0&lang.ts":"_astro/Countdown.astro_astro_type_script_index_0_lang.D_zOo5Jx.js","D:/wedding-landing/src/components/MobileMenu.astro?astro&type=script&index=0&lang.ts":"_astro/MobileMenu.astro_astro_type_script_index_0_lang.CwxpTbYI.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/wedding-landing/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"open-menu\");e?.addEventListener(\"click\",()=>{document.dispatchEvent(new CustomEvent(\"open-mobile-menu\"))});"],["D:/wedding-landing/src/components/Countdown.astro?astro&type=script&index=0&lang.ts","function n(){const e=document.getElementById(\"countdown-timer\");if(!e)return;const s=new Date(e.dataset.date).getTime(),a=new Date().getTime(),o=s-a,r=Math.floor(o/(1e3*60*60*24)),c=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),d=Math.floor(o%(1e3*60*60)/(1e3*60)),i=Math.floor(o%(1e3*60)/1e3),t={days:e.querySelector('[data-type=\"days\"]'),hours:e.querySelector('[data-type=\"hours\"]'),minutes:e.querySelector('[data-type=\"minutes\"]'),seconds:e.querySelector('[data-type=\"seconds\"]')};t.days&&(t.days.textContent=r.toString()),t.hours&&(t.hours.textContent=c.toString()),t.minutes&&(t.minutes.textContent=d.toString()),t.seconds&&(t.seconds.textContent=i.toString())}setInterval(n,1e3);n();"],["D:/wedding-landing/src/components/MobileMenu.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"mobile-menu\"),l=document.getElementById(\"close-menu\"),c=document.querySelectorAll(\".mobile-link\");function n(){e?.classList.add(\"translate-x-full\")}l?.addEventListener(\"click\",n);c.forEach(t=>{t.addEventListener(\"click\",n)});document.addEventListener(\"open-mobile-menu\",()=>{e?.classList.remove(\"translate-x-full\")});"]],"assets":["/_astro/poppins-devanagari-200-normal.Cd2cBuw-.woff2","/_astro/poppins-latin-ext-200-normal.C8LeRBwY.woff2","/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/poppins-latin-200-normal.B8tqA5oA.woff2","/_astro/poppins-latin-ext-300-normal.Cirz0Guu.woff2","/_astro/poppins-devanagari-400-normal.CJDn6rn8.woff2","/_astro/poppins-latin-ext-400-normal.by3JarPu.woff2","/_astro/poppins-devanagari-300-normal.D7nrgzLr.woff2","/_astro/poppins-latin-300-normal.Dku2WoCh.woff2","/_astro/poppins-devanagari-600-normal.STEjXBNN.woff2","/_astro/poppins-latin-600-normal.zEkxB9Mr.woff2","/_astro/poppins-latin-ext-600-normal.CAhIAdZj.woff2","/_astro/poppins-devanagari-500-normal.BIdkeU1p.woff2","/_astro/poppins-latin-500-normal.C8OXljZJ.woff2","/_astro/poppins-latin-ext-500-normal.CK-6C4Hw.woff2","/_astro/great-vibes-cyrillic-400-normal.C-wcqNJs.woff2","/_astro/great-vibes-cyrillic-ext-400-normal.CKQhgFwn.woff2","/_astro/great-vibes-latin-ext-400-normal.CsjMq8GN.woff2","/_astro/poppins-devanagari-700-normal.O-jipLrW.woff2","/_astro/great-vibes-vietnamese-400-normal.a2O3jU53.woff2","/_astro/poppins-latin-ext-700-normal.cby-RkWa.woff2","/_astro/great-vibes-latin-400-normal.q5-78SH_.woff2","/_astro/poppins-latin-700-normal.Qrb0O0WB.woff2","/_astro/poppins-latin-ext-200-normal.BnXTLz5G.woff","/_astro/poppins-devanagari-200-normal.xi-_ae4H.woff","/_astro/poppins-latin-400-normal.BOb3E3N0.woff","/_astro/poppins-latin-200-normal.BxK-3Qw6.woff","/_astro/poppins-latin-ext-400-normal.DaBSavcJ.woff","/_astro/poppins-latin-300-normal.DCNuMXUj.woff","/_astro/poppins-latin-ext-300-normal.nf6F73WS.woff","/_astro/poppins-devanagari-400-normal.CqVvlrh5.woff","/_astro/poppins-devanagari-600-normal.ClASKHrr.woff","/_astro/poppins-latin-600-normal.BJdTmd5m.woff","/_astro/poppins-latin-ext-600-normal.Df5ffKXP.woff","/_astro/poppins-devanagari-300-normal.5EpgE5P1.woff","/_astro/poppins-devanagari-500-normal.DMPDjHtT.woff","/_astro/poppins-latin-500-normal.DGXqpDMm.woff","/_astro/poppins-latin-ext-500-normal.CgAe2rWW.woff","/_astro/great-vibes-cyrillic-400-normal.DtFXCWjq.woff","/_astro/great-vibes-latin-ext-400-normal.wh4xxCIu.woff","/_astro/poppins-devanagari-700-normal.fHs-vx92.woff","/_astro/great-vibes-vietnamese-400-normal.Cxbm9Uac.woff","/_astro/poppins-latin-ext-700-normal.DctTR6Tg.woff","/_astro/great-vibes-latin-400-normal.BAZ173uY.woff","/_astro/poppins-latin-700-normal.BVuQR_eA.woff","/_astro/index.DKFNucqA.css","/favicon.svg"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-always","locales":["es","en"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"5eMjzx2r07aFOuxpt87L2KWd+ZH1yky8vCLHQrfyP7E="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

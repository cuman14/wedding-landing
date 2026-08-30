import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname === "/megustariaque/alberto") {
    return context.rewrite(new URL("/es/megustariaque/alberto", context.url));
  }

  if (context.url.pathname.startsWith("/bodegon/")) {
    return context.rewrite(new URL(`/es${context.url.pathname}`, context.url));
  }

  return next();
});

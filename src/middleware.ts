import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname === "/megustariaque/alberto") {
    return context.rewrite(new URL("/es/megustariaque/alberto", context.url));
  }

  return next();
});

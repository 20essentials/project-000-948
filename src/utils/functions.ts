export const $ = (el: string) => document.querySelector(el);
export const $$ = (el: string) => document.querySelectorAll(el);

export function baseUrl(path: string) {
  // Evita que "/algo" sobrescriba el subpath de import.meta.env.SITE
  return new URL(path.replace(/^\/+/, ""), import.meta.env.SITE).toString();
}
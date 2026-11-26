import { site } from "./site";

export default function sitemap() {
  return [{ url: new URL("/", site.url).href }];
}

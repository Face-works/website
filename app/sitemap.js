import { site } from "./site";

export default function sitemap() {
  return ["/", "/contact"].map((path) => ({ url: new URL(path, site.url).href }));
}

import "./globals.css";
import { site } from "./site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  icons: { icon: site.logo },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: site.logo, alt: "Faceworks logo" }],
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
    images: [{ url: site.logo, alt: "Faceworks logo" }],
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}

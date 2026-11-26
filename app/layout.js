import Image from "next/image";
import Link from "next/link";
import face from "../public/face.png";
import { site } from "./site";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: "%s | Faceworks" },
  description: site.description,
  alternates: { canonical: "/" },
  icons: { icon: site.logo },
  openGraph: site.share,
  twitter: site.twitter,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <a className="skip-link" href="#main">Skip to content</a>
          <header className="topbar">
            <Link className="brand" href="/">
              <Image src={face} width={28} height={28} alt="" />
              <span>faceworks</span>
            </Link>
            <nav aria-label="Main navigation">
              <Link href="/#projects">Projects</Link>
              <Link href="/contact">Contact</Link>
              <a href={site.github}>GitHub <span aria-hidden="true">↗</span></a>
            </nav>
          </header>
          {children}
          <footer>
            <Link className="brand" href="/">
              <Image src={face} width={23} height={23} alt="" /> Faceworks
            </Link>
            <div className="footer-links">
              <Link href="/contact">Contact</Link>
              <a href={site.github}>GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

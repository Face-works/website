import { site } from "../site";
import { DiscordHandle } from "./discord-handle";

const description = "Contact Faceworks by email or GitHub, or find our CEO on Discord.";

export const metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { ...site.share, url: "/contact", description },
  twitter: { ...site.twitter, description },
};

export default function Contact() {
  return (
    <main id="main" className="contact section-spacing">
      <div className="contact-intro enter">
        <h1>Contact<span>.</span></h1>
        <p>Reach out about Faceworks, our projects, or working together.</p>
      </div>
      <div className="contact-grid">
        <section className="contact-card enter">
          <h2>Email</h2>
          <p>For general questions and partnerships.</p>
          <a className="contact-action" href={`mailto:${site.email}`}>{site.email} <span aria-hidden="true">↗</span></a>
        </section>
        <section className="contact-card enter">
          <h2>GitHub</h2>
          <p>Browse Faceworks repositories and follow project updates.</p>
          <a className="contact-action" href={site.github}>Face-works <span aria-hidden="true">↗</span></a>
        </section>
        <section className="contact-card enter">
          <h2>Discord</h2>
          <p>Find the Faceworks CEO on Discord.</p>
          <DiscordHandle handle={site.ceoDiscord} />
        </section>
      </div>
    </main>
  );
}

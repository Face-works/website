import Image from "next/image";
import face from "../public/face.png";

const github = "https://github.com/Face-works";
const email = "mailto:contact@faceworks.dev";
const nativium = {
  github: "https://github.com/Face-works/nativium",
  download: "https://nativium.faceworks.dev",
  technologies: ["WinUI", "WebKit", "GTK", "Qt"],
};

export default function Home() {
  return (
    <div className="shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="topbar">
        <a className="brand" href="#">
          <Image src={face} width={28} height={28} alt="" />
          <span>faceworks</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href={github}>GitHub <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">We are<br /><span>Faceworks.</span></h1>
            <p>Desktop software that feels at home on your system.</p>
            <div className="actions">
              <a className="button primary" href="#projects">Explore projects <span aria-hidden="true">↓</span></a>
              <a className="button" href={github}>GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit"><div className="orbit-inner" /></div>
            <Image className="mascot" src={face} width={256} height={256} alt="" preload />
          </div>
        </section>

        <section id="projects" className="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <article className="project" aria-labelledby="nativium-title">
            <div className="project-intro">
              <div>
                <h3 id="nativium-title">Nativium</h3>
                <p>A degoogled Chromium browser with an interface designed to feel at home on your desktop.</p>
                <div className="actions">
                  <a className="button primary" href={nativium.download}>Download <span aria-hidden="true">↗</span></a>
                  <a className="button" href={nativium.github}>GitHub <span aria-hidden="true">↗</span></a>
                </div>
              </div>
              <div className="browser-art" aria-hidden="true">
                <div className="browser-window">
                  <div className="browser-tab"><i /> Nativium</div>
                  <div className="browser-toolbar"><span>← → ↻</span><i /></div>
                  <div className="browser-page"><span>✳</span></div>
                </div>
              </div>
            </div>
            <div className="project-details">
              <section>
                <h4>Degoogled Chromium</h4>
                <p>Built on Chromium for web compatibility, with Google-specific integrations reduced.</p>
              </section>
              <section>
                <h4>Native look and feel</h4>
                <p>Nativium takes its interface cues from desktop toolkits, so the browser feels like part of the system.</p>
                <ul className="technologies" aria-label="Technologies">
                  {nativium.technologies.map((name) => <li key={name}>{name}</li>)}
                </ul>
              </section>
            </div>
          </article>
        </section>
      </main>

      <footer id="contact">
        <a className="brand" href="#">
          <Image src={face} width={23} height={23} alt="" /> Faceworks
        </a>
        <div className="footer-links">
          <a href={email}>contact@faceworks.dev</a>
          <a href={github}>GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </div>
  );
}

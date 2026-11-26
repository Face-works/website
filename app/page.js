import Image from "next/image";
import Link from "next/link";
import face from "../public/face.png";

const nativium = {
  github: "https://github.com/Face-works/nativium",
  download: "https://nativium.faceworks.dev",
  technologies: ["WinUI", "WebKit", "GTK", "Qt"],
};

export default function Home() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy enter">
          <h1 id="hero-title">We are<br /><span>Faceworks.</span></h1>
          <p>We build desktop software that feels at home on your system.</p>
          <div className="actions">
            <a className="button primary" href="#projects">Explore projects <span aria-hidden="true">↓</span></a>
            <Link className="button" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="hero-art enter" aria-hidden="true">
          <div className="orbit"><div className="orbit-inner" /></div>
          <Image className="mascot" src={face} width={256} height={256} alt="" preload />
        </div>
      </section>

      <section className="about section-spacing" aria-labelledby="about-title">
        <h2 id="about-title">About Faceworks</h2>
        <p>We care about the details that make a desktop app feel familiar, from its controls to the way it fits into the surrounding system. Nativium brings that approach to the web browser, where small interface choices shape something people use every day.</p>
      </section>

      <section id="projects" className="projects section-spacing" aria-labelledby="projects-title">
        <h2 id="projects-title">Projects</h2>
        <article className="project" aria-labelledby="nativium-title">
          <div className="project-intro">
            <div>
              <h3 id="nativium-title">Nativium</h3>
              <p>A degoogled Chromium browser with an interface styled around native desktop controls.</p>
              <div className="actions">
                <a className="button primary" href={nativium.download}>Download <span aria-hidden="true">↗</span></a>
                <a className="button" href={nativium.github}>GitHub <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="project-stack">
              <h4>Technologies</h4>
              <ul className="technologies">
                {nativium.technologies.map((name) => <li key={name}>{name}</li>)}
              </ul>
            </div>
          </div>
          <div className="project-details">
            <section>
              <h4>Degoogled Chromium</h4>
              <p>Chromium provides the browser foundation, with reduced integration with Google services.</p>
            </section>
            <section>
              <h4>Native interface styling</h4>
              <p>The interface takes its cues from familiar desktop controls, so the browser feels consistent with the apps around it.</p>
            </section>
          </div>
        </article>
      </section>
    </main>
  );
}

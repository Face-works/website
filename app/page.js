import Image from "next/image";
import face from "../public/face.png";

const github = "https://github.com/Face-works";
const email = "mailto:contact@faceworks.dev";
const projects = [
  {
    name: "Nativium",
    kind: "Browser",
    description: "A degoogled Chromium browser with a native UI. Includes WinUI, WebKit, GTK, and Qt.",
    icon: "browser",
    technologies: ["Chromium", "WinUI", "WebKit", "GTK", "Qt"],
  },
  {
    name: "UI Toolkit",
    kind: "Developer library",
    description: "A C library for building desktop interfaces with native controls across platforms.",
    icon: "toolkit",
    technologies: ["C", "Native UI"],
  },
];

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
          <div className="project-grid">
            {projects.map((project) => (
              <article className="card" key={project.name}>
                <div className="card-top">
                  <span className={`icon ${project.icon}`} aria-hidden="true"><i /></span>
                  <span className="kind">{project.kind}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="technologies" aria-label="Technologies">
                  {project.technologies.map((name) => <li key={name}>{name}</li>)}
                </ul>
              </article>
            ))}
          </div>
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

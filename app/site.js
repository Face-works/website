const name = "Faceworks";
const description = "We are Faceworks. We build desktop software with familiar interfaces and share our work on GitHub.";
const logo = "/face.png";

export const site = {
  url: "https://faceworks.dev",
  name,
  description,
  logo,
  github: "https://github.com/Face-works",
  email: "contact@faceworks.dev",
  ceoDiscord: "@piponidlo",
  share: {
    type: "website",
    url: "/",
    siteName: name,
    title: name,
    description,
    images: [{ url: logo, alt: "Faceworks logo" }],
  },
  twitter: {
    card: "summary",
    title: name,
    description,
    images: [{ url: logo, alt: "Faceworks logo" }],
  },
};

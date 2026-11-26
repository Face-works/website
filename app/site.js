const name = "Faceworks";
const description = "We are Faceworks. We build desktop apps with familiar controls that feel at home on your system.";
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

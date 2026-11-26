import "./globals.css";

export const metadata = {
  title: "Faceworks",
  description: "Faceworks builds desktop software for the platforms you use.",
  icons: { icon: "/face.png" },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}

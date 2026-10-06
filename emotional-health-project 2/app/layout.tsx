import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import Link from "next/link";
import Nav from "@/components/Nav";
import HelpFab from "@/components/HelpFab";
import ScrollBar from "@/components/ScrollBar";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: { default: "Emotional Health Project", template: "%s · Emotional Health Project" },
  description:
    "Workshops that help young adults in Malaysia notice what they feel, choose how they respond, and feel more at ease reaching out for support. Supported by Global Leadership Foundation, run by Ruang Malaysia.",
  icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💛</text></svg>" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: "/", label: "Home" },
    ...(site.pages.practise ? [{ href: "/practise", label: "Practise" }] : []),
    { href: "/why", label: "Why it matters" },
    { href: "/schedule", label: "Schedule" },
    ...(site.pages.progress ? [{ href: "/progress", label: "Progress" }] : []),
    { href: "/methodology", label: "Methodology" },
    ...(site.pages.slides ? [{ href: "/slides", label: "Slides" }] : []),
    { href: "/support", label: "Support" },
    { href: "/about", label: "About" },
  ];
  return (
    <html lang="en">
      <body>
        <ScrollBar />
        <header>
          <div className="bar">
            <Link className="logo" href="/"><i />Emotional Health Project</Link>
            <Nav links={links} />
          </div>
        </header>
        <main>{children}</main>
        <HelpFab />
      </body>
    </html>
  );
}

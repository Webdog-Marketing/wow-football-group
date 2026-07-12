import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://wowfootball.group"),
  title: "WOW Football Group | Multi-Club Football Advisory",
  description:
    "WOW Football Group is a multi-club football advisory group. We bring global football expertise to ambitious clubs, helping them punch above their weight — on and off the pitch.",
  openGraph: {
    title: "WOW Football Group",
    description:
      "Multi-club football advisory. Global expertise. Local heritage. We help ambitious clubs punch above their weight.",
    url: "https://wowfootball.group",
    siteName: "WOW Football Group",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

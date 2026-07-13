import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GTM_ID = "GTM-NWN42WP7";

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
        {/* Google Tag Manager — beforeInteractive hoists this into <head>,
            as high as possible, matching Google's own placement guidance. */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* Google Tag Manager (noscript) — server-rendered so it's always
            present for users with JavaScript disabled, immediately after <body>. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

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


# WOW Football Group — website

A Next.js (App Router) site for WOW Football Group, built to deploy on Vercel with
Airtable as the backend for form submissions and news articles.

## What's included

- **Home** (`/`) — hero, manifesto, how we can help, why join us, our clubs, our team
- **News** (`/news`) — pulls published articles from an Airtable table
- **Become an Investor** (`/become-an-investor`) — investor enquiry form
- **Join Us** (`/join-us`) — WhatsApp networking group signup form
- **Cookie Policy** (`/cookie-policy`) and **Privacy Policy** (`/privacy-policy`) — starter
  templates, marked with placeholders to review before publishing
- Sticky header with responsive nav, footer with LinkedIn icon and contact email

Both forms POST to API routes (`/api/investor-enquiry`, `/api/networking-signup`) which
write straight into Airtable. Each form also has a hidden honeypot field for basic spam
protection.

## 1. Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site runs at `http://localhost:3000`. Without Airtable credentials set, the forms
will show a friendly error on submit and the News page will show an empty state — the
site still builds and runs fine.

## 2. Set up Airtable

Create a base (e.g. "WOW Football Group") with three tables:

**Investor Enquiries**
| Field | Type |
|---|---|
| Name | Single line text |
| Email | Email |
| Phone | Phone number |
| Organisation | Single line text |
| Investment Range | Single line text |
| Message | Long text |
| Submitted At | Date (with time) |

**Networking Signups**
| Field | Type |
|---|---|
| Name | Single line text |
| Email | Email |
| Club / Organisation | Single line text |
| Role | Single line text |
| WhatsApp Number | Phone number |
| Message | Long text |
| Submitted At | Date (with time) |

**News Articles**
| Field | Type |
|---|---|
| Title | Single line text |
| Slug | Single line text |
| Summary | Long text |
| Body | Long text |
| Date | Date |
| Cover Image URL | URL |
| Published | Checkbox |

Only tick **Published** when an article should go live — the News page filters on this.

Get your credentials:
- **API key**: create a [personal access token](https://airtable.com/create/tokens) with
  `data.records:read` and `data.records:write` scopes on your base.
- **Base ID**: found in the Airtable API docs for your base (starts with `app`).

Add both to `.env.local` (and later to Vercel, see below):

```
AIRTABLE_API_KEY=your_token_here
AIRTABLE_BASE_ID=your_base_id_here
```

If you name your tables differently, set `AIRTABLE_TABLE_INVESTOR`,
`AIRTABLE_TABLE_NETWORKING` and `AIRTABLE_TABLE_NEWS` too — see `.env.example`.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial WOW Football Group site"
git branch -M main
git remote add origin https://github.com/<your-org>/wow-football-group.git
git push -u origin main
```

## 4. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Next.js** (auto-detected).
3. Add environment variables under **Settings → Environment Variables**:
   - `AIRTABLE_API_KEY`
   - `AIRTABLE_BASE_ID`
   - (optional) the three `AIRTABLE_TABLE_*` overrides
4. Deploy.
5. Once you own the domain, go to **Settings → Domains** and add `wowfootball.group`
   (and `www.wowfootball.group`), then follow Vercel's DNS instructions.

## 5. Content to update before launch

- **`data/team.js`** — swap the placeholder LinkedIn URLs for the real profile links for
  Matt Webb, Lloyd Owers and Emeka Enyadike.
- **`data/clubs.js`** — replace the placeholder entry with your confirmed partner clubs.
  Once you have crest images, host them somewhere (e.g. Airtable attachment URL or
  `/public`) and set `crestUrl`.
- **`app/privacy-policy/page.js`** and **`app/cookie-policy/page.js`** — fill in the
  "last updated" date and confirm the analytics section once you've decided on an
  analytics tool (e.g. Vercel Analytics). These are starting templates, not legal advice
  — worth a quick legal review before publishing.
- **LinkedIn company URL** in `components/Footer.js` — currently points to
  `linkedin.com/company/wow-football-group/`; update if your handle differs.
- Add articles to the **News Articles** Airtable table whenever you're ready to publish.

## 6. Brand implementation

The site now uses your actual brand guide (colours, typography, logo):

- **Colours**: exact hex values from the guide — Deep Forest Green `#0d231b` and
  Gold/Yellow Ochre `#dfb749` — set as CSS variables in `app/globals.css` (`:root`),
  with a small tonal ramp derived from each for section backgrounds and hover states.
- **Typography**: Montserrat (weight 700–900, italic for emphasis, matching your
  logo's "Black Italic" treatment) for headings, and Poppins for body text. Poppins is
  used as a stand-in for Gotham Book — Gotham itself is a commercial font not available
  through Google Fonts, so it can't be loaded on the web without a separate licence
  from Monotype. If you already have a Gotham web licence, it's a straightforward swap
  in `app/layout.js`.
- **Logo**: I generated two cropped, transparent PNGs from your `WOW2-01.png` file (the
  gold-on-green version) — `public/logo/wow-icon.png` (standalone "WOW" mark, used in
  the header) and `public/logo/wow-lockup.png` (full vertical lockup with "Football
  Group", used in the footer) — plus a set of favicons (`public/favicon-32.png`,
  `public/favicon-512.png`, `public/apple-touch-icon.png`).

**One thing worth knowing:** your brand guide documents four approved logo colour
variants (full-colour on dark, monochrome dark on light, dark-on-mid-grey, and reversed
white on dark), but only the dark-background gold version was supplied as a usable
asset — the other file (`WOW2-02.png`) has a solid black background rather than the
transparent or light background the other variants call for, so it isn't usable as-is
by the code. This isn't an issue for the current site, since every section using the
logo has a dark green background — but if you later add a light-background placement
(printed materials, a light page section, etc.), you'll want the proper green-on-light
logo file exported from wherever the original guide was designed.

## 7. Google Tag Manager

GTM (container `GTM-NWN42WP7`) is already wired into `app/layout.js` for every page —
the container ID is set once, near the top of that file, as `const GTM_ID`. It's
implemented with Next.js's own `next/script` component using the `beforeInteractive`
strategy, which is Next.js's supported way of loading a script as early as possible
(functionally equivalent to Google's "high in `<head>`" instruction), plus a
server-rendered `<noscript>` fallback immediately after `<body>` — matching Google's
snippet exactly, just adapted to Next.js's App Router.

Once the site is live, verify it's firing correctly using GTM's **Preview** mode, or the
Tag Assistant browser extension.

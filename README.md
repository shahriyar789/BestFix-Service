# BestFix – Appliance Repair Website (Lahore)

**v1.1:** design ab reference site ke style ma ha: cream + deep-blue palette, Plus Jakarta Sans (headings) + Geist (body), pill buttons, curved sections, hex photos, dark "guaranteed" card, brand marquee, pill-style FAQ and area chips.

Next.js 14 (App Router) + Tailwind CSS. English and Urdu (RTL) with a language toggle, WhatsApp/call buttons, booking form, per-service and per-area SEO pages.

## 1. Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

Requires Node 18.17+ (Node 20 recommended).

## 1b. Design settings

| What | Where |
|---|---|
| Colors | `tailwind.config.js` → `colors` (`brand`, `cream`, `paper`, `sand`, `night`) |
| Fonts | `app/layout.js` (Plus Jakarta Sans + Geist; Urdu uses Noto Nastaliq) |
| Photos | Put files in `public/images/` and set the paths in `lib/site.js` → `images` (hero, about1, about2, technician). Empty = placeholder. |
| Top promo bar | `lib/site.js` → `promo` (empty `text` hides it) |
| Icons | `components/Icon.js` |
| Brand names strip | `lib/data.js` → `brands` (plain text, no logos) |

## 2. Edit these two files first

| File | What to change |
|---|---|
| `lib/site.js` | Phone, WhatsApp number, email, address, working hours, inspection fee, warranty days, domain |
| `lib/data.js` | Services, "problems we fix", starting prices, areas, brands, FAQs, reviews |

**Placeholders you must replace before launch**
- Phone / WhatsApp: `0300 0000000` (`lib/site.js`)
- Email: `info@bestfix.pk`, domain `https://bestfix.pk`
- Inspection fee (Rs 500), warranty (30 days), "starting from" prices per service
- Working hours and address
- `reviews` array in `lib/data.js` is empty on purpose. Paste real Google reviews there and the reviews section appears automatically.
- `app/about/page.js`: write your real story (year started, team size, experience)

Every text is written as `{ en: '...', ur: '...' }`. Check the Urdu wording with a native speaker before launch.

## 3. Add a new service or area

Add one object to the `services` or `areas` array in `lib/data.js`. The page, menu links, footer links, sitemap and booking-form options are generated automatically.

## 4. Get bookings on Telegram (free, instant)

1. Telegram → `@BotFather` → create a bot → copy the token.
2. Add the bot to a group (or chat with it), get the chat id.
3. Copy `.env.example` to `.env.local` and fill `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`.
4. On Vercel add the same two variables in Project Settings → Environment Variables.

Without these, bookings are only written to the server log. The customer also gets a "Send on WhatsApp" button after submitting, so you still receive the details on WhatsApp.

## 5. Deploy (free)

1. Push this folder to a GitHub repo.
2. vercel.com → New Project → import the repo → Deploy.
3. Add your domain (for example `bestfix.pk`) under Project Settings → Domains and update the DNS records.

## 6. After launch (this is what brings customers in Lahore)

- Create and verify a **Google Business Profile** (category: Appliance repair service), add phone, hours, service areas and photos, and ask happy customers for reviews.
- Add the site to **Google Search Console** and submit `/sitemap.xml`.
- Add **Google Analytics 4** and track clicks on call and WhatsApp buttons. Use these for Google Ads conversions.
- Replace the placeholder "B" logo (`components/Header.js`, `components/Footer.js`) with your real logo, and add real work photos.
- Write blog or guide pages later, for example "AC not cooling: 7 causes" (create `app/blog/...`).

## 7. Project structure

```
app/
  page.js                  Home
  services/page.js         All services
  services/[slug]/page.js  One page per service
  areas/page.js            All areas
  areas/[slug]/page.js     One page per area
  booking, about, contact  Other pages
  api/booking/route.js     Booking endpoint (Telegram)
  sitemap.js, robots.js    SEO
components/                Header, Footer, BookingForm, WhatsAppFloat, LangProvider, ui
lib/site.js, lib/data.js   All settings and content
```

## Notes

- Layout and style follow the reference site's look, but all copy, photos, logo, reviews and trust badges are your own placeholders. Do not add third-party badges (Google Guaranteed, Angi etc.) or logos unless you really have them.
- Brand names are shown as plain text only (no logos) to avoid trademark issues. The footer states that you are an independent repair service.
- No fake statistics or fake reviews are included. Only add claims you can prove.
- Language choice is saved in the browser. Pages are pre-rendered in English for SEO; Urdu is applied on the client.

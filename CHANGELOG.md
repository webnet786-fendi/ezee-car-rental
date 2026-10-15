# EzEe Car Rental website — changelog

## Unreleased

- **Pre-ads touch-up (16 Oct 2026)**: hero now says "Car rental in Johor Bahru from RM90 a day" with Self-drive / Chauffeured Vellfire buttons and a price-match pillar; the "Official Page" banner under the logo is gone; the floating button is a green WhatsApp chat pill (sends `whatsapp_tap` with source `fab`); every self-drive card and overlay shows the refundable deposit (new per-car `deposit` field: RM100 compact/sedan, RM200 SUV/MPV/pickup, RM500 premium, Vellfire RM500); S$ chauffeur prices carry an approximate RM line (`settings.sgdRate`, 3.3); Vellfire photos re-cut from the originals with soft pixelated plates instead of black boxes; page title, description, canonical link and AutoRental JSON-LD; robots.txt and sitemap.xml; footer says "Since 2021"; rate card dated October 2026 with car tabs grouped by category.
- **Prices**: Bezza day tiers RM115 / RM100 (2–6 days) / RM90 (7+ days); Vellfire self-drive tiers RM549 / RM499 (3–6 days) / RM450 (7+ days); twelve imported cars brought under the lowest published Johor Bahru rate (Myvi 129, Saga 139, Alza 2nd gen 229, Ativa 219, Almera 239, X70 389, Xpander 349, Starex 449, Staria 579, Innova 389, Voxy 429, Serena 429).
- **Fleet photos: number plates masked.** Every readable registration in `img/fleet/` is pixelated, including plates on background cars (23 photos, 29 plates); the others were already blank, dealer plaques or showroom cars. Boxes live in `tools/fleet_plates.py` (`preview` / `apply`).
- **Fleet import (46 cars)**: the full Drivor.my range (Axia, Bezza, Myvi, Alza, Aruz, Ativa, Saga, Persona, S70, X50, X70, City, Civic FC/FE, Accord, BR-V, HR-V, WR-V, CR-V, Vios, Camry, Corolla Cross, Innova Crysta, Voxy, Alphard, Vellfire, Hilux, Almera, Serena, Teana, Carnival, Staria, Starex, G10, Xpander, Triton, Ranger, Mustang, A200, C200, Jaecoo J7, Omoda 5) added to fleet.json with Drivor's day tiers, hourly rates, specs and features; EzEe's own Vellfire and Bezza stay first, the duplicate Drivor Bezza 1.3 and Vellfire are imported switched off. Photos are Creative Commons images from Wikimedia Commons (resized into `img/fleet/`), with a credit line under each gallery (`credit` field) and a footer note. New per-car field `hourly` ("1-5: 45", "6-24: 450 total") shown in the overlay and the rate table. The price box now prices self-drive by the car's day tiers (fixed-total tiers included) and the days list grows to the longest tier; the rate-table car tabs become a scrollable strip of short names when there are more than five cars. Fleet section copy no longer claims every car is owned.
- **Meet the fleet** section on the landing page: category pills, a horizontal rail of car cards (photo, badges, one-line description, from-price, "Select vehicle") and a full vehicle detail overlay with photo gallery, at-a-glance specs, self-drive rates (optional day tiers), chauffeured all-in prices, inclusions, extras, features and a "Good to know" policy list. "Book this car" pre-selects the car in the price box. Deep link: `#car-<id>`. New per-car fields in fleet.json (`category`, `gallery`, `specs`, `features`, `policies`, optional `tiers`) with matching fields in admin.html; the section renders from fleet-data.js like everything else.
- Visitor counting: Google Analytics (GA4) loads on the public pages when `settings.gaId` holds a Measurement ID (admin → Bookings tab → Website visitors; empty = off). Private pages never load it. Every WhatsApp tap in the price box is sent as a `whatsapp_tap` event (service, car, source, price).
- Custom domain **https://ezee.my** (GitHub Pages CNAME, HTTPS enforced; github.io and www redirect). Share image and the ledger link in alert emails point at the domain.
- Booking script v5: email alert to the owner for every website request (Ref, trip, price, ledger link); duplicate taps within 2 minutes reuse the same Ref; more than 40 website requests in 10 minutes are dropped; honeypot field on the price box.
- Ledger: Attention filter and flags (Needs reply after 24 h, Today / Tomorrow for confirmed bookings, Ended for confirmed bookings past their end); "Prepare agreement" opens the rental agreement form prefilled from the booking.
- Agreement form accepts prefill parameters (ref, name, phone, car, start, time, days, rate, dest, loc, deposit) and starts a fresh form from them.
- Calendar hold: the price box reads confirmed bookings from the ledger (`?action=busy`) and shows a car as **On request** when the requested dates overlap a confirmed booking of that car (self-drive requests are blocked by any confirmed booking; chauffeured requests only by multi-day ones). The WhatsApp button stays active ("Ask about these dates on WhatsApp") and the message carries a note.
- Booking control: every WhatsApp tap in the price box is logged as **Waiting Confirmation** with a reference (`Ref: EZ-yymmdd-XXX`, also placed in the WhatsApp message). Backend = Google Apps Script + Google Sheet under the owner's personal Gmail (`gas/Code.gs`, setup in `gas/README.md`). New private `ledger.html` (status Waiting → Confirmed → Completed / Cancelled / No-show, customer, phone, deposit, notes, history, manual bookings, tiles for waiting / upcoming / this month). Admin gets a Bookings tab for the web-app URL (`settings.bookingsUrl`; empty = logging off). Public `?action=busy` endpoint prepared for the calendar hold.
- Language switcher (EN default / BM / 中文) in the header of the landing page and the rate card. Choice is remembered in the browser (`ezee-lang`) and can be forced with `?lang=ms` / `?lang=zh`. Translations live in `i18n.js`: static text by `data-i18n` key, fleet data (services, notes, inclusions, zones) by exact English string with English fallback, so new cars or services added in admin appear in English until a translation is added. WhatsApp messages stay in English for the owner.

## v1.0.0 — 2026-09-07

First tagged release of the public site at https://webnet786-fendi.github.io/ezee-car-rental/

### Landing page (index.html)
- Hero: "Rent & Drive Our Economy Vehicle", two selling points, daylight Vellfire photo with promo captions
- Price box: car selector, grouped services (Hot item first), free-text destination with minimum-days popup, keyword-based minimum days, drop-off field for chauffeured trips, live all-in price, WhatsApp hand-off ("Click to negotiate on WhatsApp?")
- Sticky compact search bar once the price box scrolls away (mirrors the price box)
- Pricing section: per-car pills, car photo panel, per-car inclusions, "Malaysia use only / Singapore entry OK" chip, minimum-rental-by-destination box
- Customer handover gallery (11 photos, faces pixelated), number plates blacked out on every photo
- Mobile: centred logo, captions scale with the photo, car photo under the pills

### Rate card (rates.html)
- Generated from the same data; per-car tabs; print-friendly

### Fleet admin (admin.html)
- GitHub-token sign-in; edit cars (name, flags, Singapore allowed, photo upload, prices, lists), services, minimum-day zones, raw JSON
- Copy / Duplicate car, copy prices & lists from another car
- Save & publish writes fleet.json + fleet-data.js to the repository; site updates in about a minute

### Data
- fleet.json (source of truth) → fleet-data.js (generated) + fleet-helpers.js (shared logic)
- Cars: Toyota Vellfire ZG 2022 (flagship, Singapore OK), Perodua Bezza 2023 (placeholder prices, Malaysia only)

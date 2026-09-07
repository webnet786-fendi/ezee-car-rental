# EzEe Car Rental website — changelog

## Unreleased

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

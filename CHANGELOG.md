# EzEe Car Rental website — changelog

## Unreleased

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

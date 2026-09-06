# Bookings backend (Google Sheet + Apps Script)

Every tap on the WhatsApp button in the price box is logged as a booking request with a reference number
(the same "Ref: EZ-…" that appears in the customer's WhatsApp message). Requests land in a Google Sheet as
**Waiting Confirmation** and are managed from `ledger.html` on the site.

## One-time setup (about 3 minutes)

1. Create a new Google Sheet, name it **EzEe Bookings**.
2. In the Sheet: **Extensions → Apps Script**. Delete the sample code and paste the contents of `Code.gs`
   (use the local copy with the real token, `Code.local.gs`, which is not committed).
3. Make sure `ADMIN_TOKEN` is a long random secret. Keep it; `ledger.html` needs the same value.
4. **Deploy → New deployment → Select type: Web app**
   - Description: `ezee bookings`
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Deploy, approve the permissions, copy the **Web app URL** (ends in `/exec`).
5. Paste the Web app URL into **admin.html → Bookings tab → Booking log URL**, then **Save & publish**.
6. Open `ledger.html`, enter the Web app URL and the admin token, Connect.

Test: open `<Web app URL>?action=ping` in a browser — it should answer `{"ok":true,…}`.

## Updating the script later

Paste the new `Code.gs` over the old one, then **Deploy → Manage deployments → ✎ → Version: New version → Deploy**.
The URL stays the same.

## Data

Sheet tab `Bookings`, one row per request. Columns: ref, created, status, source (website / manual), car, service,
route, destination, deliverTo, dropoff, start, time, days, pax, price, currency, lang, customer, phone, deposit,
notes, updated, history, ua. Statuses: Waiting Confirmation → Confirmed → Completed, or Cancelled / No-show.
`?action=busy` returns the confirmed bookings (car, start, days) for the site's calendar hold.

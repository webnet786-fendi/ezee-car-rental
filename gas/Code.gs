// EzEe Car Rental — booking intake + ledger backend.
// Google Apps Script bound to the "EzEe Bookings" Google Sheet. Deployed as a Web app (Execute as: Me, Access: Anyone).
//
//   POST {action:'create', ...}            public  — the website logs every WhatsApp tap as "Waiting Confirmation"
//   GET  ?action=list&token=…              private — ledger.html reads all bookings
//   POST {action:'update', token, ref, fields:{…}}  private — ledger.html changes status / customer / notes
//   POST {action:'delete', token, ref}     private
//   GET  ?action=busy                      public  — confirmed bookings per car (for the calendar hold on the site)
//   GET  ?action=ping                      public  — health check
//
// Every website request also emails ALERT_EMAIL (default: the deploying account). Duplicate taps within 2 minutes reuse
// the same reference; more than RATE_LIMIT website requests in 10 minutes are dropped; a filled honeypot (hp) is ignored.
//
// Change ADMIN_TOKEN to a long random secret before deploying; ledger.html asks for the same token.

var ADMIN_TOKEN = 'REPLACE_WITH_YOUR_SECRET';
var VERSION = 6;
var ALERT_EMAIL = ''; // empty = the Google account that deployed the script
var LEDGER_URL = 'https://webnet786-fendi.github.io/ezee-car-rental/ledger.html';
var RATE_LIMIT = 40; // website requests per 10 minutes, above that new ones are silently dropped
var PLACEHOLDER = 'REPLACE_WITH_' + 'YOUR_SECRET'; // split so a find-and-replace of the token never touches this
var SHEET = 'Bookings';
var TZ = 'Asia/Kuala_Lumpur';
var COLS = ['ref','created','status','source','car','service','route','destination','deliverTo','dropoff','start','time','days','pax','price','currency','lang','customer','phone','deposit','notes','updated','history','ua'];
var EDITABLE = ['status','customer','phone','deposit','notes','car','service','route','start','time','days','pax','price','currency','destination','deliverTo','dropoff'];
var STATUSES = ['Waiting Confirmation','Confirmed','Completed','Cancelled','No-show'];

function sheet_() {
  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(SHEET);
  if (!sh) sh = ss.insertSheet(SHEET);
  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, sh.getMaxRows(), COLS.length).setNumberFormat('@'); // keep dates/times/refs as plain text
    sh.appendRow(COLS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, COLS.length).setFontWeight('bold');
  }
  return sh;
}
function out_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function str_(v, max) { v = (v == null ? '' : String(v)); return v.length > max ? v.slice(0, max) : v; }
function auth_(p) { return !!(p && p.token && ADMIN_TOKEN && ADMIN_TOKEN !== PLACEHOLDER && String(p.token).trim() === String(ADMIN_TOKEN).trim()); }
function iso_(d) { return Utilities.formatDate(d, TZ, "yyyy-MM-dd'T'HH:mm"); }
function norm_(k, v) {
  if (v instanceof Date) {
    if (k === 'start') return Utilities.formatDate(v, TZ, 'yyyy-MM-dd');
    if (k === 'time') return Utilities.formatDate(v, TZ, 'HH:mm');
    return iso_(v);
  }
  return v == null ? '' : String(v);
}
function rows_(sh) {
  var n = sh.getLastRow();
  if (n < 2) return [];
  var v = sh.getRange(2, 1, n - 1, COLS.length).getValues();
  return v.map(function (r, i) { var o = { _row: i + 2 }; COLS.forEach(function (c, j) { o[c] = norm_(c, r[j]); }); return o; });
}
function toRow_(o) { return COLS.map(function (c) { return o[c] == null ? '' : o[c]; }); }
function newRef_(d) {
  var ymd = Utilities.formatDate(d, TZ, 'yyMMdd');
  var n = rows_(sheet_()).filter(function (r) { return String(r.ref).indexOf('EZ-' + ymd) === 0; }).length + 1;
  return 'EZ-' + ymd + '-' + ('00' + n).slice(-3);
}

function alert_(r) {
  try {
    var to = ALERT_EMAIL || Session.getEffectiveUser().getEmail();
    if (!to) return;
    var trip = [r.start ? r.start + (r.time ? ' ' + r.time : '') : 'date to confirm', r.days ? r.days + ' day' + (r.days > 1 ? 's' : '') : '', r.pax ? r.pax + ' pax' : ''].filter(String).join(' · ');
    var lines = [
      ['Ref', r.ref], ['Car', r.car], ['Service', r.route || r.service], ['When', trip],
      ['Driving to', r.destination], ['Deliver car to', r.deliverTo], ['Drop-off', r.dropoff],
      ['Price shown', r.price ? (r.currency || '') + r.price : 'on request'], ['Site language', r.lang], ['Source', r.source]
    ].filter(function (x) { return x[1]; });
    var html = '<div style="font:15px/1.5 Arial,sans-serif;color:#222"><h2 style="margin:0 0 12px;font-size:18px">New booking request ' + r.ref + '</h2><table style="border-collapse:collapse">' +
      lines.map(function (x) { return '<tr><td style="padding:4px 14px 4px 0;color:#777">' + x[0] + '</td><td style="padding:4px 0"><b>' + String(x[1]).replace(/</g, '&lt;') + '</b></td></tr>'; }).join('') +
      '</table><p style="margin:16px 0 0">The customer is on WhatsApp with the same Ref. <a href="' + LEDGER_URL + '">Open the ledger</a> to confirm once the deposit is in.</p></div>';
    MailApp.sendEmail({ to: to, subject: 'EzEe booking request ' + r.ref + ' · ' + (r.car || '') + ' · ' + (r.start || 'date to confirm'), htmlBody: html, body: lines.map(function (x) { return x[0] + ': ' + x[1]; }).join('\n') + '\n' + LEDGER_URL });
    return 'sent to ' + to;
  } catch (e) { return 'error: ' + (e && e.message ? e.message : e); }
}
/* Run this once from the editor (Run > authorizeMail) to grant the send-mail permission; it emails you a test line. */
function authorizeMail() {
  var to = ALERT_EMAIL || Session.getEffectiveUser().getEmail();
  MailApp.sendEmail(to, 'EzEe bookings: mail permission OK', 'Alerts will be sent to this address. ' + LEDGER_URL);
  Logger.log('sent to ' + to);
}

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.action === 'ping') {
    var tk = String(ADMIN_TOKEN), got = p.token == null ? null : String(p.token);
    return out_({ ok: true, service: 'ezee-bookings', version: VERSION, tokenSet: tk !== PLACEHOLDER,
      tokenLen: tk.length, tokenHead: tk.slice(0, 4), tokenTail: tk.slice(-4),
      gotLen: got == null ? null : got.length, gotHead: got == null ? null : got.slice(0, 4), match: got == null ? null : auth_(p),
      time: new Date().toISOString() });
  }
  if (p.action === 'list') {
    if (!auth_(p)) return out_({ ok: false, error: 'unauthorised' });
    return out_({ ok: true, statuses: STATUSES, rows: rows_(sheet_()).map(function (r) { delete r._row; return r; }) });
  }
  if (p.action === 'busy') {
    var b = rows_(sheet_()).filter(function (r) { return r.status === 'Confirmed' && r.start; })
      .map(function (r) { return { car: r.car, start: r.start, days: Number(r.days) || 1 }; });
    return out_({ ok: true, busy: b });
  }
  return out_({ ok: false, error: 'unknown action' });
}

function doPost(e) {
  var p = {};
  try { p = JSON.parse((e.postData && e.postData.contents) || '{}'); } catch (x) { return out_({ ok: false, error: 'bad json' }); }
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sh = sheet_(), now = new Date();
    if (p.action === 'create') {
      if (p.hp) return out_({ ok: true }); // honeypot field filled → silently ignore
      var source = str_(p.source, 20) || 'website';
      if (source !== 'manual') {
        var cache = CacheService.getScriptCache();
        var dupKey = 'dd:' + [p.car, p.service, p.start, p.time, p.days, p.ua].join('|').slice(0, 200);
        var dupRef = cache.get(dupKey);
        if (dupRef) return out_({ ok: true, ref: dupRef, duplicate: true }); // same tap within 2 minutes
        var bucket = 'rl:' + Math.floor(now.getTime() / 600000), n = Number(cache.get(bucket) || 0) + 1;
        cache.put(bucket, String(n), 700);
        if (n > RATE_LIMIT) return out_({ ok: true, dropped: true });
      }
      var ref = str_(p.ref, 24) || newRef_(now);
      if (rows_(sh).some(function (r) { return r.ref === ref; })) ref = newRef_(now);
      var rec = {
        ref: ref, created: iso_(now), status: STATUSES.indexOf(p.status) > -1 ? p.status : 'Waiting Confirmation', source: source,
        car: str_(p.car, 60), service: str_(p.service, 80), route: str_(p.route, 120),
        destination: str_(p.destination, 200), deliverTo: str_(p.deliverTo, 200), dropoff: str_(p.dropoff, 200),
        start: str_(p.start, 10), time: str_(p.time, 5), days: str_(p.days, 3), pax: str_(p.pax, 3),
        price: str_(p.price, 12), currency: str_(p.currency, 4), lang: str_(p.lang, 8),
        customer: str_(p.customer, 80), phone: str_(p.phone, 30), deposit: str_(p.deposit, 80), notes: str_(p.notes, 500),
        updated: iso_(now), history: iso_(now) + ' created (' + source + ')', ua: str_(p.ua, 120)
      };
      sh.appendRow(toRow_(rec));
      var alert = null;
      if (source !== 'manual') { try { CacheService.getScriptCache().put(dupKey, ref, 120); } catch (x) { } alert = alert_(rec); }
      return out_({ ok: true, ref: ref, row: rec, alert: alert });
    }
    if (p.action === 'update') {
      if (!auth_(p)) return out_({ ok: false, error: 'unauthorised' });
      var r = rows_(sh).filter(function (x) { return x.ref === p.ref; })[0];
      if (!r) return out_({ ok: false, error: 'not found' });
      var changes = [];
      EDITABLE.forEach(function (k) {
        if (!p.fields || !(k in p.fields)) return;
        var nv = str_(p.fields[k], 500);
        if (k === 'status' && STATUSES.indexOf(nv) < 0) return;
        if (nv !== String(r[k] == null ? '' : r[k])) { changes.push(k + ': ' + (r[k] || '—') + ' → ' + (nv || '—')); r[k] = nv; }
      });
      if (changes.length) {
        r.updated = iso_(now);
        r.history = (r.history ? r.history + '\n' : '') + iso_(now) + ' ' + changes.join('; ');
        sh.getRange(r._row, 1, 1, COLS.length).setValues([toRow_(r)]);
      }
      delete r._row;
      return out_({ ok: true, row: r, changed: changes.length });
    }
    if (p.action === 'delete') {
      if (!auth_(p)) return out_({ ok: false, error: 'unauthorised' });
      var d = rows_(sh).filter(function (x) { return x.ref === p.ref; })[0];
      if (!d) return out_({ ok: false, error: 'not found' });
      sh.deleteRow(d._row);
      return out_({ ok: true });
    }
    return out_({ ok: false, error: 'unknown action' });
  } finally { lock.releaseLock(); }
}

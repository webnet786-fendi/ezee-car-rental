// Shared helpers for index.html and rates.html. Data comes from fleet-data.js (generated from fleet.json).
var CARS=FLEET.cars, ROUTES=FLEET.routes, ZONES=FLEET.zones, SETTINGS=FLEET.settings||{};
function activeCars(){return CARS.filter(function(c){return c.active})}
function carLabel(c){return c.name+(c.hot?' — Hot item':'')}
function rowLabel(r,c){return r.label.replace('Self-drive,','Self-drive '+c.short+',').replace('Monthly rental, self-drive','Monthly rental, '+c.short)}
function fmtPrice(r,p){return (p==null||p==='')?'Let’s talk':r.cur+p}
/* S$ prices get an approximate RM figure (settings.sgdRate); shown as a small line, never in WhatsApp text. */
/* Peak season (settings.peaks: [{from:'YYYY-MM-DD',to:'YYYY-MM-DD',pct,label}]) applies to self-drive only.
   peakDays(start,n) counts the rental days that fall inside a peak window and returns the strongest window hit. */
function peakDays(start,n){
  var ps=SETTINGS.peaks||[];if(!ps.length||!start)return null;
  var d0=new Date(String(start).slice(0,10)+'T00:00:00');if(isNaN(d0))return null;
  var best=null;
  ps.forEach(function(p){var a=new Date(p.from+'T00:00:00'),b=new Date(p.to+'T00:00:00');if(isNaN(a)||isNaN(b))return;var k=0;
    for(var i=0;i<(n||1);i++){var t=new Date(d0.getTime()+i*864e5);if(t>=a&&t<=b)k++}
    if(k&&(!best||p.pct>best.pct))best={days:k,pct:Number(p.pct)||0,label:p.label||'',from:p.from,to:p.to}});
  return best;
}
function peakRange(p){function f(x){var d=new Date(x+'T00:00:00');return isNaN(d)?x:d.toLocaleDateString('en-GB',{day:'numeric',month:'short'})}return f(p.from)+' \u2013 '+f(p.to)}
function approxRM(r,p){var k=Number(SETTINGS.sgdRate||0);if(!k||p==null||p===''||r.cur!=='S$')return '';return '<small class="approx">\u2248 RM'+Math.round(p*k/10)*10+'</small>'}
function zoneFor(text){
  var t=' '+String(text||'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ')+' ';
  for(var i=0;i<ZONES.length;i++){var z=ZONES[i];for(var k=0;k<z.keys.length;k++){if(t.indexOf(' '+z.keys[k]+' ')>-1)return z}}
  return null;
}
var SG_KEYS=['singapore','singapura','sg','changi','woodlands','tuas','sentosa','jurong','orchard'];
function mentionsSingapore(text){
  var t=' '+String(text||'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ')+' ';
  return SG_KEYS.some(function(k){return t.indexOf(' '+k+' ')>-1});
}

/* Google Analytics (GA4). Measurement ID lives in fleet.json settings.gaId (admin → Bookings tab); empty = off.
   Private pages (noindex) never load it. Sends page views; index.html also sends a whatsapp_tap event. */
(function(){
  var id=String(SETTINGS.gaId||'').trim();
  if(!/^G-[A-Z0-9]{6,}$/.test(id))return;
  if(document.querySelector('meta[name="robots"][content*="noindex"]'))return;
  window.dataLayer=window.dataLayer||[];
  window.gtag=function(){dataLayer.push(arguments)};
  gtag('js',new Date());gtag('config',id,{send_page_view:true});
  var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(id);
  document.head.appendChild(s);
})();
function track(name,params){try{if(window.gtag&&SETTINGS.gaId)gtag('event',name,params||{})}catch(e){}}

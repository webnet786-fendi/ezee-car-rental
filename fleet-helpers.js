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
/* Public holidays and peak windows (settings.holidays [{date,label}], settings.peaks, settings.peakMinDays, default 3).
   holidayMin(start) returns {min,label} when any of the first `min` rental days is a peak day or a public holiday. */
/* Self-drive tier rows: "1 day" / "7 days" / "30 days", per-day price, small total + chat line for 7 and 30 days. */
function tierName(x){return x.from===1?'1 '+t('v.day1',null,'day'):x.from+' '+t('v.days',null,'days')}
function tierCell(x){var per=x.perDay!=null?x.perDay:Math.round(x.total/x.from);return 'RM'+per+'<small>'+t('j.perday',null,' / day')+'</small>'+(x.from>1?'<small class="ttotal">'+t('v.tiertotal',{amt:(per*x.from).toLocaleString('en-MY'),n:x.from},'RM{amt} for {n} days · Chat for best price!')+'</small>':'')}
function holidayMin(start){
  var min=Number(SETTINGS.peakMinDays||0);if(!min||min<2||!start)return null;
  var d0=new Date(String(start).slice(0,10)+'T00:00:00');if(isNaN(d0))return null;
  var hol={};(SETTINGS.holidays||[]).forEach(function(h){var k=typeof h==='string'?h:h.date;if(k)hol[k]=(typeof h==='string'?'':h.label)||'Public holiday'});
  for(var i=0;i<min;i++){
    var t=new Date(d0.getTime()+i*864e5),k=t.getFullYear()+'-'+('0'+(t.getMonth()+1)).slice(-2)+'-'+('0'+t.getDate()).slice(-2);
    if(hol[k])return {min:min,label:hol[k]};
    var pk=(SETTINGS.peaks||[]).filter(function(p){return k>=p.from&&k<=p.to})[0];
    if(pk)return {min:min,label:pk.label||'Peak season'};
  }
  return null;
}
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

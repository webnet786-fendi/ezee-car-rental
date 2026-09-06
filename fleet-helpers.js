// Shared helpers for index.html and rates.html. Data comes from fleet-data.js (generated from fleet.json).
var CARS=FLEET.cars, ROUTES=FLEET.routes, ZONES=FLEET.zones, SETTINGS=FLEET.settings||{};
function activeCars(){return CARS.filter(function(c){return c.active})}
function carLabel(c){return c.name+(c.hot?' — Hot item':'')}
function rowLabel(r,c){return r.label.replace('Self-drive,','Self-drive '+c.short+',').replace('Monthly rental, self-drive','Monthly rental, '+c.short)}
function fmtPrice(r,p){return (p==null||p==='')?'Let’s talk':r.cur+p}
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

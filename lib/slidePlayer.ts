/* eslint-disable */
// @ts-nocheck
/**
 * Slide player: renders the deck's custom elements (shapes, icons, connectors)
 * and handles navigation, builds, notes and full screen.
 * Expects #stage, #frame, #count, #notes, #prev, #next, #nt, #fs, #prog in the DOM.
 */
export function mountPlayer(): () => void {
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var route='slides';
/* ---------- slide primitives ---------- */
var ICONS={
Activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
Chart:'<path d="M3 3v18h18"/><path d="M8 16v-4M13 16V8M18 16v-7"/>',
Chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
Check:'<polyline points="20 6 9 17 4 12"/>',
Globe:'<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
GraduationCap:'<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
Lightbulb:'<path d="M9 18h6M10 22h4"/><path d="M15.1 14c.2-1 .7-1.7 1.4-2.5A4.7 4.7 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.8 1.3 1.5 1.4 2.5"/>',
Lightning:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
Link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
Lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
PaperPlane:'<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>',
Search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
Star:'<polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2"/>',
Users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
Verified:'<path d="M22 11.1V12a10 10 0 1 1-5.9-9.1"/><polyline points="22 4 12 14 9 11"/>',
Warning:'<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12" y2="17"/>'
};
var stage=document.getElementById('stage');
[].forEach.call(stage.querySelectorAll('x-icon'),function(el){
  el.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[el.getAttribute('name')]||'')+'</svg>';
});
var CLIP={
  'arrow-right':'polygon(0 30%,60% 30%,60% 0,100% 50%,60% 100%,60% 70%,0 70%)',
  'arrow-left':'polygon(100% 30%,40% 30%,40% 0,0 50%,40% 100%,40% 70%,100% 70%)',
  'arrow-up':'polygon(30% 100%,30% 40%,0 40%,50% 0,100% 40%,70% 40%,70% 100%)',
  'arrow-down':'polygon(30% 0,30% 60%,0 60%,50% 100%,100% 60%,70% 60%,70% 0)',
  'diamond':'polygon(50% 0,100% 50%,50% 100%,0 50%)'
};
[].forEach.call(stage.querySelectorAll('x-shape'),function(el){
  var k=el.getAttribute('kind');
  if(k==='ellipse')el.style.borderRadius='50%';
  else if(k==='rounded')el.style.borderRadius=el.style.borderRadius||'16px';
  else if(CLIP[k])el.style.clipPath=CLIP[k];
});
var NS='http://www.w3.org/2000/svg';
[].forEach.call(stage.querySelectorAll('x-connector'),function(el,i){
  var c=el.style.color||'#23262b',w=parseFloat(el.style.borderWidth)||2,dash=el.style.borderStyle;
  var svg=document.createElementNS(NS,'svg');
  svg.setAttribute('width','1920');svg.setAttribute('height','1080');
  svg.setAttribute('style','position:absolute;left:0;top:0;overflow:visible;pointer-events:none');
  var head=el.getAttribute('head')||'end';
  var line=document.createElementNS(NS,'line');
  ['x1','y1','x2','y2'].forEach(function(a){line.setAttribute(a,el.getAttribute(a))});
  line.setAttribute('stroke',c);line.setAttribute('stroke-width',w);
  if(dash==='dashed')line.setAttribute('stroke-dasharray',(w*4)+' '+(w*3));
  if(dash==='dotted')line.setAttribute('stroke-dasharray','0 '+(w*2.5)),line.setAttribute('stroke-linecap','round');
  if(head!=='none'){
    var id='ah'+i,defs=document.createElementNS(NS,'defs'),m=document.createElementNS(NS,'marker');
    m.setAttribute('id',id);m.setAttribute('viewBox','0 0 10 10');m.setAttribute('refX','9');m.setAttribute('refY','5');
    m.setAttribute('markerWidth','6');m.setAttribute('markerHeight','6');m.setAttribute('orient','auto-start-reverse');
    var p=document.createElementNS(NS,'path');p.setAttribute('d','M0 0L10 5L0 10z');p.setAttribute('fill',c);
    m.appendChild(p);defs.appendChild(m);svg.appendChild(defs);
    line.setAttribute('marker-end','url(#'+id+')');
    if(head==='both')line.setAttribute('marker-start','url(#'+id+')');
  }
  svg.appendChild(line);
  if(el.hasAttribute('data-build-in'))svg.setAttribute('data-build-in',el.getAttribute('data-build-in'));
  el.parentNode.replaceChild(svg,el);
});

/* ---------- player ---------- */
var frame=document.getElementById('frame');
var S=[].slice.call(stage.children).filter(function(e){return e.tagName==='SECTION'});
var cur=-1,step=0,timers=[];
function fit(){
  var w=frame.clientWidth,h=frame.clientHeight,k=document.fullscreenElement?Math.min(w/1920,h/1080):Math.max(w/1920,h/1080);
  stage.style.transform='translate('+((w-1920*k)/2)+'px,'+((h-1080*k)/2)+'px) scale('+k+')';
}
var ro=window.ResizeObserver?new ResizeObserver(fit):null;if(ro)ro.observe(frame);addEventListener('resize',fit);
function parse(el){var p=el.getAttribute('data-build-in').split(/\s+/);return {n:parseInt(p[1]||1,10),auto:p.indexOf('auto')>-1}}
function clickSteps(s){var n={};[].forEach.call(s.querySelectorAll('[data-build-in]'),function(el){var b=parse(el);if(!b.auto)n[b.n]=1});return Object.keys(n).map(Number).sort(function(a,b){return a-b})}
function show(i,st,back){
  timers.forEach(clearTimeout);timers=[];
  var entering=i!==cur;
  S.forEach(function(s,j){s.classList.toggle('active',j===i)});
  var s=S[i],cs=clickSteps(s);
  if(back)st=cs.length;
  [].forEach.call(s.querySelectorAll('[data-build-in]'),function(el){
    var b=parse(el);
    if(b.auto){
      if(entering&&!back&&!reduce){el.classList.add('hid');timers.push(setTimeout(function(){el.classList.remove('hid')},250+(b.n-1)*450))}
      else el.classList.remove('hid');
    } else el.classList.toggle('hid',cs.indexOf(b.n)>=st);
  });
  cur=i;step=st;
  document.getElementById('count').textContent=(i+1)+' / '+S.length;
  var a=s.querySelector('aside');document.getElementById('notes').innerHTML='<b>Speaker notes, slide '+(i+1)+'.</b> '+(a?a.innerHTML:'');
  if(entering)document.dispatchEvent(new CustomEvent('slideenter',{detail:s.id}));
}
function next(){var cs=clickSteps(S[cur]);if(step<cs.length)show(cur,step+1);else if(cur<S.length-1)show(cur+1,0)}
function prev(){if(step>0)show(cur,step-1);else if(cur>0)show(cur-1,0,true)}
document.getElementById('next').onclick=next;
document.getElementById('prev').onclick=prev;
var nt=document.getElementById('nt'),notes=document.getElementById('notes');
nt.onclick=function(){notes.hidden=!notes.hidden;nt.textContent=notes.hidden?'Show notes':'Hide notes'};
function fs(){if(!document.fullscreenElement){if(frame.requestFullscreen)frame.requestFullscreen()}else document.exitFullscreen()}
document.getElementById('fs').onclick=fs;
var onFs=function(){setTimeout(fit,50)};document.addEventListener('fullscreenchange',onFs);
frame.addEventListener('click',function(e){var r=frame.getBoundingClientRect();if(e.clientX-r.left<r.width/4)prev();else next()});
var tx=null;
frame.addEventListener('touchstart',function(e){tx=e.touches[0].clientX},{passive:true});
frame.addEventListener('touchend',function(e){if(tx===null)return;var dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>50){e.preventDefault();dx<0?next():prev()}tx=null});
var onKey=function(e){
  if(route!=='slides')return;
  var k=e.key;
  if(k==='ArrowRight'||k===' '||k==='PageDown'){e.preventDefault();next()}
  else if(k==='ArrowLeft'||k==='PageUp'){e.preventDefault();prev()}
  else if(k==='Home')show(0,0);else if(k==='End')show(S.length-1,0);
  else if(k==='f'||k==='F')fs();
};addEventListener('keydown',onKey);


var _show=show;show=function(i,st,back){_show(i,st,back);var pr=document.getElementById('prog');if(pr)pr.style.width=((i+1)/S.length*100)+'%'};
document.getElementById('nt').onclick=function(){notes.hidden=!notes.hidden};
show(0,0);fit();
return function(){removeEventListener('keydown',onKey);removeEventListener('resize',fit);document.removeEventListener('fullscreenchange',onFs);if(ro)ro.disconnect();timers.forEach(clearTimeout)};
}

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Ye(){}const ir=r=>r;function Fs(r,e){for(const t in e)r[t]=e[t];return r}function ol(r){return r()}function da(){return Object.create(null)}function Xt(r){r.forEach(ol)}function Ln(r){return typeof r=="function"}function Je(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let ur;function pa(r,e){return ur||(ur=document.createElement("a")),ur.href=e,r===ur.href}function gc(r){return Object.keys(r).length===0}function Xs(r,...e){if(r==null)return Ye;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function rn(r){let e;return Xs(r,t=>e=t)(),e}function xt(r,e,t){r.$$.on_destroy.push(Xs(e,t))}function Pn(r,e,t,n){if(r){const i=ll(r,e,t,n);return r[0](i)}}function ll(r,e,t,n){return r[1]&&n?Fs(t.ctx.slice(),r[1](n(e))):t.ctx}function Dn(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function Rn(r,e,t,n,i,s){if(i){const o=ll(e,t,n,s);r.p(o,i)}}function In(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function _c(r){const e={};for(const t in r)t[0]!=="$"&&(e[t]=r[t]);return e}function ma(r,e){const t={};e=new Set(e);for(const n in r)!e.has(n)&&n[0]!=="$"&&(t[n]=r[n]);return t}function sn(r,e,t){return r.set(t),e}function xc(r){return r&&Ln(r.destroy)?r.destroy:Ye}const cl=typeof window<"u";let Ai=cl?()=>window.performance.now():()=>Date.now(),$s=cl?r=>requestAnimationFrame(r):Ye;const Si=new Set;function ul(r){Si.forEach(e=>{e.c(r)||(Si.delete(e),e.f())}),Si.size!==0&&$s(ul)}function rr(r){let e;return Si.size===0&&$s(ul),{promise:new Promise(t=>{Si.add(e={c:r,f:t})}),abort(){Si.delete(e)}}}function bt(r,e){r.appendChild(e)}function fl(r){if(!r)return document;const e=r.getRootNode?r.getRootNode():r.ownerDocument;return e&&e.host?e:r.ownerDocument}function vc(r){const e=ft("style");return bc(fl(r),e),e.sheet}function bc(r,e){return bt(r.head||r,e),e.sheet}function Se(r,e,t){r.insertBefore(e,t||null)}function be(r){r.parentNode&&r.parentNode.removeChild(r)}function yc(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function ft(r){return document.createElement(r)}function Kn(r){return document.createTextNode(r)}function Ce(){return Kn(" ")}function Ys(){return Kn("")}function wt(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function Ve(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function Mc(r){return Array.from(r.childNodes)}function Sc(r,e){e=""+e,r.wholeText!==e&&(r.data=e)}function zr(r,e,t){r.classList[t?"add":"remove"](e)}function hl(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}function ga(r,e){return new r(e)}const Ur=new Map;let kr=0;function wc(r){let e=5381,t=r.length;for(;t--;)e=(e<<5)-e^r.charCodeAt(t);return e>>>0}function Ec(r,e){const t={stylesheet:vc(e),rules:{}};return Ur.set(r,t),t}function Zi(r,e,t,n,i,s,o,a=0){const l=16.666/n;let c=`{
`;for(let m=0;m<=1;m+=l){const _=e+(t-e)*s(m);c+=m*100+`%{${o(_,1-_)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,f=`__svelte_${wc(u)}_${a}`,h=fl(r),{stylesheet:p,rules:g}=Ur.get(h)||Ec(h,r);g[f]||(g[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const d=r.style.animation||"";return r.style.animation=`${d?`${d}, `:""}${f} ${n}ms linear ${i}ms 1 both`,kr+=1,f}function Ki(r,e){const t=(r.style.animation||"").split(", "),n=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-n.length;i&&(r.style.animation=n.join(", "),kr-=i,kr||Tc())}function Tc(){$s(()=>{kr||(Ur.forEach(r=>{const{ownerNode:e}=r.stylesheet;e&&be(e)}),Ur.clear())})}function Ac(r,e,t,n){if(!e)return Ye;const i=r.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return Ye;const{delay:s=0,duration:o=300,easing:a=ir,start:l=Ai()+s,end:c=l+o,tick:u=Ye,css:f}=t(r,{from:e,to:i},n);let h=!0,p=!1,g;function d(){f&&(g=Zi(r,0,1,o,s,a,f)),s||(p=!0)}function m(){f&&Ki(r,g),h=!1}return rr(_=>{if(!p&&_>=l&&(p=!0),p&&_>=c&&(u(1,0),m()),!h)return!1;if(p){const b=_-l,v=0+1*a(b/o);u(v,1-v)}return!0}),d(),u(0,1),m}function Cc(r){const e=getComputedStyle(r);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:n}=e,i=r.getBoundingClientRect();r.style.position="absolute",r.style.width=t,r.style.height=n,Lc(r,i)}}function Lc(r,e){const t=r.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const n=getComputedStyle(r),i=n.transform==="none"?"":n.transform;r.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let Ji;function Yi(r){Ji=r}function Ri(){if(!Ji)throw new Error("Function called outside component initialization");return Ji}function dl(r){Ri().$$.on_mount.push(r)}function $e(r){Ri().$$.on_destroy.push(r)}function Vr(){const r=Ri();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=hl(e,t,{cancelable:n});return i.slice().forEach(o=>{o.call(r,s)}),!s.defaultPrevented}return!0}}function Kt(r,e){return Ri().$$.context.set(r,e),e}function xn(r){return Ri().$$.context.get(r)}const ji=[],Os=[],Ir=[],_a=[],pl=Promise.resolve();let Ns=!1;function ml(){Ns||(Ns=!0,pl.then(gl))}function Zs(){return ml(),pl}function vn(r){Ir.push(r)}const Jr=new Set;let fr=0;function gl(){const r=Ji;do{for(;fr<ji.length;){const e=ji[fr];fr++,Yi(e),Pc(e.$$)}for(Yi(null),ji.length=0,fr=0;Os.length;)Os.pop()();for(let e=0;e<Ir.length;e+=1){const t=Ir[e];Jr.has(t)||(Jr.add(t),t())}Ir.length=0}while(ji.length);for(;_a.length;)_a.pop()();Ns=!1,Jr.clear(),Yi(r)}function Pc(r){if(r.fragment!==null){r.update(),Xt(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(vn)}}let zi;function Ks(){return zi||(zi=Promise.resolve(),zi.then(()=>{zi=null})),zi}function Xn(r,e,t){r.dispatchEvent(hl(`${e?"intro":"outro"}${t}`))}const Fr=new Set;let nn;function Jn(){nn={r:0,c:[],p:nn}}function Qn(){nn.r||Xt(nn.c),nn=nn.p}function J(r,e){r&&r.i&&(Fr.delete(r),r.i(e))}function re(r,e,t,n){if(r&&r.o){if(Fr.has(r))return;Fr.add(r),nn.c.push(()=>{Fr.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}const Js={duration:0};function Dc(r,e,t){const n={direction:"in"};let i=e(r,t,n),s=!1,o,a,l=0;function c(){o&&Ki(r,o)}function u(){const{delay:h=0,duration:p=300,easing:g=ir,tick:d=Ye,css:m}=i||Js;m&&(o=Zi(r,0,1,p,h,g,m,l++)),d(0,1);const _=Ai()+h,b=_+p;a&&a.abort(),s=!0,vn(()=>Xn(r,!0,"start")),a=rr(v=>{if(s){if(v>=b)return d(1,0),Xn(r,!0,"end"),c(),s=!1;if(v>=_){const w=g((v-_)/p);d(w,1-w)}}return s})}let f=!1;return{start(){f||(f=!0,Ki(r),Ln(i)?(i=i(n),Ks().then(u)):u())},invalidate(){f=!1},end(){s&&(c(),s=!1)}}}function Rc(r,e,t){const n={direction:"out"};let i=e(r,t,n),s=!0,o;const a=nn;a.r+=1;function l(){const{delay:c=0,duration:u=300,easing:f=ir,tick:h=Ye,css:p}=i||Js;p&&(o=Zi(r,1,0,u,c,f,p));const g=Ai()+c,d=g+u;vn(()=>Xn(r,!1,"start")),rr(m=>{if(s){if(m>=d)return h(0,1),Xn(r,!1,"end"),--a.r||Xt(a.c),!1;if(m>=g){const _=f((m-g)/u);h(1-_,_)}}return s})}return Ln(i)?Ks().then(()=>{i=i(n),l()}):l(),{end(c){c&&i.tick&&i.tick(1,0),s&&(o&&Ki(r,o),s=!1)}}}function hr(r,e,t,n){const i={direction:"both"};let s=e(r,t,i),o=n?0:1,a=null,l=null,c=null;function u(){c&&Ki(r,c)}function f(p,g){const d=p.b-o;return g*=Math.abs(d),{a:o,b:p.b,d,duration:g,start:p.start,end:p.start+g,group:p.group}}function h(p){const{delay:g=0,duration:d=300,easing:m=ir,tick:_=Ye,css:b}=s||Js,v={start:Ai()+g,b:p};p||(v.group=nn,nn.r+=1),a||l?l=v:(b&&(u(),c=Zi(r,o,p,d,g,m,b)),p&&_(0,1),a=f(v,d),vn(()=>Xn(r,p,"start")),rr(w=>{if(l&&w>l.start&&(a=f(l,d),l=null,Xn(r,a.b,"start"),b&&(u(),c=Zi(r,o,a.b,a.duration,0,m,s.css))),a){if(w>=a.end)_(o=a.b,1-o),Xn(r,a.b,"end"),l||(a.b?u():--a.group.r||Xt(a.group.c)),a=null;else if(w>=a.start){const M=w-a.start;o=a.a+a.d*m(M/a.duration),_(o,1-o)}}return!!(a||l)}))}return{run(p){Ln(s)?Ks().then(()=>{s=s(i),h(p)}):h(p)},end(){u(),a=l=null}}}function Ic(r,e){r.d(1),e.delete(r.key)}function Fc(r,e){r.f(),Ic(r,e)}function Oc(r,e,t,n,i,s,o,a,l,c,u,f){let h=r.length,p=s.length,g=h;const d={};for(;g--;)d[r[g].key]=g;const m=[],_=new Map,b=new Map;for(g=p;g--;){const C=f(i,s,g),I=t(C);let x=o.get(I);x?n&&x.p(C,e):(x=c(I,C),x.c()),_.set(I,m[g]=x),I in d&&b.set(I,Math.abs(g-d[I]))}const v=new Set,w=new Set;function M(C){J(C,1),C.m(a,u),o.set(C.key,C),u=C.first,p--}for(;h&&p;){const C=m[p-1],I=r[h-1],x=C.key,A=I.key;C===I?(u=C.first,h--,p--):_.has(A)?!o.has(x)||v.has(x)?M(C):w.has(A)?h--:b.get(x)>b.get(A)?(w.add(x),M(C)):(v.add(A),h--):(l(I,o),h--)}for(;h--;){const C=r[h];_.has(C.key)||l(C,o)}for(;p;)M(m[p-1]);return m}function me(r){r&&r.c()}function he(r,e,t,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(e,t),n||vn(()=>{const o=r.$$.on_mount.map(ol).filter(Ln);r.$$.on_destroy?r.$$.on_destroy.push(...o):Xt(o),r.$$.on_mount=[]}),s.forEach(vn)}function de(r,e){const t=r.$$;t.fragment!==null&&(Xt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Nc(r,e){r.$$.dirty[0]===-1&&(ji.push(r),ml(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function Qe(r,e,t,n,i,s,o,a=[-1]){const l=Ji;Yi(r);const c=r.$$={fragment:null,ctx:[],props:s,update:Ye,not_equal:i,bound:da(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:da(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(f,h,...p)=>{const g=p.length?p[0]:h;return c.ctx&&i(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&Nc(r,f)),h}):[],c.update(),u=!0,Xt(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=Mc(e.target);c.fragment&&c.fragment.l(f),f.forEach(be)}else c.fragment&&c.fragment.c();e.intro&&J(r.$$.fragment),he(r,e.target,e.anchor,e.customElement),gl()}Yi(l)}class et{$destroy(){de(this,1),this.$destroy=Ye}$on(e,t){if(!Ln(t))return Ye;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!gc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ri=[];function _l(r,e){return{subscribe:nt(r,e).subscribe}}function nt(r,e=Ye){let t;const n=new Set;function i(a){if(Je(r,a)&&(r=a,t)){const l=!ri.length;for(const c of n)c[1](),ri.push(c,r);if(l){for(let c=0;c<ri.length;c+=2)ri[c][0](ri[c+1]);ri.length=0}}}function s(a){i(a(r))}function o(a,l=Ye){const c=[a,l];return n.add(c),n.size===1&&(t=e(i)||Ye),a(r),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function zc(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return _l(t,o=>{let a=!1;const l=[];let c=0,u=Ye;const f=()=>{if(c)return;u();const p=e(n?l[0]:l,o);s?o(p):u=Ln(p)?p:Ye},h=i.map((p,g)=>Xs(p,d=>{l[g]=d,c&=~(1<<g),a&&f()},()=>{c|=1<<g}));return a=!0,f(),function(){Xt(h),u()}})}const Br=new URLSearchParams(window.location.search);let xl,vl;if(Br.has("week")){const r=Br.get("week");xl=parseInt(r)}if(Br.has("scene")){const r=Br.get("scene");vl=parseInt(r)}const wi=nt(xl??0),$n=nt(vl??0);function bl(r){const e=r-1;return e*e*e+1}function Uc(r,{from:e,to:t},n={}){const i=getComputedStyle(r),s=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*a/t.height-(t.top+a),{delay:u=0,duration:f=p=>Math.sqrt(p)*120,easing:h=bl}=n;return{delay:u,duration:Ln(f)?f(Math.sqrt(l*l+c*c)):f,easing:h,css:(p,g)=>{const d=g*l,m=g*c,_=p+g*e.width/t.width,b=p+g*e.height/t.height;return`transform: ${s} translate(${d}px, ${m}px) scale(${_}, ${b});`}}}function xa(r,e,t){const n=r.slice();return n[4]=e[t],n[6]=t,n}function va(r){let e,t,n;return{c(){e=ft("h1"),e.innerHTML=`<img src="./threlte.png" alt="Threlte Logo" class="svelte-1acxfqq"/> 
        <span class="svelte-1acxfqq">SRP - Threlte
          <h2 class="svelte-1acxfqq">Sjors Wijsman</h2></span>`,t=Ce(),n=ft("h3"),n.textContent="Weken",Ve(e,"class","svelte-1acxfqq")},m(i,s){Se(i,e,s),Se(i,t,s),Se(i,n,s)},d(i){i&&be(e),i&&be(t),i&&be(n)}}}function ba(r){let e,t,n;return{c(){e=ft("button"),e.textContent="Home",Ve(e,"class","svelte-1acxfqq")},m(i,s){Se(i,e,s),t||(n=wt(e,"click",r[2]),t=!0)},p:Ye,d(i){i&&be(e),t=!1,n()}}}function ya(r,e){let t,n,i,s=e[6]+1+"",o,a,l=Ye,c,u;function f(){return e[3](e[6])}return{key:r,first:null,c(){t=ft("button"),n=Kn("Week "),i=ft("span"),o=Kn(s),Ve(i,"class","svelte-1acxfqq"),Ve(t,"class","svelte-1acxfqq"),zr(t,"active",e[0]===e[6]+1),this.first=t},m(h,p){Se(h,t,p),bt(t,n),bt(t,i),bt(i,o),c||(u=wt(t,"click",f),c=!0)},p(h,p){e=h,p&1&&zr(t,"active",e[0]===e[6]+1)},r(){a=t.getBoundingClientRect()},f(){Cc(t),l()},a(){l(),l=Ac(t,a,Uc,{})},d(h){h&&be(t),c=!1,u()}}}function Ma(r){let e;return{c(){e=ft("a"),e.innerHTML=`Lees hier het volledige verslag
        <img src="./icons/external-link.svg" alt="" class="svelte-1acxfqq"/>`,Ve(e,"href","https://operatie-gekkigeit.notion.site/SRP-Threlte-0302c5b6331f4343abed1df12a298e4f"),Ve(e,"target","_blank"),Ve(e,"rel","noreferrer"),Ve(e,"class","svelte-1acxfqq")},m(t,n){Se(t,e,n)},d(t){t&&be(e)}}}function kc(r){let e,t,n,i,s=[],o=new Map,a,l=!r[0]&&va(),c=r[0]!==0&&ba(r),u=Array(6);const f=p=>p[6];for(let p=0;p<u.length;p+=1){let g=xa(r,u,p),d=f(g);o.set(d,s[p]=ya(d,g))}let h=!r[0]&&Ma();return{c(){e=ft("header"),t=ft("nav"),l&&l.c(),n=Ce(),c&&c.c(),i=Ce();for(let p=0;p<s.length;p+=1)s[p].c();a=Ce(),h&&h.c(),Ve(t,"class","svelte-1acxfqq"),Ve(e,"class","svelte-1acxfqq"),zr(e,"minimize",r[0])},m(p,g){Se(p,e,g),bt(e,t),l&&l.m(t,null),bt(t,n),c&&c.m(t,null),bt(t,i);for(let d=0;d<s.length;d+=1)s[d].m(t,null);bt(t,a),h&&h.m(t,null)},p(p,[g]){if(p[0]?l&&(l.d(1),l=null):l||(l=va(),l.c(),l.m(t,n)),p[0]!==0?c?c.p(p,g):(c=ba(p),c.c(),c.m(t,i)):c&&(c.d(1),c=null),g&3){u=Array(6);for(let d=0;d<s.length;d+=1)s[d].r();s=Oc(s,g,f,1,p,u,o,t,Fc,ya,a,xa);for(let d=0;d<s.length;d+=1)s[d].a()}p[0]?h&&(h.d(1),h=null):h||(h=Ma(),h.c(),h.m(t,null)),g&1&&zr(e,"minimize",p[0])},i:Ye,o:Ye,d(p){p&&be(e),l&&l.d(),c&&c.d();for(let g=0;g<s.length;g+=1)s[g].d();h&&h.d()}}}function Bc(r,e,t){let n,i;return xt(r,wi,a=>t(0,n=a)),xt(r,$n,a=>t(1,i=a)),[n,i,()=>sn(wi,n=0,n),a=>{sn(wi,n=a+1,n),sn($n,i=0,i)}]}class Gc extends et{constructor(e){super(),Qe(this,e,Bc,kc,Je,{})}}function Gr(r,{delay:e=0,duration:t=400,easing:n=ir}={}){const i=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:n,css:s=>`opacity: ${s*i}`}}function Sa(r,{delay:e=0,duration:t=400,easing:n=bl}={}){const i=getComputedStyle(r),s=+i.opacity,o=parseFloat(i.height),a=parseFloat(i.paddingTop),l=parseFloat(i.paddingBottom),c=parseFloat(i.marginTop),u=parseFloat(i.marginBottom),f=parseFloat(i.borderTopWidth),h=parseFloat(i.borderBottomWidth);return{delay:e,duration:t,easing:n,css:p=>`overflow: hidden;opacity: ${Math.min(p*20,1)*s};height: ${p*o}px;padding-top: ${p*a}px;padding-bottom: ${p*l}px;margin-top: ${p*c}px;margin-bottom: ${p*u}px;border-top-width: ${p*f}px;border-bottom-width: ${p*h}px;`}}function Vc(r){var d;let e,t,n,i,s,o=((d=r[1][r[0]-1])==null?void 0:d.title)+"",a,l,c,u,f,h,p,g;return{c(){var m;e=ft("footer"),t=ft("a"),n=ft("img"),s=Ce(),a=Kn(o),l=Ce(),c=ft("img"),pa(n.src,i="./threlte.png")||Ve(n,"src",i),Ve(n,"alt","Threlte Logo"),Ve(n,"class","svelte-3j8m7e"),pa(c.src,u="./icons/external-link.svg")||Ve(c,"src",u),Ve(c,"alt",""),Ve(c,"class","svelte-3j8m7e"),Ve(t,"href",f=(m=r[1][r[0]-1])==null?void 0:m.link),Ve(t,"target","_blank"),Ve(t,"rel","noreferrer"),Ve(t,"class","button svelte-3j8m7e"),Ve(e,"class","svelte-3j8m7e")},m(m,_){Se(m,e,_),bt(e,t),bt(t,n),bt(t,s),bt(t,a),bt(t,l),bt(t,c),g=!0},p(m,[_]){var b,v;(!g||_&1)&&o!==(o=((b=m[1][m[0]-1])==null?void 0:b.title)+"")&&Sc(a,o),(!g||_&1&&f!==(f=(v=m[1][m[0]-1])==null?void 0:v.link))&&Ve(t,"href",f)},i(m){g||(vn(()=>{h||(h=hr(t,Gr,{duration:500},!0)),h.run(1)}),vn(()=>{p||(p=hr(e,Sa,{duration:500},!0)),p.run(1)}),g=!0)},o(m){h||(h=hr(t,Gr,{duration:500},!1)),h.run(0),p||(p=hr(e,Sa,{duration:500},!1)),p.run(0),g=!1},d(m){m&&be(e),m&&h&&h.end(),m&&p&&p.end()}}}function Hc(r,e,t){let n;return xt(r,wi,s=>t(0,n=s)),[n,[{title:"Week 1 - Inlezen & Opzet 3D omgeving",link:"https://operatie-gekkigeit.notion.site/Week-1-Inlezen-Opzet-3D-Omgeving-8e2552e3b8d94a5bba97650548879d4a"},{title:"Week 2 - Basic 3D weergave",link:"https://operatie-gekkigeit.notion.site/Week-2-Basic-3D-weergave-c20c4b9e853c43bfa62bf187a42ada7f"},{title:"Week 3 - Interactie",link:"https://operatie-gekkigeit.notion.site/Week-3-Interactie-fbb46aa5bad442f2ab7ec86f62c97781"},{title:"Week 4 - Importeren van 3D models",link:"https://operatie-gekkigeit.notion.site/Week-4-Importeren-van-3D-models-719b2a86732e4e4795d05c3e63c81398"},{title:"Week 5 - Start Eindproduct",link:"https://operatie-gekkigeit.notion.site/Week-5-Start-Eindproduct-79b44ad1e941418d93ec4bc141e748ce"},{title:"Week 6 - Afronding Eindproduct",link:"https://operatie-gekkigeit.notion.site/Week-6-Afronding-Eindproduct-c5d8eb6226864dc4b48265f30c46a770"}]]}class Wc extends et{constructor(e){super(),Qe(this,e,Hc,Vc,Je,{})}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qs="148",si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jc=0,wa=1,qc=2,yl=1,Ml=2,qi=3,ei=0,jt=1,ea=2,dr=3,Tn=0,Ei=1,Ea=2,Ta=3,Aa=4,Xc=5,yi=100,$c=101,Yc=102,Ca=103,La=104,Zc=200,Kc=201,Jc=202,Qc=203,Sl=204,wl=205,eu=206,tu=207,nu=208,iu=209,ru=210,su=0,au=1,ou=2,zs=3,lu=4,cu=5,uu=6,fu=7,El=0,hu=1,du=2,an=0,pu=1,mu=2,gu=3,Tl=4,_u=5,Al=300,Ci=301,Li=302,Us=303,ks=304,Hr=306,Bs=1e3,Jt=1001,Gs=1002,Lt=1003,Pa=1004,Qr=1005,Ht=1006,xu=1007,Qi=1008,ti=1009,vu=1010,bu=1011,Cl=1012,yu=1013,jn=1014,qn=1015,er=1016,Mu=1017,Su=1018,Ti=1020,wu=1021,Eu=1022,Qt=1023,Tu=1024,Au=1025,Yn=1026,Pi=1027,Cu=1028,Lu=1029,Pu=1030,Du=1031,Ru=1033,es=33776,ts=33777,ns=33778,is=33779,Da=35840,Ra=35841,Ia=35842,Fa=35843,Iu=36196,Oa=37492,Na=37496,za=37808,Ua=37809,ka=37810,Ba=37811,Ga=37812,Va=37813,Ha=37814,Wa=37815,ja=37816,qa=37817,Xa=37818,$a=37819,Ya=37820,Za=37821,Ka=36492,An=3e3,Ze=3001,Fu=3200,Ou=3201,Ll=0,Nu=1,en="srgb",tr="srgb-linear",rs=7680,zu=519,Ja=35044,Qa="300 es",Vs=1035;class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ss=Math.PI/180,eo=180/Math.PI;function sr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[r&255]+St[r>>8&255]+St[r>>16&255]+St[r>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Rt(r,e,t){return Math.max(e,Math.min(t,r))}function Uu(r,e){return(r%e+e)%e}function as(r,e,t){return(1-t)*r+t*e}function to(r){return(r&r-1)===0&&r!==0}function Hs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function pr(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],d=i[0],m=i[3],_=i[6],b=i[1],v=i[4],w=i[7],M=i[2],C=i[5],I=i[8];return s[0]=o*d+a*b+l*M,s[3]=o*m+a*v+l*C,s[6]=o*_+a*w+l*I,s[1]=c*d+u*b+f*M,s[4]=c*m+u*v+f*C,s[7]=c*_+u*w+f*I,s[2]=h*d+p*b+g*M,s[5]=h*m+p*v+g*C,s[8]=h*_+p*w+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*f+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(i*c-u*n)*d,e[2]=(a*n-i*o)*d,e[3]=h*d,e[4]=(u*t-i*l)*d,e[5]=(i*s-a*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(os.makeScale(e,t)),this}rotate(e){return this.premultiply(os.makeRotation(-e)),this}translate(e,t){return this.premultiply(os.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const os=new kt;function Pl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function nr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Or(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ls={[en]:{[tr]:Zn},[tr]:{[en]:Or}},At={legacyMode:!0,get workingColorSpace(){return tr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(ls[e]&&ls[e][t]!==void 0){const n=ls[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ut={r:0,g:0,b:0},$t={h:0,s:0,l:0},mr={h:0,s:0,l:0};function cs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function gr(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=At.workingColorSpace){return this.r=e,this.g=t,this.b=n,At.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=At.workingColorSpace){if(e=Uu(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=cs(o,s,e+1/3),this.g=cs(o,s,e),this.b=cs(o,s,e-1/3)}return At.toWorkingColorSpace(this,i),this}setStyle(e,t=en){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,At.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,At.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,At.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,At.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=en){const n=Dl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return At.fromWorkingColorSpace(gr(this,ut),e),Rt(ut.r*255,0,255)<<16^Rt(ut.g*255,0,255)<<8^Rt(ut.b*255,0,255)<<0}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(gr(this,ut),t);const n=ut.r,i=ut.g,s=ut.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(gr(this,ut),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=en){return At.fromWorkingColorSpace(gr(this,ut),e),e!==en?`color(${e} ${ut.r} ${ut.g} ${ut.b})`:`rgb(${ut.r*255|0},${ut.g*255|0},${ut.b*255|0})`}offsetHSL(e,t,n){return this.getHSL($t),$t.h+=e,$t.s+=t,$t.l+=n,this.setHSL($t.h,$t.s,$t.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($t),e.getHSL(mr);const n=as($t.h,mr.h,t),i=as($t.s,mr.s,t),s=as($t.l,mr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Xe.NAMES=Dl;let oi;class Rl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=nr("canvas")),oi.width=e.width,oi.height=e.height;const n=oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Zn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Il{constructor(e=null){this.isSource=!0,this.uuid=sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(us(i[o].image)):s.push(us(i[o]))}else s=us(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function us(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ku=0;class It extends ii{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Jt,i=Jt,s=Ht,o=Qi,a=Qt,l=ti,c=It.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=sr(),this.name="",this.source=new Il(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Al;It.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,w=(p+1)/2,M=(_+1)/2,C=(u+h)/4,I=(f+d)/4,x=(g+m)/4;return v>w&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=C/n,s=I/n):w>M?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=C/i,s=x/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=I/s,i=x/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-d)/b,this.z=(h-u)/b,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cn extends ii{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ht,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Il(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fl extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bu extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],p=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==p||u!==g){let m=1-a;const _=l*h+c*p+u*g+f*d,b=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const M=Math.sqrt(v),C=Math.atan2(M,_*b);m=Math.sin(m*C)/M,a=Math.sin(a*C)/M}const w=a*b;if(l=l*m+h*w,c=c*m+p*w,u=u*m+g*w,f=f*m+d*w,m===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(no.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(no.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,f=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fs.copy(this).projectOnVector(e),this.sub(fs)}reflect(e){return this.sub(fs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fs=new k,no=new ni;class ar{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)kn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(kn)}else n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox),hs.applyMatrix4(e.matrixWorld),this.union(hs);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),_r.subVectors(this.max,Ui),li.subVectors(e.a,Ui),ci.subVectors(e.b,Ui),ui.subVectors(e.c,Ui),Mn.subVectors(ci,li),Sn.subVectors(ui,ci),Bn.subVectors(li,ui);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Bn.z,Bn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Bn.z,0,-Bn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Bn.y,Bn.x,0];return!ds(t,li,ci,ui,_r)||(t=[1,0,0,0,1,0,0,0,1],!ds(t,li,ci,ui,_r))?!1:(xr.crossVectors(Mn,Sn),t=[xr.x,xr.y,xr.z],ds(t,li,ci,ui,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return kn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new k,new k,new k,new k,new k,new k,new k,new k],kn=new k,hs=new ar,li=new k,ci=new k,ui=new k,Mn=new k,Sn=new k,Bn=new k,Ui=new k,_r=new k,xr=new k,Gn=new k;function ds(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Gn.fromArray(r,s);const a=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),u=n.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Gu=new ar,ki=new k,ps=new k;class ta{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ki,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ps.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(ps)),this.expandByPoint(ki.copy(e.center).sub(ps))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new k,ms=new k,vr=new k,wn=new k,gs=new k,br=new k,_s=new k;class Ol{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.direction).multiplyScalar(t).add(this.origin),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ms.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(ms);const s=e.distanceTo(t)*.5,o=-this.direction.dot(vr),a=wn.dot(this.direction),l=-wn.dot(vr),c=wn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(vr).multiplyScalar(h).add(ms),p}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,i,s){gs.subVectors(t,e),br.subVectors(n,e),_s.crossVectors(gs,br);let o=this.direction.dot(_s),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,e);const l=a*this.direction.dot(br.crossVectors(wn,br));if(l<0)return null;const c=a*this.direction.dot(gs.cross(wn));if(c<0||l+c>o)return null;const u=-a*wn.dot(_s);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,f,h,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fi.setFromMatrixColumn(e,0).length(),s=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h+d*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h-d*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vu,e,Hu)}lookAt(e,t,n){const i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),En.crossVectors(n,zt),En.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),En.crossVectors(n,zt)),En.normalize(),yr.crossVectors(zt,En),i[0]=En.x,i[4]=yr.x,i[8]=zt.x,i[1]=En.y,i[5]=yr.y,i[9]=zt.y,i[2]=En.z,i[6]=yr.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],b=n[3],v=n[7],w=n[11],M=n[15],C=i[0],I=i[4],x=i[8],A=i[12],P=i[1],B=i[5],ie=i[9],z=i[13],F=i[2],q=i[6],Y=i[10],$=i[14],j=i[3],ne=i[7],Z=i[11],L=i[15];return s[0]=o*C+a*P+l*F+c*j,s[4]=o*I+a*B+l*q+c*ne,s[8]=o*x+a*ie+l*Y+c*Z,s[12]=o*A+a*z+l*$+c*L,s[1]=u*C+f*P+h*F+p*j,s[5]=u*I+f*B+h*q+p*ne,s[9]=u*x+f*ie+h*Y+p*Z,s[13]=u*A+f*z+h*$+p*L,s[2]=g*C+d*P+m*F+_*j,s[6]=g*I+d*B+m*q+_*ne,s[10]=g*x+d*ie+m*Y+_*Z,s[14]=g*A+d*z+m*$+_*L,s[3]=b*C+v*P+w*F+M*j,s[7]=b*I+v*B+w*q+M*ne,s[11]=b*x+v*ie+w*Y+M*Z,s[15]=b*A+v*z+w*$+M*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*p-n*l*p)+d*(+t*l*p-t*c*h+s*o*h-i*o*p+i*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+n*o*p+s*a*u-n*c*u)+_*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],b=f*m*c-d*h*c+d*l*p-a*m*p-f*l*_+a*h*_,v=g*h*c-u*m*c-g*l*p+o*m*p+u*l*_-o*h*_,w=u*d*c-g*f*c+g*a*p-o*d*p-u*a*_+o*f*_,M=g*f*l-u*d*l-g*a*h+o*d*h+u*a*m-o*f*m,C=t*b+n*v+i*w+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return e[0]=b*I,e[1]=(d*h*s-f*m*s-d*i*p+n*m*p+f*i*_-n*h*_)*I,e[2]=(a*m*s-d*l*s+d*i*c-n*m*c-a*i*_+n*l*_)*I,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*p-n*l*p)*I,e[4]=v*I,e[5]=(u*m*s-g*h*s+g*i*p-t*m*p-u*i*_+t*h*_)*I,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*_-t*l*_)*I,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*p+t*l*p)*I,e[8]=w*I,e[9]=(g*f*s-u*d*s-g*n*p+t*d*p+u*n*_-t*f*_)*I,e[10]=(o*d*s-g*a*s+g*n*c-t*d*c-o*n*_+t*a*_)*I,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*p-t*a*p)*I,e[12]=M*I,e[13]=(u*d*i-g*f*i+g*n*h-t*d*h-u*n*m+t*f*m)*I,e[14]=(g*a*i-o*d*i-g*n*l+t*d*l+o*n*m-t*a*m)*I,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,d=o*u,m=o*f,_=a*f,b=l*c,v=l*u,w=l*f,M=n.x,C=n.y,I=n.z;return i[0]=(1-(d+_))*M,i[1]=(p+w)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(p-w)*C,i[5]=(1-(h+_))*C,i[6]=(m+b)*C,i[7]=0,i[8]=(g+v)*I,i[9]=(m-b)*I,i[10]=(1-(h+d))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fi.set(i[0],i[1],i[2]).length();const o=fi.set(i[4],i[5],i[6]).length(),a=fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Yt.copy(this);const c=1/s,u=1/o,f=1/a;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=f,Yt.elements[9]*=f,Yt.elements[10]*=f,t.setFromRotationMatrix(Yt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),f=(t+e)*l,h=(n+i)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fi=new k,Yt=new at,Vu=new k(0,0,0),Hu=new k(1,1,1),En=new k,yr=new k,zt=new k,io=new at,ro=new ni;class or{constructor(e=0,t=0,n=0,i=or.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(io,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ro.setFromEuler(this),this.setFromQuaternion(ro,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}or.DefaultOrder="XYZ";or.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class na{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wu=0;const so=new k,hi=new ni,pn=new at,Mr=new k,Bi=new k,ju=new k,qu=new ni,ao=new k(1,0,0),oo=new k(0,1,0),lo=new k(0,0,1),Xu={type:"added"},co={type:"removed"};class ot extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DefaultUp.clone();const e=new k,t=new or,n=new ni,i=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new kt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=ot.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ot.DefaultMatrixWorldAutoUpdate,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(ao,e)}rotateY(e){return this.rotateOnAxis(oo,e)}rotateZ(e){return this.rotateOnAxis(lo,e)}translateOnAxis(e,t){return so.copy(e).applyQuaternion(this.quaternion),this.position.add(so.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ao,e)}translateY(e){return this.translateOnAxis(oo,e)}translateZ(e){return this.translateOnAxis(lo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mr.copy(e):Mr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Bi,Mr,this.up):pn.lookAt(Mr,Bi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(pn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(co)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(co)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,ju),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,qu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DefaultUp=new k(0,1,0);ot.DefaultMatrixAutoUpdate=!0;ot.DefaultMatrixWorldAutoUpdate=!0;const Zt=new k,mn=new k,xs=new k,gn=new k,di=new k,pi=new k,uo=new k,vs=new k,bs=new k,ys=new k;class _n{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Zt.subVectors(e,t),i.cross(Zt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Zt.subVectors(i,t),mn.subVectors(n,t),xs.subVectors(e,t);const o=Zt.dot(Zt),a=Zt.dot(mn),l=Zt.dot(xs),c=mn.dot(mn),u=mn.dot(xs),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gn),gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,gn),l.set(0,0),l.addScaledVector(s,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l}static isFrontFacing(e,t,n,i){return Zt.subVectors(n,t),mn.subVectors(e,t),Zt.cross(mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Zt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return _n.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;di.subVectors(i,n),pi.subVectors(s,n),vs.subVectors(e,n);const l=di.dot(vs),c=pi.dot(vs);if(l<=0&&c<=0)return t.copy(n);bs.subVectors(e,i);const u=di.dot(bs),f=pi.dot(bs);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(di,o);ys.subVectors(e,s);const p=di.dot(ys),g=pi.dot(ys);if(g>=0&&p<=g)return t.copy(s);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(pi,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return uo.subVectors(s,i),a=(f-u)/(f-u+(p-g)),t.copy(i).addScaledVector(uo,a);const _=1/(m+d+h);return o=d*_,a=h*_,t.copy(n).addScaledVector(di,o).addScaledVector(pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let $u=0;class lr extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=Ei,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Sl,this.blendDst=wl,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nl extends lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new k,Sr=new Pe;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ja,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ja&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class zl extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ul extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yu=0;const Vt=new at,Ms=new ot,mi=new k,Ut=new ar,Gi=new ar,_t=new k;class yn extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pl(e)?Ul:zl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new kt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return Ms.lookAt(e),Ms.updateMatrix(),this.applyMatrix4(Ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Gi.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Ut.min,Gi.min),Ut.expandByPoint(_t),_t.addVectors(Ut.max,Gi.max),Ut.expandByPoint(_t)):(Ut.expandByPoint(Gi.min),Ut.expandByPoint(Gi.max))}Ut.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_t.fromBufferAttribute(a,c),l&&(mi.fromBufferAttribute(e,c),_t.add(mi)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new k,u[P]=new k;const f=new k,h=new k,p=new k,g=new Pe,d=new Pe,m=new Pe,_=new k,b=new k;function v(P,B,ie){f.fromArray(i,P*3),h.fromArray(i,B*3),p.fromArray(i,ie*3),g.fromArray(o,P*2),d.fromArray(o,B*2),m.fromArray(o,ie*2),h.sub(f),p.sub(f),d.sub(g),m.sub(g);const z=1/(d.x*m.y-m.x*d.y);isFinite(z)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(z),b.copy(p).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(z),c[P].add(_),c[B].add(_),c[ie].add(_),u[P].add(b),u[B].add(b),u[ie].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let P=0,B=w.length;P<B;++P){const ie=w[P],z=ie.start,F=ie.count;for(let q=z,Y=z+F;q<Y;q+=3)v(n[q+0],n[q+1],n[q+2])}const M=new k,C=new k,I=new k,x=new k;function A(P){I.fromArray(s,P*3),x.copy(I);const B=c[P];M.copy(B),M.sub(I.multiplyScalar(I.dot(B))).normalize(),C.crossVectors(x,B);const z=C.dot(u[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=z}for(let P=0,B=w.length;P<B;++P){const ie=w[P],z=ie.start,F=ie.count;for(let q=z,Y=z+F;q<Y;q+=3)A(n[q+0]),A(n[q+1]),A(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),d=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*u;for(let _=0;_<u;_++)h[g++]=c[p++]}return new on(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const fo=new at,gi=new Ol,Ss=new ta,Vi=new k,Hi=new k,Wi=new k,ws=new k,wr=new k,Er=new Pe,Tr=new Pe,Ar=new Pe,Es=new k,Cr=new k;class Pt extends ot{constructor(e=new yn,t=new Nl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){wr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ws.fromBufferAttribute(f,e),o?wr.addScaledVector(ws,u):wr.addScaledVector(ws.sub(t),u))}t.add(wr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),e.ray.intersectsSphere(Ss)===!1)||(fo.copy(s).invert(),gi.copy(e.ray).applyMatrix4(fo),n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,g=f.length;p<g;p++){const d=f[p],m=i[d.materialIndex],_=Math.max(d.start,h.start),b=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let v=_,w=b;v<w;v+=3){const M=a.getX(v),C=a.getX(v+1),I=a.getX(v+2);o=Lr(this,m,e,gi,c,u,M,C,I),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let d=p,m=g;d<m;d+=3){const _=a.getX(d),b=a.getX(d+1),v=a.getX(d+2);o=Lr(this,i,e,gi,c,u,_,b,v),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=f.length;p<g;p++){const d=f[p],m=i[d.materialIndex],_=Math.max(d.start,h.start),b=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let v=_,w=b;v<w;v+=3){const M=v,C=v+1,I=v+2;o=Lr(this,m,e,gi,c,u,M,C,I),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let d=p,m=g;d<m;d+=3){const _=d,b=d+1,v=d+2;o=Lr(this,i,e,gi,c,u,_,b,v),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function Zu(r,e,t,n,i,s,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ei,a),l===null)return null;Cr.copy(a),Cr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Cr);return c<t.near||c>t.far?null:{distance:c,point:Cr.clone(),object:r}}function Lr(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Vi),r.getVertexPosition(a,Hi),r.getVertexPosition(l,Wi);const c=Zu(r,e,t,n,Vi,Hi,Wi,Es);if(c){i&&(Er.fromBufferAttribute(i,o),Tr.fromBufferAttribute(i,a),Ar.fromBufferAttribute(i,l),c.uv=_n.getUV(Es,Vi,Hi,Wi,Er,Tr,Ar,new Pe)),s&&(Er.fromBufferAttribute(s,o),Tr.fromBufferAttribute(s,a),Ar.fromBufferAttribute(s,l),c.uv2=_n.getUV(Es,Vi,Hi,Wi,Er,Tr,Ar,new Pe));const u={a:o,b:a,c:l,normal:new k,materialIndex:0};_n.getNormal(Vi,Hi,Wi,u.normal),c.face=u}return c}class cn extends yn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function g(d,m,_,b,v,w,M,C,I,x,A){const P=w/I,B=M/x,ie=w/2,z=M/2,F=C/2,q=I+1,Y=x+1;let $=0,j=0;const ne=new k;for(let Z=0;Z<Y;Z++){const L=Z*B-z;for(let V=0;V<q;V++){const K=V*P-ie;ne[d]=K*b,ne[m]=L*v,ne[_]=F,c.push(ne.x,ne.y,ne.z),ne[d]=0,ne[m]=0,ne[_]=C>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(V/I),f.push(1-Z/x),$+=1}}for(let Z=0;Z<x;Z++)for(let L=0;L<I;L++){const V=h+L+q*Z,K=h+L+q*(Z+1),ee=h+(L+1)+q*(Z+1),oe=h+(L+1)+q*Z;l.push(V,K,oe),l.push(K,ee,oe),j+=6}a.addGroup(p,j,A),p+=j,h+=$}}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ct(r){const e={};for(let t=0;t<r.length;t++){const n=Di(r[t]);for(const i in n)e[i]=n[i]}return e}function Ku(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function kl(r){return r.getRenderTarget()===null&&r.outputEncoding===Ze?en:tr}const Bl={clone:Di,merge:Ct};var Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=Qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Ku(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ia extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yt extends ia{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ss*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,xi=1;class ef extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new yt(_i,xi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new yt(_i,xi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new yt(_i,xi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new yt(_i,xi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new yt(_i,xi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new yt(_i,xi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=an,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Gl extends It{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ci,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tf extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new cn(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Tn});s.uniforms.tEquirect.value=t;const o=new Pt(i,s),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=Ht),new ef(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Ts=new k,nf=new k,rf=new kt;class Vn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ts.subVectors(n,t).cross(nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ts),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rf.getNormalMatrix(e),i=this.coplanarPoint(Ts).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new ta,Pr=new k;class ra{constructor(e=new Vn,t=new Vn,n=new Vn,i=new Vn,s=new Vn,o=new Vn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],b=n[14],v=n[15];return t[0].setComponents(a-i,f-l,d-h,v-m).normalize(),t[1].setComponents(a+i,f+l,d+h,v+m).normalize(),t[2].setComponents(a+s,f+c,d+p,v+_).normalize(),t[3].setComponents(a-s,f-c,d-p,v-_).normalize(),t[4].setComponents(a-o,f-u,d-g,v-b).normalize(),t[5].setComponents(a+o,f+u,d+g,v+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Pr.x=i.normal.x>0?e.max.x:e.min.x,Pr.y=i.normal.y>0?e.max.y:e.min.y,Pr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vl(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function sf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;r.bindBuffer(f,c),p.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class sa extends yn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const b=_*h-o;for(let v=0;v<c;v++){const w=v*f-s;g.push(w,-b,0),d.push(0,0,1),m.push(v/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const v=b+c*_,w=b+c*(_+1),M=b+1+c*(_+1),C=b+1+c*_;p.push(v,w,C),p.push(w,M,C)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(m,2))}static fromJSON(e){return new sa(e.width,e.height,e.widthSegments,e.heightSegments)}}var af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf="vec3 transformed = vec3( position );",df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,mf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ef=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Tf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Af=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",If=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$f=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,th=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ih=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,sh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ah=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ch=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ph=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_h=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,xh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,bh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Eh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Th=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ah=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ch=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ph=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Dh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ih=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zh=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Uh=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kh=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Bh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Hh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$h=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Zh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Kh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Jh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Qh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ed=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,td=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,nd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,id=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,od=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ud=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,md=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_d=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ed=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Td=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ad=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ld=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Nd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:af,alphamap_pars_fragment:of,alphatest_fragment:lf,alphatest_pars_fragment:cf,aomap_fragment:uf,aomap_pars_fragment:ff,begin_vertex:hf,beginnormal_vertex:df,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:_f,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:vf,clipping_planes_vertex:bf,color_fragment:yf,color_pars_fragment:Mf,color_pars_vertex:Sf,color_vertex:wf,common:Ef,cube_uv_reflection_fragment:Tf,defaultnormal_vertex:Af,displacementmap_pars_vertex:Cf,displacementmap_vertex:Lf,emissivemap_fragment:Pf,emissivemap_pars_fragment:Df,encodings_fragment:Rf,encodings_pars_fragment:If,envmap_fragment:Ff,envmap_common_pars_fragment:Of,envmap_pars_fragment:Nf,envmap_pars_vertex:zf,envmap_physical_pars_fragment:Yf,envmap_vertex:Uf,fog_vertex:kf,fog_pars_vertex:Bf,fog_fragment:Gf,fog_pars_fragment:Vf,gradientmap_pars_fragment:Hf,lightmap_fragment:Wf,lightmap_pars_fragment:jf,lights_lambert_fragment:qf,lights_lambert_pars_fragment:Xf,lights_pars_begin:$f,lights_toon_fragment:Zf,lights_toon_pars_fragment:Kf,lights_phong_fragment:Jf,lights_phong_pars_fragment:Qf,lights_physical_fragment:eh,lights_physical_pars_fragment:th,lights_fragment_begin:nh,lights_fragment_maps:ih,lights_fragment_end:rh,logdepthbuf_fragment:sh,logdepthbuf_pars_fragment:ah,logdepthbuf_pars_vertex:oh,logdepthbuf_vertex:lh,map_fragment:ch,map_pars_fragment:uh,map_particle_fragment:fh,map_particle_pars_fragment:hh,metalnessmap_fragment:dh,metalnessmap_pars_fragment:ph,morphcolor_vertex:mh,morphnormal_vertex:gh,morphtarget_pars_vertex:_h,morphtarget_vertex:xh,normal_fragment_begin:vh,normal_fragment_maps:bh,normal_pars_fragment:yh,normal_pars_vertex:Mh,normal_vertex:Sh,normalmap_pars_fragment:wh,clearcoat_normal_fragment_begin:Eh,clearcoat_normal_fragment_maps:Th,clearcoat_pars_fragment:Ah,iridescence_pars_fragment:Ch,output_fragment:Lh,packing:Ph,premultiplied_alpha_fragment:Dh,project_vertex:Rh,dithering_fragment:Ih,dithering_pars_fragment:Fh,roughnessmap_fragment:Oh,roughnessmap_pars_fragment:Nh,shadowmap_pars_fragment:zh,shadowmap_pars_vertex:Uh,shadowmap_vertex:kh,shadowmask_pars_fragment:Bh,skinbase_vertex:Gh,skinning_pars_vertex:Vh,skinning_vertex:Hh,skinnormal_vertex:Wh,specularmap_fragment:jh,specularmap_pars_fragment:qh,tonemapping_fragment:Xh,tonemapping_pars_fragment:$h,transmission_fragment:Yh,transmission_pars_fragment:Zh,uv_pars_fragment:Kh,uv_pars_vertex:Jh,uv_vertex:Qh,uv2_pars_fragment:ed,uv2_pars_vertex:td,uv2_vertex:nd,worldpos_vertex:id,background_vert:rd,background_frag:sd,backgroundCube_vert:ad,backgroundCube_frag:od,cube_vert:ld,cube_frag:cd,depth_vert:ud,depth_frag:fd,distanceRGBA_vert:hd,distanceRGBA_frag:dd,equirect_vert:pd,equirect_frag:md,linedashed_vert:gd,linedashed_frag:_d,meshbasic_vert:xd,meshbasic_frag:vd,meshlambert_vert:bd,meshlambert_frag:yd,meshmatcap_vert:Md,meshmatcap_frag:Sd,meshnormal_vert:wd,meshnormal_frag:Ed,meshphong_vert:Td,meshphong_frag:Ad,meshphysical_vert:Cd,meshphysical_frag:Ld,meshtoon_vert:Pd,meshtoon_frag:Dd,points_vert:Rd,points_frag:Id,shadow_vert:Fd,shadow_frag:Od,sprite_vert:Nd,sprite_frag:zd},ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new kt},uv2Transform:{value:new kt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new kt}}},tn={basic:{uniforms:Ct([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Ct([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Ct([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Ct([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Ct([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Ct([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Ct([ae.points,ae.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Ct([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Ct([ae.common,ae.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Ct([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Ct([ae.sprite,ae.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Ct([ae.common,ae.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Ct([ae.lights,ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};tn.physical={uniforms:Ct([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const Dr={r:0,b:0,g:0};function Ud(r,e,t,n,i,s,o){const a=new Xe(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,_){let b=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const w=r.xr,M=w.getSession&&w.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?d(a,l):v&&v.isColor&&(d(v,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Hr)?(u===void 0&&(u=new Pt(new cn(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Di(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,I,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==Ze,(f!==v||h!==v.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Pt(new sa(2,2),new bn({name:"BackgroundMaterial",uniforms:Di(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==Ze,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(Dr,kl(r)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:g}}function kd(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(F,q,Y,$,j){let ne=!1;if(o){const Z=d($,Y,q);c!==Z&&(c=Z,p(c.object)),ne=_(F,$,Y,j),ne&&b(F,$,Y,j)}else{const Z=q.wireframe===!0;(c.geometry!==$.id||c.program!==Y.id||c.wireframe!==Z)&&(c.geometry=$.id,c.program=Y.id,c.wireframe=Z,ne=!0)}j!==null&&t.update(j,34963),(ne||u)&&(u=!1,x(F,q,Y,$),j!==null&&r.bindBuffer(34963,t.get(j).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(F){return n.isWebGL2?r.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?r.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function d(F,q,Y){const $=Y.wireframe===!0;let j=a[F.id];j===void 0&&(j={},a[F.id]=j);let ne=j[q.id];ne===void 0&&(ne={},j[q.id]=ne);let Z=ne[$];return Z===void 0&&(Z=m(h()),ne[$]=Z),Z}function m(F){const q=[],Y=[],$=[];for(let j=0;j<i;j++)q[j]=0,Y[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Y,attributeDivisors:$,object:F,attributes:{},index:null}}function _(F,q,Y,$){const j=c.attributes,ne=q.attributes;let Z=0;const L=Y.getAttributes();for(const V in L)if(L[V].location>=0){const ee=j[V];let oe=ne[V];if(oe===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor)),ee===void 0||ee.attribute!==oe||oe&&ee.data!==oe.data)return!0;Z++}return c.attributesNum!==Z||c.index!==$}function b(F,q,Y,$){const j={},ne=q.attributes;let Z=0;const L=Y.getAttributes();for(const V in L)if(L[V].location>=0){let ee=ne[V];ee===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor));const oe={};oe.attribute=ee,ee&&ee.data&&(oe.data=ee.data),j[V]=oe,Z++}c.attributes=j,c.attributesNum=Z,c.index=$}function v(){const F=c.newAttributes;for(let q=0,Y=F.length;q<Y;q++)F[q]=0}function w(F){M(F,0)}function M(F,q){const Y=c.newAttributes,$=c.enabledAttributes,j=c.attributeDivisors;Y[F]=1,$[F]===0&&(r.enableVertexAttribArray(F),$[F]=1),j[F]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,q),j[F]=q)}function C(){const F=c.newAttributes,q=c.enabledAttributes;for(let Y=0,$=q.length;Y<$;Y++)q[Y]!==F[Y]&&(r.disableVertexAttribArray(Y),q[Y]=0)}function I(F,q,Y,$,j,ne){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(F,q,Y,j,ne):r.vertexAttribPointer(F,q,Y,$,j,ne)}function x(F,q,Y,$){if(n.isWebGL2===!1&&(F.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=$.attributes,ne=Y.getAttributes(),Z=q.defaultAttributeValues;for(const L in ne){const V=ne[L];if(V.location>=0){let K=j[L];if(K===void 0&&(L==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),L==="instanceColor"&&F.instanceColor&&(K=F.instanceColor)),K!==void 0){const ee=K.normalized,oe=K.itemSize,R=t.get(K);if(R===void 0)continue;const fe=R.buffer,xe=R.type,Ee=R.bytesPerElement;if(K.isInterleavedBufferAttribute){const _e=K.data,He=_e.stride,De=K.offset;if(_e.isInstancedInterleavedBuffer){for(let Te=0;Te<V.locationSize;Te++)M(V.location+Te,_e.meshPerAttribute);F.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Te=0;Te<V.locationSize;Te++)w(V.location+Te);r.bindBuffer(34962,fe);for(let Te=0;Te<V.locationSize;Te++)I(V.location+Te,oe/V.locationSize,xe,ee,He*Ee,(De+oe/V.locationSize*Te)*Ee)}else{if(K.isInstancedBufferAttribute){for(let _e=0;_e<V.locationSize;_e++)M(V.location+_e,K.meshPerAttribute);F.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let _e=0;_e<V.locationSize;_e++)w(V.location+_e);r.bindBuffer(34962,fe);for(let _e=0;_e<V.locationSize;_e++)I(V.location+_e,oe/V.locationSize,xe,ee,oe*Ee,oe/V.locationSize*_e*Ee)}}else if(Z!==void 0){const ee=Z[L];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(V.location,ee);break;case 3:r.vertexAttrib3fv(V.location,ee);break;case 4:r.vertexAttrib4fv(V.location,ee);break;default:r.vertexAttrib1fv(V.location,ee)}}}}C()}function A(){ie();for(const F in a){const q=a[F];for(const Y in q){const $=q[Y];for(const j in $)g($[j].object),delete $[j];delete q[Y]}delete a[F]}}function P(F){if(a[F.id]===void 0)return;const q=a[F.id];for(const Y in q){const $=q[Y];for(const j in $)g($[j].object),delete $[j];delete q[Y]}delete a[F.id]}function B(F){for(const q in a){const Y=a[q];if(Y[F.id]===void 0)continue;const $=Y[F.id];for(const j in $)g($[j].object),delete $[j];delete Y[F.id]}}function ie(){z(),u=!0,c!==l&&(c=l,p(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ie,resetDefaultState:z,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:w,disableUnusedAttributes:C}}function Bd(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(i)h=r,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Gd(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),d=r.getParameter(34921),m=r.getParameter(36347),_=r.getParameter(36348),b=r.getParameter(36349),v=h>0,w=o||e.has("OES_texture_float"),M=v&&w,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:M,maxSamples:C}}function Vd(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Vn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,p){const g=f.length!==0||h||n!==0||i;return i=h,t=u(f,p,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,p){const g=f.clippingPlanes,d=f.clipIntersection,m=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,v=b*4;let w=_.clippingState||null;l.value=w,w=u(g,h,v,p);for(let M=0;M!==v;++M)w[M]=t[M];_.clippingState=w,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const d=f!==null?f.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,w=p;v!==d;++v,w+=4)o.copy(f[v]).applyMatrix4(b,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function Hd(r){let e=new WeakMap;function t(o,a){return a===Us?o.mapping=Ci:a===ks&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Us||a===ks)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tf(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class aa extends ia{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mi=4,ho=[.125,.215,.35,.446,.526,.582],Wn=20,As=new aa,po=new Xe;let Cs=null;const Hn=(1+Math.sqrt(5))/2,bi=1/Hn,mo=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Hn,bi),new k(0,Hn,-bi),new k(bi,0,Hn),new k(-bi,0,Hn),new k(Hn,bi,0),new k(-Hn,bi,0)];class go{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Cs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cs),e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:er,format:Qt,encoding:An,depthBuffer:!1},i=_o(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_o(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wd(s)),this._blurMaterial=jd(s,e,t)}return i}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,As)}_sceneToCubeUV(e,t,n,i){const a=new yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(po),u.toneMapping=an,u.autoClear=!1;const p=new Nl({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new Pt(new cn,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(po),d=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const v=this._cubeSize;Rr(i,b*v,_>2?v:0,v,v),u.setRenderTarget(i),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ci||e.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xo());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,As)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=mo[(i-1)%mo.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Pt(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wn-1),d=s/g,m=isFinite(s)?1+Math.floor(u*d):Wn;m>Wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wn}`);const _=[];let b=0;for(let I=0;I<Wn;++I){const x=I/d,A=Math.exp(-x*x/2);_.push(A),I===0?b+=A:I<m&&(b+=2*A)}for(let I=0;I<_.length;I++)_[I]=_[I]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const w=this._sizeLods[i],M=3*w*(i>v-Mi?i-v+Mi:0),C=4*(this._cubeSize-w);Rr(t,M,C,3*w,2*w),l.setRenderTarget(t),l.render(f,As)}}function Wd(r){const e=[],t=[],n=[];let i=r;const s=r-Mi+1+ho.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Mi?l=ho[o-r+Mi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,d=3,m=2,_=1,b=new Float32Array(d*g*p),v=new Float32Array(m*g*p),w=new Float32Array(_*g*p);for(let C=0;C<p;C++){const I=C%3*2/3-1,x=C>2?0:-1,A=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];b.set(A,d*g*C),v.set(h,m*g*C);const P=[C,C,C,C,C,C];w.set(P,_*g*C)}const M=new yn;M.setAttribute("position",new on(b,d)),M.setAttribute("uv",new on(v,m)),M.setAttribute("faceIndex",new on(w,_)),e.push(M),i>Mi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _o(r,e,t){const n=new Cn(r,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function jd(r,e,t){const n=new Float32Array(Wn),i=new k(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function xo(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function vo(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qd(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Us||l===ks,u=l===Ci||l===Li;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new go(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new go(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Xd(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $d(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let d=0;if(p!==null){const b=p.array;d=p.version;for(let v=0,w=b.length;v<w;v+=3){const M=b[v+0],C=b[v+1],I=b[v+2];h.push(M,C,C,I,I,M)}}else{const b=g.array;d=g.version;for(let v=0,w=b.length/3-1;v<w;v+=3){const M=v+0,C=v+1,I=v+2;h.push(M,C,C,I,I,M)}}const m=new(Pl(h)?Ul:zl)(h,1);m.version=d;const _=s.get(f);_&&e.remove(_),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Yd(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){r.drawElements(s,p,a,h*l),t.update(p,s,1)}function f(h,p,g){if(g===0)return;let d,m;if(i)d=r,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,p,a,h*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Zd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Kd(r,e){return r[0]-e[0]}function Jd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Qd(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new vt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==m){let Y=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",Y)};var g=Y;_!==void 0&&_.texture.dispose();const w=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let P=0;w===!0&&(P=1),M===!0&&(P=2),C===!0&&(P=3);let B=u.attributes.position.count*P,ie=1;B>e.maxTextureSize&&(ie=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const z=new Float32Array(B*ie*4*m),F=new Fl(z,B,ie,m);F.type=qn,F.needsUpdate=!0;const q=P*4;for(let $=0;$<m;$++){const j=I[$],ne=x[$],Z=A[$],L=B*ie*4*$;for(let V=0;V<j.count;V++){const K=V*q;w===!0&&(o.fromBufferAttribute(j,V),z[L+K+0]=o.x,z[L+K+1]=o.y,z[L+K+2]=o.z,z[L+K+3]=0),M===!0&&(o.fromBufferAttribute(ne,V),z[L+K+4]=o.x,z[L+K+5]=o.y,z[L+K+6]=o.z,z[L+K+7]=0),C===!0&&(o.fromBufferAttribute(Z,V),z[L+K+8]=o.x,z[L+K+9]=o.y,z[L+K+10]=o.z,z[L+K+11]=Z.itemSize===4?o.w:1)}}_={count:m,texture:F,size:new Pe(B,ie)},s.set(u,_),u.addEventListener("dispose",Y)}let b=0;for(let w=0;w<p.length;w++)b+=p[w];const v=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",p),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const d=p===void 0?0:p.length;let m=n[u.id];if(m===void 0||m.length!==d){m=[];for(let M=0;M<d;M++)m[M]=[M,0];n[u.id]=m}for(let M=0;M<d;M++){const C=m[M];C[0]=M,C[1]=p[M]}m.sort(Jd);for(let M=0;M<8;M++)M<d&&m[M][1]?(a[M][0]=m[M][0],a[M][1]=m[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Kd);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const C=a[M],I=C[0],x=C[1];I!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+M)!==_[I]&&u.setAttribute("morphTarget"+M,_[I]),b&&u.getAttribute("morphNormal"+M)!==b[I]&&u.setAttribute("morphNormal"+M,b[I]),i[M]=x,v+=x):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),b&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const w=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function ep(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Hl=new It,Wl=new Fl,jl=new Bu,ql=new Gl,bo=[],yo=[],Mo=new Float32Array(16),So=new Float32Array(9),wo=new Float32Array(4);function Ii(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=bo[i];if(s===void 0&&(s=new Float32Array(i),bo[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ht(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function dt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Wr(r,e){let t=yo[e];t===void 0&&(t=new Int32Array(e),yo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function tp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function np(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;r.uniform2fv(this.addr,e),dt(t,e)}}function ip(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;r.uniform3fv(this.addr,e),dt(t,e)}}function rp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;r.uniform4fv(this.addr,e),dt(t,e)}}function sp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;wo.set(n),r.uniformMatrix2fv(this.addr,!1,wo),dt(t,n)}}function ap(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;So.set(n),r.uniformMatrix3fv(this.addr,!1,So),dt(t,n)}}function op(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Mo.set(n),r.uniformMatrix4fv(this.addr,!1,Mo),dt(t,n)}}function lp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;r.uniform2iv(this.addr,e),dt(t,e)}}function up(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;r.uniform3iv(this.addr,e),dt(t,e)}}function fp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;r.uniform4iv(this.addr,e),dt(t,e)}}function hp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;r.uniform2uiv(this.addr,e),dt(t,e)}}function pp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;r.uniform3uiv(this.addr,e),dt(t,e)}}function mp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;r.uniform4uiv(this.addr,e),dt(t,e)}}function gp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Hl,i)}function _p(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jl,i)}function xp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ql,i)}function vp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wl,i)}function bp(r){switch(r){case 5126:return tp;case 35664:return np;case 35665:return ip;case 35666:return rp;case 35674:return sp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return up;case 35669:case 35673:return fp;case 5125:return hp;case 36294:return dp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return vp}}function yp(r,e){r.uniform1fv(this.addr,e)}function Mp(r,e){const t=Ii(e,this.size,2);r.uniform2fv(this.addr,t)}function Sp(r,e){const t=Ii(e,this.size,3);r.uniform3fv(this.addr,t)}function wp(r,e){const t=Ii(e,this.size,4);r.uniform4fv(this.addr,t)}function Ep(r,e){const t=Ii(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Tp(r,e){const t=Ii(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ap(r,e){const t=Ii(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Cp(r,e){r.uniform1iv(this.addr,e)}function Lp(r,e){r.uniform2iv(this.addr,e)}function Pp(r,e){r.uniform3iv(this.addr,e)}function Dp(r,e){r.uniform4iv(this.addr,e)}function Rp(r,e){r.uniform1uiv(this.addr,e)}function Ip(r,e){r.uniform2uiv(this.addr,e)}function Fp(r,e){r.uniform3uiv(this.addr,e)}function Op(r,e){r.uniform4uiv(this.addr,e)}function Np(r,e,t){const n=this.cache,i=e.length,s=Wr(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Hl,s[o])}function zp(r,e,t){const n=this.cache,i=e.length,s=Wr(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||jl,s[o])}function Up(r,e,t){const n=this.cache,i=e.length,s=Wr(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ql,s[o])}function kp(r,e,t){const n=this.cache,i=e.length,s=Wr(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wl,s[o])}function Bp(r){switch(r){case 5126:return yp;case 35664:return Mp;case 35665:return Sp;case 35666:return wp;case 35674:return Ep;case 35675:return Tp;case 35676:return Ap;case 5124:case 35670:return Cp;case 35667:case 35671:return Lp;case 35668:case 35672:return Pp;case 35669:case 35673:return Dp;case 5125:return Rp;case 36294:return Ip;case 36295:return Fp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return kp}}class Gp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=bp(t.type)}}class Vp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Bp(t.type)}}class Hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ls=/(\w+)(\])?(\[|\.)?/g;function Eo(r,e){r.seq.push(e),r.map[e.id]=e}function Wp(r,e,t){const n=r.name,i=n.length;for(Ls.lastIndex=0;;){const s=Ls.exec(n),o=Ls.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Eo(t,c===void 0?new Gp(a,r,e):new Vp(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Hp(a),Eo(t,f)),t=f}}}class Nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Wp(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function To(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let jp=0;function qp(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Xp(r){switch(r){case An:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ao(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+qp(r.getShaderSource(e),o)}else return i}function $p(r,e){const t=Xp(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Yp(r,e){let t;switch(e){case pu:t="Linear";break;case mu:t="Reinhard";break;case gu:t="OptimizedCineon";break;case Tl:t="ACESFilmic";break;case _u:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zp(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xi).join(`
`)}function Kp(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jp(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Xi(r){return r!==""}function Co(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ws(r){return r.replace(Qp,em)}function em(r,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ws(t)}const tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Po(r){return r.replace(tm,nm)}function nm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Do(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function im(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function rm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ci:case Li:e="ENVMAP_TYPE_CUBE";break;case Hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function am(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case El:e="ENVMAP_BLENDING_MULTIPLY";break;case hu:e="ENVMAP_BLENDING_MIX";break;case du:e="ENVMAP_BLENDING_ADD";break}return e}function om(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lm(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=im(t),c=rm(t),u=sm(t),f=am(t),h=om(t),p=t.isWebGL2?"":Zp(t),g=Kp(s),d=i.createProgram();let m,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Xi).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(Xi).join(`
`),_.length>0&&(_+=`
`)):(m=[Do(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),_=[p,Do(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?Re.tonemapping_pars_fragment:"",t.toneMapping!==an?Yp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,$p("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),o=Ws(o),o=Co(o,t),o=Lo(o,t),a=Ws(a),a=Co(a,t),a=Lo(a,t),o=Po(o),a=Po(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=b+m+o,w=b+_+a,M=To(i,35633,v),C=To(i,35632,w);if(i.attachShader(d,M),i.attachShader(d,C),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const A=i.getProgramInfoLog(d).trim(),P=i.getShaderInfoLog(M).trim(),B=i.getShaderInfoLog(C).trim();let ie=!0,z=!0;if(i.getProgramParameter(d,35714)===!1){ie=!1;const F=Ao(i,M,"vertex"),q=Ao(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+A+`
`+F+`
`+q)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(P===""||B==="")&&(z=!1);z&&(this.diagnostics={runnable:ie,programLog:A,vertexShader:{log:P,prefix:m},fragmentShader:{log:B,prefix:_}})}i.deleteShader(M),i.deleteShader(C);let I;this.getUniforms=function(){return I===void 0&&(I=new Nr(i,d)),I};let x;return this.getAttributes=function(){return x===void 0&&(x=Jp(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=jp++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=C,this}let cm=0;class um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fm(e),t.set(e,n)),n}}class fm{constructor(e){this.id=cm++,this.code=e,this.usedTimes=0}}function hm(r,e,t,n,i,s,o){const a=new na,l=new um,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,A,P,B,ie){const z=B.fog,F=ie.geometry,q=x.isMeshStandardMaterial?B.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),$=Y&&Y.mapping===Hr?Y.image.height:null,j=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const ne=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Z=ne!==void 0?ne.length:0;let L=0;F.morphAttributes.position!==void 0&&(L=1),F.morphAttributes.normal!==void 0&&(L=2),F.morphAttributes.color!==void 0&&(L=3);let V,K,ee,oe;if(j){const He=tn[j];V=He.vertexShader,K=He.fragmentShader}else V=x.vertexShader,K=x.fragmentShader,l.update(x),ee=l.getVertexShaderID(x),oe=l.getFragmentShaderID(x);const R=r.getRenderTarget(),fe=x.alphaTest>0,xe=x.clearcoat>0,Ee=x.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:x.type,vertexShader:V,fragmentShader:K,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:ie.isInstancedMesh===!0,instancingColor:ie.isInstancedMesh===!0&&ie.instanceColor!==null,supportsVertexTextures:h,outputEncoding:R===null?r.outputEncoding:R.isXRRenderTarget===!0?R.texture.encoding:An,map:!!x.map,matcap:!!x.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:$,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Nu,tangentSpaceNormalMap:x.normalMapType===Ll,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ze,clearcoat:xe,clearcoatMap:xe&&!!x.clearcoatMap,clearcoatRoughnessMap:xe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!x.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!x.iridescenceMap,iridescenceThicknessMap:Ee&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Ei,alphaMap:!!x.alphaMap,alphaTest:fe,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!F.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ie.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:L,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:an,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ea,flipSided:x.side===jt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)A.push(P),A.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(_(A,x),b(A,x),A.push(r.outputEncoding)),A.push(x.customProgramCacheKey),A.join()}function _(x,A){x.push(A.precision),x.push(A.outputEncoding),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.combine),x.push(A.vertexUvs),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function b(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),x.push(a.mask)}function v(x){const A=g[x.type];let P;if(A){const B=tn[A];P=Bl.clone(B.uniforms)}else P=x.uniforms;return P}function w(x,A){let P;for(let B=0,ie=c.length;B<ie;B++){const z=c[B];if(z.cacheKey===A){P=z,++P.usedTimes;break}}return P===void 0&&(P=new lm(r,A,x,s),c.push(P)),P}function M(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),x.destroy()}}function C(x){l.remove(x)}function I(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:v,acquireProgram:w,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:I}}function dm(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function pm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ro(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Io(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,p,g,d,m){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:d,group:m},r[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=m),e++,_}function a(f,h,p,g,d,m){const _=o(f,h,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(f,h,p,g,d,m){const _=o(f,h,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||pm),n.length>1&&n.sort(h||Ro),i.length>1&&i.sort(h||Ro)}function u(){for(let f=e,h=r.length;f<h;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function mm(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Io,r.set(n,[o])):i>=s.length?(o=new Io,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function gm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Xe};break;case"SpotLight":t={position:new k,direction:new k,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function _m(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let xm=0;function vm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bm(r,e){const t=new gm,n=_m(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new k);const s=new k,o=new at,a=new at;function l(u,f){let h=0,p=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,m=0,_=0,b=0,v=0,w=0,M=0,C=0,I=0,x=0;u.sort(vm);const A=f!==!0?Math.PI:1;for(let B=0,ie=u.length;B<ie;B++){const z=u[B],F=z.color,q=z.intensity,Y=z.distance,$=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=F.r*q*A,p+=F.g*q*A,g+=F.b*q*A;else if(z.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(z.sh.coefficients[j],q);else if(z.isDirectionalLight){const j=t.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity*A),z.castShadow){const ne=z.shadow,Z=n.get(z);Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,i.directionalShadow[d]=Z,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=z.shadow.matrix,w++}i.directional[d]=j,d++}else if(z.isSpotLight){const j=t.get(z);j.position.setFromMatrixPosition(z.matrixWorld),j.color.copy(F).multiplyScalar(q*A),j.distance=Y,j.coneCos=Math.cos(z.angle),j.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),j.decay=z.decay,i.spot[_]=j;const ne=z.shadow;if(z.map&&(i.spotLightMap[I]=z.map,I++,ne.updateMatrices(z),z.castShadow&&x++),i.spotLightMatrix[_]=ne.matrix,z.castShadow){const Z=n.get(z);Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=$,C++}_++}else if(z.isRectAreaLight){const j=t.get(z);j.color.copy(F).multiplyScalar(q),j.halfWidth.set(z.width*.5,0,0),j.halfHeight.set(0,z.height*.5,0),i.rectArea[b]=j,b++}else if(z.isPointLight){const j=t.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity*A),j.distance=z.distance,j.decay=z.decay,z.castShadow){const ne=z.shadow,Z=n.get(z);Z.shadowBias=ne.bias,Z.shadowNormalBias=ne.normalBias,Z.shadowRadius=ne.radius,Z.shadowMapSize=ne.mapSize,Z.shadowCameraNear=ne.camera.near,Z.shadowCameraFar=ne.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=z.shadow.matrix,M++}i.point[m]=j,m++}else if(z.isHemisphereLight){const j=t.get(z);j.skyColor.copy(z.color).multiplyScalar(q*A),j.groundColor.copy(z.groundColor).multiplyScalar(q*A),i.hemi[v]=j,v++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==b||P.hemiLength!==v||P.numDirectionalShadows!==w||P.numPointShadows!==M||P.numSpotShadows!==C||P.numSpotMaps!==I)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=b,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=C+I-x,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=x,P.directionalLength=d,P.pointLength=m,P.spotLength=_,P.rectAreaLength=b,P.hemiLength=v,P.numDirectionalShadows=w,P.numPointShadows=M,P.numSpotShadows=C,P.numSpotMaps=I,i.version=xm++)}function c(u,f){let h=0,p=0,g=0,d=0,m=0;const _=f.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const w=u[b];if(w.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),h++}else if(w.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const M=i.rectArea[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(w.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),d++}else if(w.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),p++}else if(w.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function Fo(r,e){const t=new bm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ym(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Fo(r,e),t.set(s,[l])):o>=a.length?(l=new Fo(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Mm extends lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sm extends lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Em=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tm(r,e,t){let n=new ra;const i=new Pe,s=new Pe,o=new vt,a=new Mm({depthPacking:Ou}),l=new Sm,c={},u=t.maxTextureSize,f={0:jt,1:ei,2:ea},h=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:wm,fragmentShader:Em}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Pt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl,this.render=function(w,M,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const I=r.getRenderTarget(),x=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Tn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let B=0,ie=w.length;B<ie;B++){const z=w[B],F=z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const q=F.getFrameExtents();if(i.multiply(q),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,F.mapSize.y=s.y)),F.map===null){const $=this.type!==qi?{minFilter:Lt,magFilter:Lt}:{};F.map=new Cn(i.x,i.y,$),F.map.texture.name=z.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const Y=F.getViewportCount();for(let $=0;$<Y;$++){const j=F.getViewport($);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),P.viewport(o),F.updateMatrices(z,$),n=F.getFrustum(),v(M,C,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===qi&&_(F,C),F.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(I,x,A)};function _(w,M){const C=e.update(d);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Cn(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(M,null,C,h,d,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(M,null,C,p,d,null)}function b(w,M,C,I,x,A){let P=null;const B=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0)P=B;else if(P=C.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const ie=P.uuid,z=M.uuid;let F=c[ie];F===void 0&&(F={},c[ie]=F);let q=F[z];q===void 0&&(q=P.clone(),F[z]=q),P=q}return P.visible=M.visible,P.wireframe=M.wireframe,A===qi?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:f[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,C.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(C.matrixWorld),P.nearDistance=I,P.farDistance=x),P}function v(w,M,C,I,x){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===qi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const B=e.update(w),ie=w.material;if(Array.isArray(ie)){const z=B.groups;for(let F=0,q=z.length;F<q;F++){const Y=z[F],$=ie[Y.materialIndex];if($&&$.visible){const j=b(w,$,I,C.near,C.far,x);r.renderBufferDirect(C,null,B,j,w,Y)}}}else if(ie.visible){const z=b(w,ie,I,C.near,C.far,x);r.renderBufferDirect(C,null,B,z,w,null)}}const P=w.children;for(let B=0,ie=P.length;B<ie;B++)v(P[B],M,C,I,x)}}function Am(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const H=new vt;let Q=null;const pe=new vt(0,0,0,0);return{setMask:function(Me){Q!==Me&&!D&&(r.colorMask(Me,Me,Me,Me),Q=Me)},setLocked:function(Me){D=Me},setClear:function(Me,We,mt,Mt,On){On===!0&&(Me*=Mt,We*=Mt,mt*=Mt),H.set(Me,We,mt,Mt),pe.equals(H)===!1&&(r.clearColor(Me,We,mt,Mt),pe.copy(H))},reset:function(){D=!1,Q=null,pe.set(-1,0,0,0)}}}function s(){let D=!1,H=null,Q=null,pe=null;return{setTest:function(Me){Me?fe(2929):xe(2929)},setMask:function(Me){H!==Me&&!D&&(r.depthMask(Me),H=Me)},setFunc:function(Me){if(Q!==Me){switch(Me){case su:r.depthFunc(512);break;case au:r.depthFunc(519);break;case ou:r.depthFunc(513);break;case zs:r.depthFunc(515);break;case lu:r.depthFunc(514);break;case cu:r.depthFunc(518);break;case uu:r.depthFunc(516);break;case fu:r.depthFunc(517);break;default:r.depthFunc(515)}Q=Me}},setLocked:function(Me){D=Me},setClear:function(Me){pe!==Me&&(r.clearDepth(Me),pe=Me)},reset:function(){D=!1,H=null,Q=null,pe=null}}}function o(){let D=!1,H=null,Q=null,pe=null,Me=null,We=null,mt=null,Mt=null,On=null;return{setTest:function(Ke){D||(Ke?fe(2960):xe(2960))},setMask:function(Ke){H!==Ke&&!D&&(r.stencilMask(Ke),H=Ke)},setFunc:function(Ke,un,Gt){(Q!==Ke||pe!==un||Me!==Gt)&&(r.stencilFunc(Ke,un,Gt),Q=Ke,pe=un,Me=Gt)},setOp:function(Ke,un,Gt){(We!==Ke||mt!==un||Mt!==Gt)&&(r.stencilOp(Ke,un,Gt),We=Ke,mt=un,Mt=Gt)},setLocked:function(Ke){D=Ke},setClear:function(Ke){On!==Ke&&(r.clearStencil(Ke),On=Ke)},reset:function(){D=!1,H=null,Q=null,pe=null,Me=null,We=null,mt=null,Mt=null,On=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,d=[],m=null,_=!1,b=null,v=null,w=null,M=null,C=null,I=null,x=null,A=!1,P=null,B=null,ie=null,z=null,F=null;const q=r.getParameter(35661);let Y=!1,$=0;const j=r.getParameter(7938);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=$>=2);let ne=null,Z={};const L=r.getParameter(3088),V=r.getParameter(2978),K=new vt().fromArray(L),ee=new vt().fromArray(V);function oe(D,H,Q){const pe=new Uint8Array(4),Me=r.createTexture();r.bindTexture(D,Me),r.texParameteri(D,10241,9728),r.texParameteri(D,10240,9728);for(let We=0;We<Q;We++)r.texImage2D(H+We,0,6408,1,1,0,6408,5121,pe);return Me}const R={};R[3553]=oe(3553,3553,1),R[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(2929),l.setFunc(zs),ct(!1),Et(wa),fe(2884),pt(Tn);function fe(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function xe(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Ee(D,H){return p[D]!==H?(r.bindFramebuffer(D,H),p[D]=H,n&&(D===36009&&(p[36160]=H),D===36160&&(p[36009]=H)),!0):!1}function _e(D,H){let Q=d,pe=!1;if(D)if(Q=g.get(H),Q===void 0&&(Q=[],g.set(H,Q)),D.isWebGLMultipleRenderTargets){const Me=D.texture;if(Q.length!==Me.length||Q[0]!==36064){for(let We=0,mt=Me.length;We<mt;We++)Q[We]=36064+We;Q.length=Me.length,pe=!0}}else Q[0]!==36064&&(Q[0]=36064,pe=!0);else Q[0]!==1029&&(Q[0]=1029,pe=!0);pe&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function He(D){return m!==D?(r.useProgram(D),m=D,!0):!1}const De={[yi]:32774,[$c]:32778,[Yc]:32779};if(n)De[Ca]=32775,De[La]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(De[Ca]=D.MIN_EXT,De[La]=D.MAX_EXT)}const Te={[Zc]:0,[Kc]:1,[Jc]:768,[Sl]:770,[ru]:776,[nu]:774,[eu]:772,[Qc]:769,[wl]:771,[iu]:775,[tu]:773};function pt(D,H,Q,pe,Me,We,mt,Mt){if(D===Tn){_===!0&&(xe(3042),_=!1);return}if(_===!1&&(fe(3042),_=!0),D!==Xc){if(D!==b||Mt!==A){if((v!==yi||C!==yi)&&(r.blendEquation(32774),v=yi,C=yi),Mt)switch(D){case Ei:r.blendFuncSeparate(1,771,1,771);break;case Ea:r.blendFunc(1,1);break;case Ta:r.blendFuncSeparate(0,769,0,1);break;case Aa:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ei:r.blendFuncSeparate(770,771,1,771);break;case Ea:r.blendFunc(770,1);break;case Ta:r.blendFuncSeparate(0,769,0,1);break;case Aa:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,M=null,I=null,x=null,b=D,A=Mt}return}Me=Me||H,We=We||Q,mt=mt||pe,(H!==v||Me!==C)&&(r.blendEquationSeparate(De[H],De[Me]),v=H,C=Me),(Q!==w||pe!==M||We!==I||mt!==x)&&(r.blendFuncSeparate(Te[Q],Te[pe],Te[We],Te[mt]),w=Q,M=pe,I=We,x=mt),b=D,A=!1}function lt(D,H){D.side===ea?xe(2884):fe(2884);let Q=D.side===jt;H&&(Q=!Q),ct(Q),D.blending===Ei&&D.transparent===!1?pt(Tn):pt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const pe=D.stencilWrite;c.setTest(pe),pe&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),je(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(32926):xe(32926)}function ct(D){P!==D&&(D?r.frontFace(2304):r.frontFace(2305),P=D)}function Et(D){D!==jc?(fe(2884),D!==B&&(D===wa?r.cullFace(1029):D===qc?r.cullFace(1028):r.cullFace(1032))):xe(2884),B=D}function tt(D){D!==ie&&(Y&&r.lineWidth(D),ie=D)}function je(D,H,Q){D?(fe(32823),(z!==H||F!==Q)&&(r.polygonOffset(H,Q),z=H,F=Q)):xe(32823)}function Bt(D){D?fe(3089):xe(3089)}function Dt(D){D===void 0&&(D=33984+q-1),ne!==D&&(r.activeTexture(D),ne=D)}function E(D,H,Q){Q===void 0&&(ne===null?Q=33984+q-1:Q=ne);let pe=Z[Q];pe===void 0&&(pe={type:void 0,texture:void 0},Z[Q]=pe),(pe.type!==D||pe.texture!==H)&&(ne!==Q&&(r.activeTexture(Q),ne=Q),r.bindTexture(D,H||R[D]),pe.type=D,pe.texture=H)}function y(){const D=Z[ne];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function G(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function T(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(D){K.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),K.copy(D))}function ve(D){ee.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),ee.copy(D))}function Ne(D,H){let Q=f.get(H);Q===void 0&&(Q=new WeakMap,f.set(H,Q));let pe=Q.get(D);pe===void 0&&(pe=r.getUniformBlockIndex(H,D.name),Q.set(D,pe))}function ze(D,H){const pe=f.get(H).get(D);u.get(H)!==pe&&(r.uniformBlockBinding(H,pe,D.__bindingPointIndex),u.set(H,pe))}function qe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ne=null,Z={},p={},g=new WeakMap,d=[],m=null,_=!1,b=null,v=null,w=null,M=null,C=null,I=null,x=null,A=!1,P=null,B=null,ie=null,z=null,F=null,K.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:fe,disable:xe,bindFramebuffer:Ee,drawBuffers:_e,useProgram:He,setBlending:pt,setMaterial:lt,setFlipSided:ct,setCullFace:Et,setLineWidth:tt,setPolygonOffset:je,setScissorTest:Bt,activeTexture:Dt,bindTexture:E,unbindTexture:y,compressedTexImage2D:G,compressedTexImage3D:te,texImage2D:ge,texImage3D:ce,updateUBOMapping:Ne,uniformBlockBinding:ze,texStorage2D:O,texStorage3D:ue,texSubImage2D:se,texSubImage3D:le,compressedTexSubImage2D:Ae,compressedTexSubImage3D:T,scissor:ye,viewport:ve,reset:qe}}function Cm(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,y){return _?new OffscreenCanvas(E,y):nr("canvas")}function v(E,y,G,te){let se=1;if((E.width>te||E.height>te)&&(se=te/Math.max(E.width,E.height)),se<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const le=y?Hs:Math.floor,Ae=le(se*E.width),T=le(se*E.height);d===void 0&&(d=b(Ae,T));const O=G?b(Ae,T):d;return O.width=Ae,O.height=T,O.getContext("2d").drawImage(E,0,0,Ae,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ae+"x"+T+")."),O}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function w(E){return to(E.width)&&to(E.height)}function M(E){return a?!1:E.wrapS!==Jt||E.wrapT!==Jt||E.minFilter!==Lt&&E.minFilter!==Ht}function C(E,y){return E.generateMipmaps&&y&&E.minFilter!==Lt&&E.minFilter!==Ht}function I(E){r.generateMipmap(E)}function x(E,y,G,te,se=!1){if(a===!1)return y;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le=y;return y===6403&&(G===5126&&(le=33326),G===5131&&(le=33325),G===5121&&(le=33321)),y===33319&&(G===5126&&(le=33328),G===5131&&(le=33327),G===5121&&(le=33323)),y===6408&&(G===5126&&(le=34836),G===5131&&(le=34842),G===5121&&(le=te===Ze&&se===!1?35907:32856),G===32819&&(le=32854),G===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function A(E,y,G){return C(E,G)===!0||E.isFramebufferTexture&&E.minFilter!==Lt&&E.minFilter!==Ht?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function P(E){return E===Lt||E===Pa||E===Qr?9728:9729}function B(E){const y=E.target;y.removeEventListener("dispose",B),z(y),y.isVideoTexture&&g.delete(y)}function ie(E){const y=E.target;y.removeEventListener("dispose",ie),q(y)}function z(E){const y=n.get(E);if(y.__webglInit===void 0)return;const G=E.source,te=m.get(G);if(te){const se=te[y.__cacheKey];se.usedTimes--,se.usedTimes===0&&F(E),Object.keys(te).length===0&&m.delete(G)}n.remove(E)}function F(E){const y=n.get(E);r.deleteTexture(y.__webglTexture);const G=E.source,te=m.get(G);delete te[y.__cacheKey],o.memory.textures--}function q(E){const y=E.texture,G=n.get(E),te=n.get(y);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)r.deleteFramebuffer(G.__webglFramebuffer[se]),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[se]);else{if(r.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let se=0;se<G.__webglColorRenderbuffer.length;se++)G.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[se]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let se=0,le=y.length;se<le;se++){const Ae=n.get(y[se]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),o.memory.textures--),n.remove(y[se])}n.remove(y),n.remove(E)}let Y=0;function $(){Y=0}function j(){const E=Y;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),Y+=1,E}function ne(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.encoding),y.join()}function Z(E,y){const G=n.get(E);if(E.isVideoTexture&&Bt(E),E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(G,E,y);return}}t.bindTexture(3553,G.__webglTexture,33984+y)}function L(E,y){const G=n.get(E);if(E.version>0&&G.__version!==E.version){xe(G,E,y);return}t.bindTexture(35866,G.__webglTexture,33984+y)}function V(E,y){const G=n.get(E);if(E.version>0&&G.__version!==E.version){xe(G,E,y);return}t.bindTexture(32879,G.__webglTexture,33984+y)}function K(E,y){const G=n.get(E);if(E.version>0&&G.__version!==E.version){Ee(G,E,y);return}t.bindTexture(34067,G.__webglTexture,33984+y)}const ee={[Bs]:10497,[Jt]:33071,[Gs]:33648},oe={[Lt]:9728,[Pa]:9984,[Qr]:9986,[Ht]:9729,[xu]:9985,[Qi]:9987};function R(E,y,G){if(G?(r.texParameteri(E,10242,ee[y.wrapS]),r.texParameteri(E,10243,ee[y.wrapT]),(E===32879||E===35866)&&r.texParameteri(E,32882,ee[y.wrapR]),r.texParameteri(E,10240,oe[y.magFilter]),r.texParameteri(E,10241,oe[y.minFilter])):(r.texParameteri(E,10242,33071),r.texParameteri(E,10243,33071),(E===32879||E===35866)&&r.texParameteri(E,32882,33071),(y.wrapS!==Jt||y.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,10240,P(y.magFilter)),r.texParameteri(E,10241,P(y.minFilter)),y.minFilter!==Lt&&y.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Lt||y.minFilter!==Qr&&y.minFilter!==Qi||y.type===qn&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===er&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function fe(E,y){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",B));const te=y.source;let se=m.get(te);se===void 0&&(se={},m.set(te,se));const le=ne(y);if(le!==E.__cacheKey){se[le]===void 0&&(se[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[le].usedTimes++;const Ae=se[E.__cacheKey];Ae!==void 0&&(se[E.__cacheKey].usedTimes--,Ae.usedTimes===0&&F(y)),E.__cacheKey=le,E.__webglTexture=se[le].texture}return G}function xe(E,y,G){let te=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=35866),y.isData3DTexture&&(te=32879);const se=fe(E,y),le=y.source;t.bindTexture(te,E.__webglTexture,33984+G);const Ae=n.get(le);if(le.version!==Ae.__version||se===!0){t.activeTexture(33984+G),r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const T=M(y)&&w(y.image)===!1;let O=v(y.image,T,!1,u);O=Dt(y,O);const ue=w(O)||a,ge=s.convert(y.format,y.encoding);let ce=s.convert(y.type),ye=x(y.internalFormat,ge,ce,y.encoding,y.isVideoTexture);R(te,y,ue);let ve;const Ne=y.mipmaps,ze=a&&y.isVideoTexture!==!0,qe=Ae.__version===void 0||se===!0,D=A(y,O,ue);if(y.isDepthTexture)ye=6402,a?y.type===qn?ye=36012:y.type===jn?ye=33190:y.type===Ti?ye=35056:ye=33189:y.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Yn&&ye===6402&&y.type!==Cl&&y.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=jn,ce=s.convert(y.type)),y.format===Pi&&ye===6402&&(ye=34041,y.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ti,ce=s.convert(y.type))),qe&&(ze?t.texStorage2D(3553,1,ye,O.width,O.height):t.texImage2D(3553,0,ye,O.width,O.height,0,ge,ce,null));else if(y.isDataTexture)if(Ne.length>0&&ue){ze&&qe&&t.texStorage2D(3553,D,ye,Ne[0].width,Ne[0].height);for(let H=0,Q=Ne.length;H<Q;H++)ve=Ne[H],ze?t.texSubImage2D(3553,H,0,0,ve.width,ve.height,ge,ce,ve.data):t.texImage2D(3553,H,ye,ve.width,ve.height,0,ge,ce,ve.data);y.generateMipmaps=!1}else ze?(qe&&t.texStorage2D(3553,D,ye,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,ge,ce,O.data)):t.texImage2D(3553,0,ye,O.width,O.height,0,ge,ce,O.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&qe&&t.texStorage3D(35866,D,ye,Ne[0].width,Ne[0].height,O.depth);for(let H=0,Q=Ne.length;H<Q;H++)ve=Ne[H],y.format!==Qt?ge!==null?ze?t.compressedTexSubImage3D(35866,H,0,0,0,ve.width,ve.height,O.depth,ge,ve.data,0,0):t.compressedTexImage3D(35866,H,ye,ve.width,ve.height,O.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(35866,H,0,0,0,ve.width,ve.height,O.depth,ge,ce,ve.data):t.texImage3D(35866,H,ye,ve.width,ve.height,O.depth,0,ge,ce,ve.data)}else{ze&&qe&&t.texStorage2D(3553,D,ye,Ne[0].width,Ne[0].height);for(let H=0,Q=Ne.length;H<Q;H++)ve=Ne[H],y.format!==Qt?ge!==null?ze?t.compressedTexSubImage2D(3553,H,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(3553,H,ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,H,0,0,ve.width,ve.height,ge,ce,ve.data):t.texImage2D(3553,H,ye,ve.width,ve.height,0,ge,ce,ve.data)}else if(y.isDataArrayTexture)ze?(qe&&t.texStorage3D(35866,D,ye,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,ge,ce,O.data)):t.texImage3D(35866,0,ye,O.width,O.height,O.depth,0,ge,ce,O.data);else if(y.isData3DTexture)ze?(qe&&t.texStorage3D(32879,D,ye,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,ge,ce,O.data)):t.texImage3D(32879,0,ye,O.width,O.height,O.depth,0,ge,ce,O.data);else if(y.isFramebufferTexture){if(qe)if(ze)t.texStorage2D(3553,D,ye,O.width,O.height);else{let H=O.width,Q=O.height;for(let pe=0;pe<D;pe++)t.texImage2D(3553,pe,ye,H,Q,0,ge,ce,null),H>>=1,Q>>=1}}else if(Ne.length>0&&ue){ze&&qe&&t.texStorage2D(3553,D,ye,Ne[0].width,Ne[0].height);for(let H=0,Q=Ne.length;H<Q;H++)ve=Ne[H],ze?t.texSubImage2D(3553,H,0,0,ge,ce,ve):t.texImage2D(3553,H,ye,ge,ce,ve);y.generateMipmaps=!1}else ze?(qe&&t.texStorage2D(3553,D,ye,O.width,O.height),t.texSubImage2D(3553,0,0,0,ge,ce,O)):t.texImage2D(3553,0,ye,ge,ce,O);C(y,ue)&&I(te),Ae.__version=le.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Ee(E,y,G){if(y.image.length!==6)return;const te=fe(E,y),se=y.source;t.bindTexture(34067,E.__webglTexture,33984+G);const le=n.get(se);if(se.version!==le.__version||te===!0){t.activeTexture(33984+G),r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const Ae=y.isCompressedTexture||y.image[0].isCompressedTexture,T=y.image[0]&&y.image[0].isDataTexture,O=[];for(let H=0;H<6;H++)!Ae&&!T?O[H]=v(y.image[H],!1,!0,c):O[H]=T?y.image[H].image:y.image[H],O[H]=Dt(y,O[H]);const ue=O[0],ge=w(ue)||a,ce=s.convert(y.format,y.encoding),ye=s.convert(y.type),ve=x(y.internalFormat,ce,ye,y.encoding),Ne=a&&y.isVideoTexture!==!0,ze=le.__version===void 0||te===!0;let qe=A(y,ue,ge);R(34067,y,ge);let D;if(Ae){Ne&&ze&&t.texStorage2D(34067,qe,ve,ue.width,ue.height);for(let H=0;H<6;H++){D=O[H].mipmaps;for(let Q=0;Q<D.length;Q++){const pe=D[Q];y.format!==Qt?ce!==null?Ne?t.compressedTexSubImage2D(34069+H,Q,0,0,pe.width,pe.height,ce,pe.data):t.compressedTexImage2D(34069+H,Q,ve,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+H,Q,0,0,pe.width,pe.height,ce,ye,pe.data):t.texImage2D(34069+H,Q,ve,pe.width,pe.height,0,ce,ye,pe.data)}}}else{D=y.mipmaps,Ne&&ze&&(D.length>0&&qe++,t.texStorage2D(34067,qe,ve,O[0].width,O[0].height));for(let H=0;H<6;H++)if(T){Ne?t.texSubImage2D(34069+H,0,0,0,O[H].width,O[H].height,ce,ye,O[H].data):t.texImage2D(34069+H,0,ve,O[H].width,O[H].height,0,ce,ye,O[H].data);for(let Q=0;Q<D.length;Q++){const Me=D[Q].image[H].image;Ne?t.texSubImage2D(34069+H,Q+1,0,0,Me.width,Me.height,ce,ye,Me.data):t.texImage2D(34069+H,Q+1,ve,Me.width,Me.height,0,ce,ye,Me.data)}}else{Ne?t.texSubImage2D(34069+H,0,0,0,ce,ye,O[H]):t.texImage2D(34069+H,0,ve,ce,ye,O[H]);for(let Q=0;Q<D.length;Q++){const pe=D[Q];Ne?t.texSubImage2D(34069+H,Q+1,0,0,ce,ye,pe.image[H]):t.texImage2D(34069+H,Q+1,ve,ce,ye,pe.image[H])}}}C(y,ge)&&I(34067),le.__version=se.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function _e(E,y,G,te,se){const le=s.convert(G.format,G.encoding),Ae=s.convert(G.type),T=x(G.internalFormat,le,Ae,G.encoding);n.get(y).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,T,y.width,y.height,y.depth,0,le,Ae,null):t.texImage2D(se,0,T,y.width,y.height,0,le,Ae,null)),t.bindFramebuffer(36160,E),je(y)?h.framebufferTexture2DMultisampleEXT(36160,te,se,n.get(G).__webglTexture,0,tt(y)):(se===3553||se>=34069&&se<=34074)&&r.framebufferTexture2D(36160,te,se,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(E,y,G){if(r.bindRenderbuffer(36161,E),y.depthBuffer&&!y.stencilBuffer){let te=33189;if(G||je(y)){const se=y.depthTexture;se&&se.isDepthTexture&&(se.type===qn?te=36012:se.type===jn&&(te=33190));const le=tt(y);je(y)?h.renderbufferStorageMultisampleEXT(36161,le,te,y.width,y.height):r.renderbufferStorageMultisample(36161,le,te,y.width,y.height)}else r.renderbufferStorage(36161,te,y.width,y.height);r.framebufferRenderbuffer(36160,36096,36161,E)}else if(y.depthBuffer&&y.stencilBuffer){const te=tt(y);G&&je(y)===!1?r.renderbufferStorageMultisample(36161,te,35056,y.width,y.height):je(y)?h.renderbufferStorageMultisampleEXT(36161,te,35056,y.width,y.height):r.renderbufferStorage(36161,34041,y.width,y.height),r.framebufferRenderbuffer(36160,33306,36161,E)}else{const te=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let se=0;se<te.length;se++){const le=te[se],Ae=s.convert(le.format,le.encoding),T=s.convert(le.type),O=x(le.internalFormat,Ae,T,le.encoding),ue=tt(y);G&&je(y)===!1?r.renderbufferStorageMultisample(36161,ue,O,y.width,y.height):je(y)?h.renderbufferStorageMultisampleEXT(36161,ue,O,y.width,y.height):r.renderbufferStorage(36161,O,y.width,y.height)}}r.bindRenderbuffer(36161,null)}function De(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const te=n.get(y.depthTexture).__webglTexture,se=tt(y);if(y.depthTexture.format===Yn)je(y)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,se):r.framebufferTexture2D(36160,36096,3553,te,0);else if(y.depthTexture.format===Pi)je(y)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,se):r.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function Te(E){const y=n.get(E),G=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");De(y.__webglFramebuffer,E)}else if(G){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]=r.createRenderbuffer(),He(y.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),He(y.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function pt(E,y,G){const te=n.get(E);y!==void 0&&_e(te.__webglFramebuffer,E,E.texture,36064,3553),G!==void 0&&Te(E)}function lt(E){const y=E.texture,G=n.get(E),te=n.get(y);E.addEventListener("dispose",ie),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=y.version,o.memory.textures++);const se=E.isWebGLCubeRenderTarget===!0,le=E.isWebGLMultipleRenderTargets===!0,Ae=w(E)||a;if(se){G.__webglFramebuffer=[];for(let T=0;T<6;T++)G.__webglFramebuffer[T]=r.createFramebuffer()}else{if(G.__webglFramebuffer=r.createFramebuffer(),le)if(i.drawBuffers){const T=E.texture;for(let O=0,ue=T.length;O<ue;O++){const ge=n.get(T[O]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&je(E)===!1){const T=le?y:[y];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let O=0;O<T.length;O++){const ue=T[O];G.__webglColorRenderbuffer[O]=r.createRenderbuffer(),r.bindRenderbuffer(36161,G.__webglColorRenderbuffer[O]);const ge=s.convert(ue.format,ue.encoding),ce=s.convert(ue.type),ye=x(ue.internalFormat,ge,ce,ue.encoding,E.isXRRenderTarget===!0),ve=tt(E);r.renderbufferStorageMultisample(36161,ve,ye,E.width,E.height),r.framebufferRenderbuffer(36160,36064+O,36161,G.__webglColorRenderbuffer[O])}r.bindRenderbuffer(36161,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),He(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,te.__webglTexture),R(34067,y,Ae);for(let T=0;T<6;T++)_e(G.__webglFramebuffer[T],E,y,36064,34069+T);C(y,Ae)&&I(34067),t.unbindTexture()}else if(le){const T=E.texture;for(let O=0,ue=T.length;O<ue;O++){const ge=T[O],ce=n.get(ge);t.bindTexture(3553,ce.__webglTexture),R(3553,ge,Ae),_e(G.__webglFramebuffer,E,ge,36064+O,3553),C(ge,Ae)&&I(3553)}t.unbindTexture()}else{let T=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?T=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,te.__webglTexture),R(T,y,Ae),_e(G.__webglFramebuffer,E,y,36064,T),C(y,Ae)&&I(T),t.unbindTexture()}E.depthBuffer&&Te(E)}function ct(E){const y=w(E)||a,G=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,se=G.length;te<se;te++){const le=G[te];if(C(le,y)){const Ae=E.isWebGLCubeRenderTarget?34067:3553,T=n.get(le).__webglTexture;t.bindTexture(Ae,T),I(Ae),t.unbindTexture()}}}function Et(E){if(a&&E.samples>0&&je(E)===!1){const y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],G=E.width,te=E.height;let se=16384;const le=[],Ae=E.stencilBuffer?33306:36096,T=n.get(E),O=E.isWebGLMultipleRenderTargets===!0;if(O)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){le.push(36064+ue),E.depthBuffer&&le.push(Ae);const ge=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(ge===!1&&(E.depthBuffer&&(se|=256),E.stencilBuffer&&(se|=1024)),O&&r.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[ue]),ge===!0&&(r.invalidateFramebuffer(36008,[Ae]),r.invalidateFramebuffer(36009,[Ae])),O){const ce=n.get(y[ue]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ce,0)}r.blitFramebuffer(0,0,G,te,0,0,G,te,se,9728),p&&r.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ue,36161,T.__webglColorRenderbuffer[ue]);const ge=n.get(y[ue]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ue,3553,ge,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function tt(E){return Math.min(f,E.samples)}function je(E){const y=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Bt(E){const y=o.render.frame;g.get(E)!==y&&(g.set(E,y),E.update())}function Dt(E,y){const G=E.encoding,te=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Vs||G!==An&&(G===Ze?a===!1?e.has("EXT_sRGB")===!0&&te===Qt?(E.format=Vs,E.minFilter=Ht,E.generateMipmaps=!1):y=Rl.sRGBToLinear(y):(te!==Qt||se!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),y}this.allocateTextureUnit=j,this.resetTextureUnits=$,this.setTexture2D=Z,this.setTexture2DArray=L,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=pt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=je}function Lm(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===ti)return 5121;if(s===Mu)return 32819;if(s===Su)return 32820;if(s===vu)return 5120;if(s===bu)return 5122;if(s===Cl)return 5123;if(s===yu)return 5124;if(s===jn)return 5125;if(s===qn)return 5126;if(s===er)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===wu)return 6406;if(s===Qt)return 6408;if(s===Tu)return 6409;if(s===Au)return 6410;if(s===Yn)return 6402;if(s===Pi)return 34041;if(s===Eu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Vs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Cu)return 6403;if(s===Lu)return 36244;if(s===Pu)return 33319;if(s===Du)return 33320;if(s===Ru)return 36249;if(s===es||s===ts||s===ns||s===is)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===es)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===es)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ts)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ns)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===is)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Da||s===Ra||s===Ia||s===Fa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Da)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ra)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ia)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Iu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Oa||s===Na)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Oa)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Na)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===za||s===Ua||s===ka||s===Ba||s===Ga||s===Va||s===Ha||s===Wa||s===ja||s===qa||s===Xa||s===$a||s===Ya||s===Za)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===za)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ua)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ka)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ba)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ga)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Va)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ha)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wa)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ja)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qa)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xa)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$a)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ya)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Za)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ka)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ka)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ti?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Pm extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $i extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dm={type:"move"};class Ps{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Rm extends It{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Yn,u!==Yn&&u!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Yn&&(n=jn),n===void 0&&u===Pi&&(n=Ti),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1}}class Im extends ii{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,p=null;const g=t.getContextAttributes();let d=null,m=null;const _=[],b=[],v=new Set,w=new Map,M=new yt;M.layers.enable(1),M.viewport=new vt;const C=new yt;C.layers.enable(2),C.viewport=new vt;const I=[M,C],x=new Pm;x.layers.enable(1),x.layers.enable(2);let A=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let V=_[L];return V===void 0&&(V=new Ps,_[L]=V),V.getTargetRaySpace()},this.getControllerGrip=function(L){let V=_[L];return V===void 0&&(V=new Ps,_[L]=V),V.getGripSpace()},this.getHand=function(L){let V=_[L];return V===void 0&&(V=new Ps,_[L]=V),V.getHandSpace()};function B(L){const V=b.indexOf(L.inputSource);if(V===-1)return;const K=_[V];K!==void 0&&K.dispatchEvent({type:L.type,data:L.inputSource})}function ie(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",ie),i.removeEventListener("inputsourceschange",z);for(let L=0;L<_.length;L++){const V=b[L];V!==null&&(b[L]=null,_[L].disconnect(V))}A=null,P=null,e.setRenderTarget(d),h=null,f=null,u=null,i=null,m=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",ie),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:h}),m=new Cn(h.framebufferWidth,h.framebufferHeight,{format:Qt,type:ti,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let V=null,K=null,ee=null;g.depth&&(ee=g.stencil?35056:33190,V=g.stencil?Pi:Yn,K=g.stencil?Ti:jn);const oe={colorFormat:32856,depthFormat:ee,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(oe),i.updateRenderState({layers:[f]}),m=new Cn(f.textureWidth,f.textureHeight,{format:Qt,type:ti,depthTexture:new Rm(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const R=e.properties.get(m);R.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(L){for(let V=0;V<L.removed.length;V++){const K=L.removed[V],ee=b.indexOf(K);ee>=0&&(b[ee]=null,_[ee].disconnect(K))}for(let V=0;V<L.added.length;V++){const K=L.added[V];let ee=b.indexOf(K);if(ee===-1){for(let R=0;R<_.length;R++)if(R>=b.length){b.push(K),ee=R;break}else if(b[R]===null){b[R]=K,ee=R;break}if(ee===-1)break}const oe=_[ee];oe&&oe.connect(K)}}const F=new k,q=new k;function Y(L,V,K){F.setFromMatrixPosition(V.matrixWorld),q.setFromMatrixPosition(K.matrixWorld);const ee=F.distanceTo(q),oe=V.projectionMatrix.elements,R=K.projectionMatrix.elements,fe=oe[14]/(oe[10]-1),xe=oe[14]/(oe[10]+1),Ee=(oe[9]+1)/oe[5],_e=(oe[9]-1)/oe[5],He=(oe[8]-1)/oe[0],De=(R[8]+1)/R[0],Te=fe*He,pt=fe*De,lt=ee/(-He+De),ct=lt*-He;V.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(ct),L.translateZ(lt),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const Et=fe+lt,tt=xe+lt,je=Te-ct,Bt=pt+(ee-ct),Dt=Ee*xe/tt*Et,E=_e*xe/tt*Et;L.projectionMatrix.makePerspective(je,Bt,Dt,E,Et,tt)}function $(L,V){V===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(V.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;x.near=C.near=M.near=L.near,x.far=C.far=M.far=L.far,(A!==x.near||P!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,P=x.far);const V=L.parent,K=x.cameras;$(x,V);for(let oe=0;oe<K.length;oe++)$(K[oe],V);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),L.matrix.copy(x.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);const ee=L.children;for(let oe=0,R=ee.length;oe<R;oe++)ee[oe].updateMatrixWorld(!0);K.length===2?Y(x,M,C):x.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(L){f!==null&&(f.fixedFoveation=L),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=L)},this.getPlanes=function(){return v};let j=null;function ne(L,V){if(c=V.getViewerPose(l||o),p=V,c!==null){const K=c.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let ee=!1;K.length!==x.cameras.length&&(x.cameras.length=0,ee=!0);for(let oe=0;oe<K.length;oe++){const R=K[oe];let fe=null;if(h!==null)fe=h.getViewport(R);else{const Ee=u.getViewSubImage(f,R);fe=Ee.viewport,oe===0&&(e.setRenderTargetTextures(m,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(m))}let xe=I[oe];xe===void 0&&(xe=new yt,xe.layers.enable(oe),xe.viewport=new vt,I[oe]=xe),xe.matrix.fromArray(R.transform.matrix),xe.projectionMatrix.fromArray(R.projectionMatrix),xe.viewport.set(fe.x,fe.y,fe.width,fe.height),oe===0&&x.matrix.copy(xe.matrix),ee===!0&&x.cameras.push(xe)}}for(let K=0;K<_.length;K++){const ee=b[K],oe=_[K];ee!==null&&oe!==void 0&&oe.update(ee,V,l||o)}if(j&&j(L,V),V.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let K=null;for(const ee of v)V.detectedPlanes.has(ee)||(K===null&&(K=[]),K.push(ee));if(K!==null)for(const ee of K)v.delete(ee),w.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of V.detectedPlanes)if(!v.has(ee))v.add(ee),w.set(ee,V.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const oe=w.get(ee);ee.lastChangedTime>oe&&(w.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}p=null}const Z=new Vl;Z.setAnimationLoop(ne),this.setAnimationLoop=function(L){j=L},this.dispose=function(){}}}function Fm(r,e){function t(d,m){m.color.getRGB(d.fogColor.value,kl(r)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,b,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(d,m):m.isMeshToonMaterial?(i(d,m),u(d,m)):m.isMeshPhongMaterial?(i(d,m),c(d,m)):m.isMeshStandardMaterial?(i(d,m),f(d,m),m.isMeshPhysicalMaterial&&h(d,m,v)):m.isMeshMatcapMaterial?(i(d,m),p(d,m)):m.isMeshDepthMaterial?i(d,m):m.isMeshDistanceMaterial?(i(d,m),g(d,m)):m.isMeshNormalMaterial?i(d,m):m.isLineBasicMaterial?(s(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,_,b):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===jt&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===jt&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const w=r.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*w}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let v;m.aoMap?v=m.aoMap:m.lightMap&&(v=m.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uv2Transform.value.copy(v.matrix))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,_,b){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=b*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function h(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===jt&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Om(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(b,v){const w=v.program;n.uniformBlockBinding(b,w)}function c(b,v){let w=i[b.id];w===void 0&&(g(b),w=u(b),i[b.id]=w,b.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(b,M);const C=e.render.frame;s[b.id]!==C&&(h(b),s[b.id]=C)}function u(b){const v=f();b.__bindingPointIndex=v;const w=r.createBuffer(),M=b.__size,C=b.usage;return r.bindBuffer(35345,w),r.bufferData(35345,M,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,v,w),w}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const v=i[b.id],w=b.uniforms,M=b.__cache;r.bindBuffer(35345,v);for(let C=0,I=w.length;C<I;C++){const x=w[C];if(p(x,C,M)===!0){const A=x.__offset,P=Array.isArray(x.value)?x.value:[x.value];let B=0;for(let ie=0;ie<P.length;ie++){const z=P[ie],F=d(z);typeof z=="number"?(x.__data[0]=z,r.bufferSubData(35345,A+B,x.__data)):z.isMatrix3?(x.__data[0]=z.elements[0],x.__data[1]=z.elements[1],x.__data[2]=z.elements[2],x.__data[3]=z.elements[0],x.__data[4]=z.elements[3],x.__data[5]=z.elements[4],x.__data[6]=z.elements[5],x.__data[7]=z.elements[0],x.__data[8]=z.elements[6],x.__data[9]=z.elements[7],x.__data[10]=z.elements[8],x.__data[11]=z.elements[0]):(z.toArray(x.__data,B),B+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,A,x.__data)}}r.bindBuffer(35345,null)}function p(b,v,w){const M=b.value;if(w[v]===void 0){if(typeof M=="number")w[v]=M;else{const C=Array.isArray(M)?M:[M],I=[];for(let x=0;x<C.length;x++)I.push(C[x].clone());w[v]=I}return!0}else if(typeof M=="number"){if(w[v]!==M)return w[v]=M,!0}else{const C=Array.isArray(w[v])?w[v]:[w[v]],I=Array.isArray(M)?M:[M];for(let x=0;x<C.length;x++){const A=C[x];if(A.equals(I[x])===!1)return A.copy(I[x]),!0}}return!1}function g(b){const v=b.uniforms;let w=0;const M=16;let C=0;for(let I=0,x=v.length;I<x;I++){const A=v[I],P={boundary:0,storage:0},B=Array.isArray(A.value)?A.value:[A.value];for(let ie=0,z=B.length;ie<z;ie++){const F=B[ie],q=d(F);P.boundary+=q.boundary,P.storage+=q.storage}if(A.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,I>0){C=w%M;const ie=M-C;C!==0&&ie-P.boundary<0&&(w+=M-C,A.__offset=w)}w+=P.storage}return C=w%M,C>0&&(w+=M-C),b.__size=w,b.__cache={},this}function d(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function _(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}function Nm(){const r=nr("canvas");return r.style.display="block",r}function Xl(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Nm(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=An,this.physicallyCorrectLights=!1,this.toneMapping=an,this.toneMappingExposure=1;const d=this;let m=!1,_=0,b=0,v=null,w=-1,M=null;const C=new vt,I=new vt;let x=null,A=e.width,P=e.height,B=1,ie=null,z=null;const F=new vt(0,0,A,P),q=new vt(0,0,A,P);let Y=!1;const $=new ra;let j=!1,ne=!1,Z=null;const L=new at,V=new Pe,K=new k,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return v===null?B:1}let R=t;function fe(S,U){for(let W=0;W<S.length;W++){const N=S[W],X=e.getContext(N,U);if(X!==null)return X}return null}try{const S={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qs}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),R===null){const U=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&U.shift(),R=fe(U,S),R===null)throw fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let xe,Ee,_e,He,De,Te,pt,lt,ct,Et,tt,je,Bt,Dt,E,y,G,te,se,le,Ae,T,O,ue;function ge(){xe=new Xd(R),Ee=new Gd(R,xe,r),xe.init(Ee),T=new Lm(R,xe,Ee),_e=new Am(R,xe,Ee),He=new Zd,De=new dm,Te=new Cm(R,xe,_e,De,Ee,T,He),pt=new Hd(d),lt=new qd(d),ct=new sf(R,Ee),O=new kd(R,xe,ct,Ee),Et=new $d(R,ct,He,O),tt=new ep(R,Et,ct,He),se=new Qd(R,Ee,Te),y=new Vd(De),je=new hm(d,pt,lt,xe,Ee,O,y),Bt=new Fm(d,De),Dt=new mm,E=new ym(xe,Ee),te=new Ud(d,pt,lt,_e,tt,u,o),G=new Tm(d,tt,Ee),ue=new Om(R,He,Ee,_e),le=new Bd(R,xe,He,Ee),Ae=new Yd(R,xe,He,Ee),He.programs=je.programs,d.capabilities=Ee,d.extensions=xe,d.properties=De,d.renderLists=Dt,d.shadowMap=G,d.state=_e,d.info=He}ge();const ce=new Im(d,R);this.xr=ce,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const S=xe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=xe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(A,P,!1))},this.getSize=function(S){return S.set(A,P)},this.setSize=function(S,U,W){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=S,P=U,e.width=Math.floor(S*B),e.height=Math.floor(U*B),W!==!1&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(A*B,P*B).floor()},this.setDrawingBufferSize=function(S,U,W){A=S,P=U,B=W,e.width=Math.floor(S*W),e.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(F)},this.setViewport=function(S,U,W,N){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,U,W,N),_e.viewport(C.copy(F).multiplyScalar(B).floor())},this.getScissor=function(S){return S.copy(q)},this.setScissor=function(S,U,W,N){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,U,W,N),_e.scissor(I.copy(q).multiplyScalar(B).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(S){_e.setScissorTest(Y=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){z=S},this.getClearColor=function(S){return S.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(S=!0,U=!0,W=!0){let N=0;S&&(N|=16384),U&&(N|=256),W&&(N|=1024),R.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),Dt.dispose(),E.dispose(),De.dispose(),pt.dispose(),lt.dispose(),tt.dispose(),O.dispose(),ue.dispose(),je.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",pe),ce.removeEventListener("sessionend",Me),Z&&(Z.dispose(),Z=null),We.stop()};function ye(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const S=He.autoReset,U=G.enabled,W=G.autoUpdate,N=G.needsUpdate,X=G.type;ge(),He.autoReset=S,G.enabled=U,G.autoUpdate=W,G.needsUpdate=N,G.type=X}function Ne(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ze(S){const U=S.target;U.removeEventListener("dispose",ze),qe(U)}function qe(S){D(S),De.remove(S)}function D(S){const U=De.get(S).programs;U!==void 0&&(U.forEach(function(W){je.releaseProgram(W)}),S.isShaderMaterial&&je.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,N,X,we){U===null&&(U=ee);const Le=X.isMesh&&X.matrixWorld.determinant()<0,Fe=hc(S,U,W,N,X);_e.setMaterial(N,Le);let Oe=W.index,Ge=1;N.wireframe===!0&&(Oe=Et.getWireframeAttribute(W),Ge=2);const Ue=W.drawRange,ke=W.attributes.position;let it=Ue.start*Ge,Ft=(Ue.start+Ue.count)*Ge;we!==null&&(it=Math.max(it,we.start*Ge),Ft=Math.min(Ft,(we.start+we.count)*Ge)),Oe!==null?(it=Math.max(it,0),Ft=Math.min(Ft,Oe.count)):ke!=null&&(it=Math.max(it,0),Ft=Math.min(Ft,ke.count));const fn=Ft-it;if(fn<0||fn===1/0)return;O.setup(X,N,Fe,W,Oe);let Nn,rt=le;if(Oe!==null&&(Nn=ct.get(Oe),rt=Ae,rt.setIndex(Nn)),X.isMesh)N.wireframe===!0?(_e.setLineWidth(N.wireframeLinewidth*oe()),rt.setMode(1)):rt.setMode(4);else if(X.isLine){let Be=N.linewidth;Be===void 0&&(Be=1),_e.setLineWidth(Be*oe()),X.isLineSegments?rt.setMode(1):X.isLineLoop?rt.setMode(2):rt.setMode(3)}else X.isPoints?rt.setMode(0):X.isSprite&&rt.setMode(4);if(X.isInstancedMesh)rt.renderInstances(it,fn,X.count);else if(W.isInstancedBufferGeometry){const Be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,$r=Math.min(W.instanceCount,Be);rt.renderInstances(it,fn,$r)}else rt.render(it,fn)},this.compile=function(S,U){function W(N,X,we){N.transparent===!0&&N.side===dr?(N.side=jt,N.needsUpdate=!0,Gt(N,X,we),N.side=ei,N.needsUpdate=!0,Gt(N,X,we),N.side=dr):Gt(N,X,we)}h=E.get(S),h.init(),g.push(h),S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights(d.physicallyCorrectLights),S.traverse(function(N){const X=N.material;if(X)if(Array.isArray(X))for(let we=0;we<X.length;we++){const Le=X[we];W(Le,S,N)}else W(X,S,N)}),g.pop(),h=null};let H=null;function Q(S){H&&H(S)}function pe(){We.stop()}function Me(){We.start()}const We=new Vl;We.setAnimationLoop(Q),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(S){H=S,ce.setAnimationLoop(S),S===null?We.stop():We.start()},ce.addEventListener("sessionstart",pe),ce.addEventListener("sessionend",Me),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),S.isScene===!0&&S.onBeforeRender(d,S,U,v),h=E.get(S,g.length),h.init(),g.push(h),L.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(L),ne=this.localClippingEnabled,j=y.init(this.clippingPlanes,ne,U),f=Dt.get(S,p.length),f.init(),p.push(f),mt(S,U,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(ie,z),j===!0&&y.beginShadows();const W=h.state.shadowsArray;if(G.render(W,S,U),j===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(f,S),h.setupLights(d.physicallyCorrectLights),U.isArrayCamera){const N=U.cameras;for(let X=0,we=N.length;X<we;X++){const Le=N[X];Mt(f,S,Le,Le.viewport)}}else Mt(f,S,U);v!==null&&(Te.updateMultisampleRenderTarget(v),Te.updateRenderTargetMipmap(v)),S.isScene===!0&&S.onAfterRender(d,S,U),O.resetDefaultState(),w=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function mt(S,U,W,N){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){N&&K.setFromMatrixPosition(S.matrixWorld).applyMatrix4(L);const Le=tt.update(S),Fe=S.material;Fe.visible&&f.push(S,Le,Fe,W,K.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==He.render.frame&&(S.skeleton.update(),S.skeleton.frame=He.render.frame),!S.frustumCulled||$.intersectsObject(S))){N&&K.setFromMatrixPosition(S.matrixWorld).applyMatrix4(L);const Le=tt.update(S),Fe=S.material;if(Array.isArray(Fe)){const Oe=Le.groups;for(let Ge=0,Ue=Oe.length;Ge<Ue;Ge++){const ke=Oe[Ge],it=Fe[ke.materialIndex];it&&it.visible&&f.push(S,Le,it,W,K.z,ke)}}else Fe.visible&&f.push(S,Le,Fe,W,K.z,null)}}const we=S.children;for(let Le=0,Fe=we.length;Le<Fe;Le++)mt(we[Le],U,W,N)}function Mt(S,U,W,N){const X=S.opaque,we=S.transmissive,Le=S.transparent;h.setupLightsView(W),we.length>0&&On(X,U,W),N&&_e.viewport(C.copy(N)),X.length>0&&Ke(X,U,W),we.length>0&&Ke(we,U,W),Le.length>0&&Ke(Le,U,W),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function On(S,U,W){const N=Ee.isWebGL2;Z===null&&(Z=new Cn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?er:ti,minFilter:Qi,samples:N&&s===!0?4:0})),d.getDrawingBufferSize(V),N?Z.setSize(V.x,V.y):Z.setSize(Hs(V.x),Hs(V.y));const X=d.getRenderTarget();d.setRenderTarget(Z),d.clear();const we=d.toneMapping;d.toneMapping=an,Ke(S,U,W),d.toneMapping=we,Te.updateMultisampleRenderTarget(Z),Te.updateRenderTargetMipmap(Z),d.setRenderTarget(X)}function Ke(S,U,W){const N=U.isScene===!0?U.overrideMaterial:null;for(let X=0,we=S.length;X<we;X++){const Le=S[X],Fe=Le.object,Oe=Le.geometry,Ge=N===null?Le.material:N,Ue=Le.group;Fe.layers.test(W.layers)&&un(Fe,U,W,Oe,Ge,Ue)}}function un(S,U,W,N,X,we){S.onBeforeRender(d,U,W,N,X,we),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(d,U,W,N,S,we),X.transparent===!0&&X.side===dr?(X.side=jt,X.needsUpdate=!0,d.renderBufferDirect(W,U,N,X,S,we),X.side=ei,X.needsUpdate=!0,d.renderBufferDirect(W,U,N,X,S,we),X.side=dr):d.renderBufferDirect(W,U,N,X,S,we),S.onAfterRender(d,U,W,N,X,we)}function Gt(S,U,W){U.isScene!==!0&&(U=ee);const N=De.get(S),X=h.state.lights,we=h.state.shadowsArray,Le=X.state.version,Fe=je.getParameters(S,X.state,we,U,W),Oe=je.getProgramCacheKey(Fe);let Ge=N.programs;N.environment=S.isMeshStandardMaterial?U.environment:null,N.fog=U.fog,N.envMap=(S.isMeshStandardMaterial?lt:pt).get(S.envMap||N.environment),Ge===void 0&&(S.addEventListener("dispose",ze),Ge=new Map,N.programs=Ge);let Ue=Ge.get(Oe);if(Ue!==void 0){if(N.currentProgram===Ue&&N.lightsStateVersion===Le)return ua(S,Fe),Ue}else Fe.uniforms=je.getUniforms(S),S.onBuild(W,Fe,d),S.onBeforeCompile(Fe,d),Ue=je.acquireProgram(Fe,Oe),Ge.set(Oe,Ue),N.uniforms=Fe.uniforms;const ke=N.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ke.clippingPlanes=y.uniform),ua(S,Fe),N.needsLights=pc(S),N.lightsStateVersion=Le,N.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.directionalShadowMap.value=X.state.directionalShadowMap,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotShadowMap.value=X.state.spotShadowMap,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMap.value=X.state.pointShadowMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix);const it=Ue.getUniforms(),Ft=Nr.seqWithValue(it.seq,ke);return N.currentProgram=Ue,N.uniformsList=Ft,Ue}function ua(S,U){const W=De.get(S);W.outputEncoding=U.outputEncoding,W.instancing=U.instancing,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function hc(S,U,W,N,X){U.isScene!==!0&&(U=ee),Te.resetTextureUnits();const we=U.fog,Le=N.isMeshStandardMaterial?U.environment:null,Fe=v===null?d.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:An,Oe=(N.isMeshStandardMaterial?lt:pt).get(N.envMap||Le),Ge=N.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!N.normalMap&&!!W.attributes.tangent,ke=!!W.morphAttributes.position,it=!!W.morphAttributes.normal,Ft=!!W.morphAttributes.color,fn=N.toneMapped?d.toneMapping:an,Nn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rt=Nn!==void 0?Nn.length:0,Be=De.get(N),$r=h.state.lights;if(j===!0&&(ne===!0||S!==M)){const Ot=S===M&&N.id===w;y.setState(N,S,Ot)}let gt=!1;N.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==$r.state.version||Be.outputEncoding!==Fe||X.isInstancedMesh&&Be.instancing===!1||!X.isInstancedMesh&&Be.instancing===!0||X.isSkinnedMesh&&Be.skinning===!1||!X.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Oe||N.fog===!0&&Be.fog!==we||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==y.numPlanes||Be.numIntersection!==y.numIntersection)||Be.vertexAlphas!==Ge||Be.vertexTangents!==Ue||Be.morphTargets!==ke||Be.morphNormals!==it||Be.morphColors!==Ft||Be.toneMapping!==fn||Ee.isWebGL2===!0&&Be.morphTargetsCount!==rt)&&(gt=!0):(gt=!0,Be.__version=N.version);let zn=Be.currentProgram;gt===!0&&(zn=Gt(N,U,X));let fa=!1,Ni=!1,Yr=!1;const Tt=zn.getUniforms(),Un=Be.uniforms;if(_e.useProgram(zn.program)&&(fa=!0,Ni=!0,Yr=!0),N.id!==w&&(w=N.id,Ni=!0),fa||M!==S){if(Tt.setValue(R,"projectionMatrix",S.projectionMatrix),Ee.logarithmicDepthBuffer&&Tt.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),M!==S&&(M=S,Ni=!0,Yr=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Ot=Tt.map.cameraPosition;Ot!==void 0&&Ot.setValue(R,K.setFromMatrixPosition(S.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Tt.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||X.isSkinnedMesh)&&Tt.setValue(R,"viewMatrix",S.matrixWorldInverse)}if(X.isSkinnedMesh){Tt.setOptional(R,X,"bindMatrix"),Tt.setOptional(R,X,"bindMatrixInverse");const Ot=X.skeleton;Ot&&(Ee.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),Tt.setValue(R,"boneTexture",Ot.boneTexture,Te),Tt.setValue(R,"boneTextureSize",Ot.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zr=W.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0&&Ee.isWebGL2===!0)&&se.update(X,W,N,zn),(Ni||Be.receiveShadow!==X.receiveShadow)&&(Be.receiveShadow=X.receiveShadow,Tt.setValue(R,"receiveShadow",X.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Un.envMap.value=Oe,Un.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Ni&&(Tt.setValue(R,"toneMappingExposure",d.toneMappingExposure),Be.needsLights&&dc(Un,Yr),we&&N.fog===!0&&Bt.refreshFogUniforms(Un,we),Bt.refreshMaterialUniforms(Un,N,B,P,Z),Nr.upload(R,Be.uniformsList,Un,Te)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Nr.upload(R,Be.uniformsList,Un,Te),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Tt.setValue(R,"center",X.center),Tt.setValue(R,"modelViewMatrix",X.modelViewMatrix),Tt.setValue(R,"normalMatrix",X.normalMatrix),Tt.setValue(R,"modelMatrix",X.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Ot=N.uniformsGroups;for(let Kr=0,mc=Ot.length;Kr<mc;Kr++)if(Ee.isWebGL2){const ha=Ot[Kr];ue.update(ha,zn),ue.bind(ha,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function dc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function pc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(S,U,W){De.get(S.texture).__webglTexture=U,De.get(S.depthTexture).__webglTexture=W;const N=De.get(S);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=W===void 0,N.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){const W=De.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){v=S,_=U,b=W;let N=!0,X=null,we=!1,Le=!1;if(S){const Oe=De.get(S);Oe.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),N=!1):Oe.__webglFramebuffer===void 0?Te.setupRenderTarget(S):Oe.__hasExternalTextures&&Te.rebindTextures(S,De.get(S.texture).__webglTexture,De.get(S.depthTexture).__webglTexture);const Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Le=!0);const Ue=De.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(X=Ue[U],we=!0):Ee.isWebGL2&&S.samples>0&&Te.useMultisampledRTT(S)===!1?X=De.get(S).__webglMultisampledFramebuffer:X=Ue,C.copy(S.viewport),I.copy(S.scissor),x=S.scissorTest}else C.copy(F).multiplyScalar(B).floor(),I.copy(q).multiplyScalar(B).floor(),x=Y;if(_e.bindFramebuffer(36160,X)&&Ee.drawBuffers&&N&&_e.drawBuffers(S,X),_e.viewport(C),_e.scissor(I),_e.setScissorTest(x),we){const Oe=De.get(S.texture);R.framebufferTexture2D(36160,36064,34069+U,Oe.__webglTexture,W)}else if(Le){const Oe=De.get(S.texture),Ge=U||0;R.framebufferTextureLayer(36160,36064,Oe.__webglTexture,W||0,Ge)}w=-1},this.readRenderTargetPixels=function(S,U,W,N,X,we,Le){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){_e.bindFramebuffer(36160,Fe);try{const Oe=S.texture,Ge=Oe.format,Ue=Oe.type;if(Ge!==Qt&&T.convert(Ge)!==R.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ue===er&&(xe.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ue!==ti&&T.convert(Ue)!==R.getParameter(35738)&&!(Ue===qn&&(Ee.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-N&&W>=0&&W<=S.height-X&&R.readPixels(U,W,N,X,T.convert(Ge),T.convert(Ue),we)}finally{const Oe=v!==null?De.get(v).__webglFramebuffer:null;_e.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(S,U,W=0){const N=Math.pow(2,-W),X=Math.floor(U.image.width*N),we=Math.floor(U.image.height*N);Te.setTexture2D(U,0),R.copyTexSubImage2D(3553,W,0,0,S.x,S.y,X,we),_e.unbindTexture()},this.copyTextureToTexture=function(S,U,W,N=0){const X=U.image.width,we=U.image.height,Le=T.convert(W.format),Fe=T.convert(W.type);Te.setTexture2D(W,0),R.pixelStorei(37440,W.flipY),R.pixelStorei(37441,W.premultiplyAlpha),R.pixelStorei(3317,W.unpackAlignment),U.isDataTexture?R.texSubImage2D(3553,N,S.x,S.y,X,we,Le,Fe,U.image.data):U.isCompressedTexture?R.compressedTexSubImage2D(3553,N,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,Le,U.mipmaps[0].data):R.texSubImage2D(3553,N,S.x,S.y,Le,Fe,U.image),N===0&&W.generateMipmaps&&R.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(S,U,W,N,X=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=S.max.x-S.min.x+1,Le=S.max.y-S.min.y+1,Fe=S.max.z-S.min.z+1,Oe=T.convert(N.format),Ge=T.convert(N.type);let Ue;if(N.isData3DTexture)Te.setTexture3D(N,0),Ue=32879;else if(N.isDataArrayTexture)Te.setTexture2DArray(N,0),Ue=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(37440,N.flipY),R.pixelStorei(37441,N.premultiplyAlpha),R.pixelStorei(3317,N.unpackAlignment);const ke=R.getParameter(3314),it=R.getParameter(32878),Ft=R.getParameter(3316),fn=R.getParameter(3315),Nn=R.getParameter(32877),rt=W.isCompressedTexture?W.mipmaps[0]:W.image;R.pixelStorei(3314,rt.width),R.pixelStorei(32878,rt.height),R.pixelStorei(3316,S.min.x),R.pixelStorei(3315,S.min.y),R.pixelStorei(32877,S.min.z),W.isDataTexture||W.isData3DTexture?R.texSubImage3D(Ue,X,U.x,U.y,U.z,we,Le,Fe,Oe,Ge,rt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Ue,X,U.x,U.y,U.z,we,Le,Fe,Oe,rt.data)):R.texSubImage3D(Ue,X,U.x,U.y,U.z,we,Le,Fe,Oe,Ge,rt),R.pixelStorei(3314,ke),R.pixelStorei(32878,it),R.pixelStorei(3316,Ft),R.pixelStorei(3315,fn),R.pixelStorei(32877,Nn),X===0&&N.generateMipmaps&&R.generateMipmap(Ue),_e.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Te.setTextureCube(S,0):S.isData3DTexture?Te.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Te.setTexture2DArray(S,0):Te.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){_=0,b=0,v=null,_e.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class zm extends Xl{}zm.prototype.isWebGL1Renderer=!0;let Um=class extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};class la extends yn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new k,u=new Pe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const p=n+f/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(l,2))}static fromJSON(e){return new la(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fi extends lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Oo={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class km{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const $l=new km;class Yl{constructor(e){this.manager=e!==void 0?e:$l,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Bm extends Yl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Oo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=nr("img");function l(){u(),Oo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class No extends Yl{constructor(e){super(e)}load(e,t,n,i){const s=new It,o=new Bm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Zl extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ds=new at,zo=new k,Uo=new k;class Gm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zo.setFromMatrixPosition(e.matrixWorld),t.position.copy(zo),Uo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uo),t.updateMatrixWorld(),Ds.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ds),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ds)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vm extends Gm{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ln extends Zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.target=new ot,this.shadow=new Vm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cr extends Zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ko(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ko();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ko(){return(typeof performance>"u"?Date:performance).now()}class Hm{constructor(e,t,n=0,i=1/0){this.ray=new Ol(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return js(e,this,n,t),n.sort(Bo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)js(e[i],this,n,t);return n.sort(Bo),n}}function Bo(r,e){return r.distance-e.distance}function js(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)js(i[s],e,t,!0)}}class Go{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qs);const Wm={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class jr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const jm=new aa(-1,1,1,-1,0,1),ca=new yn;ca.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3));ca.setAttribute("uv",new qt([0,2,0,0,2,0],2));class qm{constructor(e){this._mesh=new Pt(ca,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,jm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Xm extends jr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bl.clone(e.uniforms),this.material=new bn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new qm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vo extends jr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class $m extends jr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ym{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Pe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Cn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xm(Wm),this.clock=new Kl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vo!==void 0&&(o instanceof Vo?n=!0:o instanceof $m&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jl extends jr{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Zm=(r,e,t)=>{r.renderer=new Xl({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new Ym(r.renderer),r.composer.addPass(new Jl(r.scene,rn(r.camera)))},Ho=(r,e,t)=>{r.renderer&&(e?r.renderer.outputEncoding=An:r.renderer.outputEncoding=Ze,t?r.renderer.toneMapping=an:r.renderer.toneMapping=Tl)},Wo=(r,e,t)=>{var n,i,s,o,a,l,c,u;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(o=(s=r.renderer).setPixelRatio)==null||o.call(s,t),(l=(a=r.composer).setSize)==null||l.call(a,e.width,e.height),(u=(c=r.composer).setPixelRatio)==null||u.call(c,t))},jo=(r,e,t)=>{r.renderer&&(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},Wt=r=>r.userData,Km=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},Ql=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),Jm=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,Qm=(r,e,t)=>{let n=rn(r.camera);const i=r.camera.subscribe(c=>n=c);$e(i);let s=rn(r.pointer);const o=r.pointer.subscribe(c=>s=c);$e(o);let a;const l=c=>{var h,p;c.preventDefault();const u=c.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,Km(r,c);const f=eg(e,s,n);if(u==="pointerdown"&&(a=f?{object:f.object,instanceId:f.instanceId}:null),u==="click"){if(!tg(f,a)){a=null;return}a=null}f&&((p=(h=Wt(f.object)).eventDispatcher)==null||p.call(h,u,{...f,event:c}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function eg(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=Ql(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function tg(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const ng=(r,e)=>{let t=rn(r.pointerOverCanvas);const n=r.pointerOverCanvas.subscribe(c=>t=c);$e(n);let i=rn(r.camera);const s=r.camera.subscribe(c=>i=c);$e(s);let o=rn(r.pointer);const a=r.pointer.subscribe(c=>o=c);return $e(a),{raycast:()=>{var f,h,p,g,d,m,_,b;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Ql(e,o,i,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&Jm(e.lastIntersection,u)&&((m=(d=Wt(e.lastIntersection.object)).eventDispatcher)==null||m.call(d,"pointerleave",e.lastIntersection),(b=(_=Wt(u.object)).eventDispatcher)==null||b.call(_,"pointerenter",u)):(g=(p=Wt(u.object)).eventDispatcher)==null||g.call(p,"pointerenter",u):e.lastIntersection&&((h=(f=Wt(e.lastIntersection.object)).eventDispatcher)==null||h.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},qr=typeof window<"u",ig=r=>{if(!qr)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),$e(()=>{e&&cancelAnimationFrame(e)})},rg=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>(i.order??0)>(s.order??0)?1:-1).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},sg=r=>{r.debugFrameloop&&(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by ↴":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},ag=(r,e,t,n)=>{let i=rn(r.camera);const s=r.camera.subscribe(a=>i=a);$e(s);const{raycast:o}=ng(r,e);ig(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!i||!r.composer||!r.renderer||(rg(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),sg(t),t.frameInvalidated=!1,t.advance=!1))})},og=()=>{const r=new yt(75,0,.1,1e3);return Wt(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},lg=r=>{const e=r.size.subscribe(t=>{Wt(rn(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});$e(e)},cg=(r,e,t,n,i,s,o)=>{const a={audioListeners:new Map,addAudioListener:(_,b)=>{if(b=b??"default",a.audioListeners.has(b)){console.warn(`An AudioListener with the id "${b}" has already been added, aborting.`);return}a.audioListeners.set(b,_)},removeAudioListener:_=>{if(_=_??"default",!a.audioListeners.has(_)){console.warn(`No AudioListener with the id "${_}" found, aborting.`);return}a.audioListeners.delete(_)},getAudioListener:_=>{if(_=_??"default",!a.audioListeners.has(_)){console.warn(`No AudioListener with the id "${_}" found, aborting.`);return}return a.audioListeners.get(_)}},l={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:zc([n,i],([_,b])=>_||b),pointer:nt(new Pe),pointerOverCanvas:nt(!1),clock:new Kl,camera:nt(og()),scene:new Um,renderer:void 0,composer:void 0,invalidate:_=>{l.frameInvalidated=!0,l.debugFrameloop&&_&&(l.invalidations[_]=l.invalidations[_]?l.invalidations[_]+1:1)},advance:()=>{l.advance=!0}},u={flat:nt(e),linear:nt(r),dpr:nt(t),setCamera:_=>{c.camera.set(_),c.composer&&(c.composer.passes.forEach(b=>{b instanceof Jl&&(b.camera=_)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Hm,lastIntersection:null,addRaycastableObject:_=>{u.raycastableObjects.add(_)},removeRaycastableObject:_=>{u.raycastableObjects.delete(_)},addInteractiveObject:_=>{u.interactiveObjects.add(_)},removeInteractiveObject:_=>{u.interactiveObjects.delete(_)},addPass:_=>{c.composer&&(c.composer.addPass(_),c.invalidate("Canvas: adding pass"))},removePass:_=>{c.composer&&(c.composer.removePass(_),c.invalidate("Canvas: removing pass"))}},f={dispose:async(_=!1)=>{await Zs(),!(!f.shouldDispose&&!_)&&(f.disposableObjects.forEach((b,v)=>{var w;(b===0||_)&&((w=v==null?void 0:v.dispose)==null||w.call(v),f.disposableObjects.delete(v))}),f.shouldDispose=!1)},collectDisposableObjects:(_,b)=>{const v=b??[];return _&&(_!=null&&_.dispose&&typeof _.dispose=="function"&&_.type!=="Scene"&&v.push(_),Object.entries(_).forEach(([w,M])=>{if(w==="parent"||w==="children"||typeof M!="object")return;const C=M;C!=null&&C.dispose&&f.collectDisposableObjects(C,v)})),v},addDisposableObjects:_=>{_.forEach(b=>{const v=f.disposableObjects.get(b);v?f.disposableObjects.set(b,v+1):f.disposableObjects.set(b,1)})},removeDisposableObjects:_=>{_.length!==0&&(_.forEach(b=>{const v=f.disposableObjects.get(b);v&&v>0&&f.disposableObjects.set(b,v-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return Kt("threlte",c),Kt("threlte-root",u),Kt("threlte-render-context",l),Kt("threlte-audio-context",a),Kt("threlte-disposal-context",f),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:a,disposalCtx:f,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>a,getDisposalCtx:()=>f}};function ec(r,e){const t=nt(r);let n=r;const i=t.subscribe(a=>n=a);return $e(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(a),e==null||e(a,l)},update:a=>{const l=a(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const Fn=()=>xn("threlte");function ug(r){let e;const t=r[8].default,n=Pn(t,r,r[7],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&Rn(n,t,i,i[7],e?Dn(t,i[7],s,null):In(i[7]),null)},i(i){e||(J(n,i),e=!0)},o(i){re(n,i),e=!1},d(i){n&&n.d(i)}}}const fg=()=>({onChildMount:xn("threlte-hierarchical-object-on-mount"),onChildDestroy:xn("threlte-hierarchical-object-on-destroy")}),tc=()=>xn("threlte-hierarchical-parent-context");function hg(r,e,t){var _;let n,{$$slots:i={},$$scope:s}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:l=void 0}=e;const c=b=>{a.push(b),t(1,a),l==null||l(b)};let{onChildDestroy:u=void 0}=e;const f=b=>{const v=a.findIndex(w=>w.uuid===b.uuid);v!==-1&&a.splice(v,1),t(1,a),u==null||u(b)},{invalidate:h}=Fn(),p=tc();xt(r,p,b=>t(6,n=b));let{parent:g=n}=e;const d=fg();o&&((_=d.onChildMount)==null||_.call(d,o),h("HierarchicalObject: object added"));const m=ec(o,(b,v)=>{var w,M;v&&((w=d.onChildDestroy)==null||w.call(d,v),h("HierarchicalObject: object added")),b&&((M=d.onChildMount)==null||M.call(d,b),h("HierarchicalObject: object removed"))});return $e(()=>{var b;o&&((b=d.onChildDestroy)==null||b.call(d,o),h("HierarchicalObject: object removed"))}),Kt("threlte-hierarchical-object-on-mount",c),Kt("threlte-hierarchical-object-on-destroy",f),Kt("threlte-hierarchical-parent-context",m),r.$$set=b=>{"object"in b&&t(3,o=b.object),"children"in b&&t(1,a=b.children),"onChildMount"in b&&t(4,l=b.onChildMount),"onChildDestroy"in b&&t(5,u=b.onChildDestroy),"parent"in b&&t(2,g=b.parent),"$$scope"in b&&t(7,s=b.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,g=n),r.$$.dirty&8&&m.set(o)},[p,a,g,o,l,u,n,s,i]}class dg extends et{constructor(e){super(),Qe(this,e,hg,ug,Je,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function pg(r){let e;const t=r[1].default,n=Pn(t,r,r[4],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&Rn(n,t,i,i[4],e?Dn(t,i[4],s,null):In(i[4]),null)},i(i){e||(J(n,i),e=!0)},o(i){re(n,i),e=!1},d(i){n&&n.d(i)}}}function mg(r){let e,t;return e=new dg({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[pg]},$$scope:{ctx:r}}}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function gg(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const o=l=>s.add(l),a=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,o,a,i]}class nc extends et{constructor(e){super(),Qe(this,e,gg,mg,Je,{object:0})}}const _g=()=>{const r=nt({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(o=>e=o);$e(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&r.set({width:a,height:l})},s=o=>{n=o,i(),window.addEventListener("resize",i)};return qr?($e(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function qo(r){let e,t;return e=new nc({props:{object:r[0].scene,$$slots:{default:[xg]},$$scope:{ctx:r}}}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function xg(r){let e;const t=r[29].default,n=Pn(t,r,r[33],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&Rn(n,t,i,i[33],e?Dn(t,i[33],s,null):In(i[33]),null)},i(i){e||(J(n,i),e=!0)},o(i){re(n,i),e=!1},d(i){n&&n.d(i)}}}function vg(r){let e,t,n,i,s=r[2]&&qo(r);return{c(){e=ft("canvas"),s&&s.c(),Ve(e,"class","svelte-o3oskp")},m(o,a){Se(o,e,a),s&&s.m(e,null),r[30](e),t=!0,n||(i=[xc(r[3].call(null,e)),wt(e,"click",r[9]),wt(e,"contextmenu",r[10]),wt(e,"pointerup",r[13]),wt(e,"pointerdown",r[11]),wt(e,"pointermove",r[12]),wt(e,"pointerenter",r[31]),wt(e,"pointerleave",r[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&J(s,1)):(s=qo(o),s.c(),J(s,1),s.m(e,null)):s&&(Jn(),re(s,1,1,()=>{s=null}),Qn())},i(o){t||(J(s),t=!0)},o(o){re(s),t=!1},d(o){o&&be(e),s&&s.d(),r[30](null),n=!1,Xt(i)}}}const Xo=new Set;function bg(r,e,t){let n,i,s,o,{$$slots:a={},$$scope:l}=e,{dpr:c=qr?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:f=!1}=e,{frameloop:h="demand"}=e,{debugFrameloop:p=!1}=e,{shadows:g=!0}=e,{shadowMapType:d=Ml}=e,{size:m=void 0}=e,{rendererParameters:_=void 0}=e,b,v=!1;const w=nt(m),{parentSize:M,parentSizeAction:C}=_g(),I=cg(f,u,c,w,M,p,h),{getCtx:x,renderCtx:A,disposalCtx:P}=I,{ctx:B,rootCtx:ie,audioCtx:z}=I;lg(B),Xo.add(B.invalidate),$e(()=>{Xo.delete(B.invalidate)});const{size:F,scene:q}=B;xt(r,F,fe=>t(26,i=fe));const{flat:Y,linear:$,dpr:j}=ie;xt(r,Y,fe=>t(27,s=fe)),xt(r,$,fe=>t(28,o=fe)),xt(r,j,fe=>t(25,n=fe)),Kt("threlte-parent",nt(q)),dl(()=>{b&&(Zm(B,b,_),Ho(B,o,s),Wo(B,i,n),jo(B,g,d),t(2,v=!0))}),ag(B,ie,A,P);const{onClick:ne,onContextMenu:Z,onPointerDown:L,onPointerMove:V,onPointerUp:K}=Qm(B,ie,A);$e(()=>{P.dispose(!0)});function ee(fe){Os[fe?"unshift":"push"](()=>{b=fe,t(1,b)})}const oe=()=>x().pointerOverCanvas.set(!0),R=()=>x().pointerOverCanvas.set(!1);return r.$$set=fe=>{"dpr"in fe&&t(14,c=fe.dpr),"flat"in fe&&t(15,u=fe.flat),"linear"in fe&&t(16,f=fe.linear),"frameloop"in fe&&t(17,h=fe.frameloop),"debugFrameloop"in fe&&t(18,p=fe.debugFrameloop),"shadows"in fe&&t(19,g=fe.shadows),"shadowMapType"in fe&&t(20,d=fe.shadowMapType),"size"in fe&&t(21,m=fe.size),"rendererParameters"in fe&&t(22,_=fe.rendererParameters),"$$scope"in fe&&t(33,l=fe.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&w.set(m),r.$$.dirty[0]&65536&&sn($,o=f,o),r.$$.dirty[0]&32768&&sn(Y,s=u,s),r.$$.dirty[0]&16384&&sn(j,n=c,n),r.$$.dirty[0]&402653184&&Ho(x(),o,s),r.$$.dirty[0]&100663296&&Wo(x(),i,n),r.$$.dirty[0]&1572864&&jo(x(),g,d)},[B,b,v,C,x,F,Y,$,j,ne,Z,L,V,K,c,u,f,h,p,g,d,m,_,ie,z,n,i,s,o,a,ee,oe,R,l]}class ic extends et{constructor(e){super(),Qe(this,e,bg,vg,Je,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const rc=()=>xn("threlte-root"),yg=()=>xn("threlte-disposal-context");function Mg(r){let e;const t=r[9].default,n=Pn(t,r,r[8],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&Rn(n,t,i,i[8],e?Dn(t,i[8],s,null):In(i[8]),null)},i(i){e||(J(n,i),e=!0)},o(i){re(n,i),e=!1},d(i){n&&n.d(i)}}}const $o="threlte-disposable-object-context";function Sg(r,e,t){let n,i,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:l,removeDisposableObjects:c}=yg();let{object:u=void 0}=e,f=u,{dispose:h=void 0}=e;const p=xn($o);xt(r,p,m=>t(7,i=m));const g=nt(h??i??!0);xt(r,g,m=>t(6,n=m)),Kt($o,g);let d=n?a(u):[];return l(d),$e(()=>{c(d)}),r.$$set=m=>{"object"in m&&t(2,u=m.object),"dispose"in m&&t(3,h=m.dispose),"$$scope"in m&&t(8,o=m.$$scope)},r.$$.update=()=>{r.$$.dirty&136&&g.set(h??i??!0),r.$$.dirty&116&&u!==f&&(c(d),t(5,d=n?a(u):[]),l(d),t(4,f=u))},[p,g,u,h,f,d,n,i,o,s]}class sc extends et{constructor(e){super(),Qe(this,e,Sg,Mg,Je,{object:2,dispose:3})}}const Xr=(r,e)=>{if(!qr)return{start:()=>{},stop:()=>{},started:_l(!1)};const t=xn("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=nt(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((e==null?void 0:e.autostart)??!0)&&o(),$e(()=>{s()}),{start:o,stop:s,started:{subscribe:i.subscribe}}},wg=()=>{const r=nt(!1);return(async()=>{await Zs(),r.set(!0)})(),r};function Eg(r,e,t){let n,i,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new k,f=Vr(),{invalidate:h}=Fn(),p=wg();xt(r,p,v=>t(8,i=v));const g=async()=>{i||await Zs(),f("transform")},d=async()=>{h("TransformableObject: transformed"),await g()};Wt(s).onTransform=d;const{start:m,stop:_}=Xr(async()=>{c&&!l&&c instanceof ot&&(c.getWorldPosition(u),s.lookAt(u),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),b=ec(s);return xt(r,b,v=>t(7,n=v)),r.$$set=v=>{"object"in v&&t(2,s=v.object),"position"in v&&t(3,o=v.position),"scale"in v&&t(4,a=v.scale),"rotation"in v&&t(5,l=v.rotation),"lookAt"in v&&t(6,c=v.lookAt)},r.$$.update=()=>{r.$$.dirty&4&&b.set(s),r.$$.dirty&232&&(o&&(n.position.set(o.x??0,o.y??0,o.z??0),d()),c&&!l&&(c instanceof ot?m():(_(),n.lookAt(c.x??0,c.y??0,c.z??0),d())),c||_()),r.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set(a.x??1,a.y??1,a.z??1),d()),r.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),d())},[p,b,s,o,a,l,c,n]}class Tg extends et{constructor(e){super(),Qe(this,e,Eg,null,Je,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}const Yo=[],Ag=(r,e)=>{const t=Yo.find(i=>i instanceof r);if(t)return t;const n=e();return Yo.push(n),n},Zo={type:"change"},Rs={type:"start"},Ko={type:"end"};let Cg=class extends ii{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Dt),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Zo),n.update(),s=i.NONE},this.update=function(){const T=new k,O=new ni().setFromUnitVectors(e.up,new k(0,1,0)),ue=O.clone().invert(),ge=new k,ce=new ni,ye=2*Math.PI;return function(){const Ne=n.object.position;T.copy(Ne).sub(n.target),T.applyQuaternion(O),a.setFromVector3(T),n.autoRotate&&s===i.NONE&&A(I()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ze=n.minAzimuthAngle,qe=n.maxAzimuthAngle;return isFinite(ze)&&isFinite(qe)&&(ze<-Math.PI?ze+=ye:ze>Math.PI&&(ze-=ye),qe<-Math.PI?qe+=ye:qe>Math.PI&&(qe-=ye),ze<=qe?a.theta=Math.max(ze,Math.min(qe,a.theta)):a.theta=a.theta>(ze+qe)/2?Math.max(ze,a.theta):Math.min(qe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),T.setFromSpherical(a),T.applyQuaternion(ue),Ne.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ge.distanceToSquared(n.object.position)>o||8*(1-ce.dot(n.object.quaternion))>o?(n.dispatchEvent(Zo),ge.copy(n.object.position),ce.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",G),n.domElement.removeEventListener("pointerdown",pt),n.domElement.removeEventListener("pointercancel",Et),n.domElement.removeEventListener("wheel",Bt),n.domElement.removeEventListener("pointermove",lt),n.domElement.removeEventListener("pointerup",ct),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Dt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Go,l=new Go;let c=1;const u=new k;let f=!1;const h=new Pe,p=new Pe,g=new Pe,d=new Pe,m=new Pe,_=new Pe,b=new Pe,v=new Pe,w=new Pe,M=[],C={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function A(T){l.theta-=T}function P(T){l.phi-=T}const B=function(){const T=new k;return function(ue,ge){T.setFromMatrixColumn(ge,0),T.multiplyScalar(-ue),u.add(T)}}(),ie=function(){const T=new k;return function(ue,ge){n.screenSpacePanning===!0?T.setFromMatrixColumn(ge,1):(T.setFromMatrixColumn(ge,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(ue),u.add(T)}}(),z=function(){const T=new k;return function(ue,ge){const ce=n.domElement;if(n.object.isPerspectiveCamera){const ye=n.object.position;T.copy(ye).sub(n.target);let ve=T.length();ve*=Math.tan(n.object.fov/2*Math.PI/180),B(2*ue*ve/ce.clientHeight,n.object.matrix),ie(2*ge*ve/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(ue*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),ie(ge*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(T){n.object.isPerspectiveCamera?c/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(T){n.object.isPerspectiveCamera?c*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(T){h.set(T.clientX,T.clientY)}function $(T){b.set(T.clientX,T.clientY)}function j(T){d.set(T.clientX,T.clientY)}function ne(T){p.set(T.clientX,T.clientY),g.subVectors(p,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;A(2*Math.PI*g.x/O.clientHeight),P(2*Math.PI*g.y/O.clientHeight),h.copy(p),n.update()}function Z(T){v.set(T.clientX,T.clientY),w.subVectors(v,b),w.y>0?F(x()):w.y<0&&q(x()),b.copy(v),n.update()}function L(T){m.set(T.clientX,T.clientY),_.subVectors(m,d).multiplyScalar(n.panSpeed),z(_.x,_.y),d.copy(m),n.update()}function V(T){T.deltaY<0?q(x()):T.deltaY>0&&F(x()),n.update()}function K(T){let O=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),O=!0;break}O&&(T.preventDefault(),n.update())}function ee(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const T=.5*(M[0].pageX+M[1].pageX),O=.5*(M[0].pageY+M[1].pageY);h.set(T,O)}}function oe(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const T=.5*(M[0].pageX+M[1].pageX),O=.5*(M[0].pageY+M[1].pageY);d.set(T,O)}}function R(){const T=M[0].pageX-M[1].pageX,O=M[0].pageY-M[1].pageY,ue=Math.sqrt(T*T+O*O);b.set(0,ue)}function fe(){n.enableZoom&&R(),n.enablePan&&oe()}function xe(){n.enableZoom&&R(),n.enableRotate&&ee()}function Ee(T){if(M.length==1)p.set(T.pageX,T.pageY);else{const ue=Ae(T),ge=.5*(T.pageX+ue.x),ce=.5*(T.pageY+ue.y);p.set(ge,ce)}g.subVectors(p,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;A(2*Math.PI*g.x/O.clientHeight),P(2*Math.PI*g.y/O.clientHeight),h.copy(p)}function _e(T){if(M.length===1)m.set(T.pageX,T.pageY);else{const O=Ae(T),ue=.5*(T.pageX+O.x),ge=.5*(T.pageY+O.y);m.set(ue,ge)}_.subVectors(m,d).multiplyScalar(n.panSpeed),z(_.x,_.y),d.copy(m)}function He(T){const O=Ae(T),ue=T.pageX-O.x,ge=T.pageY-O.y,ce=Math.sqrt(ue*ue+ge*ge);v.set(0,ce),w.set(0,Math.pow(v.y/b.y,n.zoomSpeed)),F(w.y),b.copy(v)}function De(T){n.enableZoom&&He(T),n.enablePan&&_e(T)}function Te(T){n.enableZoom&&He(T),n.enableRotate&&Ee(T)}function pt(T){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",lt),n.domElement.addEventListener("pointerup",ct)),te(T),T.pointerType==="touch"?E(T):tt(T))}function lt(T){n.enabled!==!1&&(T.pointerType==="touch"?y(T):je(T))}function ct(T){se(T),M.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",lt),n.domElement.removeEventListener("pointerup",ct)),n.dispatchEvent(Ko),s=i.NONE}function Et(T){se(T)}function tt(T){let O;switch(T.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case si.DOLLY:if(n.enableZoom===!1)return;$(T),s=i.DOLLY;break;case si.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;j(T),s=i.PAN}else{if(n.enableRotate===!1)return;Y(T),s=i.ROTATE}break;case si.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;Y(T),s=i.ROTATE}else{if(n.enablePan===!1)return;j(T),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Rs)}function je(T){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ne(T);break;case i.DOLLY:if(n.enableZoom===!1)return;Z(T);break;case i.PAN:if(n.enablePan===!1)return;L(T);break}}function Bt(T){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(T.preventDefault(),n.dispatchEvent(Rs),V(T),n.dispatchEvent(Ko))}function Dt(T){n.enabled===!1||n.enablePan===!1||K(T)}function E(T){switch(le(T),M.length){case 1:switch(n.touches.ONE){case ai.ROTATE:if(n.enableRotate===!1)return;ee(),s=i.TOUCH_ROTATE;break;case ai.PAN:if(n.enablePan===!1)return;oe(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ai.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;fe(),s=i.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Rs)}function y(T){switch(le(T),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;_e(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;De(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(T),n.update();break;default:s=i.NONE}}function G(T){n.enabled!==!1&&T.preventDefault()}function te(T){M.push(T)}function se(T){delete C[T.pointerId];for(let O=0;O<M.length;O++)if(M[O].pointerId==T.pointerId){M.splice(O,1);return}}function le(T){let O=C[T.pointerId];O===void 0&&(O=new Pe,C[T.pointerId]=O),O.set(T.pageX,T.pageY)}function Ae(T){const O=T.pointerId===M[0].pointerId?M[1]:M[0];return C[O.pointerId]}n.domElement.addEventListener("contextmenu",G),n.domElement.addEventListener("pointerdown",pt),n.domElement.addEventListener("pointercancel",Et),n.domElement.addEventListener("wheel",Bt,{passive:!1}),this.update()}};function Lg(r){let e,t,n,i;return e=new sc({props:{dispose:r[2],object:r[0]}}),n=new Tg({props:{object:r[4],position:r[1]}}),n.$on("transform",r[5]),{c(){me(e.$$.fragment),t=Ce(),me(n.$$.fragment)},m(s,o){he(e,s,o),Se(s,t,o),he(n,s,o),i=!0},p(s,o){const a={};o[0]&4&&(a.dispose=s[2]),o[0]&1&&(a.object=s[0]),e.$set(a);const l={};o[0]&2&&(l.position=s[1]),n.$set(l)},i(s){i||(J(e.$$.fragment,s),J(n.$$.fragment,s),i=!0)},o(s){re(e.$$.fragment,s),re(n.$$.fragment,s),i=!1},d(s){de(e,s),s&&be(t),de(n,s)}}}function Pg(r,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:f=void 0}=e,{keyPanSpeed:h=void 0}=e,{keys:p=void 0}=e,{maxAzimuthAngle:g=void 0}=e,{maxDistance:d=void 0}=e,{maxPolarAngle:m=void 0}=e,{maxZoom:_=void 0}=e,{minAzimuthAngle:b=void 0}=e,{minDistance:v=void 0}=e,{minPolarAngle:w=void 0}=e,{minZoom:M=void 0}=e,{mouseButtons:C=void 0}=e,{panSpeed:I=void 0}=e,{rotateSpeed:x=void 0}=e,{screenSpacePanning:A=void 0}=e,{touches:P=void 0}=e,{zoomSpeed:B=void 0}=e,{target:ie=void 0}=e,{dispose:z=void 0}=e;const F=tc();xt(r,F,R=>t(30,n=R));const{renderer:q,invalidate:Y}=Fn();if(!q)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof ia))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const $=Vr(),j=()=>{Y("Orbitcontrols: change event"),$("change")},ne=()=>$("start"),Z=()=>$("end"),L=new Cg(n,q.domElement);Wt(n).orbitControls=L,L.addEventListener("change",j),L.addEventListener("start",ne),L.addEventListener("end",Z),$e(()=>{n&&delete Wt(n).orbitControls,L.removeEventListener("change",j),L.removeEventListener("start",ne),L.removeEventListener("end",Z)});const{start:V,stop:K}=Xr(()=>L.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),ee=new ot,oe=()=>{t(0,L.target=ee.position,L),L.update(),Y("OrbitControls: target changed")};return r.$$set=R=>{"autoRotate"in R&&t(6,i=R.autoRotate),"autoRotateSpeed"in R&&t(7,s=R.autoRotateSpeed),"dampingFactor"in R&&t(8,o=R.dampingFactor),"enableDamping"in R&&t(9,a=R.enableDamping),"enabled"in R&&t(10,l=R.enabled),"enablePan"in R&&t(11,c=R.enablePan),"enableRotate"in R&&t(12,u=R.enableRotate),"enableZoom"in R&&t(13,f=R.enableZoom),"keyPanSpeed"in R&&t(14,h=R.keyPanSpeed),"keys"in R&&t(15,p=R.keys),"maxAzimuthAngle"in R&&t(16,g=R.maxAzimuthAngle),"maxDistance"in R&&t(17,d=R.maxDistance),"maxPolarAngle"in R&&t(18,m=R.maxPolarAngle),"maxZoom"in R&&t(19,_=R.maxZoom),"minAzimuthAngle"in R&&t(20,b=R.minAzimuthAngle),"minDistance"in R&&t(21,v=R.minDistance),"minPolarAngle"in R&&t(22,w=R.minPolarAngle),"minZoom"in R&&t(23,M=R.minZoom),"mouseButtons"in R&&t(24,C=R.mouseButtons),"panSpeed"in R&&t(25,I=R.panSpeed),"rotateSpeed"in R&&t(26,x=R.rotateSpeed),"screenSpacePanning"in R&&t(27,A=R.screenSpacePanning),"touches"in R&&t(28,P=R.touches),"zoomSpeed"in R&&t(29,B=R.zoomSpeed),"target"in R&&t(1,ie=R.target),"dispose"in R&&t(2,z=R.dispose)},r.$$.update=()=>{r.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,L.autoRotate=i,L),s!==void 0&&t(0,L.autoRotateSpeed=s,L),o!==void 0&&t(0,L.dampingFactor=o,L),a!==void 0&&t(0,L.enableDamping=a,L),l!==void 0&&t(0,L.enabled=l,L),c!==void 0&&t(0,L.enablePan=c,L),u!==void 0&&t(0,L.enableRotate=u,L),f!==void 0&&t(0,L.enableZoom=f,L),h!==void 0&&t(0,L.keyPanSpeed=h,L),p!==void 0&&t(0,L.keys=p,L),g!==void 0&&t(0,L.maxAzimuthAngle=g,L),d!==void 0&&t(0,L.maxDistance=d,L),m!==void 0&&t(0,L.maxPolarAngle=m,L),_!==void 0&&t(0,L.maxZoom=_,L),b!==void 0&&t(0,L.minAzimuthAngle=b,L),v!==void 0&&t(0,L.minDistance=v,L),w!==void 0&&t(0,L.minPolarAngle=w,L),M!==void 0&&t(0,L.minZoom=M,L),C!==void 0&&t(0,L.mouseButtons=C,L),I!==void 0&&t(0,L.panSpeed=I,L),x!==void 0&&t(0,L.rotateSpeed=x,L),A!==void 0&&t(0,L.screenSpacePanning=A,L),P!==void 0&&t(0,L.touches=P,L),B!==void 0&&t(0,L.zoomSpeed=B,L),L.update(),Y("OrbitControls: props changed")),r.$$.dirty[0]&576&&(i||a?V():K())},[L,ie,z,F,ee,oe,i,s,o,a,l,c,u,f,h,p,g,d,m,_,b,v,w,M,C,I,x,A,P,B]}class Dg extends et{constructor(e){super(),Qe(this,e,Pg,Lg,Je,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}function Rg(r,e,t){let{object:n}=e,i=n,{interactive:s=!1}=e,{ignorePointer:o=!1}=e;const a=Vr(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:f}=rc(),{invalidate:h}=Fn(),p=d=>{f(d),c(d),delete Wt(d).eventDispatcher},g=(d,m,_)=>{Wt(d).eventDispatcher=a,m?(f(d),c(d)):(u(d),_?l(d):c(d))};return $e(()=>{p(n),h("InteractiveObject: object removed")}),r.$$set=d=>{"object"in d&&t(0,n=d.object),"interactive"in d&&t(1,s=d.interactive),"ignorePointer"in d&&t(2,o=d.ignorePointer)},r.$$.update=()=>{r.$$.dirty&15&&(n!==i?(p(i),g(n,o,s),h("InteractiveObject: object changed"),t(3,i=n)):n===i&&(g(n,o,s),h("InteractiveObject: props changed")))},[n,s,o,i]}class ac extends et{constructor(e){super(),Qe(this,e,Rg,null,Je,{object:0,interactive:1,ignorePointer:2})}}const oc=new ot;oc.scale.set(0,0,0);oc.matrix;new at().fromArray(new Array(16).fill(0));new Xe(16777215);const lc=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},Is=Symbol("initialValueBeforeAttach"),Ig=()=>{const{invalidate:r}=Fn();let e=!1,t=Is,n,i,s;const o=(l,c,u)=>{if(a(),!u){const f=l;((f==null?void 0:f.isMaterial)||!1)&&(u="material"),((f==null?void 0:f.isBufferGeometry)||(f==null?void 0:f.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(c,l);else{const{target:f,key:h}=lc(c,u);t=f[h],f[h]=l,i=f,s=h}e=!0,r()}},a=()=>{e&&(n?(n(),n=void 0):i&&s&&t!==Is&&(i[s]=t,t=Is,i=void 0,s=void 0),e=!1,r())};return $e(()=>{a()}),{update:o}},Fg=r=>r&&r.isCamera,cc=r=>r&&r.isOrthographicCamera,uc=r=>r&&r.isPerspectiveCamera,Og=r=>uc(r)||cc(r),Ng=()=>{const{invalidate:r,size:e}=Fn(),{setCamera:t}=rc();let n,i;$e(()=>{i==null||i()});const s=l=>{n&&(cc(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):uc(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(l,c)=>{if(i==null||i(),c||!Og(l)){n=void 0;return}n=l,i=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!Fg(l)||!c||(t(l),r())}}},Jo=r=>!!(r!=null&&r.addEventListener),zg=()=>{const r=Vr(),e=Ri(),t=h=>{h!=null&&h.type&&r(h.type,h)},n=(h,p)=>{Jo(h)&&p.forEach(g=>{h.removeEventListener(g,t)})},i=(h,p)=>{Jo(h)&&p.forEach(g=>{h.addEventListener(g,t)})};let s=[],o;const a=nt([]),l=a.subscribe(h=>{n(o,s),i(o,h),s=h});$e(l);const c=nt(),u=c.subscribe(h=>{n(o,s),i(h,s),o=h});return $e(u),$e(()=>{n(o,s)}),dl(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:h=>{c.set(h)}}},Ug=["$$scope","$$slots","type","args","attach","instance"],kg=["fov","aspect","near","far","left","right","top","bottom","zoom"],Bg=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,Gg=()=>{const{invalidate:r}=Fn(),e=new Map,t=(i,s,o,a)=>{var u,f;if(Bg(o)){const h=e.get(s);if(h&&h.instance===i&&h.value===o)return;e.set(s,{instance:i,value:o})}const{key:l,target:c}=lc(i,s);if(!Array.isArray(o)&&typeof o=="number"&&typeof((u=c[l])==null?void 0:u.setScalar)=="function")c[l].setScalar(o);else if(typeof((f=c[l])==null?void 0:f.set)=="function")Array.isArray(o)?c[l].set(...o):c[l].set(o);else{if(c[l]=o,a.manualCamera)return;kg.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(i,s,o)=>{for(const a in s)Ug.includes(a)||t(i,a,s[a],o),r()}}},Vg=r=>({ref:r&1}),Qo=r=>({ref:r[0]}),Hg=r=>({ref:r&1}),el=r=>({ref:r[0]});function tl(r){let e,t;return e=new sc({props:{object:r[0],dispose:r[1]}}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function Wg(r){let e;const t=r[12].default,n=Pn(t,r,r[13],Qo);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&Rn(n,t,i,i[13],e?Dn(t,i[13],s,Vg):In(i[13]),Qo)},i(i){e||(J(n,i),e=!0)},o(i){re(n,i),e=!1},d(i){n&&n.d(i)}}}function jg(r){let e,t;return e=new nc({props:{object:r[0],$$slots:{default:[qg]},$$scope:{ctx:r}}}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&8193&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function qg(r){let e;const t=r[12].default,n=Pn(t,r,r[13],el);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&Rn(n,t,i,i[13],e?Dn(t,i[13],s,Hg):In(i[13]),el)},i(i){e||(J(n,i),e=!0)},o(i){re(n,i),e=!1},d(i){n&&n.d(i)}}}function Xg(r){let e=r[4](r[0]),t,n,i,s,o,a,l=e&&tl(r);const c=[jg,Wg],u=[];function f(h,p){return p&1&&(n=null),n==null&&(n=!!h[3](h[0])),n?0:1}return i=f(r,-1),s=u[i]=c[i](r),{c(){l&&l.c(),t=Ce(),s.c(),o=Ys()},m(h,p){l&&l.m(h,p),Se(h,t,p),u[i].m(h,p),Se(h,o,p),a=!0},p(h,[p]){p&1&&(e=h[4](h[0])),e?l?(l.p(h,p),p&1&&J(l,1)):(l=tl(h),l.c(),J(l,1),l.m(t.parentNode,t)):l&&(Jn(),re(l,1,1,()=>{l=null}),Qn());let g=i;i=f(h,p),i===g?u[i].p(h,p):(Jn(),re(u[g],1,1,()=>{u[g]=null}),Qn(),s=u[i],s?s.p(h,p):(s=u[i]=c[i](h),s.c()),J(s,1),s.m(o.parentNode,o))},i(h){a||(J(l),J(s),a=!0)},o(h){re(l),re(s),a=!1},d(h){l&&l.d(h),h&&be(t),u[i].d(h),h&&be(o)}}}function $g(r,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let i=ma(e,n),s,{$$slots:o={},$$scope:a}=e,{type:l}=e,{args:c=void 0}=e,{attach:u=void 0}=e,{manual:f=void 0}=e,{makeDefault:h=void 0}=e,{dispose:p=void 0}=e;const g=xn("threlte-hierarchical-parent-context");xt(r,g,P=>t(11,s=P));const d=P=>typeof P=="function"&&/^\s*class\s+/.test(P.toString()),m=P=>Array.isArray(P);let{ref:_=d(l)&&m(c)?new l(...c):d(l)?new l:l}=e,b=!1;const v=nt(_);Kt("threlte-hierarchical-parent-context",v);const w=Gg(),M=Ng(),C=Ig(),I=zg(),x=P=>!!P.isObject3D,A=P=>P.dispose!==void 0;return r.$$set=P=>{e=Fs(Fs({},e),_c(P)),t(21,i=ma(e,n)),"type"in P&&t(5,l=P.type),"args"in P&&t(6,c=P.args),"attach"in P&&t(7,u=P.attach),"manual"in P&&t(8,f=P.manual),"makeDefault"in P&&t(9,h=P.makeDefault),"dispose"in P&&t(1,p=P.dispose),"ref"in P&&t(0,_=P.ref),"$$scope"in P&&t(13,a=P.$$scope)},r.$$.update=()=>{r.$$.dirty&1120&&(b?t(0,_=d(l)&&m(c)?new l(...c):d(l)?new l:l):t(10,b=!0)),r.$$.dirty&1&&v.set(_),w.updateProps(_,i,{manualCamera:f}),r.$$.dirty&257&&M.update(_,f),r.$$.dirty&513&&M.makeDefaultCamera(_,h),r.$$.dirty&2177&&C.update(_,s,u),r.$$.dirty&1&&I.updateRef(_)},[_,p,g,x,A,l,c,u,f,h,b,s,o,a]}class Ie extends et{constructor(e){super(),Qe(this,e,$g,Xg,Je,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function Yg(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class nl extends et{constructor(e){super(),Qe(this,e,Yg,null,Je,{})}}new Proxy(nl,{get(r,e){return r[e]||nl}});Ag(No,()=>new No($l));function Zg(r){let e,t;return e=new ic({props:{$$slots:{default:[Jg]},$$scope:{ctx:r}}}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function Kg(r){let e;const t=r[1].default,n=Pn(t,r,r[2],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&4)&&Rn(n,t,i,i[2],e?Dn(t,i[2],s,null):In(i[2]),null)},i(i){e||(J(n,i),e=!0)},o(i){re(n,i),e=!1},d(i){n&&n.d(i)}}}function Jg(r){let e;const t=r[1].default,n=Pn(t,r,r[2],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&4)&&Rn(n,t,i,i[2],e?Dn(t,i[2],s,null):In(i[2]),null)},i(i){e||(J(n,i),e=!0)},o(i){re(n,i),e=!1},d(i){n&&n.d(i)}}}function Qg(r){let e,t,n,i,s,o;const a=[Kg,Zg],l=[];function c(u,f){return u[0]?0:1}return t=c(r),n=l[t]=a[t](r),{c(){e=ft("div"),n.c(),Ve(e,"class","svelte-1jet5xk")},m(u,f){Se(u,e,f),l[t].m(e,null),o=!0},p(u,[f]){let h=t;t=c(u),t===h?l[t].p(u,f):(Jn(),re(l[h],1,1,()=>{l[h]=null}),Qn(),n=l[t],n?n.p(u,f):(n=l[t]=a[t](u),n.c()),J(n,1),n.m(e,null))},i(u){o||(J(n),vn(()=>{s&&s.end(1),i=Dc(e,Gr,{duration:500,delay:500}),i.start()}),o=!0)},o(u){re(n),i&&i.invalidate(),s=Rc(e,Gr,{duration:500}),o=!1},d(u){u&&be(e),l[t].d(),u&&s&&s.end()}}}function e_(r,e,t){let{$$slots:n={},$$scope:i}=e,{toggle:s=!1}=e;return r.$$set=o=>{"toggle"in o&&t(0,s=o.toggle),"$$scope"in o&&t(2,i=o.$$scope)},[s,n,i]}class Oi extends et{constructor(e){super(),Qe(this,e,e_,Qg,Je,{toggle:0})}}function il(r,e,t){const n=r.slice();return n[6]=e[t],n[8]=t,n}function rl(r){let e,t,n,i,s,o=r[8]+1+"",a,l,c,u;function f(){return r[5](r[8])}return{c(){e=ft("input"),n=Ce(),i=ft("label"),s=Kn("Scene "),a=Kn(o),l=Ce(),Ve(e,"type","radio"),Ve(e,"id","experiment-"+r[8]),e.__value=t=r[6],e.value=e.__value,Ve(e,"class","svelte-1oyf4q4"),r[4][0].push(e),Ve(i,"for","experiment-"+r[8]),Ve(i,"class","button svelte-1oyf4q4")},m(h,p){Se(h,e,p),e.checked=e.__value===r[1],Se(h,n,p),Se(h,i,p),bt(i,s),bt(i,a),bt(i,l),c||(u=[wt(e,"change",r[3]),wt(e,"change",f)],c=!0)},p(h,p){r=h,p&1&&t!==(t=r[6])&&(e.__value=t,e.value=e.__value),p&2&&(e.checked=e.__value===r[1])},d(h){h&&be(e),r[4][0].splice(r[4][0].indexOf(e),1),h&&be(n),h&&be(i),c=!1,Xt(u)}}}function t_(r){let e,t,n;var i=r[1];function s(o){return{}}return i&&(e=ga(i,s())),{c(){e&&me(e.$$.fragment),t=Ys()},m(o,a){e&&he(e,o,a),Se(o,t,a),n=!0},p(o,a){if(i!==(i=o[1])){if(e){Jn();const l=e;re(l.$$.fragment,1,0,()=>{de(l,1)}),Qn()}i?(e=ga(i,s()),me(e.$$.fragment),J(e.$$.fragment,1),he(e,t.parentNode,t)):e=null}},i(o){n||(e&&J(e.$$.fragment,o),n=!0)},o(o){e&&re(e.$$.fragment,o),n=!1},d(o){o&&be(t),e&&de(e,o)}}}function n_(r){let e,t,n,i,s=r[0],o=[];for(let a=0;a<s.length;a+=1)o[a]=rl(il(r,s,a));return n=new ic({props:{$$slots:{default:[t_]},$$scope:{ctx:r}}}),{c(){e=ft("form");for(let a=0;a<o.length;a+=1)o[a].c();t=Ce(),me(n.$$.fragment),Ve(e,"action",""),Ve(e,"class","svelte-1oyf4q4")},m(a,l){Se(a,e,l);for(let c=0;c<o.length;c+=1)o[c].m(e,null);Se(a,t,l),he(n,a,l),i=!0},p(a,[l]){if(l&7){s=a[0];let u;for(u=0;u<s.length;u+=1){const f=il(a,s,u);o[u]?o[u].p(f,l):(o[u]=rl(f),o[u].c(),o[u].m(e,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=s.length}const c={};l&514&&(c.$$scope={dirty:l,ctx:a}),n.$set(c)},i(a){i||(J(n.$$.fragment,a),i=!0)},o(a){re(n.$$.fragment,a),i=!1},d(a){a&&be(e),yc(o,a),a&&be(t),de(n,a)}}}function i_(r,e,t){let n;xt(r,$n,c=>t(2,n=c));let{components:i=[]}=e;n<1&&sn($n,n=1,n);let s=i[n-1];const o=[[]];function a(){s=this.__value,t(1,s)}const l=c=>sn($n,n=c+1,n);return r.$$set=c=>{"components"in c&&t(0,i=c.components)},[i,s,n,a,o,l]}class r_ extends et{constructor(e){super(),Qe(this,e,i_,n_,Je,{components:0})}}function sl(r){return Object.prototype.toString.call(r)==="[object Date]"}function qs(r,e,t,n){if(typeof t=="number"||sl(t)){const i=n-t,s=(t-e)/(r.dt||1/60),o=r.opts.stiffness*i,a=r.opts.damping*s,l=(o-a)*r.inv_mass,c=(s+l)*r.dt;return Math.abs(c)<r.opts.precision&&Math.abs(i)<r.opts.precision?n:(r.settled=!1,sl(t)?new Date(t.getTime()+c):t+c)}else{if(Array.isArray(t))return t.map((i,s)=>qs(r,e[s],t[s],n[s]));if(typeof t=="object"){const i={};for(const s in t)i[s]=qs(r,e[s],t[s],n[s]);return i}else throw new Error(`Cannot spring ${typeof t} values`)}}function s_(r,e={}){const t=nt(r),{stiffness:n=.15,damping:i=.8,precision:s=.01}=e;let o,a,l,c=r,u=r,f=1,h=0,p=!1;function g(m,_={}){u=m;const b=l={};return r==null||_.hard||d.stiffness>=1&&d.damping>=1?(p=!0,o=Ai(),c=m,t.set(r=u),Promise.resolve()):(_.soft&&(h=1/((_.soft===!0?.5:+_.soft)*60),f=0),a||(o=Ai(),p=!1,a=rr(v=>{if(p)return p=!1,a=null,!1;f=Math.min(f+h,1);const w={inv_mass:f,opts:d,settled:!0,dt:(v-o)*60/1e3},M=qs(w,c,r,u);return o=v,c=r,t.set(r=M),w.settled&&(a=null),!w.settled})),new Promise(v=>{a.promise.then(()=>{b===l&&v()})}))}const d={set:g,update:(m,_)=>g(m(u,r),_),subscribe:t.subscribe,stiffness:n,damping:i,precision:s};return d}const a_=Math.PI/180;function fc(r){return r*a_}function o_(r){let e,t;return e=new Dg({props:{maxPolarAngle:fc(80),enableZoom:!1,target:{y:.5}}}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},p:Ye,i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function l_(r){let e,t,n,i,s,o;return e=new ac({props:{object:r[4],interactive:!0}}),e.$on("pointerenter",r[2]),e.$on("pointerleave",r[3]),n=new Ie({props:{type:cn}}),s=new Ie({props:{type:Fi,color:"#333333"}}),{c(){me(e.$$.fragment),t=Ce(),me(n.$$.fragment),i=Ce(),me(s.$$.fragment)},m(a,l){he(e,a,l),Se(a,t,l),he(n,a,l),Se(a,i,l),he(s,a,l),o=!0},p(a,l){const c={};l&16&&(c.object=a[4]),e.$set(c)},i(a){o||(J(e.$$.fragment,a),J(n.$$.fragment,a),J(s.$$.fragment,a),o=!0)},o(a){re(e.$$.fragment,a),re(n.$$.fragment,a),re(s.$$.fragment,a),o=!1},d(a){de(e,a),a&&be(t),de(n,a),a&&be(i),de(s,a)}}}function c_(r){let e,t;return e=new Ie({props:{type:Pt,"position.y":.5,castShadow:!0,$$slots:{default:[l_,({ref:n})=>({4:n}),({ref:n})=>n?16:0]},$$scope:{ctx:r}}}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},p(n,i){const s={};i&49&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function u_(r){let e,t,n,i;return e=new Ie({props:{type:la,args:[3,72]}}),n=new Ie({props:{type:Fi,color:"white"}}),{c(){me(e.$$.fragment),t=Ce(),me(n.$$.fragment)},m(s,o){he(e,s,o),Se(s,t,o),he(n,s,o),i=!0},p:Ye,i(s){i||(J(e.$$.fragment,s),J(n.$$.fragment,s),i=!0)},o(s){re(e.$$.fragment,s),re(n.$$.fragment,s),i=!1},d(s){de(e,s),s&&be(t),de(n,s)}}}function f_(r){let e,t,n,i,s,o,a,l,c,u,f,h;return e=new Ie({props:{type:yt,makeDefault:!0,position:[10,10,10],fov:24,$$slots:{default:[o_]},$$scope:{ctx:r}}}),n=new Ie({props:{type:ln,castShadow:!0,position:[3,10,10]}}),s=new Ie({props:{type:ln,position:[-3,10,-10],intensity:.2}}),a=new Ie({props:{type:cr,intensity:.2}}),c=new Ie({props:{type:$i,scale:r[0],$$slots:{default:[c_]},$$scope:{ctx:r}}}),f=new Ie({props:{type:Pt,receiveShadow:!0,"rotation.x":fc(-90),$$slots:{default:[u_]},$$scope:{ctx:r}}}),{c(){me(e.$$.fragment),t=Ce(),me(n.$$.fragment),i=Ce(),me(s.$$.fragment),o=Ce(),me(a.$$.fragment),l=Ce(),me(c.$$.fragment),u=Ce(),me(f.$$.fragment)},m(p,g){he(e,p,g),Se(p,t,g),he(n,p,g),Se(p,i,g),he(s,p,g),Se(p,o,g),he(a,p,g),Se(p,l,g),he(c,p,g),Se(p,u,g),he(f,p,g),h=!0},p(p,[g]){const d={};g&32&&(d.$$scope={dirty:g,ctx:p}),e.$set(d);const m={};g&1&&(m.scale=p[0]),g&33&&(m.$$scope={dirty:g,ctx:p}),c.$set(m);const _={};g&32&&(_.$$scope={dirty:g,ctx:p}),f.$set(_)},i(p){h||(J(e.$$.fragment,p),J(n.$$.fragment,p),J(s.$$.fragment,p),J(a.$$.fragment,p),J(c.$$.fragment,p),J(f.$$.fragment,p),h=!0)},o(p){re(e.$$.fragment,p),re(n.$$.fragment,p),re(s.$$.fragment,p),re(a.$$.fragment,p),re(c.$$.fragment,p),re(f.$$.fragment,p),h=!1},d(p){de(e,p),p&&be(t),de(n,p),p&&be(i),de(s,p),p&&be(o),de(a,p),p&&be(l),de(c,p),p&&be(u),de(f,p)}}}function h_(r,e,t){let n;const i=s_(1);return xt(r,i,a=>t(0,n=a)),[n,i,()=>sn(i,n=2,n),()=>sn(i,n=1,n)]}let d_=class extends et{constructor(e){super(),Qe(this,e,h_,f_,Je,{})}};function p_(r){let e,t,n,i;return e=new Ie({props:{type:cn,args:[1,1,1]}}),n=new Ie({props:{type:Fi,color:"#00ff00"}}),{c(){me(e.$$.fragment),t=Ce(),me(n.$$.fragment)},m(s,o){he(e,s,o),Se(s,t,o),he(n,s,o),i=!0},p:Ye,i(s){i||(J(e.$$.fragment,s),J(n.$$.fragment,s),i=!0)},o(s){re(e.$$.fragment,s),re(n.$$.fragment,s),i=!1},d(s){de(e,s),s&&be(t),de(n,s)}}}function m_(r){let e,t,n,i,s,o,a,l,c,u;return e=new Ie({props:{type:yt,makeDefault:!0,fov:75,near:.1,far:1e3,"position.z":5}}),n=new Ie({props:{type:ln,castShadow:!0,position:[3,10,10]}}),s=new Ie({props:{type:ln,position:[-3,10,-10],intensity:.2}}),a=new Ie({props:{type:cr,intensity:.2}}),c=new Ie({props:{type:Pt,rotation:[r[0],r[0],0],$$slots:{default:[p_]},$$scope:{ctx:r}}}),{c(){me(e.$$.fragment),t=Ce(),me(n.$$.fragment),i=Ce(),me(s.$$.fragment),o=Ce(),me(a.$$.fragment),l=Ce(),me(c.$$.fragment)},m(f,h){he(e,f,h),Se(f,t,h),he(n,f,h),Se(f,i,h),he(s,f,h),Se(f,o,h),he(a,f,h),Se(f,l,h),he(c,f,h),u=!0},p(f,[h]){const p={};h&1&&(p.rotation=[f[0],f[0],0]),h&4&&(p.$$scope={dirty:h,ctx:f}),c.$set(p)},i(f){u||(J(e.$$.fragment,f),J(n.$$.fragment,f),J(s.$$.fragment,f),J(a.$$.fragment,f),J(c.$$.fragment,f),u=!0)},o(f){re(e.$$.fragment,f),re(n.$$.fragment,f),re(s.$$.fragment,f),re(a.$$.fragment,f),re(c.$$.fragment,f),u=!1},d(f){de(e,f),f&&be(t),de(n,f),f&&be(i),de(s,f),f&&be(o),de(a,f),f&&be(l),de(c,f)}}}function g_(r,e,t){let n=0;function i(){t(0,n+=.01),requestAnimationFrame(i)}return i(),[n]}let __=class extends et{constructor(e){super(),Qe(this,e,g_,m_,Je,{})}};function x_(r){let e,t,n,i;return e=new Ie({props:{type:cn,args:[1,1,1]}}),n=new Ie({props:{type:Fi,color:"#00ff00"}}),{c(){me(e.$$.fragment),t=Ce(),me(n.$$.fragment)},m(s,o){he(e,s,o),Se(s,t,o),he(n,s,o),i=!0},p:Ye,i(s){i||(J(e.$$.fragment,s),J(n.$$.fragment,s),i=!0)},o(s){re(e.$$.fragment,s),re(n.$$.fragment,s),i=!1},d(s){de(e,s),s&&be(t),de(n,s)}}}function v_(r){let e,t,n,i,s,o,a,l,c,u,f,h,p;return t=new Ie({props:{type:yt,makeDefault:!0,fov:75,near:.1,far:1e3,"position.z":5}}),i=new Ie({props:{type:ln,castShadow:!0,position:[3,10,10]}}),o=new Ie({props:{type:ln,position:[-3,10,-10],intensity:.2}}),l=new Ie({props:{type:cr,intensity:.2}}),u=new Ie({props:{type:Pt,rotation:[r[0],r[1],0],$$slots:{default:[x_]},$$scope:{ctx:r}}}),{c(){e=Ce(),me(t.$$.fragment),n=Ce(),me(i.$$.fragment),s=Ce(),me(o.$$.fragment),a=Ce(),me(l.$$.fragment),c=Ce(),me(u.$$.fragment)},m(g,d){Se(g,e,d),he(t,g,d),Se(g,n,d),he(i,g,d),Se(g,s,d),he(o,g,d),Se(g,a,d),he(l,g,d),Se(g,c,d),he(u,g,d),f=!0,h||(p=wt(document.body,"keydown",r[2]),h=!0)},p(g,[d]){const m={};d&3&&(m.rotation=[g[0],g[1],0]),d&8&&(m.$$scope={dirty:d,ctx:g}),u.$set(m)},i(g){f||(J(t.$$.fragment,g),J(i.$$.fragment,g),J(o.$$.fragment,g),J(l.$$.fragment,g),J(u.$$.fragment,g),f=!0)},o(g){re(t.$$.fragment,g),re(i.$$.fragment,g),re(o.$$.fragment,g),re(l.$$.fragment,g),re(u.$$.fragment,g),f=!1},d(g){g&&be(e),de(t,g),g&&be(n),de(i,g),g&&be(s),de(o,g),g&&be(a),de(l,g),g&&be(c),de(u,g),h=!1,p()}}}function b_(r,e,t){let n=.5,i=.5;function s(o){o.key==="s"&&t(0,n+=.1),o.key==="w"&&t(0,n-=.1),o.key==="d"&&t(1,i+=.1),o.key==="a"&&t(1,i-=.1)}return[n,i,s]}class y_ extends et{constructor(e){super(),Qe(this,e,b_,v_,Je,{})}}function M_(r){let e,t,n,i;return e=new Ie({props:{type:cn,args:[1,1,1]}}),n=new Ie({props:{type:Fi,color:"#ff0000"}}),{c(){me(e.$$.fragment),t=Ce(),me(n.$$.fragment)},m(s,o){he(e,s,o),Se(s,t,o),he(n,s,o),i=!0},p:Ye,i(s){i||(J(e.$$.fragment,s),J(n.$$.fragment,s),i=!0)},o(s){re(e.$$.fragment,s),re(n.$$.fragment,s),i=!1},d(s){de(e,s),s&&be(t),de(n,s)}}}function S_(r){let e,t,n,i,s,o,a,l,c,u,f,h,p;return t=new Ie({props:{type:yt,makeDefault:!0,fov:75,near:.1,far:1e3,"position.z":5}}),i=new Ie({props:{type:ln,castShadow:!0,position:[3,10,10]}}),o=new Ie({props:{type:ln,position:[-3,10,-10],intensity:.2}}),l=new Ie({props:{type:cr,intensity:.2}}),u=new Ie({props:{type:Pt,rotation:[r[0],r[1],0],$$slots:{default:[M_]},$$scope:{ctx:r}}}),{c(){e=Ce(),me(t.$$.fragment),n=Ce(),me(i.$$.fragment),s=Ce(),me(o.$$.fragment),a=Ce(),me(l.$$.fragment),c=Ce(),me(u.$$.fragment)},m(g,d){Se(g,e,d),he(t,g,d),Se(g,n,d),he(i,g,d),Se(g,s,d),he(o,g,d),Se(g,a,d),he(l,g,d),Se(g,c,d),he(u,g,d),f=!0,h||(p=[wt(document.body,"keydown",r[2]),wt(document.body,"keyup",r[3])],h=!0)},p(g,[d]){const m={};d&3&&(m.rotation=[g[0],g[1],0]),d&128&&(m.$$scope={dirty:d,ctx:g}),u.$set(m)},i(g){f||(J(t.$$.fragment,g),J(i.$$.fragment,g),J(o.$$.fragment,g),J(l.$$.fragment,g),J(u.$$.fragment,g),f=!0)},o(g){re(t.$$.fragment,g),re(i.$$.fragment,g),re(o.$$.fragment,g),re(l.$$.fragment,g),re(u.$$.fragment,g),f=!1},d(g){g&&be(e),de(t,g),g&&be(n),de(i,g),g&&be(s),de(o,g),g&&be(a),de(l,g),g&&be(c),de(u,g),h=!1,Xt(p)}}}function w_(r,e,t){let n=.5,i=.5,s=0,o=[];function a(u){o.includes("s")&&t(0,n+=3*u),o.includes("w")&&t(0,n-=3*u),o.includes("d")&&t(1,i+=3*u),o.includes("a")&&t(1,i-=3*u)}function l(u){const f=u.key;["s","w","d","a"].includes(f)&&!o.includes(f)&&(o=[...o,f])}function c(u){const f=u.key;["s","w","d","a"].includes(f)&&o.includes(f)&&(o=o.filter(h=>h!==f))}return Xr(u=>{let f=u.clock.elapsedTime-s;s=u.clock.elapsedTime,a(f)}),[n,i,l,c]}class E_ extends et{constructor(e){super(),Qe(this,e,w_,S_,Je,{})}}const T_=(r="pointer",e="auto")=>{let t=!1;const n=nt(!1),i=()=>{n.set(!0)},s=()=>{n.set(!1)};if(typeof window>"u")return{hovering:n,onPointerEnter:i,onPointerLeave:s};let o=document.body;const a=Fn();a&&a.renderer&&(o=a.renderer.domElement);let l=typeof r=="string"?r:rn(r);if(typeof r!="string"){const f=r.subscribe(h=>{l=h,t&&(o.style.cursor=h)});$e(f)}let c=typeof e=="string"?e:rn(e);if(typeof e!="string"){const f=e.subscribe(h=>{c=h,t||(o.style.cursor=h)});$e(f)}const u=n.subscribe(f=>{t=f,f?o.style.cursor=l:o.style.cursor=c});return $e(u),$e(()=>{o.style.cursor=c}),{hovering:n,onPointerEnter:i,onPointerLeave:s}};new k;new k;new k;function A_(r){let e,t,n,i,s,o;return e=new ac({props:{object:r[11],interactive:!0}}),e.$on("click",r[5]),e.$on("pointerenter",r[3]),e.$on("pointerleave",r[4]),n=new Ie({props:{type:cn,args:[1,1,1]}}),s=new Ie({props:{type:Fi,color:r[0]}}),{c(){me(e.$$.fragment),t=Ce(),me(n.$$.fragment),i=Ce(),me(s.$$.fragment)},m(a,l){he(e,a,l),Se(a,t,l),he(n,a,l),Se(a,i,l),he(s,a,l),o=!0},p(a,l){const c={};l&2048&&(c.object=a[11]),e.$set(c);const u={};l&1&&(u.color=a[0]),s.$set(u)},i(a){o||(J(e.$$.fragment,a),J(n.$$.fragment,a),J(s.$$.fragment,a),o=!0)},o(a){re(e.$$.fragment,a),re(n.$$.fragment,a),re(s.$$.fragment,a),o=!1},d(a){de(e,a),a&&be(t),de(n,a),a&&be(i),de(s,a)}}}function C_(r){let e,t,n,i,s,o,a,l,c,u,f,h,p;return t=new Ie({props:{type:yt,makeDefault:!0,fov:75,near:.1,far:1e3,"position.z":5}}),i=new Ie({props:{type:ln,castShadow:!0,position:[3,10,10]}}),o=new Ie({props:{type:ln,position:[-3,10,-10],intensity:.2}}),l=new Ie({props:{type:cr,intensity:.2}}),u=new Ie({props:{type:Pt,rotation:[r[1],r[2],0],$$slots:{default:[A_,({ref:g})=>({11:g}),({ref:g})=>g?2048:0]},$$scope:{ctx:r}}}),{c(){e=Ce(),me(t.$$.fragment),n=Ce(),me(i.$$.fragment),s=Ce(),me(o.$$.fragment),a=Ce(),me(l.$$.fragment),c=Ce(),me(u.$$.fragment)},m(g,d){Se(g,e,d),he(t,g,d),Se(g,n,d),he(i,g,d),Se(g,s,d),he(o,g,d),Se(g,a,d),he(l,g,d),Se(g,c,d),he(u,g,d),f=!0,h||(p=[wt(document.body,"keydown",r[6]),wt(document.body,"keyup",r[7])],h=!0)},p(g,[d]){const m={};d&6&&(m.rotation=[g[1],g[2],0]),d&6145&&(m.$$scope={dirty:d,ctx:g}),u.$set(m)},i(g){f||(J(t.$$.fragment,g),J(i.$$.fragment,g),J(o.$$.fragment,g),J(l.$$.fragment,g),J(u.$$.fragment,g),f=!0)},o(g){re(t.$$.fragment,g),re(i.$$.fragment,g),re(o.$$.fragment,g),re(l.$$.fragment,g),re(u.$$.fragment,g),f=!1},d(g){g&&be(e),de(t,g),g&&be(n),de(i,g),g&&be(s),de(o,g),g&&be(a),de(l,g),g&&be(c),de(u,g),h=!1,Xt(p)}}}function L_(r,e,t){let n=0,i="#0000ff",s=.5,o=.5,a=[];const{onPointerEnter:l,onPointerLeave:c}=T_();function u(){const g=Math.trunc(Math.random()*360);t(0,i=`hsl(${g},100%,50%)`)}function f(g){a.includes("s")&&t(1,s+=3*g),a.includes("w")&&t(1,s-=3*g),a.includes("d")&&t(2,o+=3*g),a.includes("a")&&t(2,o-=3*g)}function h(g){const d=g.key;["s","w","d","a"].includes(d)&&!a.includes(d)&&(a=[...a,d])}function p(g){const d=g.key;["s","w","d","a"].includes(d)&&a.includes(d)&&(a=a.filter(m=>m!==d))}return Xr(g=>{let d=g.clock.elapsedTime-n;n=g.clock.elapsedTime,f(d)}),[i,s,o,l,c,u,h,p]}class P_ extends et{constructor(e){super(),Qe(this,e,L_,C_,Je,{})}}let D_=class extends et{constructor(e){super(),Qe(this,e,null,null,Je,{})}},R_=class extends et{constructor(e){super(),Qe(this,e,null,null,Je,{})}};class I_ extends et{constructor(e){super(),Qe(this,e,null,null,Je,{})}}function al(r){let e,t,n,i,s,o;const a=[k_,U_,z_,N_,O_,F_],l=[];function c(u,f){return u[0]==1?0:u[0]==2?1:u[0]==3?2:u[0]==4?3:u[0]==5?4:u[0]==6?5:-1}return~(t=c(r))&&(n=l[t]=a[t](r)),s=new Wc({}),{c(){e=ft("main"),n&&n.c(),i=Ce(),me(s.$$.fragment),Ve(e,"class","svelte-xvwiyu")},m(u,f){Se(u,e,f),~t&&l[t].m(e,null),Se(u,i,f),he(s,u,f),o=!0},p(u,f){let h=t;t=c(u),t===h?~t&&l[t].p(u,f):(n&&(Jn(),re(l[h],1,1,()=>{l[h]=null}),Qn()),~t?(n=l[t],n?n.p(u,f):(n=l[t]=a[t](u),n.c()),J(n,1),n.m(e,null)):n=null)},i(u){o||(J(n),J(s.$$.fragment,u),o=!0)},o(u){re(n),re(s.$$.fragment,u),o=!1},d(u){u&&be(e),~t&&l[t].d(),u&&be(i),de(s,u)}}}function F_(r){let e,t;return e=new Oi({props:{$$slots:{default:[B_]},$$scope:{ctx:r}}}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function O_(r){let e,t;return e=new Oi({props:{$$slots:{default:[G_]},$$scope:{ctx:r}}}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function N_(r){let e,t;return e=new Oi({props:{$$slots:{default:[V_]},$$scope:{ctx:r}}}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function z_(r){let e,t;return e=new Oi({props:{toggle:!0,$$slots:{default:[H_]},$$scope:{ctx:r}}}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function U_(r){let e,t;return e=new Oi({props:{$$slots:{default:[W_]},$$scope:{ctx:r}}}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function k_(r){let e,t;return e=new Oi({props:{$$slots:{default:[j_]},$$scope:{ctx:r}}}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function B_(r){let e,t;return e=new I_({}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function G_(r){let e,t;return e=new R_({}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function V_(r){let e,t;return e=new D_({}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function H_(r){let e,t;return e=new r_({props:{components:[y_,E_,P_]}}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},p:Ye,i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function W_(r){let e,t;return e=new __({}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function j_(r){let e,t;return e=new d_({}),{c(){me(e.$$.fragment)},m(n,i){he(e,n,i),t=!0},i(n){t||(J(e.$$.fragment,n),t=!0)},o(n){re(e.$$.fragment,n),t=!1},d(n){de(e,n)}}}function q_(r){let e,t,n,i;e=new Gc({});let s=r[0]&&al(r);return{c(){me(e.$$.fragment),t=Ce(),s&&s.c(),n=Ys()},m(o,a){he(e,o,a),Se(o,t,a),s&&s.m(o,a),Se(o,n,a),i=!0},p(o,[a]){o[0]?s?(s.p(o,a),a&1&&J(s,1)):(s=al(o),s.c(),J(s,1),s.m(n.parentNode,n)):s&&(Jn(),re(s,1,1,()=>{s=null}),Qn())},i(o){i||(J(e.$$.fragment,o),J(s),i=!0)},o(o){re(e.$$.fragment,o),re(s),i=!1},d(o){de(e,o),o&&be(t),s&&s.d(o),o&&be(n)}}}function X_(r,e,t){let n,i;xt(r,$n,o=>t(1,n=o)),xt(r,wi,o=>t(0,i=o)),$n.subscribe(()=>{s()}),wi.subscribe(o=>{s()});function s(){let o="?",a=[];i!==0&&a.push(`week=${+i}`),n!==0&&a.push(`scene=${+n}`),window.history.replaceState(null,null,o+a.join("&"))}return[i]}class $_ extends et{constructor(e){super(),Qe(this,e,X_,q_,Je,{})}}new $_({target:document.getElementById("app")});

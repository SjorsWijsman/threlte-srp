(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function $e(){}const nr=r=>r;function Is(r,e){for(const t in e)r[t]=e[t];return r}function ol(r){return r()}function da(){return Object.create(null)}function Qt(r){r.forEach(ol)}function Ln(r){return typeof r=="function"}function Je(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let cr;function pa(r,e){return cr||(cr=document.createElement("a")),cr.href=e,r===cr.href}function mc(r){return Object.keys(r).length===0}function qs(r,...e){if(r==null)return $e;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function wn(r){let e;return qs(r,t=>e=t)(),e}function xt(r,e,t){r.$$.on_destroy.push(qs(e,t))}function Pn(r,e,t,n){if(r){const i=ll(r,e,t,n);return r[0](i)}}function ll(r,e,t,n){return r[1]&&n?Is(t.ctx.slice(),r[1](n(e))):t.ctx}function Dn(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function Rn(r,e,t,n,i,s){if(i){const o=ll(e,t,n,s);r.p(o,i)}}function In(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function gc(r){const e={};for(const t in r)t[0]!=="$"&&(e[t]=r[t]);return e}function ma(r,e){const t={};e=new Set(e);for(const n in r)!e.has(n)&&n[0]!=="$"&&(t[n]=r[n]);return t}function rn(r,e,t){return r.set(t),e}function _c(r){return r&&Ln(r.destroy)?r.destroy:$e}const cl=typeof window<"u";let Ai=cl?()=>window.performance.now():()=>Date.now(),Xs=cl?r=>requestAnimationFrame(r):$e;const Si=new Set;function ul(r){Si.forEach(e=>{e.c(r)||(Si.delete(e),e.f())}),Si.size!==0&&Xs(ul)}function ir(r){let e;return Si.size===0&&Xs(ul),{promise:new Promise(t=>{Si.add(e={c:r,f:t})}),abort(){Si.delete(e)}}}function bt(r,e){r.appendChild(e)}function fl(r){if(!r)return document;const e=r.getRootNode?r.getRootNode():r.ownerDocument;return e&&e.host?e:r.ownerDocument}function xc(r){const e=ft("style");return vc(fl(r),e),e.sheet}function vc(r,e){return bt(r.head||r,e),e.sheet}function we(r,e,t){r.insertBefore(e,t||null)}function Se(r){r.parentNode&&r.parentNode.removeChild(r)}function bc(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function ft(r){return document.createElement(r)}function Zn(r){return document.createTextNode(r)}function Ie(){return Zn(" ")}function $s(){return Zn("")}function Pt(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function Ge(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function yc(r){return Array.from(r.childNodes)}function Mc(r,e){e=""+e,r.wholeText!==e&&(r.data=e)}function Nr(r,e,t){r.classList[t?"add":"remove"](e)}function hl(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}function ga(r,e){return new r(e)}const zr=new Map;let Ur=0;function Sc(r){let e=5381,t=r.length;for(;t--;)e=(e<<5)-e^r.charCodeAt(t);return e>>>0}function wc(r,e){const t={stylesheet:xc(e),rules:{}};return zr.set(r,t),t}function Yi(r,e,t,n,i,s,o,a=0){const l=16.666/n;let c=`{
`;for(let m=0;m<=1;m+=l){const _=e+(t-e)*s(m);c+=m*100+`%{${o(_,1-_)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,f=`__svelte_${Sc(u)}_${a}`,h=fl(r),{stylesheet:d,rules:g}=zr.get(h)||wc(h,r);g[f]||(g[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const p=r.style.animation||"";return r.style.animation=`${p?`${p}, `:""}${f} ${n}ms linear ${i}ms 1 both`,Ur+=1,f}function Zi(r,e){const t=(r.style.animation||"").split(", "),n=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-n.length;i&&(r.style.animation=n.join(", "),Ur-=i,Ur||Ec())}function Ec(){Xs(()=>{Ur||(zr.forEach(r=>{const{ownerNode:e}=r.stylesheet;e&&Se(e)}),zr.clear())})}function Tc(r,e,t,n){if(!e)return $e;const i=r.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return $e;const{delay:s=0,duration:o=300,easing:a=nr,start:l=Ai()+s,end:c=l+o,tick:u=$e,css:f}=t(r,{from:e,to:i},n);let h=!0,d=!1,g;function p(){f&&(g=Yi(r,0,1,o,s,a,f)),s||(d=!0)}function m(){f&&Zi(r,g),h=!1}return ir(_=>{if(!d&&_>=l&&(d=!0),d&&_>=c&&(u(1,0),m()),!h)return!1;if(d){const b=_-l,v=0+1*a(b/o);u(v,1-v)}return!0}),p(),u(0,1),m}function Ac(r){const e=getComputedStyle(r);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:n}=e,i=r.getBoundingClientRect();r.style.position="absolute",r.style.width=t,r.style.height=n,Cc(r,i)}}function Cc(r,e){const t=r.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const n=getComputedStyle(r),i=n.transform==="none"?"":n.transform;r.style.transform=`${i} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}let Ki;function $i(r){Ki=r}function Ri(){if(!Ki)throw new Error("Function called outside component initialization");return Ki}function dl(r){Ri().$$.on_mount.push(r)}function Ke(r){Ri().$$.on_destroy.push(r)}function Gr(){const r=Ri();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=hl(e,t,{cancelable:n});return i.slice().forEach(o=>{o.call(r,s)}),!s.defaultPrevented}return!0}}function Zt(r,e){return Ri().$$.context.set(r,e),e}function mn(r){return Ri().$$.context.get(r)}const Wi=[],Fs=[],Rr=[],_a=[],pl=Promise.resolve();let Os=!1;function ml(){Os||(Os=!0,pl.then(gl))}function Ys(){return ml(),pl}function gn(r){Rr.push(r)}const Kr=new Set;let ur=0;function gl(){const r=Ki;do{for(;ur<Wi.length;){const e=Wi[ur];ur++,$i(e),Lc(e.$$)}for($i(null),Wi.length=0,ur=0;Fs.length;)Fs.pop()();for(let e=0;e<Rr.length;e+=1){const t=Rr[e];Kr.has(t)||(Kr.add(t),t())}Rr.length=0}while(Wi.length);for(;_a.length;)_a.pop()();Os=!1,Kr.clear(),$i(r)}function Lc(r){if(r.fragment!==null){r.update(),Qt(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(gn)}}let Ni;function Zs(){return Ni||(Ni=Promise.resolve(),Ni.then(()=>{Ni=null})),Ni}function qn(r,e,t){r.dispatchEvent(hl(`${e?"intro":"outro"}${t}`))}const Ir=new Set;let nn;function Kn(){nn={r:0,c:[],p:nn}}function Jn(){nn.r||Qt(nn.c),nn=nn.p}function ie(r,e){r&&r.i&&(Ir.delete(r),r.i(e))}function se(r,e,t,n){if(r&&r.o){if(Ir.has(r))return;Ir.add(r),nn.c.push(()=>{Ir.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}const Ks={duration:0};function Pc(r,e,t){const n={direction:"in"};let i=e(r,t,n),s=!1,o,a,l=0;function c(){o&&Zi(r,o)}function u(){const{delay:h=0,duration:d=300,easing:g=nr,tick:p=$e,css:m}=i||Ks;m&&(o=Yi(r,0,1,d,h,g,m,l++)),p(0,1);const _=Ai()+h,b=_+d;a&&a.abort(),s=!0,gn(()=>qn(r,!0,"start")),a=ir(v=>{if(s){if(v>=b)return p(1,0),qn(r,!0,"end"),c(),s=!1;if(v>=_){const w=g((v-_)/d);p(w,1-w)}}return s})}let f=!1;return{start(){f||(f=!0,Zi(r),Ln(i)?(i=i(n),Zs().then(u)):u())},invalidate(){f=!1},end(){s&&(c(),s=!1)}}}function Dc(r,e,t){const n={direction:"out"};let i=e(r,t,n),s=!0,o;const a=nn;a.r+=1;function l(){const{delay:c=0,duration:u=300,easing:f=nr,tick:h=$e,css:d}=i||Ks;d&&(o=Yi(r,1,0,u,c,f,d));const g=Ai()+c,p=g+u;gn(()=>qn(r,!1,"start")),ir(m=>{if(s){if(m>=p)return h(0,1),qn(r,!1,"end"),--a.r||Qt(a.c),!1;if(m>=g){const _=f((m-g)/u);h(1-_,_)}}return s})}return Ln(i)?Zs().then(()=>{i=i(n),l()}):l(),{end(c){c&&i.tick&&i.tick(1,0),s&&(o&&Zi(r,o),s=!1)}}}function fr(r,e,t,n){const i={direction:"both"};let s=e(r,t,i),o=n?0:1,a=null,l=null,c=null;function u(){c&&Zi(r,c)}function f(d,g){const p=d.b-o;return g*=Math.abs(p),{a:o,b:d.b,d:p,duration:g,start:d.start,end:d.start+g,group:d.group}}function h(d){const{delay:g=0,duration:p=300,easing:m=nr,tick:_=$e,css:b}=s||Ks,v={start:Ai()+g,b:d};d||(v.group=nn,nn.r+=1),a||l?l=v:(b&&(u(),c=Yi(r,o,d,p,g,m,b)),d&&_(0,1),a=f(v,p),gn(()=>qn(r,d,"start")),ir(w=>{if(l&&w>l.start&&(a=f(l,p),l=null,qn(r,a.b,"start"),b&&(u(),c=Yi(r,o,a.b,a.duration,0,m,s.css))),a){if(w>=a.end)_(o=a.b,1-o),qn(r,a.b,"end"),l||(a.b?u():--a.group.r||Qt(a.group.c)),a=null;else if(w>=a.start){const M=w-a.start;o=a.a+a.d*m(M/a.duration),_(o,1-o)}}return!!(a||l)}))}return{run(d){Ln(s)?Zs().then(()=>{s=s(i),h(d)}):h(d)},end(){u(),a=l=null}}}function Rc(r,e){r.d(1),e.delete(r.key)}function Ic(r,e){r.f(),Rc(r,e)}function Fc(r,e,t,n,i,s,o,a,l,c,u,f){let h=r.length,d=s.length,g=h;const p={};for(;g--;)p[r[g].key]=g;const m=[],_=new Map,b=new Map;for(g=d;g--;){const C=f(i,s,g),I=t(C);let x=o.get(I);x?n&&x.p(C,e):(x=c(I,C),x.c()),_.set(I,m[g]=x),I in p&&b.set(I,Math.abs(g-p[I]))}const v=new Set,w=new Set;function M(C){ie(C,1),C.m(a,u),o.set(C.key,C),u=C.first,d--}for(;h&&d;){const C=m[d-1],I=r[h-1],x=C.key,A=I.key;C===I?(u=C.first,h--,d--):_.has(A)?!o.has(x)||v.has(x)?M(C):w.has(A)?h--:b.get(x)>b.get(A)?(w.add(x),M(C)):(v.add(A),h--):(l(I,o),h--)}for(;h--;){const C=r[h];_.has(C.key)||l(C,o)}for(;d;)M(m[d-1]);return m}function xe(r){r&&r.c()}function ge(r,e,t,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(e,t),n||gn(()=>{const o=r.$$.on_mount.map(ol).filter(Ln);r.$$.on_destroy?r.$$.on_destroy.push(...o):Qt(o),r.$$.on_mount=[]}),s.forEach(gn)}function _e(r,e){const t=r.$$;t.fragment!==null&&(Qt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Oc(r,e){r.$$.dirty[0]===-1&&(Wi.push(r),ml(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function Qe(r,e,t,n,i,s,o,a=[-1]){const l=Ki;$i(r);const c=r.$$={fragment:null,ctx:[],props:s,update:$e,not_equal:i,bound:da(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:da(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(f,h,...d)=>{const g=d.length?d[0]:h;return c.ctx&&i(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&Oc(r,f)),h}):[],c.update(),u=!0,Qt(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=yc(e.target);c.fragment&&c.fragment.l(f),f.forEach(Se)}else c.fragment&&c.fragment.c();e.intro&&ie(r.$$.fragment),ge(r,e.target,e.anchor,e.customElement),gl()}$i(l)}class et{$destroy(){_e(this,1),this.$destroy=$e}$on(e,t){if(!Ln(t))return $e;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!mc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ri=[];function _l(r,e){return{subscribe:st(r,e).subscribe}}function st(r,e=$e){let t;const n=new Set;function i(a){if(Je(r,a)&&(r=a,t)){const l=!ri.length;for(const c of n)c[1](),ri.push(c,r);if(l){for(let c=0;c<ri.length;c+=2)ri[c][0](ri[c+1]);ri.length=0}}}function s(a){i(a(r))}function o(a,l=$e){const c=[a,l];return n.add(c),n.size===1&&(t=e(i)||$e),a(r),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function Nc(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return _l(t,o=>{let a=!1;const l=[];let c=0,u=$e;const f=()=>{if(c)return;u();const d=e(n?l[0]:l,o);s?o(d):u=Ln(d)?d:$e},h=i.map((d,g)=>qs(d,p=>{l[g]=p,c&=~(1<<g),a&&f()},()=>{c|=1<<g}));return a=!0,f(),function(){Qt(h),u()}})}const kr=new URLSearchParams(window.location.search);let xl,vl;if(kr.has("week")){const r=kr.get("week");xl=parseInt(r)}if(kr.has("scene")){const r=kr.get("scene");vl=parseInt(r)}const wi=st(xl??0),Xn=st(vl??0);function bl(r){const e=r-1;return e*e*e+1}function zc(r,{from:e,to:t},n={}){const i=getComputedStyle(r),s=i.transform==="none"?"":i.transform,[o,a]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*a/t.height-(t.top+a),{delay:u=0,duration:f=d=>Math.sqrt(d)*120,easing:h=bl}=n;return{delay:u,duration:Ln(f)?f(Math.sqrt(l*l+c*c)):f,easing:h,css:(d,g)=>{const p=g*l,m=g*c,_=d+g*e.width/t.width,b=d+g*e.height/t.height;return`transform: ${s} translate(${p}px, ${m}px) scale(${_}, ${b});`}}}function xa(r,e,t){const n=r.slice();return n[4]=e[t],n[6]=t,n}function va(r){let e,t,n;return{c(){e=ft("h1"),e.innerHTML=`<img src="./threlte.png" alt="Threlte Logo" class="svelte-1acxfqq"/> 
        <span class="svelte-1acxfqq">SRP - Threlte
          <h2 class="svelte-1acxfqq">Sjors Wijsman</h2></span>`,t=Ie(),n=ft("h3"),n.textContent="Weken",Ge(e,"class","svelte-1acxfqq")},m(i,s){we(i,e,s),we(i,t,s),we(i,n,s)},d(i){i&&Se(e),i&&Se(t),i&&Se(n)}}}function ba(r){let e,t,n;return{c(){e=ft("button"),e.textContent="Home",Ge(e,"class","svelte-1acxfqq")},m(i,s){we(i,e,s),t||(n=Pt(e,"click",r[2]),t=!0)},p:$e,d(i){i&&Se(e),t=!1,n()}}}function ya(r,e){let t,n,i,s=e[6]+1+"",o,a,l=$e,c,u;function f(){return e[3](e[6])}return{key:r,first:null,c(){t=ft("button"),n=Zn("Week "),i=ft("span"),o=Zn(s),Ge(i,"class","svelte-1acxfqq"),Ge(t,"class","svelte-1acxfqq"),Nr(t,"active",e[0]===e[6]+1),this.first=t},m(h,d){we(h,t,d),bt(t,n),bt(t,i),bt(i,o),c||(u=Pt(t,"click",f),c=!0)},p(h,d){e=h,d&1&&Nr(t,"active",e[0]===e[6]+1)},r(){a=t.getBoundingClientRect()},f(){Ac(t),l()},a(){l(),l=Tc(t,a,zc,{})},d(h){h&&Se(t),c=!1,u()}}}function Ma(r){let e;return{c(){e=ft("a"),e.innerHTML=`Lees hier het volledige verslag
        <img src="./icons/external-link.svg" alt="" class="svelte-1acxfqq"/>`,Ge(e,"href","https://operatie-gekkigeit.notion.site/SRP-Threlte-0302c5b6331f4343abed1df12a298e4f"),Ge(e,"target","_blank"),Ge(e,"rel","noreferrer"),Ge(e,"class","svelte-1acxfqq")},m(t,n){we(t,e,n)},d(t){t&&Se(e)}}}function Uc(r){let e,t,n,i,s=[],o=new Map,a,l=!r[0]&&va(),c=r[0]!==0&&ba(r),u=Array(6);const f=d=>d[6];for(let d=0;d<u.length;d+=1){let g=xa(r,u,d),p=f(g);o.set(p,s[d]=ya(p,g))}let h=!r[0]&&Ma();return{c(){e=ft("header"),t=ft("nav"),l&&l.c(),n=Ie(),c&&c.c(),i=Ie();for(let d=0;d<s.length;d+=1)s[d].c();a=Ie(),h&&h.c(),Ge(t,"class","svelte-1acxfqq"),Ge(e,"class","svelte-1acxfqq"),Nr(e,"minimize",r[0])},m(d,g){we(d,e,g),bt(e,t),l&&l.m(t,null),bt(t,n),c&&c.m(t,null),bt(t,i);for(let p=0;p<s.length;p+=1)s[p].m(t,null);bt(t,a),h&&h.m(t,null)},p(d,[g]){if(d[0]?l&&(l.d(1),l=null):l||(l=va(),l.c(),l.m(t,n)),d[0]!==0?c?c.p(d,g):(c=ba(d),c.c(),c.m(t,i)):c&&(c.d(1),c=null),g&3){u=Array(6);for(let p=0;p<s.length;p+=1)s[p].r();s=Fc(s,g,f,1,d,u,o,t,Ic,ya,a,xa);for(let p=0;p<s.length;p+=1)s[p].a()}d[0]?h&&(h.d(1),h=null):h||(h=Ma(),h.c(),h.m(t,null)),g&1&&Nr(e,"minimize",d[0])},i:$e,o:$e,d(d){d&&Se(e),l&&l.d(),c&&c.d();for(let g=0;g<s.length;g+=1)s[g].d();h&&h.d()}}}function kc(r,e,t){let n,i;return xt(r,wi,a=>t(0,n=a)),xt(r,Xn,a=>t(1,i=a)),[n,i,()=>rn(wi,n=0,n),a=>{rn(wi,n=a+1,n),rn(Xn,i=0,i)}]}class Bc extends et{constructor(e){super(),Qe(this,e,kc,Uc,Je,{})}}function Br(r,{delay:e=0,duration:t=400,easing:n=nr}={}){const i=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:n,css:s=>`opacity: ${s*i}`}}function Sa(r,{delay:e=0,duration:t=400,easing:n=bl}={}){const i=getComputedStyle(r),s=+i.opacity,o=parseFloat(i.height),a=parseFloat(i.paddingTop),l=parseFloat(i.paddingBottom),c=parseFloat(i.marginTop),u=parseFloat(i.marginBottom),f=parseFloat(i.borderTopWidth),h=parseFloat(i.borderBottomWidth);return{delay:e,duration:t,easing:n,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*s};height: ${d*o}px;padding-top: ${d*a}px;padding-bottom: ${d*l}px;margin-top: ${d*c}px;margin-bottom: ${d*u}px;border-top-width: ${d*f}px;border-bottom-width: ${d*h}px;`}}function Gc(r){var p;let e,t,n,i,s,o=((p=r[1][r[0]-1])==null?void 0:p.title)+"",a,l,c,u,f,h,d,g;return{c(){var m;e=ft("footer"),t=ft("a"),n=ft("img"),s=Ie(),a=Zn(o),l=Ie(),c=ft("img"),pa(n.src,i="./threlte.png")||Ge(n,"src",i),Ge(n,"alt","Threlte Logo"),Ge(n,"class","svelte-3j8m7e"),pa(c.src,u="./icons/external-link.svg")||Ge(c,"src",u),Ge(c,"alt",""),Ge(c,"class","svelte-3j8m7e"),Ge(t,"href",f=(m=r[1][r[0]-1])==null?void 0:m.link),Ge(t,"target","_blank"),Ge(t,"rel","noreferrer"),Ge(t,"class","button svelte-3j8m7e"),Ge(e,"class","svelte-3j8m7e")},m(m,_){we(m,e,_),bt(e,t),bt(t,n),bt(t,s),bt(t,a),bt(t,l),bt(t,c),g=!0},p(m,[_]){var b,v;(!g||_&1)&&o!==(o=((b=m[1][m[0]-1])==null?void 0:b.title)+"")&&Mc(a,o),(!g||_&1&&f!==(f=(v=m[1][m[0]-1])==null?void 0:v.link))&&Ge(t,"href",f)},i(m){g||(gn(()=>{h||(h=fr(t,Br,{duration:500},!0)),h.run(1)}),gn(()=>{d||(d=fr(e,Sa,{duration:500},!0)),d.run(1)}),g=!0)},o(m){h||(h=fr(t,Br,{duration:500},!1)),h.run(0),d||(d=fr(e,Sa,{duration:500},!1)),d.run(0),g=!1},d(m){m&&Se(e),m&&h&&h.end(),m&&d&&d.end()}}}function Vc(r,e,t){let n;return xt(r,wi,s=>t(0,n=s)),[n,[{title:"Week 1 - Inlezen & Opzet 3D omgeving",link:"https://operatie-gekkigeit.notion.site/Week-1-Inlezen-Opzet-3D-Omgeving-8e2552e3b8d94a5bba97650548879d4a"},{title:"Week 2 - Basic 3D weergave",link:"https://operatie-gekkigeit.notion.site/Week-2-Basic-3D-weergave-c20c4b9e853c43bfa62bf187a42ada7f"},{title:"Week 3 - Interactie",link:"https://operatie-gekkigeit.notion.site/Week-3-Interactie-fbb46aa5bad442f2ab7ec86f62c97781"},{title:"Week 4 - Importeren van 3D models",link:"https://operatie-gekkigeit.notion.site/Week-4-Importeren-van-3D-models-719b2a86732e4e4795d05c3e63c81398"},{title:"Week 5 - Start Eindproduct",link:"https://operatie-gekkigeit.notion.site/Week-5-Start-Eindproduct-79b44ad1e941418d93ec4bc141e748ce"},{title:"Week 6 - Afronding Eindproduct",link:"https://operatie-gekkigeit.notion.site/Week-6-Afronding-Eindproduct-c5d8eb6226864dc4b48265f30c46a770"}]]}class Hc extends et{constructor(e){super(),Qe(this,e,Vc,Gc,Je,{})}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Js="148",si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wc=0,wa=1,jc=2,yl=1,Ml=2,ji=3,Qn=0,jt=1,Qs=2,hr=3,En=0,Ei=1,Ea=2,Ta=3,Aa=4,qc=5,yi=100,Xc=101,$c=102,Ca=103,La=104,Yc=200,Zc=201,Kc=202,Jc=203,Sl=204,wl=205,Qc=206,eu=207,tu=208,nu=209,iu=210,ru=0,su=1,au=2,Ns=3,ou=4,lu=5,cu=6,uu=7,El=0,fu=1,hu=2,sn=0,du=1,pu=2,mu=3,Tl=4,gu=5,Al=300,Ci=301,Li=302,zs=303,Us=304,Vr=306,ks=1e3,Kt=1001,Bs=1002,Ct=1003,Pa=1004,Jr=1005,Ht=1006,_u=1007,Ji=1008,ei=1009,xu=1010,vu=1011,Cl=1012,bu=1013,Wn=1014,jn=1015,Qi=1016,yu=1017,Mu=1018,Ti=1020,Su=1021,wu=1022,Jt=1023,Eu=1024,Tu=1025,$n=1026,Pi=1027,Au=1028,Cu=1029,Lu=1030,Pu=1031,Du=1033,Qr=33776,es=33777,ts=33778,ns=33779,Da=35840,Ra=35841,Ia=35842,Fa=35843,Ru=36196,Oa=37492,Na=37496,za=37808,Ua=37809,ka=37810,Ba=37811,Ga=37812,Va=37813,Ha=37814,Wa=37815,ja=37816,qa=37817,Xa=37818,$a=37819,Ya=37820,Za=37821,Ka=36492,Tn=3e3,Ye=3001,Iu=3200,Fu=3201,Ll=0,Ou=1,en="srgb",er="srgb-linear",is=7680,Nu=519,Ja=35044,Qa="300 es",Gs=1035;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rs=Math.PI/180,eo=180/Math.PI;function rr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[r&255]+Mt[r>>8&255]+Mt[r>>16&255]+Mt[r>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function Dt(r,e,t){return Math.max(e,Math.min(t,r))}function zu(r,e){return(r%e+e)%e}function ss(r,e,t){return(1-t)*r+t*e}function to(r){return(r&r-1)===0&&r!==0}function Vs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function dr(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],p=i[0],m=i[3],_=i[6],b=i[1],v=i[4],w=i[7],M=i[2],C=i[5],I=i[8];return s[0]=o*p+a*b+l*M,s[3]=o*m+a*v+l*C,s[6]=o*_+a*w+l*I,s[1]=c*p+u*b+f*M,s[4]=c*m+u*v+f*C,s[7]=c*_+u*w+f*I,s[2]=h*p+d*b+g*M,s[5]=h*m+d*v+g*C,s[8]=h*_+d*w+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=h*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(as.makeScale(e,t)),this}rotate(e){return this.premultiply(as.makeRotation(-e)),this}translate(e,t){return this.premultiply(as.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const as=new kt;function Pl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function tr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const os={[en]:{[er]:Yn},[er]:{[en]:Fr}},Tt={legacyMode:!0,get workingColorSpace(){return er},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(os[e]&&os[e][t]!==void 0){const n=os[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ut={r:0,g:0,b:0},Xt={h:0,s:0,l:0},pr={h:0,s:0,l:0};function ls(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function mr(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Tt.workingColorSpace){if(e=zu(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ls(o,s,e+1/3),this.g=ls(o,s,e),this.b=ls(o,s,e-1/3)}return Tt.toWorkingColorSpace(this,i),this}setStyle(e,t=en){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Tt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Tt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Tt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Tt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=en){const n=Dl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return Tt.fromWorkingColorSpace(mr(this,ut),e),Dt(ut.r*255,0,255)<<16^Dt(ut.g*255,0,255)<<8^Dt(ut.b*255,0,255)<<0}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(mr(this,ut),t);const n=ut.r,i=ut.g,s=ut.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(mr(this,ut),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=en){return Tt.fromWorkingColorSpace(mr(this,ut),e),e!==en?`color(${e} ${ut.r} ${ut.g} ${ut.b})`:`rgb(${ut.r*255|0},${ut.g*255|0},${ut.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Xt),Xt.h+=e,Xt.s+=t,Xt.l+=n,this.setHSL(Xt.h,Xt.s,Xt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xt),e.getHSL(pr);const n=ss(Xt.h,pr.h,t),i=ss(Xt.s,pr.s,t),s=ss(Xt.l,pr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Xe.NAMES=Dl;let oi;class Rl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=tr("canvas")),oi.width=e.width,oi.height=e.height;const n=oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Yn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Il{constructor(e=null){this.isSource=!0,this.uuid=rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(cs(i[o].image)):s.push(cs(i[o]))}else s=cs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function cs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uu=0;class It extends ni{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Kt,i=Kt,s=Ht,o=Ji,a=Jt,l=ei,c=It.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=rr(),this.name="",this.source=new Il(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Al;It.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,w=(d+1)/2,M=(_+1)/2,C=(u+h)/4,I=(f+p)/4,x=(g+m)/4;return v>w&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=C/n,s=I/n):w>M?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=C/i,s=x/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=I/s,i=x/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-p)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class An extends ni{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ht,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Il(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fl extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ku extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(f!==p||l!==h||c!==d||u!==g){let m=1-a;const _=l*h+c*d+u*g+f*p,b=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const M=Math.sqrt(v),C=Math.atan2(M,_*b);m=Math.sin(m*C)/M,a=Math.sin(a*C)/M}const w=a*b;if(l=l*m+h*w,c=c*m+d*w,u=u*m+g*w,f=f*m+p*w,m===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(no.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(no.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,f=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return us.copy(this).projectOnVector(e),this.sub(us)}reflect(e){return this.sub(us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const us=new k,no=new ti;class sr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Un.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Un)}else n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox),fs.applyMatrix4(e.matrixWorld),this.union(fs);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),gr.subVectors(this.max,zi),li.subVectors(e.a,zi),ci.subVectors(e.b,zi),ui.subVectors(e.c,zi),bn.subVectors(ci,li),yn.subVectors(ui,ci),kn.subVectors(li,ui);let t=[0,-bn.z,bn.y,0,-yn.z,yn.y,0,-kn.z,kn.y,bn.z,0,-bn.x,yn.z,0,-yn.x,kn.z,0,-kn.x,-bn.y,bn.x,0,-yn.y,yn.x,0,-kn.y,kn.x,0];return!hs(t,li,ci,ui,gr)||(t=[1,0,0,0,1,0,0,0,1],!hs(t,li,ci,ui,gr))?!1:(_r.crossVectors(bn,yn),t=[_r.x,_r.y,_r.z],hs(t,li,ci,ui,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Un.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new k,new k,new k,new k,new k,new k,new k,new k],Un=new k,fs=new sr,li=new k,ci=new k,ui=new k,bn=new k,yn=new k,kn=new k,zi=new k,gr=new k,_r=new k,Bn=new k;function hs(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Bn.fromArray(r,s);const a=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Bu=new sr,Ui=new k,ds=new k;class ea{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ui.subVectors(e,this.center);const t=Ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ui,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ui.copy(e.center).add(ds)),this.expandByPoint(Ui.copy(e.center).sub(ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new k,ps=new k,xr=new k,Mn=new k,ms=new k,vr=new k,gs=new k;class Ol{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.direction).multiplyScalar(t).add(this.origin),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ps.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(ps);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xr),a=Mn.dot(this.direction),l=-Mn.dot(xr),c=Mn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(xr).multiplyScalar(h).add(ps),d}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),i=un.dot(un)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,i,s){ms.subVectors(t,e),vr.subVectors(n,e),gs.crossVectors(ms,vr);let o=this.direction.dot(gs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);const l=a*this.direction.dot(vr.crossVectors(Mn,vr));if(l<0)return null;const c=a*this.direction.dot(ms.cross(Mn));if(c<0||l+c>o)return null;const u=-a*Mn.dot(gs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,f,h,d,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fi.setFromMatrixColumn(e,0).length(),s=1/fi.setFromMatrixColumn(e,1).length(),o=1/fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,p=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-p*c,t[9]=-a*l,t[2]=p-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,p=c*f;t[0]=h+p*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=p+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,p=c*f;t[0]=h-p*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=p-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,p=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-p*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gu,e,Vu)}lookAt(e,t,n){const i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Sn.crossVectors(n,zt),Sn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Sn.crossVectors(n,zt)),Sn.normalize(),br.crossVectors(zt,Sn),i[0]=Sn.x,i[4]=br.x,i[8]=zt.x,i[1]=Sn.y,i[5]=br.y,i[9]=zt.y,i[2]=Sn.z,i[6]=br.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],p=n[6],m=n[10],_=n[14],b=n[3],v=n[7],w=n[11],M=n[15],C=i[0],I=i[4],x=i[8],A=i[12],P=i[1],B=i[5],ne=i[9],z=i[13],F=i[2],q=i[6],Y=i[10],$=i[14],j=i[3],te=i[7],Z=i[11],L=i[15];return s[0]=o*C+a*P+l*F+c*j,s[4]=o*I+a*B+l*q+c*te,s[8]=o*x+a*ne+l*Y+c*Z,s[12]=o*A+a*z+l*$+c*L,s[1]=u*C+f*P+h*F+d*j,s[5]=u*I+f*B+h*q+d*te,s[9]=u*x+f*ne+h*Y+d*Z,s[13]=u*A+f*z+h*$+d*L,s[2]=g*C+p*P+m*F+_*j,s[6]=g*I+p*B+m*q+_*te,s[10]=g*x+p*ne+m*Y+_*Z,s[14]=g*A+p*z+m*$+_*L,s[3]=b*C+v*P+w*F+M*j,s[7]=b*I+v*B+w*q+M*te,s[11]=b*x+v*ne+w*Y+M*Z,s[15]=b*A+v*z+w*$+M*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+p*(+t*l*d-t*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+_*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],p=e[13],m=e[14],_=e[15],b=f*m*c-p*h*c+p*l*d-a*m*d-f*l*_+a*h*_,v=g*h*c-u*m*c-g*l*d+o*m*d+u*l*_-o*h*_,w=u*p*c-g*f*c+g*a*d-o*p*d-u*a*_+o*f*_,M=g*f*l-u*p*l-g*a*h+o*p*h+u*a*m-o*f*m,C=t*b+n*v+i*w+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return e[0]=b*I,e[1]=(p*h*s-f*m*s-p*i*d+n*m*d+f*i*_-n*h*_)*I,e[2]=(a*m*s-p*l*s+p*i*c-n*m*c-a*i*_+n*l*_)*I,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*I,e[4]=v*I,e[5]=(u*m*s-g*h*s+g*i*d-t*m*d-u*i*_+t*h*_)*I,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*_-t*l*_)*I,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*d+t*l*d)*I,e[8]=w*I,e[9]=(g*f*s-u*p*s-g*n*d+t*p*d+u*n*_-t*f*_)*I,e[10]=(o*p*s-g*a*s+g*n*c-t*p*c-o*n*_+t*a*_)*I,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*I,e[12]=M*I,e[13]=(u*p*i-g*f*i+g*n*h-t*p*h-u*n*m+t*f*m)*I,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*m-t*a*m)*I,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,p=o*u,m=o*f,_=a*f,b=l*c,v=l*u,w=l*f,M=n.x,C=n.y,I=n.z;return i[0]=(1-(p+_))*M,i[1]=(d+w)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(d-w)*C,i[5]=(1-(h+_))*C,i[6]=(m+b)*C,i[7]=0,i[8]=(g+v)*I,i[9]=(m-b)*I,i[10]=(1-(h+p))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fi.set(i[0],i[1],i[2]).length();const o=fi.set(i[4],i[5],i[6]).length(),a=fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],$t.copy(this);const c=1/s,u=1/o,f=1/a;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=u,$t.elements[5]*=u,$t.elements[6]*=u,$t.elements[8]*=f,$t.elements[9]*=f,$t.elements[10]*=f,t.setFromRotationMatrix($t),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),f=(t+e)*l,h=(n+i)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fi=new k,$t=new at,Gu=new k(0,0,0),Vu=new k(1,1,1),Sn=new k,br=new k,zt=new k,io=new at,ro=new ti;class ar{constructor(e=0,t=0,n=0,i=ar.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(io,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ro.setFromEuler(this),this.setFromQuaternion(ro,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ar.DefaultOrder="XYZ";ar.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hu=0;const so=new k,hi=new ti,fn=new at,yr=new k,ki=new k,Wu=new k,ju=new ti,ao=new k(1,0,0),oo=new k(0,1,0),lo=new k(0,0,1),qu={type:"added"},co={type:"removed"};class ot extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DefaultUp.clone();const e=new k,t=new ar,n=new ti,i=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new kt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=ot.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ot.DefaultMatrixWorldAutoUpdate,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(ao,e)}rotateY(e){return this.rotateOnAxis(oo,e)}rotateZ(e){return this.rotateOnAxis(lo,e)}translateOnAxis(e,t){return so.copy(e).applyQuaternion(this.quaternion),this.position.add(so.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ao,e)}translateY(e){return this.translateOnAxis(oo,e)}translateZ(e){return this.translateOnAxis(lo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yr.copy(e):yr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(ki,yr,this.up):fn.lookAt(yr,ki,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(fn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(co)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(co)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,Wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,ju,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DefaultUp=new k(0,1,0);ot.DefaultMatrixAutoUpdate=!0;ot.DefaultMatrixWorldAutoUpdate=!0;const Yt=new k,hn=new k,_s=new k,dn=new k,di=new k,pi=new k,uo=new k,xs=new k,vs=new k,bs=new k;class pn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yt.subVectors(i,t),hn.subVectors(n,t),_s.subVectors(e,t);const o=Yt.dot(Yt),a=Yt.dot(hn),l=Yt.dot(_s),c=hn.dot(hn),u=hn.dot(_s),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,dn),l.set(0,0),l.addScaledVector(s,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),hn.subVectors(e,t),Yt.cross(hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Yt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return pn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;di.subVectors(i,n),pi.subVectors(s,n),xs.subVectors(e,n);const l=di.dot(xs),c=pi.dot(xs);if(l<=0&&c<=0)return t.copy(n);vs.subVectors(e,i);const u=di.dot(vs),f=pi.dot(vs);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(di,o);bs.subVectors(e,s);const d=di.dot(bs),g=pi.dot(bs);if(g>=0&&d<=g)return t.copy(s);const p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(pi,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return uo.subVectors(s,i),a=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(uo,a);const _=1/(m+p+h);return o=p*_,a=h*_,t.copy(n).addScaledVector(di,o).addScaledVector(pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Xu=0;class or extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Ei,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Sl,this.blendDst=wl,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nl extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new k,Mr=new Le;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ja,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ja&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class zl extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ul extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $u=0;const Vt=new at,ys=new ot,mi=new k,Ut=new sr,Bi=new sr,_t=new k;class xn extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pl(e)?Ul:zl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new kt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return ys.lookAt(e),ys.updateMatrix(),this.applyMatrix4(ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Bi.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Ut.min,Bi.min),Ut.expandByPoint(_t),_t.addVectors(Ut.max,Bi.max),Ut.expandByPoint(_t)):(Ut.expandByPoint(Bi.min),Ut.expandByPoint(Bi.max))}Ut.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_t.fromBufferAttribute(a,c),l&&(mi.fromBufferAttribute(e,c),_t.add(mi)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new k,u[P]=new k;const f=new k,h=new k,d=new k,g=new Le,p=new Le,m=new Le,_=new k,b=new k;function v(P,B,ne){f.fromArray(i,P*3),h.fromArray(i,B*3),d.fromArray(i,ne*3),g.fromArray(o,P*2),p.fromArray(o,B*2),m.fromArray(o,ne*2),h.sub(f),d.sub(f),p.sub(g),m.sub(g);const z=1/(p.x*m.y-m.x*p.y);isFinite(z)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(z),b.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(z),c[P].add(_),c[B].add(_),c[ne].add(_),u[P].add(b),u[B].add(b),u[ne].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let P=0,B=w.length;P<B;++P){const ne=w[P],z=ne.start,F=ne.count;for(let q=z,Y=z+F;q<Y;q+=3)v(n[q+0],n[q+1],n[q+2])}const M=new k,C=new k,I=new k,x=new k;function A(P){I.fromArray(s,P*3),x.copy(I);const B=c[P];M.copy(B),M.sub(I.multiplyScalar(I.dot(B))).normalize(),C.crossVectors(x,B);const z=C.dot(u[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=z}for(let P=0,B=w.length;P<B;++P){const ne=w[P],z=ne.start,F=ne.count;for(let q=z,Y=z+F;q<Y;q+=3)A(n[q+0]),A(n[q+1]),A(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),p=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*u;for(let _=0;_<u;_++)h[g++]=c[d++]}return new an(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const fo=new at,gi=new Ol,Ms=new ea,Gi=new k,Vi=new k,Hi=new k,Ss=new k,Sr=new k,wr=new Le,Er=new Le,Tr=new Le,ws=new k,Ar=new k;class Rt extends ot{constructor(e=new xn,t=new Nl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Sr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ss.fromBufferAttribute(f,e),o?Sr.addScaledVector(Ss,u):Sr.addScaledVector(Ss.sub(t),u))}t.add(Sr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(s),e.ray.intersectsSphere(Ms)===!1)||(fo.copy(s).invert(),gi.copy(e.ray).applyMatrix4(fo),n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,g=f.length;d<g;d++){const p=f[d],m=i[p.materialIndex],_=Math.max(p.start,h.start),b=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let v=_,w=b;v<w;v+=3){const M=a.getX(v),C=a.getX(v+1),I=a.getX(v+2);o=Cr(this,m,e,gi,c,u,M,C,I),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let p=d,m=g;p<m;p+=3){const _=a.getX(p),b=a.getX(p+1),v=a.getX(p+2);o=Cr(this,i,e,gi,c,u,_,b,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,g=f.length;d<g;d++){const p=f[d],m=i[p.materialIndex],_=Math.max(p.start,h.start),b=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let v=_,w=b;v<w;v+=3){const M=v,C=v+1,I=v+2;o=Cr(this,m,e,gi,c,u,M,C,I),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const d=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let p=d,m=g;p<m;p+=3){const _=p,b=p+1,v=p+2;o=Cr(this,i,e,gi,c,u,_,b,v),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Yu(r,e,t,n,i,s,o,a){let l;if(e.side===jt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Qn,a),l===null)return null;Ar.copy(a),Ar.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ar);return c<t.near||c>t.far?null:{distance:c,point:Ar.clone(),object:r}}function Cr(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Gi),r.getVertexPosition(a,Vi),r.getVertexPosition(l,Hi);const c=Yu(r,e,t,n,Gi,Vi,Hi,ws);if(c){i&&(wr.fromBufferAttribute(i,o),Er.fromBufferAttribute(i,a),Tr.fromBufferAttribute(i,l),c.uv=pn.getUV(ws,Gi,Vi,Hi,wr,Er,Tr,new Le)),s&&(wr.fromBufferAttribute(s,o),Er.fromBufferAttribute(s,a),Tr.fromBufferAttribute(s,l),c.uv2=pn.getUV(ws,Gi,Vi,Hi,wr,Er,Tr,new Le));const u={a:o,b:a,c:l,normal:new k,materialIndex:0};pn.getNormal(Gi,Vi,Hi,u.normal),c.face=u}return c}class vn extends xn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function g(p,m,_,b,v,w,M,C,I,x,A){const P=w/I,B=M/x,ne=w/2,z=M/2,F=C/2,q=I+1,Y=x+1;let $=0,j=0;const te=new k;for(let Z=0;Z<Y;Z++){const L=Z*B-z;for(let V=0;V<q;V++){const K=V*P-ne;te[p]=K*b,te[m]=L*v,te[_]=F,c.push(te.x,te.y,te.z),te[p]=0,te[m]=0,te[_]=C>0?1:-1,u.push(te.x,te.y,te.z),f.push(V/I),f.push(1-Z/x),$+=1}}for(let Z=0;Z<x;Z++)for(let L=0;L<I;L++){const V=h+L+q*Z,K=h+L+q*(Z+1),Q=h+(L+1)+q*(Z+1),oe=h+(L+1)+q*Z;l.push(V,K,oe),l.push(K,Q,oe),j+=6}a.addGroup(d,j,A),d+=j,h+=$}}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(r){const e={};for(let t=0;t<r.length;t++){const n=Di(r[t]);for(const i in n)e[i]=n[i]}return e}function Zu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function kl(r){return r.getRenderTarget()===null&&r.outputEncoding===Ye?en:er}const Bl={clone:Di,merge:At};var Ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ku,this.fragmentShader=Ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Zu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class na extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class St extends na{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,xi=1;class Qu extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new St(_i,xi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new St(_i,xi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new St(_i,xi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new St(_i,xi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new St(_i,xi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new St(_i,xi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=sn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Gl extends It{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ci,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ef extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new vn(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:En});s.uniforms.tEquirect.value=t;const o=new Rt(i,s),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Ht),new Qu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Es=new k,tf=new k,nf=new kt;class Gn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Es.subVectors(n,t).cross(tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Es),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nf.getNormalMatrix(e),i=this.coplanarPoint(Es).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new ea,Lr=new k;class ia{constructor(e=new Gn,t=new Gn,n=new Gn,i=new Gn,s=new Gn,o=new Gn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],d=n[9],g=n[10],p=n[11],m=n[12],_=n[13],b=n[14],v=n[15];return t[0].setComponents(a-i,f-l,p-h,v-m).normalize(),t[1].setComponents(a+i,f+l,p+h,v+m).normalize(),t[2].setComponents(a+s,f+c,p+d,v+_).normalize(),t[3].setComponents(a-s,f-c,p-d,v-_).normalize(),t[4].setComponents(a-o,f-u,p-g,v-b).normalize(),t[5].setComponents(a+o,f+u,p+g,v+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Lr.x=i.normal.x>0?e.max.x:e.min.x,Lr.y=i.normal.y>0?e.max.y:e.min.y,Lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vl(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;r.bindBuffer(f,c),d.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class ra extends xn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],p=[],m=[];for(let _=0;_<u;_++){const b=_*h-o;for(let v=0;v<c;v++){const w=v*f-s;g.push(w,-b,0),p.push(0,0,1),m.push(v/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const v=b+c*_,w=b+c*(_+1),M=b+1+c*(_+1),C=b+1+c*_;d.push(v,w,C),d.push(w,M,C)}this.setIndex(d),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(m,2))}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff="vec3 transformed = vec3( position );",hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,df=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,pf=`#ifdef USE_IRIDESCENCE
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
#endif`,mf=`#ifdef USE_BUMPMAP
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
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wf=`#define PI 3.141592653589793
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
}`,Ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tf=`vec3 transformedNormal = objectNormal;
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
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Df="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,If=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
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
}`,Hf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xf=`uniform bool receiveShadow;
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
#endif`,$f=`#if defined( USE_ENVMAP )
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
#endif`,Yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
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
#endif`,eh=`struct PhysicalMaterial {
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
}`,th=`
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
#endif`,nh=`#if defined( RE_IndirectDiffuse )
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
#endif`,ih=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,rh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ah=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ch=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ph=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mh=`#ifdef USE_MORPHNORMALS
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
#endif`,gh=`#ifdef USE_MORPHTARGETS
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
#endif`,_h=`#ifdef USE_MORPHTARGETS
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
#endif`,xh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,vh=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sh=`#ifdef USE_NORMALMAP
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
#endif`,wh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Eh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Th=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ch=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ph=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ih=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Oh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uh=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kh=`float getShadowMask() {
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
}`,Bh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gh=`#ifdef USE_SKINNING
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
#endif`,Vh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hh=`#ifdef USE_SKINNING
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
#endif`,Wh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$h=`#ifdef USE_TRANSMISSION
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
#endif`,Yh=`#ifdef USE_TRANSMISSION
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
#endif`,Zh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Kh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Jh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Qh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ed=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,td=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const id=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rd=`uniform sampler2D t2D;
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
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`#ifdef ENVMAP_TYPE_CUBE
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
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ld=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cd=`#include <common>
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
}`,ud=`#if DEPTH_PACKING == 3200
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
}`,fd=`#define DISTANCE
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
}`,hd=`#define DISTANCE
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
}`,dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,md=`uniform float scale;
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
}`,gd=`uniform vec3 diffuse;
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
}`,_d=`#include <common>
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
}`,xd=`uniform vec3 diffuse;
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
}`,vd=`#define LAMBERT
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
}`,bd=`#define LAMBERT
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
}`,yd=`#define MATCAP
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
}`,Md=`#define MATCAP
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
}`,Sd=`#define NORMAL
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
}`,wd=`#define NORMAL
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
}`,Ed=`#define PHONG
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
}`,Td=`#define PHONG
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
}`,Ad=`#define STANDARD
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
}`,Cd=`#define STANDARD
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
}`,Ld=`#define TOON
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
}`,Pd=`#define TOON
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
}`,Dd=`uniform float size;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Id=`#include <common>
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
}`,Fd=`uniform vec3 color;
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
}`,Od=`uniform float rotation;
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
}`,Nd=`uniform vec3 diffuse;
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
}`,De={alphamap_fragment:sf,alphamap_pars_fragment:af,alphatest_fragment:of,alphatest_pars_fragment:lf,aomap_fragment:cf,aomap_pars_fragment:uf,begin_vertex:ff,beginnormal_vertex:hf,bsdfs:df,iridescence_fragment:pf,bumpmap_pars_fragment:mf,clipping_planes_fragment:gf,clipping_planes_pars_fragment:_f,clipping_planes_pars_vertex:xf,clipping_planes_vertex:vf,color_fragment:bf,color_pars_fragment:yf,color_pars_vertex:Mf,color_vertex:Sf,common:wf,cube_uv_reflection_fragment:Ef,defaultnormal_vertex:Tf,displacementmap_pars_vertex:Af,displacementmap_vertex:Cf,emissivemap_fragment:Lf,emissivemap_pars_fragment:Pf,encodings_fragment:Df,encodings_pars_fragment:Rf,envmap_fragment:If,envmap_common_pars_fragment:Ff,envmap_pars_fragment:Of,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:$f,envmap_vertex:zf,fog_vertex:Uf,fog_pars_vertex:kf,fog_fragment:Bf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Vf,lightmap_fragment:Hf,lightmap_pars_fragment:Wf,lights_lambert_fragment:jf,lights_lambert_pars_fragment:qf,lights_pars_begin:Xf,lights_toon_fragment:Yf,lights_toon_pars_fragment:Zf,lights_phong_fragment:Kf,lights_phong_pars_fragment:Jf,lights_physical_fragment:Qf,lights_physical_pars_fragment:eh,lights_fragment_begin:th,lights_fragment_maps:nh,lights_fragment_end:ih,logdepthbuf_fragment:rh,logdepthbuf_pars_fragment:sh,logdepthbuf_pars_vertex:ah,logdepthbuf_vertex:oh,map_fragment:lh,map_pars_fragment:ch,map_particle_fragment:uh,map_particle_pars_fragment:fh,metalnessmap_fragment:hh,metalnessmap_pars_fragment:dh,morphcolor_vertex:ph,morphnormal_vertex:mh,morphtarget_pars_vertex:gh,morphtarget_vertex:_h,normal_fragment_begin:xh,normal_fragment_maps:vh,normal_pars_fragment:bh,normal_pars_vertex:yh,normal_vertex:Mh,normalmap_pars_fragment:Sh,clearcoat_normal_fragment_begin:wh,clearcoat_normal_fragment_maps:Eh,clearcoat_pars_fragment:Th,iridescence_pars_fragment:Ah,output_fragment:Ch,packing:Lh,premultiplied_alpha_fragment:Ph,project_vertex:Dh,dithering_fragment:Rh,dithering_pars_fragment:Ih,roughnessmap_fragment:Fh,roughnessmap_pars_fragment:Oh,shadowmap_pars_fragment:Nh,shadowmap_pars_vertex:zh,shadowmap_vertex:Uh,shadowmask_pars_fragment:kh,skinbase_vertex:Bh,skinning_pars_vertex:Gh,skinning_vertex:Vh,skinnormal_vertex:Hh,specularmap_fragment:Wh,specularmap_pars_fragment:jh,tonemapping_fragment:qh,tonemapping_pars_fragment:Xh,transmission_fragment:$h,transmission_pars_fragment:Yh,uv_pars_fragment:Zh,uv_pars_vertex:Kh,uv_vertex:Jh,uv2_pars_fragment:Qh,uv2_pars_vertex:ed,uv2_vertex:td,worldpos_vertex:nd,background_vert:id,background_frag:rd,backgroundCube_vert:sd,backgroundCube_frag:ad,cube_vert:od,cube_frag:ld,depth_vert:cd,depth_frag:ud,distanceRGBA_vert:fd,distanceRGBA_frag:hd,equirect_vert:dd,equirect_frag:pd,linedashed_vert:md,linedashed_frag:gd,meshbasic_vert:_d,meshbasic_frag:xd,meshlambert_vert:vd,meshlambert_frag:bd,meshmatcap_vert:yd,meshmatcap_frag:Md,meshnormal_vert:Sd,meshnormal_frag:wd,meshphong_vert:Ed,meshphong_frag:Td,meshphysical_vert:Ad,meshphysical_frag:Cd,meshtoon_vert:Ld,meshtoon_frag:Pd,points_vert:Dd,points_frag:Rd,shadow_vert:Id,shadow_frag:Fd,sprite_vert:Od,sprite_frag:Nd},ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new kt},uv2Transform:{value:new kt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new kt}}},tn={basic:{uniforms:At([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:At([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:At([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:At([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:At([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:At([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:At([ae.points,ae.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:At([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:At([ae.common,ae.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:At([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:At([ae.sprite,ae.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:At([ae.common,ae.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:At([ae.lights,ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};tn.physical={uniforms:At([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Pr={r:0,b:0,g:0};function zd(r,e,t,n,i,s,o){const a=new Xe(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(m,_){let b=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const w=r.xr,M=w.getSession&&w.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?p(a,l):v&&v.isColor&&(p(v,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Vr)?(u===void 0&&(u=new Rt(new vn(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Di(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,I,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==Ye,(f!==v||h!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Rt(new ra(2,2),new _n({name:"BackgroundMaterial",uniforms:Di(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==Ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(Pr,kl(r)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(a,l)},render:g}}function Ud(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(F,q,Y,$,j){let te=!1;if(o){const Z=p($,Y,q);c!==Z&&(c=Z,d(c.object)),te=_(F,$,Y,j),te&&b(F,$,Y,j)}else{const Z=q.wireframe===!0;(c.geometry!==$.id||c.program!==Y.id||c.wireframe!==Z)&&(c.geometry=$.id,c.program=Y.id,c.wireframe=Z,te=!0)}j!==null&&t.update(j,34963),(te||u)&&(u=!1,x(F,q,Y,$),j!==null&&r.bindBuffer(34963,t.get(j).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(F){return n.isWebGL2?r.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?r.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function p(F,q,Y){const $=Y.wireframe===!0;let j=a[F.id];j===void 0&&(j={},a[F.id]=j);let te=j[q.id];te===void 0&&(te={},j[q.id]=te);let Z=te[$];return Z===void 0&&(Z=m(h()),te[$]=Z),Z}function m(F){const q=[],Y=[],$=[];for(let j=0;j<i;j++)q[j]=0,Y[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Y,attributeDivisors:$,object:F,attributes:{},index:null}}function _(F,q,Y,$){const j=c.attributes,te=q.attributes;let Z=0;const L=Y.getAttributes();for(const V in L)if(L[V].location>=0){const Q=j[V];let oe=te[V];if(oe===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;Z++}return c.attributesNum!==Z||c.index!==$}function b(F,q,Y,$){const j={},te=q.attributes;let Z=0;const L=Y.getAttributes();for(const V in L)if(L[V].location>=0){let Q=te[V];Q===void 0&&(V==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),V==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),j[V]=oe,Z++}c.attributes=j,c.attributesNum=Z,c.index=$}function v(){const F=c.newAttributes;for(let q=0,Y=F.length;q<Y;q++)F[q]=0}function w(F){M(F,0)}function M(F,q){const Y=c.newAttributes,$=c.enabledAttributes,j=c.attributeDivisors;Y[F]=1,$[F]===0&&(r.enableVertexAttribArray(F),$[F]=1),j[F]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,q),j[F]=q)}function C(){const F=c.newAttributes,q=c.enabledAttributes;for(let Y=0,$=q.length;Y<$;Y++)q[Y]!==F[Y]&&(r.disableVertexAttribArray(Y),q[Y]=0)}function I(F,q,Y,$,j,te){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(F,q,Y,j,te):r.vertexAttribPointer(F,q,Y,$,j,te)}function x(F,q,Y,$){if(n.isWebGL2===!1&&(F.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=$.attributes,te=Y.getAttributes(),Z=q.defaultAttributeValues;for(const L in te){const V=te[L];if(V.location>=0){let K=j[L];if(K===void 0&&(L==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),L==="instanceColor"&&F.instanceColor&&(K=F.instanceColor)),K!==void 0){const Q=K.normalized,oe=K.itemSize,R=t.get(K);if(R===void 0)continue;const fe=R.buffer,me=R.type,Ee=R.bytesPerElement;if(K.isInterleavedBufferAttribute){const pe=K.data,He=pe.stride,Pe=K.offset;if(pe.isInstancedInterleavedBuffer){for(let Te=0;Te<V.locationSize;Te++)M(V.location+Te,pe.meshPerAttribute);F.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Te=0;Te<V.locationSize;Te++)w(V.location+Te);r.bindBuffer(34962,fe);for(let Te=0;Te<V.locationSize;Te++)I(V.location+Te,oe/V.locationSize,me,Q,He*Ee,(Pe+oe/V.locationSize*Te)*Ee)}else{if(K.isInstancedBufferAttribute){for(let pe=0;pe<V.locationSize;pe++)M(V.location+pe,K.meshPerAttribute);F.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pe=0;pe<V.locationSize;pe++)w(V.location+pe);r.bindBuffer(34962,fe);for(let pe=0;pe<V.locationSize;pe++)I(V.location+pe,oe/V.locationSize,me,Q,oe*Ee,oe/V.locationSize*pe*Ee)}}else if(Z!==void 0){const Q=Z[L];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(V.location,Q);break;case 3:r.vertexAttrib3fv(V.location,Q);break;case 4:r.vertexAttrib4fv(V.location,Q);break;default:r.vertexAttrib1fv(V.location,Q)}}}}C()}function A(){ne();for(const F in a){const q=a[F];for(const Y in q){const $=q[Y];for(const j in $)g($[j].object),delete $[j];delete q[Y]}delete a[F]}}function P(F){if(a[F.id]===void 0)return;const q=a[F.id];for(const Y in q){const $=q[Y];for(const j in $)g($[j].object),delete $[j];delete q[Y]}delete a[F.id]}function B(F){for(const q in a){const Y=a[q];if(Y[F.id]===void 0)continue;const $=Y[F.id];for(const j in $)g($[j].object),delete $[j];delete Y[F.id]}}function ne(){z(),u=!0,c!==l&&(c=l,d(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ne,resetDefaultState:z,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:w,disableUnusedAttributes:C}}function kd(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(i)h=r,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Bd(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),d=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),m=r.getParameter(36347),_=r.getParameter(36348),b=r.getParameter(36349),v=h>0,w=o||e.has("OES_texture_float"),M=v&&w,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:M,maxSamples:C}}function Gd(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Gn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,d){const g=f.length!==0||h||n!==0||i;return i=h,t=u(f,d,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,d){const g=f.clippingPlanes,p=f.clipIntersection,m=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,v=b*4;let w=_.clippingState||null;l.value=w,w=u(g,h,v,d);for(let M=0;M!==v;++M)w[M]=t[M];_.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const p=f!==null?f.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=d+p*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,w=d;v!==p;++v,w+=4)o.copy(f[v]).applyMatrix4(b,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function Vd(r){let e=new WeakMap;function t(o,a){return a===zs?o.mapping=Ci:a===Us&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===zs||a===Us)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ef(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class sa extends na{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mi=4,ho=[.125,.215,.35,.446,.526,.582],Hn=20,Ts=new sa,po=new Xe;let As=null;const Vn=(1+Math.sqrt(5))/2,bi=1/Vn,mo=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Vn,bi),new k(0,Vn,-bi),new k(bi,0,Vn),new k(-bi,0,Vn),new k(Vn,bi,0),new k(-Vn,bi,0)];class go{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){As=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(As),e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),As=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Qi,format:Jt,encoding:Tn,depthBuffer:!1},i=_o(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_o(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hd(s)),this._blurMaterial=Wd(s,e,t)}return i}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,Ts)}_sceneToCubeUV(e,t,n,i){const a=new St(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(po),u.toneMapping=sn,u.autoClear=!1;const d=new Nl({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new Rt(new vn,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(po),p=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const v=this._cubeSize;Dr(i,b*v,_>2?v:0,v,v),u.setRenderTarget(i),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ci||e.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xo());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Dr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ts)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=mo[(i-1)%mo.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Rt(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Hn-1),p=s/g,m=isFinite(s)?1+Math.floor(u*p):Hn;m>Hn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hn}`);const _=[];let b=0;for(let I=0;I<Hn;++I){const x=I/p,A=Math.exp(-x*x/2);_.push(A),I===0?b+=A:I<m&&(b+=2*A)}for(let I=0;I<_.length;I++)_[I]=_[I]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const w=this._sizeLods[i],M=3*w*(i>v-Mi?i-v+Mi:0),C=4*(this._cubeSize-w);Dr(t,M,C,3*w,2*w),l.setRenderTarget(t),l.render(f,Ts)}}function Hd(r){const e=[],t=[],n=[];let i=r;const s=r-Mi+1+ho.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Mi?l=ho[o-r+Mi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,p=3,m=2,_=1,b=new Float32Array(p*g*d),v=new Float32Array(m*g*d),w=new Float32Array(_*g*d);for(let C=0;C<d;C++){const I=C%3*2/3-1,x=C>2?0:-1,A=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];b.set(A,p*g*C),v.set(h,m*g*C);const P=[C,C,C,C,C,C];w.set(P,_*g*C)}const M=new xn;M.setAttribute("position",new an(b,p)),M.setAttribute("uv",new an(v,m)),M.setAttribute("faceIndex",new an(w,_)),e.push(M),i>Mi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _o(r,e,t){const n=new An(r,e,t);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Wd(r,e,t){const n=new Float32Array(Hn),i=new k(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:aa(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function xo(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function vo(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function aa(){return`

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
	`}function jd(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===zs||l===Us,u=l===Ci||l===Li;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new go(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new go(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function qd(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xd(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const d=f.morphAttributes;for(const g in d){const p=d[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let p=0;if(d!==null){const b=d.array;p=d.version;for(let v=0,w=b.length;v<w;v+=3){const M=b[v+0],C=b[v+1],I=b[v+2];h.push(M,C,C,I,I,M)}}else{const b=g.array;p=g.version;for(let v=0,w=b.length/3-1;v<w;v+=3){const M=v+0,C=v+1,I=v+2;h.push(M,C,C,I,I,M)}}const m=new(Pl(h)?Ul:zl)(h,1);m.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function $d(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){r.drawElements(s,d,a,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let p,m;if(i)p=r,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,d,a,h*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Yd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zd(r,e){return r[0]-e[0]}function Kd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Jd(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new vt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==m){let Y=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",Y)};var g=Y;_!==void 0&&_.texture.dispose();const w=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let P=0;w===!0&&(P=1),M===!0&&(P=2),C===!0&&(P=3);let B=u.attributes.position.count*P,ne=1;B>e.maxTextureSize&&(ne=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const z=new Float32Array(B*ne*4*m),F=new Fl(z,B,ne,m);F.type=jn,F.needsUpdate=!0;const q=P*4;for(let $=0;$<m;$++){const j=I[$],te=x[$],Z=A[$],L=B*ne*4*$;for(let V=0;V<j.count;V++){const K=V*q;w===!0&&(o.fromBufferAttribute(j,V),z[L+K+0]=o.x,z[L+K+1]=o.y,z[L+K+2]=o.z,z[L+K+3]=0),M===!0&&(o.fromBufferAttribute(te,V),z[L+K+4]=o.x,z[L+K+5]=o.y,z[L+K+6]=o.z,z[L+K+7]=0),C===!0&&(o.fromBufferAttribute(Z,V),z[L+K+8]=o.x,z[L+K+9]=o.y,z[L+K+10]=o.z,z[L+K+11]=Z.itemSize===4?o.w:1)}}_={count:m,texture:F,size:new Le(B,ne)},s.set(u,_),u.addEventListener("dispose",Y)}let b=0;for(let w=0;w<d.length;w++)b+=d[w];const v=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(r,"morphTargetBaseInfluence",v),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const p=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==p){m=[];for(let M=0;M<p;M++)m[M]=[M,0];n[u.id]=m}for(let M=0;M<p;M++){const C=m[M];C[0]=M,C[1]=d[M]}m.sort(Kd);for(let M=0;M<8;M++)M<p&&m[M][1]?(a[M][0]=m[M][0],a[M][1]=m[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Zd);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const C=a[M],I=C[0],x=C[1];I!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+M)!==_[I]&&u.setAttribute("morphTarget"+M,_[I]),b&&u.getAttribute("morphNormal"+M)!==b[I]&&u.setAttribute("morphNormal"+M,b[I]),i[M]=x,v+=x):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),b&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const w=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Qd(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Hl=new It,Wl=new Fl,jl=new ku,ql=new Gl,bo=[],yo=[],Mo=new Float32Array(16),So=new Float32Array(9),wo=new Float32Array(4);function Ii(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=bo[i];if(s===void 0&&(s=new Float32Array(i),bo[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ht(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function dt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Hr(r,e){let t=yo[e];t===void 0&&(t=new Int32Array(e),yo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ep(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function tp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;r.uniform2fv(this.addr,e),dt(t,e)}}function np(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;r.uniform3fv(this.addr,e),dt(t,e)}}function ip(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;r.uniform4fv(this.addr,e),dt(t,e)}}function rp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;wo.set(n),r.uniformMatrix2fv(this.addr,!1,wo),dt(t,n)}}function sp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;So.set(n),r.uniformMatrix3fv(this.addr,!1,So),dt(t,n)}}function ap(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Mo.set(n),r.uniformMatrix4fv(this.addr,!1,Mo),dt(t,n)}}function op(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function lp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;r.uniform2iv(this.addr,e),dt(t,e)}}function cp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;r.uniform3iv(this.addr,e),dt(t,e)}}function up(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;r.uniform4iv(this.addr,e),dt(t,e)}}function fp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function hp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;r.uniform2uiv(this.addr,e),dt(t,e)}}function dp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;r.uniform3uiv(this.addr,e),dt(t,e)}}function pp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;r.uniform4uiv(this.addr,e),dt(t,e)}}function mp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Hl,i)}function gp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jl,i)}function _p(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ql,i)}function xp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wl,i)}function vp(r){switch(r){case 5126:return ep;case 35664:return tp;case 35665:return np;case 35666:return ip;case 35674:return rp;case 35675:return sp;case 35676:return ap;case 5124:case 35670:return op;case 35667:case 35671:return lp;case 35668:case 35672:return cp;case 35669:case 35673:return up;case 5125:return fp;case 36294:return hp;case 36295:return dp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return xp}}function bp(r,e){r.uniform1fv(this.addr,e)}function yp(r,e){const t=Ii(e,this.size,2);r.uniform2fv(this.addr,t)}function Mp(r,e){const t=Ii(e,this.size,3);r.uniform3fv(this.addr,t)}function Sp(r,e){const t=Ii(e,this.size,4);r.uniform4fv(this.addr,t)}function wp(r,e){const t=Ii(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ep(r,e){const t=Ii(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Tp(r,e){const t=Ii(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ap(r,e){r.uniform1iv(this.addr,e)}function Cp(r,e){r.uniform2iv(this.addr,e)}function Lp(r,e){r.uniform3iv(this.addr,e)}function Pp(r,e){r.uniform4iv(this.addr,e)}function Dp(r,e){r.uniform1uiv(this.addr,e)}function Rp(r,e){r.uniform2uiv(this.addr,e)}function Ip(r,e){r.uniform3uiv(this.addr,e)}function Fp(r,e){r.uniform4uiv(this.addr,e)}function Op(r,e,t){const n=this.cache,i=e.length,s=Hr(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Hl,s[o])}function Np(r,e,t){const n=this.cache,i=e.length,s=Hr(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||jl,s[o])}function zp(r,e,t){const n=this.cache,i=e.length,s=Hr(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ql,s[o])}function Up(r,e,t){const n=this.cache,i=e.length,s=Hr(t,i);ht(n,s)||(r.uniform1iv(this.addr,s),dt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wl,s[o])}function kp(r){switch(r){case 5126:return bp;case 35664:return yp;case 35665:return Mp;case 35666:return Sp;case 35674:return wp;case 35675:return Ep;case 35676:return Tp;case 5124:case 35670:return Ap;case 35667:case 35671:return Cp;case 35668:case 35672:return Lp;case 35669:case 35673:return Pp;case 5125:return Dp;case 36294:return Rp;case 36295:return Ip;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Up}}class Bp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=vp(t.type)}}class Gp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=kp(t.type)}}class Vp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Cs=/(\w+)(\])?(\[|\.)?/g;function Eo(r,e){r.seq.push(e),r.map[e.id]=e}function Hp(r,e,t){const n=r.name,i=n.length;for(Cs.lastIndex=0;;){const s=Cs.exec(n),o=Cs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Eo(t,c===void 0?new Bp(a,r,e):new Gp(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Vp(a),Eo(t,f)),t=f}}}class Or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Hp(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function To(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Wp=0;function jp(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function qp(r){switch(r){case Tn:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ao(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+jp(r.getShaderSource(e),o)}else return i}function Xp(r,e){const t=qp(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $p(r,e){let t;switch(e){case du:t="Linear";break;case pu:t="Reinhard";break;case mu:t="OptimizedCineon";break;case Tl:t="ACESFilmic";break;case gu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Yp(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qi).join(`
`)}function Zp(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kp(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function qi(r){return r!==""}function Co(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hs(r){return r.replace(Jp,Qp)}function Qp(r,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Hs(t)}const em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Po(r){return r.replace(em,tm)}function tm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Do(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function im(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ci:case Li:e="ENVMAP_TYPE_CUBE";break;case Vr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function sm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case El:e="ENVMAP_BLENDING_MULTIPLY";break;case fu:e="ENVMAP_BLENDING_MIX";break;case hu:e="ENVMAP_BLENDING_ADD";break}return e}function am(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function om(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=nm(t),c=im(t),u=rm(t),f=sm(t),h=am(t),d=t.isWebGL2?"":Yp(t),g=Zp(s),p=i.createProgram();let m,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(qi).join(`
`),m.length>0&&(m+=`
`),_=[d,g].filter(qi).join(`
`),_.length>0&&(_+=`
`)):(m=[Do(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),_=[d,Do(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sn?"#define TONE_MAPPING":"",t.toneMapping!==sn?De.tonemapping_pars_fragment:"",t.toneMapping!==sn?$p("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,Xp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qi).join(`
`)),o=Hs(o),o=Co(o,t),o=Lo(o,t),a=Hs(a),a=Co(a,t),a=Lo(a,t),o=Po(o),a=Po(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=b+m+o,w=b+_+a,M=To(i,35633,v),C=To(i,35632,w);if(i.attachShader(p,M),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(M).trim(),B=i.getShaderInfoLog(C).trim();let ne=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){ne=!1;const F=Ao(i,M,"vertex"),q=Ao(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+F+`
`+q)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(P===""||B==="")&&(z=!1);z&&(this.diagnostics={runnable:ne,programLog:A,vertexShader:{log:P,prefix:m},fragmentShader:{log:B,prefix:_}})}i.deleteShader(M),i.deleteShader(C);let I;this.getUniforms=function(){return I===void 0&&(I=new Or(i,p)),I};let x;return this.getAttributes=function(){return x===void 0&&(x=Kp(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Wp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=C,this}let lm=0;class cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new um(e),t.set(e,n)),n}}class um{constructor(e){this.id=lm++,this.code=e,this.usedTimes=0}}function fm(r,e,t,n,i,s,o){const a=new ta,l=new cm,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,A,P,B,ne){const z=B.fog,F=ne.geometry,q=x.isMeshStandardMaterial?B.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),$=Y&&Y.mapping===Vr?Y.image.height:null,j=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const te=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Z=te!==void 0?te.length:0;let L=0;F.morphAttributes.position!==void 0&&(L=1),F.morphAttributes.normal!==void 0&&(L=2),F.morphAttributes.color!==void 0&&(L=3);let V,K,Q,oe;if(j){const He=tn[j];V=He.vertexShader,K=He.fragmentShader}else V=x.vertexShader,K=x.fragmentShader,l.update(x),Q=l.getVertexShaderID(x),oe=l.getFragmentShaderID(x);const R=r.getRenderTarget(),fe=x.alphaTest>0,me=x.clearcoat>0,Ee=x.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:x.type,vertexShader:V,fragmentShader:K,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:h,outputEncoding:R===null?r.outputEncoding:R.isXRRenderTarget===!0?R.texture.encoding:Tn,map:!!x.map,matcap:!!x.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:$,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Ou,tangentSpaceNormalMap:x.normalMapType===Ll,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ye,clearcoat:me,clearcoatMap:me&&!!x.clearcoatMap,clearcoatRoughnessMap:me&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!x.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!x.iridescenceMap,iridescenceThicknessMap:Ee&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Ei,alphaMap:!!x.alphaMap,alphaTest:fe,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!F.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ne.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:L,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:sn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qs,flipSided:x.side===jt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)A.push(P),A.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(_(A,x),b(A,x),A.push(r.outputEncoding)),A.push(x.customProgramCacheKey),A.join()}function _(x,A){x.push(A.precision),x.push(A.outputEncoding),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.combine),x.push(A.vertexUvs),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function b(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),x.push(a.mask)}function v(x){const A=g[x.type];let P;if(A){const B=tn[A];P=Bl.clone(B.uniforms)}else P=x.uniforms;return P}function w(x,A){let P;for(let B=0,ne=c.length;B<ne;B++){const z=c[B];if(z.cacheKey===A){P=z,++P.usedTimes;break}}return P===void 0&&(P=new om(r,A,x,s),c.push(P)),P}function M(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),x.destroy()}}function C(x){l.remove(x)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:w,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:I}}function hm(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function dm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ro(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Io(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,d,g,p,m){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:p,group:m},r[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=d,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=m),e++,_}function a(f,h,d,g,p,m){const _=o(f,h,d,g,p,m);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):t.push(_)}function l(f,h,d,g,p,m){const _=o(f,h,d,g,p,m);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||dm),n.length>1&&n.sort(h||Ro),i.length>1&&i.sort(h||Ro)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function pm(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Io,r.set(n,[o])):i>=s.length?(o=new Io,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function mm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Xe};break;case"SpotLight":t={position:new k,direction:new k,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function gm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let _m=0;function xm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vm(r,e){const t=new mm,n=gm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new k);const s=new k,o=new at,a=new at;function l(u,f){let h=0,d=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,m=0,_=0,b=0,v=0,w=0,M=0,C=0,I=0,x=0;u.sort(xm);const A=f!==!0?Math.PI:1;for(let B=0,ne=u.length;B<ne;B++){const z=u[B],F=z.color,q=z.intensity,Y=z.distance,$=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=F.r*q*A,d+=F.g*q*A,g+=F.b*q*A;else if(z.isLightProbe)for(let j=0;j<9;j++)i.probe[j].addScaledVector(z.sh.coefficients[j],q);else if(z.isDirectionalLight){const j=t.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity*A),z.castShadow){const te=z.shadow,Z=n.get(z);Z.shadowBias=te.bias,Z.shadowNormalBias=te.normalBias,Z.shadowRadius=te.radius,Z.shadowMapSize=te.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=z.shadow.matrix,w++}i.directional[p]=j,p++}else if(z.isSpotLight){const j=t.get(z);j.position.setFromMatrixPosition(z.matrixWorld),j.color.copy(F).multiplyScalar(q*A),j.distance=Y,j.coneCos=Math.cos(z.angle),j.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),j.decay=z.decay,i.spot[_]=j;const te=z.shadow;if(z.map&&(i.spotLightMap[I]=z.map,I++,te.updateMatrices(z),z.castShadow&&x++),i.spotLightMatrix[_]=te.matrix,z.castShadow){const Z=n.get(z);Z.shadowBias=te.bias,Z.shadowNormalBias=te.normalBias,Z.shadowRadius=te.radius,Z.shadowMapSize=te.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=$,C++}_++}else if(z.isRectAreaLight){const j=t.get(z);j.color.copy(F).multiplyScalar(q),j.halfWidth.set(z.width*.5,0,0),j.halfHeight.set(0,z.height*.5,0),i.rectArea[b]=j,b++}else if(z.isPointLight){const j=t.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity*A),j.distance=z.distance,j.decay=z.decay,z.castShadow){const te=z.shadow,Z=n.get(z);Z.shadowBias=te.bias,Z.shadowNormalBias=te.normalBias,Z.shadowRadius=te.radius,Z.shadowMapSize=te.mapSize,Z.shadowCameraNear=te.camera.near,Z.shadowCameraFar=te.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=z.shadow.matrix,M++}i.point[m]=j,m++}else if(z.isHemisphereLight){const j=t.get(z);j.skyColor.copy(z.color).multiplyScalar(q*A),j.groundColor.copy(z.groundColor).multiplyScalar(q*A),i.hemi[v]=j,v++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==p||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==b||P.hemiLength!==v||P.numDirectionalShadows!==w||P.numPointShadows!==M||P.numSpotShadows!==C||P.numSpotMaps!==I)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=b,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=C+I-x,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=x,P.directionalLength=p,P.pointLength=m,P.spotLength=_,P.rectAreaLength=b,P.hemiLength=v,P.numDirectionalShadows=w,P.numPointShadows=M,P.numSpotShadows=C,P.numSpotMaps=I,i.version=_m++)}function c(u,f){let h=0,d=0,g=0,p=0,m=0;const _=f.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const w=u[b];if(w.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),h++}else if(w.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const M=i.rectArea[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(w.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(_),d++}else if(w.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function Fo(r,e){const t=new vm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function bm(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Fo(r,e),t.set(s,[l])):o>=a.length?(l=new Fo(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ym extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mm extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wm=`uniform sampler2D shadow_pass;
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
}`;function Em(r,e,t){let n=new ia;const i=new Le,s=new Le,o=new vt,a=new ym({depthPacking:Fu}),l=new Mm,c={},u=t.maxTextureSize,f={0:jt,1:Qn,2:Qs},h=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Sm,fragmentShader:wm}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Rt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl,this.render=function(w,M,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const I=r.getRenderTarget(),x=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),P=r.state;P.setBlending(En),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let B=0,ne=w.length;B<ne;B++){const z=w[B],F=z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const q=F.getFrameExtents();if(i.multiply(q),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,F.mapSize.y=s.y)),F.map===null){const $=this.type!==ji?{minFilter:Ct,magFilter:Ct}:{};F.map=new An(i.x,i.y,$),F.map.texture.name=z.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const Y=F.getViewportCount();for(let $=0;$<Y;$++){const j=F.getViewport($);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),P.viewport(o),F.updateMatrices(z,$),n=F.getFrustum(),v(M,C,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===ji&&_(F,C),F.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(I,x,A)};function _(w,M){const C=e.update(p);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new An(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(M,null,C,h,p,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(M,null,C,d,p,null)}function b(w,M,C,I,x,A){let P=null;const B=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0)P=B;else if(P=C.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const ne=P.uuid,z=M.uuid;let F=c[ne];F===void 0&&(F={},c[ne]=F);let q=F[z];q===void 0&&(q=P.clone(),F[z]=q),P=q}return P.visible=M.visible,P.wireframe=M.wireframe,A===ji?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:f[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,C.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(C.matrixWorld),P.nearDistance=I,P.farDistance=x),P}function v(w,M,C,I,x){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===ji)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const B=e.update(w),ne=w.material;if(Array.isArray(ne)){const z=B.groups;for(let F=0,q=z.length;F<q;F++){const Y=z[F],$=ne[Y.materialIndex];if($&&$.visible){const j=b(w,$,I,C.near,C.far,x);r.renderBufferDirect(C,null,B,j,w,Y)}}}else if(ne.visible){const z=b(w,ne,I,C.near,C.far,x);r.renderBufferDirect(C,null,B,z,w,null)}}const P=w.children;for(let B=0,ne=P.length;B<ne;B++)v(P[B],M,C,I,x)}}function Tm(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const H=new vt;let J=null;const he=new vt(0,0,0,0);return{setMask:function(ye){J!==ye&&!D&&(r.colorMask(ye,ye,ye,ye),J=ye)},setLocked:function(ye){D=ye},setClear:function(ye,We,mt,yt,Fn){Fn===!0&&(ye*=yt,We*=yt,mt*=yt),H.set(ye,We,mt,yt),he.equals(H)===!1&&(r.clearColor(ye,We,mt,yt),he.copy(H))},reset:function(){D=!1,J=null,he.set(-1,0,0,0)}}}function s(){let D=!1,H=null,J=null,he=null;return{setTest:function(ye){ye?fe(2929):me(2929)},setMask:function(ye){H!==ye&&!D&&(r.depthMask(ye),H=ye)},setFunc:function(ye){if(J!==ye){switch(ye){case ru:r.depthFunc(512);break;case su:r.depthFunc(519);break;case au:r.depthFunc(513);break;case Ns:r.depthFunc(515);break;case ou:r.depthFunc(514);break;case lu:r.depthFunc(518);break;case cu:r.depthFunc(516);break;case uu:r.depthFunc(517);break;default:r.depthFunc(515)}J=ye}},setLocked:function(ye){D=ye},setClear:function(ye){he!==ye&&(r.clearDepth(ye),he=ye)},reset:function(){D=!1,H=null,J=null,he=null}}}function o(){let D=!1,H=null,J=null,he=null,ye=null,We=null,mt=null,yt=null,Fn=null;return{setTest:function(Ze){D||(Ze?fe(2960):me(2960))},setMask:function(Ze){H!==Ze&&!D&&(r.stencilMask(Ze),H=Ze)},setFunc:function(Ze,on,Gt){(J!==Ze||he!==on||ye!==Gt)&&(r.stencilFunc(Ze,on,Gt),J=Ze,he=on,ye=Gt)},setOp:function(Ze,on,Gt){(We!==Ze||mt!==on||yt!==Gt)&&(r.stencilOp(Ze,on,Gt),We=Ze,mt=on,yt=Gt)},setLocked:function(Ze){D=Ze},setClear:function(Ze){Fn!==Ze&&(r.clearStencil(Ze),Fn=Ze)},reset:function(){D=!1,H=null,J=null,he=null,ye=null,We=null,mt=null,yt=null,Fn=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,p=[],m=null,_=!1,b=null,v=null,w=null,M=null,C=null,I=null,x=null,A=!1,P=null,B=null,ne=null,z=null,F=null;const q=r.getParameter(35661);let Y=!1,$=0;const j=r.getParameter(7938);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=$>=2);let te=null,Z={};const L=r.getParameter(3088),V=r.getParameter(2978),K=new vt().fromArray(L),Q=new vt().fromArray(V);function oe(D,H,J){const he=new Uint8Array(4),ye=r.createTexture();r.bindTexture(D,ye),r.texParameteri(D,10241,9728),r.texParameteri(D,10240,9728);for(let We=0;We<J;We++)r.texImage2D(H+We,0,6408,1,1,0,6408,5121,he);return ye}const R={};R[3553]=oe(3553,3553,1),R[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(2929),l.setFunc(Ns),ct(!1),wt(wa),fe(2884),pt(En);function fe(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function me(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Ee(D,H){return d[D]!==H?(r.bindFramebuffer(D,H),d[D]=H,n&&(D===36009&&(d[36160]=H),D===36160&&(d[36009]=H)),!0):!1}function pe(D,H){let J=p,he=!1;if(D)if(J=g.get(H),J===void 0&&(J=[],g.set(H,J)),D.isWebGLMultipleRenderTargets){const ye=D.texture;if(J.length!==ye.length||J[0]!==36064){for(let We=0,mt=ye.length;We<mt;We++)J[We]=36064+We;J.length=ye.length,he=!0}}else J[0]!==36064&&(J[0]=36064,he=!0);else J[0]!==1029&&(J[0]=1029,he=!0);he&&(t.isWebGL2?r.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function He(D){return m!==D?(r.useProgram(D),m=D,!0):!1}const Pe={[yi]:32774,[Xc]:32778,[$c]:32779};if(n)Pe[Ca]=32775,Pe[La]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Pe[Ca]=D.MIN_EXT,Pe[La]=D.MAX_EXT)}const Te={[Yc]:0,[Zc]:1,[Kc]:768,[Sl]:770,[iu]:776,[tu]:774,[Qc]:772,[Jc]:769,[wl]:771,[nu]:775,[eu]:773};function pt(D,H,J,he,ye,We,mt,yt){if(D===En){_===!0&&(me(3042),_=!1);return}if(_===!1&&(fe(3042),_=!0),D!==qc){if(D!==b||yt!==A){if((v!==yi||C!==yi)&&(r.blendEquation(32774),v=yi,C=yi),yt)switch(D){case Ei:r.blendFuncSeparate(1,771,1,771);break;case Ea:r.blendFunc(1,1);break;case Ta:r.blendFuncSeparate(0,769,0,1);break;case Aa:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ei:r.blendFuncSeparate(770,771,1,771);break;case Ea:r.blendFunc(770,1);break;case Ta:r.blendFuncSeparate(0,769,0,1);break;case Aa:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,M=null,I=null,x=null,b=D,A=yt}return}ye=ye||H,We=We||J,mt=mt||he,(H!==v||ye!==C)&&(r.blendEquationSeparate(Pe[H],Pe[ye]),v=H,C=ye),(J!==w||he!==M||We!==I||mt!==x)&&(r.blendFuncSeparate(Te[J],Te[he],Te[We],Te[mt]),w=J,M=he,I=We,x=mt),b=D,A=!1}function lt(D,H){D.side===Qs?me(2884):fe(2884);let J=D.side===jt;H&&(J=!J),ct(J),D.blending===Ei&&D.transparent===!1?pt(En):pt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const he=D.stencilWrite;c.setTest(he),he&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),je(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(32926):me(32926)}function ct(D){P!==D&&(D?r.frontFace(2304):r.frontFace(2305),P=D)}function wt(D){D!==Wc?(fe(2884),D!==B&&(D===wa?r.cullFace(1029):D===jc?r.cullFace(1028):r.cullFace(1032))):me(2884),B=D}function tt(D){D!==ne&&(Y&&r.lineWidth(D),ne=D)}function je(D,H,J){D?(fe(32823),(z!==H||F!==J)&&(r.polygonOffset(H,J),z=H,F=J)):me(32823)}function Bt(D){D?fe(3089):me(3089)}function Lt(D){D===void 0&&(D=33984+q-1),te!==D&&(r.activeTexture(D),te=D)}function E(D,H,J){J===void 0&&(te===null?J=33984+q-1:J=te);let he=Z[J];he===void 0&&(he={type:void 0,texture:void 0},Z[J]=he),(he.type!==D||he.texture!==H)&&(te!==J&&(r.activeTexture(J),te=J),r.bindTexture(D,H||R[D]),he.type=D,he.texture=H)}function y(){const D=Z[te];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function G(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function T(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){K.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),K.copy(D))}function ve(D){Q.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Q.copy(D))}function Oe(D,H){let J=f.get(H);J===void 0&&(J=new WeakMap,f.set(H,J));let he=J.get(D);he===void 0&&(he=r.getUniformBlockIndex(H,D.name),J.set(D,he))}function Ne(D,H){const he=f.get(H).get(D);u.get(H)!==he&&(r.uniformBlockBinding(H,he,D.__bindingPointIndex),u.set(H,he))}function qe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},te=null,Z={},d={},g=new WeakMap,p=[],m=null,_=!1,b=null,v=null,w=null,M=null,C=null,I=null,x=null,A=!1,P=null,B=null,ne=null,z=null,F=null,K.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:fe,disable:me,bindFramebuffer:Ee,drawBuffers:pe,useProgram:He,setBlending:pt,setMaterial:lt,setFlipSided:ct,setCullFace:wt,setLineWidth:tt,setPolygonOffset:je,setScissorTest:Bt,activeTexture:Lt,bindTexture:E,unbindTexture:y,compressedTexImage2D:G,compressedTexImage3D:ee,texImage2D:de,texImage3D:ce,updateUBOMapping:Oe,uniformBlockBinding:Ne,texStorage2D:O,texStorage3D:ue,texSubImage2D:re,texSubImage3D:le,compressedTexSubImage2D:Ae,compressedTexSubImage3D:T,scissor:be,viewport:ve,reset:qe}}function Am(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,y){return _?new OffscreenCanvas(E,y):tr("canvas")}function v(E,y,G,ee){let re=1;if((E.width>ee||E.height>ee)&&(re=ee/Math.max(E.width,E.height)),re<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const le=y?Vs:Math.floor,Ae=le(re*E.width),T=le(re*E.height);p===void 0&&(p=b(Ae,T));const O=G?b(Ae,T):p;return O.width=Ae,O.height=T,O.getContext("2d").drawImage(E,0,0,Ae,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Ae+"x"+T+")."),O}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function w(E){return to(E.width)&&to(E.height)}function M(E){return a?!1:E.wrapS!==Kt||E.wrapT!==Kt||E.minFilter!==Ct&&E.minFilter!==Ht}function C(E,y){return E.generateMipmaps&&y&&E.minFilter!==Ct&&E.minFilter!==Ht}function I(E){r.generateMipmap(E)}function x(E,y,G,ee,re=!1){if(a===!1)return y;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le=y;return y===6403&&(G===5126&&(le=33326),G===5131&&(le=33325),G===5121&&(le=33321)),y===33319&&(G===5126&&(le=33328),G===5131&&(le=33327),G===5121&&(le=33323)),y===6408&&(G===5126&&(le=34836),G===5131&&(le=34842),G===5121&&(le=ee===Ye&&re===!1?35907:32856),G===32819&&(le=32854),G===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function A(E,y,G){return C(E,G)===!0||E.isFramebufferTexture&&E.minFilter!==Ct&&E.minFilter!==Ht?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function P(E){return E===Ct||E===Pa||E===Jr?9728:9729}function B(E){const y=E.target;y.removeEventListener("dispose",B),z(y),y.isVideoTexture&&g.delete(y)}function ne(E){const y=E.target;y.removeEventListener("dispose",ne),q(y)}function z(E){const y=n.get(E);if(y.__webglInit===void 0)return;const G=E.source,ee=m.get(G);if(ee){const re=ee[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&F(E),Object.keys(ee).length===0&&m.delete(G)}n.remove(E)}function F(E){const y=n.get(E);r.deleteTexture(y.__webglTexture);const G=E.source,ee=m.get(G);delete ee[y.__cacheKey],o.memory.textures--}function q(E){const y=E.texture,G=n.get(E),ee=n.get(y);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)r.deleteFramebuffer(G.__webglFramebuffer[re]),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[re]);else{if(r.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let re=0;re<G.__webglColorRenderbuffer.length;re++)G.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[re]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let re=0,le=y.length;re<le;re++){const Ae=n.get(y[re]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),o.memory.textures--),n.remove(y[re])}n.remove(y),n.remove(E)}let Y=0;function $(){Y=0}function j(){const E=Y;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),Y+=1,E}function te(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.encoding),y.join()}function Z(E,y){const G=n.get(E);if(E.isVideoTexture&&Bt(E),E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(G,E,y);return}}t.bindTexture(3553,G.__webglTexture,33984+y)}function L(E,y){const G=n.get(E);if(E.version>0&&G.__version!==E.version){me(G,E,y);return}t.bindTexture(35866,G.__webglTexture,33984+y)}function V(E,y){const G=n.get(E);if(E.version>0&&G.__version!==E.version){me(G,E,y);return}t.bindTexture(32879,G.__webglTexture,33984+y)}function K(E,y){const G=n.get(E);if(E.version>0&&G.__version!==E.version){Ee(G,E,y);return}t.bindTexture(34067,G.__webglTexture,33984+y)}const Q={[ks]:10497,[Kt]:33071,[Bs]:33648},oe={[Ct]:9728,[Pa]:9984,[Jr]:9986,[Ht]:9729,[_u]:9985,[Ji]:9987};function R(E,y,G){if(G?(r.texParameteri(E,10242,Q[y.wrapS]),r.texParameteri(E,10243,Q[y.wrapT]),(E===32879||E===35866)&&r.texParameteri(E,32882,Q[y.wrapR]),r.texParameteri(E,10240,oe[y.magFilter]),r.texParameteri(E,10241,oe[y.minFilter])):(r.texParameteri(E,10242,33071),r.texParameteri(E,10243,33071),(E===32879||E===35866)&&r.texParameteri(E,32882,33071),(y.wrapS!==Kt||y.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,10240,P(y.magFilter)),r.texParameteri(E,10241,P(y.minFilter)),y.minFilter!==Ct&&y.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===Ct||y.minFilter!==Jr&&y.minFilter!==Ji||y.type===jn&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Qi&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(E,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function fe(E,y){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",B));const ee=y.source;let re=m.get(ee);re===void 0&&(re={},m.set(ee,re));const le=te(y);if(le!==E.__cacheKey){re[le]===void 0&&(re[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),re[le].usedTimes++;const Ae=re[E.__cacheKey];Ae!==void 0&&(re[E.__cacheKey].usedTimes--,Ae.usedTimes===0&&F(y)),E.__cacheKey=le,E.__webglTexture=re[le].texture}return G}function me(E,y,G){let ee=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=35866),y.isData3DTexture&&(ee=32879);const re=fe(E,y),le=y.source;t.bindTexture(ee,E.__webglTexture,33984+G);const Ae=n.get(le);if(le.version!==Ae.__version||re===!0){t.activeTexture(33984+G),r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const T=M(y)&&w(y.image)===!1;let O=v(y.image,T,!1,u);O=Lt(y,O);const ue=w(O)||a,de=s.convert(y.format,y.encoding);let ce=s.convert(y.type),be=x(y.internalFormat,de,ce,y.encoding,y.isVideoTexture);R(ee,y,ue);let ve;const Oe=y.mipmaps,Ne=a&&y.isVideoTexture!==!0,qe=Ae.__version===void 0||re===!0,D=A(y,O,ue);if(y.isDepthTexture)be=6402,a?y.type===jn?be=36012:y.type===Wn?be=33190:y.type===Ti?be=35056:be=33189:y.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===$n&&be===6402&&y.type!==Cl&&y.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Wn,ce=s.convert(y.type)),y.format===Pi&&be===6402&&(be=34041,y.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ti,ce=s.convert(y.type))),qe&&(Ne?t.texStorage2D(3553,1,be,O.width,O.height):t.texImage2D(3553,0,be,O.width,O.height,0,de,ce,null));else if(y.isDataTexture)if(Oe.length>0&&ue){Ne&&qe&&t.texStorage2D(3553,D,be,Oe[0].width,Oe[0].height);for(let H=0,J=Oe.length;H<J;H++)ve=Oe[H],Ne?t.texSubImage2D(3553,H,0,0,ve.width,ve.height,de,ce,ve.data):t.texImage2D(3553,H,be,ve.width,ve.height,0,de,ce,ve.data);y.generateMipmaps=!1}else Ne?(qe&&t.texStorage2D(3553,D,be,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,de,ce,O.data)):t.texImage2D(3553,0,be,O.width,O.height,0,de,ce,O.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ne&&qe&&t.texStorage3D(35866,D,be,Oe[0].width,Oe[0].height,O.depth);for(let H=0,J=Oe.length;H<J;H++)ve=Oe[H],y.format!==Jt?de!==null?Ne?t.compressedTexSubImage3D(35866,H,0,0,0,ve.width,ve.height,O.depth,de,ve.data,0,0):t.compressedTexImage3D(35866,H,be,ve.width,ve.height,O.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage3D(35866,H,0,0,0,ve.width,ve.height,O.depth,de,ce,ve.data):t.texImage3D(35866,H,be,ve.width,ve.height,O.depth,0,de,ce,ve.data)}else{Ne&&qe&&t.texStorage2D(3553,D,be,Oe[0].width,Oe[0].height);for(let H=0,J=Oe.length;H<J;H++)ve=Oe[H],y.format!==Jt?de!==null?Ne?t.compressedTexSubImage2D(3553,H,0,0,ve.width,ve.height,de,ve.data):t.compressedTexImage2D(3553,H,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,H,0,0,ve.width,ve.height,de,ce,ve.data):t.texImage2D(3553,H,be,ve.width,ve.height,0,de,ce,ve.data)}else if(y.isDataArrayTexture)Ne?(qe&&t.texStorage3D(35866,D,be,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,de,ce,O.data)):t.texImage3D(35866,0,be,O.width,O.height,O.depth,0,de,ce,O.data);else if(y.isData3DTexture)Ne?(qe&&t.texStorage3D(32879,D,be,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,de,ce,O.data)):t.texImage3D(32879,0,be,O.width,O.height,O.depth,0,de,ce,O.data);else if(y.isFramebufferTexture){if(qe)if(Ne)t.texStorage2D(3553,D,be,O.width,O.height);else{let H=O.width,J=O.height;for(let he=0;he<D;he++)t.texImage2D(3553,he,be,H,J,0,de,ce,null),H>>=1,J>>=1}}else if(Oe.length>0&&ue){Ne&&qe&&t.texStorage2D(3553,D,be,Oe[0].width,Oe[0].height);for(let H=0,J=Oe.length;H<J;H++)ve=Oe[H],Ne?t.texSubImage2D(3553,H,0,0,de,ce,ve):t.texImage2D(3553,H,be,de,ce,ve);y.generateMipmaps=!1}else Ne?(qe&&t.texStorage2D(3553,D,be,O.width,O.height),t.texSubImage2D(3553,0,0,0,de,ce,O)):t.texImage2D(3553,0,be,de,ce,O);C(y,ue)&&I(ee),Ae.__version=le.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Ee(E,y,G){if(y.image.length!==6)return;const ee=fe(E,y),re=y.source;t.bindTexture(34067,E.__webglTexture,33984+G);const le=n.get(re);if(re.version!==le.__version||ee===!0){t.activeTexture(33984+G),r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const Ae=y.isCompressedTexture||y.image[0].isCompressedTexture,T=y.image[0]&&y.image[0].isDataTexture,O=[];for(let H=0;H<6;H++)!Ae&&!T?O[H]=v(y.image[H],!1,!0,c):O[H]=T?y.image[H].image:y.image[H],O[H]=Lt(y,O[H]);const ue=O[0],de=w(ue)||a,ce=s.convert(y.format,y.encoding),be=s.convert(y.type),ve=x(y.internalFormat,ce,be,y.encoding),Oe=a&&y.isVideoTexture!==!0,Ne=le.__version===void 0||ee===!0;let qe=A(y,ue,de);R(34067,y,de);let D;if(Ae){Oe&&Ne&&t.texStorage2D(34067,qe,ve,ue.width,ue.height);for(let H=0;H<6;H++){D=O[H].mipmaps;for(let J=0;J<D.length;J++){const he=D[J];y.format!==Jt?ce!==null?Oe?t.compressedTexSubImage2D(34069+H,J,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(34069+H,J,ve,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+H,J,0,0,he.width,he.height,ce,be,he.data):t.texImage2D(34069+H,J,ve,he.width,he.height,0,ce,be,he.data)}}}else{D=y.mipmaps,Oe&&Ne&&(D.length>0&&qe++,t.texStorage2D(34067,qe,ve,O[0].width,O[0].height));for(let H=0;H<6;H++)if(T){Oe?t.texSubImage2D(34069+H,0,0,0,O[H].width,O[H].height,ce,be,O[H].data):t.texImage2D(34069+H,0,ve,O[H].width,O[H].height,0,ce,be,O[H].data);for(let J=0;J<D.length;J++){const ye=D[J].image[H].image;Oe?t.texSubImage2D(34069+H,J+1,0,0,ye.width,ye.height,ce,be,ye.data):t.texImage2D(34069+H,J+1,ve,ye.width,ye.height,0,ce,be,ye.data)}}else{Oe?t.texSubImage2D(34069+H,0,0,0,ce,be,O[H]):t.texImage2D(34069+H,0,ve,ce,be,O[H]);for(let J=0;J<D.length;J++){const he=D[J];Oe?t.texSubImage2D(34069+H,J+1,0,0,ce,be,he.image[H]):t.texImage2D(34069+H,J+1,ve,ce,be,he.image[H])}}}C(y,de)&&I(34067),le.__version=re.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function pe(E,y,G,ee,re){const le=s.convert(G.format,G.encoding),Ae=s.convert(G.type),T=x(G.internalFormat,le,Ae,G.encoding);n.get(y).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,T,y.width,y.height,y.depth,0,le,Ae,null):t.texImage2D(re,0,T,y.width,y.height,0,le,Ae,null)),t.bindFramebuffer(36160,E),je(y)?h.framebufferTexture2DMultisampleEXT(36160,ee,re,n.get(G).__webglTexture,0,tt(y)):(re===3553||re>=34069&&re<=34074)&&r.framebufferTexture2D(36160,ee,re,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(E,y,G){if(r.bindRenderbuffer(36161,E),y.depthBuffer&&!y.stencilBuffer){let ee=33189;if(G||je(y)){const re=y.depthTexture;re&&re.isDepthTexture&&(re.type===jn?ee=36012:re.type===Wn&&(ee=33190));const le=tt(y);je(y)?h.renderbufferStorageMultisampleEXT(36161,le,ee,y.width,y.height):r.renderbufferStorageMultisample(36161,le,ee,y.width,y.height)}else r.renderbufferStorage(36161,ee,y.width,y.height);r.framebufferRenderbuffer(36160,36096,36161,E)}else if(y.depthBuffer&&y.stencilBuffer){const ee=tt(y);G&&je(y)===!1?r.renderbufferStorageMultisample(36161,ee,35056,y.width,y.height):je(y)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,y.width,y.height):r.renderbufferStorage(36161,34041,y.width,y.height),r.framebufferRenderbuffer(36160,33306,36161,E)}else{const ee=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let re=0;re<ee.length;re++){const le=ee[re],Ae=s.convert(le.format,le.encoding),T=s.convert(le.type),O=x(le.internalFormat,Ae,T,le.encoding),ue=tt(y);G&&je(y)===!1?r.renderbufferStorageMultisample(36161,ue,O,y.width,y.height):je(y)?h.renderbufferStorageMultisampleEXT(36161,ue,O,y.width,y.height):r.renderbufferStorage(36161,O,y.width,y.height)}}r.bindRenderbuffer(36161,null)}function Pe(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const ee=n.get(y.depthTexture).__webglTexture,re=tt(y);if(y.depthTexture.format===$n)je(y)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,re):r.framebufferTexture2D(36160,36096,3553,ee,0);else if(y.depthTexture.format===Pi)je(y)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,re):r.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function Te(E){const y=n.get(E),G=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Pe(y.__webglFramebuffer,E)}else if(G){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]=r.createRenderbuffer(),He(y.__webglDepthbuffer[ee],E,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),He(y.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function pt(E,y,G){const ee=n.get(E);y!==void 0&&pe(ee.__webglFramebuffer,E,E.texture,36064,3553),G!==void 0&&Te(E)}function lt(E){const y=E.texture,G=n.get(E),ee=n.get(y);E.addEventListener("dispose",ne),E.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=y.version,o.memory.textures++);const re=E.isWebGLCubeRenderTarget===!0,le=E.isWebGLMultipleRenderTargets===!0,Ae=w(E)||a;if(re){G.__webglFramebuffer=[];for(let T=0;T<6;T++)G.__webglFramebuffer[T]=r.createFramebuffer()}else{if(G.__webglFramebuffer=r.createFramebuffer(),le)if(i.drawBuffers){const T=E.texture;for(let O=0,ue=T.length;O<ue;O++){const de=n.get(T[O]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&je(E)===!1){const T=le?y:[y];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let O=0;O<T.length;O++){const ue=T[O];G.__webglColorRenderbuffer[O]=r.createRenderbuffer(),r.bindRenderbuffer(36161,G.__webglColorRenderbuffer[O]);const de=s.convert(ue.format,ue.encoding),ce=s.convert(ue.type),be=x(ue.internalFormat,de,ce,ue.encoding,E.isXRRenderTarget===!0),ve=tt(E);r.renderbufferStorageMultisample(36161,ve,be,E.width,E.height),r.framebufferRenderbuffer(36160,36064+O,36161,G.__webglColorRenderbuffer[O])}r.bindRenderbuffer(36161,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),He(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ee.__webglTexture),R(34067,y,Ae);for(let T=0;T<6;T++)pe(G.__webglFramebuffer[T],E,y,36064,34069+T);C(y,Ae)&&I(34067),t.unbindTexture()}else if(le){const T=E.texture;for(let O=0,ue=T.length;O<ue;O++){const de=T[O],ce=n.get(de);t.bindTexture(3553,ce.__webglTexture),R(3553,de,Ae),pe(G.__webglFramebuffer,E,de,36064+O,3553),C(de,Ae)&&I(3553)}t.unbindTexture()}else{let T=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?T=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,ee.__webglTexture),R(T,y,Ae),pe(G.__webglFramebuffer,E,y,36064,T),C(y,Ae)&&I(T),t.unbindTexture()}E.depthBuffer&&Te(E)}function ct(E){const y=w(E)||a,G=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0,re=G.length;ee<re;ee++){const le=G[ee];if(C(le,y)){const Ae=E.isWebGLCubeRenderTarget?34067:3553,T=n.get(le).__webglTexture;t.bindTexture(Ae,T),I(Ae),t.unbindTexture()}}}function wt(E){if(a&&E.samples>0&&je(E)===!1){const y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],G=E.width,ee=E.height;let re=16384;const le=[],Ae=E.stencilBuffer?33306:36096,T=n.get(E),O=E.isWebGLMultipleRenderTargets===!0;if(O)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){le.push(36064+ue),E.depthBuffer&&le.push(Ae);const de=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(de===!1&&(E.depthBuffer&&(re|=256),E.stencilBuffer&&(re|=1024)),O&&r.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[ue]),de===!0&&(r.invalidateFramebuffer(36008,[Ae]),r.invalidateFramebuffer(36009,[Ae])),O){const ce=n.get(y[ue]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ce,0)}r.blitFramebuffer(0,0,G,ee,0,0,G,ee,re,9728),d&&r.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ue,36161,T.__webglColorRenderbuffer[ue]);const de=n.get(y[ue]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ue,3553,de,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function tt(E){return Math.min(f,E.samples)}function je(E){const y=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Bt(E){const y=o.render.frame;g.get(E)!==y&&(g.set(E,y),E.update())}function Lt(E,y){const G=E.encoding,ee=E.format,re=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Gs||G!==Tn&&(G===Ye?a===!1?e.has("EXT_sRGB")===!0&&ee===Jt?(E.format=Gs,E.minFilter=Ht,E.generateMipmaps=!1):y=Rl.sRGBToLinear(y):(ee!==Jt||re!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),y}this.allocateTextureUnit=j,this.resetTextureUnits=$,this.setTexture2D=Z,this.setTexture2DArray=L,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=pt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=je}function Cm(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===ei)return 5121;if(s===yu)return 32819;if(s===Mu)return 32820;if(s===xu)return 5120;if(s===vu)return 5122;if(s===Cl)return 5123;if(s===bu)return 5124;if(s===Wn)return 5125;if(s===jn)return 5126;if(s===Qi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Su)return 6406;if(s===Jt)return 6408;if(s===Eu)return 6409;if(s===Tu)return 6410;if(s===$n)return 6402;if(s===Pi)return 34041;if(s===wu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Gs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Au)return 6403;if(s===Cu)return 36244;if(s===Lu)return 33319;if(s===Pu)return 33320;if(s===Du)return 36249;if(s===Qr||s===es||s===ts||s===ns)if(o===Ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===es)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===es)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ts)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ns)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Da||s===Ra||s===Ia||s===Fa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Da)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ra)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ia)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ru)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Oa||s===Na)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Oa)return o===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Na)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===za||s===Ua||s===ka||s===Ba||s===Ga||s===Va||s===Ha||s===Wa||s===ja||s===qa||s===Xa||s===$a||s===Ya||s===Za)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===za)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ua)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ka)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ba)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ga)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Va)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ha)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wa)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ja)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qa)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xa)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$a)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ya)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Za)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ka)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ka)return o===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ti?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Lm extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xi extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pm={type:"move"};class Ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,n),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Dm extends It{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:$n,u!==$n&&u!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$n&&(n=Wn),n===void 0&&u===Pi&&(n=Ti),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1}}class Rm extends ni{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,d=null;const g=t.getContextAttributes();let p=null,m=null;const _=[],b=[],v=new Set,w=new Map,M=new St;M.layers.enable(1),M.viewport=new vt;const C=new St;C.layers.enable(2),C.viewport=new vt;const I=[M,C],x=new Lm;x.layers.enable(1),x.layers.enable(2);let A=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let V=_[L];return V===void 0&&(V=new Ls,_[L]=V),V.getTargetRaySpace()},this.getControllerGrip=function(L){let V=_[L];return V===void 0&&(V=new Ls,_[L]=V),V.getGripSpace()},this.getHand=function(L){let V=_[L];return V===void 0&&(V=new Ls,_[L]=V),V.getHandSpace()};function B(L){const V=b.indexOf(L.inputSource);if(V===-1)return;const K=_[V];K!==void 0&&K.dispatchEvent({type:L.type,data:L.inputSource})}function ne(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",ne),i.removeEventListener("inputsourceschange",z);for(let L=0;L<_.length;L++){const V=b[L];V!==null&&(b[L]=null,_[L].disconnect(V))}A=null,P=null,e.setRenderTarget(p),h=null,f=null,u=null,i=null,m=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",ne),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:h}),m=new An(h.framebufferWidth,h.framebufferHeight,{format:Jt,type:ei,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let V=null,K=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,V=g.stencil?Pi:$n,K=g.stencil?Ti:Wn);const oe={colorFormat:32856,depthFormat:Q,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(oe),i.updateRenderState({layers:[f]}),m=new An(f.textureWidth,f.textureHeight,{format:Jt,type:ei,depthTexture:new Dm(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const R=e.properties.get(m);R.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(L){for(let V=0;V<L.removed.length;V++){const K=L.removed[V],Q=b.indexOf(K);Q>=0&&(b[Q]=null,_[Q].disconnect(K))}for(let V=0;V<L.added.length;V++){const K=L.added[V];let Q=b.indexOf(K);if(Q===-1){for(let R=0;R<_.length;R++)if(R>=b.length){b.push(K),Q=R;break}else if(b[R]===null){b[R]=K,Q=R;break}if(Q===-1)break}const oe=_[Q];oe&&oe.connect(K)}}const F=new k,q=new k;function Y(L,V,K){F.setFromMatrixPosition(V.matrixWorld),q.setFromMatrixPosition(K.matrixWorld);const Q=F.distanceTo(q),oe=V.projectionMatrix.elements,R=K.projectionMatrix.elements,fe=oe[14]/(oe[10]-1),me=oe[14]/(oe[10]+1),Ee=(oe[9]+1)/oe[5],pe=(oe[9]-1)/oe[5],He=(oe[8]-1)/oe[0],Pe=(R[8]+1)/R[0],Te=fe*He,pt=fe*Pe,lt=Q/(-He+Pe),ct=lt*-He;V.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(ct),L.translateZ(lt),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const wt=fe+lt,tt=me+lt,je=Te-ct,Bt=pt+(Q-ct),Lt=Ee*me/tt*wt,E=pe*me/tt*wt;L.projectionMatrix.makePerspective(je,Bt,Lt,E,wt,tt)}function $(L,V){V===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(V.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;x.near=C.near=M.near=L.near,x.far=C.far=M.far=L.far,(A!==x.near||P!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,P=x.far);const V=L.parent,K=x.cameras;$(x,V);for(let oe=0;oe<K.length;oe++)$(K[oe],V);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),L.matrix.copy(x.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);const Q=L.children;for(let oe=0,R=Q.length;oe<R;oe++)Q[oe].updateMatrixWorld(!0);K.length===2?Y(x,M,C):x.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(L){f!==null&&(f.fixedFoveation=L),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=L)},this.getPlanes=function(){return v};let j=null;function te(L,V){if(c=V.getViewerPose(l||o),d=V,c!==null){const K=c.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let Q=!1;K.length!==x.cameras.length&&(x.cameras.length=0,Q=!0);for(let oe=0;oe<K.length;oe++){const R=K[oe];let fe=null;if(h!==null)fe=h.getViewport(R);else{const Ee=u.getViewSubImage(f,R);fe=Ee.viewport,oe===0&&(e.setRenderTargetTextures(m,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(m))}let me=I[oe];me===void 0&&(me=new St,me.layers.enable(oe),me.viewport=new vt,I[oe]=me),me.matrix.fromArray(R.transform.matrix),me.projectionMatrix.fromArray(R.projectionMatrix),me.viewport.set(fe.x,fe.y,fe.width,fe.height),oe===0&&x.matrix.copy(me.matrix),Q===!0&&x.cameras.push(me)}}for(let K=0;K<_.length;K++){const Q=b[K],oe=_[K];Q!==null&&oe!==void 0&&oe.update(Q,V,l||o)}if(j&&j(L,V),V.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let K=null;for(const Q of v)V.detectedPlanes.has(Q)||(K===null&&(K=[]),K.push(Q));if(K!==null)for(const Q of K)v.delete(Q),w.delete(Q),n.dispatchEvent({type:"planeremoved",data:Q});for(const Q of V.detectedPlanes)if(!v.has(Q))v.add(Q),w.set(Q,V.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Q});else{const oe=w.get(Q);Q.lastChangedTime>oe&&(w.set(Q,Q.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Q}))}}d=null}const Z=new Vl;Z.setAnimationLoop(te),this.setAnimationLoop=function(L){j=L},this.dispose=function(){}}}function Im(r,e){function t(p,m){m.color.getRGB(p.fogColor.value,kl(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,b,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),u(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,v)):m.isMeshMatcapMaterial?(i(p,m),d(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,_,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===jt&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===jt&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const w=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*w}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let v;m.aoMap?v=m.aoMap:m.lightMap&&(v=m.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,_,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=b*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===jt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Fm(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(b,v){const w=v.program;n.uniformBlockBinding(b,w)}function c(b,v){let w=i[b.id];w===void 0&&(g(b),w=u(b),i[b.id]=w,b.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(b,M);const C=e.render.frame;s[b.id]!==C&&(h(b),s[b.id]=C)}function u(b){const v=f();b.__bindingPointIndex=v;const w=r.createBuffer(),M=b.__size,C=b.usage;return r.bindBuffer(35345,w),r.bufferData(35345,M,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,v,w),w}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const v=i[b.id],w=b.uniforms,M=b.__cache;r.bindBuffer(35345,v);for(let C=0,I=w.length;C<I;C++){const x=w[C];if(d(x,C,M)===!0){const A=x.__offset,P=Array.isArray(x.value)?x.value:[x.value];let B=0;for(let ne=0;ne<P.length;ne++){const z=P[ne],F=p(z);typeof z=="number"?(x.__data[0]=z,r.bufferSubData(35345,A+B,x.__data)):z.isMatrix3?(x.__data[0]=z.elements[0],x.__data[1]=z.elements[1],x.__data[2]=z.elements[2],x.__data[3]=z.elements[0],x.__data[4]=z.elements[3],x.__data[5]=z.elements[4],x.__data[6]=z.elements[5],x.__data[7]=z.elements[0],x.__data[8]=z.elements[6],x.__data[9]=z.elements[7],x.__data[10]=z.elements[8],x.__data[11]=z.elements[0]):(z.toArray(x.__data,B),B+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,A,x.__data)}}r.bindBuffer(35345,null)}function d(b,v,w){const M=b.value;if(w[v]===void 0){if(typeof M=="number")w[v]=M;else{const C=Array.isArray(M)?M:[M],I=[];for(let x=0;x<C.length;x++)I.push(C[x].clone());w[v]=I}return!0}else if(typeof M=="number"){if(w[v]!==M)return w[v]=M,!0}else{const C=Array.isArray(w[v])?w[v]:[w[v]],I=Array.isArray(M)?M:[M];for(let x=0;x<C.length;x++){const A=C[x];if(A.equals(I[x])===!1)return A.copy(I[x]),!0}}return!1}function g(b){const v=b.uniforms;let w=0;const M=16;let C=0;for(let I=0,x=v.length;I<x;I++){const A=v[I],P={boundary:0,storage:0},B=Array.isArray(A.value)?A.value:[A.value];for(let ne=0,z=B.length;ne<z;ne++){const F=B[ne],q=p(F);P.boundary+=q.boundary,P.storage+=q.storage}if(A.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,I>0){C=w%M;const ne=M-C;C!==0&&ne-P.boundary<0&&(w+=M-C,A.__offset=w)}w+=P.storage}return C=w%M,C>0&&(w+=M-C),b.__size=w,b.__cache={},this}function p(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function _(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}function Om(){const r=tr("canvas");return r.style.display="block",r}function Xl(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Om(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,h=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Tn,this.physicallyCorrectLights=!1,this.toneMapping=sn,this.toneMappingExposure=1;const p=this;let m=!1,_=0,b=0,v=null,w=-1,M=null;const C=new vt,I=new vt;let x=null,A=e.width,P=e.height,B=1,ne=null,z=null;const F=new vt(0,0,A,P),q=new vt(0,0,A,P);let Y=!1;const $=new ia;let j=!1,te=!1,Z=null;const L=new at,V=new Le,K=new k,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return v===null?B:1}let R=t;function fe(S,U){for(let W=0;W<S.length;W++){const N=S[W],X=e.getContext(N,U);if(X!==null)return X}return null}try{const S={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Js}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),R===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),R=fe(U,S),R===null)throw fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let me,Ee,pe,He,Pe,Te,pt,lt,ct,wt,tt,je,Bt,Lt,E,y,G,ee,re,le,Ae,T,O,ue;function de(){me=new qd(R),Ee=new Bd(R,me,r),me.init(Ee),T=new Cm(R,me,Ee),pe=new Tm(R,me,Ee),He=new Yd,Pe=new hm,Te=new Am(R,me,pe,Pe,Ee,T,He),pt=new Vd(p),lt=new jd(p),ct=new rf(R,Ee),O=new Ud(R,me,ct,Ee),wt=new Xd(R,ct,He,O),tt=new Qd(R,wt,ct,He),re=new Jd(R,Ee,Te),y=new Gd(Pe),je=new fm(p,pt,lt,me,Ee,O,y),Bt=new Im(p,Pe),Lt=new pm,E=new bm(me,Ee),ee=new zd(p,pt,lt,pe,tt,u,o),G=new Em(p,tt,Ee),ue=new Fm(R,He,Ee,pe),le=new kd(R,me,He,Ee),Ae=new $d(R,me,He,Ee),He.programs=je.programs,p.capabilities=Ee,p.extensions=me,p.properties=Pe,p.renderLists=Lt,p.shadowMap=G,p.state=pe,p.info=He}de();const ce=new Rm(p,R);this.xr=ce,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const S=me.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=me.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(A,P,!1))},this.getSize=function(S){return S.set(A,P)},this.setSize=function(S,U,W){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=S,P=U,e.width=Math.floor(S*B),e.height=Math.floor(U*B),W!==!1&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(A*B,P*B).floor()},this.setDrawingBufferSize=function(S,U,W){A=S,P=U,B=W,e.width=Math.floor(S*W),e.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(F)},this.setViewport=function(S,U,W,N){S.isVector4?F.set(S.x,S.y,S.z,S.w):F.set(S,U,W,N),pe.viewport(C.copy(F).multiplyScalar(B).floor())},this.getScissor=function(S){return S.copy(q)},this.setScissor=function(S,U,W,N){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,U,W,N),pe.scissor(I.copy(q).multiplyScalar(B).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(S){pe.setScissorTest(Y=S)},this.setOpaqueSort=function(S){ne=S},this.setTransparentSort=function(S){z=S},this.getClearColor=function(S){return S.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(S=!0,U=!0,W=!0){let N=0;S&&(N|=16384),U&&(N|=256),W&&(N|=1024),R.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),Lt.dispose(),E.dispose(),Pe.dispose(),pt.dispose(),lt.dispose(),tt.dispose(),O.dispose(),ue.dispose(),je.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",he),ce.removeEventListener("sessionend",ye),Z&&(Z.dispose(),Z=null),We.stop()};function be(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const S=He.autoReset,U=G.enabled,W=G.autoUpdate,N=G.needsUpdate,X=G.type;de(),He.autoReset=S,G.enabled=U,G.autoUpdate=W,G.needsUpdate=N,G.type=X}function Oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ne(S){const U=S.target;U.removeEventListener("dispose",Ne),qe(U)}function qe(S){D(S),Pe.remove(S)}function D(S){const U=Pe.get(S).programs;U!==void 0&&(U.forEach(function(W){je.releaseProgram(W)}),S.isShaderMaterial&&je.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,N,X,Me){U===null&&(U=Q);const Ce=X.isMesh&&X.matrixWorld.determinant()<0,Re=fc(S,U,W,N,X);pe.setMaterial(N,Ce);let Fe=W.index,Be=1;N.wireframe===!0&&(Fe=wt.getWireframeAttribute(W),Be=2);const ze=W.drawRange,Ue=W.attributes.position;let nt=ze.start*Be,Ft=(ze.start+ze.count)*Be;Me!==null&&(nt=Math.max(nt,Me.start*Be),Ft=Math.min(Ft,(Me.start+Me.count)*Be)),Fe!==null?(nt=Math.max(nt,0),Ft=Math.min(Ft,Fe.count)):Ue!=null&&(nt=Math.max(nt,0),Ft=Math.min(Ft,Ue.count));const ln=Ft-nt;if(ln<0||ln===1/0)return;O.setup(X,N,Re,W,Fe);let On,it=le;if(Fe!==null&&(On=ct.get(Fe),it=Ae,it.setIndex(On)),X.isMesh)N.wireframe===!0?(pe.setLineWidth(N.wireframeLinewidth*oe()),it.setMode(1)):it.setMode(4);else if(X.isLine){let ke=N.linewidth;ke===void 0&&(ke=1),pe.setLineWidth(ke*oe()),X.isLineSegments?it.setMode(1):X.isLineLoop?it.setMode(2):it.setMode(3)}else X.isPoints?it.setMode(0):X.isSprite&&it.setMode(4);if(X.isInstancedMesh)it.renderInstances(nt,ln,X.count);else if(W.isInstancedBufferGeometry){const ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Xr=Math.min(W.instanceCount,ke);it.renderInstances(nt,ln,Xr)}else it.render(nt,ln)},this.compile=function(S,U){function W(N,X,Me){N.transparent===!0&&N.side===hr?(N.side=jt,N.needsUpdate=!0,Gt(N,X,Me),N.side=Qn,N.needsUpdate=!0,Gt(N,X,Me),N.side=hr):Gt(N,X,Me)}h=E.get(S),h.init(),g.push(h),S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights(p.physicallyCorrectLights),S.traverse(function(N){const X=N.material;if(X)if(Array.isArray(X))for(let Me=0;Me<X.length;Me++){const Ce=X[Me];W(Ce,S,N)}else W(X,S,N)}),g.pop(),h=null};let H=null;function J(S){H&&H(S)}function he(){We.stop()}function ye(){We.start()}const We=new Vl;We.setAnimationLoop(J),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(S){H=S,ce.setAnimationLoop(S),S===null?We.stop():We.start()},ce.addEventListener("sessionstart",he),ce.addEventListener("sessionend",ye),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,U,v),h=E.get(S,g.length),h.init(),g.push(h),L.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(L),te=this.localClippingEnabled,j=y.init(this.clippingPlanes,te,U),f=Lt.get(S,d.length),f.init(),d.push(f),mt(S,U,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ne,z),j===!0&&y.beginShadows();const W=h.state.shadowsArray;if(G.render(W,S,U),j===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(f,S),h.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const N=U.cameras;for(let X=0,Me=N.length;X<Me;X++){const Ce=N[X];yt(f,S,Ce,Ce.viewport)}}else yt(f,S,U);v!==null&&(Te.updateMultisampleRenderTarget(v),Te.updateRenderTargetMipmap(v)),S.isScene===!0&&S.onAfterRender(p,S,U),O.resetDefaultState(),w=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function mt(S,U,W,N){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){N&&K.setFromMatrixPosition(S.matrixWorld).applyMatrix4(L);const Ce=tt.update(S),Re=S.material;Re.visible&&f.push(S,Ce,Re,W,K.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==He.render.frame&&(S.skeleton.update(),S.skeleton.frame=He.render.frame),!S.frustumCulled||$.intersectsObject(S))){N&&K.setFromMatrixPosition(S.matrixWorld).applyMatrix4(L);const Ce=tt.update(S),Re=S.material;if(Array.isArray(Re)){const Fe=Ce.groups;for(let Be=0,ze=Fe.length;Be<ze;Be++){const Ue=Fe[Be],nt=Re[Ue.materialIndex];nt&&nt.visible&&f.push(S,Ce,nt,W,K.z,Ue)}}else Re.visible&&f.push(S,Ce,Re,W,K.z,null)}}const Me=S.children;for(let Ce=0,Re=Me.length;Ce<Re;Ce++)mt(Me[Ce],U,W,N)}function yt(S,U,W,N){const X=S.opaque,Me=S.transmissive,Ce=S.transparent;h.setupLightsView(W),Me.length>0&&Fn(X,U,W),N&&pe.viewport(C.copy(N)),X.length>0&&Ze(X,U,W),Me.length>0&&Ze(Me,U,W),Ce.length>0&&Ze(Ce,U,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Fn(S,U,W){const N=Ee.isWebGL2;Z===null&&(Z=new An(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Qi:ei,minFilter:Ji,samples:N&&s===!0?4:0})),p.getDrawingBufferSize(V),N?Z.setSize(V.x,V.y):Z.setSize(Vs(V.x),Vs(V.y));const X=p.getRenderTarget();p.setRenderTarget(Z),p.clear();const Me=p.toneMapping;p.toneMapping=sn,Ze(S,U,W),p.toneMapping=Me,Te.updateMultisampleRenderTarget(Z),Te.updateRenderTargetMipmap(Z),p.setRenderTarget(X)}function Ze(S,U,W){const N=U.isScene===!0?U.overrideMaterial:null;for(let X=0,Me=S.length;X<Me;X++){const Ce=S[X],Re=Ce.object,Fe=Ce.geometry,Be=N===null?Ce.material:N,ze=Ce.group;Re.layers.test(W.layers)&&on(Re,U,W,Fe,Be,ze)}}function on(S,U,W,N,X,Me){S.onBeforeRender(p,U,W,N,X,Me),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(p,U,W,N,S,Me),X.transparent===!0&&X.side===hr?(X.side=jt,X.needsUpdate=!0,p.renderBufferDirect(W,U,N,X,S,Me),X.side=Qn,X.needsUpdate=!0,p.renderBufferDirect(W,U,N,X,S,Me),X.side=hr):p.renderBufferDirect(W,U,N,X,S,Me),S.onAfterRender(p,U,W,N,X,Me)}function Gt(S,U,W){U.isScene!==!0&&(U=Q);const N=Pe.get(S),X=h.state.lights,Me=h.state.shadowsArray,Ce=X.state.version,Re=je.getParameters(S,X.state,Me,U,W),Fe=je.getProgramCacheKey(Re);let Be=N.programs;N.environment=S.isMeshStandardMaterial?U.environment:null,N.fog=U.fog,N.envMap=(S.isMeshStandardMaterial?lt:pt).get(S.envMap||N.environment),Be===void 0&&(S.addEventListener("dispose",Ne),Be=new Map,N.programs=Be);let ze=Be.get(Fe);if(ze!==void 0){if(N.currentProgram===ze&&N.lightsStateVersion===Ce)return ua(S,Re),ze}else Re.uniforms=je.getUniforms(S),S.onBuild(W,Re,p),S.onBeforeCompile(Re,p),ze=je.acquireProgram(Re,Fe),Be.set(Fe,ze),N.uniforms=Re.uniforms;const Ue=N.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=y.uniform),ua(S,Re),N.needsLights=dc(S),N.lightsStateVersion=Ce,N.needsLights&&(Ue.ambientLightColor.value=X.state.ambient,Ue.lightProbe.value=X.state.probe,Ue.directionalLights.value=X.state.directional,Ue.directionalLightShadows.value=X.state.directionalShadow,Ue.spotLights.value=X.state.spot,Ue.spotLightShadows.value=X.state.spotShadow,Ue.rectAreaLights.value=X.state.rectArea,Ue.ltc_1.value=X.state.rectAreaLTC1,Ue.ltc_2.value=X.state.rectAreaLTC2,Ue.pointLights.value=X.state.point,Ue.pointLightShadows.value=X.state.pointShadow,Ue.hemisphereLights.value=X.state.hemi,Ue.directionalShadowMap.value=X.state.directionalShadowMap,Ue.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ue.spotShadowMap.value=X.state.spotShadowMap,Ue.spotLightMatrix.value=X.state.spotLightMatrix,Ue.spotLightMap.value=X.state.spotLightMap,Ue.pointShadowMap.value=X.state.pointShadowMap,Ue.pointShadowMatrix.value=X.state.pointShadowMatrix);const nt=ze.getUniforms(),Ft=Or.seqWithValue(nt.seq,Ue);return N.currentProgram=ze,N.uniformsList=Ft,ze}function ua(S,U){const W=Pe.get(S);W.outputEncoding=U.outputEncoding,W.instancing=U.instancing,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function fc(S,U,W,N,X){U.isScene!==!0&&(U=Q),Te.resetTextureUnits();const Me=U.fog,Ce=N.isMeshStandardMaterial?U.environment:null,Re=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:Tn,Fe=(N.isMeshStandardMaterial?lt:pt).get(N.envMap||Ce),Be=N.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!N.normalMap&&!!W.attributes.tangent,Ue=!!W.morphAttributes.position,nt=!!W.morphAttributes.normal,Ft=!!W.morphAttributes.color,ln=N.toneMapped?p.toneMapping:sn,On=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=On!==void 0?On.length:0,ke=Pe.get(N),Xr=h.state.lights;if(j===!0&&(te===!0||S!==M)){const Ot=S===M&&N.id===w;y.setState(N,S,Ot)}let gt=!1;N.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Xr.state.version||ke.outputEncoding!==Re||X.isInstancedMesh&&ke.instancing===!1||!X.isInstancedMesh&&ke.instancing===!0||X.isSkinnedMesh&&ke.skinning===!1||!X.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Fe||N.fog===!0&&ke.fog!==Me||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==y.numPlanes||ke.numIntersection!==y.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==ze||ke.morphTargets!==Ue||ke.morphNormals!==nt||ke.morphColors!==Ft||ke.toneMapping!==ln||Ee.isWebGL2===!0&&ke.morphTargetsCount!==it)&&(gt=!0):(gt=!0,ke.__version=N.version);let Nn=ke.currentProgram;gt===!0&&(Nn=Gt(N,U,X));let fa=!1,Oi=!1,$r=!1;const Et=Nn.getUniforms(),zn=ke.uniforms;if(pe.useProgram(Nn.program)&&(fa=!0,Oi=!0,$r=!0),N.id!==w&&(w=N.id,Oi=!0),fa||M!==S){if(Et.setValue(R,"projectionMatrix",S.projectionMatrix),Ee.logarithmicDepthBuffer&&Et.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),M!==S&&(M=S,Oi=!0,$r=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Ot=Et.map.cameraPosition;Ot!==void 0&&Ot.setValue(R,K.setFromMatrixPosition(S.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Et.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||X.isSkinnedMesh)&&Et.setValue(R,"viewMatrix",S.matrixWorldInverse)}if(X.isSkinnedMesh){Et.setOptional(R,X,"bindMatrix"),Et.setOptional(R,X,"bindMatrixInverse");const Ot=X.skeleton;Ot&&(Ee.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),Et.setValue(R,"boneTexture",Ot.boneTexture,Te),Et.setValue(R,"boneTextureSize",Ot.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Yr=W.morphAttributes;if((Yr.position!==void 0||Yr.normal!==void 0||Yr.color!==void 0&&Ee.isWebGL2===!0)&&re.update(X,W,N,Nn),(Oi||ke.receiveShadow!==X.receiveShadow)&&(ke.receiveShadow=X.receiveShadow,Et.setValue(R,"receiveShadow",X.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(zn.envMap.value=Fe,zn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Oi&&(Et.setValue(R,"toneMappingExposure",p.toneMappingExposure),ke.needsLights&&hc(zn,$r),Me&&N.fog===!0&&Bt.refreshFogUniforms(zn,Me),Bt.refreshMaterialUniforms(zn,N,B,P,Z),Or.upload(R,ke.uniformsList,zn,Te)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Or.upload(R,ke.uniformsList,zn,Te),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Et.setValue(R,"center",X.center),Et.setValue(R,"modelViewMatrix",X.modelViewMatrix),Et.setValue(R,"normalMatrix",X.normalMatrix),Et.setValue(R,"modelMatrix",X.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Ot=N.uniformsGroups;for(let Zr=0,pc=Ot.length;Zr<pc;Zr++)if(Ee.isWebGL2){const ha=Ot[Zr];ue.update(ha,Nn),ue.bind(ha,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function hc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function dc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(S,U,W){Pe.get(S.texture).__webglTexture=U,Pe.get(S.depthTexture).__webglTexture=W;const N=Pe.get(S);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=W===void 0,N.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){const W=Pe.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){v=S,_=U,b=W;let N=!0,X=null,Me=!1,Ce=!1;if(S){const Fe=Pe.get(S);Fe.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),N=!1):Fe.__webglFramebuffer===void 0?Te.setupRenderTarget(S):Fe.__hasExternalTextures&&Te.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture);const Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ce=!0);const ze=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(X=ze[U],Me=!0):Ee.isWebGL2&&S.samples>0&&Te.useMultisampledRTT(S)===!1?X=Pe.get(S).__webglMultisampledFramebuffer:X=ze,C.copy(S.viewport),I.copy(S.scissor),x=S.scissorTest}else C.copy(F).multiplyScalar(B).floor(),I.copy(q).multiplyScalar(B).floor(),x=Y;if(pe.bindFramebuffer(36160,X)&&Ee.drawBuffers&&N&&pe.drawBuffers(S,X),pe.viewport(C),pe.scissor(I),pe.setScissorTest(x),Me){const Fe=Pe.get(S.texture);R.framebufferTexture2D(36160,36064,34069+U,Fe.__webglTexture,W)}else if(Ce){const Fe=Pe.get(S.texture),Be=U||0;R.framebufferTextureLayer(36160,36064,Fe.__webglTexture,W||0,Be)}w=-1},this.readRenderTargetPixels=function(S,U,W,N,X,Me,Ce){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(Re=Re[Ce]),Re){pe.bindFramebuffer(36160,Re);try{const Fe=S.texture,Be=Fe.format,ze=Fe.type;if(Be!==Jt&&T.convert(Be)!==R.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=ze===Qi&&(me.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&me.has("EXT_color_buffer_float"));if(ze!==ei&&T.convert(ze)!==R.getParameter(35738)&&!(ze===jn&&(Ee.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-N&&W>=0&&W<=S.height-X&&R.readPixels(U,W,N,X,T.convert(Be),T.convert(ze),Me)}finally{const Fe=v!==null?Pe.get(v).__webglFramebuffer:null;pe.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(S,U,W=0){const N=Math.pow(2,-W),X=Math.floor(U.image.width*N),Me=Math.floor(U.image.height*N);Te.setTexture2D(U,0),R.copyTexSubImage2D(3553,W,0,0,S.x,S.y,X,Me),pe.unbindTexture()},this.copyTextureToTexture=function(S,U,W,N=0){const X=U.image.width,Me=U.image.height,Ce=T.convert(W.format),Re=T.convert(W.type);Te.setTexture2D(W,0),R.pixelStorei(37440,W.flipY),R.pixelStorei(37441,W.premultiplyAlpha),R.pixelStorei(3317,W.unpackAlignment),U.isDataTexture?R.texSubImage2D(3553,N,S.x,S.y,X,Me,Ce,Re,U.image.data):U.isCompressedTexture?R.compressedTexSubImage2D(3553,N,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,Ce,U.mipmaps[0].data):R.texSubImage2D(3553,N,S.x,S.y,Ce,Re,U.image),N===0&&W.generateMipmaps&&R.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(S,U,W,N,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=S.max.x-S.min.x+1,Ce=S.max.y-S.min.y+1,Re=S.max.z-S.min.z+1,Fe=T.convert(N.format),Be=T.convert(N.type);let ze;if(N.isData3DTexture)Te.setTexture3D(N,0),ze=32879;else if(N.isDataArrayTexture)Te.setTexture2DArray(N,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(37440,N.flipY),R.pixelStorei(37441,N.premultiplyAlpha),R.pixelStorei(3317,N.unpackAlignment);const Ue=R.getParameter(3314),nt=R.getParameter(32878),Ft=R.getParameter(3316),ln=R.getParameter(3315),On=R.getParameter(32877),it=W.isCompressedTexture?W.mipmaps[0]:W.image;R.pixelStorei(3314,it.width),R.pixelStorei(32878,it.height),R.pixelStorei(3316,S.min.x),R.pixelStorei(3315,S.min.y),R.pixelStorei(32877,S.min.z),W.isDataTexture||W.isData3DTexture?R.texSubImage3D(ze,X,U.x,U.y,U.z,Me,Ce,Re,Fe,Be,it.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(ze,X,U.x,U.y,U.z,Me,Ce,Re,Fe,it.data)):R.texSubImage3D(ze,X,U.x,U.y,U.z,Me,Ce,Re,Fe,Be,it),R.pixelStorei(3314,Ue),R.pixelStorei(32878,nt),R.pixelStorei(3316,Ft),R.pixelStorei(3315,ln),R.pixelStorei(32877,On),X===0&&N.generateMipmaps&&R.generateMipmap(ze),pe.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Te.setTextureCube(S,0):S.isData3DTexture?Te.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Te.setTexture2DArray(S,0):Te.setTexture2D(S,0),pe.unbindTexture()},this.resetState=function(){_=0,b=0,v=null,pe.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Nm extends Xl{}Nm.prototype.isWebGL1Renderer=!0;let zm=class extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};class oa extends xn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new k,u=new Le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=n+f/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(l,2))}static fromJSON(e){return new oa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class lr extends or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Oo={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Um{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const $l=new Um;class Yl{constructor(e){this.manager=e!==void 0?e:$l,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class km extends Yl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Oo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=tr("img");function l(){u(),Oo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class No extends Yl{constructor(e){super(e)}load(e,t,n,i){const s=new It,o=new km(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Zl extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ps=new at,zo=new k,Uo=new k;class Bm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ia,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zo.setFromMatrixPosition(e.matrixWorld),t.position.copy(zo),Uo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uo),t.updateMatrixWorld(),Ps.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ps),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ps)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gm extends Bm{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cn extends Zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.target=new ot,this.shadow=new Gm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wr extends Zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ko(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ko();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ko(){return(typeof performance>"u"?Date:performance).now()}class Vm{constructor(e,t,n=0,i=1/0){this.ray=new Ol(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ws(e,this,n,t),n.sort(Bo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ws(e[i],this,n,t);return n.sort(Bo),n}}function Bo(r,e){return r.distance-e.distance}function Ws(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Ws(i[s],e,t,!0)}}class Go{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Js);const Hm={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class jr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Wm=new sa(-1,1,1,-1,0,1),la=new xn;la.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3));la.setAttribute("uv",new qt([0,2,0,0,2,0],2));class jm{constructor(e){this._mesh=new Rt(la,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Wm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class qm extends jr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof _n?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bl.clone(e.uniforms),this.material=new _n({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new jm(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vo extends jr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Xm extends jr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $m{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Le);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new An(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qm(Hm),this.clock=new Kl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vo!==void 0&&(o instanceof Vo?n=!0:o instanceof Xm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jl extends jr{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Ym=(r,e,t)=>{r.renderer=new Xl({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new $m(r.renderer),r.composer.addPass(new Jl(r.scene,wn(r.camera)))},Ho=(r,e,t)=>{r.renderer&&(e?r.renderer.outputEncoding=Tn:r.renderer.outputEncoding=Ye,t?r.renderer.toneMapping=sn:r.renderer.toneMapping=Tl)},Wo=(r,e,t)=>{var n,i,s,o,a,l,c,u;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(o=(s=r.renderer).setPixelRatio)==null||o.call(s,t),(l=(a=r.composer).setSize)==null||l.call(a,e.width,e.height),(u=(c=r.composer).setPixelRatio)==null||u.call(c,t))},jo=(r,e,t)=>{r.renderer&&(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},Wt=r=>r.userData,Zm=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},Ql=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),Km=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,Jm=(r,e,t)=>{let n=wn(r.camera);const i=r.camera.subscribe(c=>n=c);Ke(i);let s=wn(r.pointer);const o=r.pointer.subscribe(c=>s=c);Ke(o);let a;const l=c=>{var h,d;c.preventDefault();const u=c.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,Zm(r,c);const f=Qm(e,s,n);if(u==="pointerdown"&&(a=f?{object:f.object,instanceId:f.instanceId}:null),u==="click"){if(!eg(f,a)){a=null;return}a=null}f&&((d=(h=Wt(f.object)).eventDispatcher)==null||d.call(h,u,{...f,event:c}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function Qm(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=Ql(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function eg(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const tg=(r,e)=>{let t=wn(r.pointerOverCanvas);const n=r.pointerOverCanvas.subscribe(c=>t=c);Ke(n);let i=wn(r.camera);const s=r.camera.subscribe(c=>i=c);Ke(s);let o=wn(r.pointer);const a=r.pointer.subscribe(c=>o=c);return Ke(a),{raycast:()=>{var f,h,d,g,p,m,_,b;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Ql(e,o,i,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&Km(e.lastIntersection,u)&&((m=(p=Wt(e.lastIntersection.object)).eventDispatcher)==null||m.call(p,"pointerleave",e.lastIntersection),(b=(_=Wt(u.object)).eventDispatcher)==null||b.call(_,"pointerenter",u)):(g=(d=Wt(u.object)).eventDispatcher)==null||g.call(d,"pointerenter",u):e.lastIntersection&&((h=(f=Wt(e.lastIntersection.object)).eventDispatcher)==null||h.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},qr=typeof window<"u",ng=r=>{if(!qr)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),Ke(()=>{e&&cancelAnimationFrame(e)})},ig=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>(i.order??0)>(s.order??0)?1:-1).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},rg=r=>{r.debugFrameloop&&(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by ↴":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},sg=(r,e,t,n)=>{let i=wn(r.camera);const s=r.camera.subscribe(a=>i=a);Ke(s);const{raycast:o}=tg(r,e);ng(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!i||!r.composer||!r.renderer||(ig(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),rg(t),t.frameInvalidated=!1,t.advance=!1))})},ag=()=>{const r=new St(75,0,.1,1e3);return Wt(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},og=r=>{const e=r.size.subscribe(t=>{Wt(wn(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});Ke(e)},lg=(r,e,t,n,i,s,o)=>{const a={audioListeners:new Map,addAudioListener:(_,b)=>{if(b=b??"default",a.audioListeners.has(b)){console.warn(`An AudioListener with the id "${b}" has already been added, aborting.`);return}a.audioListeners.set(b,_)},removeAudioListener:_=>{if(_=_??"default",!a.audioListeners.has(_)){console.warn(`No AudioListener with the id "${_}" found, aborting.`);return}a.audioListeners.delete(_)},getAudioListener:_=>{if(_=_??"default",!a.audioListeners.has(_)){console.warn(`No AudioListener with the id "${_}" found, aborting.`);return}return a.audioListeners.get(_)}},l={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:Nc([n,i],([_,b])=>_||b),pointer:st(new Le),pointerOverCanvas:st(!1),clock:new Kl,camera:st(ag()),scene:new zm,renderer:void 0,composer:void 0,invalidate:_=>{l.frameInvalidated=!0,l.debugFrameloop&&_&&(l.invalidations[_]=l.invalidations[_]?l.invalidations[_]+1:1)},advance:()=>{l.advance=!0}},u={flat:st(e),linear:st(r),dpr:st(t),setCamera:_=>{c.camera.set(_),c.composer&&(c.composer.passes.forEach(b=>{b instanceof Jl&&(b.camera=_)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Vm,lastIntersection:null,addRaycastableObject:_=>{u.raycastableObjects.add(_)},removeRaycastableObject:_=>{u.raycastableObjects.delete(_)},addInteractiveObject:_=>{u.interactiveObjects.add(_)},removeInteractiveObject:_=>{u.interactiveObjects.delete(_)},addPass:_=>{c.composer&&(c.composer.addPass(_),c.invalidate("Canvas: adding pass"))},removePass:_=>{c.composer&&(c.composer.removePass(_),c.invalidate("Canvas: removing pass"))}},f={dispose:async(_=!1)=>{await Ys(),!(!f.shouldDispose&&!_)&&(f.disposableObjects.forEach((b,v)=>{var w;(b===0||_)&&((w=v==null?void 0:v.dispose)==null||w.call(v),f.disposableObjects.delete(v))}),f.shouldDispose=!1)},collectDisposableObjects:(_,b)=>{const v=b??[];return _&&(_!=null&&_.dispose&&typeof _.dispose=="function"&&_.type!=="Scene"&&v.push(_),Object.entries(_).forEach(([w,M])=>{if(w==="parent"||w==="children"||typeof M!="object")return;const C=M;C!=null&&C.dispose&&f.collectDisposableObjects(C,v)})),v},addDisposableObjects:_=>{_.forEach(b=>{const v=f.disposableObjects.get(b);v?f.disposableObjects.set(b,v+1):f.disposableObjects.set(b,1)})},removeDisposableObjects:_=>{_.length!==0&&(_.forEach(b=>{const v=f.disposableObjects.get(b);v&&v>0&&f.disposableObjects.set(b,v-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return Zt("threlte",c),Zt("threlte-root",u),Zt("threlte-render-context",l),Zt("threlte-audio-context",a),Zt("threlte-disposal-context",f),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:a,disposalCtx:f,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>a,getDisposalCtx:()=>f}};function ec(r,e){const t=st(r);let n=r;const i=t.subscribe(a=>n=a);return Ke(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(a),e==null||e(a,l)},update:a=>{const l=a(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const ii=()=>mn("threlte");function cg(r){let e;const t=r[8].default,n=Pn(t,r,r[7],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&Rn(n,t,i,i[7],e?Dn(t,i[7],s,null):In(i[7]),null)},i(i){e||(ie(n,i),e=!0)},o(i){se(n,i),e=!1},d(i){n&&n.d(i)}}}const ug=()=>({onChildMount:mn("threlte-hierarchical-object-on-mount"),onChildDestroy:mn("threlte-hierarchical-object-on-destroy")}),tc=()=>mn("threlte-hierarchical-parent-context");function fg(r,e,t){var _;let n,{$$slots:i={},$$scope:s}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:l=void 0}=e;const c=b=>{a.push(b),t(1,a),l==null||l(b)};let{onChildDestroy:u=void 0}=e;const f=b=>{const v=a.findIndex(w=>w.uuid===b.uuid);v!==-1&&a.splice(v,1),t(1,a),u==null||u(b)},{invalidate:h}=ii(),d=tc();xt(r,d,b=>t(6,n=b));let{parent:g=n}=e;const p=ug();o&&((_=p.onChildMount)==null||_.call(p,o),h("HierarchicalObject: object added"));const m=ec(o,(b,v)=>{var w,M;v&&((w=p.onChildDestroy)==null||w.call(p,v),h("HierarchicalObject: object added")),b&&((M=p.onChildMount)==null||M.call(p,b),h("HierarchicalObject: object removed"))});return Ke(()=>{var b;o&&((b=p.onChildDestroy)==null||b.call(p,o),h("HierarchicalObject: object removed"))}),Zt("threlte-hierarchical-object-on-mount",c),Zt("threlte-hierarchical-object-on-destroy",f),Zt("threlte-hierarchical-parent-context",m),r.$$set=b=>{"object"in b&&t(3,o=b.object),"children"in b&&t(1,a=b.children),"onChildMount"in b&&t(4,l=b.onChildMount),"onChildDestroy"in b&&t(5,u=b.onChildDestroy),"parent"in b&&t(2,g=b.parent),"$$scope"in b&&t(7,s=b.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,g=n),r.$$.dirty&8&&m.set(o)},[d,a,g,o,l,u,n,s,i]}class hg extends et{constructor(e){super(),Qe(this,e,fg,cg,Je,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function dg(r){let e;const t=r[1].default,n=Pn(t,r,r[4],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&Rn(n,t,i,i[4],e?Dn(t,i[4],s,null):In(i[4]),null)},i(i){e||(ie(n,i),e=!0)},o(i){se(n,i),e=!1},d(i){n&&n.d(i)}}}function pg(r){let e,t;return e=new hg({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[dg]},$$scope:{ctx:r}}}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function mg(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const o=l=>s.add(l),a=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,o,a,i]}class nc extends et{constructor(e){super(),Qe(this,e,mg,pg,Je,{object:0})}}const gg=()=>{const r=st({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(o=>e=o);Ke(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&r.set({width:a,height:l})},s=o=>{n=o,i(),window.addEventListener("resize",i)};return qr?(Ke(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function qo(r){let e,t;return e=new nc({props:{object:r[0].scene,$$slots:{default:[_g]},$$scope:{ctx:r}}}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function _g(r){let e;const t=r[29].default,n=Pn(t,r,r[33],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&Rn(n,t,i,i[33],e?Dn(t,i[33],s,null):In(i[33]),null)},i(i){e||(ie(n,i),e=!0)},o(i){se(n,i),e=!1},d(i){n&&n.d(i)}}}function xg(r){let e,t,n,i,s=r[2]&&qo(r);return{c(){e=ft("canvas"),s&&s.c(),Ge(e,"class","svelte-o3oskp")},m(o,a){we(o,e,a),s&&s.m(e,null),r[30](e),t=!0,n||(i=[_c(r[3].call(null,e)),Pt(e,"click",r[9]),Pt(e,"contextmenu",r[10]),Pt(e,"pointerup",r[13]),Pt(e,"pointerdown",r[11]),Pt(e,"pointermove",r[12]),Pt(e,"pointerenter",r[31]),Pt(e,"pointerleave",r[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&ie(s,1)):(s=qo(o),s.c(),ie(s,1),s.m(e,null)):s&&(Kn(),se(s,1,1,()=>{s=null}),Jn())},i(o){t||(ie(s),t=!0)},o(o){se(s),t=!1},d(o){o&&Se(e),s&&s.d(),r[30](null),n=!1,Qt(i)}}}const Xo=new Set;function vg(r,e,t){let n,i,s,o,{$$slots:a={},$$scope:l}=e,{dpr:c=qr?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:f=!1}=e,{frameloop:h="demand"}=e,{debugFrameloop:d=!1}=e,{shadows:g=!0}=e,{shadowMapType:p=Ml}=e,{size:m=void 0}=e,{rendererParameters:_=void 0}=e,b,v=!1;const w=st(m),{parentSize:M,parentSizeAction:C}=gg(),I=lg(f,u,c,w,M,d,h),{getCtx:x,renderCtx:A,disposalCtx:P}=I,{ctx:B,rootCtx:ne,audioCtx:z}=I;og(B),Xo.add(B.invalidate),Ke(()=>{Xo.delete(B.invalidate)});const{size:F,scene:q}=B;xt(r,F,fe=>t(26,i=fe));const{flat:Y,linear:$,dpr:j}=ne;xt(r,Y,fe=>t(27,s=fe)),xt(r,$,fe=>t(28,o=fe)),xt(r,j,fe=>t(25,n=fe)),Zt("threlte-parent",st(q)),dl(()=>{b&&(Ym(B,b,_),Ho(B,o,s),Wo(B,i,n),jo(B,g,p),t(2,v=!0))}),sg(B,ne,A,P);const{onClick:te,onContextMenu:Z,onPointerDown:L,onPointerMove:V,onPointerUp:K}=Jm(B,ne,A);Ke(()=>{P.dispose(!0)});function Q(fe){Fs[fe?"unshift":"push"](()=>{b=fe,t(1,b)})}const oe=()=>x().pointerOverCanvas.set(!0),R=()=>x().pointerOverCanvas.set(!1);return r.$$set=fe=>{"dpr"in fe&&t(14,c=fe.dpr),"flat"in fe&&t(15,u=fe.flat),"linear"in fe&&t(16,f=fe.linear),"frameloop"in fe&&t(17,h=fe.frameloop),"debugFrameloop"in fe&&t(18,d=fe.debugFrameloop),"shadows"in fe&&t(19,g=fe.shadows),"shadowMapType"in fe&&t(20,p=fe.shadowMapType),"size"in fe&&t(21,m=fe.size),"rendererParameters"in fe&&t(22,_=fe.rendererParameters),"$$scope"in fe&&t(33,l=fe.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&w.set(m),r.$$.dirty[0]&65536&&rn($,o=f,o),r.$$.dirty[0]&32768&&rn(Y,s=u,s),r.$$.dirty[0]&16384&&rn(j,n=c,n),r.$$.dirty[0]&402653184&&Ho(x(),o,s),r.$$.dirty[0]&100663296&&Wo(x(),i,n),r.$$.dirty[0]&1572864&&jo(x(),g,p)},[B,b,v,C,x,F,Y,$,j,te,Z,L,V,K,c,u,f,h,d,g,p,m,_,ne,z,n,i,s,o,a,Q,oe,R,l]}class ic extends et{constructor(e){super(),Qe(this,e,vg,xg,Je,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const rc=()=>mn("threlte-root"),bg=()=>mn("threlte-disposal-context");function yg(r){let e;const t=r[9].default,n=Pn(t,r,r[8],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&Rn(n,t,i,i[8],e?Dn(t,i[8],s,null):In(i[8]),null)},i(i){e||(ie(n,i),e=!0)},o(i){se(n,i),e=!1},d(i){n&&n.d(i)}}}const $o="threlte-disposable-object-context";function Mg(r,e,t){let n,i,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:l,removeDisposableObjects:c}=bg();let{object:u=void 0}=e,f=u,{dispose:h=void 0}=e;const d=mn($o);xt(r,d,m=>t(7,i=m));const g=st(h??i??!0);xt(r,g,m=>t(6,n=m)),Zt($o,g);let p=n?a(u):[];return l(p),Ke(()=>{c(p)}),r.$$set=m=>{"object"in m&&t(2,u=m.object),"dispose"in m&&t(3,h=m.dispose),"$$scope"in m&&t(8,o=m.$$scope)},r.$$.update=()=>{r.$$.dirty&136&&g.set(h??i??!0),r.$$.dirty&116&&u!==f&&(c(p),t(5,p=n?a(u):[]),l(p),t(4,f=u))},[d,g,u,h,f,p,n,i,o,s]}class sc extends et{constructor(e){super(),Qe(this,e,Mg,yg,Je,{object:2,dispose:3})}}const ca=(r,e)=>{if(!qr)return{start:()=>{},stop:()=>{},started:_l(!1)};const t=mn("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=st(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((e==null?void 0:e.autostart)??!0)&&o(),Ke(()=>{s()}),{start:o,stop:s,started:{subscribe:i.subscribe}}},Sg=()=>{const r=st(!1);return(async()=>{await Ys(),r.set(!0)})(),r};function wg(r,e,t){let n,i,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new k,f=Gr(),{invalidate:h}=ii(),d=Sg();xt(r,d,v=>t(8,i=v));const g=async()=>{i||await Ys(),f("transform")},p=async()=>{h("TransformableObject: transformed"),await g()};Wt(s).onTransform=p;const{start:m,stop:_}=ca(async()=>{c&&!l&&c instanceof ot&&(c.getWorldPosition(u),s.lookAt(u),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),b=ec(s);return xt(r,b,v=>t(7,n=v)),r.$$set=v=>{"object"in v&&t(2,s=v.object),"position"in v&&t(3,o=v.position),"scale"in v&&t(4,a=v.scale),"rotation"in v&&t(5,l=v.rotation),"lookAt"in v&&t(6,c=v.lookAt)},r.$$.update=()=>{r.$$.dirty&4&&b.set(s),r.$$.dirty&232&&(o&&(n.position.set(o.x??0,o.y??0,o.z??0),p()),c&&!l&&(c instanceof ot?m():(_(),n.lookAt(c.x??0,c.y??0,c.z??0),p())),c||_()),r.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set(a.x??1,a.y??1,a.z??1),p()),r.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),p())},[d,b,s,o,a,l,c,n]}class Eg extends et{constructor(e){super(),Qe(this,e,wg,null,Je,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}const Yo=[],Tg=(r,e)=>{const t=Yo.find(i=>i instanceof r);if(t)return t;const n=e();return Yo.push(n),n},Zo={type:"change"},Ds={type:"start"},Ko={type:"end"};let Ag=class extends ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:si.ROTATE,MIDDLE:si.DOLLY,RIGHT:si.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Lt),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Zo),n.update(),s=i.NONE},this.update=function(){const T=new k,O=new ti().setFromUnitVectors(e.up,new k(0,1,0)),ue=O.clone().invert(),de=new k,ce=new ti,be=2*Math.PI;return function(){const Oe=n.object.position;T.copy(Oe).sub(n.target),T.applyQuaternion(O),a.setFromVector3(T),n.autoRotate&&s===i.NONE&&A(I()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ne=n.minAzimuthAngle,qe=n.maxAzimuthAngle;return isFinite(Ne)&&isFinite(qe)&&(Ne<-Math.PI?Ne+=be:Ne>Math.PI&&(Ne-=be),qe<-Math.PI?qe+=be:qe>Math.PI&&(qe-=be),Ne<=qe?a.theta=Math.max(Ne,Math.min(qe,a.theta)):a.theta=a.theta>(Ne+qe)/2?Math.max(Ne,a.theta):Math.min(qe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),T.setFromSpherical(a),T.applyQuaternion(ue),Oe.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||de.distanceToSquared(n.object.position)>o||8*(1-ce.dot(n.object.quaternion))>o?(n.dispatchEvent(Zo),de.copy(n.object.position),ce.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",G),n.domElement.removeEventListener("pointerdown",pt),n.domElement.removeEventListener("pointercancel",wt),n.domElement.removeEventListener("wheel",Bt),n.domElement.removeEventListener("pointermove",lt),n.domElement.removeEventListener("pointerup",ct),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Lt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Go,l=new Go;let c=1;const u=new k;let f=!1;const h=new Le,d=new Le,g=new Le,p=new Le,m=new Le,_=new Le,b=new Le,v=new Le,w=new Le,M=[],C={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function A(T){l.theta-=T}function P(T){l.phi-=T}const B=function(){const T=new k;return function(ue,de){T.setFromMatrixColumn(de,0),T.multiplyScalar(-ue),u.add(T)}}(),ne=function(){const T=new k;return function(ue,de){n.screenSpacePanning===!0?T.setFromMatrixColumn(de,1):(T.setFromMatrixColumn(de,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(ue),u.add(T)}}(),z=function(){const T=new k;return function(ue,de){const ce=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;T.copy(be).sub(n.target);let ve=T.length();ve*=Math.tan(n.object.fov/2*Math.PI/180),B(2*ue*ve/ce.clientHeight,n.object.matrix),ne(2*de*ve/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(ue*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),ne(de*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(T){n.object.isPerspectiveCamera?c/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(T){n.object.isPerspectiveCamera?c*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(T){h.set(T.clientX,T.clientY)}function $(T){b.set(T.clientX,T.clientY)}function j(T){p.set(T.clientX,T.clientY)}function te(T){d.set(T.clientX,T.clientY),g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;A(2*Math.PI*g.x/O.clientHeight),P(2*Math.PI*g.y/O.clientHeight),h.copy(d),n.update()}function Z(T){v.set(T.clientX,T.clientY),w.subVectors(v,b),w.y>0?F(x()):w.y<0&&q(x()),b.copy(v),n.update()}function L(T){m.set(T.clientX,T.clientY),_.subVectors(m,p).multiplyScalar(n.panSpeed),z(_.x,_.y),p.copy(m),n.update()}function V(T){T.deltaY<0?q(x()):T.deltaY>0&&F(x()),n.update()}function K(T){let O=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),O=!0;break}O&&(T.preventDefault(),n.update())}function Q(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const T=.5*(M[0].pageX+M[1].pageX),O=.5*(M[0].pageY+M[1].pageY);h.set(T,O)}}function oe(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const T=.5*(M[0].pageX+M[1].pageX),O=.5*(M[0].pageY+M[1].pageY);p.set(T,O)}}function R(){const T=M[0].pageX-M[1].pageX,O=M[0].pageY-M[1].pageY,ue=Math.sqrt(T*T+O*O);b.set(0,ue)}function fe(){n.enableZoom&&R(),n.enablePan&&oe()}function me(){n.enableZoom&&R(),n.enableRotate&&Q()}function Ee(T){if(M.length==1)d.set(T.pageX,T.pageY);else{const ue=Ae(T),de=.5*(T.pageX+ue.x),ce=.5*(T.pageY+ue.y);d.set(de,ce)}g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const O=n.domElement;A(2*Math.PI*g.x/O.clientHeight),P(2*Math.PI*g.y/O.clientHeight),h.copy(d)}function pe(T){if(M.length===1)m.set(T.pageX,T.pageY);else{const O=Ae(T),ue=.5*(T.pageX+O.x),de=.5*(T.pageY+O.y);m.set(ue,de)}_.subVectors(m,p).multiplyScalar(n.panSpeed),z(_.x,_.y),p.copy(m)}function He(T){const O=Ae(T),ue=T.pageX-O.x,de=T.pageY-O.y,ce=Math.sqrt(ue*ue+de*de);v.set(0,ce),w.set(0,Math.pow(v.y/b.y,n.zoomSpeed)),F(w.y),b.copy(v)}function Pe(T){n.enableZoom&&He(T),n.enablePan&&pe(T)}function Te(T){n.enableZoom&&He(T),n.enableRotate&&Ee(T)}function pt(T){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",lt),n.domElement.addEventListener("pointerup",ct)),ee(T),T.pointerType==="touch"?E(T):tt(T))}function lt(T){n.enabled!==!1&&(T.pointerType==="touch"?y(T):je(T))}function ct(T){re(T),M.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",lt),n.domElement.removeEventListener("pointerup",ct)),n.dispatchEvent(Ko),s=i.NONE}function wt(T){re(T)}function tt(T){let O;switch(T.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case si.DOLLY:if(n.enableZoom===!1)return;$(T),s=i.DOLLY;break;case si.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;j(T),s=i.PAN}else{if(n.enableRotate===!1)return;Y(T),s=i.ROTATE}break;case si.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;Y(T),s=i.ROTATE}else{if(n.enablePan===!1)return;j(T),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ds)}function je(T){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;te(T);break;case i.DOLLY:if(n.enableZoom===!1)return;Z(T);break;case i.PAN:if(n.enablePan===!1)return;L(T);break}}function Bt(T){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(T.preventDefault(),n.dispatchEvent(Ds),V(T),n.dispatchEvent(Ko))}function Lt(T){n.enabled===!1||n.enablePan===!1||K(T)}function E(T){switch(le(T),M.length){case 1:switch(n.touches.ONE){case ai.ROTATE:if(n.enableRotate===!1)return;Q(),s=i.TOUCH_ROTATE;break;case ai.PAN:if(n.enablePan===!1)return;oe(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ai.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;fe(),s=i.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ds)}function y(T){switch(le(T),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;pe(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(T),n.update();break;default:s=i.NONE}}function G(T){n.enabled!==!1&&T.preventDefault()}function ee(T){M.push(T)}function re(T){delete C[T.pointerId];for(let O=0;O<M.length;O++)if(M[O].pointerId==T.pointerId){M.splice(O,1);return}}function le(T){let O=C[T.pointerId];O===void 0&&(O=new Le,C[T.pointerId]=O),O.set(T.pageX,T.pageY)}function Ae(T){const O=T.pointerId===M[0].pointerId?M[1]:M[0];return C[O.pointerId]}n.domElement.addEventListener("contextmenu",G),n.domElement.addEventListener("pointerdown",pt),n.domElement.addEventListener("pointercancel",wt),n.domElement.addEventListener("wheel",Bt,{passive:!1}),this.update()}};function Cg(r){let e,t,n,i;return e=new sc({props:{dispose:r[2],object:r[0]}}),n=new Eg({props:{object:r[4],position:r[1]}}),n.$on("transform",r[5]),{c(){xe(e.$$.fragment),t=Ie(),xe(n.$$.fragment)},m(s,o){ge(e,s,o),we(s,t,o),ge(n,s,o),i=!0},p(s,o){const a={};o[0]&4&&(a.dispose=s[2]),o[0]&1&&(a.object=s[0]),e.$set(a);const l={};o[0]&2&&(l.position=s[1]),n.$set(l)},i(s){i||(ie(e.$$.fragment,s),ie(n.$$.fragment,s),i=!0)},o(s){se(e.$$.fragment,s),se(n.$$.fragment,s),i=!1},d(s){_e(e,s),s&&Se(t),_e(n,s)}}}function Lg(r,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:f=void 0}=e,{keyPanSpeed:h=void 0}=e,{keys:d=void 0}=e,{maxAzimuthAngle:g=void 0}=e,{maxDistance:p=void 0}=e,{maxPolarAngle:m=void 0}=e,{maxZoom:_=void 0}=e,{minAzimuthAngle:b=void 0}=e,{minDistance:v=void 0}=e,{minPolarAngle:w=void 0}=e,{minZoom:M=void 0}=e,{mouseButtons:C=void 0}=e,{panSpeed:I=void 0}=e,{rotateSpeed:x=void 0}=e,{screenSpacePanning:A=void 0}=e,{touches:P=void 0}=e,{zoomSpeed:B=void 0}=e,{target:ne=void 0}=e,{dispose:z=void 0}=e;const F=tc();xt(r,F,R=>t(30,n=R));const{renderer:q,invalidate:Y}=ii();if(!q)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof na))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const $=Gr(),j=()=>{Y("Orbitcontrols: change event"),$("change")},te=()=>$("start"),Z=()=>$("end"),L=new Ag(n,q.domElement);Wt(n).orbitControls=L,L.addEventListener("change",j),L.addEventListener("start",te),L.addEventListener("end",Z),Ke(()=>{n&&delete Wt(n).orbitControls,L.removeEventListener("change",j),L.removeEventListener("start",te),L.removeEventListener("end",Z)});const{start:V,stop:K}=ca(()=>L.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),Q=new ot,oe=()=>{t(0,L.target=Q.position,L),L.update(),Y("OrbitControls: target changed")};return r.$$set=R=>{"autoRotate"in R&&t(6,i=R.autoRotate),"autoRotateSpeed"in R&&t(7,s=R.autoRotateSpeed),"dampingFactor"in R&&t(8,o=R.dampingFactor),"enableDamping"in R&&t(9,a=R.enableDamping),"enabled"in R&&t(10,l=R.enabled),"enablePan"in R&&t(11,c=R.enablePan),"enableRotate"in R&&t(12,u=R.enableRotate),"enableZoom"in R&&t(13,f=R.enableZoom),"keyPanSpeed"in R&&t(14,h=R.keyPanSpeed),"keys"in R&&t(15,d=R.keys),"maxAzimuthAngle"in R&&t(16,g=R.maxAzimuthAngle),"maxDistance"in R&&t(17,p=R.maxDistance),"maxPolarAngle"in R&&t(18,m=R.maxPolarAngle),"maxZoom"in R&&t(19,_=R.maxZoom),"minAzimuthAngle"in R&&t(20,b=R.minAzimuthAngle),"minDistance"in R&&t(21,v=R.minDistance),"minPolarAngle"in R&&t(22,w=R.minPolarAngle),"minZoom"in R&&t(23,M=R.minZoom),"mouseButtons"in R&&t(24,C=R.mouseButtons),"panSpeed"in R&&t(25,I=R.panSpeed),"rotateSpeed"in R&&t(26,x=R.rotateSpeed),"screenSpacePanning"in R&&t(27,A=R.screenSpacePanning),"touches"in R&&t(28,P=R.touches),"zoomSpeed"in R&&t(29,B=R.zoomSpeed),"target"in R&&t(1,ne=R.target),"dispose"in R&&t(2,z=R.dispose)},r.$$.update=()=>{r.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,L.autoRotate=i,L),s!==void 0&&t(0,L.autoRotateSpeed=s,L),o!==void 0&&t(0,L.dampingFactor=o,L),a!==void 0&&t(0,L.enableDamping=a,L),l!==void 0&&t(0,L.enabled=l,L),c!==void 0&&t(0,L.enablePan=c,L),u!==void 0&&t(0,L.enableRotate=u,L),f!==void 0&&t(0,L.enableZoom=f,L),h!==void 0&&t(0,L.keyPanSpeed=h,L),d!==void 0&&t(0,L.keys=d,L),g!==void 0&&t(0,L.maxAzimuthAngle=g,L),p!==void 0&&t(0,L.maxDistance=p,L),m!==void 0&&t(0,L.maxPolarAngle=m,L),_!==void 0&&t(0,L.maxZoom=_,L),b!==void 0&&t(0,L.minAzimuthAngle=b,L),v!==void 0&&t(0,L.minDistance=v,L),w!==void 0&&t(0,L.minPolarAngle=w,L),M!==void 0&&t(0,L.minZoom=M,L),C!==void 0&&t(0,L.mouseButtons=C,L),I!==void 0&&t(0,L.panSpeed=I,L),x!==void 0&&t(0,L.rotateSpeed=x,L),A!==void 0&&t(0,L.screenSpacePanning=A,L),P!==void 0&&t(0,L.touches=P,L),B!==void 0&&t(0,L.zoomSpeed=B,L),L.update(),Y("OrbitControls: props changed")),r.$$.dirty[0]&576&&(i||a?V():K())},[L,ne,z,F,Q,oe,i,s,o,a,l,c,u,f,h,d,g,p,m,_,b,v,w,M,C,I,x,A,P,B]}class Pg extends et{constructor(e){super(),Qe(this,e,Lg,Cg,Je,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}function Dg(r,e,t){let{object:n}=e,i=n,{interactive:s=!1}=e,{ignorePointer:o=!1}=e;const a=Gr(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:f}=rc(),{invalidate:h}=ii(),d=p=>{f(p),c(p),delete Wt(p).eventDispatcher},g=(p,m,_)=>{Wt(p).eventDispatcher=a,m?(f(p),c(p)):(u(p),_?l(p):c(p))};return Ke(()=>{d(n),h("InteractiveObject: object removed")}),r.$$set=p=>{"object"in p&&t(0,n=p.object),"interactive"in p&&t(1,s=p.interactive),"ignorePointer"in p&&t(2,o=p.ignorePointer)},r.$$.update=()=>{r.$$.dirty&15&&(n!==i?(d(i),g(n,o,s),h("InteractiveObject: object changed"),t(3,i=n)):n===i&&(g(n,o,s),h("InteractiveObject: props changed")))},[n,s,o,i]}class Rg extends et{constructor(e){super(),Qe(this,e,Dg,null,Je,{object:0,interactive:1,ignorePointer:2})}}const ac=new ot;ac.scale.set(0,0,0);ac.matrix;new at().fromArray(new Array(16).fill(0));new Xe(16777215);const oc=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},Rs=Symbol("initialValueBeforeAttach"),Ig=()=>{const{invalidate:r}=ii();let e=!1,t=Rs,n,i,s;const o=(l,c,u)=>{if(a(),!u){const f=l;((f==null?void 0:f.isMaterial)||!1)&&(u="material"),((f==null?void 0:f.isBufferGeometry)||(f==null?void 0:f.isGeometry)||!1)&&(u="geometry")}if(u){if(typeof u=="function")n=u(c,l);else{const{target:f,key:h}=oc(c,u);t=f[h],f[h]=l,i=f,s=h}e=!0,r()}},a=()=>{e&&(n?(n(),n=void 0):i&&s&&t!==Rs&&(i[s]=t,t=Rs,i=void 0,s=void 0),e=!1,r())};return Ke(()=>{a()}),{update:o}},Fg=r=>r&&r.isCamera,lc=r=>r&&r.isOrthographicCamera,cc=r=>r&&r.isPerspectiveCamera,Og=r=>cc(r)||lc(r),Ng=()=>{const{invalidate:r,size:e}=ii(),{setCamera:t}=rc();let n,i;Ke(()=>{i==null||i()});const s=l=>{n&&(lc(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):cc(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(l,c)=>{if(i==null||i(),c||!Og(l)){n=void 0;return}n=l,i=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!Fg(l)||!c||(t(l),r())}}},Jo=r=>!!(r!=null&&r.addEventListener),zg=()=>{const r=Gr(),e=Ri(),t=h=>{h!=null&&h.type&&r(h.type,h)},n=(h,d)=>{Jo(h)&&d.forEach(g=>{h.removeEventListener(g,t)})},i=(h,d)=>{Jo(h)&&d.forEach(g=>{h.addEventListener(g,t)})};let s=[],o;const a=st([]),l=a.subscribe(h=>{n(o,s),i(o,h),s=h});Ke(l);const c=st(),u=c.subscribe(h=>{n(o,s),i(h,s),o=h});return Ke(u),Ke(()=>{n(o,s)}),dl(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:h=>{c.set(h)}}},Ug=["$$scope","$$slots","type","args","attach","instance"],kg=["fov","aspect","near","far","left","right","top","bottom","zoom"],Bg=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r>"u"||r===null,Gg=()=>{const{invalidate:r}=ii(),e=new Map,t=(i,s,o,a)=>{var u,f;if(Bg(o)){const h=e.get(s);if(h&&h.instance===i&&h.value===o)return;e.set(s,{instance:i,value:o})}const{key:l,target:c}=oc(i,s);if(!Array.isArray(o)&&typeof o=="number"&&typeof((u=c[l])==null?void 0:u.setScalar)=="function")c[l].setScalar(o);else if(typeof((f=c[l])==null?void 0:f.set)=="function")Array.isArray(o)?c[l].set(...o):c[l].set(o);else{if(c[l]=o,a.manualCamera)return;kg.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(i,s,o)=>{for(const a in s)Ug.includes(a)||t(i,a,s[a],o),r()}}},Vg=r=>({ref:r&1}),Qo=r=>({ref:r[0]}),Hg=r=>({ref:r&1}),el=r=>({ref:r[0]});function tl(r){let e,t;return e=new sc({props:{object:r[0],dispose:r[1]}}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function Wg(r){let e;const t=r[12].default,n=Pn(t,r,r[13],Qo);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&Rn(n,t,i,i[13],e?Dn(t,i[13],s,Vg):In(i[13]),Qo)},i(i){e||(ie(n,i),e=!0)},o(i){se(n,i),e=!1},d(i){n&&n.d(i)}}}function jg(r){let e,t;return e=new nc({props:{object:r[0],$$slots:{default:[qg]},$$scope:{ctx:r}}}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&8193&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function qg(r){let e;const t=r[12].default,n=Pn(t,r,r[13],el);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&Rn(n,t,i,i[13],e?Dn(t,i[13],s,Hg):In(i[13]),el)},i(i){e||(ie(n,i),e=!0)},o(i){se(n,i),e=!1},d(i){n&&n.d(i)}}}function Xg(r){let e=r[4](r[0]),t,n,i,s,o,a,l=e&&tl(r);const c=[jg,Wg],u=[];function f(h,d){return d&1&&(n=null),n==null&&(n=!!h[3](h[0])),n?0:1}return i=f(r,-1),s=u[i]=c[i](r),{c(){l&&l.c(),t=Ie(),s.c(),o=$s()},m(h,d){l&&l.m(h,d),we(h,t,d),u[i].m(h,d),we(h,o,d),a=!0},p(h,[d]){d&1&&(e=h[4](h[0])),e?l?(l.p(h,d),d&1&&ie(l,1)):(l=tl(h),l.c(),ie(l,1),l.m(t.parentNode,t)):l&&(Kn(),se(l,1,1,()=>{l=null}),Jn());let g=i;i=f(h,d),i===g?u[i].p(h,d):(Kn(),se(u[g],1,1,()=>{u[g]=null}),Jn(),s=u[i],s?s.p(h,d):(s=u[i]=c[i](h),s.c()),ie(s,1),s.m(o.parentNode,o))},i(h){a||(ie(l),ie(s),a=!0)},o(h){se(l),se(s),a=!1},d(h){l&&l.d(h),h&&Se(t),u[i].d(h),h&&Se(o)}}}function $g(r,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let i=ma(e,n),s,{$$slots:o={},$$scope:a}=e,{type:l}=e,{args:c=void 0}=e,{attach:u=void 0}=e,{manual:f=void 0}=e,{makeDefault:h=void 0}=e,{dispose:d=void 0}=e;const g=mn("threlte-hierarchical-parent-context");xt(r,g,P=>t(11,s=P));const p=P=>typeof P=="function"&&/^\s*class\s+/.test(P.toString()),m=P=>Array.isArray(P);let{ref:_=p(l)&&m(c)?new l(...c):p(l)?new l:l}=e,b=!1;const v=st(_);Zt("threlte-hierarchical-parent-context",v);const w=Gg(),M=Ng(),C=Ig(),I=zg(),x=P=>!!P.isObject3D,A=P=>P.dispose!==void 0;return r.$$set=P=>{e=Is(Is({},e),gc(P)),t(21,i=ma(e,n)),"type"in P&&t(5,l=P.type),"args"in P&&t(6,c=P.args),"attach"in P&&t(7,u=P.attach),"manual"in P&&t(8,f=P.manual),"makeDefault"in P&&t(9,h=P.makeDefault),"dispose"in P&&t(1,d=P.dispose),"ref"in P&&t(0,_=P.ref),"$$scope"in P&&t(13,a=P.$$scope)},r.$$.update=()=>{r.$$.dirty&1120&&(b?t(0,_=p(l)&&m(c)?new l(...c):p(l)?new l:l):t(10,b=!0)),r.$$.dirty&1&&v.set(_),w.updateProps(_,i,{manualCamera:f}),r.$$.dirty&257&&M.update(_,f),r.$$.dirty&513&&M.makeDefaultCamera(_,h),r.$$.dirty&2177&&C.update(_,s,u),r.$$.dirty&1&&I.updateRef(_)},[_,d,g,x,A,l,c,u,f,h,b,s,o,a]}class Ve extends et{constructor(e){super(),Qe(this,e,$g,Xg,Je,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function Yg(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class nl extends et{constructor(e){super(),Qe(this,e,Yg,null,Je,{})}}new Proxy(nl,{get(r,e){return r[e]||nl}});Tg(No,()=>new No($l));function Zg(r){let e,t;return e=new ic({props:{$$slots:{default:[Jg]},$$scope:{ctx:r}}}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},p(n,i){const s={};i&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function Kg(r){let e;const t=r[1].default,n=Pn(t,r,r[2],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&4)&&Rn(n,t,i,i[2],e?Dn(t,i[2],s,null):In(i[2]),null)},i(i){e||(ie(n,i),e=!0)},o(i){se(n,i),e=!1},d(i){n&&n.d(i)}}}function Jg(r){let e;const t=r[1].default,n=Pn(t,r,r[2],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&4)&&Rn(n,t,i,i[2],e?Dn(t,i[2],s,null):In(i[2]),null)},i(i){e||(ie(n,i),e=!0)},o(i){se(n,i),e=!1},d(i){n&&n.d(i)}}}function Qg(r){let e,t,n,i,s,o;const a=[Kg,Zg],l=[];function c(u,f){return u[0]?0:1}return t=c(r),n=l[t]=a[t](r),{c(){e=ft("div"),n.c(),Ge(e,"class","svelte-1jet5xk")},m(u,f){we(u,e,f),l[t].m(e,null),o=!0},p(u,[f]){let h=t;t=c(u),t===h?l[t].p(u,f):(Kn(),se(l[h],1,1,()=>{l[h]=null}),Jn(),n=l[t],n?n.p(u,f):(n=l[t]=a[t](u),n.c()),ie(n,1),n.m(e,null))},i(u){o||(ie(n),gn(()=>{s&&s.end(1),i=Pc(e,Br,{duration:500,delay:500}),i.start()}),o=!0)},o(u){se(n),i&&i.invalidate(),s=Dc(e,Br,{duration:500}),o=!1},d(u){u&&Se(e),l[t].d(),u&&s&&s.end()}}}function e_(r,e,t){let{$$slots:n={},$$scope:i}=e,{toggle:s=!1}=e;return r.$$set=o=>{"toggle"in o&&t(0,s=o.toggle),"$$scope"in o&&t(2,i=o.$$scope)},[s,n,i]}class Fi extends et{constructor(e){super(),Qe(this,e,e_,Qg,Je,{toggle:0})}}function il(r,e,t){const n=r.slice();return n[6]=e[t],n[8]=t,n}function rl(r){let e,t,n,i,s,o=r[8]+1+"",a,l,c,u;function f(){return r[5](r[8])}return{c(){e=ft("input"),n=Ie(),i=ft("label"),s=Zn("Scene "),a=Zn(o),l=Ie(),Ge(e,"type","radio"),Ge(e,"id","experiment-"+r[8]),e.__value=t=r[6],e.value=e.__value,Ge(e,"class","svelte-1oyf4q4"),r[4][0].push(e),Ge(i,"for","experiment-"+r[8]),Ge(i,"class","button svelte-1oyf4q4")},m(h,d){we(h,e,d),e.checked=e.__value===r[1],we(h,n,d),we(h,i,d),bt(i,s),bt(i,a),bt(i,l),c||(u=[Pt(e,"change",r[3]),Pt(e,"change",f)],c=!0)},p(h,d){r=h,d&1&&t!==(t=r[6])&&(e.__value=t,e.value=e.__value),d&2&&(e.checked=e.__value===r[1])},d(h){h&&Se(e),r[4][0].splice(r[4][0].indexOf(e),1),h&&Se(n),h&&Se(i),c=!1,Qt(u)}}}function t_(r){let e,t,n;var i=r[1];function s(o){return{}}return i&&(e=ga(i,s())),{c(){e&&xe(e.$$.fragment),t=$s()},m(o,a){e&&ge(e,o,a),we(o,t,a),n=!0},p(o,a){if(i!==(i=o[1])){if(e){Kn();const l=e;se(l.$$.fragment,1,0,()=>{_e(l,1)}),Jn()}i?(e=ga(i,s()),xe(e.$$.fragment),ie(e.$$.fragment,1),ge(e,t.parentNode,t)):e=null}},i(o){n||(e&&ie(e.$$.fragment,o),n=!0)},o(o){e&&se(e.$$.fragment,o),n=!1},d(o){o&&Se(t),e&&_e(e,o)}}}function n_(r){let e,t,n,i,s=r[0],o=[];for(let a=0;a<s.length;a+=1)o[a]=rl(il(r,s,a));return n=new ic({props:{$$slots:{default:[t_]},$$scope:{ctx:r}}}),{c(){e=ft("form");for(let a=0;a<o.length;a+=1)o[a].c();t=Ie(),xe(n.$$.fragment),Ge(e,"action",""),Ge(e,"class","svelte-1oyf4q4")},m(a,l){we(a,e,l);for(let c=0;c<o.length;c+=1)o[c].m(e,null);we(a,t,l),ge(n,a,l),i=!0},p(a,[l]){if(l&7){s=a[0];let u;for(u=0;u<s.length;u+=1){const f=il(a,s,u);o[u]?o[u].p(f,l):(o[u]=rl(f),o[u].c(),o[u].m(e,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=s.length}const c={};l&514&&(c.$$scope={dirty:l,ctx:a}),n.$set(c)},i(a){i||(ie(n.$$.fragment,a),i=!0)},o(a){se(n.$$.fragment,a),i=!1},d(a){a&&Se(e),bc(o,a),a&&Se(t),_e(n,a)}}}function i_(r,e,t){let n;xt(r,Xn,c=>t(2,n=c));let{components:i=[]}=e;n<1&&rn(Xn,n=1,n);let s=i[n-1];const o=[[]];function a(){s=this.__value,t(1,s)}const l=c=>rn(Xn,n=c+1,n);return r.$$set=c=>{"components"in c&&t(0,i=c.components)},[i,s,n,a,o,l]}class r_ extends et{constructor(e){super(),Qe(this,e,i_,n_,Je,{components:0})}}function sl(r){return Object.prototype.toString.call(r)==="[object Date]"}function js(r,e,t,n){if(typeof t=="number"||sl(t)){const i=n-t,s=(t-e)/(r.dt||1/60),o=r.opts.stiffness*i,a=r.opts.damping*s,l=(o-a)*r.inv_mass,c=(s+l)*r.dt;return Math.abs(c)<r.opts.precision&&Math.abs(i)<r.opts.precision?n:(r.settled=!1,sl(t)?new Date(t.getTime()+c):t+c)}else{if(Array.isArray(t))return t.map((i,s)=>js(r,e[s],t[s],n[s]));if(typeof t=="object"){const i={};for(const s in t)i[s]=js(r,e[s],t[s],n[s]);return i}else throw new Error(`Cannot spring ${typeof t} values`)}}function s_(r,e={}){const t=st(r),{stiffness:n=.15,damping:i=.8,precision:s=.01}=e;let o,a,l,c=r,u=r,f=1,h=0,d=!1;function g(m,_={}){u=m;const b=l={};return r==null||_.hard||p.stiffness>=1&&p.damping>=1?(d=!0,o=Ai(),c=m,t.set(r=u),Promise.resolve()):(_.soft&&(h=1/((_.soft===!0?.5:+_.soft)*60),f=0),a||(o=Ai(),d=!1,a=ir(v=>{if(d)return d=!1,a=null,!1;f=Math.min(f+h,1);const w={inv_mass:f,opts:p,settled:!0,dt:(v-o)*60/1e3},M=js(w,c,r,u);return o=v,c=r,t.set(r=M),w.settled&&(a=null),!w.settled})),new Promise(v=>{a.promise.then(()=>{b===l&&v()})}))}const p={set:g,update:(m,_)=>g(m(u,r),_),subscribe:t.subscribe,stiffness:n,damping:i,precision:s};return p}const a_=Math.PI/180;function uc(r){return r*a_}function o_(r){let e,t;return e=new Pg({props:{maxPolarAngle:uc(80),enableZoom:!1,target:{y:.5}}}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},p:$e,i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function l_(r){let e,t,n,i,s,o;return e=new Rg({props:{object:r[4],interactive:!0}}),e.$on("pointerenter",r[2]),e.$on("pointerleave",r[3]),n=new Ve({props:{type:vn}}),s=new Ve({props:{type:lr,color:"#333333"}}),{c(){xe(e.$$.fragment),t=Ie(),xe(n.$$.fragment),i=Ie(),xe(s.$$.fragment)},m(a,l){ge(e,a,l),we(a,t,l),ge(n,a,l),we(a,i,l),ge(s,a,l),o=!0},p(a,l){const c={};l&16&&(c.object=a[4]),e.$set(c)},i(a){o||(ie(e.$$.fragment,a),ie(n.$$.fragment,a),ie(s.$$.fragment,a),o=!0)},o(a){se(e.$$.fragment,a),se(n.$$.fragment,a),se(s.$$.fragment,a),o=!1},d(a){_e(e,a),a&&Se(t),_e(n,a),a&&Se(i),_e(s,a)}}}function c_(r){let e,t;return e=new Ve({props:{type:Rt,"position.y":.5,castShadow:!0,$$slots:{default:[l_,({ref:n})=>({4:n}),({ref:n})=>n?16:0]},$$scope:{ctx:r}}}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},p(n,i){const s={};i&49&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function u_(r){let e,t,n,i;return e=new Ve({props:{type:oa,args:[3,72]}}),n=new Ve({props:{type:lr,color:"white"}}),{c(){xe(e.$$.fragment),t=Ie(),xe(n.$$.fragment)},m(s,o){ge(e,s,o),we(s,t,o),ge(n,s,o),i=!0},p:$e,i(s){i||(ie(e.$$.fragment,s),ie(n.$$.fragment,s),i=!0)},o(s){se(e.$$.fragment,s),se(n.$$.fragment,s),i=!1},d(s){_e(e,s),s&&Se(t),_e(n,s)}}}function f_(r){let e,t,n,i,s,o,a,l,c,u,f,h;return e=new Ve({props:{type:St,makeDefault:!0,position:[10,10,10],fov:24,$$slots:{default:[o_]},$$scope:{ctx:r}}}),n=new Ve({props:{type:Cn,castShadow:!0,position:[3,10,10]}}),s=new Ve({props:{type:Cn,position:[-3,10,-10],intensity:.2}}),a=new Ve({props:{type:Wr,intensity:.2}}),c=new Ve({props:{type:Xi,scale:r[0],$$slots:{default:[c_]},$$scope:{ctx:r}}}),f=new Ve({props:{type:Rt,receiveShadow:!0,"rotation.x":uc(-90),$$slots:{default:[u_]},$$scope:{ctx:r}}}),{c(){xe(e.$$.fragment),t=Ie(),xe(n.$$.fragment),i=Ie(),xe(s.$$.fragment),o=Ie(),xe(a.$$.fragment),l=Ie(),xe(c.$$.fragment),u=Ie(),xe(f.$$.fragment)},m(d,g){ge(e,d,g),we(d,t,g),ge(n,d,g),we(d,i,g),ge(s,d,g),we(d,o,g),ge(a,d,g),we(d,l,g),ge(c,d,g),we(d,u,g),ge(f,d,g),h=!0},p(d,[g]){const p={};g&32&&(p.$$scope={dirty:g,ctx:d}),e.$set(p);const m={};g&1&&(m.scale=d[0]),g&33&&(m.$$scope={dirty:g,ctx:d}),c.$set(m);const _={};g&32&&(_.$$scope={dirty:g,ctx:d}),f.$set(_)},i(d){h||(ie(e.$$.fragment,d),ie(n.$$.fragment,d),ie(s.$$.fragment,d),ie(a.$$.fragment,d),ie(c.$$.fragment,d),ie(f.$$.fragment,d),h=!0)},o(d){se(e.$$.fragment,d),se(n.$$.fragment,d),se(s.$$.fragment,d),se(a.$$.fragment,d),se(c.$$.fragment,d),se(f.$$.fragment,d),h=!1},d(d){_e(e,d),d&&Se(t),_e(n,d),d&&Se(i),_e(s,d),d&&Se(o),_e(a,d),d&&Se(l),_e(c,d),d&&Se(u),_e(f,d)}}}function h_(r,e,t){let n;const i=s_(1);return xt(r,i,a=>t(0,n=a)),[n,i,()=>rn(i,n=2,n),()=>rn(i,n=1,n)]}let d_=class extends et{constructor(e){super(),Qe(this,e,h_,f_,Je,{})}};function p_(r){let e,t,n,i;return e=new Ve({props:{type:vn,args:[1,1,1]}}),n=new Ve({props:{type:lr,color:"#00ff00"}}),{c(){xe(e.$$.fragment),t=Ie(),xe(n.$$.fragment)},m(s,o){ge(e,s,o),we(s,t,o),ge(n,s,o),i=!0},p:$e,i(s){i||(ie(e.$$.fragment,s),ie(n.$$.fragment,s),i=!0)},o(s){se(e.$$.fragment,s),se(n.$$.fragment,s),i=!1},d(s){_e(e,s),s&&Se(t),_e(n,s)}}}function m_(r){let e,t,n,i,s,o,a,l,c,u;return e=new Ve({props:{type:St,makeDefault:!0,fov:75,near:.1,far:1e3,"position.z":5}}),n=new Ve({props:{type:Cn,castShadow:!0,position:[3,10,10]}}),s=new Ve({props:{type:Cn,position:[-3,10,-10],intensity:.2}}),a=new Ve({props:{type:Wr,intensity:.2}}),c=new Ve({props:{type:Rt,rotation:[r[0],r[0],0],$$slots:{default:[p_]},$$scope:{ctx:r}}}),{c(){xe(e.$$.fragment),t=Ie(),xe(n.$$.fragment),i=Ie(),xe(s.$$.fragment),o=Ie(),xe(a.$$.fragment),l=Ie(),xe(c.$$.fragment)},m(f,h){ge(e,f,h),we(f,t,h),ge(n,f,h),we(f,i,h),ge(s,f,h),we(f,o,h),ge(a,f,h),we(f,l,h),ge(c,f,h),u=!0},p(f,[h]){const d={};h&1&&(d.rotation=[f[0],f[0],0]),h&4&&(d.$$scope={dirty:h,ctx:f}),c.$set(d)},i(f){u||(ie(e.$$.fragment,f),ie(n.$$.fragment,f),ie(s.$$.fragment,f),ie(a.$$.fragment,f),ie(c.$$.fragment,f),u=!0)},o(f){se(e.$$.fragment,f),se(n.$$.fragment,f),se(s.$$.fragment,f),se(a.$$.fragment,f),se(c.$$.fragment,f),u=!1},d(f){_e(e,f),f&&Se(t),_e(n,f),f&&Se(i),_e(s,f),f&&Se(o),_e(a,f),f&&Se(l),_e(c,f)}}}function g_(r,e,t){let n=0;function i(){t(0,n+=.01),requestAnimationFrame(i)}return i(),[n]}let __=class extends et{constructor(e){super(),Qe(this,e,g_,m_,Je,{})}};function x_(r){let e,t,n,i;return e=new Ve({props:{type:vn,args:[1,1,1]}}),n=new Ve({props:{type:lr,color:"#00ff00"}}),{c(){xe(e.$$.fragment),t=Ie(),xe(n.$$.fragment)},m(s,o){ge(e,s,o),we(s,t,o),ge(n,s,o),i=!0},p:$e,i(s){i||(ie(e.$$.fragment,s),ie(n.$$.fragment,s),i=!0)},o(s){se(e.$$.fragment,s),se(n.$$.fragment,s),i=!1},d(s){_e(e,s),s&&Se(t),_e(n,s)}}}function v_(r){let e,t,n,i,s,o,a,l,c,u,f,h,d;return t=new Ve({props:{type:St,makeDefault:!0,fov:75,near:.1,far:1e3,"position.z":5}}),i=new Ve({props:{type:Cn,castShadow:!0,position:[3,10,10]}}),o=new Ve({props:{type:Cn,position:[-3,10,-10],intensity:.2}}),l=new Ve({props:{type:Wr,intensity:.2}}),u=new Ve({props:{type:Rt,rotation:[r[0],r[1],0],$$slots:{default:[x_]},$$scope:{ctx:r}}}),{c(){e=Ie(),xe(t.$$.fragment),n=Ie(),xe(i.$$.fragment),s=Ie(),xe(o.$$.fragment),a=Ie(),xe(l.$$.fragment),c=Ie(),xe(u.$$.fragment)},m(g,p){we(g,e,p),ge(t,g,p),we(g,n,p),ge(i,g,p),we(g,s,p),ge(o,g,p),we(g,a,p),ge(l,g,p),we(g,c,p),ge(u,g,p),f=!0,h||(d=Pt(document.body,"keydown",r[2]),h=!0)},p(g,[p]){const m={};p&3&&(m.rotation=[g[0],g[1],0]),p&8&&(m.$$scope={dirty:p,ctx:g}),u.$set(m)},i(g){f||(ie(t.$$.fragment,g),ie(i.$$.fragment,g),ie(o.$$.fragment,g),ie(l.$$.fragment,g),ie(u.$$.fragment,g),f=!0)},o(g){se(t.$$.fragment,g),se(i.$$.fragment,g),se(o.$$.fragment,g),se(l.$$.fragment,g),se(u.$$.fragment,g),f=!1},d(g){g&&Se(e),_e(t,g),g&&Se(n),_e(i,g),g&&Se(s),_e(o,g),g&&Se(a),_e(l,g),g&&Se(c),_e(u,g),h=!1,d()}}}function b_(r,e,t){let n=0,i=0;function s(o){o.key==="s"&&t(0,n+=.1),o.key==="w"&&t(0,n-=.1),o.key==="d"&&t(1,i+=.1),o.key==="a"&&t(1,i-=.1)}return[n,i,s]}class y_ extends et{constructor(e){super(),Qe(this,e,b_,v_,Je,{})}}function M_(r){let e,t,n,i;return e=new Ve({props:{type:vn,args:[1,1,1]}}),n=new Ve({props:{type:lr,color:"#ff0000"}}),{c(){xe(e.$$.fragment),t=Ie(),xe(n.$$.fragment)},m(s,o){ge(e,s,o),we(s,t,o),ge(n,s,o),i=!0},p:$e,i(s){i||(ie(e.$$.fragment,s),ie(n.$$.fragment,s),i=!0)},o(s){se(e.$$.fragment,s),se(n.$$.fragment,s),i=!1},d(s){_e(e,s),s&&Se(t),_e(n,s)}}}function S_(r){let e,t,n,i,s,o,a,l,c,u,f,h,d;return t=new Ve({props:{type:St,makeDefault:!0,fov:75,near:.1,far:1e3,"position.z":5}}),i=new Ve({props:{type:Cn,castShadow:!0,position:[3,10,10]}}),o=new Ve({props:{type:Cn,position:[-3,10,-10],intensity:.2}}),l=new Ve({props:{type:Wr,intensity:.2}}),u=new Ve({props:{type:Rt,rotation:[r[0],r[1],0],$$slots:{default:[M_]},$$scope:{ctx:r}}}),{c(){e=Ie(),xe(t.$$.fragment),n=Ie(),xe(i.$$.fragment),s=Ie(),xe(o.$$.fragment),a=Ie(),xe(l.$$.fragment),c=Ie(),xe(u.$$.fragment)},m(g,p){we(g,e,p),ge(t,g,p),we(g,n,p),ge(i,g,p),we(g,s,p),ge(o,g,p),we(g,a,p),ge(l,g,p),we(g,c,p),ge(u,g,p),f=!0,h||(d=[Pt(document.body,"keydown",r[2]),Pt(document.body,"keyup",r[3])],h=!0)},p(g,[p]){const m={};p&3&&(m.rotation=[g[0],g[1],0]),p&128&&(m.$$scope={dirty:p,ctx:g}),u.$set(m)},i(g){f||(ie(t.$$.fragment,g),ie(i.$$.fragment,g),ie(o.$$.fragment,g),ie(l.$$.fragment,g),ie(u.$$.fragment,g),f=!0)},o(g){se(t.$$.fragment,g),se(i.$$.fragment,g),se(o.$$.fragment,g),se(l.$$.fragment,g),se(u.$$.fragment,g),f=!1},d(g){g&&Se(e),_e(t,g),g&&Se(n),_e(i,g),g&&Se(s),_e(o,g),g&&Se(a),_e(l,g),g&&Se(c),_e(u,g),h=!1,Qt(d)}}}function w_(r,e,t){let n=0,i=0,s=0,o=[];function a(u){o.includes("s")&&t(0,n+=3*u),o.includes("w")&&t(0,n-=3*u),o.includes("d")&&t(1,i+=3*u),o.includes("a")&&t(1,i-=3*u)}function l(u){const f=u.key;["s","w","d","a"].includes(f)&&!o.includes(f)&&(o=[...o,f])}function c(u){const f=u.key;["s","w","d","a"].includes(f)&&o.includes(f)&&(o=o.filter(h=>h!==f))}return ca(u=>{let f=u.clock.elapsedTime-s;s=u.clock.elapsedTime,a(f)}),[n,i,l,c]}class E_ extends et{constructor(e){super(),Qe(this,e,w_,S_,Je,{})}}class T_ extends et{constructor(e){super(),Qe(this,e,null,null,Je,{})}}let A_=class extends et{constructor(e){super(),Qe(this,e,null,null,Je,{})}},C_=class extends et{constructor(e){super(),Qe(this,e,null,null,Je,{})}};class L_ extends et{constructor(e){super(),Qe(this,e,null,null,Je,{})}}function al(r){let e,t,n,i,s,o;const a=[O_,F_,I_,R_,D_,P_],l=[];function c(u,f){return u[0]==1?0:u[0]==2?1:u[0]==3?2:u[0]==4?3:u[0]==5?4:u[0]==6?5:-1}return~(t=c(r))&&(n=l[t]=a[t](r)),s=new Hc({}),{c(){e=ft("main"),n&&n.c(),i=Ie(),xe(s.$$.fragment),Ge(e,"class","svelte-xvwiyu")},m(u,f){we(u,e,f),~t&&l[t].m(e,null),we(u,i,f),ge(s,u,f),o=!0},p(u,f){let h=t;t=c(u),t===h?~t&&l[t].p(u,f):(n&&(Kn(),se(l[h],1,1,()=>{l[h]=null}),Jn()),~t?(n=l[t],n?n.p(u,f):(n=l[t]=a[t](u),n.c()),ie(n,1),n.m(e,null)):n=null)},i(u){o||(ie(n),ie(s.$$.fragment,u),o=!0)},o(u){se(n),se(s.$$.fragment,u),o=!1},d(u){u&&Se(e),~t&&l[t].d(),u&&Se(i),_e(s,u)}}}function P_(r){let e,t;return e=new Fi({props:{$$slots:{default:[N_]},$$scope:{ctx:r}}}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function D_(r){let e,t;return e=new Fi({props:{$$slots:{default:[z_]},$$scope:{ctx:r}}}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function R_(r){let e,t;return e=new Fi({props:{$$slots:{default:[U_]},$$scope:{ctx:r}}}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function I_(r){let e,t;return e=new Fi({props:{toggle:!0,$$slots:{default:[k_]},$$scope:{ctx:r}}}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function F_(r){let e,t;return e=new Fi({props:{$$slots:{default:[B_]},$$scope:{ctx:r}}}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function O_(r){let e,t;return e=new Fi({props:{$$slots:{default:[G_]},$$scope:{ctx:r}}}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function N_(r){let e,t;return e=new L_({}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function z_(r){let e,t;return e=new C_({}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function U_(r){let e,t;return e=new A_({}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function k_(r){let e,t;return e=new r_({props:{components:[y_,E_,T_]}}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},p:$e,i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function B_(r){let e,t;return e=new __({}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function G_(r){let e,t;return e=new d_({}),{c(){xe(e.$$.fragment)},m(n,i){ge(e,n,i),t=!0},i(n){t||(ie(e.$$.fragment,n),t=!0)},o(n){se(e.$$.fragment,n),t=!1},d(n){_e(e,n)}}}function V_(r){let e,t,n,i;e=new Bc({});let s=r[0]&&al(r);return{c(){xe(e.$$.fragment),t=Ie(),s&&s.c(),n=$s()},m(o,a){ge(e,o,a),we(o,t,a),s&&s.m(o,a),we(o,n,a),i=!0},p(o,[a]){o[0]?s?(s.p(o,a),a&1&&ie(s,1)):(s=al(o),s.c(),ie(s,1),s.m(n.parentNode,n)):s&&(Kn(),se(s,1,1,()=>{s=null}),Jn())},i(o){i||(ie(e.$$.fragment,o),ie(s),i=!0)},o(o){se(e.$$.fragment,o),se(s),i=!1},d(o){_e(e,o),o&&Se(t),s&&s.d(o),o&&Se(n)}}}function H_(r,e,t){let n,i;xt(r,Xn,o=>t(1,n=o)),xt(r,wi,o=>t(0,i=o)),Xn.subscribe(()=>{s()}),wi.subscribe(o=>{s()});function s(){let o="?",a=[];i!==0&&a.push(`week=${+i}`),n!==0&&a.push(`scene=${+n}`),window.history.replaceState(null,null,o+a.join("&"))}return[i]}class W_ extends et{constructor(e){super(),Qe(this,e,H_,V_,Je,{})}}new W_({target:document.getElementById("app")});

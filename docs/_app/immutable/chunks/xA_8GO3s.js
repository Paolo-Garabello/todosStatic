var Mn=Array.isArray,nn=Array.prototype.indexOf,Yn=Array.from,Hn=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,rn=Object.getOwnPropertyDescriptors,jn=Object.prototype,Bn=Array.prototype,en=Object.getPrototypeOf;function Un(t){return typeof t=="function"}const Vn=()=>{};function Gn(t){return t()}function mt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,gt=4,tt=8,ft=16,k=32,B=64,$=128,N=256,Z=512,h=1024,R=2048,F=4096,P=8192,L=16384,sn=32768,At=65536,Kn=1<<17,ln=1<<19,It=1<<20,Et=Symbol("$state"),$n=Symbol("legacy props"),Zn=Symbol("");function kt(t){return t===this.v}function an(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Rt(t){return!an(t,this.v)}function un(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function on(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function _n(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Jn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Wn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Xn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function vn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function Qn(){nt=!0}const tr=1,nr=2,rr=16,er=1,sr=2,lr=4,ar=8,ur=16,or=1,ir=2,fr=4,_r=1,cr=2,pn="[",hn="[!",dn="]",Ot={},vr=Symbol();function _t(t,n){var r={f:0,v:t,reactions:null,equals:kt,rv:0,wv:0};return r}function pr(t){return En(_t(t))}function hr(t,n=!1){var e;const r=_t(t);return n||(r.equals=Rt),nt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function En(t){return u!==null&&!I&&u.f&y&&(m===null?xn([t]):m.push(t)),t}function dr(t,n){return u!==null&&!I&&rt()&&u.f&(y|ft)&&(m===null||!m.includes(t))&&vn(),yn(t,n)}function yn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Zt(),St(t,R),rt()&&i!==null&&i.f&h&&!(i.f&(k|B))&&(A===null?Dn([t]):A.push(t))),n}function St(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),s=r.length,l=0;l<s;l++){var a=r[l],o=a.f;o&R||!e&&a===i||(g(a,n),o&(h|N)&&(o&y?St(a,F):st(a)))}}function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let x=!1;function Er(t){x=t}let w;function M(t){if(t===null)throw xt(),Ot;return w=t}function yr(){return M(C(w))}function wr(t){if(x){if(C(w)!==null)throw xt(),Ot;w=t}}function Tr(t=1){if(x){for(var n=t,r=w;n--;)r=C(r);w=r}}function mr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===dn){if(t===0)return n;t-=1}else(r===pn||r===hn)&&(t+=1)}var e=C(n);n.remove(),n=e}}var yt,Dt,Nt;function gr(){if(yt===void 0){yt=window;var t=Element.prototype,n=Node.prototype;Dt=dt(n,"firstChild").get,Nt=dt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function at(t){return Dt.call(t)}function C(t){return Nt.call(t)}function Ar(t,n){if(!x)return at(t);var r=at(w);if(r===null)r=w.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),M(e),e}return M(r),r}function Ir(t,n){if(!x){var r=at(t);return r instanceof Comment&&r.data===""?C(r):r}return w}function kr(t,n=1,r=!1){let e=x?w:t;for(var s;n--;)s=e,e=C(e);if(!x)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=lt();return e===null?s==null||s.after(a):e.before(a),M(a),a}return M(e),e}function Rr(t){t.textContent=""}function Ct(t){var n=y|R;i===null?n|=N:i.f|=It;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:f,deps:null,equals:kt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??i};return r!==null&&(r.children??(r.children=[])).push(e),e}function Or(t){const n=Ct(t);return n.equals=Rt,n}function bt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ct(e):D(e)}}}function wn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function qt(t){var n,r=i;X(wn(t));try{bt(t),n=Jt(t)}finally{X(r)}return n}function Pt(t){var n=qt(t),r=(S||t.f&N)&&t.deps!==null?F:h;g(t,r),t.equals(n)||(t.v=n,t.wv=Zt())}function ct(t){bt(t),j(t,0),g(t,L),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ft(t){i===null&&u===null&&fn(),u!==null&&u.f&N&&on(),vt&&un()}function Tn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function U(t,n,r,e=!0){var s=(t&B)!==0,l=i,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=b;try{wt(!0),pt(a),a.f|=sn}catch(T){throw D(a),T}finally{wt(o)}}else n!==null&&st(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(It|$))===0;if(!_&&!s&&e&&(l!==null&&Tn(a,l),u!==null&&u.f&y)){var c=u;(c.children??(c.children=[])).push(a)}return a}function Sr(t){Ft();var n=i!==null&&(i.f&k)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:i,reaction:u})}else{var e=Lt(t);return e}}function xr(t){return Ft(),mn(t)}function Dr(t){const n=U(B,t,!0);return(r={})=>new Promise(e=>{r.outro?In(n,()=>{D(n),e(void 0)}):(D(n),e(void 0))})}function Lt(t){return U(gt,t,!1)}function mn(t){return U(tt,t,!0)}function Nr(t,n=[],r=Ct){const e=n.map(r);return gn(()=>t(...e.map(Fn)))}function gn(t,n=0){return U(tt|ft|n,t,!0)}function Cr(t,n=!0){return U(tt|k,t,!0,n)}function Mt(t){var n=t.teardown;if(n!==null){const r=vt,e=u;Tt(!0),W(null);try{n.call(null)}finally{Tt(r),W(e)}}}function Yt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ct(n[r])}}function Ht(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;D(r,n),r=e}}function An(t){for(var n=t.first;n!==null;){var r=n.next;n.f&k||D(n),n=r}}function D(t,n=!0){var r=!1;if((n||t.f&ln)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:C(e);e.remove(),e=l}r=!0}Ht(t,n&&!r),Yt(t),j(t,0),g(t,L);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Mt(t);var o=t.parent;o!==null&&o.first!==null&&jt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function jt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function In(t,n){var r=[];Bt(t,r,!0),kn(r,()=>{D(t),n&&n()})}function kn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Bt(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&At)!==0||(e.f&k)!==0;Bt(e,n,l?r:!1),e=s}}}function br(t){Ut(t,!0)}function Ut(t,n){if(t.f&P){t.f^=P,t.f&h||(t.f^=h),V(t)&&(g(t,R),st(t));for(var r=t.first;r!==null;){var e=r.next,s=(r.f&At)!==0||(r.f&k)!==0;Ut(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const Rn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let z=!1,J=!1,ut=[],ot=[];function Vt(){z=!1;const t=ut.slice();ut=[],mt(t)}function Gt(){J=!1;const t=ot.slice();ot=[],mt(t)}function qr(t){z||(z=!0,queueMicrotask(Vt)),ut.push(t)}function Pr(t){J||(J=!0,Rn(Gt)),ot.push(t)}function On(){z&&Vt(),J&&Gt()}const Kt=0,Sn=1;let G=!1,K=Kt,Y=!1,H=null,b=!1,vt=!1;function wt(t){b=t}function Tt(t){vt=t}let O=[],q=0;let u=null,I=!1;function W(t){u=t}let i=null;function X(t){i=t}let m=null;function xn(t){m=t}let p=null,E=0,A=null;function Dn(t){A=t}let $t=1,Q=0,S=!1,f=null;function Zt(){return++$t}function rt(){return!nt||f!==null&&f.l===null}function V(t){var c;var n=t.f;if(n&R)return!0;if(n&F){var r=t.deps,e=(n&N)!==0;if(r!==null){var s,l,a=(n&Z)!==0,o=e&&i!==null&&!S,_=r.length;if(a||o){for(s=0;s<_;s++)l=r[s],(a||!((c=l==null?void 0:l.reactions)!=null&&c.includes(t)))&&(l.reactions??(l.reactions=[])).push(t);a&&(t.f^=Z)}for(s=0;s<_;s++)if(l=r[s],V(l)&&Pt(l),l.wv>t.wv)return!0}(!e||i!==null&&!S)&&g(t,h)}return!1}function Nn(t,n){for(var r=n;r!==null;){if(r.f&$)try{r.fn(t);return}catch{r.f^=$}r=r.parent}throw G=!1,t}function Cn(t){return(t.f&L)===0&&(t.parent===null||(t.parent.f&$)===0)}function et(t,n,r,e){if(G){if(r===null&&(G=!1),Cn(n))throw t;return}r!==null&&(G=!0);{Nn(t,n);return}}function zt(t,n,r=0){var e=t.reactions;if(e!==null)for(var s=0;s<e.length;s++){var l=e[s];l.f&y?zt(l,n,r+1):n===l&&(r===0?g(l,R):l.f&h&&g(l,F),st(l))}}function Jt(t){var ht;var n=p,r=E,e=A,s=u,l=S,a=m,o=f,_=I,c=t.f;p=null,E=0,A=null,u=c&(k|B)?null:t,S=!b&&(c&N)!==0,m=null,f=t.ctx,I=!1,Q++;try{var T=(0,t.fn)(),v=t.deps;if(p!==null){var d;if(j(t,E),v!==null&&E>0)for(v.length=E+p.length,d=0;d<p.length;d++)v[E+d]=p[d];else t.deps=v=p;if(!S)for(d=E;d<v.length;d++)((ht=v[d]).reactions??(ht.reactions=[])).push(t)}else v!==null&&E<v.length&&(j(t,E),v.length=E);if(rt()&&A!==null&&!(t.f&(y|F|R)))for(d=0;d<A.length;d++)zt(A[d],t);return s!==null&&Q++,T}finally{p=n,E=r,A=e,u=s,S=l,m=a,f=o,I=_}}function bn(t,n){let r=n.reactions;if(r!==null){var e=nn.call(r,t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(p===null||!p.includes(n))&&(g(n,F),n.f&(N|Z)||(n.f^=Z),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)bn(t,r[e])}function pt(t){var n=t.f;if(!(n&L)){g(t,h);var r=i,e=f;i=t;try{n&ft?An(t):Ht(t),Yt(t),Mt(t);var s=Jt(t);t.teardown=typeof s=="function"?s:null,t.wv=$t;var l=t.deps,a}catch(o){et(o,t,r,e||t.ctx)}finally{i=r}}}function Wt(){if(q>1e3){q=0;try{_n()}catch(t){if(H!==null)et(t,H,null);else throw t}}q++}function Xt(t){var n=t.length;if(n!==0){Wt();var r=b;b=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Qt(s,l),qn(l)}}finally{b=r}}}function qn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(L|P)))try{V(e)&&(pt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?jt(e):e.fn=null))}catch(s){et(s,e,null,e.ctx)}}}function Pn(){if(Y=!1,q>1001)return;const t=O;O=[],Xt(t),Y||(q=0,H=null)}function st(t){K===Kt&&(Y||(Y=!0,queueMicrotask(Pn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(B|k)){if(!(r&h))return;n.f^=h}}O.push(n)}function Qt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&k)!==0,a=l&&(s&h)!==0,o=r.next;if(!a&&!(s&P))if(s&tt){if(l)r.f^=h;else try{V(r)&&pt(r)}catch(v){et(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else s&gt&&e.push(r);if(o===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=o}for(var T=0;T<e.length;T++)_=e[T],n.push(_),Qt(_,n)}function tn(t){var n=K,r=O;try{Wt();const s=[];K=Sn,O=s,Y=!1,Xt(r);var e=t==null?void 0:t();return On(),(O.length>0||s.length>0)&&tn(),q=0,H=null,e}finally{K=n,O=r}}async function Fr(){await Promise.resolve(),tn()}function Fn(t){var T;var n=t.f,r=(n&y)!==0;if(r&&n&L){var e=qt(t);return ct(t),e}if(u!==null&&!I){m!==null&&m.includes(t)&&cn();var s=u.deps;t.rv<Q&&(t.rv=Q,p===null&&s!==null&&s[E]===t?E++:p===null?p=[t]:p.push(t))}else if(r&&t.deps===null)for(var l=t,a=l.parent,o=l;a!==null;)if(a.f&y){var _=a;o=_,a=_.parent}else{var c=a;(T=c.deriveds)!=null&&T.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return r&&(l=t,V(l)&&Pt(l)),t.v}function Lr(t){var n=I;try{return I=!0,t()}finally{I=n}}const Ln=-7169;function g(t,n){t.f=t.f&Ln|n}function Mr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},nt&&!n&&(f.l={s:null,u:null,r1:[],r2:_t(!1)})}function Yr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=i,e=u;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];X(l.effect),W(l.reaction),Lt(l.fn)}}finally{X(r),W(e)}}f=n.p,n.m=!0}return{}}function Hr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Et in t)it(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&Et in r&&it(r)}}}function it(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{it(t[e],n)}catch{}const r=en(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=rn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{Rt as $,Bn as A,_t as B,Wn as C,dr as D,At as E,dt as F,i as G,Xn as H,en as I,yr as J,hn as K,mr as L,M,Er as N,br as O,In as P,Jn as Q,Kn as R,Et as S,k as T,vr as U,B as V,X as W,sr as X,$n as Y,Or as Z,lr as _,Lr as a,er as a0,ar as a1,ur as a2,hr as a3,Hn as a4,W as a5,u as a6,lt as a7,ln as a8,pn as a9,Zn as aA,rn as aB,ft as aC,sn as aD,or as aE,Un as aF,ir as aG,fr as aH,rt as aI,Tr as aJ,an as aK,C as aa,at as ab,gr as ac,Ot as ad,dn as ae,xt as af,zn as ag,Rr as ah,Yn as ai,Dr as aj,_r as ak,cr as al,Lt as am,mn as an,qr as ao,tn as ap,Fr as aq,pr as ar,P as as,yn as at,Bt as au,kn as av,nr as aw,tr as ax,rr as ay,Pr as az,gn as b,f as c,Cr as d,Qn as e,D as f,w as g,x as h,Mn as i,Ir as j,xr as k,nt as l,Fn as m,Vn as n,Gn as o,Hr as p,Ct as q,mt as r,Mr as s,Nr as t,Sr as u,Yr as v,kr as w,Ar as x,wr as y,jn as z};

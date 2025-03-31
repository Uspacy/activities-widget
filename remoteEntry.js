var UspacyActivitiesWidget;(()=>{"use strict";var e,t,r,n,a,o,i,l,u,s,c,d,f,h,p,m,v,b,g,y,w,P,j,k,x,S={9232:(e,t,r)=>{var n={"./app":()=>Promise.all([r.e(754),r.e(527),r.e(929),r.e(92),r.e(765),r.e(757),r.e(89),r.e(957)]).then((()=>()=>r(5957))),"./settings":()=>r.e(703).then((()=>()=>r(703)))},a=(e,t)=>(r.R=t,t=r.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),o=(e,t)=>{if(r.S){var n="default",a=r.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[n]=e,r.I(n,t)}};r.d(t,{get:()=>a,init:()=>o})}},O={};function E(e){var t=O[e];if(void 0!==t)return t.exports;var r=O[e]={id:e,loaded:!1,exports:{}};return S[e](r,r.exports,E),r.loaded=!0,r.exports}E.m=S,E.c=O,E.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return E.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,E.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var a=Object.create(null);E.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,E.d(a,o),a},E.d=(e,t)=>{for(var r in t)E.o(t,r)&&!E.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},E.f={},E.e=e=>Promise.all(Object.keys(E.f).reduce(((t,r)=>(E.f[r](e,t),t)),[])),E.u=e=>"static/js/"+e+"."+{36:"7e10034b",89:"821c7a91",104:"512a4cf3",150:"e4825b1c",168:"015200ec",235:"074cf88a",363:"0908fc74",376:"cecce12b",389:"fb4ddc51",394:"1bc46913",404:"730d3f64",479:"44de4470",491:"d5a504b3",492:"8cdf91a2",518:"ee1a9b3e",540:"c70a1707",564:"d44a4788",635:"9729015d",639:"e4ecd399",648:"ed5b48a7",655:"2a05e6cd",703:"9d969204",733:"80cbf8c9",754:"d9c69c05",770:"a00f91f9",810:"355af4df",848:"22d0ca88",860:"021521a6",879:"e19e7ed1",957:"64fae8ce",961:"8555d5ff"}[e]+".chunk.js",E.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),E.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="container:",E.l=(e,t,a,o)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var c=u[s];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==n+a){i=c;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,E.nc&&i.setAttribute("nonce",E.nc),i.setAttribute("data-webpack",n+a),i.src=e),r[e]=[t];var d=(t,n)=>{i.onerror=i.onload=null,clearTimeout(f);var a=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},E.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{E.S={};var e={},t={};E.I=(r,n)=>{n||(n=[]);var a=t[r];if(a||(a=t[r]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[r])return e[r];E.o(E.S,r)||(E.S[r]={});var o=E.S[r],i="container",l=(e,t,r,n)=>{var a=o[e]=o[e]||{},l=a[t];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[t]={get:r,from:i,eager:!!n})},u=[];return"default"===r&&(l("@emotion/react","11.11.3",(()=>Promise.all([E.e(655),E.e(518),E.e(527),E.e(780),E.e(168)]).then((()=>()=>E(7518))))),l("@emotion/styled","11.11.0",(()=>Promise.all([E.e(527),E.e(92),E.e(860)]).then((()=>()=>E(1479))))),l("@mui/material","5.15.6",(()=>Promise.all([E.e(655),E.e(754),E.e(564),E.e(527),E.e(929),E.e(627),E.e(92),E.e(757)]).then((()=>()=>E(3564))))),l("@reduxjs/toolkit","2.6.1",(()=>E.e(879).then((()=>()=>E(9879))))),l("@uspacy/sdk","0.0.139",(()=>E.e(491).then((()=>()=>E(491))))),l("@uspacy/store","0.0.185",(()=>Promise.all([E.e(394),E.e(150),E.e(527),E.e(765),E.e(281),E.e(848)]).then((()=>()=>E(8394))))),l("i18next-resources-to-backend","1.1.4",(()=>E.e(235).then((()=>()=>E(1235))))),l("i18next","23.4.6",(()=>E.e(635).then((()=>()=>E(2635))))),l("react-dom","18.2.0",(()=>Promise.all([E.e(961),E.e(527)]).then((()=>()=>E(961))))),l("react-i18next","11.16.7",(()=>Promise.all([E.e(527),E.e(770)]).then((()=>()=>E(389))))),l("react-is","16.13.1",(()=>E.e(404).then((()=>()=>E(3404))))),l("react-is","18.2.0",(()=>E.e(363).then((()=>()=>E(4363))))),l("react-is","19.0.0",(()=>E.e(492).then((()=>()=>E(5492))))),l("react-redux","8.1.3",(()=>Promise.all([E.e(733),E.e(527),E.e(929),E.e(627),E.e(780)]).then((()=>()=>E(9733))))),l("react-router-dom","6.21.3",(()=>Promise.all([E.e(648),E.e(527),E.e(929)]).then((()=>()=>E(2648))))),l("react","18.2.0",(()=>E.e(540).then((()=>()=>E(6540)))))),e[r]=u.length?Promise.all(u).then((()=>e[r]=1)):1}}})(),(()=>{var e;E.g.importScripts&&(e=E.g.location+"");var t=E.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),E.p=e})(),a=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},o=(e,t)=>{e=a(e),t=a(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var i=t[r],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;r++}},i=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return r}var o=[];for(a=1;a<e.length;a++){var l=e[a];o.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?o.pop()+" "+o.pop():i(l))}return u();function u(){return o.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,t)=>{if(0 in e){t=a(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var o=0,i=1,u=!0;;i++,o++){var s,c,d=i<e.length?(typeof e[i])[0]:"";if(o>=t.length||"o"==(c=(typeof(s=t[o]))[0]))return!u||("u"==d?i>r&&!n:""==d!=n);if("u"==c){if(!u||"u"!=d)return!1}else if(u)if(d==c)if(i<=r){if(s!=e[i])return!1}else{if(n?s>e[i]:s<e[i])return!1;s!=e[i]&&(u=!1)}else if("s"!=d&&"n"!=d){if(n||i<=r)return!1;u=!1,i--}else{if(i<=r||c<d!=n)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,i--)}}var f=[],h=f.pop.bind(f);for(o=1;o<e.length;o++){var p=e[o];f.push(1==p?h()|h():2==p?h()&h():p?l(p,t):!h())}return!!h()},u=(e,t)=>e&&E.o(e,t),s=e=>(e.loaded=1,e.get()),c=e=>Object.keys(e).reduce(((t,r)=>(e[r].eager&&(t[r]=e[r]),t)),{}),d=(e,t,r,n)=>{var a=n?c(e[t]):e[t];return(t=Object.keys(a).reduce(((e,t)=>!l(r,t)||e&&!o(e,t)?e:t),0))&&a[t]},f=(e,t,r)=>{var n=r?c(e[t]):e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&o(e,t)?t:e),0)},h=(e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+i(n)+")",p=(e,t,r,n,a)=>{var o=e[r];return"No satisfying version ("+i(n)+")"+(a?" for eager consumption":"")+" of shared module "+r+" found in shared scope "+t+".\nAvailable versions: "+Object.keys(o).map((e=>e+" from "+o[e].from)).join(", ")},m=e=>{throw new Error(e)},v=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},g=(e,t,r)=>r?r():((e,t)=>m("Shared module "+t+" doesn't exist in shared scope "+e))(e,t),y=(b=e=>function(t,r,n,a,o){var i=E.I(t);return i&&i.then&&!n?i.then(e.bind(e,t,E.S[t],r,!1,a,o)):e(t,E.S[t],r,n,a,o)})(((e,t,r,n,a,o)=>{if(!u(t,r))return g(e,r,o);var i=d(t,r,a,n);return i?s(i):o?o():void m(p(t,e,r,a,n))})),w=b(((e,t,r,n,a,o)=>{if(!u(t,r))return g(e,r,o);var i=f(t,r,n);return l(a,i)||v(h(t,r,i,a)),s(t[r][i])})),P={},j={1527:()=>w("default","react",!1,[4,18,2,0],(()=>E.e(540).then((()=>()=>E(6540))))),5780:()=>y("default","react-is",!1,[4,18,2,0],(()=>E.e(404).then((()=>()=>E(3404))))),8092:()=>w("default","@emotion/react",!1,[4,11,11,3],(()=>Promise.all([E.e(655),E.e(518),E.e(780)]).then((()=>()=>E(7518))))),5929:()=>w("default","react-dom",!1,[4,18,2,0],(()=>E.e(961).then((()=>()=>E(961))))),6627:()=>y("default","react-is",!1,[4,18,2,0],(()=>E.e(363).then((()=>()=>E(4363))))),1757:()=>w("default","@emotion/styled",!1,[4,11,11,0],(()=>E.e(479).then((()=>()=>E(1479))))),7765:()=>w("default","@uspacy/sdk",!1,[4,0,0,139],(()=>E.e(491).then((()=>()=>E(491))))),3512:()=>w("default","react-redux",!1,[1,8,1,3],(()=>Promise.all([E.e(733),E.e(929),E.e(627),E.e(780)]).then((()=>()=>E(9733))))),9646:()=>w("default","@reduxjs/toolkit",!1,[1,2,6,1],(()=>E.e(879).then((()=>()=>E(9879))))),612:()=>y("default","i18next-resources-to-backend",!1,[1,1,1,4],(()=>E.e(235).then((()=>()=>E(1235))))),3062:()=>y("default","i18next",!1,[1,23,4,6],(()=>E.e(635).then((()=>()=>E(2635))))),5869:()=>w("default","@mui/material",!1,[4,5,15,6],(()=>Promise.all([E.e(655),E.e(564),E.e(627)]).then((()=>()=>E(3564))))),8504:()=>y("default","react-i18next",!1,[4,11,16,7],(()=>E.e(389).then((()=>()=>E(389)))))},k={89:[612,3062,5869,8504],92:[8092],281:[3512,9646],527:[1527],627:[6627],757:[1757],765:[7765],780:[5780],929:[5929]},x={},E.f.consumes=(e,t)=>{E.o(k,e)&&k[e].forEach((e=>{if(E.o(P,e))return t.push(P[e]);if(!x[e]){var r=t=>{P[e]=0,E.m[e]=r=>{delete E.c[e],r.exports=t()}};x[e]=!0;var n=t=>{delete P[e],E.m[e]=r=>{throw delete E.c[e],t}};try{var a=j[e]();a.then?t.push(P[e]=a.then(r).catch(n)):r(a)}catch(e){n(e)}}}))},(()=>{var e={813:0};E.f.j=(t,r)=>{var n=E.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(7(57|65|80)|92(|9)|[56]27|281)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=E.p+E.u(t),i=new Error;E.l(o,(r=>{if(E.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,o=r[0],i=r[1],l=r[2],u=0;if(o.some((t=>0!==e[t]))){for(n in i)E.o(i,n)&&(E.m[n]=i[n]);l&&l(E)}for(t&&t(r);u<o.length;u++)a=o[u],E.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkcontainer=self.webpackChunkcontainer||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var _=E(9232);UspacyActivitiesWidget=_})();
//# sourceMappingURL=remoteEntry.js.map
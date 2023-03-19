(function(){"use strict";var e={993:function(e,t,n){var o=n(963),i=n(252);function r(e,t,n,o,r,a){const c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)((0,i.LL)(a.layout),null,{default:(0,i.w5)((()=>[(0,i.Wm)(c)])),_:1})}function a(e,t,n,o,r,a){const c=(0,i.up)("HeaderMain"),s=(0,i.up)("router-view"),u=(0,i.up)("FooterMain");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(c),(0,i.Wm)(s),(0,i.Wm)(u)],64)}var c=n(577),s=n.p+"img/logo.ab32e1ec.svg",u=n.p+"img/burger.3ffcaa6c.svg",d=n.p+"img/iconSearch.f76e14a5.svg",l=n.p+"img/iconBusket.edda3ad8.svg",m=n.p+"img/iconUser.fec13e5c.svg";const p=e=>((0,i.dD)("data-v-4d12cd6c"),e=e(),(0,i.Cn)(),e),f={class:"header"},g={class:"container"},h={class:"hcontent"},v=p((()=>(0,i._)("img",{src:s,alt:"img"},null,-1))),_=p((()=>(0,i._)("img",{src:u,alt:"img"},null,-1))),b=[_],y={class:"hcontent__panel"},k=p((()=>(0,i._)("img",{src:d,alt:"img"},null,-1))),w=[k],E=p((()=>(0,i._)("div",{class:"hcontent__panel__icon"},[(0,i._)("img",{src:l,alt:"img"})],-1))),S=p((()=>(0,i._)("div",{class:"hcontent__panel__icon"},[(0,i._)("img",{src:m,alt:"img"})],-1))),L=p((()=>(0,i._)("div",{class:"hcontent__search__input"},[(0,i._)("input",{type:"text"})],-1))),C=[L];function T(e,t,n,o,r,a){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",g,[(0,i._)("div",h,[(0,i.Wm)(s,{class:"hcontent__logo",to:"/"},{default:(0,i.w5)((()=>[v])),_:1}),(0,i._)("div",{class:"hcontent__burger",onClick:t[0]||(t[0]=e=>r.openMenu=!r.openMenu)},b),(0,i._)("div",{class:(0,c.C_)(["hcontent__menu",r.openMenu?"openMenu":""])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.menu,((e,t)=>((0,i.wg)(),(0,i.j4)(s,{class:"hcontent__menu__item",key:t,to:e.link},{default:(0,i.w5)((()=>[(0,i.Uk)((0,c.zw)(e.name),1)])),_:2},1032,["to"])))),128))],2),(0,i._)("div",y,[(0,i._)("div",{class:"hcontent__panel__icon",onClick:t[1]||(t[1]=e=>r.openSearch=!r.openSearch)},w),E,S])]),(0,i._)("div",{class:(0,c.C_)(["hcontent__search",r.openSearch?"openSearch":""])},C,2)])])}var O={data(){return{openMenu:!1,openSearch:!1,lcMenu:!1,acc:{first_name:"",last_name:""},menu:[{name:"Home",link:"/"},{name:"Products",link:"/products"},{name:"Categories",link:"/categories"},{name:"About",link:"/about"},{name:"Contact Us",link:"/contact"}]}}},x=n(744);const M=(0,x.Z)(O,[["render",T],["__scopeId","data-v-4d12cd6c"]]);var P=M;const j={class:"footer"};function A(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",j)}var N={data(){return{}},methods:{},mounted(){}};const D=(0,x.Z)(N,[["render",A]]);var B=D,U={components:{HeaderMain:P,FooterMain:B},data(){return{}},methods:{},computed:{},mounted(){}};const I=(0,x.Z)(U,[["render",a]]);var F=I,H={components:{MainLayout:F},computed:{layout(){return(this.$route.meta.layout||"main")+"-layout"}}};const Z=(0,x.Z)(H,[["render",r]]);var W=Z,$=n(201);const z=e=>((0,i.dD)("data-v-5ff1123a"),e=e(),(0,i.Cn)(),e),K={class:"notFound"},R={class:"container"},q=z((()=>(0,i._)("h1",null,"404 Page not found!",-1)));function V(e,t,n,o,r,a){const c=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",K,[(0,i._)("div",R,[q,(0,i._)("p",null,[(0,i.Uk)("Go to "),(0,i.Wm)(c,{class:"link-home",to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("Main Page")])),_:1}),(0,i.Uk)("?")])])])}var Y={};const G=(0,x.Z)(Y,[["render",V],["__scopeId","data-v-5ff1123a"]]);var J=G;const Q=[{path:"/",name:"home",meta:{layout:"main"},component:()=>n.e(956).then(n.bind(n,684))},{path:"/products",name:"products",meta:{layout:"main"},component:()=>n.e(484).then(n.bind(n,484))},{path:"/categories",name:"categories",meta:{layout:"main"},component:()=>n.e(643).then(n.bind(n,643))},{path:"/about",name:"about",meta:{layout:"main"},component:()=>n.e(631).then(n.bind(n,631))},{path:"/contact",name:"contact",meta:{layout:"main"},component:()=>n.e(457).then(n.bind(n,457))},{path:"/:catchAll(.*)",name:"NotFound",component:J}],X=(0,$.p7)({history:(0,$.PO)(),routes:Q});X.beforeEach(((e,t,n)=>{window.scrollTo(0,0),n()}));var ee=X,te=n(907),ne={state:{products:[{id:1,title:"Armchair",description:"Light single chair",price:145,img:n(924)},{id:2,title:"Kimmi",description:"Light single chair",price:145,img:n(195)},{id:3,title:"Netty",description:"Light single chair",price:145,img:n(93)},{id:4,title:"Sib",description:"Light single chair",price:145,img:n(36)},{id:5,title:"Eveleen",description:"Light single chair",price:145,img:n(924)},{id:6,title:"Mindy",description:"Light single chair",price:145,img:n(195)},{id:7,title:"Vincenz",description:"Light single chair",price:145,img:n(93)},{id:8,title:"Neilla",description:"Light single chair",price:145,img:n(36)},{id:9,title:"Wolfy",description:"Light single chair",price:145,img:n(924)},{id:10,title:"Lenette",description:"Light single chair",price:145,img:n(195)}]},mutations:{SET_PRODUCTS(e,t){e.products=t}},actions:{SET_PRODUCTS({commit:e},t){e("SET_EVENT",t)}},getters:{PRODUCTS(e){return e.products}},modules:{}},oe=(0,te.MT)({state:{},getters:{},mutations:{},actions:{},modules:{products:ne}}),ie=n(346),re=n(154),ae={install(e,t){e.config.globalProperties.$message=function(e){setTimeout((function(){document.getElementById("message").classList.add("hidden-xs")}),3e3),document.getElementById("message").innerHTML=e,document.getElementById("message").classList.remove("hidden-xs")},e.config.globalProperties.$error=function(e){setTimeout((function(){document.getElementById("message").classList.add("hidden-xs")}),3e3),document.getElementById("message").innerHTML=e,document.getElementById("message").classList.remove("hidden-xs")}}};const ce=(0,o.ri)({});ce.config.globalProperties.$http=re.Z;const se=localStorage.getItem("token");se&&(ce.config.globalProperties.$http.defaults.headers.common["Authorization"]=se),(0,o.ri)(W).use(ae).use(oe).use(ee).use(ie.Z,re.Z).mount("#app")},924:function(e,t,n){e.exports=n.p+"img/product1.dfbaf99a.png"},195:function(e,t,n){e.exports=n.p+"img/product2.17ed4256.png"},93:function(e,t,n){e.exports=n.p+"img/product3.4d074ed3.png"},36:function(e,t,n){e.exports=n.p+"img/product4.ba802f3a.png"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,loaded:!1,exports:{}};return e[o](r,r.exports,n),r.loaded=!0,r.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],r=e[d][2];for(var c=!0,s=0;s<o.length;s++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(c=!1,r<a&&(a=r));if(c){e.splice(d--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,i,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{457:"abe4e6e9",484:"deebe796",631:"30ccbc18",643:"7ccf612f",956:"cbfeb6fb"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{457:"47ce9728",484:"06da7cd4",631:"b2c9ed6b",643:"3098065f",956:"eacd40ea"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="shop:";n.l=function(o,i,r,a){if(e[o])e[o].push(i);else{var c,s;if(void 0!==r)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+r){c=l;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+r),c.src=o),e[o]=[i];var m=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var i=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),i&&i.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/TestShop/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,r.parentNode&&r.parentNode.removeChild(r),i(s)}};return r.onerror=r.onload=a,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){i=a[o],r=i.getAttribute("data-href");if(r===e||r===t)return i}},o=function(o){return new Promise((function(i,r){var a=n.miniCssF(o),c=n.p+a;if(t(a,c))return i();e(o,c,null,i,r)}))},i={143:0};n.f.miniCss=function(e,t){var n={457:1,484:1,631:1,643:1,956:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var a=n.p+n.u(t),c=new Error,s=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,i[1](c)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],c=o[1],s=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(s)var d=s(n)}for(t&&t(o);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},o=self["webpackChunkshop"]=self["webpackChunkshop"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(993)}));o=n.O(o)})();
//# sourceMappingURL=app.0ea9ad57.js.map
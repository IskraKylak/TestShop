"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[956],{684:function(e,t,n){n.r(t),n.d(t,{default:function(){return de}});var a=n(252);const l={class:"mainPage"};function o(e,t,n,o,i,r){const s=(0,a.up)("Banner"),u=(0,a.up)("PopularProducts");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(s),(0,a.Wm)(u)])}var i=n(577),r=n.p+"img/mainFon.e2e7d872.png";const s=e=>((0,a.dD)("data-v-7ecd7448"),e=e(),(0,a.Cn)(),e),u={class:"banner"},c=s((()=>(0,a._)("img",{class:"banner__img",src:r,alt:"img"},null,-1))),d={class:"container"},v={class:"bContent"},p={class:"bContent__title"},m={class:"bContent__description"};function f(e,t,n,l,o,r){const s=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)("div",u,[c,(0,a._)("div",d,[(0,a._)("div",v,[(0,a._)("h1",p,(0,i.zw)(o.title),1),(0,a._)("p",m,(0,i.zw)(o.description),1),(0,a.Wm)(s,{class:"bContent__btnGreen"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.nameBtn),1)])),_:1})])])])}function h(e,t,n,l,o,i){return(0,a.wg)(),(0,a.iD)("button",(0,a.dG)({class:"btn"},e.$attrs),[(0,a.WI)(e.$slots,"default",{},void 0,!0)],16)}var g={},_=n(744);const w=(0,_.Z)(g,[["render",h],["__scopeId","data-v-22fa4098"]]);var b=w,x={components:{Button:b},data(){return{title:"Exclusive Deals of Furniture Collection",description:"Explore different categories. Find the best deals.",nameBtn:"Shop Now"}},methods:{},mounted(){}};const y=(0,_.Z)(x,[["render",f],["__scopeId","data-v-7ecd7448"]]);var S=y,k=n.p+"img/fonFavorite.04ed97da.png";const C={class:"popularBlock"},H=(0,a._)("img",{class:"popularBlock__img",src:k,alt:"img"},null,-1),T={class:"popularBlock__title"},A={class:"popularBlock__favoriteProd"},P={class:"popularBlock__wrapCarousel"};function j(e,t,n,l,o,r){const s=(0,a.up)("ItemProduct"),u=(0,a.up)("slide"),c=(0,a.up)("Navigation"),d=(0,a.up)("Pagination"),v=(0,a.up)("carousel"),p=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)("div",C,[H,(0,a._)("h2",T,(0,i.zw)(o.title),1),(0,a._)("div",A,[(0,a._)("div",P,[(0,a.Wm)(v,{class:"popularBlock__carousel","items-to-show":o.width<=1199?2:4,snapAlign:"start"},{addons:(0,a.w5)((()=>[(0,a.Wm)(c),(0,a.Wm)(d)])),default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.PRODUCTS,((e,t)=>((0,a.wg)(),(0,a.j4)(u,{key:t},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{content:e},null,8,["content"])])),_:2},1024)))),128))])),_:1},8,["items-to-show"])])]),(0,a.Wm)(p,{class:"bContent__btnGreen allIttem"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(o.nameBtn),1)])),_:1})])}var O=n(907);const B={class:"cardProduct"},D=["src"],M={class:"cardProduct__info"},L={class:"cardProduct__info__title"},I={class:"cardProduct__info__description"},J={class:"cardProduct__info__price"};function E(e,t,n,l,o,r){return(0,a.wg)(),(0,a.iD)("div",B,[(0,a._)("img",{class:"cardProduct__img",src:n.content.img,alt:"img"},null,8,D),(0,a._)("div",M,[(0,a._)("div",L,(0,i.zw)(n.content.title),1),(0,a._)("div",I,(0,i.zw)(n.content.description),1),(0,a._)("div",J," $"+(0,i.zw)(n.content.price),1)])])}var N={props:["content"],data(){return{}},methods:{},mounted(){}};const W=(0,_.Z)(N,[["render",E]]);var z=W,$=n(262);
/**
 * Vue 3 Carousel 0.2.12
 * (c) 2023
 * @license MIT
 */
const Y={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},R={itemsToShow:{default:Y.itemsToShow,type:Number},itemsToScroll:{default:Y.itemsToScroll,type:Number},wrapAround:{default:Y.wrapAround,type:Boolean},throttle:{default:Y.throttle,type:Number},snapAlign:{default:Y.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:Y.transition,type:Number},breakpoints:{default:Y.breakpoints,type:Object},autoplay:{default:Y.autoplay,type:Number},pauseAutoplayOnHover:{default:Y.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:Y.mouseDrag,type:Boolean},touchDrag:{default:Y.touchDrag,type:Boolean},dir:{default:Y.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}};function Z({config:e,slidesCount:t}){const{snapAlign:n,wrapAround:a,itemsToShow:l=1}=e;if(a)return Math.max(t-1,0);let o;switch(n){case"start":o=t-l;break;case"end":o=t-1;break;case"center":case"center-odd":o=t-Math.ceil((l-.5)/2);break;case"center-even":o=t-Math.ceil(l/2);break;default:o=0;break}return Math.max(o,0)}function F({config:e,slidesCount:t}){const{wrapAround:n,snapAlign:a,itemsToShow:l=1}=e;let o=0;if(n||l>t)return o;switch(a){case"start":o=0;break;case"end":o=l-1;break;case"center":case"center-odd":o=Math.floor((l-1)/2);break;case"center-even":o=Math.floor((l-2)/2);break;default:o=0;break}return o}function U({val:e,max:t,min:n}){return t<n?e:Math.min(Math.max(e,n),t)}function V({config:e,currentSlide:t,slidesCount:n}){const{snapAlign:a,wrapAround:l,itemsToShow:o=1}=e;let i=t;switch(a){case"center":case"center-odd":i-=(o-1)/2;break;case"center-even":i-=(o-2)/2;break;case"end":i-=o-1;break}return l?i:U({val:i,max:n-o,min:0})}function X(e){var t,n,a,l;return e?"v-if"===(null===(t=e[0])||void 0===t?void 0:t.children)||"CarouselSlide"===(null===(a=null===(n=e[0])||void 0===n?void 0:n.type)||void 0===a?void 0:a.name)?e.filter((e=>{var t;return"CarouselSlide"===(null===(t=e.type)||void 0===t?void 0:t.name)})):(null===(l=e[0])||void 0===l?void 0:l.children)||[]:[]}function q({val:e,max:t,min:n=0}){return e>t?q({val:e-(t+1),max:t,min:n}):e<n?q({val:e+(t+1),max:t,min:n}):e}function G(e,t){let n;return t?function(...a){const l=this;n||(e.apply(l,a),n=!0,setTimeout((()=>n=!1),t))}:e}function K(e,t){let n;return function(...a){n&&clearTimeout(n),n=setTimeout((()=>{e(...a),n=null}),t)}}var Q=(0,a.aZ)({name:"ARIA",setup(){const e=(0,a.f3)("currentSlide",(0,$.iH)(0)),t=(0,a.f3)("slidesCount",(0,$.iH)(0));return()=>(0,a.h)("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${e.value+1} of ${t.value}`)}}),ee=(0,a.aZ)({name:"Carousel",props:R,setup(e,{slots:t,emit:n,expose:l}){var o;const i=(0,$.iH)(null),r=(0,$.iH)([]),s=(0,$.iH)(0),u=(0,$.iH)(0);let c=(0,$.iH)({}),d=Object.assign({},Y);const v=(0,$.qj)(Object.assign({},d)),p=(0,$.iH)(null!==(o=e.modelValue)&&void 0!==o?o:0),m=(0,$.iH)(0),f=(0,$.iH)(0),h=(0,$.iH)(0),g=(0,$.iH)(0);let _,w;function b(){const t=Object.assign(Object.assign({},e),e.settings);c=(0,$.iH)(Object.assign({},t.breakpoints)),d=Object.assign(Object.assign({},t),{settings:void 0,breakpoints:void 0}),y(d)}function x(){const e=Object.keys(c.value).map((e=>Number(e))).sort(((e,t)=>+t-+e));let t=Object.assign({},d);e.some((e=>{const n=window.matchMedia(`(min-width: ${e}px)`).matches;return!!n&&(t=Object.assign(Object.assign({},t),c.value[e]),!0)})),y(t)}function y(e){Object.entries(e).forEach((([e,t])=>v[e]=t))}(0,a.JJ)("config",v),(0,a.JJ)("slidesCount",u),(0,a.JJ)("currentSlide",p),(0,a.JJ)("maxSlide",h),(0,a.JJ)("minSlide",g),(0,a.JJ)("slideWidth",s);const S=K((()=>{Object.keys(c.value).length&&(x(),C()),k()}),16);function k(){if(!i.value)return;const e=i.value.getBoundingClientRect();s.value=e.width/v.itemsToShow}function C(){u.value<=0||(f.value=Math.ceil((u.value-1)/2),h.value=Z({config:v,slidesCount:u.value}),g.value=F({config:v,slidesCount:u.value}),v.wrapAround||(p.value=U({val:p.value,max:h.value,min:g.value})))}(0,a.bv)((()=>{Object.keys(c.value).length&&x(),(0,a.Y3)((()=>{C(),k(),L(),n("init")})),J(),window.addEventListener("resize",S,{passive:!0})})),(0,a.Ah)((()=>{w&&clearTimeout(w),_&&clearInterval(_),window.removeEventListener("resize",S,{passive:!0})}));let H=!1;const T={x:0,y:0},A={x:0,y:0},P=(0,$.qj)({x:0,y:0}),j=(0,$.iH)(!1),O=()=>{j.value=!0},B=()=>{j.value=!1};function D(e){["INPUT","TEXTAREA"].includes(e.target.tagName)||(H="touchstart"===e.type,!H&&0!==e.button||N.value||(H||e.preventDefault(),T.x=H?e.touches[0].clientX:e.clientX,T.y=H?e.touches[0].clientY:e.clientY,document.addEventListener(H?"touchmove":"mousemove",M,!0),document.addEventListener(H?"touchend":"mouseup",I,!0)))}let M=()=>{};function L(){var e;M=G((e=>{A.x=H?e.touches[0].clientX:e.clientX,A.y=H?e.touches[0].clientY:e.clientY;const t=A.x-T.x,n=A.y-T.y;P.y=n,P.x=t}),null!==(e=v.throttle)&&void 0!==e?e:16)}function I(){const e="rtl"===v.dir?-1:1,t=.4*Math.sign(P.x),n=Math.round(P.x/s.value+t)*e;if(n&&!H){const e=t=>{t.stopPropagation(),window.removeEventListener("click",e,!0)};window.addEventListener("click",e,!0)}W(p.value-n),P.x=0,P.y=0,document.removeEventListener(H?"touchmove":"mousemove",M,!0),document.removeEventListener(H?"touchend":"mouseup",I,!0)}function J(){!v.autoplay||v.autoplay<=0||(_=setInterval((()=>{v.pauseAutoplayOnHover&&j.value||z()}),v.autoplay))}function E(){_&&(clearInterval(_),_=null),J()}const N=(0,$.iH)(!1);function W(e){const t=v.wrapAround?e:U({val:e,max:h.value,min:g.value});p.value===t||N.value||(n("slide-start",{slidingToIndex:e,currentSlideIndex:p.value,prevSlideIndex:m.value,slidesCount:u.value}),N.value=!0,m.value=p.value,p.value=t,w=setTimeout((()=>{if(v.wrapAround){const a=q({val:t,max:h.value,min:0});a!==p.value&&(p.value=a,n("loop",{currentSlideIndex:p.value,slidingToIndex:e}))}n("update:modelValue",p.value),n("slide-end",{currentSlideIndex:p.value,prevSlideIndex:m.value,slidesCount:u.value}),N.value=!1,E()}),v.transition))}function z(){W(p.value+v.itemsToScroll)}function ee(){W(p.value-v.itemsToScroll)}const te={slideTo:W,next:z,prev:ee};(0,a.JJ)("nav",te),(0,a.JJ)("isSliding",N);const ne=(0,a.Fl)((()=>V({config:v,currentSlide:p.value,slidesCount:u.value})));(0,a.JJ)("slidesToScroll",ne);const ae=(0,a.Fl)((()=>{const e="rtl"===v.dir?-1:1,t=ne.value*s.value*e;return{transform:`translateX(${P.x-t}px)`,transition:`${N.value?v.transition:0}ms`,margin:v.wrapAround?`0 -${u.value*s.value}px`:"",width:"100%"}}));function le(){b(),x(),C(),k(),E()}Object.keys(R).forEach((t=>{["modelValue"].includes(t)||(0,a.YP)((()=>e[t]),le)})),(0,a.YP)((()=>e["modelValue"]),(e=>{e!==p.value&&W(Number(e))})),(0,a.YP)(u,C),b();const oe={config:v,slidesCount:u,slideWidth:s,next:z,prev:ee,slideTo:W,currentSlide:p,maxSlide:h,minSlide:g,middleSlide:f};l({updateBreakpointsConfigs:x,updateSlidesData:C,updateSlideWidth:k,initDefaultConfigs:b,restartCarousel:le,slideTo:W,next:z,prev:ee,nav:te,data:oe});const ie=t.default||t.slides,re=t.addons,se=(0,$.qj)(oe);return()=>{const e=X(null===ie||void 0===ie?void 0:ie(se)),t=(null===re||void 0===re?void 0:re(se))||[];e.forEach(((e,t)=>e.props.index=t));let n=e;if(v.wrapAround){const t=e.map(((t,n)=>(0,a.Ho)(t,{index:-e.length+n,isClone:!0,key:`clone-before-${n}`}))),l=e.map(((t,n)=>(0,a.Ho)(t,{index:e.length+n,isClone:!0,key:`clone-after-${n}`})));n=[...t,...e,...l]}r.value=e,u.value=Math.max(e.length,1);const l=(0,a.h)("ol",{class:"carousel__track",style:ae.value,onMousedownCapture:v.mouseDrag?D:null,onTouchstartPassiveCapture:v.touchDrag?D:null},n),o=(0,a.h)("div",{class:"carousel__viewport"},l);return(0,a.h)("section",{ref:i,class:{carousel:!0,"carousel--rtl":"rtl"===v.dir},dir:v.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:O,onMouseleave:B},[o,t,(0,a.h)(Q)])}}});const te={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},ne=e=>{const t=e.name;if(!t||"string"!==typeof t)return;const n=te[t],l=(0,a.h)("path",{d:n}),o=e.title||t,i=(0,a.h)("title",o);return(0,a.h)("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:o},[i,l])};ne.props={name:String,title:String};const ae=(e,{slots:t,attrs:n})=>{const{next:l,prev:o}=t||{},i=(0,a.f3)("config",(0,$.qj)(Object.assign({},Y))),r=(0,a.f3)("maxSlide",(0,$.iH)(1)),s=(0,a.f3)("minSlide",(0,$.iH)(1)),u=(0,a.f3)("currentSlide",(0,$.iH)(1)),c=(0,a.f3)("nav",{}),{dir:d,wrapAround:v}=i,p="rtl"===d,m=(0,a.h)("button",{type:"button",class:["carousel__prev",!v&&u.value<=s.value&&"carousel__prev--disabled",null===n||void 0===n?void 0:n.class],"aria-label":"Navigate to previous slide",onClick:c.prev},(null===o||void 0===o?void 0:o())||(0,a.h)(ne,{name:p?"arrowRight":"arrowLeft"})),f=(0,a.h)("button",{type:"button",class:["carousel__next",!v&&u.value>=r.value&&"carousel__next--disabled",null===n||void 0===n?void 0:n.class],"aria-label":"Navigate to next slide",onClick:c.next},(null===l||void 0===l?void 0:l())||(0,a.h)(ne,{name:p?"arrowLeft":"arrowRight"}));return[m,f]},le=()=>{const e=(0,a.f3)("maxSlide",(0,$.iH)(1)),t=(0,a.f3)("minSlide",(0,$.iH)(1)),n=(0,a.f3)("currentSlide",(0,$.iH)(1)),l=(0,a.f3)("nav",{}),o=t=>q({val:n.value,max:e.value,min:0})===t,i=[];for(let r=t.value;r<e.value+1;r++){const e=(0,a.h)("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":o(r)},"aria-label":`Navigate to slide ${r+1}`,onClick:()=>l.slideTo(r)}),t=(0,a.h)("li",{class:"carousel__pagination-item",key:r},e);i.push(t)}return(0,a.h)("ol",{class:"carousel__pagination"},i)};var oe=(0,a.aZ)({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:t}){const n=(0,a.f3)("config",(0,$.qj)(Object.assign({},Y))),l=(0,a.f3)("currentSlide",(0,$.iH)(0)),o=(0,a.f3)("slidesToScroll",(0,$.iH)(0)),i=(0,a.f3)("slideWidth",(0,$.iH)(0)),r=(0,a.f3)("isSliding",(0,$.iH)(!1)),s=(0,a.Fl)((()=>({width:i.value?`${i.value}px`:"100%"}))),u=()=>e.index===l.value,c=()=>e.index===l.value-1,d=()=>e.index===l.value+1,v=()=>{const t=Math.floor(o.value),a=Math.ceil(o.value+n.itemsToShow-1);return e.index>=t&&e.index<=a};return()=>{var n;return(0,a.h)("li",{style:s.value,class:{carousel__slide:!0,"carousel_slide--clone":e.isClone,"carousel__slide--visible":v(),"carousel__slide--active":u(),"carousel__slide--prev":c(),"carousel__slide--next":d(),"carousel__slide--sliding":r.value},"aria-hidden":!v()},null===(n=t.default)||void 0===n?void 0:n.call(t))}}}),ie={components:{Button:b,Carousel:ee,Slide:oe,Navigation:ae,ItemProduct:z,Pagination:le},data(){return{title:"Popular Products",width:0,nameBtn:"Explore all items"}},computed:{...(0,O.Se)(["PRODUCTS"])},methods:{updateWidth(){this.width=window.innerWidth}},mounted(){},created(){this.width=window.innerWidth,window.addEventListener("resize",this.updateWidth)}};const re=(0,_.Z)(ie,[["render",j]]);var se=re,ue={components:{Banner:S,PopularProducts:se},data(){return{}},methods:{},computed:{},mounted(){}};const ce=(0,_.Z)(ue,[["render",o]]);var de=ce}}]);
//# sourceMappingURL=956.cbfeb6fb.js.map
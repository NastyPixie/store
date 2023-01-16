import{g as L,c as q,$ as j,n as A,u as G,r as B,j as S,B as F,S as X,N as _,a as U,b as J,P as K}from"./index-6d91b2da.js";import{I as Q}from"./ImageListItem-00c285e1.js";function Z({swiper:a,extendParams:z,on:c,emit:i}){const m=L();let d=!1,$=null,b=null,o,f,p,C;z({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),a.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null};function E(){if(!a.params.scrollbar.el||!a.scrollbar.el)return;const{scrollbar:l,rtlTranslate:n,progress:t}=a,{$dragEl:s,$el:e}=l,g=a.params.scrollbar;let h=f,r=(p-f)*t;n?(r=-r,r>0?(h=f-r,r=0):-r+f>p&&(h=p+r)):r<0?(h=f+r,r=0):r+f>p&&(h=p-r),a.isHorizontal()?(s.transform(`translate3d(${r}px, 0, 0)`),s[0].style.width=`${h}px`):(s.transform(`translate3d(0px, ${r}px, 0)`),s[0].style.height=`${h}px`),g.hide&&(clearTimeout($),e[0].style.opacity=1,$=setTimeout(()=>{e[0].style.opacity=0,e.transition(400)},1e3))}function O(l){!a.params.scrollbar.el||!a.scrollbar.el||a.scrollbar.$dragEl.transition(l)}function T(){if(!a.params.scrollbar.el||!a.scrollbar.el)return;const{scrollbar:l}=a,{$dragEl:n,$el:t}=l;n[0].style.width="",n[0].style.height="",p=a.isHorizontal()?t[0].offsetWidth:t[0].offsetHeight,C=a.size/(a.virtualSize+a.params.slidesOffsetBefore-(a.params.centeredSlides?a.snapGrid[0]:0)),a.params.scrollbar.dragSize==="auto"?f=p*C:f=parseInt(a.params.scrollbar.dragSize,10),a.isHorizontal()?n[0].style.width=`${f}px`:n[0].style.height=`${f}px`,C>=1?t[0].style.display="none":t[0].style.display="",a.params.scrollbar.hide&&(t[0].style.opacity=0),a.params.watchOverflow&&a.enabled&&l.$el[a.isLocked?"addClass":"removeClass"](a.params.scrollbar.lockClass)}function u(l){return a.isHorizontal()?l.type==="touchstart"||l.type==="touchmove"?l.targetTouches[0].clientX:l.clientX:l.type==="touchstart"||l.type==="touchmove"?l.targetTouches[0].clientY:l.clientY}function v(l){const{scrollbar:n,rtlTranslate:t}=a,{$el:s}=n;let e;e=(u(l)-s.offset()[a.isHorizontal()?"left":"top"]-(o!==null?o:f/2))/(p-f),e=Math.max(Math.min(e,1),0),t&&(e=1-e);const g=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*e;a.updateProgress(g),a.setTranslate(g),a.updateActiveIndex(),a.updateSlidesClasses()}function y(l){const n=a.params.scrollbar,{scrollbar:t,$wrapperEl:s}=a,{$el:e,$dragEl:g}=t;d=!0,o=l.target===g[0]||l.target===g?u(l)-l.target.getBoundingClientRect()[a.isHorizontal()?"left":"top"]:null,l.preventDefault(),l.stopPropagation(),s.transition(100),g.transition(100),v(l),clearTimeout(b),e.transition(0),n.hide&&e.css("opacity",1),a.params.cssMode&&a.$wrapperEl.css("scroll-snap-type","none"),i("scrollbarDragStart",l)}function I(l){const{scrollbar:n,$wrapperEl:t}=a,{$el:s,$dragEl:e}=n;d&&(l.preventDefault?l.preventDefault():l.returnValue=!1,v(l),t.transition(0),s.transition(0),e.transition(0),i("scrollbarDragMove",l))}function P(l){const n=a.params.scrollbar,{scrollbar:t,$wrapperEl:s}=a,{$el:e}=t;d&&(d=!1,a.params.cssMode&&(a.$wrapperEl.css("scroll-snap-type",""),s.transition("")),n.hide&&(clearTimeout(b),b=A(()=>{e.css("opacity",0),e.transition(400)},1e3)),i("scrollbarDragEnd",l),n.snapOnRelease&&a.slideToClosest())}function H(l){const{scrollbar:n,touchEventsTouch:t,touchEventsDesktop:s,params:e,support:g}=a,h=n.$el;if(!h)return;const r=h[0],D=g.passiveListener&&e.passiveListeners?{passive:!1,capture:!1}:!1,R=g.passiveListener&&e.passiveListeners?{passive:!0,capture:!1}:!1;if(!r)return;const x=l==="on"?"addEventListener":"removeEventListener";g.touch?(r[x](t.start,y,D),r[x](t.move,I,D),r[x](t.end,P,R)):(r[x](s.start,y,D),m[x](s.move,I,D),m[x](s.end,P,R))}function V(){!a.params.scrollbar.el||!a.scrollbar.el||H("on")}function W(){!a.params.scrollbar.el||!a.scrollbar.el||H("off")}function k(){const{scrollbar:l,$el:n}=a;a.params.scrollbar=q(a,a.originalParams.scrollbar,a.params.scrollbar,{el:"swiper-scrollbar"});const t=a.params.scrollbar;if(!t.el)return;let s=j(t.el);a.params.uniqueNavElements&&typeof t.el=="string"&&s.length>1&&n.find(t.el).length===1&&(s=n.find(t.el)),s.addClass(a.isHorizontal()?t.horizontalClass:t.verticalClass);let e=s.find(`.${a.params.scrollbar.dragClass}`);e.length===0&&(e=j(`<div class="${a.params.scrollbar.dragClass}"></div>`),s.append(e)),Object.assign(l,{$el:s,el:s[0],$dragEl:e,dragEl:e[0]}),t.draggable&&V(),s&&s[a.enabled?"removeClass":"addClass"](a.params.scrollbar.lockClass)}function M(){const l=a.params.scrollbar,n=a.scrollbar.$el;n&&n.removeClass(a.isHorizontal()?l.horizontalClass:l.verticalClass),W()}c("init",()=>{a.params.scrollbar.enabled===!1?N():(k(),T(),E())}),c("update resize observerUpdate lock unlock",()=>{T()}),c("setTranslate",()=>{E()}),c("setTransition",(l,n)=>{O(n)}),c("enable disable",()=>{const{$el:l}=a.scrollbar;l&&l[a.enabled?"removeClass":"addClass"](a.params.scrollbar.lockClass)}),c("destroy",()=>{M()});const Y=()=>{a.$el.removeClass(a.params.scrollbar.scrollbarDisabledClass),a.scrollbar.$el&&a.scrollbar.$el.removeClass(a.params.scrollbar.scrollbarDisabledClass),k(),T(),E()},N=()=>{a.$el.addClass(a.params.scrollbar.scrollbarDisabledClass),a.scrollbar.$el&&a.scrollbar.$el.addClass(a.params.scrollbar.scrollbarDisabledClass),M()};Object.assign(a.scrollbar,{enable:Y,disable:N,updateSize:T,setTranslate:E,init:k,destroy:M})}function w({swiper:a,extendParams:z,on:c,emit:i}){let m;a.autoplay={running:!1,paused:!1},z({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function d(){if(!a.size){a.autoplay.running=!1,a.autoplay.paused=!1;return}const u=a.slides.eq(a.activeIndex);let v=a.params.autoplay.delay;u.attr("data-swiper-autoplay")&&(v=u.attr("data-swiper-autoplay")||a.params.autoplay.delay),clearTimeout(m),m=A(()=>{let y;a.params.autoplay.reverseDirection?a.params.loop?(a.loopFix(),y=a.slidePrev(a.params.speed,!0,!0),i("autoplay")):a.isBeginning?a.params.autoplay.stopOnLastSlide?b():(y=a.slideTo(a.slides.length-1,a.params.speed,!0,!0),i("autoplay")):(y=a.slidePrev(a.params.speed,!0,!0),i("autoplay")):a.params.loop?(a.loopFix(),y=a.slideNext(a.params.speed,!0,!0),i("autoplay")):a.isEnd?a.params.autoplay.stopOnLastSlide?b():(y=a.slideTo(0,a.params.speed,!0,!0),i("autoplay")):(y=a.slideNext(a.params.speed,!0,!0),i("autoplay")),(a.params.cssMode&&a.autoplay.running||y===!1)&&d()},v)}function $(){return typeof m<"u"||a.autoplay.running?!1:(a.autoplay.running=!0,i("autoplayStart"),d(),!0)}function b(){return!a.autoplay.running||typeof m>"u"?!1:(m&&(clearTimeout(m),m=void 0),a.autoplay.running=!1,i("autoplayStop"),!0)}function o(u){a.autoplay.running&&(a.autoplay.paused||(m&&clearTimeout(m),a.autoplay.paused=!0,u===0||!a.params.autoplay.waitForTransition?(a.autoplay.paused=!1,d()):["transitionend","webkitTransitionEnd"].forEach(v=>{a.$wrapperEl[0].addEventListener(v,p)})))}function f(){const u=L();u.visibilityState==="hidden"&&a.autoplay.running&&o(),u.visibilityState==="visible"&&a.autoplay.paused&&(d(),a.autoplay.paused=!1)}function p(u){!a||a.destroyed||!a.$wrapperEl||u.target===a.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(v=>{a.$wrapperEl[0].removeEventListener(v,p)}),a.autoplay.paused=!1,a.autoplay.running?d():b())}function C(){a.params.autoplay.disableOnInteraction?b():(i("autoplayPause"),o()),["transitionend","webkitTransitionEnd"].forEach(u=>{a.$wrapperEl[0].removeEventListener(u,p)})}function E(){a.params.autoplay.disableOnInteraction||(a.autoplay.paused=!1,i("autoplayResume"),d())}function O(){a.params.autoplay.pauseOnMouseEnter&&(a.$el.on("mouseenter",C),a.$el.on("mouseleave",E))}function T(){a.$el.off("mouseenter",C),a.$el.off("mouseleave",E)}c("init",()=>{a.params.autoplay.enabled&&($(),L().addEventListener("visibilitychange",f),O())}),c("beforeTransitionStart",(u,v,y)=>{a.autoplay.running&&(y||!a.params.autoplay.disableOnInteraction?a.autoplay.pause(v):b())}),c("sliderFirstMove",()=>{a.autoplay.running&&(a.params.autoplay.disableOnInteraction?b():o())}),c("touchEnd",()=>{a.params.cssMode&&a.autoplay.paused&&!a.params.autoplay.disableOnInteraction&&d()}),c("destroy",()=>{T(),a.autoplay.running&&b(),L().removeEventListener("visibilitychange",f)}),Object.assign(a.autoplay,{pause:o,run:d,start:$,stop:b})}function ta({categories:a}){const z=G(),c={xs:0,sm:600,md:960,lg:1280,xl:1920},i=o=>o<c.sm||o<c.md?1:(o<c.lg,3),[m,d]=B.useState(i(window.innerWidth)),$=()=>{d(i(window.innerWidth))};B.useEffect(()=>(window.addEventListener("resize",$),()=>window.removeEventListener("resize",$)),[]);let b={height:"calc(100vh - 118px)",fallbacks:[{height:"-moz-calc(100vh - 118px)"},{height:"-webkit-calc(100vh - 118px)"},{height:"-o-calc(100vh - 118px)"}]};return S(F,{children:S(X,{style:{width:"100%",margin:"10px 0px"},initialSlide:1,slidesPerView:m,modules:[w,Z,_],autoHeight:!1,centeredSlides:!0,loop:!0,navigation:!0,scrollbar:{hide:!0},autoplay:{delay:5e3,disableOnInteraction:!0},children:a==null?void 0:a.map(o=>S(U,{children:J(Q,{children:[S("img",{className:"categoryCard",src:o.image,style:b,alt:o.name,loading:"lazy",onClick:f=>{z(`${K.CATEGORY}`.replace(":cat",o.id),{replace:!0})}}),S(F,{sx:{position:"fixed",width:100/m+"%",top:5},children:S("h2",{className:"category-title category-title-card",title:o.name,children:o.name})})]},o.id)},o.id))})})}export{ta as default};

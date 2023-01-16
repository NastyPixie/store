import{e as x,d as P,s as v,_ as m,r as u,f as y,h as B,j as c,k as W,l as R,w as d,b as w,u as S,Q as C,F as M,D as N,P as T}from"./index-6d91b2da.js";import{a as A,I as k}from"./ImageListItem-00c285e1.js";function U(e){return x("MuiImageList",e)}P("MuiImageList",["root","masonry","quilted","standard","woven"]);const z=["children","className","cols","component","rowHeight","gap","style","variant"],E=e=>{const{classes:t,variant:o}=e;return R({root:["root",o]},U,t)},_=v("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant]]}})(({ownerState:e})=>m({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},e.variant==="masonry"&&{display:"block"})),j=u.forwardRef(function(t,o){const s=y({props:t,name:"MuiImageList"}),{children:n,className:g,cols:f=2,component:I="ul",rowHeight:p="auto",gap:r=4,style:h,variant:a="standard"}=s,l=B(s,z),i=u.useMemo(()=>({rowHeight:p,gap:r,variant:a}),[p,r,a]);u.useEffect(()=>{},[]);const $=a==="masonry"?m({columnCount:f,columnGap:r},h):m({gridTemplateColumns:`repeat(${f}, 1fr)`,gap:r},h),L=m({},s,{component:I,gap:r,rowHeight:p,variant:a}),b=E(L);return c(_,m({as:I,className:W(b.root,b[a],g),ref:o,style:$,ownerState:L},l,{children:c(A.Provider,{value:i,children:n})}))}),D=j;function F(e){return x("MuiImageListItemBar",e)}P("MuiImageListItemBar",["root","positionBottom","positionTop","positionBelow","titleWrap","titleWrapBottom","titleWrapTop","titleWrapBelow","titleWrapActionPosLeft","titleWrapActionPosRight","title","subtitle","actionIcon","actionIconActionPosLeft","actionIconActionPosRight"]);const H=["actionIcon","actionPosition","className","subtitle","title","position"],O=e=>{const{classes:t,position:o,actionIcon:s,actionPosition:n}=e,g={root:["root",`position${d(o)}`],titleWrap:["titleWrap",`titleWrap${d(o)}`,s&&`titleWrapActionPos${d(n)}`],title:["title"],subtitle:["subtitle"],actionIcon:["actionIcon",`actionIconActionPos${d(n)}`]};return R(g,F,t)},G=v("div",{name:"MuiImageListItemBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${d(o.position)}`]]}})(({theme:e,ownerState:t})=>m({position:"absolute",left:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},t.position==="bottom"&&{bottom:0},t.position==="top"&&{top:0},t.position==="below"&&{position:"relative",background:"transparent",alignItems:"normal"})),q=v("div",{name:"MuiImageListItemBar",slot:"TitleWrap",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.titleWrap,t[`titleWrap${d(o.position)}`],o.actionIcon&&t[`titleWrapActionPos${d(o.actionPosition)}`]]}})(({theme:e,ownerState:t})=>m({flexGrow:1,padding:"12px 16px",color:(e.vars||e).palette.common.white,overflow:"hidden"},t.position==="below"&&{padding:"6px 0 12px",color:"inherit"},t.actionIcon&&t.actionPosition==="left"&&{paddingLeft:0},t.actionIcon&&t.actionPosition==="right"&&{paddingRight:0})),Q=v("div",{name:"MuiImageListItemBar",slot:"Title",overridesResolver:(e,t)=>t.title})(({theme:e})=>({fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"})),V=v("div",{name:"MuiImageListItemBar",slot:"Subtitle",overridesResolver:(e,t)=>t.subtitle})(({theme:e})=>({fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"})),Y=v("div",{name:"MuiImageListItemBar",slot:"ActionIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.actionIcon,t[`actionIconActionPos${d(o.actionPosition)}`]]}})(({ownerState:e})=>m({},e.actionPosition==="left"&&{order:-1})),J=u.forwardRef(function(t,o){const s=y({props:t,name:"MuiImageListItemBar"}),{actionIcon:n,actionPosition:g="right",className:f,subtitle:I,title:p,position:r="bottom"}=s,h=B(s,H),a=m({},s,{position:r,actionPosition:g}),l=O(a);return w(G,m({ownerState:a,className:W(l.root,f),ref:o},h,{children:[w(q,{ownerState:a,className:l.titleWrap,children:[c(Q,{className:l.title,children:p}),I?c(V,{className:l.subtitle,children:I}):null]}),n?c(Y,{ownerState:a,className:l.actionIcon,children:n}):null]}))}),K=J;function tt({categories:e,products:t}){const o=S();let{cat:s}=C();const[n,g]=u.useState(void 0),[f,I]=u.useState([]);u.useEffect(()=>{g(e.find(i=>i.id===s)),I(t.filter(i=>i.category.includes(s||"")))},[s,e]);const p={xs:0,sm:600,md:960,lg:1280,xl:1920},r=i=>i<p.sm?1:i<p.md?2:i<p.lg?3:4,[h,a]=u.useState(r(window.innerWidth)),l=()=>{a(r(window.innerWidth))};return u.useEffect(()=>(window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[]),w(M,{children:[c("h2",{className:"category-title",title:n==null?void 0:n.desc,children:n==null?void 0:n.name}),c(N,{color:"#16ffa6",sx:{marginBottom:"10px"},variant:"middle"}),c(D,{sx:{width:"100%",marginTop:"0px"},cols:h,children:f.map(i=>w(k,{onClick:()=>{o(`${T.PRODUCT}`.replace(":pid",i.id),{replace:!0})},className:"product-thumb",children:[c("img",{src:`${i.thumbnail}`,alt:i.name,title:i.name,loading:"lazy"}),c(K,{title:i.name,subtitle:`${i.price} €`})]},i.id))})]})}export{tt as default};

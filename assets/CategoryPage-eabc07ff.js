import{e as x,d as P,s as h,_ as p,r as c,f as y,h as B,j as m,k as W,l as R,w as d,b as w,u as S,Q as M,F as N,D as C,P as T}from"./index-c86b4434.js";import{a as A,I as k}from"./ImageListItem-f74202ec.js";function E(e){return x("MuiImageList",e)}P("MuiImageList",["root","masonry","quilted","standard","woven"]);const U=["children","className","cols","component","rowHeight","gap","style","variant"],z=e=>{const{classes:t,variant:o}=e;return R({root:["root",o]},E,t)},_=h("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant]]}})(({ownerState:e})=>p({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},e.variant==="masonry"&&{display:"block"})),j=c.forwardRef(function(t,o){const n=y({props:t,name:"MuiImageList"}),{children:i,className:g,cols:f=2,component:I="ul",rowHeight:u="auto",gap:r=4,style:v,variant:a="standard"}=n,l=B(n,U),s=c.useMemo(()=>({rowHeight:u,gap:r,variant:a}),[u,r,a]);c.useEffect(()=>{},[]);const $=a==="masonry"?p({columnCount:f,columnGap:r},v):p({gridTemplateColumns:`repeat(${f}, 1fr)`,gap:r},v),L=p({},n,{component:I,gap:r,rowHeight:u,variant:a}),b=z(L);return m(_,p({as:I,className:W(b.root,b[a],g),ref:o,style:$,ownerState:L},l,{children:m(A.Provider,{value:s,children:i})}))}),D=j;function F(e){return x("MuiImageListItemBar",e)}P("MuiImageListItemBar",["root","positionBottom","positionTop","positionBelow","titleWrap","titleWrapBottom","titleWrapTop","titleWrapBelow","titleWrapActionPosLeft","titleWrapActionPosRight","title","subtitle","actionIcon","actionIconActionPosLeft","actionIconActionPosRight"]);const H=["actionIcon","actionPosition","className","subtitle","title","position"],O=e=>{const{classes:t,position:o,actionIcon:n,actionPosition:i}=e,g={root:["root",`position${d(o)}`],titleWrap:["titleWrap",`titleWrap${d(o)}`,n&&`titleWrapActionPos${d(i)}`],title:["title"],subtitle:["subtitle"],actionIcon:["actionIcon",`actionIconActionPos${d(i)}`]};return R(g,F,t)},G=h("div",{name:"MuiImageListItemBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${d(o.position)}`]]}})(({theme:e,ownerState:t})=>p({position:"absolute",left:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},t.position==="bottom"&&{bottom:0},t.position==="top"&&{top:0},t.position==="below"&&{position:"relative",background:"transparent",alignItems:"normal"})),q=h("div",{name:"MuiImageListItemBar",slot:"TitleWrap",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.titleWrap,t[`titleWrap${d(o.position)}`],o.actionIcon&&t[`titleWrapActionPos${d(o.actionPosition)}`]]}})(({theme:e,ownerState:t})=>p({flexGrow:1,padding:"12px 16px",color:(e.vars||e).palette.common.white,overflow:"hidden"},t.position==="below"&&{padding:"6px 0 12px",color:"inherit"},t.actionIcon&&t.actionPosition==="left"&&{paddingLeft:0},t.actionIcon&&t.actionPosition==="right"&&{paddingRight:0})),Q=h("div",{name:"MuiImageListItemBar",slot:"Title",overridesResolver:(e,t)=>t.title})(({theme:e})=>({fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"})),V=h("div",{name:"MuiImageListItemBar",slot:"Subtitle",overridesResolver:(e,t)=>t.subtitle})(({theme:e})=>({fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"})),Y=h("div",{name:"MuiImageListItemBar",slot:"ActionIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.actionIcon,t[`actionIconActionPos${d(o.actionPosition)}`]]}})(({ownerState:e})=>p({},e.actionPosition==="left"&&{order:-1})),J=c.forwardRef(function(t,o){const n=y({props:t,name:"MuiImageListItemBar"}),{actionIcon:i,actionPosition:g="right",className:f,subtitle:I,title:u,position:r="bottom"}=n,v=B(n,H),a=p({},n,{position:r,actionPosition:g}),l=O(a);return w(G,p({ownerState:a,className:W(l.root,f),ref:o},v,{children:[w(q,{ownerState:a,className:l.titleWrap,children:[m(Q,{className:l.title,children:u}),I?m(V,{className:l.subtitle,children:I}):null]}),i?m(Y,{ownerState:a,className:l.actionIcon,children:i}):null]}))}),K=J;function tt({categories:e,products:t}){const o=S();let{cat:n}=M();const[i,g]=c.useState(void 0),[f,I]=c.useState([]);c.useEffect(()=>{g(e.find(s=>s.id===n)),I(t.filter(s=>s.category.includes(n||""))),document.title=""+(i==null?void 0:i.name)},[n,e]),c.useEffect(()=>{i&&window.dataLayer.push({event:"pageview",page:{url:location,title:i.name}})},[i]);const u={xs:0,sm:600,md:960,lg:1280,xl:1920},r=s=>s<u.sm?1:s<u.md?2:s<u.lg?3:4,[v,a]=c.useState(r(window.innerWidth)),l=()=>{a(r(window.innerWidth))};return c.useEffect(()=>(window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[]),w(N,{children:[m("h2",{className:"category-title",title:i==null?void 0:i.desc,children:i==null?void 0:i.name}),m(C,{color:"#16ffa6",sx:{marginBottom:"10px"},variant:"middle"}),m(D,{sx:{width:"100%",marginTop:"0px"},cols:v,children:f.map(s=>w(k,{onClick:()=>{o(`${T.PRODUCT}`.replace(":pid",s.id),{replace:!0})},className:"product-thumb",children:[m("img",{src:`${s.thumbnail}`,alt:s.name,title:s.name,loading:"lazy"}),m(K,{title:s.name,subtitle:`${s.price} €`})]},s.id))})]})}export{tt as default};

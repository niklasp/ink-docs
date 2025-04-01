"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1619,4924],{58260:(e,t,s)=>{s.d(t,{F:()=>f});var n=s(96540),a=s(26361),r=s(86297),i=s(73333),o=s(86669),l=s(56289),d=s(29030),c=s(2284),x=s(93529),p=s(48324),g=s(46792),m=s(91242),h=s(77773),u=s(80279),b=s(74848);function f(e){let{className:t,cta:s="Start Building",ctaLink:f="/docs",children:j,childrenRight:v}=e;const[_,k]=(0,n.useState)(!1),y=f.includes("http")?f:(0,d.Ay)(f),w=(0,d.Ay)("/img/text-white.svg"),N=(0,u.F)(),z=m.rG.map((e=>({...e,links:e.links?.map((e=>({...e,href:e.href?.replace("/docs",`/docs/${N?.label??"v5"}`)})))}))),A=[...m.rG.filter((e=>"ink!ubator"!==e.title)),{title:"Funding",links:[{label:"ink!ubator",href:"/inkubator",icon:(0,b.jsx)(i.T,{size:20,weight:"fill"})}]}];(0,n.useEffect)((()=>{document.body.style.overflow=_?"hidden":""}),[_]);const F=(0,d.Ay)("/").slice(0,-1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(a.P.header,{className:(0,x.cn)("nav-top fixed w-full z-40",t),initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.4,ease:"easeInOut"},children:[(0,b.jsx)("div",{className:"absolute inset-0 z-0 mask"}),(0,b.jsx)("div",{className:"mx-auto",children:(0,b.jsxs)("div",{className:"ml-6 mr-2 md:ml-8 md:mr-8 flex items-center h-[80px] justify-between md:justify-start",children:[(0,b.jsxs)("div",{className:"flex flex-row items-center",children:[(0,b.jsx)("div",{className:"flex items-center mr-4",children:(0,b.jsx)(l.A,{href:"/",className:"z-10 font-bold",children:(0,b.jsx)("img",{src:w,alt:"ink!",className:"w-20 h-20"})})}),(0,b.jsxs)(a.P.div,{className:"z-10 flex-row items-center gap-2",initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:"easeInOut",delay:.2},children:[(0,b.jsx)("span",{className:"block text-xs",children:"Powered by"}),(0,b.jsx)(c.A,{className:"w-auto h-[20px]"})]})]}),(0,b.jsx)("nav",{className:"z-10 items-center flex-1 hidden navbar md:flex !bg-none !backdrop-filter-none",children:(0,b.jsx)("div",{className:"flex gap-6 mx-auto",children:z.map((e=>(0,b.jsx)(p.j,{item:e},e.title)))})}),(0,b.jsx)("div",{className:"z-10 md:hidden",children:(0,b.jsx)(o.F,{toggled:_,toggle:k,color:"#BD82FD",size:22,distance:"lg",rounded:!0,label:"Open menu"})}),v||(0,b.jsx)("div",{className:"hidden md:block",children:(0,b.jsx)(l.A,{href:y,children:(0,b.jsx)(g.$,{variant:"base",className:"transition-all !duration-300 hover:scale-105 hover:rotate-1 will-change-transform",children:s})})})]})})]}),(0,b.jsx)(r.N,{children:_&&(0,b.jsx)(a.P.div,{initial:{y:"-100%"},animate:{y:0},exit:{y:"-100%"},transition:{duration:.25,ease:"easeInOut"},className:"fixed z-30 flex flex-col w-full h-screen bg-gradient-to-b from-black/90 to-[#151023]/90 lg:hidden backdrop-blur-md border-0 border-b-2 border-[rgb(189,130,253)] border-solid",children:(0,b.jsx)("nav",{className:"flex flex-col gap-4 mt-[60px] overflow-y-auto p-6",children:A.map((e=>(0,b.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,b.jsx)("span",{className:"font-semibold text-[#BD82FD] text-[14px] uppercase",children:e.title}),(0,b.jsx)("div",{className:"flex flex-col gap-2 text-center",children:e.links.map((e=>{let t=e.href;return t=e.href.includes("http")?e.href:F+e.href,(0,b.jsx)(h.c,{href:t,icon:e.icon,children:e.label},e.label)}))})]},e.title)))})})})]})}},46792:(e,t,s)=>{s.d(t,{$:()=>l});s(96540);var n=s(47859),a=s(22732),r=s(93529),i=s(74848);const o=(0,a.F)("inline-flex font-montserrat items-center !border-transparent !border-solid !border-[1px] justify-center gap-2 whitespace-nowrap rounded-[12px] text-sm font-[700] transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive !transition-all !duration-200 hover:scale-105 hover:-rotate-[0.5deg] text-[16px] will-change-transform",{variants:{variant:{base:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 bg-white text-black border-none",default:"rounded-lg opacity-100 bg-gradient-to-br from-[rgba(134,71,203,0.6)] to-[rgba(140,124,247,0.66)] hover:from-[rgba(134,71,203)] hover:to-[rgba(140,124,247,0.83)] shadow-[inset_5px_5px_12px_rgba(222,191,255,0.13),inset_0px_1px_4px_rgb(249,166,255),inset_0px_1px_2px_rgba(255,255,255,0.33)] hover:shadow-[inset_5px_5px_12px_rgba(222,191,255,0.25),inset_0px_1px_4px_rgb(249,166,255),inset_0px_1px_2px_rgba(255,255,255,0.33),0px_0px_10px_0px_rgba(189,130,253,0.5)]",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:(0,r.cn)("bg-gradient-to-br from-[rgba(189,130,253,0.05)] to-[rgba(189,130,253,0.05)]","hover:from-[rgba(189,130,253,0.15)] hover:to-[rgba(189,130,253,0.15)]","text-white hover:!border-[#BD82FD] hover:text-white","shadow-[rgba(222,_191,_255,_0.13)_5px_5px_12px_0px_inset,_rgba(189,_130,_253,_0.33)_0px_1px_4px_0px_inset,_rgba(255,_255,_255,_0.2)_0px_1px_2px_0px_inset]","hover:shadow-[rgba(222,_191,_255,_0.13)_5px_5px_12px_0px_inset,_rgba(189,_130,_253,_0.33)_0px_1px_4px_0px_inset,_rgba(255,_255,_255,_0.2)_0px_1px_2px_0px_inset,#bd82fdaa_0_0_10px]","hover:bg-[#bd82fd0d]"),ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-min-content px-[15px] py-[10px] has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-min-content rounded-[12px] px-[36px] py-[18px] has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function l(e){let{className:t,variant:s,size:a,asChild:l=!1,...d}=e;const c=l?n.DX:"button";return(0,i.jsx)(c,{"data-slot":"button",className:(0,r.cn)(o({variant:s,size:a,className:t})),...d})}},80279:(e,t,s)=>{s.d(t,{F:()=>a});var n=s(56942);const a=()=>(0,n.jh)().find((e=>"current"===e.name))},61596:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});s(96540);var n=s(96305),a=s(26361),r=s(93529),i=s(74848);function o(e){let{className:t,...s}=e;return(0,i.jsx)("div",{"data-slot":"card",className:(0,r.cn)("bg-[rgba(189,130,253,0.1)] text-card-foreground flex flex-col gap-6 rounded-[24px] p-[30px] shadow-sm border border-[rgba(140,124,247,0.15)] border-solid text-[16px] font-[500]",t),...s})}function l(e){let{className:t,...s}=e;return(0,i.jsx)("div",{"data-slot":"card-content",className:(0,r.cn)("",t),...s})}var d=s(46792),c=s(29030);const x=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("title",{children:"Brand Assets | ink!"}),(0,i.jsx)("meta",{name:"description",content:"Explore the brand assets for ink!, including logos and guidelines."}),(0,i.jsx)("meta",{name:"keywords",content:"brand, assets, logos, corporate identity, design"}),(0,i.jsx)("meta",{name:"author",content:"ink! Alliance"}),(0,i.jsx)("meta",{property:"og:title",content:"Brand Assets | ink!"}),(0,i.jsx)("meta",{property:"og:description",content:"Explore the brand assets for ink!, including logos and guidelines."}),(0,i.jsx)("meta",{property:"og:image",content:"https://use-ink.com/img/og-image.png"}),(0,i.jsx)("meta",{property:"og:url",content:"https://use-ink.com"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:site_name",content:"ink!"}),(0,i.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,i.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,i.jsx)("meta",{property:"og:image:height",content:"630"}),(0,i.jsx)("meta",{property:"og:image:alt",content:"ink! logo"}),(0,i.jsx)("meta",{property:"og:image:type",content:"image/png"})]});function p(){return(0,i.jsxs)(n.default,{className:"container",head:x,children:[(0,i.jsx)("section",{children:(0,i.jsx)("div",{className:"flex flex-col items-center justify-center my-12 text-center",children:(0,i.jsx)(a.P.h1,{className:"text-center",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeInOut"},children:"Brand Assets"})})}),(0,i.jsx)("section",{className:"flex flex-col items-center justify-center max-w-xl mx-auto my-12",children:(0,i.jsx)(o,{children:(0,i.jsxs)(l,{children:[(0,i.jsx)("p",{children:'Our primary logo is our squid mascot (named "Squink") plus our text logo. Please use this combined logo if possible!'}),(0,i.jsx)("hr",{className:"dotted"}),(0,i.jsx)("h2",{className:"!text-[21px] font-montserrat font-bold text-[rgb(189,130,253)]",children:"Black Version"}),(0,i.jsx)("div",{className:"flex items-center justify-center h-40 p-4 mb-4 overflow-hidden bg-white rounded-xl",children:(0,i.jsx)("img",{src:(0,c.Ay)("img/logo/ink-logo-with-squid-black.svg"),alt:"ink! logo black",className:"w-full h-full"})}),(0,i.jsxs)("p",{children:["Download here:"," ",(0,i.jsx)("a",{href:(0,c.Ay)("img/logo/ink-logo-with-squid-black.svg"),children:(0,i.jsx)("code",{children:"ink-logo-with-squid-black.svg"})}),"."]}),(0,i.jsx)("hr",{className:"dotted"}),(0,i.jsx)("h2",{className:"!text-[21px] font-montserrat font-bold text-[rgb(189,130,253)]",children:"White Version"}),(0,i.jsx)("div",{className:"flex items-center justify-center h-40 p-4 mb-4 overflow-hidden bg-black rounded-xl",children:(0,i.jsx)("img",{src:(0,c.Ay)("img/logo/ink-logo-with-squid-white.svg"),alt:"ink! logo",className:"w-full h-full"})}),(0,i.jsxs)("p",{children:["Download here:"," ",(0,i.jsx)("a",{href:(0,c.Ay)("img/logo/ink-logo-with-squid-white.svg"),download:!0,children:(0,i.jsx)("code",{children:"ink-logo-with-squid-white.svg"})}),"."]}),(0,i.jsx)("hr",{className:"dotted"}),(0,i.jsx)("h2",{className:"!text-[21px] font-montserrat font-bold text-[rgb(189,130,253)]",children:"Squink Mascot"}),(0,i.jsx)("div",{className:"flex items-center justify-center h-40 p-4 mb-4 overflow-hidden bg-gradient-to-br from-[#2a0e37] to-[#be54ff] rounded-xl",children:(0,i.jsx)("img",{src:(0,c.Ay)("img/logo/ink-squink.svg"),alt:"ink! squink mascot",className:"w-full h-full"})}),(0,i.jsxs)("p",{children:["Download here:"," ",(0,i.jsx)("a",{href:(0,c.Ay)("img/logo/ink-squink.svg"),download:!0,children:(0,i.jsx)("code",{children:"ink-squink.svg"})}),"."]}),(0,i.jsx)("hr",{className:"dotted"}),(0,i.jsx)("a",{href:(0,c.Ay)("img/logo/ink-brand-assets.zip"),download:!0,children:(0,i.jsx)(d.$,{size:"lg",className:"w-full",children:"Download all ink! brand assets"})})]})})})]})}},96305:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});s(96540);var n=s(58260),a=s(31505),r=s(27143),i=s(46942),o=s.n(i),l=s(74848);const d=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("title",{children:"Smart Contracts on Polkadot in Rust | ink!"}),(0,l.jsx)("meta",{name:"description",content:"Build Rust-based smart contracts on Polkadot with ink!"}),(0,l.jsx)("meta",{name:"keywords",content:"Smart contracts, Rust, Polkadot, PolkaVM, RISC-V"}),(0,l.jsx)("meta",{property:"og:title",content:"Smart Contracts on Polkadot in Rust | ink!"}),(0,l.jsx)("meta",{property:"og:description",content:"Build Rust-based smart contracts on Polkadot with ink!"}),(0,l.jsx)("meta",{property:"og:image",content:"https://niklasp.github.io/ink-docs/img/opengraph/home.png"}),(0,l.jsx)("meta",{property:"og:url",content:"https://niklasp.github.io/ink-docs/"}),(0,l.jsx)("meta",{property:"og:type",content:"website"}),(0,l.jsx)("meta",{property:"og:site_name",content:"ink!"}),(0,l.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,l.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,l.jsx)("meta",{property:"og:image:height",content:"630"}),(0,l.jsx)("meta",{property:"og:image:alt",content:"ink! logo"}),(0,l.jsx)("meta",{property:"og:image:type",content:"image/png"})]});function c(e){let{children:t,head:s,className:i,ref:c,hasBackground:x=!0}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.A,{children:s||d}),(0,l.jsx)(n.F,{}),(0,l.jsx)("main",{className:o()("page flex flex-col min-h-screen pt-[80px] z-10",i),ref:c,children:t}),(0,l.jsx)(a.w,{}),x&&(0,l.jsx)("div",{className:"absolute inset-0 z-0 section-bg"})]})}}}]);
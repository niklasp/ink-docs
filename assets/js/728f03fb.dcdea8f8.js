"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1619,2557],{30309:(e,t,s)=>{s.d(t,{F:()=>z});var i=s(96540),a=s(26361),n=s(86297),r=s(73333),o=s(86669),l=s(56289),c=s(29030),d=s(2284),x=s(93529),p=s(48324),h=s(46792),g=s(66950),m=s(2767),b=s(31144),u=s(40965),f=s(29497),v=s(27344),_=s(25519),j=s(42161),k=s(74848);const y=[{title:"Build",links:[{label:"Docs",href:"/docs",icon:(0,k.jsx)(g.i,{size:20,weight:"fill"})},{label:"Tutorials",href:"/tutorials",icon:(0,k.jsx)(m.D,{size:20,weight:"fill"})},{label:"Chains",href:"/chains",icon:(0,k.jsx)(b.N,{size:20})},{label:"Projects",href:"/projects",icon:(0,k.jsx)(u.p,{size:20,weight:"fill"})}]},{title:"Community",links:[{label:"About",href:"/about",icon:(0,k.jsx)(f.R,{size:20,weight:"fill"})},{label:"Bounties",href:"/bounties",icon:(0,k.jsx)(v.W,{size:20,weight:"fill"})},{label:"Stories",href:"/stories",icon:(0,k.jsx)(_.G,{size:20,weight:"fill"})},{label:"YouTube",href:"https://www.youtube.com/@ink-lang",icon:(0,k.jsx)(j.b,{size:20,weight:"fill"})}]},{title:"ink!ubator",href:"/inkubator"}];var w=s(77773),N=s(80279);function z(e){let{className:t,cta:s="Start Building",ctaLink:g="/docs",children:m,childrenRight:b}=e;const[u,f]=(0,i.useState)(!1),v=g.includes("http")?g:(0,c.Ay)(g),_=(0,c.Ay)("/img/text-white.svg"),j=(0,N.F)(),z=y.map((e=>({...e,links:e.links?.map((e=>({...e,href:e.href?.replace("/docs",`/docs/${j?.label??"v5"}`)})))}))),R=[...y.filter((e=>"ink!ubator"!==e.title)),{title:"Funding",links:[{label:"ink!ubator",href:"/inkubator",icon:(0,k.jsx)(r.T,{size:20,weight:"fill"})}]}];(0,i.useEffect)((()=>{document.body.style.overflow=u?"hidden":""}),[u]);const F=(0,c.Ay)("/").slice(0,-1);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(a.P.header,{className:(0,x.cn)("nav-top fixed w-full z-40",t),initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.4,ease:"easeInOut"},children:[(0,k.jsx)("div",{className:"absolute inset-0 z-0 mask"}),(0,k.jsx)("div",{className:"mx-auto",children:(0,k.jsxs)("div",{className:"ml-6 mr-2 md:ml-8 md:mr-8 flex items-center h-[80px] justify-between md:justify-start",children:[(0,k.jsxs)("div",{className:"flex flex-row items-center",children:[(0,k.jsx)("div",{className:"flex items-center mr-4",children:(0,k.jsx)(l.A,{href:"/",className:"z-10 font-bold",children:(0,k.jsx)("img",{src:_,alt:"ink!",className:"w-20 h-20"})})}),(0,k.jsxs)(a.P.div,{className:"z-10 flex-row items-center gap-2",initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:"easeInOut",delay:.2},children:[(0,k.jsx)("span",{className:"block text-xs",children:"Powered by"}),(0,k.jsx)(d.A,{className:"w-auto h-[20px]"})]})]}),(0,k.jsx)("nav",{className:"z-10 items-center flex-1 hidden navbar md:flex !bg-none !backdrop-filter-none",children:(0,k.jsx)("div",{className:"flex gap-6 mx-auto",children:z.map((e=>(0,k.jsx)(p.j,{item:e},e.title)))})}),(0,k.jsx)("div",{className:"z-10 md:hidden",children:(0,k.jsx)(o.F,{toggled:u,toggle:f,color:"#BD82FD",size:22,distance:"lg",rounded:!0,label:"Open menu"})}),b||(0,k.jsx)("div",{className:"hidden md:block",children:(0,k.jsx)(l.A,{href:v,children:(0,k.jsx)(h.$,{variant:"base",className:"transition-all !duration-300 hover:scale-105 hover:rotate-1 will-change-transform",children:s})})})]})})]}),(0,k.jsx)(n.N,{children:u&&(0,k.jsx)(a.P.div,{initial:{y:"-100%"},animate:{y:0},exit:{y:"-100%"},transition:{duration:.25,ease:"easeInOut"},className:"fixed z-30 flex flex-col w-full h-screen bg-gradient-to-b from-black/90 to-[#151023]/90 lg:hidden backdrop-blur-md border-0 border-b-2 border-[rgb(189,130,253)] border-solid",children:(0,k.jsx)("nav",{className:"flex flex-col gap-4 mt-[60px] overflow-y-auto p-6",children:R.map((e=>(0,k.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,k.jsx)("span",{className:"font-semibold text-[#BD82FD] text-[14px] uppercase",children:e.title}),(0,k.jsx)("div",{className:"flex flex-col gap-2 text-center",children:e.links.map((e=>{let t=e.href;return t=e.href.includes("http")?e.href:F+e.href,(0,k.jsx)(w.c,{href:t,icon:e.icon,children:e.label},e.label)}))})]},e.title)))})})})]})}},46792:(e,t,s)=>{s.d(t,{$:()=>l});s(96540);var i=s(47859),a=s(22732),n=s(93529),r=s(74848);const o=(0,a.F)("inline-flex font-montserrat items-center !border-transparent !border-solid !border-[1px] justify-center gap-2 whitespace-nowrap rounded-[12px] text-sm font-[700] transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive !transition-all !duration-200 hover:scale-105 hover:-rotate-[0.5deg] text-[16px] will-change-transform",{variants:{variant:{base:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 bg-white text-black border-none",default:"rounded-lg opacity-100 bg-gradient-to-br from-[rgba(134,71,203,0.6)] to-[rgba(140,124,247,0.66)] hover:from-[rgba(134,71,203)] hover:to-[rgba(140,124,247,0.83)] shadow-[inset_5px_5px_12px_rgba(222,191,255,0.13),inset_0px_1px_4px_rgb(249,166,255),inset_0px_1px_2px_rgba(255,255,255,0.33)] hover:shadow-[inset_5px_5px_12px_rgba(222,191,255,0.25),inset_0px_1px_4px_rgb(249,166,255),inset_0px_1px_2px_rgba(255,255,255,0.33),0px_0px_10px_0px_rgba(189,130,253,0.5)]",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:(0,n.cn)("bg-gradient-to-br from-[rgba(189,130,253,0.05)] to-[rgba(189,130,253,0.05)]","hover:from-[rgba(189,130,253,0.15)] hover:to-[rgba(189,130,253,0.15)]","text-white hover:!border-[#BD82FD] hover:text-white","shadow-[rgba(222,_191,_255,_0.13)_5px_5px_12px_0px_inset,_rgba(189,_130,_253,_0.33)_0px_1px_4px_0px_inset,_rgba(255,_255,_255,_0.2)_0px_1px_2px_0px_inset]","hover:shadow-[rgba(222,_191,_255,_0.13)_5px_5px_12px_0px_inset,_rgba(189,_130,_253,_0.33)_0px_1px_4px_0px_inset,_rgba(255,_255,_255,_0.2)_0px_1px_2px_0px_inset,#bd82fdaa_0_0_10px]","hover:bg-[#bd82fd0d]"),ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-min-content px-[15px] py-[10px] has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-min-content rounded-[12px] px-[36px] py-[18px] has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function l(e){let{className:t,variant:s,size:a,asChild:l=!1,...c}=e;const d=l?i.DX:"button";return(0,r.jsx)(d,{"data-slot":"button",className:(0,n.cn)(o({variant:s,size:a,className:t})),...c})}},96305:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});s(96540);var i=s(30309),a=s(66165),n=s(27143),r=s(46942),o=s.n(r),l=s(74848);const c=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("title",{children:"Smart Contracts on Polkadot in Rust | ink!"}),(0,l.jsx)("meta",{name:"description",content:"Build Rust-based smart contracts on Polkadot with ink!"}),(0,l.jsx)("meta",{name:"keywords",content:"Smart contracts, Rust, Polkadot, PolkaVM, RISC-V"}),(0,l.jsx)("meta",{property:"og:title",content:"Smart Contracts on Polkadot in Rust | ink!"}),(0,l.jsx)("meta",{property:"og:description",content:"Build Rust-based smart contracts on Polkadot with ink!"}),(0,l.jsx)("meta",{property:"og:image",content:"https://niklasp.github.io/ink-docs/img/opengraph/home.png"}),(0,l.jsx)("meta",{property:"og:url",content:"https://niklasp.github.io/ink-docs/"}),(0,l.jsx)("meta",{property:"og:type",content:"website"}),(0,l.jsx)("meta",{property:"og:site_name",content:"ink!"}),(0,l.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,l.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,l.jsx)("meta",{property:"og:image:height",content:"630"}),(0,l.jsx)("meta",{property:"og:image:alt",content:"ink! logo"}),(0,l.jsx)("meta",{property:"og:image:type",content:"image/png"})]});function d(e){let{children:t,head:s,className:r,ref:d,hasBackground:x=!0}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{children:s||c}),(0,l.jsx)(i.F,{}),(0,l.jsx)("main",{className:o()("page flex flex-col min-h-screen pt-[80px] z-10",r),ref:d,children:t}),(0,l.jsx)(a.w,{}),x&&(0,l.jsx)("div",{className:"absolute inset-0 z-0 section-bg"})]})}},31919:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});s(96540);var i=s(96305),a=s(29030),n=s(16957),r=s(74848);function o(){const{RiveComponent:e}=(0,n.useRive)({src:(0,a.Ay)("/animations/rocket.riv"),autoplay:!0}),{RiveComponent:t}=(0,n.useRive)({src:(0,a.Ay)("/animations/medal.riv"),autoplay:!0}),{RiveComponent:s}=(0,n.useRive)({src:(0,a.Ay)("animations/Risc-v.riv"),autoplay:!0});return(0,r.jsx)(i.default,{children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full gap-4",children:[(0,r.jsx)("h1",{children:"Rive Demo"}),(0,r.jsx)("div",{className:"w-[500px] h-[500px] bg-transparent",children:(0,r.jsx)(e,{style:{width:"100%",height:"100%",background:"transparent"}})}),(0,r.jsx)("div",{className:"w-[500px] h-[500px] bg-transparent",children:(0,r.jsx)(t,{style:{width:"100%",height:"100%",background:"transparent"}})}),(0,r.jsx)("div",{className:"w-[500px] h-[500px] bg-transparent",children:(0,r.jsx)(s,{style:{width:"100%",height:"100%",background:"transparent"}})})]})})}}}]);
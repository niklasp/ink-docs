"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1619,6853],{46523:(e,t,s)=>{s.d(t,{J:()=>n});var a=s(56289),i=(s(96540),s(46792)),r=s(74848);function n(e){let{text:t,btnText:s,btnLink:n,btnVariant:o="secondary"}=e;return(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 my-8 md:flex-row",children:[(0,r.jsx)("p",{className:"m-0",children:t}),(0,r.jsx)(a.A,{href:n,className:"text-blue-500",children:(0,r.jsx)(i.$,{size:"lg",variant:o,children:s})})]})}},88704:(e,t,s)=>{s.d(t,{V:()=>n});s(96540);var a=s(46942),i=s.n(a),r=s(74848);function n(e){let{children:t,className:s}=e;return(0,r.jsx)("div",{className:i()("flex items-center justify-center max-w-[300px] w-full h-auto rounded-[12px] border-[rgba(140,124,247,.15)] border border-solid bg-[#241a38] p-4",s),children:t})}},58260:(e,t,s)=>{s.d(t,{F:()=>b});var a=s(96540),i=s(26361),r=s(86297),n=s(73333),o=s(86669),l=s(56289),c=s(29030),d=s(2284),x=s(93529),m=s(48324),p=s(46792),h=s(91242),g=s(77773),u=s(74848);function b(e){let{className:t,cta:s="Start Building",ctaLink:b="/docs",children:f,childrenRight:j}=e;const[v,k]=(0,a.useState)(!1),y=b.includes("http")?b:(0,c.Ay)(b),_=(0,c.Ay)("/img/text-white.svg"),w=[...h.rG.filter((e=>"ink!ubator"!==e.title)),{title:"Funding",links:[{label:"ink!ubator",href:"/inkubator",icon:(0,u.jsx)(n.T,{size:20,weight:"fill"})}]}];(0,a.useEffect)((()=>{document.body.style.overflow=v?"hidden":""}),[v]);const N=(0,c.Ay)("/").slice(0,-1);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(i.P.header,{className:(0,x.cn)("nav-top fixed w-full z-40",t),initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.4,ease:"easeInOut"},children:[(0,u.jsx)("div",{className:"absolute inset-0 z-0 mask"}),(0,u.jsx)("div",{className:"max-w-[1920px] mx-auto",children:(0,u.jsxs)("div",{className:"ml-6 mr-2 md:ml-8 md:mr-8 flex items-center h-[80px] justify-between md:justify-start",children:[(0,u.jsxs)("div",{className:"flex flex-row items-center",children:[(0,u.jsx)("div",{className:"flex items-center mr-4",children:(0,u.jsx)(l.A,{href:"/",className:"z-10 font-bold",children:(0,u.jsx)("img",{src:_,alt:"ink!",className:"w-20 h-20"})})}),(0,u.jsxs)(i.P.div,{className:"z-10 flex-row items-center gap-2",initial:{opacity:0},animate:{opacity:1},transition:{duration:1,ease:"easeInOut",delay:.2},children:[(0,u.jsx)("span",{className:"block text-xs",children:"Powered by"}),(0,u.jsx)(d.A,{className:"w-auto h-[20px]"})]})]}),(0,u.jsx)("nav",{className:"z-10 items-center flex-1 hidden navbar md:flex !bg-none !backdrop-filter-none",children:(0,u.jsx)("div",{className:"flex gap-6 mx-auto",children:h.rG.map((e=>(0,u.jsx)(m.j,{item:e},e.title)))})}),(0,u.jsx)("div",{className:"z-10 md:hidden",children:(0,u.jsx)(o.F,{toggled:v,toggle:k,color:"#BD82FD",size:22,distance:"lg",rounded:!0,label:"Open menu"})}),j||(0,u.jsx)("div",{className:"hidden md:block",children:(0,u.jsx)(l.A,{href:y,children:(0,u.jsx)(p.$,{variant:"base",className:"transition-all !duration-300 hover:scale-105 hover:rotate-1 will-change-transform",children:s})})})]})})]}),(0,u.jsx)(r.N,{children:v&&(0,u.jsx)(i.P.div,{initial:{y:"-100%"},animate:{y:0},exit:{y:"-100%"},transition:{duration:.25,ease:"easeInOut"},className:"fixed z-30 flex flex-col w-full h-screen bg-gradient-to-b from-black/90 to-[#151023]/90 lg:hidden backdrop-blur-md border-0 border-b-2 border-[rgb(189,130,253)] border-solid",children:(0,u.jsx)("nav",{className:"flex flex-col gap-4 mt-[60px] overflow-y-auto p-6",children:w.map((e=>(0,u.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,u.jsx)("span",{className:"font-semibold text-[#BD82FD] text-[14px] uppercase",children:e.title}),(0,u.jsx)("div",{className:"flex flex-col gap-2 text-center",children:e.links.map((e=>{let t=e.href;return t=e.href.includes("http")?e.href:N+e.href,(0,u.jsx)(g.c,{href:t,icon:e.icon,children:e.label},e.label)}))})]},e.title)))})})})]})}},46792:(e,t,s)=>{s.d(t,{$:()=>l});s(96540);var a=s(47859),i=s(22732),r=s(93529),n=s(74848);const o=(0,i.F)("inline-flex font-montserrat items-center !border-transparent !border-solid !border-[1px] justify-center gap-2 whitespace-nowrap rounded-[12px] text-sm font-[700] transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive !transition-all !duration-300 hover:scale-105 hover:-rotate-[0.5deg] text-[16px] will-change-transform",{variants:{variant:{base:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 bg-white text-black border-none",default:"rounded-lg opacity-100 bg-gradient-to-br from-[rgba(134,71,203,0.6)] to-[rgba(140,124,247,0.66)] hover:from-[rgba(134,71,203)] hover:to-[rgba(140,124,247,0.83)] shadow-[inset_5px_5px_12px_rgba(222,191,255,0.13),inset_0px_1px_4px_rgb(249,166,255),inset_0px_1px_2px_rgba(255,255,255,0.33)] hover:shadow-[inset_5px_5px_12px_rgba(222,191,255,0.25),inset_0px_1px_4px_rgb(249,166,255),inset_0px_1px_2px_rgba(255,255,255,0.33),0px_0px_10px_0px_rgba(189,130,253,0.5)]",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:(0,r.cn)("bg-gradient-to-br from-[rgba(189,130,253,0.05)] to-[rgba(189,130,253,0.05)]","hover:from-[rgba(189,130,253,0.15)] hover:to-[rgba(189,130,253,0.15)]","text-white hover:!border-[#BD82FD] hover:text-white","shadow-[rgba(222,_191,_255,_0.13)_5px_5px_12px_0px_inset,_rgba(189,_130,_253,_0.33)_0px_1px_4px_0px_inset,_rgba(255,_255,_255,_0.2)_0px_1px_2px_0px_inset]","hover:shadow-[rgba(222,_191,_255,_0.13)_5px_5px_12px_0px_inset,_rgba(189,_130,_253,_0.33)_0px_1px_4px_0px_inset,_rgba(255,_255,_255,_0.2)_0px_1px_2px_0px_inset,#bd82fdaa_0_0_10px]","hover:bg-[#bd82fd0d]"),ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-min-content px-[15px] py-[10px] has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-min-content rounded-[12px] px-[36px] py-[18px] has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function l(e){let{className:t,variant:s,size:i,asChild:l=!1,...c}=e;const d=l?a.DX:"button";return(0,n.jsx)(d,{"data-slot":"button",className:(0,r.cn)(o({variant:s,size:i,className:t})),...c})}},96305:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});s(96540);var a=s(58260),i=s(31505),r=s(27143),n=s(46942),o=s.n(n),l=s(74848);const c=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("title",{children:"Smart Contracts on Polkadot in Rust | ink!"}),(0,l.jsx)("meta",{name:"description",content:"Build Rust-based smart contracts on Polkadot with ink!"}),(0,l.jsx)("meta",{name:"keywords",content:"Smart contracts, Rust, Polkadot, PolkaVM, RISC-V"}),(0,l.jsx)("meta",{property:"og:title",content:"Smart Contracts on Polkadot in Rust | ink!"}),(0,l.jsx)("meta",{property:"og:description",content:"Build Rust-based smart contracts on Polkadot with ink!"}),(0,l.jsx)("meta",{property:"og:image",content:"https://niklasp.github.io/ink-docs/img/opengraph/home.png"}),(0,l.jsx)("meta",{property:"og:url",content:"https://niklasp.github.io/ink-docs/"}),(0,l.jsx)("meta",{property:"og:type",content:"website"}),(0,l.jsx)("meta",{property:"og:site_name",content:"ink!"}),(0,l.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,l.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,l.jsx)("meta",{property:"og:image:height",content:"630"}),(0,l.jsx)("meta",{property:"og:image:alt",content:"ink! logo"}),(0,l.jsx)("meta",{property:"og:image:type",content:"image/png"})]});function d(e){let{children:t,head:s,className:n,ref:d}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.A,{children:s||c}),(0,l.jsx)(a.F,{}),(0,l.jsx)("main",{className:o()("page flex flex-col min-h-screen pt-[80px] z-10",n),ref:d,children:t}),(0,l.jsx)(i.w,{}),(0,l.jsx)("div",{className:"absolute inset-0 z-0 section-bg"})]})}},39737:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});s(96540);var a=s(26361),i=s(96305),r=s(29030),n=s(74848);const o=[{logo:"img/stories/azero.id-logo.avif",image:"img/stories/azero.id.avif",name:"azero.id",link:"https://azero.id/",backstory:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{href:"http://azero.id/",children:"AZERO.ID"})," is an on-chain identity/domain service in the Aleph Zero ecosystem, built with ink!. They currently manage ~4k domains from ~1.7k unique holders. The contracts are written ink!, the dApp was built using React with the ",(0,n.jsx)("code",{children:"use-inkathon"})," hooks. You can check out the ink! domain in the dApp at ",(0,n.jsx)("a",{href:"https://azero.id/ink.azero",children:"azero.id/ink.azero"})]})},{logo:"img/stories/artzero-logo.avif",image:"img/stories/artzero.avif",name:"artzero",link:"https://artzero.io",backstory:(0,n.jsxs)(n.Fragment,{children:["ArtZero is a non-fungible token (NFT) marketplace built with ink! on the Aleph Zero & Astar blockchains. It provides a novel NFT staking mechanism. Owners are able to benefit from trade discount rates, plus a share of the marketplace trade fee. 3.2k NFTs are currently staked on the platform. Check out"," ",(0,n.jsx)("a",{href:"https://artzero.io",children:"artzero.io"})," for more info."]})},{logo:"img/stories/ike-logo.avif",image:"img/stories/ike.jpg",name:"IKE",link:"https://ike.xyz",backstory:(0,n.jsxs)(n.Fragment,{children:["IKE, built with ink!, is the top liquid staking solution for Aleph Zero's $AZERO token. With ~$300k TVL, it boosts the ecosystem's GDP. Users stake, earn rewards, and join on-chain activities. IKE solves liquidity and access issues, aligning protocol growth with L1 security. Visit the ",(0,n.jsx)("a",{href:"https://ike.xyz",children:"IKE.xyz"})," ","website to learn more."]})}];var l=s(93529),c=s(88704),d=s(46523);function x(){const e={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0}},t={hidden:{opacity:0,x:50},visible:{opacity:1,x:0}};return(0,n.jsxs)("div",{className:"flex flex-col",children:[o.map(((s,i)=>(0,n.jsxs)("div",{className:(0,l.cn)("flex flex-col gap-12 font-[500] pb-16",{"border-0 border-b border-solid border-[rgba(189,130,253,.15)]":i!==o.length-1}),children:[(0,n.jsx)(a.P.div,{initial:"hidden",whileInView:"visible",variants:t,transition:{duration:1,ease:"easeInOut",delay:0===i?.3:0},className:"w-full aspect-video",children:(0,n.jsx)("a",{href:s.link,target:"_blank",rel:"noreferrer",className:"block w-full h-full",children:(0,n.jsx)("img",{src:s.image,alt:s.name,className:"w-full rounded-[18px] border-[5px] border-solid border-[rgb(140,124,247)]"})})}),(0,n.jsxs)(a.P.div,{initial:"hidden",whileInView:"visible",variants:e,transition:{duration:1,ease:"easeInOut"},className:"flex flex-col gap-8 md:flex-row",children:[(0,n.jsx)(c.V,{className:"w-full md:!w-auto max-w-full min-w-[250px] md:max-w-[200px] h-24",children:(0,n.jsx)("img",{src:(0,r.Ay)(s.logo),alt:`${s.name} logo`,className:"object-contain h-auto mix-blend-lighten max-h-[40px]"})}),(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("h4",{className:"text-xs text-gray-500 uppercase font-[600]",children:"BACKSTORY"}),(0,n.jsx)("div",{className:"",children:s.backstory})]})]}),i!==o.length-1&&(0,n.jsx)("hr",{className:"my-10"})]},s.name))),(0,n.jsx)("hr",{className:""}),(0,n.jsx)(d.J,{text:"Share your story with the ink! community",btnText:"Join our Telegram",btnLink:"https://t.me/inkathon"})]})}const m=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:"Stories | ink!"}),(0,n.jsx)("meta",{name:"description",content:"Read success stories and case studies from the ink! community."}),(0,n.jsx)("meta",{name:"keywords",content:"stories, ecosystem, case studies, dApp, examples"}),(0,n.jsx)("meta",{name:"author",content:"ink! Alliance"}),(0,n.jsx)("meta",{property:"og:title",content:"Stories | ink!"}),(0,n.jsx)("meta",{property:"og:description",content:"Read success stories and case studies from the ink! community."}),(0,n.jsx)("meta",{property:"og:image",content:"https://use-ink.com/img/opengraph/home.png"}),(0,n.jsx)("meta",{property:"og:url",content:"https://use-ink.com/stories"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:site_name",content:"ink!"}),(0,n.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,n.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,n.jsx)("meta",{property:"og:image:height",content:"630"}),(0,n.jsx)("meta",{property:"og:image:alt",content:"ink! logo"}),(0,n.jsx)("meta",{property:"og:image:type",content:"image/png"})]});function p(){return(0,n.jsxs)(i.default,{className:"container",head:m,children:[(0,n.jsx)("div",{className:"flex flex-col items-center justify-center my-12 text-center",children:(0,n.jsx)(a.P.h1,{className:"text-center",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeInOut"},children:"ink! Success Stories"})}),(0,n.jsx)(x,{})]})}}}]);
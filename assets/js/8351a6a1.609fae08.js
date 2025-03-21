/*! For license information please see 8351a6a1.609fae08.js.LICENSE.txt */
(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1619,6041],{52471:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var l=a(96540),r=a(44777),n=a(55480),s=a(27143),i=a(46942),o=a.n(i),c=a(74848);function d(){const e=(0,l.useRef)(null),t=(a=150,Array.from({length:a},(()=>({x:100*Math.random(),y:100*Math.random(),size:2*Math.random()+1,parallax:.4*Math.random()+.2,animationDelay:2*Math.random()}))));var a;return(0,l.useEffect)((()=>{function t(){e.current&&requestAnimationFrame((()=>{e.current?.style.setProperty("--scroll",`${window.scrollY}px`)}))}return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)}),[]),(0,c.jsx)("div",{ref:e,className:"absolute inset-0 overflow-hidden pointer-events-none",style:{imageRendering:"pixelated",willChange:"transform",transform:"translate3d(0, 0, 0)",mask:"linear-gradient(150deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%) add"},children:t.map(((e,t)=>(0,c.jsx)("div",{className:"absolute bg-white rounded-full animate-star-glow",style:{left:`${e.x}%`,top:`${e.y}%`,width:`${e.size}px`,height:`${e.size}px`,transform:`translateY(calc(var(--scroll) * ${e.parallax}))`,animationDelay:`${e.animationDelay}s`,backfaceVisibility:"hidden",WebkitFontSmoothing:"none"}},t)))})}const m=(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("title",{children:"Smart Contracts on Polkadot in Rust | ink!"}),(0,c.jsx)("meta",{name:"description",content:"Build Rust-based smart contracts on Polkadot with ink!"}),(0,c.jsx)("meta",{name:"keywords",content:"Smart contracts, Rust, Polkadot, PolkaVM, RISC-V"}),(0,c.jsx)("meta",{property:"og:title",content:"Smart Contracts on Polkadot in Rust | ink!"}),(0,c.jsx)("meta",{property:"og:description",content:"Build Rust-based smart contracts on Polkadot with ink!"}),(0,c.jsx)("meta",{property:"og:image",content:"https://niklasp.github.io/ink-docs/img/opengraph/home.png"}),(0,c.jsx)("meta",{property:"og:url",content:"https://niklasp.github.io/ink-docs/"}),(0,c.jsx)("meta",{property:"og:type",content:"website"}),(0,c.jsx)("meta",{property:"og:site_name",content:"ink!"}),(0,c.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,c.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,c.jsx)("meta",{property:"og:image:height",content:"630"}),(0,c.jsx)("meta",{property:"og:image:alt",content:"ink! logo"}),(0,c.jsx)("meta",{property:"og:image:type",content:"image/png"})]});function p(e){let{children:t,head:a,className:l}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.A,{children:a||m}),(0,c.jsx)(r.F,{}),(0,c.jsxs)("main",{className:o()("page flex flex-col min-h-screen mt-[80px] z-10",l),children:[(0,c.jsx)(d,{}),t]}),(0,c.jsx)(n.w,{}),(0,c.jsx)("div",{className:"absolute inset-0 z-0 section-bg"})]})}},54811:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>M});var l=a(96540),r=a(52471),n=a(6855),s=a(16646),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const f=(0,l.forwardRef)(((e,t)=>l.createElement(n.A,((e,t)=>o(e,c(t)))(((e,t)=>{for(var a in t||(t={}))m.call(t,a)&&h(e,a,t[a]);if(d)for(var a of d(t))p.call(t,a)&&h(e,a,t[a]);return e})({ref:t},e),{weights:s.A}))));f.displayName="ArrowCircleDown";var y=a(51876),u=a(7807),x=a(56289),g=a(29030),j=a(74848);function b(e){let{image:t,title:a,description:l,link:r}=e;const n=(0,g.Ay)(r);return(0,j.jsxs)("div",{className:"flex flex-col items-center w-full justify-center max-w-[540px] mx-auto border border-solid border-[#8c7cf726] bg-[#bd82fd1a] rounded-[24px]",children:[(0,j.jsx)("img",{src:t,alt:a,className:"rounded-t-[24px]"}),(0,j.jsxs)("div",{className:"flex flex-col p-[18px] gap-[18px] w-full h-full",children:[(0,j.jsx)("h2",{className:"mb-0 font-bold !text-[30px]",children:a}),(0,j.jsx)("p",{className:"text-[14px] font-medium mb-0 flex-1",children:l}),(0,j.jsx)(x.A,{href:n,children:(0,j.jsx)(u.$,{variant:"secondary",size:"lg",children:"View Tutorial"})})]})]})}var k=a(26361);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)({}).hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},v.apply(null,arguments)}const w=e=>{let{title:t,titleId:a,...r}=e;return l.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 346.72 584.8","aria-labelledby":a},r),t?l.createElement("title",{id:a},t):null,l.createElement("path",{d:"M322.42 511.9c-6.77 12.46-14.93 25.09-24.43 37.73-6.59 8.76-13.82 17.52-21.69 26.21-1.47 1.62-4.07 1.46-5.34-.33-52.3-73.67-28.04-164.17.38-230.92 8.56 1.58 16.37 3.8 23.43 6.61 1.9.75 3.75 1.55 5.54 2.39 54.61 25.51 59.78 89.06 22.11 158.31",style:{fill:"#975cd6",strokeWidth:0}}),l.createElement("path",{d:"M322.42 511.9c-6.77 12.46-14.93 25.09-24.43 37.73-30.16-35.28-35.64-112.34-3.22-198.43 1.9.75 3.75 1.55 5.54 2.39 54.61 25.51 59.78 89.06 22.11 158.31M104.95 499.97c-3.33 26.03-12.23 51.67-29.18 75.54-1.28 1.79-3.87 1.95-5.34.33-19.22-21.24-34.66-42.85-46.12-63.94-34.4-63.24-33.07-121.73 9.01-150.83 4-2.77 8.36-5.27 13.1-7.48 8.46-3.96 18.11-6.99 28.97-9 19.21 45.12 36.52 101.09 29.56 155.38",style:{fill:"#bc83fb",strokeWidth:0}}),l.createElement("path",{d:"M104.95 499.97c-47.75-17.56-53.55-43.12-71.63-138.9 4-2.77 8.36-5.27 13.1-7.48 8.46-3.96 18.11-6.99 28.97-9 19.21 45.12 36.52 101.09 29.56 155.38",style:{fill:"#975cd6",strokeWidth:0}}),l.createElement("path",{d:"M167.85 438.12c.08 0 .17-.01.27-.01v.02s-.09 0-.27-.01M295.82 187.31c-10.78 84.48-28.53 213.56-28.53 213.56-4.69 34.33-81.2 37.03-92.08 37.24-.11 0-.2.01-.29.01h-.28c-.19 0-.44 0-.72-.01-10.86-.21-89.1-2.9-93.78-37.23 0 0-16.04-129.09-26.83-213.57-4.98-38.98 8.05-83.59 40.24-126.53C121.34 23.73 149.47 0 174.68 0s53.12 23.73 80.9 60.78c32.19 42.94 45.22 87.55 40.24 126.53M167.59 438.12c-.45.01-.68.01-.68.01v-.02c.27.01.5.01.68.01",style:{fill:"#5d4dc4",strokeWidth:0}}),l.createElement("path",{d:"M177.72 346.17c-21.62 66.69-19.12 101.77-19.12 101.77l18.18 4.58zM138.85 422.28l-19.34 8.7c-19.53-5.24-37.21-14.33-39.36-30.11 0 0-16.05-129.09-26.83-213.56-3.5-27.39 1.89-57.56 16.58-87.98h.02c-11.13 62.53 7.37 126.4 19.93 220.75s49 102.2 49 102.2",style:{fill:"#413296",strokeWidth:0}}),l.createElement("path",{d:"M80.14 400.87c2.12 11.73 4.03 23.35 5.56 34.78 5.71 42.71 171.1 45.5 176.82-3.09 1.21-10.25 2.74-20.57 4.78-31.7-6.97 32.06-182.13 26.17-187.15.01Z",style:{fill:"#312570",strokeWidth:0}}),l.createElement("path",{d:"M262.28 70.15c-12.19 28.2-164.13 31.27-175.52.13 2.17-3.17 4.43-6.34 6.8-9.5C121.34 23.73 149.48 0 174.68 0s53.12 23.73 80.9 60.78c2.34 3.12 4.57 6.24 6.7 9.37",style:{fill:"#413296",strokeWidth:0}}),l.createElement("path",{d:"M173.68 325c.98.48 2.02.86 3.13 1.11 2.38.55 4.72.48 6.85-.11 4.44-1.23 7.93-4.71 8.83-9.42 1.33-6.97-3.54-14.01-10.87-15.72-7.33-1.7-14.35 2.57-15.68 9.54-1.12 5.92 2.22 11.9 7.75 14.6Z",style:{fill:"#312570",strokeWidth:0}}),l.createElement("path",{d:"M177.79 317.83c.52.13 1.06.19 1.62.2 1.2 0 2.32-.28 3.27-.79 2-1.07 3.3-3.11 3.22-5.47-.11-3.49-3.21-6.34-6.91-6.37s-6.61 2.77-6.5 6.26c.1 2.96 2.35 5.47 5.29 6.17Z",style:{fill:"#975cd6",strokeWidth:0}}),l.createElement("path",{d:"M198.96 314.57c.07.35.18.7.34 1.04.33.73.82 1.33 1.41 1.77 1.22.92 2.83 1.13 4.25.42 2.1-1.05 2.96-3.75 1.93-6.01-1.03-2.27-3.56-3.25-5.65-2.19-1.78.9-2.67 2.98-2.27 4.97ZM151.5 314.57c.07.35.18.7.34 1.04.33.73.82 1.33 1.41 1.77 1.22.92 2.83 1.13 4.25.42 2.1-1.05 2.96-3.75 1.93-6.01-1.03-2.27-3.56-3.25-5.65-2.19-1.78.9-2.67 2.98-2.27 4.97Z",style:{fill:"#413296",strokeWidth:0}}),l.createElement("ellipse",{cx:171.22,cy:210.38,rx:79.69,ry:81.5,style:{fill:"#413296",strokeWidth:0},transform:"rotate(-11.51 171.288 210.408)"}),l.createElement("path",{d:"M150.43 253.37c4.43 2.18 9.15 3.88 14.14 5.04 10.75 2.5 21.35 2.17 30.97-.51 20.07-5.57 35.88-21.29 39.93-42.62 6-31.54-16.02-63.35-49.18-71.07-33.17-7.71-64.91 11.6-70.91 43.14-5.09 26.79 10.05 53.79 35.05 66.02",style:{fill:"#312570",strokeWidth:0}}),l.createElement("path",{d:"M255.58 60.78c0 29.97-162.02 33.47-162.02 0C121.34 23.73 149.48 0 174.68 0s53.12 23.73 80.9 60.78",style:{fill:"#8d7cf7",strokeWidth:0}}),l.createElement("path",{d:"M241.49 43.18c-12.47 20.36-122.16 22.53-133.97.18C130.67 16.46 153.69 0 174.68 0s43.76 16.38 66.81 43.18",style:{fill:"#bbb2f7",strokeWidth:0}}),l.createElement("path",{d:"M241.49 43.18c-5.09 12.12-37.34 15.66-49.4 16.64-11.81.91-23.68 1.03-35.5.3-11.84-.79-23.74-2.23-35.01-6.2-5.43-2.03-11.81-4.77-14.06-10.56 3.72 4.53 9.33 6.74 14.73 8.63 5.52 1.78 11.27 2.9 17.04 3.79 23.14 3.27 46.94 2.91 70.02-.69 8.55-1.48 17.25-3.23 25.05-7.09 2.61-1.28 5.08-2.68 7.13-4.81Z",style:{fill:"#e3deff",strokeWidth:0}}),l.createElement("path",{d:"M271.14 372.76c-.25 1.84-.49 3.62-.73 5.31-5 4.02-14.34 7.34-27.96 9.94-18.1 3.45-42.44 5.35-68.54 5.35s-50.45-1.9-68.55-5.35c-13.7-2.61-23.07-5.96-28.05-10.01-.22-1.69-.44-3.45-.67-5.29 4.99 10.21 45.13 17.65 97.27 17.65s92.14-7.42 97.23-17.6",style:{fill:"#413296",strokeWidth:0}}),l.createElement("path",{d:"M273.14 358.1c-.27 1.96-.53 3.87-.78 5.72-14.76 12.27-66.11 15.79-98.45 15.79-26.57 0-51.34-1.93-69.75-5.44-14.01-2.68-23.57-6.11-28.61-10.24-.22-1.73-.44-3.51-.67-5.33 5.03 10.41 45.92 18.01 99.03 18.01s95.29-7.85 99.23-18.51M293.45 205.73c-.13.99-.26 1.98-.38 2.98a28.55 28.55 0 0 1-25.18-19.43l-12.51-37.27c-3.4-10.12-.92-21.19 6.47-28.9l19.17-19.99c.45.98.89 1.96 1.33 2.94s-18.33 19.13-18.33 19.13a25.52 25.52 0 0 0-5.8 25.87l12.51 37.26a25.57 25.57 0 0 0 22.72 17.41M93.44 152.01l-12.51 37.27a28.57 28.57 0 0 1-24.89 19.41c-.13-1-.25-1.99-.38-2.98a25.55 25.55 0 0 0 22.42-17.39l12.51-37.26c3.04-9.06.82-18.98-5.79-25.87L66.69 106.3c.44-.99.88-1.97 1.33-2.96l18.94 19.77a28.54 28.54 0 0 1 6.48 28.9",style:{fill:"#413296",strokeWidth:0}}),l.createElement("path",{d:"M122.56 43.11c4.89 4.89 34.11-22.83 29.35-27.59s-36.61 20.33-29.35 27.59",style:{fill:"#f7f7f7",strokeWidth:0}}),l.createElement("path",{d:"M158.84 71.39c-.18 3.22-3.08 5.63-6.48 5.4-.39-.03-.76-.09-1.12-.18a6.5 6.5 0 0 1-2.28-1.07c-1.57-1.16-2.54-3-2.42-5 .18-3.22 3.08-5.64 6.48-5.41.68.05 1.32.2 1.92.44.8.3 1.52.77 2.11 1.35 1.19 1.15 1.89 2.75 1.79 4.47M199.94 70.54c.06 1.09-.19 2.13-.69 3.04-.4.73-.96 1.37-1.64 1.89a6.37 6.37 0 0 1-3.49 1.32c-3.4.23-6.3-2.18-6.48-5.4-.07-1.19.25-2.33.85-3.29.43-.72 1.02-1.34 1.72-1.82.92-.65 2.03-1.06 3.25-1.15 3.4-.23 6.3 2.19 6.48 5.41M233.4 69.97c-.68.05-1.34-.01-1.96-.17-.84-.19-1.61-.56-2.27-1.06-1.3-.98-2.16-2.47-2.26-4.17-.18-3.22 2.43-6.02 5.83-6.26.68-.05 1.34.01 1.96.17.84.19 1.61.56 2.26 1.06 1.3.98 2.17 2.46 2.26 4.17.18 3.22-2.42 6.02-5.82 6.26",style:{fill:"#5042a8",strokeWidth:0}}),l.createElement("path",{d:"m236.96 59.54-5.52 10.26c-.84-.19-1.61-.56-2.27-1.06l5.53-10.26c.84.19 1.61.56 2.26 1.06",style:{fill:"#392c85",strokeWidth:0}}),l.createElement("path",{d:"M119.56 63.71c.12 2.07-.91 3.97-2.57 5.12-.68.47-1.45.82-2.3 1-.31.07-.62.12-.95.14-3.4.23-6.3-2.19-6.48-5.4-.11-1.92.78-3.69 2.23-4.85.64-.53 1.39-.92 2.21-1.16.44-.13.9-.22 1.38-.25 3.4-.23 6.3 2.18 6.48 5.4",style:{fill:"#5042a8",strokeWidth:0}}),l.createElement("path",{d:"M199.25 73.58c-.4.73-.96 1.37-1.64 1.89l-9.12-7.37c.43-.72 1.02-1.34 1.72-1.82zM157.05 66.92l-5.81 9.69a6.5 6.5 0 0 1-2.28-1.07l5.98-9.97c.8.3 1.52.77 2.11 1.35M116.99 68.83c-.68.47-1.45.82-2.3 1l-5.2-10.11c.64-.53 1.39-.92 2.21-1.16z",style:{fill:"#392c85",strokeWidth:0}}),l.createElement("path",{d:"M181.09 582.1c-.85 3.31-5.42 3.67-6.78.53a330 330 0 0 1-6.1-15.09c-26.61-70.45-9.54-99.61-9.54-99.61l10.42.29c2.43.07 4.45-1.89 4.45-4.33.11-51.21 3.04-100.4 4.18-117.72.13-1.96 2.77-2.51 3.67-.77 37.63 72.33 8.98 200.45-.3 236.7",style:{fill:"#bc83fb",strokeWidth:0}}),l.createElement("path",{d:"M168.21 567.54c-26.61-70.45-9.54-99.61-9.54-99.61l10.42.29c2.43.07 4.45-1.89 4.45-4.33.11-51.21 3.04-100.4 4.18-117.72 14.55 114.57 1.97 194.23-9.51 221.37",style:{fill:"#975cd6",strokeWidth:0}}),l.createElement("circle",{cx:177.5,cy:225.97,r:36.92,style:{fill:"#bc83fb",strokeWidth:0}}),l.createElement("path",{d:"M174.56 244.16c.35 4.69 6.27 4.59 6.41-.14.13-1.39 2.18-1.34 2.25.04.27 3.1-2.08 6.18-5.38 6.16-1.56 0-3.13-.68-4.16-1.88-1.03-1.06-2.45-5.16-.22-5.25.6.01 1.07.49 1.1 1.07M196.71 237.96c-.23-1.92-.89-3.68-2.07-4.89-2.32-2.5-6.65-2.47-8.91.09-1.14 1.24-1.75 3.02-1.95 4.94a1.054 1.054 0 0 1-2.1.02c-.12-1.14-.05-2.32.21-3.5 1.49-6.85 10.54-8.86 14.94-3.47 1.58 1.89 2.16 4.42 1.99 6.78a1.06 1.06 0 0 1-1.13.97c-.52-.04-.92-.45-.97-.95ZM171.2 238.25c-.25-1.92-.92-3.68-2.1-4.89-2.33-2.49-6.65-2.47-8.92.09-1.14 1.24-1.76 3.02-1.98 4.95-.05.57-.56.99-1.13.92a1.02 1.02 0 0 1-.9-.9c-.13-1.14-.06-2.32.19-3.5 1.47-6.86 10.53-8.86 14.92-3.47 1.58 1.89 2.15 4.42 1.96 6.78a1.019 1.019 0 0 1-2.03.02Z",style:{strokeWidth:0}}),l.createElement("path",{d:"m144.04 210.34 33.33-1.87 34.42 3.79c1.65 4.11 2.57 8.6 2.63 13.31.01 1.28-.04 2.55-.15 3.8-6.95-1.12-22.19-6.29-36.56-17.47 0 0-13.14 14.22-37.08 15.87-.03-.46-.04-.92-.05-1.37a36.8 36.8 0 0 1 3.46-16.04ZM175.94 115.88c1.58.55 13.84 20.99 27.55 39.31s9.23 29.22-1.91 37.1c-39.99.45-48.78.54-48.78.54-13.63-11.13-14.63-18.16-.94-37.63 13.68-19.47 22.5-39.87 24.08-39.32",style:{fill:"#8747cc",strokeWidth:0}}),l.createElement("path",{d:"M210.54 202.29c-17.96-31.54-30.8-72.89-34.06-73.02-3.25-.13-15.66 40.01-32.88 74.93z",style:{fill:"#bc83fb",strokeWidth:0}}),l.createElement("path",{d:"M177.57 137.18c.26 7.85.08 15.71-.17 23.55-.21 7.74-.84 15.63.39 23.25.19 1.19-1.6 1.54-1.85.33-.78-3.92-.95-7.91-.95-11.88 0-7.86.49-15.66.63-23.5.06-3.9.09-7.81.07-11.71 0-1.21 1.82-1.27 1.88-.04",style:{fill:"#8747cc",strokeWidth:0}}),l.createElement("path",{d:"M217.02 220.27c-2.26 4.12-22.38 2.13-39.64-11.06-16.96 13.57-37.04 16.01-39.39 11.94-2.37-4.08 1.28-17.92 5.39-20.19 4.11-2.28 19.83-2.01 33.48-13.29 13.9 10.97 30.17 10.35 34.33 12.53 4.16 2.17 8.1 15.93 5.84 20.06Z",style:{fill:"#bc83fb",strokeWidth:0}}),l.createElement("path",{d:"M147.01 199.01c7.86-1.28 15.85-3.21 22.89-6.99 1.67-.92 3.46-2.03 4.94-3.21.95-.6 1.66-2.17 2.87-1.44 6.72 4.22 14.14 7.31 21.85 9.19 2.58.61 5.24 1.15 7.82 1.46 1.42.19 1.24 2.34-.23 2.24-10.93-1.12-21.65-4.75-30.7-11.02l1.49-.21c-.55.64-1.05 1.08-1.59 1.58-3.74 3.21-8.27 5.4-12.86 7.05-5.16 1.86-10.74 2.96-16.18 3.6-1.45.17-1.78-2.01-.29-2.23ZM201.54 253.98c-10.3 11.77-30.15 13.77-42.45 4.04 14.26 5.66 29.83 5.23 42.45-4.04",style:{fill:"#8747cc",strokeWidth:0}}),l.createElement("path",{d:"M117.02 103.12h115.86v32.69H117.02z",style:{fill:"#5d4dc4",strokeWidth:0}}),l.createElement("path",{d:"M179.08 127.22c-43.11-2.16-79.69 29.25-81.7 70.18-2.02 40.92 31.3 75.85 74.41 78.01 43.11 2.17 79.69-29.25 81.7-70.17s-31.3-75.85-74.41-78.02m56.4 88.07c-4.05 21.32-19.86 37.04-39.94 42.61-9.61 2.68-20.22 3.01-30.96.51a65.7 65.7 0 0 1-14.15-5.04c-24.99-12.23-40.13-39.23-35.04-66.02 5.99-31.54 37.74-50.84 70.91-43.14 33.15 7.72 55.18 39.54 49.18 71.08",style:{fill:"#ab9eff",strokeWidth:0}}),l.createElement("path",{d:"M187.58 137.83c-18.83-4.38-38.3-.86-53.43 9.64-13.15 9.13-22.04 22.8-25.03 38.49-5.56 29.3 10.34 59.45 38.66 73.31a72 72 0 0 0 15.52 5.53c3.15.73 6.33 1.25 9.51 1.54 8.33.79 16.66.08 24.53-2.11 23.03-6.39 40.04-24.62 44.4-47.56 6.65-34.97-17.64-70.34-54.16-78.84m47.9 77.46c-4.05 21.32-19.86 37.04-39.94 42.61-9.61 2.68-20.22 3.01-30.96.51a65.7 65.7 0 0 1-14.15-5.04c-24.99-12.23-40.13-39.23-35.04-66.02 5.99-31.54 37.74-50.84 70.91-43.14 33.15 7.72 55.18 39.54 49.18 71.08",style:{fill:"#5d4dc4",strokeWidth:0}}),l.createElement("path",{d:"M129.48 166.29c-4.5 6.15-5.96 12.97-3.26 15.22s7.25-1.46 11.76-7.62c4.5-6.15 7.26-12.42 4.55-14.67s-8.55.91-13.05 7.07",style:{fill:"#f7f7f7",strokeWidth:0}}),l.createElement("ellipse",{cx:151.38,cy:153.91,rx:4.98,ry:3.76,style:{fill:"#f7f7f7",strokeWidth:0},transform:"rotate(-30 151.382 153.903)"}))},E=(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("title",{children:"Tutorials | ink!"}),(0,j.jsx)("meta",{name:"description",content:"Access tutorials to help you get started with ink! smart contracts and deploy them on Polkadot and beyond."}),(0,j.jsx)("meta",{name:"keywords",content:"tutorials, learning, ink!, guides, Polkadot"}),(0,j.jsx)("meta",{name:"author",content:"ink! Alliance"}),(0,j.jsx)("meta",{property:"og:title",content:"Tutorials | ink!"}),(0,j.jsx)("meta",{property:"og:description",content:"Access tutorials to help you get started with ink! smart contracts and deploy them on Polkadot and beyond."}),(0,j.jsx)("meta",{property:"og:image",content:"https://use-ink.com/img/og-image.png"}),(0,j.jsx)("meta",{property:"og:url",content:"https://use-ink.com"}),(0,j.jsx)("meta",{property:"og:type",content:"website"}),(0,j.jsx)("meta",{property:"og:site_name",content:"ink!"}),(0,j.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,j.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,j.jsx)("meta",{property:"og:image:height",content:"630"}),(0,j.jsx)("meta",{property:"og:image:alt",content:"ink! logo"}),(0,j.jsx)("meta",{property:"og:image:type",content:"image/png"})]});function M(){return(0,j.jsxs)(r.default,{className:"container",head:E,children:[(0,j.jsxs)("div",{className:"flex flex-col items-center justify-center max-w-[540px] min-h-[50vh] mx-auto text-center mt-[10vh]",children:[(0,j.jsx)(k.P.div,{className:"w-[246px] h-[246px] rotate-[25deg]",initial:{opacity:0,scale:.7,translateY:200,translateX:-100,rotate:40},animate:{opacity:1,scale:1,translateY:0,translateX:0,rotate:30},transition:{duration:1,opacity:{visualDuration:.1},translateY:{type:"spring",visualDuration:.9,bounce:.5},translateX:{type:"spring",visualDuration:.9,bounce:.5},rotate:{type:"tween",duration:2}},children:(0,j.jsx)(w,{style:{filter:"drop-shadow(0 10px 10px #0005"},className:"w-full h-full animate-float"})}),(0,j.jsx)(k.P.div,{initial:{opacity:0,translateY:100},animate:{opacity:1,translateY:0},transition:{duration:1.5},children:(0,j.jsx)("h1",{className:"font-bold text-[64px]",children:"Tutorials"})}),(0,j.jsx)(k.P.div,{initial:{opacity:0,translateY:100},animate:{opacity:1,translateY:0},transition:{duration:1.2,delay:.4},children:(0,j.jsx)("p",{className:"text-[18px] font-semibold",children:"Explore step-by-step tutorials to help developers build and deploy ink! smart contracts on Polkadot and beyond."})}),(0,j.jsx)(k.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:1},children:(0,j.jsx)("a",{href:"#tutorials",className:"scroll-m-60",children:(0,j.jsx)(f,{size:32,weight:"duotone",fill:"rgb(140, 124, 247)"})})})]}),(0,j.jsxs)("section",{id:"tutorials",className:"flex flex-col items-center justify-center max-w-[900px] mx-auto pt-20",children:[(0,j.jsx)("div",{className:"grid grid-cols-1 gap-[36px] md:grid-cols-2",children:y.EL.map((e=>(0,j.jsx)(b,{...e},e.title)))}),(0,j.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 my-16 md:flex-row",children:[(0,j.jsx)("p",{className:"m-0",children:"Not seeing a tutorial you wish we offered?"}),(0,j.jsx)(x.A,{href:"https://github.com/paritytech/ink-tutorials/issues",className:"text-blue-500",children:(0,j.jsx)(u.$,{size:"lg",variant:"secondary",children:"Request a topic"})})]})]})]})}},46942:(e,t)=>{var a;!function(){"use strict";var l={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=s(e,n(a)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)l.call(e,a)&&e[a]&&(t=s(t,a));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},16646:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var l=a(96540);const r=new Map([["bold",l.createElement(l.Fragment,null,l.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm40.49-84.49a12,12,0,0,1,0,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,1,1,17-17L116,139V88a12,12,0,0,1,24,0v51l11.51-11.52A12,12,0,0,1,168.49,127.51Z"}))],["duotone",l.createElement(l.Fragment,null,l.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),l.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z"}))],["fill",l.createElement(l.Fragment,null,l.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,117.66-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z"}))],["light",l.createElement(l.Fragment,null,l.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm36.24-86.24a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48,0l-32-32a6,6,0,0,1,8.48-8.48L122,153.51V88a6,6,0,0,1,12,0v65.51l21.76-21.75A6,6,0,0,1,164.24,131.76Z"}))],["regular",l.createElement(l.Fragment,null,l.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z"}))],["thin",l.createElement(l.Fragment,null,l.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm34.83-86.83a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,158.34V88a4,4,0,0,1,8,0v70.34l25.17-25.17A4,4,0,0,1,162.83,133.17Z"}))]])},6855:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var l=a(96540),r=Object.defineProperty,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const c=(0,l.forwardRef)(((e,t)=>{const a=e,{alt:r,color:c="currentColor",size:d="1em",weight:m="regular",mirrored:p=!1,children:h,weights:f}=a,y=((e,t)=>{var a={};for(var l in e)s.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&n)for(var l of n(e))t.indexOf(l)<0&&i.call(e,l)&&(a[l]=e[l]);return a})(a,["alt","color","size","weight","mirrored","children","weights"]);return l.createElement("svg",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&o(e,a,t[a]);if(n)for(var a of n(t))i.call(t,a)&&o(e,a,t[a]);return e})({ref:t,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,fill:c,viewBox:"0 0 256 256",transform:p?"scale(-1, 1)":void 0},y),!!r&&l.createElement("title",null,r),h,f.get(m))}));c.displayName="SSRBase";const d=c}}]);
/*! For license information please see a8f03678.ba4bed67.js.LICENSE.txt */
(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1619,9064],{52471:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var n=a(96540),r=a(44777),l=a(55480),i=a(27143),s=a(46942),c=a.n(s),o=a(74848);function d(){const e=(0,n.useRef)(null),t=(a=150,Array.from({length:a},(()=>({x:100*Math.random(),y:100*Math.random(),size:2*Math.random()+1,parallax:.4*Math.random()+.2,animationDelay:2*Math.random()}))));var a;return(0,n.useEffect)((()=>{function t(){e.current&&requestAnimationFrame((()=>{e.current?.style.setProperty("--scroll",`${window.scrollY}px`)}))}return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)}),[]),(0,o.jsx)("div",{ref:e,className:"absolute inset-0 overflow-hidden pointer-events-none",style:{imageRendering:"pixelated",willChange:"transform",transform:"translate3d(0, 0, 0)",mask:"linear-gradient(150deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%) add"},children:t.map(((e,t)=>(0,o.jsx)("div",{className:"absolute bg-white rounded-full animate-star-glow",style:{left:`${e.x}%`,top:`${e.y}%`,width:`${e.size}px`,height:`${e.size}px`,transform:`translateY(calc(var(--scroll) * ${e.parallax}))`,animationDelay:`${e.animationDelay}s`,backfaceVisibility:"hidden",WebkitFontSmoothing:"none"}},t)))})}const m=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("title",{children:"Smart Contracts on Polkadot in Rust | ink!"}),(0,o.jsx)("meta",{name:"description",content:"Build Rust-based smart contracts on Polkadot with ink!"}),(0,o.jsx)("meta",{name:"keywords",content:"Smart contracts, Rust, Polkadot, PolkaVM, RISC-V"}),(0,o.jsx)("meta",{property:"og:title",content:"Smart Contracts on Polkadot in Rust | ink!"}),(0,o.jsx)("meta",{property:"og:description",content:"Build Rust-based smart contracts on Polkadot with ink!"}),(0,o.jsx)("meta",{property:"og:image",content:"https://niklasp.github.io/ink-docs/img/opengraph/home.png"}),(0,o.jsx)("meta",{property:"og:url",content:"https://niklasp.github.io/ink-docs/"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:site_name",content:"ink!"}),(0,o.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,o.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,o.jsx)("meta",{property:"og:image:height",content:"630"}),(0,o.jsx)("meta",{property:"og:image:alt",content:"ink! logo"}),(0,o.jsx)("meta",{property:"og:image:type",content:"image/png"})]});function h(e){let{children:t,head:a,className:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{children:a||m}),(0,o.jsx)(r.F,{}),(0,o.jsxs)("main",{className:c()("page flex flex-col min-h-screen mt-[80px] z-10",n),children:[(0,o.jsx)(d,{}),t]}),(0,o.jsx)(l.w,{}),(0,o.jsx)("div",{className:"absolute inset-0 z-0 section-bg"})]})}},78079:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>oe});var n,r,l,i,s,c,o,d,m,h,p,x,g,u,f,j,y,b,k,v,w,E,M,C,F,N,B,Z,A,D,P,S,I,R,z,_,O,L,T,V,$,U,q,W,G,H,J,Y,Q=a(96540),K=a(52471),X=a(2284),ee=a(29030),te=a(93529),ae=a(26361);function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ne.apply(null,arguments)}const re=e=>{let{title:t,titleId:a,...K}=e;return Q.createElement("svg",ne({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 342.495 400","aria-labelledby":a},K),t?Q.createElement("title",{id:a},t):null,n||(n=Q.createElement("path",{fill:"#FFF",d:"M338.951 195.941a69 69 0 0 0-2.63-8.237c-10.833-27.696-33.928-42.833-49.801-48.49a.26.26 0 0 1-.169-.22c-.406-6.241-2.41-12-5.81-16.829a.23.23 0 0 1-.042-.195 19.1 19.1 0 0 0-.93-10.537.24.24 0 0 1-.009-.135c1.353-6.977-2.579-14.106-9.471-16.541a14.6 14.6 0 0 0-4.854-.829 14.62 14.62 0 0 0-12.812 7.611.24.24 0 0 1-.093.093 19.1 19.1 0 0 0-7.341 7.315.25.25 0 0 1-.169.127 35 35 0 0 0-17.437 9.776.25.25 0 0 1-.169.076c-2.36.144-4.677.338-6.926.609a.27.27 0 0 1-.237-.102 15 15 0 0 0-.541-.676c-.136-.415-.322-.956-.457-1.37.025-.228.051-.457.059-.685.042-.558.068-1.116.093-1.666 0-.042.017-.093.042-.135.288-.432.533-.863.753-1.269 3.493-6.638 2.013-14.943.152-20.744-1.767-5.531-4.186-9.818-7.213-12.803a.255.255 0 0 1-.043-.313c2.081-3.95 3.197-8.203 3.332-12.736.262-8.905-3.34-18.047-11.002-27.932-5.234-6.766-10.368-13.683-14.494-19.239-3.079-4.161-5.743-7.747-7.789-10.394-3.163-4.084-5.666-7.306-10.19-8.794A13.8 13.8 0 0 0 168.482 0h-.017c-7.983 0-11.966 6.309-13.666 9.006-1.243 1.962-2.698 4.491-4.541 7.704-3.636 6.326-8.617 14.994-14.639 23.865-7.636 11.247-10.833 18.935-11.044 26.512-.161 5.97 1.641 10.875 4.161 14.866a.256.256 0 0 1-.034.313c-2.918 3.172-5.142 7.645-6.63 13.362-1.531 5.886-2.537 14.258 1.328 20.685.203.338.422.685.676 1.032a.4.4 0 0 1 .051.126 47.6 47.6 0 0 0 4.228 15.84.264.264 0 0 1-.16.363c-17.252 5.413-31.865 16.271-39.552 30.301-8.169 14.943-7.501 31.881 1.843 46.486 2.03 3.18 4.575 6.224 7.586 9.065.161.153.076.44-.152.466a24 24 0 0 1-3.146.203c-8.914 0-16.888-4.897-21.962-13.455l-.034-.068c-1.268-2.596-2.182-4.465-3.154-10.215-2.943-17.396 4.025-32.778 12.101-50.588 4.584-10.131 9.311-20.55 12.296-31.873a.28.28 0 0 1 .11-.161c3.907-2.368 7.197-5.116 9.827-8.194 4.22-4.948 6.782-10.876 7.408-17.134.837-8.422-1.793-17.42-7.62-26.012-4.617-6.825-11.239-13.404-19.171-19.062-2.317-1.649-4.989-2.799-7.822-3.069-6.901-.668-13.243 3.222-15.814 9.513-.795 1.937-1.641 3.924-2.453 5.844-6.562 15.543-13.353 31.611-6.224 45.683 2.216 4.389 5.531 8 9.903 10.816.11.068.152.194.11.313-2.529 7.146-5.894 14.308-9.396 21.742-8.837 18.757-18.841 40.008-15.704 65.294 1.616 15.349 8.685 29.201 19.933 39.036 9.141 7.991 20.49 12.938 32.499 14.274.11.212.101.195.203.415-5.091 7.932-11.484 13.607-19.07 16.939a.285.285 0 0 1-.33-.077c-3.628-4.575-6.638-8.955-8.879-12.203-1.793-2.613-3.087-4.49-4.305-5.953-4.084-4.863-8.879-5.598-11.374-5.598h-.017c-5.023 0-9.674 2.74-12.135 7.146-2.478 4.439-2.52 9.649-.017 18.063.059.203-.127.406-.338.347a49 49 0 0 1-5.624-1.852c-6.08-2.427-9.92-3.425-13.252-3.425-6.866 0-12.676 4.516-14.114 10.993-2.249 10.131 6.656 16.186 10.453 18.774 4.05 2.757 9.251 5.666 14.647 8.186 6.596 3.095 13.327 5.522 19.458 7.036q.815.202 1.666.381l.423.093.11.025c.398.085.803.161 1.218.245.22.034.406.076.6.11a77 77 0 0 0 1.514.262c.101.017.194.034.296.043 1.471.237 3.036.431 4.609.583.034.009.076.009.101.017.77.068 1.59.135 2.503.195l.483.034c.879.05 1.691.084 2.503.109h.389l.101.009c.085.008.161.008.245.008a75 75 0 0 0 4.964 3.662c-4.101 1.159-8.583 3.146-12.186 6.562-3.974 3.721-8.701 10.825-8.701 23.493 0 1.683.042 3.425.084 5.116.034 1.43.076 2.85.076 4.102 0 2.063-.034 2.545-.059 3.01-.059.964-.101 1.878-.101 4.136 0 7.213.803 17.742 7.737 25.886 5.878 6.892 14.707 10.384 26.224 10.384 8.922 0 16.787-2.182 23.197-6.148 3.112 2.926 7.899 5.514 15.087 5.514 5.429 0 10.182-1.556 13.886-4.296 3.568 2.402 8.076 4.296 13.598 4.296 3.374 0 6.528-.668 9.345-1.903 3.035 1.446 6.63 2.216 10.672 2.216 3.712 0 7.103-.795 10.055-2.258a21.56 21.56 0 0 0 10.122 2.503c4.753 0 9.058-1.387 12.559-3.788 3.416 2.308 7.602 3.628 12.219 3.628 3.501 0 6.74-.711 9.582-2.013 2.934 1.404 6.266 2.173 9.877 2.173 4.355 0 8.423-1.311 11.797-3.687 3.18 1.886 6.985 3.205 11.476 3.205 3.645 0 7.027-.778 9.987-2.199a22.9 22.9 0 0 0 11.062 2.833c12.769 0 22.765-10.063 22.765-22.926 0-3.797-.981-7.382-2.698-10.511 1.319-4.313 1.505-8.626 1.505-12.042 0-2.563.212-5.235.423-8.068.254-3.205.533-6.842.533-10.757 0-7.493-3.467-13.734-9.091-17.463a102 102 0 0 0 8.279-1.48c3.527-.795 6.554-1.691 8.998-2.681 6.478-2.613 10.165-6.773 10.968-12.372.99-6.96-3.34-13.48-10.3-15.509-2.317-.668-4.744-.863-8.761-1.184-6.469-.508-16.676-1.319-27.408-4.423-.211-.059-.262-.33-.084-.474 4.016-3.205 5.919-6.757 6.756-9.877a.254.254 0 0 1 .313-.186c5.835 1.581 12.271 2.495 19.391 2.495 1.455 0 2.943-.043 4.432-.119 13.023-.676 24.414-6.909 32.084-17.556 10.537-14.63 12.939-36.177 6.613-59.137m-38.283 25.048c-.38 3.755-1.345 5.988-2.055 7.112a.25.25 0 0 1-.245.119c-7.138-.694-15.383-5.505-22.901-13.226 3.67-7.84 4.99-16.973 3.831-26.41-.871-7.138-2.757-12.88-4.338-17.548.203-.144.211-.144.211-.144.009 0 .051-.034.212-.144 6.799 5.929 15.391 14.943 21.268 28.508 3.248 7.501 4.677 15.222 4.017 21.733"})),r||(r=Q.createElement("path",{fill:"#8747CC",d:"M246.503 234.368c-.871-3.746-25.175-7.341-24.769-4.465.406 2.875 25.902 9.336 24.769 4.465"})),l||(l=Q.createElement("path",{fill:"#BC83FB",d:"M300.584 242.216c13.15-2.36 18.714-24.728 8.482-48.339-12.855-29.674-36.432-40.507-36.017-43.306s37.006 7.137 50.672 42.063c10.723 27.4-4.118 52.152-20.541 55.374-16.415 3.222-15.747-3.433-2.605-5.792Z"})),i||(i=Q.createElement("path",{fill:"#8747CC",d:"M178.799 143.501c39.264 8.33 54.656 31.028 73.252 62.715 17.657 30.097 45.471 44.203 64.862 30.198 17.049-12.313 6.816-43.78 6.816-43.78 13.134 36.93 0 65.235-24.169 66.487-60.668 3.145-65.48-70.267-117.962-86.91Z"})),s||(s=Q.createElement("path",{fill:"#D8B7FB",d:"M252.276 233.22c-3.6-4.369-4.713-9.398-2.485-11.234 2.227-1.835 6.951.218 10.551 4.587s4.712 9.398 2.485 11.233c-2.228 1.836-6.952-.218-10.551-4.586M281.889 252.48c-4.287-1.07-7.24-4.027-6.597-6.606s4.64-3.801 8.927-2.732c4.287 1.07 7.24 4.027 6.597 6.606s-4.64 3.801-8.927 2.732M305.875 251.471c-1.02-1.687.719-4.606 3.885-6.52s6.558-2.098 7.578-.412c1.019 1.687-.72 4.606-3.885 6.52s-6.558 2.098-7.578.412"})),c||(c=Q.createElement("path",{fill:"#6B36A8",d:"M166.055 210.199c-2.52 59.256 10.892 101.175 30.224 105.581 15.467 3.527 25.252-5.92 7.214-3.315-19.053-37.547-6.453-102.013-6.453-102.013-30.799-35.019-30.097-21.107-30.985-.253"})),o||(o=Q.createElement("path",{fill:"#BC83FB",d:"M180.851 288.926c-.834-4.153.29-7.882 2.51-8.328 2.221-.446 4.698 2.559 5.532 6.712.835 4.153-.289 7.882-2.51 8.328s-4.698-2.559-5.532-6.712M173.535 257.82c-.487-5.63 1.559-10.405 4.569-10.665 3.011-.26 5.846 4.093 6.333 9.723.486 5.63-1.56 10.406-4.57 10.666s-5.846-4.093-6.332-9.724M190.432 310.77c-1.294-2.197-1.195-4.654.222-5.489 1.416-.834 3.614.271 4.908 2.468s1.195 4.655-.221 5.489-3.614-.27-4.909-2.468M143.636 165.717l-.203 4.93-2.012 48.795c-10.165 57.361-41.226 76.025-66.715 79.966-7.433 1.159-14.393 1.049-20.211.288a58 58 0 0 1-6.334-1.167c-5.785-1.421-11.704-3.688-16.956-6.148-15.907-7.434-25.86-16.66-8.482-9.709 7.357 2.935 16.313 4.744 25.7 4.922 5.158.102 10.461-.287 15.678-1.26 15.121-2.791 27.857-11.323 37.108-25.725 11.527-17.945 10.444-42.089 16.888-63.45 3.222-10.647 8.761-20.381 19.569-27.84a56 56 0 0 1 5.996-3.611Z"})),d||(d=Q.createElement("path",{fill:"#8747CC",d:"m75.975 295.053-1.277 4.363c-7.434 1.159-14.394 1.049-20.212.288-2.182-3.154-4.448-7.214-6.08-12.101 5.158.101 10.461-.288 15.679-1.261Z"})),m||(m=Q.createElement("path",{fill:"#8747CC",d:"m143.636 165.717-.203 4.93-2.012 48.795c-14.3 80.702-69.971 84.803-93.26 79.087-5.785-1.421-11.704-3.688-16.956-6.148 40.254 11.873 95.324-5.556 86.892-95.214 3.222-10.655 8.761-20.389 19.569-27.839a56 56 0 0 1 5.996-3.611Z"})),h||(h=Q.createElement("path",{fill:"#BC83FB",d:"M73.463 55.002c-9.336 22.799-21.548 44.524 7.518 49.979.372.068.778.025 1.125-.127 26.9-11.721 16.008-35.349-5.776-50.681a1.904 1.904 0 0 0-2.867.829"})),p||(p=Q.createElement("path",{fill:"#D8B7FB",d:"M124.474 251.14c-2.702-.828-3.416-6.314-1.596-12.253s5.486-10.082 8.187-9.254c2.702.828 3.417 6.313 1.596 12.252s-5.486 10.083-8.187 9.255"})),x||(x=Q.createElement("path",{fill:"#6B36A8",d:"M149.827 192.262c-22.174 69.607-94.165 54.85-99.197 5.768-5.294-41.895 32.584-71.662 29.302-112.973-.913-13.539-3.247-17.26-1.522-17.734.364-.101.829.567.956.914 18.63 50.926-31.045 83.382-23.078 130.478 1.37 8.084 2.968 11.078 4.591 14.401 11.95 20.761 35.096 25.7 53.21 15.451 14.427-8.085 23.205-22.301 29.091-37.345.719-1.928 3.619-.973 2.993 1.032h3.654Z"})),g||(g=Q.createElement("path",{fill:"#D8B7FB",d:"M109.034 276.582c-1.752-1.195-.843-5.579 2.03-9.793 2.874-4.214 6.623-6.661 8.375-5.467 1.752 1.195.843 5.579-2.031 9.793s-6.622 6.661-8.374 5.467M87.715 292.282c-.697-1.237 1.408-3.742 4.701-5.595 3.293-1.854 6.526-2.353 7.223-1.115.696 1.237-1.409 3.742-4.701 5.595-3.293 1.853-6.527 2.353-7.223 1.115"})),u||(u=Q.createElement("path",{fill:"#BC83FB",d:"M301.844 299.4c7.433 2.164-47.299 18.071-83.358-8.271s-40.516-65.032-51.399-100.626c8.042 34.791 3.907 76.398-11.755 97.818-17.581 24.034-58.004 42.081-90.334 10.326.879.609 17.378 11.755 36.846 8.101a29.6 29.6 0 0 0 5.513-1.598c.017 0 .017 0 .034-.017 17.632-6.993 31.958-31.636 25.92-78.106-6.664-51.272 8.186-77.361 31.306-81.031l17.616-.423c32.101 12.465 22.706 45.869 29.649 88.262 11.129 68.034 82.52 63.408 89.962 65.573Z"})),f||(f=Q.createElement("path",{fill:"#BC83FB",d:"M137.455 177.522c-10.165 2.833-11.874 8.592-8.178 15.112l-19.459 19.205c-3.23-2.638-5.919-5.522-7.932-8.685-20.212-31.577 19.602-65.395 61.437-58.943 11.679 6.453-4.735 27.417-25.868 33.303ZM101.844 306.74c-28.981-2.216-49.793-39.856-54.977-46.047s3.518 26.918 18.097 37.92c18.52 13.971 31.51 11.163 36.88 8.127"})),j||(j=Q.createElement("path",{fill:"#8747CC",d:"M155.323 288.313c-17.581 24.034-58.004 42.08-90.334 10.325.88.609 17.379 11.755 36.846 8.102a29.7 29.7 0 0 0 5.514-1.598c.017 0 .017 0 .034-.017 25.945-7.586 45.979-36.837 47.408-80.043.532-16.016 2.351-25.615 4.676-31.611 2.571-6.63 6.004-6.824 7.586-3.061v.034s0 .017.017.042c8.042 34.791 3.907 76.398-11.755 97.818Z"})),y||(y=Q.createElement("path",{fill:"#D8B7FB",d:"M155.685 271.898c-3.118-.812-4.252-6.827-2.532-13.435s5.642-11.307 8.761-10.495 4.253 6.827 2.533 13.435-5.643 11.307-8.762 10.495M163.431 231.897c-2.5-.12-4.238-6.238-3.882-13.665s2.673-13.35 5.174-13.23c2.5.12 4.238 6.238 3.882 13.665s-2.673 13.35-5.174 13.23M138.312 297.257c-1.846-1.753-.7-5.958 2.561-9.393 3.26-3.434 7.4-4.798 9.246-3.045 1.846 1.752.7 5.957-2.561 9.392-3.26 3.434-7.4 4.798-9.246 3.046M113.914 310.587c-.71-1.733 1.859-4.428 5.739-6.02s7.602-1.479 8.313.254-1.858 4.428-5.739 6.02-7.602 1.478-8.313-.254M92.636 312.183c-.021-1.046 2.342-1.943 5.28-2.003 2.937-.06 5.335.739 5.356 1.785.022 1.046-2.342 1.943-5.279 2.003s-5.336-.739-5.357-1.785"})),b||(b=Q.createElement("path",{fill:"#BC83FB",d:"M137.463 113.192c0-18.845 15.277-34.122 34.123-34.122s34.122 15.277 34.122 34.122c0 18.846-15.277 34.123-34.122 34.123-18.846 0-34.123-15.277-34.123-34.123"})),k||(k=Q.createElement("path",{d:"M189.395 123.992c-.406-3.307-2.672-6.064-6.038-5.962-3.391.084-5.42 2.976-5.666 6.308a1.1 1.1 0 0 1-1.209.981c-1.615-.22-.998-3.053-.863-4.237 1.244-6.486 9.852-8.549 14.039-3.509 1.513 1.75 2.088 4.135 1.936 6.351a1.11 1.11 0 0 1-1.184 1.023 1.11 1.11 0 0 1-1.015-.955m-23.56.651c-.541-5.235-6.165-8.068-9.996-4.169-1.023 1.116-1.556 2.723-1.767 4.49a1.07 1.07 0 0 1-1.193.973 1.08 1.08 0 0 1-.93-.914c-.296-2.089.051-4.516 1.514-6.461 2.892-4.059 9.488-4.203 12.6-.329 1.506 1.759 2.072 4.135 1.903 6.351a1.074 1.074 0 0 1-1.15.98 1.07 1.07 0 0 1-.972-.921Z"})),v||(v=Q.createElement("path",{fill:"#8747CC",d:"m140.431 99.256 30.774-2.233L203.07 100a34.1 34.1 0 0 1 2.63 12.254c.034 1.184 0 2.359-.076 3.518-6.444-.931-20.609-5.48-34.055-15.594 0 0-11.933 13.344-34.03 15.222a21 21 0 0 1-.059-1.269 33.9 33.9 0 0 1 2.96-14.875Zm28.11-85.717c1.472.482 13.049 17.125 25.996 33.844 12.947 16.718 8.973 26.866-1.201 34.317-36.955 1.015-45.074 1.243-45.074 1.243-12.769-10.08-13.793-16.567-1.437-34.765 12.355-18.199 20.253-35.121 21.716-34.639"})),w||(w=Q.createElement("path",{fill:"#BC83FB",d:"M201.767 90.808c-17.082-28.88-29.572-66.901-32.575-66.969-3.01-.067-13.869 37.21-29.26 69.751l61.835-2.774Z"})),E||(E=Q.createElement("path",{fill:"#8747CC",d:"M170.545 31.129c.389 7.247.33 14.529.229 21.776-.076 7.137-.55 14.435.676 21.437.237 1.396-1.843 1.827-2.165.423-2.08-10.79-.718-21.852-.854-32.744 0-3.611-.017-7.213-.084-10.824 0-1.413 2.105-1.506 2.198-.076Z"})),M||(M=Q.createElement("path",{fill:"#BC83FB",d:"M208.025 107.332c-2.021 3.848-20.651 2.309-36.803-9.615-15.467 12.795-33.996 15.357-36.228 11.628-2.25-3.738.913-16.584 4.676-18.74 3.763-2.165 18.292-2.157 30.74-12.787 13.006 9.928 28.042 9.108 31.916 11.061 3.873 1.946 7.729 14.605 5.699 18.453"})),C||(C=Q.createElement("path",{fill:"#8747CC",d:"M142.968 88.465c7.197-1.336 14.512-3.239 20.931-6.807 1.572-.888 3.078-1.861 4.482-2.986.955-.693 1.699-2.173 2.968-1.395 8.321 4.972 17.793 8.169 27.399 9.336 1.717.152 1.59 2.706-.169 2.639-10.19-.812-20.194-4.034-28.676-9.759l1.75-.279c-.524.634-.972 1.04-1.471 1.522-3.417 3.069-7.603 5.184-11.856 6.79-4.762 1.802-9.929 2.901-14.969 3.544-1.699.22-2.105-2.317-.389-2.613Zm51.265 50.258c-8.559 10.689-25.497 13.328-37.015 5.979a34 34 0 0 1-2.157-1.607c1.48.431 3.552 1.057 5.066 1.429 11.788 2.977 24.101 1.404 34.114-5.801Z"})),F||(F=Q.createElement("path",{d:"M177.057 133.108c-1.818 0-4-.668-5.167-3.045a1.18 1.18 0 0 1 .541-1.581 1.176 1.176 0 0 1 1.582.541c1.217 2.47 4.304 1.565 4.439 1.522a1.188 1.188 0 0 1 .702 2.267 7.3 7.3 0 0 1-2.097.304Zm-2.943 6.791c-.059 0-.118 0-.186-.017a1.18 1.18 0 0 1-.989-1.337c.236-1.606 1.843-4.634 6.241-4.634.651 0 1.184.533 1.184 1.184s-.533 1.184-1.184 1.184c-3.358 0-3.857 2.359-3.899 2.622-.101.575-.6.989-1.167.989Z"})),N||(N=Q.createElement("path",{fill:"#A091FF",d:"M263.163 265.894c.186 5.125-12.051 9.725-27.332 10.275-4.22.152-8.237-.025-11.831-.465-9.429-1.159-16.034-4.127-16.169-7.839-.093-2.605 3.002-5.066 8.059-6.926 3.873-1.429 8.913-2.52 14.546-3.045q.953-.087 1.919-.16c.93-.06 1.861-.11 2.816-.144a88 88 0 0 1 2.969-.059c.625 0 1.234 0 1.852.017 13.014.296 23.027 3.746 23.188 8.329Zm-.009-56.516c-3.619 7.645-10.368 13.311-19.644 15.806-2.91.795-6.072 1.26-9.463 1.387-21.962.786-35.349-13.776-34.335-33.962.229-4.448.973-8.271 1.827-11.823 2.131-8.794 4.956-15.873 2.266-26.444-.71-2.816-1.809-5.868-3.416-9.276l61.412-2.199c-8.549 22.046 1.835 29.091 4.076 47.374.871 7.104-.11 13.632-2.714 19.137Z"})),B||(B=Q.createElement("path",{fill:"#7A68ED",d:"M263.154 209.378c-3.619 7.645-10.368 13.311-19.644 15.806-12.525-17.294-30.208-17.522-41.971-44.398 2.131-8.794 4.956-15.873 2.266-26.444 13.041 7.992 31.375 40.381 59.349 55.036"})),Z||(Z=Q.createElement("path",{fill:"#F55D76",d:"M233.818 220.008c18.486-.659 28.854-13.682 26.782-30.562-1.175-9.573-5.006-15.493-5.995-23.061v-.017a29 29 0 0 1-.11-.913c-1.184-3.206-10.985-5.404-22.808-4.981-11.856.422-21.488 3.331-22.402 6.63 0 .279-.017.575-.042.854-.431 7.653-3.839 13.826-4.33 23.475-.854 16.981 10.419 29.227 28.897 28.567Z"})),A||(A=Q.createElement("path",{fill:"#E9E6FF",d:"M198.899 142.486c-.178-4.984 14.048-9.54 31.775-10.174s32.242 2.892 32.421 7.877c.178 4.985-14.048 9.54-31.775 10.174s-32.243-2.892-32.421-7.877"})),D||(D=Q.createElement("path",{fill:"#A091FF",d:"M203.658 142.122c-.138-3.879 11.99-7.461 27.089-8.002 15.099-.54 27.452 2.166 27.591 6.045s-11.989 7.461-27.088 8.001c-15.1.541-27.453-2.166-27.592-6.044"})),P||(P=Q.createElement("path",{fill:"#FF969C",d:"M209.209 167.682c-.126-3.523 9.935-6.744 22.472-7.193s22.802 2.044 22.928 5.568-9.934 6.745-22.471 7.194-22.802-2.045-22.929-5.569"})),S||(S=Q.createElement("path",{fill:"#FFD6D9",d:"M250.462 192.051c-.519-4.167.563-7.732 2.417-7.962 1.854-.231 3.777 2.959 4.296 7.126s-.563 7.731-2.417 7.962-3.777-2.96-4.296-7.126M248.504 177.801c-.388-1.632.26-3.183 1.446-3.464s2.461.812 2.849 2.444c.387 1.631-.26 3.182-1.446 3.463s-2.462-.812-2.849-2.443"})),I||(I=Q.createElement("path",{fill:"#A091FF",d:"m238.123 257.564-.728-20.304c-.228-6.376-.152-7.425 6.343-12.321l-19.332.693c6.824 4.423 6.985 5.455 7.213 11.831l.728 20.304Z"})),R||(R=Q.createElement("path",{fill:"#7A68ED",d:"M249.7 264.786c-4.533-.312-11.104-1.733-11.569-7.247.626 0 1.235 0 1.852.017.178 3.214 3.78 4.609 6.537 5.311 1.074.254 2.199.448 3.281.533.88.093.795 1.403-.093 1.378Zm-17.345-6.985c.127 4.169-4.093 6.444-7.577 7.332a22.4 22.4 0 0 1-3.467.668.676.676 0 0 1-.753-.609.67.67 0 0 1 .609-.752c3.518-.651 9.294-2.14 9.269-6.537.634-.059 1.276-.11 1.919-.161Z"})),z||(z=Q.createElement("path",{fill:"#5141BA",d:"M244.685 167.924a1.05 1.05 0 0 1-.998-1.404l20.558-58.351c.195-.55.795-.846 1.345-.643.55.195.837.795.643 1.345l-20.559 58.351a1.05 1.05 0 0 1-.997.702Z"})),_||(_=Q.createElement("path",{fill:"#F55D76",d:"m233.97 135.476 36.482 12.921a1.33 1.33 0 0 0 1.734-.955c6.173-26.368-27.805-34.977-38.943-13.835a1.33 1.33 0 0 0 .727 1.869"})),O||(O=Q.createElement("path",{fill:"#F5B14C",d:"M235.89 136.152c10.715-17.801 36.474-10.96 32.355 11.459Z"})),L||(L=Q.createElement("path",{fill:"#D97C2B",d:"M253.539 142.791c-.364 0-.71-.195-.905-.508l-8.482-14.029a1.06 1.06 0 0 1 1.81-1.1l7.34 12.136 4.491-12.44a1.05 1.05 0 0 1 1.353-.634c.55.194.837.803.634 1.353l-5.243 14.52c-.135.38-.482.651-.888.693h-.101Z"})),T||(T=Q.createElement("path",{fill:"#D97C2B",d:"M253.539 142.791a1.058 1.058 0 0 1-.194-2.098l14.765-2.765a1.057 1.057 0 1 1 .389 2.08l-14.765 2.766c-.068.008-.136.017-.195.017"})),V||(V=Q.createElement("path",{fill:"#F55D76",d:"M256.051 118.359a5.632 5.632 0 1 1 11.264 0 5.632 5.632 0 0 1-11.264 0"})),$||($=Q.createElement("path",{fill:"#C73A51",d:"M268.338 148.118c-.059 0-.118 0-.169-.017a1.054 1.054 0 0 1-.871-1.217c1.742-10.622-3.577-16.668-9.142-18.791-8.794-3.357-17.082 1.852-21.057 8.102-.313.49-.964.642-1.463.321a1.054 1.054 0 0 1-.321-1.455c4.423-6.96 13.691-12.727 23.594-8.947 6.343 2.419 12.423 9.235 10.469 21.108a1.06 1.06 0 0 1-1.04.888Z"})),U||(U=Q.createElement("path",{fill:"#5141BA",d:"M219.323 167.518c-1.065.194-2.883.321-4.651-.457a.9.9 0 0 1-.499-.625l-3.957-17.531c1.606.338 3.365.617 5.226.846l4.592 16.634a.913.913 0 0 1-.711 1.141Z"})),q||(q=Q.createElement("path",{fill:"#A091FF",d:"M215.442 149.751a63 63 0 0 1-5.226-.846l-.609-2.672c1.497.431 3.23.803 5.167 1.107Z"})),W||(W=Q.createElement("path",{fill:"#7A68ED",d:"M214.774 147.34c-1.937-.304-3.67-.676-5.167-1.107l-1.81-8.026-.499-2.182-.22-.964c-.042-.177-.16-1.031-.287-1.158l-1.04-1.049-.998 1.066a.377.377 0 0 1-.584-.06l-.786-1.26-23.941 4.288c-3.315-3.239-1.04-6.596-1.04-6.596s24.228-4.296 24.482-4.059l1.04.981 1.632-.795a.68.68 0 0 1 .871.236l.685 1.015 1.421-.33a.73.73 0 0 1 .871.533l1.928 6.968.533 1.929 2.917 10.57ZM224 275.712c-9.429-1.158-16.034-4.126-16.169-7.839-.093-2.605 3.002-5.065 8.059-6.926 2.148 9.387 5.581 12.169 8.11 14.765"})),G||(G=Q.createElement("path",{fill:"#BC83FB",d:"M238.03 237.336c-25.988 2.283-99.121-1.64-128.212-25.488l19.459-19.205c3.983 7.053 14.275 15.002 27.061 21.116 24.609 11.772 55.67 18.799 81.336 17.827 6.707-.254 15.874 4.389.356 5.759Z"})),H||(H=Q.createElement("path",{fill:"#8747CC",d:"M115.772 216.093c7.382 3.543 15.306 6.825 23.129 9.26 23.797 7.4 48.752 11.653 73.649 12.372l.127.702s-6.25.271-13.54-.169c-26.621-1.607-62.038-7.357-83.357-22.165Z"})),J||(J=Q.createElement("path",{fill:"#D8B7FB",d:"M129.277 192.634c3.484 4.558 8.008 8.178 12.66 11.408 6.012 4.237 13.277 7.857 20.033 10.808 15.781 6.858 32.626 11.103 49.328 15.053-10.554-.888-21.065-2.842-31.264-5.768-12.026-3.518-23.966-8.253-34.52-15.086-6.393-4.212-12.905-9.345-16.237-16.415"})),Y||(Y=Q.createElement("path",{d:"M105.852 358.385c0 13.818-7.543 26.528-26.131 26.528-14.055 0-18.74-6.435-18.74-21.048 0-4.127.161-2.301.161-7.146 0-2.782-.161-6.275-.161-9.209 0-5.641 1.353-10.005 3.89-12.389 3.019-2.859 9.133-4.051 13.023-4.051 18.427 0 27.958 8.896 27.958 27.323Zm-12.626-.161c0-8.262-3.814-15.729-13.505-15.729-5.556 0-6.672 4.05-6.672 8.735s0 8.102.236 13.26c.322 5.159 1.117 9.134 7.231 9.134 9.607 0 12.71-7.383 12.71-15.408Zm58.131-10.96c0 6.588-2.461 10.25-6.351 13.421-2.545 2.063-5.403 2.3-5.403 3.577 0 1.505 5.801 4.524 7.069 5.404 2.783 1.666 6.038 3.729 6.038 7.383 0 4.372-2.858 7.23-7.23 7.23s-7.704-3.653-10.486-7.07c-2.783-3.179-5.32-6.993-8.026-9.928-.473-.473-1.59-1.75-2.3-1.75-.558 0-.634.795-.634 1.192 0 3.332 1.116 6.833 1.116 10.486 0 4.609-2.224 7.07-7.146 7.07-6.672 0-6.672-4.609-6.672-10.562 0-3.019.634-8.812.634-18.588 0-3.89-.719-7.704-.719-11.357 0-12.313 8.423-13.421 18.427-13.421 11.434 0 21.683 3.653 21.683 16.913m-12.228.237c0-4.846-4.127-7.306-8.66-7.306-1.987 0-4.127.321-5.877 1.826-1.505 1.429-1.827 4.77-1.827 6.672 0 4.762 1.514 8.026 6.833 8.026 7.307 0 9.531-3.975 9.531-9.209Zm33.598-10.08c0 3.095-1.666 8.025-5.404 8.025-4.126 0-8.972-1.116-8.972-6.199 0-6.587 2.3-8.499 8.575-8.499 4.051 0 5.801 2.935 5.801 6.673m-13.505 17.869c0-4.372 2.224-5.404 5.953-5.404 3.493 0 6.115 1.116 6.115 4.846 0 5.319-.237 9.133-.237 12.947 0 3.416 1.192 5.716 1.192 8.735 0 4.449-1.75 8.178-6.748 8.178s-6.596-1.903-6.596-6.909.558-10.089.558-15.087c0-2.3-.237-5.006-.237-7.306m26.452-11.755c4.051 0 6.199 2.148 6.199 6.199 1.987-3.73 6.275-5.556 10.402-5.556 9.454 0 13.979 5.082 13.979 14.934 0 2.698-.237 5.083-.237 7.704 0 6.588.871 7.543.871 11.357 0 4.051-2.3 6.512-6.436 6.512-3.814 0-6.114-2.224-6.114-6.114 0-4.288.474-8.262.474-12.55 0-4.287-.474-10.249-6.114-10.249-4.372 0-7.146 2.782-7.146 7.306 0 7.467.558 10.563.558 15.332 0 3.89-2.385 6.436-6.436 6.436-3.332 0-6.274-2.622-6.274-5.954 0-3.653.795-6.588.795-14.139 0-7.552-.956-11.434-.956-14.377 0-4.287 1.903-6.833 6.435-6.833Zm44.085-14.216c4.761 0 7.146 3.493 7.146 8.262 0 2.859-.634 5.641-.871 8.499-.322 3.019-.322 6.199-.322 9.21 0 .634 0 1.75.474 1.75.558 0 1.429-1.192 2.3-1.987 4.372-4.846 8.66-11.594 13.742-11.594 3.332 0 6.038 2.063 6.038 5.64 0 .161-.076.474-.076.635-.473 3.653-3.653 5.556-6.351 7.543-2.224 1.666-5.64 3.89-7.94 5.48 2.224 2.782 8.101 7.07 11.035 9.057 2.546 1.75 4.922 2.782 4.922 6.435 0 3.975-2.858 6.115-6.672 6.115-4.448 0-7.865-4.525-10.486-7.865-2.224-2.858-4.127-5.48-7.468-9.133 0 4.524.398 6.909.398 9.454 0 3.814-1.269 8.026-5.717 8.026-4.845 0-7.07-3.654-7.07-8.178 0-3.256 1.43-8.025 1.43-20.169 0-9.531-.871-13.658-.871-19.696 0-4.608 2.224-7.467 6.351-7.467Zm52.025 47.975c0 4.761-3.416 7.704-7.543 7.704-3.814 0-7.467-3.019-7.467-6.985 0-4.922 2.782-7.628 7.78-7.628 4.287 0 7.23 3.577 7.23 6.909m-7.306-47.417c3.974 0 7.07 1.666 7.07 6.038 0 6.588-.956 12.474-.956 18.825 0 2.698-.161 6.038-1.192 8.575-.956 2.3-2.783 3.095-5.159 3.095-7.543 0-5.877-9.928-6.512-14.613-.321-1.987-.397-8.896-.397-13.184 0-5.319.161-8.736 7.146-8.736"})))};var le=a(74848);const ie=[{logo:"img/projects/inkathon-logo.avif",title:"Full-stack DApp boilerplate for ink! smart contracts",about:(0,le.jsxs)(le.Fragment,{children:[(0,le.jsxs)("p",{children:[(0,le.jsx)("a",{href:"https://inkathon.xyz/",target:"_blank",rel:"noopener noreferrer",children:"ink!athon"})," ","is an actively developed full-stack dApp boilerplate for ink! smart contracts with an integrated frontend. It can be used to quickly start developing your hackathon idea or to scaffold a production-ready Web3 application."]}),(0,le.jsxs)("p",{children:["The project is part of a"," ",(0,le.jsx)("a",{href:"https://scio.xyz/",target:"_blank",rel:"noopener noreferrer",children:"Scio Labs"})," ","initiative to improve the developer experience in the ink! ecosystem. Scio Labs is a company from Potsdam, Germany that has also given many talks at Polkadot conferences and hosted ink! meetups in person."]}),(0,le.jsxs)("div",{children:[(0,le.jsx)("h4",{className:"mb-2 text-xs text-gray-500 uppercase font-[600]",children:"RELATED PROJECTS"}),(0,le.jsx)("div",{className:"text-[14px]",children:(0,le.jsxs)("ul",{className:"p-0 m-0 space-y-2 list-none",children:[(0,le.jsxs)("li",{className:"flex items-center gap-2",children:[(0,le.jsx)("code",{className:"h-auto !py-0",children:"create-ink-app"})," CLI"," ",(0,le.jsx)("em",{className:"text-[14px] text-gray-500",children:"(Coming soon)"})]}),(0,le.jsxs)("li",{className:"flex items-center gap-2",children:[(0,le.jsx)("code",{className:"h-auto !py-0",children:(0,le.jsx)("a",{href:"https://github.com/scio-labs/inkathon",target:"_blank",rel:"noopener noreferrer",children:"ink!athon"})}),"Boilerplate"]}),(0,le.jsxs)("li",{className:"flex items-center gap-2",children:[(0,le.jsx)("code",{className:"h-auto !py-0",children:(0,le.jsx)("a",{href:"https://github.com/scio-labs/use-inkathon",target:"_blank",rel:"noopener noreferrer",children:"useInkathon"})}),"Hooks & Utility Library"]}),(0,le.jsxs)("li",{className:"flex items-center gap-2",children:[(0,le.jsx)("code",{className:"h-auto !py-0",children:(0,le.jsx)("a",{href:"https://github.com/scio-labs/zink",target:"_blank",rel:"noopener noreferrer",children:"zink!"})}),"Smart Contract Macros"]})]})})]})]}),image:"img/projects/inkathon.png"},{logo:"img/projects/inkanalyzer-logo.avif",title:"VSCode extension designed to help you develop smart contracts in ink!",about:(0,le.jsxs)(le.Fragment,{children:[(0,le.jsxs)("p",{children:["Created by"," ",(0,le.jsx)("a",{href:"https://x.com/davidsemakula",target:"_blank",rel:"noopener noreferrer",children:"David Semakula"}),", this VS extension comes with many nifty features, including but not limited to:"]}),(0,le.jsxs)("ul",{className:"pl-4 space-y-4 list-disc",children:[(0,le.jsxs)("li",{children:[(0,le.jsx)("em",{children:"Diagnostics:"})," The extension analyzes if your code follows the semantic rules of ink!."]}),(0,le.jsxs)("li",{children:[(0,le.jsx)("em",{children:"Quick Fixes:"})," It displays warnings, errors, and gives you suggestions about what might be wrong with your code."]}),(0,le.jsxs)("li",{children:[(0,le.jsx)("em",{children:"Completions:"})," Inline info about which attributes and arguments are available for further configuring your smart contract's storage, events, messages, and more."]}),(0,le.jsxs)("li",{children:[(0,le.jsx)("em",{children:"Inline Documentation:"})," just hover over an ink! attribute or argument to read the documentation for it."]})]}),(0,le.jsxs)("p",{children:[" ","Under the hood, ink! Analyzer is a collection of modular libraries and tools for the semantic analysis of ink! smart contract code. This means the individual components can be reused to create things beyond a VSCode extension! \ud83d\ude4c"]}),(0,le.jsxs)("p",{children:["David maintains a blog about the extension at"," ",(0,le.jsx)("a",{href:"https://analyze.ink",target:"_blank",rel:"noopener noreferrer",children:"https://analyze.ink"}),"."]})]}),image:"img/projects/inkanalyzer.avif"},{logo:"img/projects/drink-logo.svg",title:"DRink! is a toolbox for ink! developers that allows for a fully functional ink! contract development without any running node.",about:(0,le.jsxs)(le.Fragment,{children:[(0,le.jsxs)("p",{children:["Apart from the core ink! testing framework, Aleph Zero developed the"," ",(0,le.jsx)("a",{href:"https://github.com/use-ink/drink",target:"_blank",rel:"noopener noreferrer",children:"DRink! library and cli tool"}),". It provides you with a powerful environment for interacting with contracts:"]}),(0,le.jsxs)("ul",{className:"pl-4 space-y-4 list-disc",children:[(0,le.jsxs)("li",{children:["Deploy and call your contracts synchronously, without"," ",(0,le.jsx)("b",{children:(0,le.jsx)("i",{children:"any delays"})})," ","related to block production or networking."]}),(0,le.jsxs)("li",{children:["Gain access to"," ",(0,le.jsx)("b",{children:(0,le.jsx)("i",{children:"powerful features"})})," ","that are not available with standard methods like"," ",(0,le.jsx)("b",{children:(0,le.jsx)("i",{children:"contract mocking, enhanced debugging and call tracing."})})]}),(0,le.jsxs)("li",{children:["Work with"," ",(0,le.jsx)("b",{children:(0,le.jsx)("i",{children:"multiple contracts"})})," ","at the same time."]}),(0,le.jsxs)("li",{children:["Work with"," ",(0,le.jsx)("b",{children:(0,le.jsx)("i",{children:"arbitrary"})})," ","runtime configurations, including custom chain extensions and runtime calls."]}),(0,le.jsxs)("li",{children:["Have"," ",(0,le.jsx)("b",{children:(0,le.jsx)("i",{children:"full control over runtime state"})}),", including block number, timestamp, etc."]})]}),(0,le.jsxs)("p",{children:["Check out the"," ",(0,le.jsx)("a",{href:"https://github.com/use-ink/drink",target:"_blank",rel:"noopener noreferrer",children:"DRink! repository"})," ","for more info."]})]}),image:(0,le.jsx)("div",{className:"p-[20%] bg-gradient-to-br from-[#8c7cf7] to-[rgb(189,130,253)] w-full rounded-[18px] border-[5px] border-solid border-[rgb(140,124,247)]",children:(0,le.jsx)(re,{})})}];function se(){return(0,le.jsx)("div",{className:"container px-4 py-12 mx-auto md:px-6",children:(0,le.jsx)("div",{className:"",children:ie.map(((e,t)=>{const a=(0,Q.useRef)(null);return(0,le.jsxs)("div",{className:(0,te.cn)("grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[60vh] mb-16 pb-16",{"border-0 border-b border-solid border-[rgba(189,130,253,.15)]":t!==ie.length-1}),style:{background:"radial-gradient(50% 50% at 50% 50%,rgba(82,28,189,.3) 0%,rgba(19,14,33,0) 100%)"},children:[(0,le.jsxs)(ae.P.div,{ref:a,initial:"hidden",whileInView:"visible",variants:{hidden:{opacity:0,x:-50},visible:{opacity:1,x:0}},transition:{duration:1,ease:"easeInOut",delay:0===t?.5:0},className:"lg:col-span-4 lg:sticky lg:top-24 lg:self-start",children:[(0,le.jsx)("div",{className:"flex items-center gap-3 mb-8",children:(0,le.jsx)("div",{className:"flex items-center justify-center overflow-hidden rounded-lg border-[rgba(140,124,247,.15)] border border-solid bg-[#241a38] mix-blend-lighten p-4",children:(0,le.jsx)("img",{src:(0,ee.Ay)(e.logo),alt:`${e.title} logo`,className:"mix-blend-lighten max-w-[200px]"})})}),(0,le.jsxs)("div",{children:[(0,le.jsxs)("div",{className:"pb-6 mb-6 border-0 border-b-[3px] border-gray-700 border-dotted",children:[(0,le.jsx)("h4",{className:"mb-2 text-xs text-gray-500 uppercase font-[600]",children:"PROJECT DESCRIPTION"}),(0,le.jsx)("h3",{className:"m-0 text-xl font-semibold text-white font-montserrat",children:e.title})]}),(0,le.jsxs)("div",{children:[(0,le.jsx)("h4",{className:"mb-2 text-xs text-gray-500 uppercase font-[600]",children:"ABOUT"}),(0,le.jsx)("div",{className:"font-[500]",children:e.about})]})]})]}),(0,le.jsx)(ae.P.div,{ref:a,initial:"hidden",whileInView:"visible",variants:{hidden:{opacity:0,x:50},visible:{opacity:1,x:0}},transition:{duration:1,ease:"easeInOut",delay:0===t?.5:0},className:"relative lg:col-span-8 lg:sticky lg:top-24 lg:self-start",children:(0,le.jsx)("div",{className:"w-full overflow-hidden rounded-lg",children:"string"==typeof e.image?(0,le.jsx)("img",{src:(0,ee.Ay)(e.image),alt:e.title,className:"w-full rounded-[18px] border-[5px] border-solid border-[rgb(140,124,247)]"}):e.image})})]},e.title)}))})})}const ce=(0,le.jsxs)(le.Fragment,{children:[(0,le.jsx)("title",{children:"Projects | ink!"}),(0,le.jsx)("meta",{name:"description",content:"Explore projects built with ink! and their impact on the ecosystem."}),(0,le.jsx)("meta",{name:"keywords",content:"chains, interoperability, rollups, Polkadot, parachain"}),(0,le.jsx)("meta",{name:"author",content:"ink! Alliance"}),(0,le.jsx)("meta",{property:"og:title",content:"Projects | ink!"}),(0,le.jsx)("meta",{property:"og:description",content:"Explore projects built with ink! and their impact on the ecosystem."}),(0,le.jsx)("meta",{property:"og:image",content:"https://use-ink.com/img/og-image.png"}),(0,le.jsx)("meta",{property:"og:url",content:"https://use-ink.com"}),(0,le.jsx)("meta",{property:"og:type",content:"website"}),(0,le.jsx)("meta",{property:"og:site_name",content:"ink!"}),(0,le.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,le.jsx)("meta",{property:"og:image:width",content:"1200"}),(0,le.jsx)("meta",{property:"og:image:height",content:"630"}),(0,le.jsx)("meta",{property:"og:image:alt",content:"ink! logo"}),(0,le.jsx)("meta",{property:"og:image:type",content:"image/png"})]});function oe(){return(0,le.jsxs)(K.default,{className:"container",head:ce,children:[(0,le.jsxs)("div",{className:"flex flex-col items-center justify-center my-12 text-center",children:[(0,le.jsx)(ae.P.h1,{className:"text-center",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeInOut"},children:"Explore Community Projects"}),(0,le.jsxs)(ae.P.div,{className:"flex-row items-center gap-2 flexw",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeInOut",delay:.2},children:[(0,le.jsx)("span",{className:"block",children:"Powered by"}),(0,le.jsx)(X.A,{className:"w-auto h-6"})]})]}),(0,le.jsx)(se,{})]})}},46942:(e,t)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=i(e,l(a)))}return e}function l(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)n.call(e,a)&&e[a]&&(t=i(t,a));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}}]);
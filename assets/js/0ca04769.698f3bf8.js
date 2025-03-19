"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3351],{91823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"third-party-tools/swanky/index","title":"Swanky Suite","description":"Swanky Suite aims to be an \\"all-in-one\\" tool for Wasm smart contract developers. It is based on existing tools like cargo contract CLI and polkadot.js but extends their functionality with many additional features such as smart contract templates, and an instant finality (Swanky) node, which reduces the contract development lifecycle.","source":"@site/versioned_docs/version-v4/third-party-tools/swanky/index.md","sourceDirName":"third-party-tools/swanky","slug":"/getting-started/swanky","permalink":"/ink-docs/docs/v4/getting-started/swanky","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v4/third-party-tools/swanky/index.md","tags":[],"version":"v4","frontMatter":{"title":"Swanky Suite","slug":"/getting-started/swanky"},"sidebar":"reference","previous":{"title":"OpenBrush","permalink":"/ink-docs/docs/v4/getting-started/use-openbrush"},"next":{"title":"Swanky CLI","permalink":"/ink-docs/docs/v4/getting-started/swanky/cli"}}');var i=n(74848),a=n(28453),o=n(6216);const r={title:"Swanky Suite",slug:"/getting-started/swanky"},c="Swanky Suite",d={},l=[{value:"Architecture Overview",id:"architecture-overview",level:2},{value:"Documentation and resources",id:"documentation-and-resources",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"swanky-suite",children:"Swanky Suite"})}),"\n",(0,i.jsxs)(t.p,{children:['Swanky Suite aims to be an "all-in-one" tool for Wasm smart contract developers. It is based on existing tools like',(0,i.jsx)(t.code,{children:" cargo contract CLI"})," and ",(0,i.jsx)(t.code,{children:"polkadot.js"})," but extends their functionality with many additional features such as smart contract templates, and an instant finality (Swanky) node, which reduces the contract development lifecycle."]}),"\n",(0,i.jsx)(t.p,{children:"Swanky Suite is a tool that provides Web3 Wasm dapps developers with an experience that is more in-line with what they're familiar with, compared to popular tooling for EVM."}),"\n",(0,i.jsx)(t.p,{children:"Swanky Suite offers an extensible set of features, allowing developers to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Quickly spin up a local contract development node with instant finality (Swanky Node)."}),"\n",(0,i.jsx)(t.li,{children:"Easily scaffold new projects using templates for both smart contracts and (soon) front-end dApps."}),"\n",(0,i.jsx)(t.li,{children:"Compile projects in various languages that target Wasm (ink! Ask-Lite)."}),"\n",(0,i.jsx)(t.li,{children:"provide Typescript based integration testing simulating interaction from the client-side."}),"\n",(0,i.jsx)(t.li,{children:"Handle and manage network accounts."}),"\n",(0,i.jsxs)(t.li,{children:["Deploy smart contracts within the Polkadot ecosystem to networks that support ",(0,i.jsx)(t.code,{children:"pallet-contracts"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Make arbitrary calls to deployed smart contracts."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"architecture-overview",children:"Architecture Overview"}),"\n",(0,i.jsx)(t.p,{children:"The Swanky Suite consists of two parts, Swanky CLI and Swanky Node."}),"\n",(0,i.jsx)(t.p,{children:"Source code for both Swanky CLI and Swanky Node are hosted on GitHub:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/AstarNetwork/swanky-cli",children:"Swanky CLI"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/AstarNetwork/swanky-node",children:"Swanky Node"}),"."]}),"\n"]}),"\n",(0,i.jsx)(o.A,{caption:"The architecture envisioned for Swanky CLI and Swanky Node (Local developer node)",src:n(45646).A,width:"100%"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The actual state deviates slightly from the above diagram as both the cli and the node are constantly iterated upon and updated, but it illustrates the general idea behind the suite."})}),"\n",(0,i.jsx)(t.h2,{id:"documentation-and-resources",children:"Documentation and resources"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsxs)(t.a,{href:"https://github.com/AstarNetwork/swanky-cli",children:[(0,i.jsx)(t.code,{children:"swanky"})," CLI Github repo"]})," with the latest documentation."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsxs)(t.a,{href:"https://github.com/AstarNetwork/swanky-node",children:[(0,i.jsx)(t.code,{children:"swanky-node"})," Github repo"]})," with the latest documentation."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",children:(0,i.jsx)(t.code,{children:"pallet-contracts"})})," documentation on Parity Github"]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6216:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(74848);const i=e=>{let{src:t,caption:n,width:i="460px"}=e;return(0,s.jsx)("center",{children:(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:t,alt:n,width:i}),(0,s.jsx)("figcaption",{children:n})]})})}},45646:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/SwankySuiteAstar-298c140b02b550955171fbcdd5908b51.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
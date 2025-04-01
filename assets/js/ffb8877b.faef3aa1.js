"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4537],{41658:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"getting-started/troubleshooting","title":"Troubleshooting","description":"Magnifying Glass Title Picture","source":"@site/docs/getting-started/troubleshooting.md","sourceDirName":"getting-started","slug":"/getting-started/troubleshooting","permalink":"/ink-docs/docs/v5/getting-started/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/getting-started/troubleshooting.md","tags":[],"version":"current","frontMatter":{"title":"Troubleshooting","slug":"/getting-started/troubleshooting","hide_title":true},"sidebar":"reference","previous":{"title":"Call Your Contract","permalink":"/ink-docs/docs/v5/getting-started/calling-your-contract"},"next":{"title":"Contract Template","permalink":"/ink-docs/docs/v5/basics/contract-template"}}');var s=o(74848),r=o(28453);const i={title:"Troubleshooting",slug:"/getting-started/troubleshooting",hide_title:!0},a="Troubleshooting",c={},l=[{value:"Unexpected Epoch Change",id:"unexpected-epoch-change",level:3},{value:"Old Contracts in Local Storage",id:"old-contracts-in-local-storage",level:3},{value:"Other Issues",id:"other-issues",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Magnifying Glass Title Picture",src:o(25538).A+"",width:"1600",height:"500"})}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,s.jsx)(t.p,{children:"Here are solutions to some of the common problems you may come across:"}),"\n",(0,s.jsx)(t.h3,{id:"unexpected-epoch-change",children:"Unexpected Epoch Change"}),"\n",(0,s.jsx)(t.p,{children:"There is a known issue with the Substrate block production (BABE) on a running chain. If you stop your node for too long (closing the terminal, putting your computer to sleep, etc.), you will get the following error:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'ClientImport("Unexpected epoch change")\n'})}),"\n",(0,s.jsxs)(t.p,{children:["To solve this you will need to restart your node with: ",(0,s.jsx)(t.code,{children:"substrate-contracts-node"}),". At that point, you will\nneed to re-deploy any contracts and re-do any steps that you may have done before on your node. As\nlong as you keep your node running, you should face no issues."]}),"\n",(0,s.jsx)(t.h3,{id:"old-contracts-in-local-storage",children:"Old Contracts in Local Storage"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Contracts UI"})," uses its own local storage to track the contracts that you have deployed. This means\nthat if you deploy a contract using the UI, and then purge your Substrate node, you will be prompted to\nreset your local storage and please do so. And then re-deploy any contracts and re-do any steps that\nyou may have done before on your node."]}),"\n",(0,s.jsx)(t.h3,{id:"other-issues",children:"Other Issues"}),"\n",(0,s.jsxs)(t.p,{children:["If you run into any other issues during this tutorial, please ",(0,s.jsx)(t.a,{href:"https://github.com/substrate-developer-hub/substrate-docs/issues",children:"report an issue"}),"!"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25538:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/magnifying-glass-3ca6f9b0db517931b899b678a8543a81.svg"},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>a});var n=o(96540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
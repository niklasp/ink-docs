"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1174],{925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"debugging/return_value","title":"Return value","description":"Magnifying Glass Title Picture","source":"@site/versioned_docs/version-v6/debugging/return_value.md","sourceDirName":"debugging","slug":"/contract-debugging/return-value","permalink":"/ink-docs/docs/v6/contract-debugging/return-value","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/debugging/return_value.md","tags":[],"version":"v6","frontMatter":{"title":"Return value","slug":"/contract-debugging/return-value","hide_title":true},"sidebar":"reference","previous":{"title":"Debug Events","permalink":"/ink-docs/docs/v6/contract-debugging/debug-events"},"next":{"title":"Tracing API","permalink":"/ink-docs/docs/v6/contract-debugging/pallet-revive-tracing-api"}}');var s=t(74848),i=t(28453);const a={title:"Return value",slug:"/contract-debugging/return-value",hide_title:!0},o="Return an error message",c={},d=[];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Magnifying Glass Title Picture",src:t(25538).A+"",width:"1600",height:"500"})}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"return-an-error-message",children:"Return an error message"})}),"\n",(0,s.jsxs)(n.p,{children:["Return a specific error message via ",(0,s.jsx)(n.code,{children:"ink::return_value(REVERT, err);"}),"\nand do a dry-run of the contract call. The result of the dry-run will\nthen present this data."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#[ink::message]\nfn insert(&self) {\n    #[cfg(feature = "ink-debug")]\n    ink::return_value(\n        ink::env::ReturnFlags::REVERT,\n        format!("received {:?}", self.env().transferred_value()).as_bytes();\n    );\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["TODO add example code for E2E test + ",(0,s.jsx)(n.code,{children:"cargo-contract"})]})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["This output is not printed if you execute a transaction on-chain!\nThe transaction will just fail with ",(0,s.jsx)(n.code,{children:"ExtrinsicFailed"}),"."]}),(0,s.jsxs)(n.p,{children:["It is only printed for RPC calls, so for dry-runs.\nIn the E2E tests you have to execute ",(0,s.jsx)(n.code,{children:".dry_run()"})," to get\nthis information."]})]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},25538:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/magnifying-glass-3ca6f9b0db517931b899b678a8543a81.svg"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
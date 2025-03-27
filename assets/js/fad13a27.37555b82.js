"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[912],{64684:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"basics/env-functions","title":"Environment Functions","description":"Env Function Title Picture","source":"@site/docs/basics/env-functions.md","sourceDirName":"basics","slug":"/basics/environment-functions","permalink":"/ink-docs/docs/v5/basics/environment-functions","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/basics/env-functions.md","tags":[],"version":"current","frontMatter":{"title":"Environment Functions","slug":"/basics/environment-functions"},"sidebar":"reference","previous":{"title":"Upgradeable Contracts","permalink":"/ink-docs/docs/v5/basics/upgradeable-contracts"},"next":{"title":"Chain Environment Types","permalink":"/ink-docs/docs/v5/basics/chain-environment-types"}}');var c=s(74848),i=s(28453);const r={title:"Environment Functions",slug:"/basics/environment-functions"},o="Environment Functions",d={},l=[];function a(n){const e={a:"a",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"Env Function Title Picture",src:s(23944).A+"",width:"1600",height:"500"})}),"\n",(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"environment-functions",children:"Environment Functions"})}),"\n",(0,c.jsxs)(e.p,{children:["ink! exposes a number of handy environment functions.\nA full overview ",(0,c.jsx)(e.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/#functions",children:"is found here"}),"."]}),"\n",(0,c.jsxs)(e.p,{children:["In an ",(0,c.jsx)(e.code,{children:"#[ink(constructor)]"}),"  use ",(0,c.jsx)(e.code,{children:"Self::env()"})," to access those,\nin an ",(0,c.jsx)(e.code,{children:"#[ink(message)]"})," use ",(0,c.jsx)(e.code,{children:"self.env()"}),".\nSo e.g. ",(0,c.jsx)(e.code,{children:"Self::env().caller()"})," or ",(0,c.jsx)(e.code,{children:"self.env().caller()"}),"."]}),"\n",(0,c.jsx)(e.p,{children:"Some handy functions include:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/fn.caller.html",children:(0,c.jsx)(e.code,{children:"caller()"})}),": Returns the address of the caller of the executed contract."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/fn.account_id.html",children:(0,c.jsx)(e.code,{children:"account_id()"})}),": Returns the account ID of the executed contract."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/fn.balance.html",children:(0,c.jsx)(e.code,{children:"balance()"})}),": Returns the balance of the executed contract."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/fn.block_number.html",children:(0,c.jsx)(e.code,{children:"block_number()"})}),": Returns the current block number."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/fn.emit_event.html",children:(0,c.jsx)(e.code,{children:"emit_event(\u2026)"})}),": Emits an event with the given event data."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/fn.transfer.html",children:(0,c.jsx)(e.code,{children:"transfer(\u2026)"})}),": Transfers value from the contract to the destination account ID."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/fn.hash_bytes.html",children:(0,c.jsx)(e.code,{children:"hash_bytes(\u2026)"})}),": Conducts the crypto hash of the given input and stores the result in output."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/#functions",children:"\u2026and many more"}),"."]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}},23944:(n,e,s)=>{s.d(e,{A:()=>t});const t=s.p+"assets/images/env-function-3fdbc771ad504ce245a8942db736df4a.svg"},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>o});var t=s(96540);const c={},i=t.createContext(c);function r(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);
"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4206],{70434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"linter/rules/no_main","title":"no_main","description":"no_main lint documentation","source":"@site/docs/linter/rules/no_main.md","sourceDirName":"linter/rules","slug":"/linter/rules/no_main","permalink":"/ink-docs/docs/v5/linter/rules/no_main","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/linter/rules/no_main.md","tags":[],"version":"current","frontMatter":{"title":"no_main","hide_title":true,"description":"no_main lint documentation"},"sidebar":"reference","previous":{"title":"Overview","permalink":"/ink-docs/docs/v5/linter/overview"},"next":{"title":"primitive_topic","permalink":"/ink-docs/docs/v5/linter/rules/primitive_topic"}}');var o=t(74848),s=t(28453);const r={title:"no_main",hide_title:!0,description:"no_main lint documentation"},a="no_main",c={},d=[{value:"What it does",id:"what-it-does",level:2},{value:"Why is this necessary?",id:"why-is-this-necessary",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"no_main",children:"no_main"})}),"\n",(0,o.jsx)(n.h2,{id:"what-it-does",children:"What it does"}),"\n",(0,o.jsxs)(n.p,{children:["Checks if a contract is annotated with the ",(0,o.jsx)(n.code,{children:"no_main"})," inner attribute."]}),"\n",(0,o.jsx)(n.h2,{id:"why-is-this-necessary",children:"Why is this necessary?"}),"\n",(0,o.jsxs)(n.p,{children:["Contracts must be annotated with ",(0,o.jsx)(n.code,{children:"no_main"})," inner attribute when compiled for on-chain\nexecution."]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:'// Bad: Contract does not contain the `no_main` attribute,\n// so it cannot be compiled to Wasm\n#![cfg_attr(not(feature = "std"), no_std)]\n#[ink::contract]\nmod my_contract { /* ... */ }\n'})}),"\n",(0,o.jsx)(n.p,{children:"Use instead:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n#[ink::contract]\nmod my_contract { /* ... */ }\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
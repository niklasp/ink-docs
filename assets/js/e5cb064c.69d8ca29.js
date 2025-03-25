"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7863],{51756:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"basics/metadata/metadata","title":"Metadata","description":"Metadata Title Picture","source":"@site/versioned_docs/version-v6/basics/metadata/metadata.md","sourceDirName":"basics/metadata","slug":"/basics/metadata","permalink":"/ink-docs/docs/v6/basics/metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/basics/metadata/metadata.md","tags":[],"version":"v6","frontMatter":{"title":"Metadata","hide_title":true,"slug":"/basics/metadata"},"sidebar":"reference","previous":{"title":"Chain Environment Types","permalink":"/ink-docs/docs/v6/basics/chain-environment-types"},"next":{"title":"ink! Format","permalink":"/ink-docs/docs/v6/basics/metadata/ink"}}');var s=a(74848),i=a(28453);const o={title:"Metadata",hide_title:!0,slug:"/basics/metadata"},r="Metadata",c={},d=[];function l(t){const e={a:"a",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Metadata Title Picture",src:a(7985).A+"",width:"1600",height:"500"})}),"\n",(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"metadata",children:"Metadata"})}),"\n",(0,s.jsxs)(e.p,{children:['You can think of "Metadata" this way: when a contract is built,\nthe product of this process is a binary (the ',(0,s.jsx)(e.code,{children:".polkavm"})," file) that\ncontains just the bytecode of your contract."]}),"\n",(0,s.jsx)(e.p,{children:"Without further information it's\nnot possible to know what this bytecode refers to. For example,\nwhich functions can be called in there or what their arguments\nare. This additional information that describes what the raw binary\nis about is called metadata \u2014 data that describes other data."}),"\n",(0,s.jsx)(e.p,{children:"Metadata is used to describe a contract in a language agnostic way. It is\nintended to be used by third party tools (e.g. UIs, block explorers) in order to correctly\ncall contract functions and interpret events."}),"\n",(0,s.jsx)(e.p,{children:"ink! supports two formats of metadata:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/ink-docs/docs/v6/basics/metadata/solidity",children:"The Solidity format"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"/ink-docs/docs/v6/basics/metadata/ink",children:"Our own ink! format"})}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["The reason why we support two formats is that Solidity is a subset of\nthe types that Rust allows for. E.g. Rust's ",(0,s.jsx)(e.code,{children:"Option"})," or ",(0,s.jsx)(e.code,{children:"Result"})," are\nnot supported by the Solidity type system."]}),"\n",(0,s.jsxs)(e.p,{children:["So developers have a choice which metadata they want to generate for a contract.\nThey can decide when invoking ",(0,s.jsx)(e.code,{children:"cargo-contract"}),":"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"$ cargo contract build ---metadata <ink|solidity>\n"})}),"\n",(0,s.jsx)(e.p,{children:"Generating Solidity metadata is only possible if all constructor and message\narguments + return types can be mapped to fitting Solidity types."})]})}function h(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},7985:(t,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/metadata-revive-2409587c8d292f13afb31073948c3ec6.svg"},28453:(t,e,a)=>{a.d(e,{R:()=>o,x:()=>r});var n=a(96540);const s={},i=n.createContext(s);function o(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);
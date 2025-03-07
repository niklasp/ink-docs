"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3570],{54230:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"datastructures/overview","title":"Overview","description":"Storage Title Picture","source":"@site/versioned_docs/version-v6/datastructures/overview.md","sourceDirName":"datastructures","slug":"/datastructures/overview","permalink":"/ink-docs/docs/v6/datastructures/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/datastructures/overview.md","tags":[],"version":"v6","frontMatter":{"title":"Overview","slug":"/datastructures/overview","hide_title":true},"sidebar":"reference","previous":{"title":"#[ink::chain_extension]","permalink":"/ink-docs/docs/v6/macros-attributes/chain-extension"},"next":{"title":"Working with StorageVec","permalink":"/ink-docs/docs/v6/datastructures/storagevec"}}');var s=r(74848),i=r(28453);const a={title:"Overview",slug:"/datastructures/overview",hide_title:!0},o="Overview",c={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",header:"header",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Storage Title Picture",src:r(86813).A+"",width:"1600",height:"500"})}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"overview",children:"Overview"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ink_storage"})," crate acts as the standard storage library for ink! smart contracts.\nAt the moment it provides two primitives for interacting with storage,\n",(0,s.jsx)(t.a,{href:"https://docs.rs/ink_storage/5.0.0/ink_storage/struct.Mapping.html",children:(0,s.jsx)(t.code,{children:"Mapping"})}),"\nand ",(0,s.jsx)(t.a,{href:"https://docs.rs/ink_storage/5.0.0/ink_storage/struct.Lazy.html",children:(0,s.jsx)(t.code,{children:"Lazy"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Mapping"})," is a mapping of key-value pairs directly to the contract storage. It is very\nsimilar to traditional hash tables and comparable to the ",(0,s.jsx)(t.code,{children:"mapping"})," type Solidity offers.\nAs a core ingredient to the ink! language, its main advantage is being simple and\nlightweight: It favors being efficient in terms of gas costs and code size\nover providing a lot of high-level functionality found in other implementations\nlike the ",(0,s.jsx)(t.code,{children:"ink::prelude::collections::HashMap"})," type.\nOverall, the ink! ",(0,s.jsx)(t.code,{children:"Mapping"})," will be a solid choice for most contracts. Moreover, smart\ncontracts developers can implement advanced features themselves."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Lazy"})," is a wrapper type that can be used over any other storage compatible type.\nThis allows smart contract developers fine-grained manual control over the layout of\nthe contract storage by assigning a separate storage cell for the field. For example,\nit can be used to prevent the contract from eagerly loading large storage fields\nduring each contract call.\nConceivably, it may be desirable to change certain aspects on how your contract deals with\nits storage variables. You can find out more about this in the section about the ink!\n",(0,s.jsx)(t.a,{href:"/ink-docs/docs/v6/datastructures/storage-layout",children:"Storage Layout"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},86813:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/storage-ee91ff72871e8fcb3e47049c3110f8bf.svg"},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
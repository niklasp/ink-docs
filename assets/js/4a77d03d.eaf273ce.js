"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1293],{27341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"macros-attributes/implementation","title":"#[ink(impl)]","description":"This attribute supports a niche case that is rarely needed.","source":"@site/versioned_docs/version-v3/macros-attributes/implementation.md","sourceDirName":"macros-attributes","slug":"/macros-attributes/impl","permalink":"/ink-docs/docs/v3/macros-attributes/impl","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v3/macros-attributes/implementation.md","tags":[],"version":"v3","frontMatter":{"title":"#[ink(impl)]","slug":"/macros-attributes/impl"},"sidebar":"reference","previous":{"title":"#[ink(event)]","permalink":"/ink-docs/docs/v3/macros-attributes/event"},"next":{"title":"#[ink(message)]","permalink":"/ink-docs/docs/v3/macros-attributes/message"}}');var s=t(74848),o=t(28453);const a={title:"#[ink(impl)]",slug:"/macros-attributes/impl"},r=void 0,c={},l=[{value:"Example",id:"example",level:2}];function m(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This attribute supports a niche case that is rarely needed."}),"\n",(0,s.jsxs)(n.p,{children:["Can be applied on ink! implementation blocks in order to make ink! aware\nof them. This is useful if such an implementation block doesn't contain\nany other ink! attributes, so it would be flagged by ink! as a Rust item.\nAdding ",(0,s.jsx)(n.code,{children:"#[ink(impl)]"})," on such implementation blocks makes them treated\nas ink! implementation blocks thus allowing to access the environment\netc."]}),"\n",(0,s.jsx)(n.p,{children:"Note that ink! messages and constructors still need to be explicitly\nflagged as such."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["An implementation block can be defined as a trait implementation\nfor the ink! storage struct using the ",(0,s.jsx)(n.code,{children:"#[ink(impl)]"})," annotation \u2012 even\nif none of its interior items have any ink! specific attributes on them:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use core::convert::TryFrom;\nuse ink_lang_ir as ir;\n\n#[ink::contract]\nmod my_module {\n    #[ink(storage)]\n    pub struct MyStorage {\n        /* storage fields */\n    }\n\n    #[ink(impl)]\n    impl MyStorage {\n        fn my_method(&self) -> i32 {\n            /* method implementation */\n        }\n    }\n\n    impl MyStorage {\n      #[ink(constructor)]\n      pub fn my_constructor() -> Self {\n          /* constructor implementation */\n      }\n\n      #[ink(message)]\n      pub fn my_message(&self) {\n          /* message implementation */\n      }\n    }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
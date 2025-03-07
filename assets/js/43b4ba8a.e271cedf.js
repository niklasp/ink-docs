"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5948],{89571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"basics/reading-values","title":"Reading Values from Storage","description":"Reading from storage is where the fun begins!","source":"@site/versioned_docs/version-v3/basics/reading-values.md","sourceDirName":"basics","slug":"/basics/reading-values","permalink":"/ink-docs/docs/v3/basics/reading-values","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v3/basics/reading-values.md","tags":[],"version":"v3","frontMatter":{"title":"Reading Values from Storage","slug":"/basics/reading-values"},"sidebar":"reference","previous":{"title":"Storing Values","permalink":"/ink-docs/docs/v3/basics/storing-values"},"next":{"title":"Mutating Storage Values","permalink":"/ink-docs/docs/v3/basics/mutating-values"}}');var i=t(74848),a=t(28453);const o={title:"Reading Values from Storage",slug:"/basics/reading-values"},r=void 0,c={},l=[{value:"Contract Functions",id:"contract-functions",level:2},{value:"Public and Private Functions",id:"public-and-private-functions",level:3},{value:"Getting a Value",id:"getting-a-value",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Reading from storage is where the fun begins!"}),"\n",(0,i.jsx)(n.h2,{id:"contract-functions",children:"Contract Functions"}),"\n",(0,i.jsx)(n.p,{children:"As you can see in the contract template, all of your contract functions are part of your contract module."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl MyContract {\n    // Public and Private functions can go here\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"public-and-private-functions",children:"Public and Private Functions"}),"\n",(0,i.jsx)(n.p,{children:"In Rust, you can make as many implementations as you want. As a stylistic choice, we recommend\nbreaking up your implementation definitions for your private and public functions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl MyContract {\n    /// Public function\n    #[ink(message)]\n    pub fn my_public_function(&self) {\n        /* --snip-- */\n    }\n\n    /// Private function\n    fn my_private_function(&self) {\n        /* --snip-- */\n    }\n\n    /* --snip-- */\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can also choose to split things up however is most clear for your project."}),"\n",(0,i.jsxs)(n.p,{children:["Note that all public functions must use the ",(0,i.jsx)(n.code,{children:"#[ink(message)]"})," attribute."]}),"\n",(0,i.jsx)(n.h2,{id:"getting-a-value",children:"Getting a Value"}),"\n",(0,i.jsxs)(n.p,{children:["We already showed you how to initialize a storage value in the chapter ",(0,i.jsx)(n.a,{href:"/ink-docs/docs/v3/basics/storing-values",children:"Storing Values"}),".\nGetting the value is just as simple:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl MyContract {\n    #[ink(message)]\n    pub fn my_getter(&self) -> u32 {\n        self.number\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"In Rust, if the last expression in a function does not have a semicolon, then it will be the return value."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
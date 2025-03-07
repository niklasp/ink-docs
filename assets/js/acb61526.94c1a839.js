"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7673],{1282:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"basics/selectors","title":"Selectors","description":"Selectors in ink! are a language agnostic way of identifying constructors and messages.","source":"@site/versioned_docs/version-v4/basics/selectors.md","sourceDirName":"basics","slug":"/basics/selectors","permalink":"/ink-docs/docs/v4/basics/selectors","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v4/basics/selectors.md","tags":[],"version":"v4","frontMatter":{"title":"Selectors","hide_title":true,"slug":"/basics/selectors"},"sidebar":"reference","previous":{"title":"Events","permalink":"/ink-docs/docs/v4/basics/events"},"next":{"title":"Trait Definitions","permalink":"/ink-docs/docs/v4/basics/trait-definitions"}}');var i=s(74848),o=s(28453);const r={title:"Selectors",hide_title:!0,slug:"/basics/selectors"},a="Selectors",c={},l=[{value:"Selector Calculation",id:"selector-calculation",level:2},{value:"Selector Calculation: ink! Traits",id:"selector-calculation-ink-traits",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"selectors",children:"Selectors"})}),"\n",(0,i.jsxs)(n.p,{children:["Selectors in ink! are a language agnostic way of identifying constructors and messages.\nThey are four-byte hexadecimal strings which look something like: ",(0,i.jsx)(n.code,{children:"0x633aa551"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can find the selector of an ink! constructor or message in your\n",(0,i.jsx)(n.a,{href:"/ink-docs/docs/v4/basics/metadata",children:"contract metadata"})," by looking for the ",(0,i.jsx)(n.code,{children:"selector"})," field of the dispatchable\nyou're interested in."]}),"\n",(0,i.jsxs)(n.p,{children:["Here is an example of how you can grab the message name and selector from your contract\nmetadata using ",(0,i.jsx)(n.a,{href:"https://stedolan.github.io/jq/",children:(0,i.jsx)(n.code,{children:"jq"})}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'cat target/ink/flipper.json | jq \'.spec.messages[0] | "\\(.label): \\(.selector)"\'\n"flip: 0x633aa551"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"selector-calculation",children:"Selector Calculation"}),"\n",(0,i.jsx)(n.p,{children:"If you do not have access to a contract's metadata, you can also calculate it yourself."}),"\n",(0,i.jsx)(n.p,{children:"The algorithm ink! uses is fairly straightforward:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Get ",(0,i.jsx)(n.em,{children:"just"})," the name of the constructor or message"]}),"\n",(0,i.jsxs)(n.li,{children:["Compute the ",(0,i.jsx)(n.code,{children:"BLAKE2"})," hash of the name"]}),"\n",(0,i.jsx)(n.li,{children:"Take the first four bytes of the hash as the selector"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's walk through a short example of what this looks like in practice. Consider the\nfollowing message:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink(message)]\nfn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool {\n    unimplemented!()\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"To calculate the selector we:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Grab the name of the message, ",(0,i.jsx)(n.code,{children:"frobinate"})]}),"\n",(0,i.jsxs)(n.li,{children:["Compute ",(0,i.jsx)(n.code,{children:'BLAKE2("frobinate") = 0x8e39d7f22ef4f9f1404fe5200768179a8b4f2b67799082d7b39f6a8ca82da8f1'})]}),"\n",(0,i.jsxs)(n.li,{children:["Grab the first four bytes, ",(0,i.jsx)(n.code,{children:"0x8e39d7f2"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"selector-calculation-ink-traits",children:"Selector Calculation: ink! Traits"}),"\n",(0,i.jsxs)(n.p,{children:["These rules change a bit if you define any messages using the ",(0,i.jsx)(n.code,{children:"[ink::trait_definition]"}),"\n",(0,i.jsx)(n.a,{href:"/ink-docs/docs/v4/basics/trait-definitions",children:"macro"}),". For our first step, instead of taking ",(0,i.jsx)(n.em,{children:"just"})," the\nmessage name, we now also add the ",(0,i.jsx)(n.em,{children:"trait name"})," to the selector calculation."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'cat target/ink/trait-flipper.json | jq \'.spec.messages[0] | "\\(.label): \\(.selector)"\'\n"Flip::flip: 0xaa97cade"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Let's see what this would look like in practice. Consider the following trait:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::trait_definition]\npub trait Frobinate {\n    fn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool;\n}\n\n-- snip --\n\nimpl Frobinate for Contract {\n    #[ink(message)]\n    fn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool {\n        unimplemented!()\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"To calculate the selector we:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Grab the name of the trait ",(0,i.jsx)(n.strong,{children:"and"})," the name of the message, ",(0,i.jsx)(n.code,{children:"Frobinate::frobinate"})]}),"\n",(0,i.jsxs)(n.li,{children:["Compute ",(0,i.jsx)(n.code,{children:'BLAKE2("Frobinate::frobinate") = 0x8915412ad772b2a116917cf75df4ba461b5808556a73f729bce582fb79200c5b'})]}),"\n",(0,i.jsxs)(n.li,{children:["Grab the first four bytes, ",(0,i.jsx)(n.code,{children:"0x8915412a"})]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Don't worry if you're not able to calculate the ",(0,i.jsx)(n.code,{children:"BLAKE2"})," hash of a string by hand. You\ncan use ",(0,i.jsx)(n.a,{href:"https://www.shawntabrizi.com/substrate-js-utilities/",children:"Shawn's Substrate Utilities"}),"\nto do it for you!"]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(96540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
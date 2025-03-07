"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4182],{98759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"testing/off-chain","title":"Off-chain Tests","description":"Testing1 Title Picture","source":"@site/versioned_docs/version-v6/testing/off-chain.md","sourceDirName":"testing","slug":"/basics/contract-testing/off-chain","permalink":"/ink-docs/docs/v6/basics/contract-testing/off-chain","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/testing/off-chain.md","tags":[],"version":"v6","frontMatter":{"title":"Off-chain Tests","hide_title":true,"slug":"/basics/contract-testing/off-chain"},"sidebar":"reference","previous":{"title":"Overview","permalink":"/ink-docs/docs/v6/basics/contract-testing/overview"},"next":{"title":"DRink!","permalink":"/ink-docs/docs/v6/basics/contract-testing/drink"}}');var i=n(74848),o=n(28453);const r={title:"Off-chain Tests",hide_title:!0,slug:"/basics/contract-testing/off-chain"},c=void 0,a={},l=[{value:"Unit Tests",id:"unit-tests",level:2},{value:"How do you find out if your test requires the off-chain environment?",id:"how-do-you-find-out-if-your-test-requires-the-off-chain-environment",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Testing1 Title Picture",src:n(90719).A+"",width:"1600",height:"500"})}),"\n",(0,i.jsx)(t.h2,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,i.jsxs)(t.p,{children:["Testing contracts off-chain is done by ",(0,i.jsx)(t.code,{children:"cargo test"})," and users can simply use the standard Rust\nroutines of creating unit test modules within the ink! project:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn my_test() { ... }\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Test instances of contracts can be created with something like:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"let contract = MyContract::my_constructor(a, b);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Messages can simply be called on the returned instance as if ",(0,i.jsx)(t.code,{children:"MyContract::my_constructor"})," returns a\n",(0,i.jsx)(t.code,{children:"Self"})," instance."]}),"\n",(0,i.jsxs)(t.p,{children:["See the ",(0,i.jsx)(t.a,{href:"https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs",children:"flipper example"}),"."]}),"\n",(0,i.jsx)(t.h1,{id:"integration-tests",children:"Integration Tests"}),"\n",(0,i.jsxs)(t.p,{children:["For integration tests, the test is annotated with our ",(0,i.jsx)(t.code,{children:"#[ink::test]"}),"\nattribute instead of ",(0,i.jsx)(t.code,{children:"#[test]"}),". Our attribute denotes that\nthe test is then executed in a simulated, mocked blockchain environment.\nhere are functions available to influence how the test environment\nis configured (e.g. setting a specified balance of an account to\nsimulate how a contract would behave when interacting with it)."]}),"\n",(0,i.jsxs)(t.p,{children:["If you annotate a test with the ",(0,i.jsx)(t.code,{children:"#[ink::test]"})," attribute it\nwill be executed in a simulated environment, similar to as it\nwould be run on-chain.\nYou then have fine-grained control over how a contract is called;\nfor example you can influence the block advancement, the value transferred to it,\nby which account it is called, which storage it is run with, etc.."]}),"\n",(0,i.jsxs)(t.p,{children:["See the ",(0,i.jsx)(t.a,{href:"https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs",children:(0,i.jsx)(t.code,{children:"examples/erc20"})})," contract on how to utilize those or ",(0,i.jsx)(t.a,{href:"https://docs.rs/ink/5.0.0/ink/attr.test.html",children:"the documentation"})," for details."]}),"\n",(0,i.jsx)(t.p,{children:"At the moment there are some known limitations to our off-chain environment,\nand we are working on making it behave as close to the real chain environment\nas possible."}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsxs)(t.p,{children:["One limitation of the off-chain testing framework is that it\ncurrently only supports a ",(0,i.jsx)(t.code,{children:"DefaultEnvironment"}),"."]}),(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"/ink-docs/docs/v6/basics/chain-environment-types",children:"here"})," for an explanation of what an environment is."]})]}),"\n",(0,i.jsx)(t.h2,{id:"how-do-you-find-out-if-your-test-requires-the-off-chain-environment",children:"How do you find out if your test requires the off-chain environment?"}),"\n",(0,i.jsxs)(t.p,{children:["Normally if the test recursively uses or invokes some contract methods that\ncall a method defined in ",(0,i.jsx)(t.code,{children:"self.env()"})," or ",(0,i.jsx)(t.code,{children:"Self::env()"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"An example is the following:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"let caller: AccountId = self.env().caller();\n"})}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[cfg(test)]\nmod tests {\n    // Conventional unit test that works with assertions.\n    #[ink::test]\n    fn test1() {\n        // test code comes here as usual\n    }\n\n    // Conventional unit test that returns some Result.\n    // The test code can make use of operator-`?`.\n    #[ink::test]\n    fn test2() -> Result<(), ink::env::Error> {\n        // test code that returns a Rust Result type\n    }\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},90719:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/testing1-d84c1e06aff43cd5541920ef31eee08f.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
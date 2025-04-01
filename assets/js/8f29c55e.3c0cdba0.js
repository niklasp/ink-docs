"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1468],{64998:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>j,default:()=>r,frontMatter:()=>s,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"getting-started/compiling","title":"Compile Your Contract","description":"Cargo Contract Title Picture","source":"@site/docs/getting-started/compiling.md","sourceDirName":"getting-started","slug":"/getting-started/building-your-contract","permalink":"/ink-docs/docs/v5/getting-started/building-your-contract","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/getting-started/compiling.md","tags":[],"version":"current","frontMatter":{"title":"Compile Your Contract","slug":"/getting-started/building-your-contract","hide_title":true},"sidebar":"reference","previous":{"title":"Creating an ink! Project","permalink":"/ink-docs/docs/v5/getting-started/creating-an-ink-project"},"next":{"title":"Run a Substrate Node","permalink":"/ink-docs/docs/v5/getting-started/running-substrate"}}');var c=i(74848),M=i(28453);const s={title:"Compile Your Contract",slug:"/getting-started/building-your-contract",hide_title:!0},j="Compile Your Contract",o={},u=[{value:"Debug vs. Release Build",id:"debug-vs-release-build",level:2}];function L(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,M.R)(),...t.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{alt:"Cargo Contract Title Picture",src:i(80121).A+"",width:"1600",height:"500"})}),"\n",(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"compile-your-contract",children:"Compile Your Contract"})}),"\n",(0,c.jsxs)(e.p,{children:["Run the following command in your ",(0,c.jsx)(e.code,{children:"flipper"})," directory to compile your smart contract:"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"cargo contract build\n"})}),"\n",(0,c.jsxs)(e.p,{children:["This command will build the following for your contract:\na Wasm binary, a metadata file (which contains the\ncontract's ABI) and a ",(0,c.jsx)(e.code,{children:".contract"})," file which bundles both."]}),"\n",(0,c.jsxs)(e.p,{children:["If all goes well, you should see a ",(0,c.jsx)(e.code,{children:"target"})," folder which contains these files:"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"target\n  \u2514\u2500 ink\n    \u2514\u2500 flipper.contract\n    \u2514\u2500 flipper.wasm\n    \u2514\u2500 flipper.json\n"})}),"\n",(0,c.jsx)(e.p,{children:"You can think of it this way: the raw Wasm binary contains just\nthe bytecode of your contract. Without further information it's\nnot possible to know what this bytecode refers to. For example,\nwhich functions can be called in there and what their arguments\nare. This additional information that describes what the raw Wasm\nis about is called metadata \u2012 data that describes other data."}),"\n",(0,c.jsx)("p",{children:(0,c.jsx)("img",{src:"/img/metadata.svg"})}),"\n",(0,c.jsx)(e.p,{children:"The purpose of each file is:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"flipper.wasm"}),": This is the raw contract bytecode that will be deployed on-chain."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"flipper.json"}),": The isolated metadata, which is not stored on-chain.\nIt's big and would take up too much space and costs.\nThis file is used by e.g. a dApp user interface to know how to communicate with the on-chain contract."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"flipper.contract"}),": Combines both the contract's bytecode and the metadata. This file\nis used when you are using a Developer UI like ",(0,c.jsx)(e.a,{href:"https://ui.use.ink",children:"Contracts UI"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["Let's take a look at the structure of the ",(0,c.jsx)(e.code,{children:"flipper.json"}),":"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'{\n  "source": {...},\n  "contract": {...},\n  "spec": {\n    "constructors": [...],\n    "docs": [],\n    "events": [],\n    "messages": [...],\n  },\n  "storage": {...},\n  "types": [...],\n  "version": "4"\n}\n'})}),"\n",(0,c.jsx)(e.p,{children:"This file describes all the interfaces that can be used to interact with your contract:"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"types"})," provides the custom ",(0,c.jsx)(e.strong,{children:"data types"})," used throughout the rest of the JSON."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"storage"})," defines all the ",(0,c.jsx)(e.strong,{children:"storage"})," items managed by your contract and how to ultimately access them."]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"spec"})," stores information about the callable functions like ",(0,c.jsx)(e.strong,{children:"constructors"})," and ",(0,c.jsx)(e.strong,{children:"messages"})," a\nuser can call to interact with the contract. It also has helpful information like the ",(0,c.jsx)(e.strong,{children:"events"}),"\nthat are emitted by the contract or any ",(0,c.jsx)(e.strong,{children:"docs"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(e.p,{children:["If you look closely at the constructors and messages, you will also notice a ",(0,c.jsx)(e.code,{children:"selector"})," which\ncontains a 4-byte hash of the function name and is used to route your contract calls to the correct\nfunctions."]}),"\n",(0,c.jsxs)(e.p,{children:["You can also open up the ",(0,c.jsx)(e.code,{children:"flipper.contract"})," file in any text editor. You'll notice that it's\nnearly the same as the ",(0,c.jsx)(e.code,{children:"flipper.json"}),". The only different is that the ",(0,c.jsx)(e.code,{children:".contract"})," file contains\nan additional field with the hex-encoded Wasm bytecode of your contract:"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:'{\n    "source": {\n        \u2026\n        "wasm": "0x006173\u2026",\n    },\n    \u2026\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["In the next section we will start a ",(0,c.jsx)(e.a,{href:"https://github.com/paritytech/substrate-contracts-node",children:"Substrate Smart Contracts node"}),"\nand configure the ",(0,c.jsx)(e.a,{href:"https://github.com/use-ink/contracts-ui",children:"Contracts UI"})," to interact with it."]}),"\n",(0,c.jsx)(e.h2,{id:"debug-vs-release-build",children:"Debug vs. Release Build"}),"\n",(0,c.jsxs)(e.p,{children:["By default, ",(0,c.jsx)(e.code,{children:"cargo-contract"})," builds the contract in debug mode. This means\nthat the contract will e.g. print statements like"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-rust",children:'ink::env::debug_println!("magic number: {}", value);\n'})}),"\n",(0,c.jsxs)(e.p,{children:["to the node's console if debugging was enabled on the node (",(0,c.jsx)(e.a,{href:"/ink-docs/docs/v5/faq#how-do-i-print-something-to-the-console-from-the-runtime",children:"instructions here"}),").\nTo support functionality like this the debug build of a contract includes some\nheavy-weight logic."]}),"\n",(0,c.jsxs)(e.p,{children:["For contracts that are supposed to run in production you should always build the\ncontract with ",(0,c.jsx)(e.code,{children:"--release"}),":"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"cargo contract build --release\n"})}),"\n",(0,c.jsx)(e.p,{children:"This will ensure that nothing unnecessary is compiled into the Wasm blob, making\nyour contract faster and cheaper to deploy and execute."}),"\n",(0,c.jsx)(e.admonition,{type:"info",children:(0,c.jsxs)(e.p,{children:["With this behavior ",(0,c.jsx)(e.code,{children:"cargo-contract"})," mirrors how ",(0,c.jsx)(e.code,{children:"cargo"})," behaves for Rust programs:\nthe ",(0,c.jsx)(e.code,{children:"--release"})," flag has to be passed explicitly to ",(0,c.jsx)(e.code,{children:"cargo build"}),"."]})})]})}function r(t={}){const{wrapper:e}={...(0,M.R)(),...t.components};return e?(0,c.jsx)(e,{...t,children:(0,c.jsx)(L,{...t})}):L(t)}},80121:(t,e,i)=>{i.d(e,{A:()=>n});const n="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNjAwIDUwMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTYwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRDdCNkZBO30KCS5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojQkE4MUY5O30KCS5zdDJ7ZmlsbDojQkE4MUY5O30KCS5zdDN7ZmlsbDojRUFEOUZDO30KCS5zdDR7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KCS5zdDV7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRDhCNkZGO30KCS5zdDZ7ZmlsbDojNUEwMDdFO308L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0ibTE2MDAgMjQuOHY0MjguNWMwIDguMy00LjEgMTUuNy0xMC4zIDIwLjItMi40IDEuNy01LjggMC45LTYuOS0xLjktMy45LTkuNy0xNi40LTE2LjgtMzEuMi0xNi44LTkuNSAwLTE4IDIuOS0yMy45IDcuNS0xLjkgMS41LTQuNiAxLjItNi4yLTAuNi03LjctOC43LTIxLjItMTQuNS0zNi43LTE0LjUtMTMuOSAwLTI2LjQgNC43LTM0LjMgMTItMS44IDEuNy00LjcgMS41LTYuNC0wLjMtOS4zLTEwLjEtMjUuOC0xNi44LTQ0LjYtMTYuOC0yNy4xIDAtNDkuMyAxMy45LTUyLjQgMzEuNy0wLjQgMi40LTIuNSA0LjEtNC45IDQuMWgtMTMxN2MtMTMuOSAwLjMtMjUtMTAuOC0yNS0yNC41di00MjguNmMwLTEzLjcgMTEuMS0yNC44IDI0LjgtMjQuOGgxNTUwYzEzLjggMCAyNC45IDExLjEgMjQuOSAyNC44eiIvPgogPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjE0MDAiIGN5PSI0NzkuMiIgcng9IjMzLjkiIHJ5PSIyMC44Ii8+CiA8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iMTQ4NCIgY3k9IjQ3OC43IiByeD0iMjcuOSIgcnk9IjE3LjIiLz4KIDxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxNTUyIiBjeT0iNDc5IiByeD0iMTguNyIgcnk9IjExLjUiLz4KIDxwYXRoIGNsYXNzPSJzdDIiIGQ9Im0xNjAwIDM5NS41djU3LjhjMCA4LjMtNC4xIDE1LjctMTAuMyAyMC4yLTIuNCAxLjctNS44IDAuOS02LjktMS45LTMuOS05LjctMTYuNC0xNi44LTMxLjItMTYuOC05LjUgMC0xOCAyLjktMjMuOSA3LjUtMS45IDEuNS00LjYgMS4yLTYuMi0wLjYtNy43LTguNy0yMS4yLTE0LjUtMzYuNy0xNC41LTEzLjkgMC0yNi40IDQuNy0zNC4zIDEyLTEuOCAxLjctNC43IDEuNS02LjQtMC4zLTkuMy0xMC4xLTI1LjgtMTYuOC00NC42LTE2LjgtMjcuMSAwLTQ5LjMgMTMuOS01Mi40IDMxLjctMC40IDIuNC0yLjUgNC4xLTQuOSA0LjFoLTEzMTdjLTEzLjkgMC4zLTI1LTEwLjgtMjUtMjQuNXYtMTQ3czI4Mi43IDg5IDQ2NS41IDg4LjljMjg5LjUtMC4yIDcxNS4xLTEyNi42IDExMzQgMC4yeiIvPgogPHBhdGggY2xhc3M9InN0MyIgZD0iTTAsMjEuM3Y1OC41QzUyNi44LDMxLDg2NC4zLDIxNy45LDE2MDAsNzZWMjEuM2MwLTExLjgtMTEuMS0yMS4zLTI0LjgtMjEuM0gyNC44QzExLjEsMCwwLDkuNiwwLDIxLjN6Ii8+CiA8cGF0aCBjbGFzcz0ic3Q0IiBkPSJtMTA4NiAzNTcuOGgtNTk3LjVjLTE1LjkgMC0yOC44LTEyLjktMjguOC0yOC44di0xODYuN2MwLTE1LjkgMTIuOS0yOC44IDI4LjgtMjguOGg1OTcuNWMxNS45IDAgMjguOCAxMi45IDI4LjggMjguOHYxODYuN2MwIDE1LjktMTIuOSAyOC44LTI4LjggMjguOHoiLz4KIDxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxNDAwIiBjeT0iNDc5LjIiIHJ4PSIzMy45IiByeT0iMjAuOCIvPgogPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjE0ODQiIGN5PSI0NzguNyIgcng9IjI3LjkiIHJ5PSIxNy4yIi8+CiA8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iMTU1MiIgY3k9IjQ3OSIgcng9IjE4LjciIHJ5PSIxMS41Ii8+CiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA2IC04OS43OSkiPgogIDxwYXRoIGNsYXNzPSJzdDUiIGQ9Im0xMDMzIDM3NS44Yy04LjcgMy4yLTEzLjYgMTIuNC0xMC45IDIwLjZzMTIuMSAxMi40IDIwLjggOS4yIDEzLjYtMTIuNCAxMC45LTIwLjZjLTIuOC04LjItMTIuMS0xMi4zLTIwLjgtOS4yem0tMjg1LjMtODMuN2MyLjMgMCAzLjQgMS4xIDMuNCAzLjR2MTA3LjNjMCAyLjMtMS4xIDMuNC0zLjQgMy40aC0yMi42Yy0yLjMgMC0zLjQtMS4xLTMuNC0zLjR2LTEwNy4zYzAtMi4zIDEuMS0zLjQgMy40LTMuNGgyMi42em05Mi45LTAuOWMyNC45IDAgMzMuNSAxNi45IDMzLjUgNDAuMnY3MS40YzAgMi4zLTEuMSAzLjQtMy40IDMuNGgtMjIuNmMtMi4zIDAtMy40LTEuMS0zLjQtMy40di03NC45YzAtNy44LTUuNy0xMC41LTEyLjMtMTAuNWgtMi43Yy05LjggMC0xNi45IDQuMS0xOS40IDguMnY3Ny4xYzAgMi4zLTEuMSAzLjQtMy40IDMuNGgtMjIuNmMtMi4zIDAtMy40LTEuMS0zLjQtMy40di0xMDcuM2MwLTIuMyAxLjEtMy40IDMuNC0zLjRoMjIuNmMyLjMgMCAzLjQgMS4xIDMuNCAzLjR2MTBjMy40LTUuNyAxMi4xLTE0LjQgMjktMTQuNGwxLjMgMC4yem04Ny00NC43YzIuMyAwIDMuNCAxLjEgMy40IDMuNHY3OS4ybDMyLjQtMzQuMmMxLjQtMS42IDMuNC0yLjcgNS4zLTIuN2gyMy41YzMgMCA1LjcgMy40IDEuNiA3LjhsLTM0IDM2LjUgMzkuNyA2My43YzEuNCAyLjUgMS4xIDYuMi0yLjcgNi4yaC0yMS41Yy0zIDAtNS43LTAuOS03LjUtNC4xbC0yOC00Ni4zLTguOSA4Ljl2MzcuOWMwIDIuMy0xLjEgMy40LTMuNCAzLjRoLTIyLjZjLTIuMyAwLTMuNC0xLjEtMy40LTMuNGwwLjEtMTUyLjljMC0yLjMgMS4xLTMuNCAzLjQtMy40aDIyLjZ6bS0xOTUuNiA1LjNjLTguNiAyLjYtMTMuNyAxMS4yLTExLjUgMTkuM3MxMSAxMi41IDE5LjUgOS45YzguNi0yLjYgMTMuNy0xMS4yIDExLjUtMTkuMy0yLjItOC0xMS0xMi40LTE5LjUtOS45eiIvPgogIDxwYXRoIGNsYXNzPSJzdDUiIGQ9Im0xMDMwIDM0OS4zaC01Yy0yLjMgMC0zLjQtMS4xLTMuNC0zLjR2LTk1LjljMC0yLjMgMS4xLTMuNCAzLjQtMy40aDIzLjNjMi4zIDAgMy40IDEuMSAzLjQgMy40djMuMmMtOC45IDIuMi0xNS44IDExLjItMTYuMyAyMi40LTAuNCA5IDMuMyAxNy4yIDkuMyAyMS45LTQuNCAzLTcuNyA4LjEtOC41IDE0LjItMC45IDYuNiAxLjMgMTIuOSA1LjQgMTcuMS00LjEgMS44LTcuOSA1LjUtMTAuMSAxMC40LTEuNSAzLjQtMiA2LjktMS41IDEwLjF6Ii8+CiAgPHBhdGggY2xhc3M9InN0NSIgZD0ibTEwMzcgMzQxLjVjLTEuNyAzLjktMC40IDggMi45IDkuMXM3LjMtMSA5LTQuOSAwLjQtOC0yLjktOS4xYy0zLjMtMS4yLTcuMyAxLTkgNC45em02LjEtMjguM2MtMS4xIDYgMiAxMS42IDcuMSAxMi42IDUgMC45IDEwLTMuMiAxMS4yLTkuMiAxLjEtNi0yLTExLjYtNy4xLTEyLjYtNS0wLjktMTAgMy4yLTExLjIgOS4yem0tMS4yLTM1LjRjLTAuNCA4LjIgNC45IDE1LjMgMTEuOCAxNS44czEyLjgtNS44IDEzLjItMTQtNC45LTE1LjMtMTEuOC0xNS44LTEyLjggNS44LTEzLjIgMTR6Ii8+CiAgPHBhdGggY2xhc3M9InN0NiIgZD0ibTEwODcgNDA2LjRoNzUuNWMyLjYgMCA0LjctMi4xIDQuNy00Ljd2LTExLjhjMC0yLjYtMi4xLTQuNy00LjctNC43aC03NS41Yy0yLjYgMC00LjcgMi4xLTQuNyA0Ljd2MTEuOGMwIDIuNiAyLjEgNC43IDQuNyA0Ljd6Ii8+CiAgPHBhdGggY2xhc3M9InN0NiIgZD0ibTYxOS42IDI5M2MwLTIuNiAyLjEtNC43IDQuNy00LjdoMTQuMmMyLjYgMCA0LjcgMi4xIDQuNyA0Ljd2MTQuMmMwIDIuNi0yLjEgNC43LTQuNyA0LjdoLTE0LjJjLTIuNiAwLTQuNy0yLjEtNC43LTQuN3YtMTQuMnoiLz4KICA8cGF0aCBjbGFzcz0ic3Q2IiBkPSJtNjE5LjUgNDAxLjVjMCAyLjYgMi4xIDQuNyA0LjcgNC43aDE0LjJjMi42IDAgNC43LTIuMSA0LjctNC43di0xNC4yYzAtMi42LTIuMS00LjctNC43LTQuN2gtMTQuMmMtMi42IDAtNC43IDIuMS00LjcgNC43djE0LjJ6Ii8+CiAgPHBhdGggY2xhc3M9InN0NiIgZD0ibTY0My4xIDMxNi42YzAtMi42IDIuMS00LjcgNC43LTQuN2gxNC4yYzIuNiAwIDQuNyAyLjEgNC43IDQuN3YxNC4yYzAgMi42LTIuMSA0LjctNC43IDQuN2gtMTQuMmMtMi42IDAtNC43LTIuMS00LjctNC43di0xNC4yeiIvPgogIDxwYXRoIGNsYXNzPSJzdDYiIGQ9Im02NDMuMSAzNzcuOWMwIDIuNiAyLjEgNC43IDQuNyA0LjdoMTQuMmMyLjYgMCA0LjctMi4xIDQuNy00Ljd2LTE0LjJjMC0yLjYtMi4xLTQuNy00LjctNC43aC0xNC4yYy0yLjYgMC00LjcgMi4xLTQuNyA0Ljd2MTQuMnoiLz4KICA8cGF0aCBjbGFzcz0ic3Q2IiBkPSJtNjY2LjcgMzQwLjJjMC0yLjYgMi4xLTQuNyA0LjctNC43aDE0LjJjMi42IDAgNC43IDIuMSA0LjcgNC43djE0LjJjMCAyLjYtMi4xIDQuNy00LjcgNC43aC0xNC4yYy0yLjYgMC00LjctMi4xLTQuNy00Ljd2LTE0LjJ6Ii8+CiA8L2c+Cjwvc3ZnPgo="},28453:(t,e,i)=>{i.d(e,{R:()=>s,x:()=>j});var n=i(96540);const c={},M=n.createContext(c);function s(t){const e=n.useContext(M);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function j(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:s(t.components),n.createElement(M.Provider,{value:e},t.children)}}}]);
"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8244],{83017:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"getting-started/deploying","title":"Deploy Your Contract","description":"Rocket Title Picture","source":"@site/docs/getting-started/deploying.md","sourceDirName":"getting-started","slug":"/getting-started/deploy-your-contract","permalink":"/ink-docs/docs/getting-started/deploy-your-contract","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/getting-started/deploying.md","tags":[],"version":"current","frontMatter":{"title":"Deploy Your Contract","slug":"/getting-started/deploy-your-contract","hide_title":true},"sidebar":"reference","previous":{"title":"Run a Substrate Node","permalink":"/ink-docs/docs/getting-started/running-substrate"},"next":{"title":"Call Your Contract","permalink":"/ink-docs/docs/getting-started/calling-your-contract"}}');var o=n(74848),a=n(28453);const s={title:"Deploy Your Contract",slug:"/getting-started/deploy-your-contract",hide_title:!0},i="Deploy Your Contract",r={},l=[{value:"Using the Contracts UI",id:"using-the-contracts-ui",level:2},{value:"1. Upload Contract Code",id:"1-upload-contract-code",level:3},{value:"2. Instantiate a Contract on the Blockchain",id:"2-instantiate-a-contract-on-the-blockchain",level:3},{value:"Using <code>cargo-contract</code>",id:"using-cargo-contract",level:2}];function d(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Rocket Title Picture",src:n(94438).A+"",width:"1600",height:"500"})}),"\n",(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"deploy-your-contract",children:"Deploy Your Contract"})}),"\n",(0,o.jsx)(e.p,{children:"Now that we have generated the Wasm binary from our source code and connected to a local node, we want\nto deploy this contract onto our Substrate blockchain."}),"\n",(0,o.jsx)(e.p,{children:"Smart contract deployment on Substrate is a little different than on traditional smart contract\nblockchains."}),"\n",(0,o.jsxs)(e.p,{children:["Whereas a completely new blob of smart contract source code is deployed each time you push a\ncontract on other platforms, Substrate opts to optimize this behavior. For example, the standard\nERC20 token has been deployed to Ethereum thousands of times, sometimes only with changes to the\ninitial configuration (through the Solidity ",(0,o.jsx)(e.code,{children:"constructor"})," function). Each of these instances take\nup space on the blockchain equivalent to the contract source code size, even though no code was\nactually changed."]}),"\n",(0,o.jsx)(e.p,{children:"In Substrate, the contract deployment process is split into two steps:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"Putting your contract code on the blockchain"}),"\n",(0,o.jsx)(e.li,{children:"Creating an instance of your contract"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"With this pattern, contract code like the ERC20 standard can be put on the blockchain one single\ntime, but instantiated any number of times. No need to continually upload the same source code over\nand waste space on the blockchain."}),"\n",(0,o.jsx)(e.h2,{id:"using-the-contracts-ui",children:"Using the Contracts UI"}),"\n",(0,o.jsx)(e.h3,{id:"1-upload-contract-code",children:"1. Upload Contract Code"}),"\n",(0,o.jsx)(e.p,{children:"Here we will upload the contract code and instantiate one copy of the contract on the blockchain\n(which is usually why we upload the contract code in the first place):"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Go to ",(0,o.jsx)(e.a,{href:"https://ui.use.ink",children:"https://ui.use.ink"})]}),"\n",(0,o.jsxs)(e.li,{children:["Click the ",(0,o.jsx)(e.strong,{children:"Add New Contract"})," button in the sidebar."]}),"\n",(0,o.jsxs)(e.li,{children:["Click the ",(0,o.jsx)(e.strong,{children:"Upload New Contract Code"})," button in the Add New Contract page."]}),"\n",(0,o.jsxs)(e.li,{children:["Choose an ",(0,o.jsx)(e.strong,{children:"Instantiation account"})," (e.g. ALICE)."]}),"\n",(0,o.jsxs)(e.li,{children:["Give the contract a descriptive ",(0,o.jsx)(e.strong,{children:"Name"})," (e.g. Flipper Contract)."]}),"\n",(0,o.jsxs)(e.li,{children:["Drag the ",(0,o.jsx)(e.code,{children:"flipper.contract"})," file that contains the bundled Wasm blob and metadata into the drag\n& drop area. You will see the UI parse the metadata and enabling the button that takes you to the next step."]}),"\n",(0,o.jsxs)(e.li,{children:["Click the ",(0,o.jsx)(e.strong,{children:"Next"})," button"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Flipper Instantiate Contract 01",src:n(57479).A+"",width:"2272",height:"1586"})}),"\n",(0,o.jsx)(e.h3,{id:"2-instantiate-a-contract-on-the-blockchain",children:"2. Instantiate a Contract on the Blockchain"}),"\n",(0,o.jsxs)(e.p,{children:["Smart contracts exist as an extension of the account system on the blockchain. Thus creating an\ninstance of this contract will create a new ",(0,o.jsx)(e.code,{children:"AccountId"})," which will store any balance managed by the\nsmart contract and allow us to interact with the contract."]}),"\n",(0,o.jsx)(e.p,{children:"Now a screen displays the information that represents our smart contract. We are going to\ninstantiate a copy of the smart contract:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Accept the default options for the contract ",(0,o.jsx)(e.strong,{children:"Deployment Constructor"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["Accept the default options ",(0,o.jsx)(e.strong,{children:"Max Gas Allowed"})," of ",(0,o.jsx)(e.code,{children:"200000"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["Click on ",(0,o.jsx)(e.code,{children:"Next"})]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Flipper Instantiate Contract 02",src:n(39166).A+"",width:"2588",height:"1778"})}),"\n",(0,o.jsxs)(e.p,{children:["The transaction is now queued, review your data and click ",(0,o.jsx)(e.strong,{children:"Upload and Instantiate"})," or go back and modify your inputs."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Flipper Instantiate Contract 03",src:n(6517).A+"",width:"2396",height:"1778"})}),"\n",(0,o.jsxs)(e.p,{children:["When you click ",(0,o.jsx)(e.strong,{children:"Upload and Instantiate"})," you should see\nthe extrinsic ",(0,o.jsx)(e.code,{children:"instantiateWithCode"})," is processing, and a flurry of events appear including the\ncreation of a new account (",(0,o.jsx)(e.code,{children:"system.NewAccount"}),") and the instantiation of the contract\n(",(0,o.jsx)(e.code,{children:"contracts.Instantiated"}),").\nYou will be redirected to a new page, where you can interact with the newly created contract instance."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Flipper Instantiate Success",src:n(37420).A+"",width:"2396",height:"1778"})}),"\n",(0,o.jsxs)(e.h2,{id:"using-cargo-contract",children:["Using ",(0,o.jsx)(e.code,{children:"cargo-contract"})]}),"\n",(0,o.jsxs)(e.p,{children:["Contracts can be deployed via the command-line as well. With ",(0,o.jsx)(e.code,{children:"cargo-contract"}),"\nit's just a simple sequence of:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"cargo contract build\ncargo contract upload --suri //Alice\ncargo contract instantiate --suri //Alice --args true\n"})})]})}function h(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},57479:(t,e,n)=>{n.d(e,{A:()=>c});const c=n.p+"assets/images/contracts-ui-0-2c4dfe8d0bd5999bbd3a7c18c04b4210.png"},39166:(t,e,n)=>{n.d(e,{A:()=>c});const c=n.p+"assets/images/contracts-ui-1-1182917a65f2198560ea8769359806bb.png"},6517:(t,e,n)=>{n.d(e,{A:()=>c});const c=n.p+"assets/images/contracts-ui-2-5a1361c41163cb95b9bb942c7a2a9cf8.png"},37420:(t,e,n)=>{n.d(e,{A:()=>c});const c=n.p+"assets/images/contracts-ui-3-55fe9a77f09f39f3d2445267313a873a.png"},94438:(t,e,n)=>{n.d(e,{A:()=>c});const c=n.p+"assets/images/rocket-f84f12aebb0ace4540652b1c64f8e137.svg"},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>i});var c=n(96540);const o={},a=c.createContext(o);function s(t){const e=c.useContext(a);return c.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),c.createElement(a.Provider,{value:e},t.children)}}}]);
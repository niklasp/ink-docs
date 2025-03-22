"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[0],{36484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"basics/cross-contract-calling","title":"Cross-Contract Calling","description":"Cross Contract Title Picture","source":"@site/versioned_docs/version-v6/basics/cross-contract-calling.md","sourceDirName":"basics","slug":"/basics/cross-contract-calling","permalink":"/ink-docs/docs/v6/basics/cross-contract-calling","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/basics/cross-contract-calling.md","tags":[],"version":"v6","frontMatter":{"title":"Cross-Contract Calling","slug":"/basics/cross-contract-calling","hide_title":true},"sidebar":"reference","previous":{"title":"Gas","permalink":"/ink-docs/docs/v6/basics/gas"},"next":{"title":"Upgradeable Contracts","permalink":"/ink-docs/docs/v6/basics/upgradeable-contracts"}}');var c=t(74848),s=t(28453);const i={title:"Cross-Contract Calling",slug:"/basics/cross-contract-calling",hide_title:!0},l="Cross-Contract Calls",o={},a=[{value:"Contract References",id:"contract-references",level:2},{value:"<code>BasicContractRef</code> walkthrough",id:"basiccontractref-walkthrough",level:3},{value:"Prepping <code>OtherContract</code>",id:"prepping-othercontract",level:4},{value:"Importing <code>OtherContract</code>",id:"importing-othercontract",level:4},{value:"Wiring <code>BasicContractRef</code>",id:"wiring-basiccontractref",level:4},{value:"Uploading <code>OtherContract</code>",id:"uploading-othercontract",level:4},{value:"Instantiating <code>OtherContract</code> through <code>BasicContractRef</code>",id:"instantiating-othercontract-through-basiccontractref",level:4},{value:"Calling with <code>OtherContract</code> through <code>BasicContractRef</code>",id:"calling-with-othercontract-through-basiccontractref",level:4},{value:"Builders",id:"builders",level:2},{value:"CreateBuilder",id:"createbuilder",level:3},{value:"CallBuilder",id:"callbuilder",level:3},{value:"CallBuilder: Call",id:"callbuilder-call",level:4},{value:"CallBuilder: Delegate Call",id:"callbuilder-delegate-call",level:4},{value:"Builder Error Handling",id:"builder-error-handling",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"Cross Contract Title Picture",src:t(25345).A+"",width:"1600",height:"500"})}),"\n",(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"cross-contract-calls",children:"Cross-Contract Calls"})}),"\n",(0,c.jsx)(n.p,{children:"In ink! contracts it is possible to call messages and constructors of other\non-chain contracts."}),"\n",(0,c.jsx)(n.p,{children:"There are a few approaches to performing these cross-contract calls in ink!:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["Contract references (i.e ",(0,c.jsx)(n.code,{children:"ContractRef"}),")"]}),"\n",(0,c.jsxs)(n.li,{children:["Builders (i.e ",(0,c.jsx)(n.code,{children:"CreateBuilder"})," and ",(0,c.jsx)(n.code,{children:"CallBuilder"}),")"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Contract references can only be used for cross-contract calls to other ink! contracts.\nBuilders can be used to issue cross-contract calls to any RISC-V contract, such as those\nwritten in ink! or Solidity."}),"\n",(0,c.jsx)(n.h2,{id:"contract-references",children:"Contract References"}),"\n",(0,c.jsx)(n.p,{children:"Contract references refer to structs that are generated by the ink! code generation for the\npurposes of cross-contract calls."}),"\n",(0,c.jsx)(n.p,{children:"They give developers a type-safe way of interacting with a contract."}),"\n",(0,c.jsx)(n.p,{children:"A downside to using them is that you need to import the contract you want to call as a\ndependency of your own contract."}),"\n",(0,c.jsxs)(n.p,{children:["If you want to interact with a contract that is already on-chain you will need to use the\n",(0,c.jsx)(n.a,{href:"#builders",children:(0,c.jsx)(n.code,{children:"Builders"})})," approach instead."]}),"\n",(0,c.jsxs)(n.h3,{id:"basiccontractref-walkthrough",children:[(0,c.jsx)(n.code,{children:"BasicContractRef"})," walkthrough"]}),"\n",(0,c.jsxs)(n.p,{children:["We will walk through the ",(0,c.jsx)(n.a,{href:"https://github.com/use-ink/ink-examples/tree/master/cross-contract-calls",children:(0,c.jsx)(n.code,{children:"cross-contract-calls"})}),"\nexample in order to demonstrate how cross-contract calls using contract references work."]}),"\n",(0,c.jsx)(n.p,{children:"The general workflow will be:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["Prepare ",(0,c.jsx)(n.code,{children:"OtherContract"})," to be imported to other contracts"]}),"\n",(0,c.jsxs)(n.li,{children:["Import ",(0,c.jsx)(n.code,{children:"OtherContract"})," into ",(0,c.jsx)(n.code,{children:"BasicContractRef"})]}),"\n",(0,c.jsxs)(n.li,{children:["Upload ",(0,c.jsx)(n.code,{children:"OtherContract"})," on-chain"]}),"\n",(0,c.jsxs)(n.li,{children:["Instantiate ",(0,c.jsx)(n.code,{children:"OtherContract"})," using ",(0,c.jsx)(n.code,{children:"BasicContractRef"})]}),"\n",(0,c.jsxs)(n.li,{children:["Call ",(0,c.jsx)(n.code,{children:"OtherContract"})," using ",(0,c.jsx)(n.code,{children:"BasicContractRef"})]}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"prepping-othercontract",children:["Prepping ",(0,c.jsx)(n.code,{children:"OtherContract"})]}),"\n",(0,c.jsxs)(n.p,{children:["We need to make sure that the ink! generated contract ref for ",(0,c.jsx)(n.code,{children:"OtherContract"})," is\navailable to other pieces of code."]}),"\n",(0,c.jsx)(n.p,{children:"We do this by re-exporting the contract reference as follows:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-rust",children:"pub use self::other_contract::OtherContractRef;\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"importing-othercontract",children:["Importing ",(0,c.jsx)(n.code,{children:"OtherContract"})]}),"\n",(0,c.jsxs)(n.p,{children:["Next, we need to import ",(0,c.jsx)(n.code,{children:"OtherContract"})," to our ",(0,c.jsx)(n.code,{children:"BasicContractRef"})," contract."]}),"\n",(0,c.jsxs)(n.p,{children:["First, we add the following lines to our ",(0,c.jsx)(n.code,{children:"Cargo.toml"})," file:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-toml",children:'# In `basic_contract_ref/Cargo.toml`\n\nother_contract = { path = "other_contract", default-features = false, features = ["ink-as-dependency"] }\n\n# -- snip --\n\n[features]\ndefault = ["std"]\nstd = [\n    "ink/std",\n    # -- snip --\n    "other_contract/std",\n]\n'})}),"\n",(0,c.jsx)(n.p,{children:"Two things to note here:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["If we don't specify the ",(0,c.jsx)(n.code,{children:"ink-as-dependency"})," feature we will end up with linking\nerrors."]}),"\n",(0,c.jsxs)(n.li,{children:["If we don't enable the ",(0,c.jsx)(n.code,{children:"std"})," feature for ",(0,c.jsx)(n.code,{children:"std"})," builds we will not be able to generate\nour contract's metadata."]}),"\n"]}),"\n",(0,c.jsxs)(n.h4,{id:"wiring-basiccontractref",children:["Wiring ",(0,c.jsx)(n.code,{children:"BasicContractRef"})]}),"\n",(0,c.jsxs)(n.p,{children:["First, we will import the contract reference of ",(0,c.jsx)(n.code,{children:"OtherContract"}),", and declare the\nreference to be part of our storage struct."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-rust",children:"// In `basic_contract_ref/lib.rs`\n\nuse other_contract::OtherContractRef;\n\n#[ink(storage)]\npub struct BasicContractRef {\n    other_contract: OtherContractRef,\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Next, we to add a way to instantiate ",(0,c.jsx)(n.code,{children:"OtherContract"}),". We do this from the constructor of our\nof contract."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-rust",children:"// In `basic_contract_ref/lib.rs`\n\n#[ink(constructor)]\npub fn new(other_contract_code_hash: Hash) -> Self {\n    let other_contract = OtherContractRef::new(true)\n        .code_hash(other_contract_code_hash)\n        .endowment(0)\n        .salt_bytes([0xDE, 0xAD, 0xBE, 0xEF])\n        .instantiate();\n\n    Self { other_contract }\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Note that for instantiating a contract we need access to the uploaded on-chain\n",(0,c.jsx)(n.code,{children:"code_hash"}),". We will get back to this later."]}),"\n",(0,c.jsxs)(n.p,{children:["Once we have an instantiated reference to ",(0,c.jsx)(n.code,{children:"OtherContract"})," we can call its messages just\nlike normal Rust methods!"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-rust",children:"// In `basic_contract_ref/lib.rs`\n\n#[ink(message)]\npub fn flip_and_get(&mut self) -> bool {\n    self.other_contract.flip();\n    self.other_contract.get()\n}\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"uploading-othercontract",children:["Uploading ",(0,c.jsx)(n.code,{children:"OtherContract"})]}),"\n",(0,c.jsxs)(n.p,{children:["You will need the ",(0,c.jsx)(n.a,{href:"https://github.com/use-ink/ink-node",children:(0,c.jsx)(n.code,{children:"ink-node"})}),"\nrunning in the background for the next steps."]}),"\n",(0,c.jsxs)(n.p,{children:["We can upload ",(0,c.jsx)(n.code,{children:"OtherContract"})," using ",(0,c.jsx)(n.code,{children:"cargo-contract"})," as follows:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"# In the `basic_contract_ref` directory\ncargo contract build --manifest-path other_contract/Cargo.toml\ncargo contract upload --manifest-path other_contract/Cargo.toml --suri //Alice\n"})}),"\n",(0,c.jsxs)(n.p,{children:["If successful, this will output in a ",(0,c.jsx)(n.code,{children:"code_hash"})," similar to:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:'Code hash "0x74a610235df4ff0161f0247e4c9d73934b70c1520d24ef843f9df9fcc3e63caa"\n'})}),"\n",(0,c.jsxs)(n.p,{children:["We can then use this ",(0,c.jsx)(n.code,{children:"code_hash"})," to instantiate our ",(0,c.jsx)(n.code,{children:"BasicContractRef"})," contract."]}),"\n",(0,c.jsxs)(n.h4,{id:"instantiating-othercontract-through-basiccontractref",children:["Instantiating ",(0,c.jsx)(n.code,{children:"OtherContract"})," through ",(0,c.jsx)(n.code,{children:"BasicContractRef"})]}),"\n",(0,c.jsxs)(n.p,{children:["We will first need to instantiate ",(0,c.jsx)(n.code,{children:"BasicContractRef"}),"."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"# In the `basic_contract_ref` directory\ncargo contract build\ncargo contract instantiate \\\n    --constructor new \\\n    --args 0x74a610235df4ff0161f0247e4c9d73934b70c1520d24ef843f9df9fcc3e63caa \\\n    --suri //Alice --salt $(date +%s)\n"})}),"\n",(0,c.jsxs)(n.p,{children:["If successful, this will output in a contract address for ",(0,c.jsx)(n.code,{children:"BasicContractRef"})," similar to:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"Contract 5CWz6Xnivp9PSoZq6qPRP8xVAShZgtNVGTCLCsq3qzqPV7Rq\n"})}),"\n",(0,c.jsxs)(n.h4,{id:"calling-with-othercontract-through-basiccontractref",children:["Calling with ",(0,c.jsx)(n.code,{children:"OtherContract"})," through ",(0,c.jsx)(n.code,{children:"BasicContractRef"})]}),"\n",(0,c.jsxs)(n.p,{children:["Finally, we can call the ",(0,c.jsx)(n.code,{children:"OtherContract"})," methods through ",(0,c.jsx)(n.code,{children:"BasicContractRef"})," as follows:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"cargo contract call --contract 5CWz6Xnivp9PSoZq6qPRP8xVAShZgtNVGTCLCsq3qzqPV7Rq \\\n    --message flip_and_get --suri //Alice --dry-run\n"})}),"\n",(0,c.jsx)(n.p,{children:"Which will result in something like:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"Result Success!\nReverted false\nData Ok(true)\n"})}),"\n",(0,c.jsx)(n.h2,{id:"builders",children:"Builders"}),"\n",(0,c.jsxs)(n.p,{children:["The\n",(0,c.jsx)(n.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/call/struct.CreateBuilder.html",children:(0,c.jsx)(n.code,{children:"CreateBuilder"})}),"\nand\n",(0,c.jsx)(n.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/call/struct.CallBuilder.html",children:(0,c.jsx)(n.code,{children:"CallBuilder"})}),"\noffer low-level, flexible interfaces for performing cross-contract calls. The\n",(0,c.jsx)(n.code,{children:"CreateBuilder"})," allows you to instantiate already uploaded contracts, and the\n",(0,c.jsx)(n.code,{children:"CallBuilder"})," allows you to call messages on instantiated contracts."]}),"\n",(0,c.jsx)(n.h3,{id:"createbuilder",children:"CreateBuilder"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"CreateBuilder"})," offers an an easy way for you to ",(0,c.jsx)(n.strong,{children:"instantiate"})," a contract. Note\nthat you'll still need this contract to have been previously uploaded."]}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["For a refresher on the difference between ",(0,c.jsx)(n.code,{children:"upload"})," and ",(0,c.jsx)(n.code,{children:"instantiate"}),"\n",(0,c.jsx)(n.a,{href:"/ink-docs/docs/v6/getting-started/deploy-your-contract",children:"see here"}),"."]})}),"\n",(0,c.jsxs)(n.p,{children:["In order to instantiate a contract you need a reference to your contract, just like in\n",(0,c.jsx)(n.a,{href:"#contract-references",children:"the previous section"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Below is an example of how to instantiate a contract using the ",(0,c.jsx)(n.code,{children:"CreateBuilder"}),". We will:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["instantiate the uploaded contract with a ",(0,c.jsx)(n.code,{children:"code_hash"})," of ",(0,c.jsx)(n.code,{children:"0x4242..."})]}),"\n",(0,c.jsxs)(n.li,{children:["with no gas limit specified (",(0,c.jsx)(n.code,{children:"0"})," means unlimited)"]}),"\n",(0,c.jsxs)(n.li,{children:["sending ",(0,c.jsx)(n.code,{children:"10"})," units of transferred value to the contract instance"]}),"\n",(0,c.jsxs)(n.li,{children:["instantiating with the ",(0,c.jsx)(n.code,{children:"new"})," constructor"]}),"\n",(0,c.jsxs)(n.li,{children:["with the following arguments","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["a ",(0,c.jsx)(n.code,{children:"u8"})," with value ",(0,c.jsx)(n.code,{children:"42"})]}),"\n",(0,c.jsxs)(n.li,{children:["a ",(0,c.jsx)(n.code,{children:"bool"})," with value ",(0,c.jsx)(n.code,{children:"true"})]}),"\n",(0,c.jsxs)(n.li,{children:["an array of 32 ",(0,c.jsx)(n.code,{children:"u8"})," with value ",(0,c.jsx)(n.code,{children:"0x10"})]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["generate the address (",(0,c.jsx)(n.code,{children:"AccountId"}),") using the specified ",(0,c.jsx)(n.code,{children:"salt_bytes"})]}),"\n",(0,c.jsxs)(n.li,{children:["and we expect it to return a value of type ",(0,c.jsx)(n.code,{children:"MyContractRef"})]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-rust",children:'use contract::MyContractRef;\nlet my_contract: MyContractRef = build_create::<MyContractRef>()\n    .instantiate_v1()\n    .code_hash(Hash::from([0x42; 32]))\n    .gas_limit(0)\n    .endowment(10)\n    .exec_input(\n        ExecutionInput::new(Selector::new(ink::selector_bytes!("new")))\n            .push_arg(42)\n            .push_arg(true)\n            .push_arg(&[0x10u8; 32])\n    )\n    .salt_bytes(&[0xDE, 0xAD, 0xBE, 0xEF])\n    .returns::<MyContractRef>()\n    .instantiate();\n'})}),"\n",(0,c.jsxs)(n.p,{children:["Since ",(0,c.jsx)(n.code,{children:"CreateBuilder::instantiate()"})," returns a contract reference, we can use this\ncontract reference to call messages just like in the\n",(0,c.jsx)(n.a,{href:"#contract-references",children:"previous section"}),"."]}),"\n",(0,c.jsx)(n.h3,{id:"callbuilder",children:"CallBuilder"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"CallBuilder"})," gives you a couple of ways to call messages from other contracts. There\nare two main approaches to this: ",(0,c.jsx)(n.code,{children:"Call"}),"s and ",(0,c.jsx)(n.code,{children:"DelegateCall"}),"s. We will briefly cover both\nhere."]}),"\n",(0,c.jsx)(n.h4,{id:"callbuilder-call",children:"CallBuilder: Call"}),"\n",(0,c.jsxs)(n.p,{children:["When using ",(0,c.jsx)(n.code,{children:"Call"}),"s the ",(0,c.jsx)(n.code,{children:"CallBuilder"})," requires an already instantiated contract."]}),"\n",(0,c.jsxs)(n.p,{children:["We saw an example of how to use the ",(0,c.jsx)(n.code,{children:"CreateBuilder"})," to instantiate contracts in the\n",(0,c.jsx)(n.a,{href:"#contract-references",children:"previous section"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["Below is an example of how to call a contract using the ",(0,c.jsx)(n.code,{children:"CallBuilder"}),". We will:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["make a regular ",(0,c.jsx)(n.code,{children:"Call"})]}),"\n",(0,c.jsxs)(n.li,{children:["to a contract at the address ",(0,c.jsx)(n.code,{children:"0x4242..."})]}),"\n",(0,c.jsxs)(n.li,{children:["with no gas limit specified (",(0,c.jsx)(n.code,{children:"0"})," means unlimited)"]}),"\n",(0,c.jsxs)(n.li,{children:["sending ",(0,c.jsx)(n.code,{children:"10"})," units of transferred value to the contract instance"]}),"\n",(0,c.jsxs)(n.li,{children:["calling the ",(0,c.jsx)(n.code,{children:"flip"})," message"]}),"\n",(0,c.jsxs)(n.li,{children:["with the following arguments","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["a ",(0,c.jsx)(n.code,{children:"u8"})," with value ",(0,c.jsx)(n.code,{children:"42"})]}),"\n",(0,c.jsxs)(n.li,{children:["a ",(0,c.jsx)(n.code,{children:"bool"})," with value ",(0,c.jsx)(n.code,{children:"true"})]}),"\n",(0,c.jsxs)(n.li,{children:["an array of 32 ",(0,c.jsx)(n.code,{children:"u8"})," with value ",(0,c.jsx)(n.code,{children:"0x10"})]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["and we expect it to return a value of type ",(0,c.jsx)(n.code,{children:"bool"})]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-rust",children:'let my_return_value = build_call::<DefaultEnvironment>()\n    .call(AccountId::from([0x42; 32]))\n    .call_v1()\n    .gas_limit(0)\n    .transferred_value(10)\n    .exec_input(\n        ExecutionInput::new(Selector::new(ink::selector_bytes!("flip")))\n            .push_arg(42u8)\n            .push_arg(true)\n            .push_arg(&[0x10u8; 32])\n    )\n    .returns::<bool>()\n    .invoke();\n'})}),"\n",(0,c.jsx)(n.p,{children:"Note:"}),"\n",(0,c.jsxs)(n.p,{children:["Message arguments will be encoded in the order in which they are provided to the ",(0,c.jsx)(n.code,{children:"CallBuilder"}),".\nThis means that they should match the order (and type) they appear in the function\nsignature."]}),"\n",(0,c.jsx)(n.p,{children:"You will not be able to get any feedback about this at compile time. You will only\nfind out your call failed at runtime!"}),"\n",(0,c.jsx)(n.h4,{id:"callbuilder-delegate-call",children:"CallBuilder: Delegate Call"}),"\n",(0,c.jsxs)(n.p,{children:["You can also use the ",(0,c.jsx)(n.code,{children:"CallBuilder"})," to craft calls using ",(0,c.jsx)(n.code,{children:"DelegateCall"})," mechanics.\nIf you need a refresher on what delegate calls are,\n",(0,c.jsx)(n.a,{href:"https://medium.com/coinmonks/delegatecall-calling-another-contract-function-in-solidity-b579f804178c",children:"see this article"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["In the case of ",(0,c.jsx)(n.code,{children:"DelegateCall"}),"s, we don't require an already instantiated contract.\nWe only need the ",(0,c.jsx)(n.code,{children:"code_hash"})," of an uploaded contract."]}),"\n",(0,c.jsxs)(n.p,{children:["Below is an example of how to delegate call a contract using the ",(0,c.jsx)(n.code,{children:"CallBuilder"}),". We will:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["make a ",(0,c.jsx)(n.code,{children:"DelegateCall"})]}),"\n",(0,c.jsxs)(n.li,{children:["to a contract with a ",(0,c.jsx)(n.code,{children:"code_hash"})," (not contract address!) of ",(0,c.jsx)(n.code,{children:"0x4242..."})]}),"\n",(0,c.jsxs)(n.li,{children:["calling the ",(0,c.jsx)(n.code,{children:"flip"})," message"]}),"\n",(0,c.jsxs)(n.li,{children:["with the following arguments","\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["a ",(0,c.jsx)(n.code,{children:"u8"})," with value ",(0,c.jsx)(n.code,{children:"42"})]}),"\n",(0,c.jsxs)(n.li,{children:["a ",(0,c.jsx)(n.code,{children:"bool"})," with value ",(0,c.jsx)(n.code,{children:"true"})]}),"\n",(0,c.jsxs)(n.li,{children:["an array of 32 ",(0,c.jsx)(n.code,{children:"u8"})," with value ",(0,c.jsx)(n.code,{children:"0x10"})]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["and we expect it to return an ",(0,c.jsx)(n.code,{children:"i32"})]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-rust",children:'let my_return_value = build_call::<DefaultEnvironment>()\n    .delegate(ink::primitives::Hash::from([0x42; 32]))\n    .exec_input(\n        ExecutionInput::new(Selector::new(ink::selector_bytes!("flip")))\n            .push_arg(42u8)\n            .push_arg(true)\n            .push_arg(&[0x10u8; 32])\n    )\n    .returns::<i32>()\n    .invoke();\n'})}),"\n",(0,c.jsx)(n.h3,{id:"builder-error-handling",children:"Builder Error Handling"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"CreateBuilder"})," and the ",(0,c.jsx)(n.code,{children:"CallBuilder"})," both offer error handling with the\n",(0,c.jsx)(n.code,{children:"try_instantiate()"})," and ",(0,c.jsx)(n.code,{children:"try_invoke()"})," methods respectively."]}),"\n",(0,c.jsx)(n.p,{children:"These allow contract developers to handle two types of errors:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"Errors from the underlying execution environment (e.g the Contracts pallet)"}),"\n",(0,c.jsxs)(n.li,{children:["Error from the programming language (e.g ",(0,c.jsx)(n.code,{children:"LangError"}),"s)"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["See the documentation for\n",(0,c.jsx)(n.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/call/struct.CreateBuilder.html#method.try_instantiate",children:(0,c.jsx)(n.code,{children:"try_instantiate"})}),",\n",(0,c.jsx)(n.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/call/struct.CallBuilder.html#method.try_invoke-2",children:(0,c.jsx)(n.code,{children:"try_invoke"})}),",\n",(0,c.jsx)(n.a,{href:"https://docs.rs/ink_env/5.0.0/ink_env/enum.Error.html",children:(0,c.jsx)(n.code,{children:"ink::env::Error"})}),"\nand\n",(0,c.jsx)(n.a,{href:"https://docs.rs/ink/5.0.0/ink/enum.LangError.html",children:(0,c.jsx)(n.code,{children:"ink::LangError"})}),"\nfor more details on proper error handling."]}),"\n",(0,c.jsxs)(n.admonition,{type:"tip",children:[(0,c.jsxs)(n.p,{children:["Because the ",(0,c.jsx)(n.code,{children:"CallBuilder"})," requires only a contract's ",(0,c.jsx)(n.code,{children:"AccountId"})," and message ",(0,c.jsx)(n.code,{children:"selector"}),",\nwe can call Solidity contracts compiled using ",(0,c.jsx)(n.a,{href:"https://github.com/paritytech/revive",children:"Parity's revive compiler"}),"\ncompiler and deployed to a chain that supports the ",(0,c.jsx)(n.code,{children:"pallet-revive"}),"."]}),(0,c.jsxs)(n.p,{children:["TODO update link below to fitting example in the ",(0,c.jsx)(n.code,{children:"ink-examples"})," repo\nSee ",(0,c.jsx)(n.a,{href:"https://github.com/xermicus/call_solidity",children:"here"})," for an example of how to do that."]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},25345:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/cross-contract-7b46505ded2e3cdbc224075cf758f15a.svg"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const c={},s=r.createContext(c);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
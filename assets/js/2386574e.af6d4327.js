"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3681],{15898:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"faq/migrating-from-ink-3-to-4","title":"Migrating from ink! 3.x to 4.0","description":"Migration 3.x To 4.0 Title Picture","source":"@site/versioned_docs/version-v4/faq/migrating-from-ink-3-to-4.md","sourceDirName":"faq","slug":"/faq/migrating-from-ink-3-to-4","permalink":"/ink-docs/docs/v4/faq/migrating-from-ink-3-to-4","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v4/faq/migrating-from-ink-3-to-4.md","tags":[],"version":"v4","frontMatter":{"title":"Migrating from ink! 3.x to 4.0","slug":"/faq/migrating-from-ink-3-to-4"},"sidebar":"reference","previous":{"title":"Frequently Asked Questions","permalink":"/ink-docs/docs/v4/faq"},"next":{"title":"ink!","permalink":"/ink-docs/docs/v4/brand-assets/ink"}}');var s=i(74848),r=i(28453);const o={title:"Migrating from ink! 3.x to 4.0",slug:"/faq/migrating-from-ink-3-to-4"},c=void 0,a={},l=[{value:"Compatibility",id:"compatibility",level:2},{value:"<code>cargo-contract</code> 2.0",id:"cargo-contract-20",level:2},{value:"Rust <code>stable</code> instead of <code>nightly</code>",id:"rust-stable-instead-of-nightly",level:2},{value:"New entrance <code>ink</code> crate",id:"new-entrance-ink-crate",level:2},{value:"Migration",id:"migration",level:3},{value:"Storage  API + Layout",id:"storage--api--layout",level:2},{value:"Migration",id:"migration-1",level:3},{value:"Removal of <code>wee-alloc</code> support",id:"removal-of-wee-alloc-support",level:2},{value:"Removal of <code>eth_compatibility</code> crate",id:"removal-of-eth_compatibility-crate",level:2},{value:"<code>ink_storage::Mapping</code>",id:"ink_storagemapping",level:2},{value:"Storage functions in <code>ink_env</code>",id:"storage-functions-in-ink_env",level:2},{value:"Removal of <code>ink_env::random</code> function",id:"removal-of-ink_envrandom-function",level:2},{value:"Constructors can now return <code>Result&lt;Self, MyContractError&gt;</code>",id:"constructors-can-now-return-resultself-mycontracterror",level:2},{value:"Chain extension&#39;s <code>returns_result</code> removed",id:"chain-extensions-returns_result-removed",level:2},{value:"Contract Metadata (ABI)",id:"contract-metadata-abi",level:2},{value:"Add support for language level errors (<code>LangError</code>)",id:"add-support-for-language-level-errors-langerror",level:3},{value:"Version field",id:"version-field",level:3},{value:"The Storage Layout (<code>storage</code>)",id:"the-storage-layout-storage",level:3},{value:"Removal of <code>AccountId</code> <code>Default</code> implementation",id:"removal-of-accountid-default-implementation",level:2},{value:"Updates to the <code>CallBuilder</code> and <code>CreateBuilder</code> APIs",id:"updates-to-the-callbuilder-and-createbuilder-apis",level:2},{value:"Removal of <code>[lib.crate-type]</code> and <code>[lib.name]</code> from contract manifest",id:"removal-of-libcrate-type-and-libname-from-contract-manifest",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Migration 3.x To 4.0 Title Picture",src:i(87235).A+"",width:"1600",height:"500"})}),"\n",(0,s.jsx)(n.p,{children:"We've made a couple of breaking changes from ink! 3.x to ink! 4.0.\nOn this page we outline how you can migrate existing clients and\ncontracts from 3.x to 4.0."}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:"This migration guide is only for your code base!"}),(0,s.jsx)(n.p,{children:"If you have an existing contract on-chain you cannot just\nupgrade the code on-chain \u2012 you also have to migrate your data,\nsince the way ink! 4.0 stores data and reads it (i.e. the storage\nlayout) changes from ink! 3.x to 4.0."})]}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsx)(n.p,{children:"ink! 4.0 is compatible with:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Stable Rust >= 1.63.0"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scale"})," >=3"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scale-info"})," >= 2.3"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pallet-contracts"})," >= ",(0,s.jsx)(n.code,{children:"polkadot-v0.9.37"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"substrate-contracts-node"})," >= ",(0,s.jsx)(n.code,{children:"v0.24.0"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"polkadot-js/api"})," and ",(0,s.jsx)(n.code,{children:"polkadot-js/api-contract"})," >= 9.10.2"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"cargo-contract-20",children:[(0,s.jsx)(n.code,{children:"cargo-contract"})," 2.0"]}),"\n",(0,s.jsxs)(n.p,{children:["Together with ink! 4.0 we've released ",(0,s.jsx)(n.code,{children:"cargo-contract"})," 2.0.\nYou have to use this latest version of ",(0,s.jsx)(n.code,{children:"cargo-contract"})," for ink! 4.0\ncontracts.\nYou can upgrade via:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"cargo install cargo-contract --force --version 2\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Make sure that e.g. your CI also uses ",(0,s.jsx)(n.code,{children:"cargo-contract"})," 2 with ink! 4.\nIf you have wrapper scripts around ",(0,s.jsx)(n.code,{children:"cargo-contract"})," you should\nensure that this version is enforced, otherwise users will get an error."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cargo-contract"})," no longer requires ",(0,s.jsx)(n.code,{children:"binaryen"})," or ",(0,s.jsx)(n.code,{children:"wasm-opt"})," as an\nexternal dependency. We required those because of ",(0,s.jsx)(n.code,{children:"wasm-opt"})," tool\n(which is part of ",(0,s.jsx)(n.code,{children:"binaryen"}),"). Fortunately we were able to find a way of\ninstalling ",(0,s.jsx)(n.code,{children:"wasm-opt"})," now as part of the ",(0,s.jsx)(n.code,{children:"cargo-contract"})," installation\nprocess."]})}),"\n",(0,s.jsxs)(n.h2,{id:"rust-stable-instead-of-nightly",children:["Rust ",(0,s.jsx)(n.code,{children:"stable"})," instead of ",(0,s.jsx)(n.code,{children:"nightly"})]}),"\n",(0,s.jsxs)(n.p,{children:["ink! 4.0 and ",(0,s.jsx)(n.code,{children:"cargo-contract"})," use ",(0,s.jsx)(n.code,{children:"stable"})," Rust now.\nThis means no more ",(0,s.jsx)(n.code,{children:"cargo +nightly contract"})," is required, you\ncan just use a stable Rust toolchain now (>= Rust 1.63)."]}),"\n",(0,s.jsxs)(n.h2,{id:"new-entrance-ink-crate",children:["New entrance ",(0,s.jsx)(n.code,{children:"ink"})," crate"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ink_lang"})," crate has been replaced in ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1223",children:"#1223"}),"\nby a new top level ",(0,s.jsx)(n.code,{children:"ink"})," crate. All existing sub-crates are reexported and should be used via\nthe new ",(0,s.jsx)(n.code,{children:"ink"})," crate, so e.g. ",(0,s.jsx)(n.code,{children:"ink::env"})," instead of ",(0,s.jsx)(n.code,{children:"ink_env"}),". Contract authors should now import\nthe top level ",(0,s.jsx)(n.code,{children:"ink"})," crate instead of the individual crates."]}),"\n",(0,s.jsx)(n.h3,{id:"migration",children:"Migration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In ",(0,s.jsx)(n.code,{children:"Cargo.toml"})," Replace all individual ",(0,s.jsx)(n.code,{children:"ink_*"})," crate dependencies with the ",(0,s.jsx)(n.code,{children:"ink"})," crate."]}),"\n",(0,s.jsxs)(n.li,{children:["In the contract source:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Remove the commonly used ",(0,s.jsx)(n.code,{children:"use ink_lang as ink"})," idiom."]}),"\n",(0,s.jsxs)(n.li,{children:["Replace all usages of individual crates with reexports, e.g. ",(0,s.jsx)(n.code,{children:"ink_env"})," \u279c ",(0,s.jsx)(n.code,{children:"ink::env"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"storage--api--layout",children:"Storage  API + Layout"}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1331",children:"#1331"})," the way ",(0,s.jsx)(n.code,{children:"ink!"})," reads and writes\nto a contract's storage changed. Storage keys are generated at compile-time, and user facing\nabstractions which determine how contract data is laid out in storage are different now."]}),"\n",(0,s.jsx)(n.h3,{id:"migration-1",children:"Migration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Initialize ",(0,s.jsx)(n.code,{children:"Mapping"})," fields with ",(0,s.jsx)(n.code,{children:"Mapping::default()"})," instead of  ",(0,s.jsx)(n.code,{children:"ink_lang::utils::initialize_contract"})," in\nconstructors. See ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs",children:(0,s.jsx)(n.code,{children:"erc20"})})," and other examples which use a ",(0,s.jsx)(n.code,{children:"Mapping"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SpreadAllocate"}),", ",(0,s.jsx)(n.code,{children:"SpreadLayout"}),", ",(0,s.jsx)(n.code,{children:"PackedLayout"}),", ",(0,s.jsx)(n.code,{children:"PackedAllocate"})," have been removed."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"removal-of-wee-alloc-support",children:["Removal of ",(0,s.jsx)(n.code,{children:"wee-alloc"})," support"]}),"\n",(0,s.jsxs)(n.p,{children:["ink! uses a bump allocator by default, additionally we supported another allocator\n(",(0,s.jsx)(n.code,{children:"wee-alloc"}),") through a feature flag. ",(0,s.jsx)(n.code,{children:"wee-alloc"})," is no longer maintained and\nwe removed support for it in ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1403",children:"#1403"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"removal-of-eth_compatibility-crate",children:["Removal of ",(0,s.jsx)(n.code,{children:"eth_compatibility"})," crate"]}),"\n",(0,s.jsxs)(n.p,{children:["As part of ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1233",children:"#1233"}),"\nthe ",(0,s.jsx)(n.code,{children:"eth_compatibility"})," crate was removed. The ",(0,s.jsx)(n.code,{children:"ecdsa_to_eth_address()"}),"\nfunction from it can now be found ",(0,s.jsxs)(n.a,{href:"https://docs.rs/ink_env/4.0.0/ink_env/fn.ecdsa_to_eth_address.html",children:["in the ",(0,s.jsx)(n.code,{children:"ink_env"})," crate"]}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"ink_env::ecdsa_to_eth_address(&pub_key, &mut output);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ink_storagemapping",children:(0,s.jsx)(n.code,{children:"ink_storage::Mapping"})}),"\n",(0,s.jsxs)(n.p,{children:["The function signature of ",(0,s.jsx)(n.code,{children:"Mapping::insert(key, val)"})," changed to\n",(0,s.jsx)(n.code,{children:"Mapping::insert(key, val) -> Option<u32>"}),".\nThe return value is the size of the pre-existing value at the specified key if any (in bytes)."]}),"\n",(0,s.jsx)(n.p,{children:"Two new useful functions were added:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Mapping.html#method.contains",children:(0,s.jsx)(n.code,{children:"Mapping::contains(key)"})}),"\nin ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1224",children:"#1224"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Mapping.html#method.take",children:(0,s.jsx)(n.code,{children:"Mapping::take()"})}),"\nto get a value while removing it from storage in ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1461",children:"#1461"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In case you were working around those two functions you can now\nuse them directly; they are more gas-efficient than e.g. executing\na ",(0,s.jsx)(n.code,{children:"get(key).is_none()"})," instead of ",(0,s.jsx)(n.code,{children:"contains(key)"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"storage-functions-in-ink_env",children:["Storage functions in ",(0,s.jsx)(n.code,{children:"ink_env"})]}),"\n",(0,s.jsxs)(n.p,{children:["As part of ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1224",children:"#1224"})," the return type\nof ",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_env/4.0.0/ink_env/fn.set_contract_storage.html",children:(0,s.jsx)(n.code,{children:"ink_env::set_contract_storage()"})}),"\nwas changed to return an ",(0,s.jsx)(n.code,{children:"Option<u32>"})," instead of ",(0,s.jsx)(n.code,{children:"()"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["A new function ",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_env/4.0.0/ink_env/fn.take_contract_storage.html",children:(0,s.jsx)(n.code,{children:"ink_env::take_contract_storage"})}),"\nwas introduced."]}),"\n",(0,s.jsxs)(n.h2,{id:"removal-of-ink_envrandom-function",children:["Removal of ",(0,s.jsx)(n.code,{children:"ink_env::random"})," function"]}),"\n",(0,s.jsxs)(n.p,{children:["We had to remove the ",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.random.html",children:(0,s.jsx)(n.code,{children:"ink_env::random"})}),"\nfunction (in ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1442",children:"#1442"}),").\nThis function allowed contract developers getting random entropy.\nThere is unfortunately no way how this can be done safely enough\nwith built-in Substrate primitives on-chain currently. We're\nfollowing the recommendation of our auditors to remove it."]}),"\n",(0,s.jsx)(n.p,{children:"The alternative right now is to provide random entropy off-chain to\nthe contract, to use a random entropy oracle, or to have a chain-extension\nthat does this, in case the chain has a possibility to do so."}),"\n",(0,s.jsxs)(n.p,{children:["We hope to bring this function back in a future release of ink!, the\nbest hope right now is that it could come back with\n",(0,s.jsx)(n.a,{href:"https://wiki.polkadot.network/docs/learn-consensus#badass-babe-sassafras",children:"Sassafras"}),",\na block production protocol for future versions of Polkadot."]}),"\n",(0,s.jsxs)(n.p,{children:["If you're interested in more information on this check out\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/substrate/pull/13204",children:"the Substrate PR"})," which\ndeprecated the random interface of ",(0,s.jsx)(n.code,{children:"pallet-contracts"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"constructors-can-now-return-resultself-mycontracterror",children:["Constructors can now return ",(0,s.jsx)(n.code,{children:"Result<Self, MyContractError>"})]}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1446",children:"#1446"})," we introduced\nthe possibility for constructors to return either ",(0,s.jsx)(n.code,{children:"Self"})," (as usual) or\n",(0,s.jsx)(n.code,{children:"Result<Self, MyContractError>"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This enables contract developers to bubble up encoded error objects to\nclients/frontends about a failure. In ink! 3.x it was only possible to\npanic in the constructor in case an error occurred, resulting in loss\nof this information."}),"\n",(0,s.jsxs)(n.h2,{id:"chain-extensions-returns_result-removed",children:["Chain extension's ",(0,s.jsx)(n.code,{children:"returns_result"})," removed"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"returns_result"})," flag has been removed from the ",(0,s.jsx)(n.code,{children:"#[ink(extension = \u2026)]"})," attribute in\n",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1569",children:"#1569"}),".\nWe now infer this information at compile time. If ",(0,s.jsx)(n.code,{children:"handle_status"})," is set to ",(0,s.jsx)(n.code,{children:"true"}),",\nthe return type will still be wrapped into ",(0,s.jsx)(n.code,{children:"Result"})," as before."]}),"\n",(0,s.jsx)(n.h2,{id:"contract-metadata-abi",children:"Contract Metadata (ABI)"}),"\n",(0,s.jsxs)(n.p,{children:["The most detailed way to grasp what changed is to look at\n",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink-docs/pull/138",children:"this PR"}),", which\nupdated the metadata page in our documentation."]}),"\n",(0,s.jsxs)(n.h3,{id:"add-support-for-language-level-errors-langerror",children:["Add support for language level errors (",(0,s.jsx)(n.code,{children:"LangError"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["Under the hood, ink! now generates code that results in each message\nand constructor returning a ",(0,s.jsx)(n.code,{children:"Result<Message::Output, LangError>"})," (or\nfor constructors ",(0,s.jsx)(n.code,{children:"Result<Constructor::Output, LangError>"}),").\nThis happens even if the message/constructor doesn't have a return type,\nwe default to the unit type ",(0,s.jsx)(n.code,{children:"()"})," in that case."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"https://docs.rs/ink/4.0.0/ink/enum.LangError.html",children:(0,s.jsx)(n.code,{children:"LangError"})}),"\nis a type of error which doesn't originate from the contract itself,\nnor from the underlying execution environment (so the Contracts pallet\nin this case)."]}),"\n",(0,s.jsx)(n.p,{children:"An example of where this would arise is if a caller tries to use a non-existent message\nselector for a contract. Previously, the contract would trap and not allow the caller to\ndo any sort of error handling if it encountered a non-existent selector."}),"\n",(0,s.jsx)(n.p,{children:"This change doesn't affect how you write a contract! It affects clients and\nfrontends though, since it breaks the API in two ways:"}),"\n",(0,s.jsxs)(n.p,{children:["first, all contract messages now have a ",(0,s.jsx)(n.code,{children:"Result"})," return type, and second a new field,\n",(0,s.jsx)(n.code,{children:"lang_error"}),", will be introduced as part of the contract spec. The second change allows\nother languages (such as Solang) to use an equivalent ",(0,s.jsx)(n.code,{children:"LangError"}),"."]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:"Click here for a snippet of the new metadata for the Flipper contract."})}),(0,s.jsx)("p",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"messages": [\n  {\n    "args": [],\n    "docs": [\n      " Flips the current value of the Flipper\'s boolean."\n    ],\n    "label": "flip",\n    "mutates": true,\n    "payable": false,\n    "returnType": {\n      "displayName": [\n        "ink",\n        "MessageResult"\n      ],\n      "type": 1\n    },\n    "selector": "0x633aa551"\n  }],\n"lang_error": {\n  "displayName": [\n    "ink",\n    "LangError"\n  ],\n  "type": 3\n},\n{\n  "id": 3,\n  "type": {\n    "def": {\n      "variant": {\n        "variants": [\n          {\n            "index": 1,\n            "name": "CouldNotReadInput"\n          }\n        ]\n      }\n    },\n    "path": [\n      "ink_primitives",\n      "LangError"\n    ]\n  }\n}\n\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"version-field",children:"Version field"}),"\n",(0,s.jsxs)(n.p,{children:["As part of ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1313",children:"#1313"})," the ink! ABI was\nchanged to have a proper version field as part of the ink! metadata object.\nThis enables querying the ABI version in a less-ambiguous way."]}),"\n",(0,s.jsx)(n.p,{children:"Before:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"source": {...},\n"contract": {...},\n"V3": {\n  "spec": {...},\n  "storage": {...},\n  "types": {...}\n}\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"After:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "source": {...},\n  "contract": {...},\n  "spec": {...},\n  "storage": {...},\n  "types": [...],\n  "version": "4"\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"the-storage-layout-storage",children:["The Storage Layout (",(0,s.jsx)(n.code,{children:"storage"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["The storage layout under the ",(0,s.jsx)(n.code,{children:"storage"})," key changed for v4. If you have an application\nthat is using it consider reading the updated documentation:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/ink-docs/docs/v4/datastructures/overview",children:"General storage documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/ink-docs/docs/v4/datastructures/storage-in-metadata",children:"Storage metadata format"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"removal-of-accountid-default-implementation",children:["Removal of ",(0,s.jsx)(n.code,{children:"AccountId"})," ",(0,s.jsx)(n.code,{children:"Default"})," implementation"]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1255",children:"#1255"})," we removed the ",(0,s.jsx)(n.code,{children:"Default"})," trait\nimplementation on ",(0,s.jsx)(n.code,{children:"AccountId"}),"s."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Default"})," implementation of ",(0,s.jsx)(n.code,{children:"AccountId"})," returned the zero-address, which is\nproblematic since the\n",(0,s.jsxs)(n.a,{href:"https://substrate.stackexchange.com/questions/982/why-does-the-all-0-public-key-have-a-known-private-key-in-sr25519-and-ed25519",children:["zero-address in the ",(0,s.jsx)(n.code,{children:"sr25519"})," and ",(0,s.jsx)(n.code,{children:"ed25519"})," curves has a known private key"]}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Developers commonly reach for defaults, and the zero-address in particular, making it an\nunsafe trait implementation to have given the consequences."}),"\n",(0,s.jsx)(n.p,{children:"Imagine a developer sending tokens to the zero-address to be burned, only to find that\nthey've been stolen because the private key is known."}),"\n",(0,s.jsxs)(n.p,{children:["If you were previously using ",(0,s.jsx)(n.code,{children:"AccountId"}),"'s ",(0,s.jsx)(n.code,{children:"Default"})," implementation in your code you\nhave a couple of different options for how to move forward. These will depend on what\nexactly you were using the zero-address for."]}),"\n",(0,s.jsx)(n.p,{children:"If you were using it as a burn address:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You can pick another address to use, assuming that you've actually picked a random\naddress"}),"\n",(0,s.jsx)(n.li,{children:"Consider a solution that involves reducing total issuance, instead of transferring\ntokens to a random address"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you were using it as a privileged account:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Change the account"}),"\n",(0,s.jsx)(n.li,{children:"Add checks to ensure that calls coming from the zero-address are rejected"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You should also now consider dealing with ",(0,s.jsx)(n.code,{children:"AccountId"}),"'s as ",(0,s.jsx)(n.code,{children:"Option<AccountId>"}),'\'s. This is\nmore idiomatic Rust, and also conveys the meaning of a "null" or "empty" address much\nbetter.']}),"\n",(0,s.jsxs)(n.h2,{id:"updates-to-the-callbuilder-and-createbuilder-apis",children:["Updates to the ",(0,s.jsx)(n.code,{children:"CallBuilder"})," and ",(0,s.jsx)(n.code,{children:"CreateBuilder"})," APIs"]}),"\n",(0,s.jsxs)(n.p,{children:["There's been several changes to the\n",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_env/4.0.0/ink_env/call/struct.CallBuilder.html",children:(0,s.jsx)(n.code,{children:"CallBuilder"})}),"\nand\n",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_env/4.0.0/ink_env/call/struct.CreateBuilder.html",children:(0,s.jsx)(n.code,{children:"CreateBuilder"})}),"\nAPIs."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1604",children:"#1604"})," we renamed the\n",(0,s.jsx)(n.code,{children:"CallBuilder::fire()"})," method to\n",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_env/4.0.0/ink_env/call/struct.CallBuilder.html#method.invoke-2",children:(0,s.jsx)(n.code,{children:"CallBuilder::invoke()"})}),".\nThis brings more consistency across our APIs which were already using the ",(0,s.jsx)(n.code,{children:"invoke"}),"\nterminology."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1512",children:"#1512"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1525",children:"#1525"}),"\nwe added support for handing\n",(0,s.jsx)(n.code,{children:"LangError"}),"s from the ",(0,s.jsx)(n.code,{children:"CreateBuilder"})," and ",(0,s.jsx)(n.code,{children:"CallBuilder"}),", respectively."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to handle errors from either ",(0,s.jsx)(n.code,{children:"Builder"})," you can use the new\n",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_env/4.0.0/ink_env/call/struct.CreateBuilder.html#method.try_instantiate",children:(0,s.jsx)(n.code,{children:"CreateBuilder::try_instantiate()"})}),"\nor\n",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_env/4.0.0/ink_env/call/struct.CallBuilder.html#method.try_invoke-1",children:(0,s.jsx)(n.code,{children:"CallBuilder::try_invoke()"})}),"\nmethods."]}),"\n",(0,s.jsxs)(n.p,{children:["Because of the addition of those methods we also removed any error handling from the\nnon-",(0,s.jsx)(n.code,{children:"try_"})," methods in ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1602",children:"#1602"}),". This means\nthat the ",(0,s.jsx)(n.code,{children:"CallBuilder::invoke()"})," and ",(0,s.jsx)(n.code,{children:"CreateBuilder::instantiate()"})," methods return values\ndirectly, and panic when they encounter an error."]}),"\n",(0,s.jsxs)(n.p,{children:["Lastly, in ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1636",children:"#1636"})," we added two methods to\nthe ",(0,s.jsx)(n.code,{children:"CallBuilder"})," to streamline\n",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_env/4.0.0/ink_env/call/struct.Call.html",children:(0,s.jsx)(n.code,{children:"Call"})}),"\nand\n",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_env/4.0.0/ink_env/call/struct.DelegateCall.html",children:(0,s.jsx)(n.code,{children:"DelegateCall"})}),"\nworkflows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["For ",(0,s.jsx)(n.code,{children:"Call"})," you can use\n",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_env/4.0.0/ink_env/call/struct.CallBuilder.html#method.call",children:(0,s.jsx)(n.code,{children:"CallBuilder::call()"})})," (this replaces ",(0,s.jsx)(n.code,{children:"CallBuilder::callee()"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["For ",(0,s.jsx)(n.code,{children:"DelegateCall"})," you can use ",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_env/4.0.0/ink_env/call/struct.CallBuilder.html#method.delegate",children:(0,s.jsx)(n.code,{children:"CallBuilder::delegate()"})})]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"removal-of-libcrate-type-and-libname-from-contract-manifest",children:["Removal of ",(0,s.jsx)(n.code,{children:"[lib.crate-type]"})," and ",(0,s.jsx)(n.code,{children:"[lib.name]"})," from contract manifest"]}),"\n",(0,s.jsxs)(n.p,{children:["Earlier versions of ",(0,s.jsx)(n.code,{children:"cargo-contract"})," required that these two fields were specified in the\ncontract manifest explicitly, as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[lib]\nname = "flipper"\npath = "lib.rs"\ncrate-type = [\n    # Used for normal contract Wasm blobs.\n    "cdylib",\n    # Use to generate ABI\n    "rlib",\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["However, with ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/cargo-contract/pull/929",children:"cargo-contract#929"})," we changed this behavior to:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use the contract name by default, removing the need for the ",(0,s.jsx)(n.code,{children:"name"})," field"]}),"\n",(0,s.jsxs)(n.li,{children:["Compile contracts as ",(0,s.jsx)(n.code,{children:"rlib"}),"s by default, and automatically changing to ",(0,s.jsx)(n.code,{children:"cdylib"})," as\nneeded"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This means that your new manifest should look like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[lib]\npath = "lib.rs"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},87235:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAwIDUwMCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZWFkOWZjOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6ICNiYTgxZjk7CiAgICAgIH0KCiAgICAgIC5jbHMtNCB7CiAgICAgICAgZmlsbDogI2Q3YjZmYTsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnPgogICAgPHBhdGggY2xhc3M9ImNscy00IiBkPSJtMTYwMCwyNC44NHY0MjguNTJjMCw4LjMxLTQuMDgsMTUuNjYtMTAuMzQsMjAuMTctMi40LDEuNzMtNS44NC44Ni02Ljk1LTEuODgtMy45Mi05LjcyLTE2LjQxLTE2LjgzLTMxLjIxLTE2LjgzLTkuNDcsMC0xNy45OSwyLjkxLTIzLjkzLDcuNTUtMS45MSwxLjQ5LTQuNjQsMS4yNS02LjI0LS41Ni03LjY2LTguNjgtMjEuMjItMTQuNDUtMzYuNjgtMTQuNDUtMTMuOTUsMC0yNi4zNyw0LjcxLTM0LjI4LDEyLjAxLTEuODQsMS43LTQuNzIsMS41NS02LjQyLS4yOS05LjMyLTEwLjA3LTI1LjgzLTE2Ljc2LTQ0LjYyLTE2Ljc2LTI3LjA1LDAtNDkuMzUsMTMuODUtNTIuMzYsMzEuNy0uNCwyLjM5LTIuNDksNC4xNC00LjkxLDQuMTRsLTEzMTcuMjIuMDVjLTEzLjcxLDAtMjQuODMtMTEuMTItMjQuODMtMjQuODRWMjQuODRDMCwxMS4xMiwxMS4xMiwwLDI0LjgzLDBoMTU1MC4zNEMxNTg4Ljg4LDAsMTYwMCwxMS4xMiwxNjAwLDI0Ljg0WiIvPgogICAgPGc+CiAgICAgIDxlbGxpcHNlIGNsYXNzPSJjbHMtMyIgY3g9IjEzOTkuNDYiIGN5PSI0NzkuMTYiIHJ4PSIzMy44NyIgcnk9IjIwLjg0Ii8+CiAgICAgIDxlbGxpcHNlIGNsYXNzPSJjbHMtMyIgY3g9IjE0ODMuNzgiIGN5PSI0NzguNjkiIHJ4PSIyNy45NCIgcnk9IjE3LjE5Ii8+CiAgICAgIDxlbGxpcHNlIGNsYXNzPSJjbHMtMyIgY3g9IjE1NTIuMzciIGN5PSI0NzkuMDQiIHJ4PSIxOC42NSIgcnk9IjExLjQ4Ii8+CiAgICA8L2c+CiAgPC9nPgogIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTE2MDAsMzk1LjU0djU3LjgyYzAsOC4zMS00LjA4LDE1LjY2LTEwLjM1LDIwLjE3LTIuNCwxLjcyLTUuODQuODYtNi45NC0xLjg4LTMuOTMtOS43Mi0xNi40MS0xNi44My0zMS4yMS0xNi44My05LjQ3LDAtMTcuOTksMi45MS0yMy45Myw3LjU1LTEuOTEsMS40OS00LjY0LDEuMjUtNi4yNC0uNTYtNy42Ni04LjY4LTIxLjIyLTE0LjQ1LTM2LjY4LTE0LjQ1LTEzLjk1LDAtMjYuMzcsNC43LTM0LjI5LDEyLTEuODQsMS43LTQuNzEsMS41NS02LjQyLS4yOS05LjMyLTEwLjA3LTI1LjgzLTE2Ljc2LTQ0LjYyLTE2Ljc2LTI3LjA2LDAtNDkuMzUsMTMuODUtNTIuMzcsMzEuNy0uNCwyLjM5LTIuNDgsNC4xNC00LjkxLDQuMTRsLTEzMTcuMjEuMDVDMTEuMTIsNDc4LjIsMCw0NjcuMDgsMCw0NTMuMzZ2LTE0Ni45M3MyODIuNjcsODguOTcsNDY1LjQ1LDg4Ljg4YzI4OS41Mi0uMTUsNzE1LjE0LTEyNi41OSwxMTM0LjU1LjI0WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0ibTAsMjEuMzN2NTguNTVjNTI2Ljc2LTQ4Ljg1LDg2NC4zMiwxMzguMDUsMTYwMC0zLjg2VjIxLjMzQzE2MDAsOS41NSwxNTg4Ljg4LDAsMTU3NS4xNywwSDI0LjgzQzExLjEyLDAsMCw5LjU1LDAsMjEuMzNaIi8+CiAgPGc+CiAgICA8cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjI1MS43MyIgeT0iMTUwLjIzIiB3aWR0aD0iMzg0Ljk4IiBoZWlnaHQ9IjE3NC41MyIgcng9IjMxLjQ0IiByeT0iMzEuNDQiLz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJtMzgzLjcsMjg0LjAxYy02LjQzLDAtMTIuOC0uODYtMTkuMTQtMi41Ny02LjM0LTEuNzItMTEuNzEtNC4xNi0xNi4xLTcuMzNsOC4zMi0xNi4zN2MzLjUyLDIuNTUsNy42MSw0LjU4LDEyLjI4LDYuMDcsNC42NiwxLjUsOS4zNywyLjI0LDE0LjEyLDIuMjQsNS4zNywwLDkuNTktMS4wNiwxMi42Ny0zLjE3LDMuMDgtMi4xMSw0LjYyLTUuMDIsNC42Mi04Ljcxcy0xLjM3LTYuMjktNC4wOS04LjMyYy0yLjczLTIuMDItNy4xMy0zLjA0LTEzLjItMy4wNGgtOS43N3YtMTQuMTNsMjUuNzQtMjkuMTcsMi4zOCw3LjY2aC00OC40NXYtMTcuMTZoNjQuNjl2MTMuODZsLTI1LjYxLDI5LjE3LTEwLjgyLTYuMmg2LjJjMTEuMzUsMCwxOS45MywyLjU1LDI1Ljc0LDcuNjYsNS44MSw1LjEsOC43MSwxMS42Niw4LjcxLDE5LjY3LDAsNS4xOS0xLjM3LDEwLjA2LTQuMDksMTQuNTktMi43Myw0LjUzLTYuOTEsOC4yMS0xMi41NCwxMS4wMi01LjYzLDIuODItMTIuODUsNC4yMi0yMS42NSw0LjIyWiIvPgogICAgICA8cGF0aCBkPSJtNDQ0LjAzLDI4My40OGMtMy41MiwwLTYuNTMtMS4yMS05LjA0LTMuNjMtMi41MS0yLjQyLTMuNzYtNS41Mi0zLjc2LTkuMzFzMS4yNS02Ljg0LDMuNzYtOS4xN2MyLjUxLTIuMzMsNS41Mi0zLjUsOS4wNC0zLjVzNi42NCwxLjE3LDkuMTEsMy41YzIuNDYsMi4zMywzLjcsNS4zOSwzLjcsOS4xN3MtMS4yMyw2Ljg5LTMuNyw5LjMxYy0yLjQ2LDIuNDItNS41LDMuNjMtOS4xMSwzLjYzWiIvPgogICAgICA8cGF0aCBkPSJtNDYxLjg1LDI4Mi40M2wzMS44MS00MS43Mi0uNCwxMS4zNS0zMC40OS00MC42NmgyMy4xbDE5LjI3LDI2LjUzLTguNzEuMjYsMTkuOTMtMjYuOGgyMS45MWwtMzAuNjMsNDAuMjZ2LTExLjA5bDMxLjY4LDQxLjg1aC0yMy4zN2wtMjAuMi0yOC4yNSw4LjU4LDEuMTktMjAuMDcsMjcuMDZoLTIyLjQ0WiIvPgogICAgPC9nPgogIDwvZz4KICA8Zz4KICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iOTYzLjI4IiB5PSIxNTAuMjMiIHdpZHRoPSIzODQuOTgiIGhlaWdodD0iMTc0LjUzIiByeD0iMzEuNDQiIHJ5PSIzMS40NCIvPgogICAgPGc+CiAgICAgIDxwYXRoIGQ9Im0xMDUxLjgyLDI2My4wMnYtMTQuMzlsNDMuNTYtNTguNjFoMjIuNDRsLTQyLjY0LDU4LjYxLTEwLjQzLTMuMDRoNzIuNzR2MTcuNDNoLTg1LjY4Wm00OS43NywxOS40MXYtMTkuNDFsLjY2LTE3LjQzdi0xNy4yOWgyMC4ydjU0LjEyaC0yMC44NloiLz4KICAgICAgPHBhdGggZD0ibTExNTguNjEsMjgzLjQ4Yy0zLjUyLDAtNi41My0xLjIxLTkuMDQtMy42My0yLjUxLTIuNDItMy43Ni01LjUyLTMuNzYtOS4zMXMxLjI1LTYuODQsMy43Ni05LjE3YzIuNTEtMi4zMyw1LjUyLTMuNSw5LjA0LTMuNXM2LjY0LDEuMTcsOS4xMSwzLjVjMi40NiwyLjMzLDMuNyw1LjM5LDMuNyw5LjE3cy0xLjIzLDYuODktMy43LDkuMzFjLTIuNDYsMi40Mi01LjUsMy42My05LjExLDMuNjNaIi8+CiAgICAgIDxwYXRoIGQ9Im0xMjE4Ljk0LDI4NC4wMWMtNy41NywwLTE0LjM1LTEuODctMjAuMzMtNS42MS01Ljk5LTMuNzQtMTAuNjktOS4xNy0xNC4xMi0xNi4zLTMuNDMtNy4xMy01LjE1LTE1Ljc1LTUuMTUtMjUuODdzMS43Mi0xOC43NSw1LjE1LTI1Ljg3YzMuNDMtNy4xMyw4LjE0LTEyLjU2LDE0LjEyLTE2LjMsNS45OC0zLjc0LDEyLjc2LTUuNjEsMjAuMzMtNS42MXMxNC40NiwxLjg3LDIwLjQsNS42MWM1Ljk0LDMuNzQsMTAuNjMsOS4xNywxNC4wNiwxNi4zLDMuNDMsNy4xMyw1LjE1LDE1Ljc1LDUuMTUsMjUuODdzLTEuNzIsMTguNzUtNS4xNSwyNS44N2MtMy40Myw3LjEzLTguMTIsMTIuNTYtMTQuMDYsMTYuMy01Ljk0LDMuNzQtMTIuNzQsNS42MS0yMC40LDUuNjFabTAtMTguMDhjMy42MSwwLDYuNzUtMS4wMSw5LjQ0LTMuMDQsMi42OC0yLjAyLDQuOC01LjIzLDYuMzQtOS42NCwxLjU0LTQuNCwyLjMxLTEwLjA4LDIuMzEtMTcuMDNzLS43Ny0xMi42My0yLjMxLTE3LjAzYy0xLjU0LTQuNC0zLjY1LTcuNjEtNi4zNC05LjY0LTIuNjktMi4wMi01LjgzLTMuMDQtOS40NC0zLjA0cy02LjYyLDEuMDEtOS4zMSwzLjA0Yy0yLjY5LDIuMDMtNC44LDUuMjQtNi4zNCw5LjY0LTEuNTQsNC40LTIuMzEsMTAuMDgtMi4zMSwxNy4wM3MuNzcsMTIuNjMsMi4zMSwxNy4wM2MxLjU0LDQuNCwzLjY1LDcuNjEsNi4zNCw5LjY0LDIuNjgsMi4wMyw1Ljc5LDMuMDQsOS4zMSwzLjA0WiIvPgogICAgPC9nPgogIDwvZz4KICA8Zz4KICAgIDxlbGxpcHNlIGNsYXNzPSJjbHMtMyIgY3g9IjEzOTkuNDYiIGN5PSI0NzkuMTYiIHJ4PSIzMy44NyIgcnk9IjIwLjg0Ii8+CiAgICA8ZWxsaXBzZSBjbGFzcz0iY2xzLTMiIGN4PSIxNDgzLjc4IiBjeT0iNDc4LjY5IiByeD0iMjcuOTQiIHJ5PSIxNy4xOSIvPgogICAgPGVsbGlwc2UgY2xhc3M9ImNscy0zIiBjeD0iMTU1Mi4zNyIgY3k9IjQ3OS4wNCIgcng9IjE4LjY1IiByeT0iMTEuNDgiLz4KICA8L2c+CiAgPGc+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im04OTEuMjQsMjM0LjYxbC00OC42OS00NS44NGMtNC4zOS00LjE0LTExLjYtMS4wMi0xMS42LDUuMDF2OTEuNjdjMCw2LjAzLDcuMjEsOS4xNSwxMS42LDUuMDFsNDguNjktNDUuODRjMi44OS0yLjcyLDIuODktNy4zMSwwLTEwLjAzWiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtODMyLjk5LDI3MC4yMXYtNjEuMTdzLTI3LjUzLTguNTgtNTcuODQtOC41OGMtMjEuMjYsMC0zOS4wMiwzLjUyLTQ5LjA0LDYuMDUtNS4xOCwxLjMxLTguOCw1Ljk3LTguOCwxMS4zMXY0My42YzAsNS4zNCwzLjYyLDEwLDguOCwxMS4zMSwxMC4wMiwyLjUzLDI3Ljc4LDYuMDUsNDkuMDQsNi4wNSwzMC4zMSwwLDU3Ljg0LTguNTgsNTcuODQtOC41OFoiLz4KICA8L2c+Cjwvc3ZnPg=="},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);
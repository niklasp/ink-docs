"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1205],{47618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>i});const a=JSON.parse('{"id":"basics/upgradeability","title":"Upgradeable Contracts","description":"Upgradeable Contract Title Picture","source":"@site/versioned_docs/version-v6/basics/upgradeability.md","sourceDirName":"basics","slug":"/basics/upgradeable-contracts","permalink":"/ink-docs/docs/v6/basics/upgradeable-contracts","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/basics/upgradeability.md","tags":[],"version":"v6","frontMatter":{"title":"Upgradeable Contracts","slug":"/basics/upgradeable-contracts","hide_title":true},"sidebar":"reference","previous":{"title":"Cross-Contract Calling","permalink":"/ink-docs/docs/v6/basics/cross-contract-calling"},"next":{"title":"Environment Functions","permalink":"/ink-docs/docs/v6/basics/environment-functions"}}');var s=t(74848),o=t(28453);const r={title:"Upgradeable Contracts",slug:"/basics/upgradeable-contracts",hide_title:!0},l="Upgradeable Contracts",c={},i=[{value:"Proxy Forwarding",id:"proxy-forwarding",level:2},{value:"Properties",id:"properties",level:3},{value:"Example",id:"example",level:3},{value:"Delegating execution to foreign Contract Code with <code>delegate_call</code>",id:"delegating-execution-to-foreign-contract-code-with-delegate_call",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Delegate dependency locks",id:"delegate-dependency-locks",level:3},{value:"Note on the usage of wildcard selectors",id:"note-on-the-usage-of-wildcard-selectors",level:2},{value:"Note on <code>CallFlags</code>",id:"note-on-callflags",level:2},{value:"Replacing Contract Code with <code>set_code_hash()</code>",id:"replacing-contract-code-with-set_code_hash",level:2},{value:"Properties",id:"properties-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Storage Compatibility",id:"storage-compatibility",level:3},{value:"A little note on the determinism of contract addresses",id:"a-little-note-on-the-determinism-of-contract-addresses",level:3},{value:"Examples",id:"examples",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Upgradeable Contract Title Picture",src:t(98109).A+"",width:"1600",height:"500"})}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"upgradeable-contracts",children:"Upgradeable Contracts"})}),"\n",(0,s.jsx)(n.p,{children:"Even though smart contracts are intended to be immutable by design,\nit is often necessary to perform an upgrade of a smart contract."}),"\n",(0,s.jsx)(n.p,{children:"The developer may need to fix a critical bug or introduce a new feature.\nink! supports different upgrade strategies that we describe on this page."}),"\n",(0,s.jsx)(n.h2,{id:"proxy-forwarding",children:"Proxy Forwarding"}),"\n",(0,s.jsx)(n.p,{children:"This method relies on the ability of contracts to proxy calls to other contracts."}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Forwards any call that does not match a selector of itself to another contract."}),"\n",(0,s.jsx)(n.li,{children:"The other contract needs to be deployed on-chain."}),"\n",(0,s.jsx)(n.li,{children:"State is stored in the storage of the contract to which calls are forwarded."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"User ---- tx ---\x3e Proxy ----------\x3e Implementation_v0\n                     |\n                      ------------\x3e Implementation_v1\n                     |\n                      ------------\x3e Implementation_v2\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Our proxy contract will have these 2 storage fields:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct Proxy {\n    /// The `AccountId` of a contract where any call that does not match a\n    /// selector of this contract is forwarded to.\n    forward_to: AccountId,\n    /// The `AccountId` of a privileged account that can update the\n    /// forwarding address. This address is set to the account that\n    /// instantiated this contract.\n    admin: AccountId,\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"We then need a way to change the address of a contract to which we forward calls to\nand the actual message selector to proxy the call:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'impl Proxy {\n    /// Changes the `AccountId` of the contract where any call that does\n    /// not match a selector of this contract is forwarded to.\n    ///\n    /// # Note\n    /// Only one extra message with a well-known selector `@` is allowed.\n    #[ink(message, selector = @)]\n    pub fn change_forward_address(&mut self, new_address: AccountId) {\n        assert_eq!(\n            self.env().caller(),\n            self.admin,\n            "caller {:?} does not have sufficient permissions, only {:?} does",\n            self.env().caller(),\n            self.admin,\n        );\n        self.forward_to = new_address;\n    }\n\n    /// Fallback message for a contract call that doesn\'t match any\n    /// of the other message selectors.\n    ///\n    /// # Note:\n    ///\n    /// - We allow payable messages here and would forward any optionally supplied\n    ///   value as well.\n    /// - If the self receiver were `forward(&mut self)` here, this would not\n    ///   have any effect whatsoever on the contract we forward to.\n    #[ink(message, payable, selector = _)]\n    pub fn forward(&self) -> u32 {\n        ink::env::call::build_call::<ink::env::DefaultEnvironment>()\n            .call(self.forward_to)\n            .transferred_value(self.env().transferred_value())\n            .call_flags(\n                ink::env::CallFlags::default()\n                    .set_forward_input(true)\n                    .set_tail_call(true),\n            )\n            .invoke()\n            .unwrap_or_else(|err| {\n                panic!(\n                    "cross-contract call to {:?} failed due to {:?}",\n                    self.forward_to, err\n                )\n            });\n        unreachable!(\n            "the forwarded call will never return since `tail_call` was set"\n        );\n    }\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Take a look at the selector pattern in the attribute macro: by declaring ",(0,s.jsx)(n.code,{children:"selector = _"}),"\nwe specify that all other messages should be handled by this message selector."]})}),"\n",(0,s.jsx)(n.p,{children:"Using this pattern, you can introduce other message to your proxy contract.\nAny messages that are not matched in the proxy contract\nwill be forwarded to the specified contract address."}),"\n",(0,s.jsxs)(n.h2,{id:"delegating-execution-to-foreign-contract-code-with-delegate_call",children:["Delegating execution to foreign Contract Code with ",(0,s.jsx)(n.code,{children:"delegate_call"})]}),"\n",(0,s.jsx)(n.p,{children:"Similar to proxy-forwarding we can delegate execution to another code hash uploaded on-chain."}),"\n",(0,s.jsx)(n.h3,{id:"properties-1",children:"Properties"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Delegates any call that does not match a selector of itself to another contract."}),"\n",(0,s.jsx)(n.li,{children:"Code is required to be uploaded on-chain, but is not required to be instantiated."}),"\n",(0,s.jsx)(n.li,{children:"State is stored in the storage of the original contract which submits the call."}),"\n",(0,s.jsx)(n.li,{children:"Storage layout must be identical between both contract codes."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"                                (Storage of Contract A)\nUser ---- tx ---\x3e Contract A ----------\x3e Code_v0\n                     |                     ^\n                     |                     |\n                     \u230a_____________________\u230b\n                    Storage is delegated to\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Suppose we have defined of the caller contract as following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct Delegator {\n    addresses: Mapping<AccountId, i32, ManualKey<0x23>>,\n    counter: i32,\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then let's define two messages that separately calls to update ",(0,s.jsx)(n.code,{children:"addresses"})," and ",(0,s.jsx)(n.code,{children:"counter"})," separately:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'/// Increment the current value using delegate call.\n#[ink(message)]\npub fn inc_delegate(&self, hash: Hash) {\n    let selector = ink::selector_bytes!("inc");\n    let _ = build_call::<DefaultEnvironment>()\n        .delegate(hash)\n        // if the receiver is set to `&mut self`,\n        // then any changes made in `inc_delegate()` before the delegate call\n        // will be persisted, and any changes made within delegate call will be discarded.\n\n        // Therefore, it is advised to use `&self` receiver with a mutating delegate call,\n        // or `.set_tail_call(true)` to flag that any changes made by delegate call should be flushed into storage. \n        // .call_flags(CallFlags::default().set_tail_call(true))\n        .exec_input(ExecutionInput::new(Selector::new(selector)))\n        .returns::<()>()\n        .try_invoke();\n}\n\n/// Adds entry to `addresses` using delegate call.\n/// Note that we don\'t need `set_tail_call(true)` flag\n/// because `Mapping` updates the storage instantly on-demand.\n#[ink(message)]\npub fn add_entry_delegate(&mut self, hash: Hash) {\n    let selector = ink::selector_bytes!("append_address_value");\n    let _ = build_call::<DefaultEnvironment>()\n        .delegate(hash)\n        .exec_input(ExecutionInput::new(Selector::new(selector)))\n        .returns::<()>()\n        .try_invoke();\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["ink! provides an intuitive call builder API for you to compose your call.\nAs you can see that ",(0,s.jsx)(n.code,{children:"inc_delegate()"})," can be built a call in slightly different manner than ",(0,s.jsx)(n.code,{children:"add_entry_delegate()"}),".\nThat's because if the delegated code modifies layout-full storage\n(i.e. it contains at least non-",(0,s.jsx)(n.code,{children:"Lazy"}),", non-",(0,s.jsx)(n.code,{children:"Mapping"})," field),\neither the receiver should be set to ",(0,s.jsx)(n.code,{children:"&self"})," or the ",(0,s.jsx)(n.code,{children:".set_tail_call(true)"})," flag of ",(0,s.jsx)(n.code,{children:"CallFlags"})," needs to be specified, and the storage layouts must match."]}),"\n",(0,s.jsxs)(n.p,{children:["This is due to the way ink! execution call stack is operated. Non-",(0,s.jsx)(n.code,{children:"Lazy"}),", non-",(0,s.jsx)(n.code,{children:"Mapping"})," field are first loaded into the memory.\nIf ",(0,s.jsx)(n.code,{children:"&mut self"})," receiver is used, then when delegate call is completed, the original state before the call will be persisted and flushed into the storage.\nTherefore, ",(0,s.jsx)(n.code,{children:".set_tail_call(true)"})," needs to be set to indicate that, that delegate call's storage context is the final (i.e. _tail) one that needs to be flushed.\nThis also makes any code after the delegate call unreachable.\nWith ",(0,s.jsx)(n.code,{children:"&self"})," receiver, ",(0,s.jsx)(n.code,{children:".set_tail_call(true)"})," is not required since no storage flushing happens at the end of the original caller's function.\n(see ",(0,s.jsx)(n.a,{href:"https://substrate.stackexchange.com/a/3352/3098",children:"Stack Exchange Answer"})," for details on how changes are flushed into storage)."]}),"\n",(0,s.jsx)(n.admonition,{title:"Key compatibility",type:"note",children:(0,s.jsxs)(n.p,{children:["If the delegated code modifies ",(0,s.jsx)(n.code,{children:"Lazy"})," or ",(0,s.jsx)(n.code,{children:"Mapping"})," field, the keys must be identical and ",(0,s.jsx)(n.code,{children:".set_tail_call(true)"})," is optional\nregardless of the function receiver.\nThis is because ",(0,s.jsx)(n.code,{children:"Lazy"})," and ",(0,s.jsx)(n.code,{children:"Mapping"})," interact with the storage directly instead of loading and flushing storage states."]})}),"\n",(0,s.jsx)(n.p,{children:'Now let\'s look at the "delegatee" code:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#[ink::contract]\npub mod delegatee {\n    use ink::storage::{\n        traits::ManualKey,\n        Mapping,\n    };\n    #[ink(storage)]\n    pub struct Delegatee {\n        // `ManualKey` must be the same as in the original contract.\n        addresses: Mapping<AccountId, i32, ManualKey<0x23>>,\n        counter: i32,\n        // Uncommenting below line will break storage compatibility.\n        // flag: bool,\n    }\n\n    impl Delegatee {\n        /// When using the delegate call. You only upload the code of the delegatee\n        /// contract. However, the code and storage do not get initialized.\n        ///\n        /// Because of this. The constructor actually never gets called.\n        #[allow(clippy::new_without_default)]\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            unreachable!(\n                "Constructors are not called when upgrading using `set_code_hash`."\n            )\n        }\n\n        /// Increments the current value.\n        #[ink(message)]\n        pub fn inc(&mut self) {\n            self.counter = self.counter.checked_add(2).unwrap();\n        }\n\n        /// Adds current value of counter to the `addresses`\n        #[ink(message)]\n        pub fn append_address_value(&mut self) {\n            let caller = self.env().caller();\n            self.addresses.insert(caller, &self.counter);\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"As you can see, delegatee's code looks like a normal ink! Smart Contract with some important features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Storage layout is identical to the original contract's storage"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"addresses"})," mapping key is identical"]}),"\n",(0,s.jsx)(n.li,{children:"Constructor does not have any logic, as the code is never instantiated. (It can be, but plays no effect on the execution)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"delegate-dependency-locks",children:"Delegate dependency locks"}),"\n",(0,s.jsxs)(n.p,{children:["In a delegator contract pattern, one contract delegates calls to another contract.\nThus it depends upon the contract code to which it delegates. Since on-chain contract code\ncan be deleted by anybody if there are no instances of the contract on the chain, this would\nbreak the ",(0,s.jsx)(n.code,{children:"delegator"})," contract. To prevent this, the ",(0,s.jsx)(n.code,{children:"delegator"})," contract can utilize the\n",(0,s.jsx)(n.code,{children:"lock_delegate_dependency"})," and ",(0,s.jsx)(n.code,{children:"unlock_delegate_dependency"})," host functions. Calling\n",(0,s.jsx)(n.code,{children:"lock_delegate_dependency"})," will prevent the code at the given hash from being deleted e.g."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"self.env().lock_delegate_dependency(&code_hash);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A subsequent call to ",(0,s.jsx)(n.code,{children:"unlock_delegate_dependency"})," from within the ",(0,s.jsx)(n.code,{children:"delegator"})," contract\ninstance releases the lock from that contract, allowing that code at the given hash to be\ndeleted if no other instances of the contract or delegate dependency locks exist."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"self.env().lock_delegate_dependency(&code_hash);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that these two methods can be called by anybody executing the contract, so it is the\nresponsibility of the contract developer to ensure correct access control.\nYou can take a look at our ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink-examples/tree/main/upgradeable-contracts#delegator",children:(0,s.jsx)(n.code,{children:"upgradeable-contracts/delegator"})}),"\nexample, which demonstrates the usage of these two functions."]}),"\n",(0,s.jsx)(n.h2,{id:"note-on-the-usage-of-wildcard-selectors",children:"Note on the usage of wildcard selectors"}),"\n",(0,s.jsx)(n.p,{children:"When working with cross-contract calls, developers are required to be aware of the some important changes."}),"\n",(0,s.jsxs)(n.p,{children:["Since ink! 5 we have restricted the usage of the wildcard selector due to\n",(0,s.jsx)(n.a,{href:"https://blog.openzeppelin.com/security-review-ink-cargo-contract#custom-selectors-could-facilitate-proxy-selector-clashing-attacks",children:"security reasons"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Beware",type:"danger",children:(0,s.jsxs)(n.p,{children:["Due to ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/issues/1676",children:"IIP-2"}),", ink! only allows\nto contain a single message with a well-known selector ",(0,s.jsx)(n.code,{children:"@"})," when the other message\nwith the wildcard selector ",(0,s.jsx)(n.code,{children:"_"})," is defined."]})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink-examples/tree/main/wildcard-selector",children:"example"}),"\nfor illustration on how it can be used in practice."]}),"\n",(0,s.jsxs)(n.h2,{id:"note-on-callflags",children:["Note on ",(0,s.jsx)(n.code,{children:"CallFlags"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CallFlags"})," provide fine-grained control over the cross-contract execution."]}),"\n",(0,s.jsx)(n.p,{children:"Some useful properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Re-entry is disable by default. It can be enabled with ",(0,s.jsx)(n.code,{children:".set_allow_reentry(true)"})," flag."]}),"\n",(0,s.jsxs)(n.li,{children:["The call execution context is returned to the caller by default. You can finish execution in the callee with ",(0,s.jsx)(n.code,{children:".set_tail_call(true)"})," flag."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".set_clone_input(true)"})," clones the input of the caller's messages. It can be used with when ",(0,s.jsx)(n.code,{children:".set_tail_call(false)"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".set_forward_input(true)"})," consumes the input of the caller's message which can be used after.  It can be used with when ",(0,s.jsx)(n.code,{children:".set_tail_call(true)"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"replacing-contract-code-with-set_code_hash",children:["Replacing Contract Code with ",(0,s.jsx)(n.code,{children:"set_code_hash()"})]}),"\n",(0,s.jsxs)(n.p,{children:["Following ",(0,s.jsx)(n.a,{href:"https://docs.substrate.io/maintain/runtime-upgrades/",children:"Substrate's runtime upgradeability"}),"\nphilosophy, ink! also supports an easy way to update your contract code via the special function\n",(0,s.jsx)(n.a,{href:"https://use-ink.github.io/ink/ink_env/fn.set_code_hash.html",children:(0,s.jsx)(n.code,{children:"set_code_hash()"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"properties-2",children:"Properties"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Updates the contract code using ",(0,s.jsx)(n.code,{children:"set_code_hash()"}),".\nThis effectively replaces the code which is executed for the contract address."]}),"\n",(0,s.jsx)(n.li,{children:"The other contract needs to be deployed on-chain."}),"\n",(0,s.jsx)(n.li,{children:"State is stored in the storage of the originally instantiated contract."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Just add the following function to the contract you want to upgrade in the future."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'/// Modifies the code which is used to execute calls to this contract address (`AccountId`).\n///\n/// We use this to upgrade the contract logic. We don\'t do any authorization here, any caller\n/// can execute this method. In a production contract you would do some authorization here.\n#[ink(message)]\npub fn set_code(&mut self, code_hash: [u8; 32]) {\n    ink::env::set_code_hash(&code_hash).unwrap_or_else(|err| {\n        panic!(\n            "Failed to `set_code_hash` to {:?} due to {:?}",\n            code_hash, err\n        )\n    });\n    ink::env::debug_println!("Switched code hash to {:?}.", code_hash);\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"storage-compatibility",children:"Storage Compatibility"}),"\n",(0,s.jsx)(n.p,{children:"It is the developer's responsibility to ensure\nthat the new contract's storage is compatible with the storage of the contract that is replaced."}),"\n",(0,s.jsxs)(n.admonition,{title:"Beware",type:"danger",children:[(0,s.jsx)(n.p,{children:"You should not change the order in which the contract state variables are declared, nor their type!"}),(0,s.jsxs)(n.p,{children:["Violating the restriction will not prevent a successful compilation,\nbut will result in ",(0,s.jsx)(n.strong,{children:"the mix-up of values"})," or ",(0,s.jsx)(n.strong,{children:"failure to read the storage correctly"}),".\nThis can be a result of severe errors in the application utilizing the contract."]})]}),"\n",(0,s.jsx)(n.p,{children:"If the storage of your contract looks like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct YourContract {\n    x: u32,\n    y: bool,\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The procedures listed below will make it ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"invalid"})})]}),"\n",(0,s.jsx)(n.p,{children:"Changing the order of variables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct YourContract {\n    y: bool,\n    x: u32,\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Removing an existing variable:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct YourContract {\n    x: u32,\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Changing the type of a variable:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct YourContract {\n    x: u64,\n    y: bool,\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Introducing a new variable before any of the existing ones:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct YourContract {\n    z: Vec<u32>,\n    x: u32,\n    y: bool,\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"a-little-note-on-the-determinism-of-contract-addresses",children:"A little note on the determinism of contract addresses"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If your contract utilizes this approach, it no-longer holds a deterministic address assumption.\nYou can no longer assume that a contract address identifies a specific code hash.\nPlease refer to ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/substrate/pull/10690#issuecomment-1025702389",children:"the issue"}),"\nfor more details."]})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["Examples of upgradable contracts can be found in the\n",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink-examples/tree/main/upgradeable-contracts",children:"ink! repository"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},98109:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/upgradeable-contract-6e32f549f67c51cb1e7db1af3315d10e.svg"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var a=t(96540);const s={},o=a.createContext(s);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
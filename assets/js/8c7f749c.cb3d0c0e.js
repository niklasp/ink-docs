"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4046],{2028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>a,frontMatter:()=>M,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"macros-attributes/contract","title":"#[ink::contract]","description":"Text/contract Title Picture","source":"@site/versioned_docs/version-v4/macros-attributes/contract.md","sourceDirName":"macros-attributes","slug":"/macros-attributes/contract","permalink":"/ink-docs/docs/v4/macros-attributes/contract","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v4/macros-attributes/contract.md","tags":[],"version":"v4","frontMatter":{"title":"#[ink::contract]","hide_title":true,"slug":"/macros-attributes/contract"},"sidebar":"reference","previous":{"title":"Overview","permalink":"/ink-docs/docs/v4/macros-attributes"},"next":{"title":"#[ink(anonymous)]","permalink":"/ink-docs/docs/v4/macros-attributes/anonymous"}}');var i=t(74848),L=t(28453);const M={title:"#[ink::contract]",hide_title:!0,slug:"/macros-attributes/contract"},u="#[ink::contract]",c={},r=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Header Arguments",id:"header-arguments",level:3},{value:"<code>compile_as_dependency: bool</code>",id:"compile_as_dependency-bool",level:3},{value:"<code>env: impl Environment</code>",id:"env-impl-environment",level:3},{value:"Analysis",id:"analysis",level:2},{value:"Interacting with the Contract Executor",id:"interacting-with-the-contract-executor",level:2},{value:"Events",id:"events",level:2},{value:"Example: Flipper",id:"example-flipper",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,L.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Text/contract Title Picture",src:t(94392).A+"",width:"1600",height:"500"})}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"inkcontract",children:"#[ink::contract]"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"#[ink::contract]"})," macro is the entry point for writing ink! smart contracts."]}),"\n",(0,i.jsxs)(n.p,{children:["If you are a beginner trying to learn ink! we recommend you to check out\nour extensive ",(0,i.jsx)(n.a,{href:"https://docs.substrate.io/tutorials/smart-contracts/",children:"ink! workshop"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The macro does analysis on the provided smart contract code and generates\nproper code."}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.h3,{id:"header-arguments",children:"Header Arguments"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"#[ink::contract]"})," macro can be provided with some additional comma-separated\nheader arguments:"]}),"\n",(0,i.jsx)(n.h3,{id:"compile_as_dependency-bool",children:(0,i.jsx)(n.code,{children:"compile_as_dependency: bool"})}),"\n",(0,i.jsxs)(n.p,{children:["Tells the ink! code generator to ",(0,i.jsx)(n.strong,{children:"always"})," or ",(0,i.jsx)(n.strong,{children:"never"}),"\ncompile the smart contract as if it was used as a dependency of another ink!\nsmart contract."]}),"\n",(0,i.jsx)(n.p,{children:"Normally this flag is only really useful for ink! developers who\nwant to inspect code generation of ink! smart contracts.\nThe author is not aware of any particular practical use case for users that\nmakes use of this flag but contract writers are encouraged to disprove this."}),"\n",(0,i.jsxs)(n.p,{children:["Note that it is recommended to make use of the built-in crate feature\n",(0,i.jsx)(n.code,{children:"ink-as-dependency"})," to flag smart contract dependencies listed in a contract's\n",(0,i.jsx)(n.code,{children:"Cargo.toml"})," as actual dependencies to ink!."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::contract(compile_as_dependency = true)]\nmod my_contract {\n    #[ink(storage)]\n    pub struct MyStorage;\n\n    impl MyStorage {\n        #[ink(constructor)]\n        pub fn construct() -> Self { MyStorage {} }\n\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n    // ...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Default value:"})," Depends on the crate feature propagation of ",(0,i.jsx)(n.code,{children:"Cargo.toml"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"env-impl-environment",children:(0,i.jsx)(n.code,{children:"env: impl Environment"})}),"\n",(0,i.jsxs)(n.p,{children:["Tells the ink! code generator which environment to use for the ink! smart contract.\nThe environment must implement the ",(0,i.jsx)(n.code,{children:"Environment"})," (defined in ",(0,i.jsx)(n.code,{children:"ink_env"}),") trait and provides\nall the necessary fundamental type definitions for ",(0,i.jsx)(n.code,{children:"Balance"}),", ",(0,i.jsx)(n.code,{children:"AccountId"})," etc."]}),"\n",(0,i.jsxs)(n.p,{children:["When using a custom ",(0,i.jsx)(n.code,{children:"Environment"})," implementation for a smart contract all types\nthat it exposes to the ink! smart contract and the mirrored types used in the runtime\nmust be aligned with respect to SCALE encoding and semantics."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Usage Example:"})}),"\n",(0,i.jsxs)(n.p,{children:["Given a custom ",(0,i.jsx)(n.code,{children:"Environment"})," implementation:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"pub struct MyEnvironment;\n\nimpl ink::env::Environment for MyEnvironment {\n    const MAX_EVENT_TOPICS: usize = 3;\n\n    type AccountId = u64;\n    type Balance = u128;\n    type Hash = [u8; 32];\n    type Timestamp = u64;\n    type BlockNumber = u32;\n    type ChainExtension = ::ink::env::NoChainExtension;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A user might implement their ink! smart contract using the above custom ",(0,i.jsx)(n.code,{children:"Environment"}),"\nimplementation as demonstrated below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::contract(env = MyEnvironment)]\nmod my_contract {\n    pub struct MyEnvironment;\n\n    impl ink::env::Environment for MyEnvironment {\n        const MAX_EVENT_TOPICS: usize = 3;\n        type AccountId = u64;\n        type Balance = u128;\n        type Hash = [u8; 32];\n        type Timestamp = u64;\n        type BlockNumber = u32;\n        type ChainExtension = ::ink::env::NoChainExtension;\n    }\n\n    #[ink(storage)]\n    pub struct MyStorage;\n\n    impl MyStorage {\n        #[ink(constructor)]\n        pub fn construct() -> Self { MyStorage {} }\n\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n    // ...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Default value:"})," ",(0,i.jsx)(n.code,{children:"DefaultEnvironment"})," defined in ",(0,i.jsx)(n.code,{children:"ink_env"})," crate."]}),"\n",(0,i.jsx)(n.h2,{id:"analysis",children:"Analysis"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"#[ink::contract]"})," macro fully analyses its input smart contract\nagainst invalid arguments and structure."]}),"\n",(0,i.jsx)(n.p,{children:"Some example rules include but are not limited to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["There must be exactly one ",(0,i.jsx)(n.code,{children:"#[ink(storage)]"})," struct."]}),"\n",(0,i.jsx)(n.p,{children:"This struct defines the layout of the storage that the ink! smart contract operates on.\nThe user is able to use a variety of built-in facilities, combine them in various ways\nor even provide their own implementations of storage data structures."}),"\n",(0,i.jsxs)(n.p,{children:["For more information visit the ",(0,i.jsx)(n.code,{children:"ink_storage"})," crate documentation."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn construct() -> Self { Flipper { value: false } }\n\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["There must be at least one ",(0,i.jsx)(n.code,{children:"#[ink(constructor)]"})," defined method."]}),"\n",(0,i.jsxs)(n.p,{children:["Methods flagged with ",(0,i.jsx)(n.code,{children:"#[ink(constructor)]"})," are special in that they are dispatchable\nupon contract instantiation. A contract may define multiple such constructors which\nallow users of the contract to instantiate a contract in multiple different ways."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsxs)(n.p,{children:["Given the ",(0,i.jsx)(n.code,{children:"Flipper"})," contract definition above we add an ",(0,i.jsx)(n.code,{children:"#[ink(constructor)]"}),"\nas follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["There must be at least one ",(0,i.jsx)(n.code,{children:"#[ink(message)]"})," defined method."]}),"\n",(0,i.jsxs)(n.p,{children:["Methods flagged with ",(0,i.jsx)(n.code,{children:"#[ink(message)]"})," are special in that they are dispatchable\nupon contract invocation. The set of ink! messages defined for an ink! smart contract\ndefine its API surface with which users are allowed to interact."]}),"\n",(0,i.jsx)(n.p,{children:"An ink! smart contract can have multiple such ink! messages defined."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["An ink! message with a ",(0,i.jsx)(n.code,{children:"&self"})," receiver may only read state whereas an ink! message\nwith a ",(0,i.jsx)(n.code,{children:"&mut self"})," receiver may mutate the contract's storage."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsxs)(n.p,{children:["Given the ",(0,i.jsx)(n.code,{children:"Flipper"})," contract definition above we add some ",(0,i.jsx)(n.code,{children:"#[ink(message)]"})," definitions\nas follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Payable Messages:"})}),"\n",(0,i.jsxs)(n.p,{children:["An ink! message by default will reject calls that additional fund the smart contract.\nAuthors of ink! smart contracts can make an ink! message payable by adding the ",(0,i.jsx)(n.code,{children:"payable"}),"\nflag to it. An example below:"]}),"\n",(0,i.jsx)(n.p,{children:"Note that ink! constructors are always implicitly payable and thus cannot be flagged\nas such."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        #[ink(payable)] // You can either specify payable out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message, payable)] // ...or specify payable inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Controlling the messages selector:"})}),"\n",(0,i.jsx)(n.p,{children:"Every ink! message and ink! constructor has a unique selector with which the\nmessage or constructor can be uniquely identified within the ink! smart contract.\nThese selectors are mainly used to drive the contract's dispatch upon calling it."}),"\n",(0,i.jsxs)(n.p,{children:["An ink! smart contract author can control the selector of an ink! message or ink!\nconstructor using the ",(0,i.jsx)(n.code,{children:"selector"})," flag. An example is shown below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        #[ink(selector = "0xDEADBEEF")] // Works on constructors as well.\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        #[ink(selector = "0xCAFEBABE")] // You can either specify selector out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message, selector = "0xFEEDBEEF")] // ...or specify selector inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"interacting-with-the-contract-executor",children:"Interacting with the Contract Executor"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ink_env"})," crate provides facilities to interact with the contract executor that\nconnects ink! smart contracts with the outer world."]}),"\n",(0,i.jsx)(n.p,{children:"For example it is possible to query the current call's caller via:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use ink_env;\nink::env::test::run_test::<ink::env::DefaultEnvironment, _>(|_| {\n    let caller = ink::env::caller::<ink::env::DefaultEnvironment>();\n    let _caller = caller;\n    Ok(())\n}).unwrap();\n"})}),"\n",(0,i.jsx)(n.p,{children:"However, ink! provides a much simpler way to interact with the contract executor\nvia its environment accessor. An example below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'#[ink::contract]\nmod greeter {\n    #[ink(storage)]\n    pub struct Greeter;\n\n    impl Greeter {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            let caller = Self::env().caller();\n            let message = format!("thanks for instantiation {:?}", caller);\n            ink::env::debug_println(&message);\n            Greeter {}\n        }\n\n        #[ink(message, payable)]\n        pub fn fund(&mut self) {\n            let caller = self.env().caller();\n            let value = self.env().transferred_balance();\n            let message = format!("thanks for the funding of {:?} from {:?}", value, caller);\n            ink::env::debug_println(&message);\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(n.p,{children:"An ink! smart contract may define events that it can emit during contract execution.\nEmitting events can be used by third party tools to query information about a contract's\nexecution and state."}),"\n",(0,i.jsxs)(n.p,{children:["The following example ink! contract shows how an event ",(0,i.jsx)(n.code,{children:"Transferred"})," is defined and\nemitted in the ",(0,i.jsx)(n.code,{children:"#[ink(constructor)]"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:" #[ink::contract]\n mod erc20 {\n     /// Defines an event that is emitted every time value is transferred.\n     #[ink(event)]\n     pub struct Transferred {\n         from: Option<AccountId>,\n         to: Option<AccountId>,\n         value: Balance,\n     }\n\n     #[ink(storage)]\n     pub struct Erc20 {\n         total_supply: Balance,\n         // more fields ...\n     }\n\n     impl Erc20 {\n         #[ink(constructor)]\n         pub fn new(initial_supply: Balance) -> Self {\n             let caller = Self::env().caller();\n             Self::env().emit_event(Transferred {\n                 from: None,\n                 to: Some(caller),\n                 value: initial_supply,\n             });\n             Self { total_supply: initial_supply }\n         }\n\n         #[ink(message)]\n         pub fn total_supply(&self) -> Balance {\n             self.total_supply\n         }\n     }\n }\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example-flipper",children:"Example: Flipper"}),"\n",(0,i.jsx)(n.p,{children:'The below code shows the complete implementation of the so-called Flipper\nink! smart contract.\nFor us it acts as the "Hello, World!" of the ink! smart contracts because\nit is minimal while still providing some more or less useful functionality.'}),"\n",(0,i.jsxs)(n.p,{children:["It controls a single ",(0,i.jsx)(n.code,{children:"bool"})," value that can be either ",(0,i.jsx)(n.code,{children:"false"})," or ",(0,i.jsx)(n.code,{children:"true"}),"\nand allows the user to flip this value using the ",(0,i.jsx)(n.code,{children:"Flipper::flip"})," message\nor retrieve the current value using ",(0,i.jsx)(n.code,{children:"Flipper::get"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::contract]\npub mod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        /// Creates a new flipper smart contract initialized with the given value.\n        #[ink(constructor)]\n        pub fn new(init_value: bool) -> Self {\n            Self { value: init_value }\n        }\n\n        /// Flips the current value of the Flipper's bool.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value of the Flipper's bool.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,L.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},94392:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNjAwIDUwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYwMCA1MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRDdCNkZBO30KCS5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojQkE4MUY5O30KCS5zdDJ7ZmlsbDojQkE4MUY5O30KCS5zdDN7ZmlsbDojRUFEOUZDO30KCS5zdDR7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPGc+CgkJCQk8Zz4KCQkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYwMCwyNC44djQyOC41YzAsOC4zLTQuMSwxNS43LTEwLjMsMjAuMmMtMi40LDEuNy01LjgsMC45LTYuOS0xLjljLTMuOS05LjctMTYuNC0xNi44LTMxLjItMTYuOAoJCQkJCQljLTkuNSwwLTE4LDIuOS0yMy45LDcuNmMtMS45LDEuNS00LjYsMS4zLTYuMi0wLjZjLTcuNy04LjctMjEuMi0xNC41LTM2LjctMTQuNWMtMTMuOSwwLTI2LjQsNC43LTM0LjMsMTIKCQkJCQkJYy0xLjgsMS43LTQuNywxLjUtNi40LTAuM2MtOS4zLTEwLjEtMjUuOC0xNi44LTQ0LjYtMTYuOGMtMjcuMSwwLTQ5LjMsMTMuOS01Mi40LDMxLjdjLTAuNCwyLjQtMi41LDQuMS00LjksNC4xbC0xMzE3LjIsMAoJCQkJCQlDMTEuMSw0NzguMiwwLDQ2Ny4xLDAsNDUzLjRWMjQuOEMwLDExLjEsMTEuMSwwLDI0LjgsMGgxNTUwLjNDMTU4OC45LDAsMTYwMCwxMS4xLDE2MDAsMjQuOHoiLz4KCQkJCTwvZz4KCQkJPC9nPgoJCQk8Zz4KCQkJCTxnPgoJCQkJCTxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxMzk5LjUiIGN5PSI0NzkuMiIgcng9IjMzLjkiIHJ5PSIyMC44Ii8+CgkJCQk8L2c+CgkJCQk8Zz4KCQkJCQk8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iMTQ4My44IiBjeT0iNDc4LjciIHJ4PSIyNy45IiByeT0iMTcuMiIvPgoJCQkJPC9nPgoJCQkJPGc+CgkJCQkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjE1NTIuNCIgY3k9IjQ3OSIgcng9IjE4LjYiIHJ5PSIxMS41Ii8+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTYwMCwzOTUuNXY1Ny44YzAsOC4zLTQuMSwxNS43LTEwLjQsMjAuMmMtMi40LDEuNy01LjgsMC45LTYuOS0xLjljLTMuOS05LjctMTYuNC0xNi44LTMxLjItMTYuOAoJCQljLTkuNSwwLTE4LDIuOS0yMy45LDcuNWMtMS45LDEuNS00LjYsMS4yLTYuMi0wLjZjLTcuNy04LjctMjEuMi0xNC41LTM2LjctMTQuNWMtMTMuOSwwLTI2LjQsNC43LTM0LjMsMTIKCQkJYy0xLjgsMS43LTQuNywxLjYtNi40LTAuM2MtOS4zLTEwLjEtMjUuOC0xNi44LTQ0LjYtMTYuOGMtMjcuMSwwLTQ5LjMsMTMuOS01Mi40LDMxLjdjLTAuNCwyLjQtMi41LDQuMS00LjksNC4xbC0xMzE3LjIsMAoJCQlDMTEuMSw0NzguMiwwLDQ2Ny4xLDAsNDUzLjRWMzA2LjRjMCwwLDI4Mi43LDg5LDQ2NS41LDg4LjlDNzU1LDM5NS4yLDExODAuNiwyNjguNywxNjAwLDM5NS41eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MyIgZD0iTTAsMjEuM2wwLDU4LjZDNTI2LjgsMzEsODY0LjMsMjE3LjksMTYwMCw3NlYyMS4zYzAtMTEuOC0xMS4xLTIxLjMtMjQuOC0yMS4zTDI0LjgsMEMxMS4xLDAsMCw5LjUsMCwyMS4zeiIKCQkJLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMTE3MS4zLDMyMS45SDQyOC43Yy0xNy42LDAtMzEuOS0xNC4zLTMxLjktMzEuOVYxODUuMWMwLTE3LjYsMTQuMy0zMS45LDMxLjktMzEuOWg3NDIuNgoJCQkJYzE3LjYsMCwzMS45LDE0LjMsMzEuOSwzMS45djEwNC45QzEyMDMuMiwzMDcuNiwxMTg4LjksMzIxLjksMTE3MS4zLDMyMS45eiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggZD0iTTQ1NS4zLDI2NS40bDEuOS0xNS4xaC01Ljl2LTQuMmg2LjRsMS4zLTExaC02LjN2LTQuM2g2LjhsMS43LTEzLjVoMy45bC0xLjYsMTMuNWg5LjhsMS43LTEzLjVoMy45bC0xLjYsMTMuNWg1Ljl2NC4zCgkJCQloLTYuNGwtMS4zLDExaDYuM3Y0LjJoLTYuOGwtMS45LDE1LjFoLTRsMS44LTE1LjFoLTkuOGwtMS44LDE1LjFINDU1LjN6IE00NjEuNywyNDYuMWg5LjhsMS4zLTExSDQ2M0w0NjEuNywyNDYuMXoiLz4KCQkJPHBhdGggZD0iTTUwNS45LDI3Ni42VjIxM2gyMC41djMuNWgtMTUuNnY1Ni43aDE1LjZ2My41SDUwNS45eiIvPgoJCQk8cGF0aCBkPSJNNTU3LDI2NS40di0zMWgtMTYuN3YtNWgyMi44djM2SDU1N3ogTTU1OS40LDIyMS45Yy0xLjQsMC0yLjUtMC40LTMuNS0xLjNjLTAuOS0wLjktMS40LTItMS40LTMuNAoJCQkJYzAtMS40LDAuNS0yLjYsMS40LTMuNGMwLjktMC45LDIuMS0xLjMsMy41LTEuM2MxLjQsMCwyLjUsMC40LDMuNSwxLjNjMC45LDAuOSwxLjQsMiwxLjQsMy40YzAsMS40LTAuNSwyLjYtMS40LDMuNAoJCQkJQzU2MS45LDIyMS41LDU2MC43LDIyMS45LDU1OS40LDIyMS45eiIvPgoJCQk8cGF0aCBkPSJNNTg0LjksMjY1LjR2LTM2aDVsMC41LDYuMWgwLjNjMS45LTIsMy45LTMuNyw2LjEtNWMyLjItMS4zLDQuNy0yLDcuNS0yYzQuMiwwLDcuNCwxLjIsOS40LDMuN2MyLDIuNSwzLDYuMSwzLDEwLjh2MjIuMwoJCQkJaC02LjF2LTIxLjVjMC0zLjQtMC42LTUuOS0xLjktNy42Yy0xLjMtMS43LTMuNC0yLjUtNi40LTIuNWMtMi4xLDAtNCwwLjUtNS43LDEuNmMtMS43LDEuMS0zLjYsMi43LTUuNyw0Ljl2MjUuMUg1ODQuOXoiLz4KCQkJPHBhdGggZD0iTTYzMC4yLDI2NS40di01Mi43aDYuMXYzNS43aDAuM2wxOS40LTE4LjloN2wtMTQuNCwxNC4xbDE2LjMsMjEuOGgtNi44bC0xMy4yLTE4LjFsLTguNSw4LjR2OS44SDYzMC4yeiIvPgoJCQk8cGF0aCBkPSJNNjg5LDIzOS44Yy0xLjcsMC0zLjEtMC42LTQuMy0xLjdjLTEuMi0xLjItMS43LTIuNy0xLjctNC41YzAtMS45LDAuNi0zLjQsMS43LTQuNmMxLjItMS4yLDIuNi0xLjcsNC4zLTEuNwoJCQkJYzEuNywwLDMuMSwwLjYsNC4zLDEuN2MxLjIsMS4yLDEuNywyLjcsMS43LDQuNmMwLDEuOC0wLjYsMy4zLTEuNyw0LjVDNjkyLjEsMjM5LjIsNjkwLjcsMjM5LjgsNjg5LDIzOS44eiBNNjg5LDI2Ni4zCgkJCQljLTEuNywwLTMuMS0wLjYtNC4zLTEuN2MtMS4yLTEuMi0xLjctMi43LTEuNy00LjVjMC0xLjksMC42LTMuNCwxLjctNC42YzEuMi0xLjIsMi42LTEuNyw0LjMtMS43YzEuNywwLDMuMSwwLjYsNC4zLDEuNwoJCQkJYzEuMiwxLjIsMS43LDIuNywxLjcsNC42YzAsMS44LTAuNiwzLjMtMS43LDQuNUM2OTIuMSwyNjUuNyw2OTAuNywyNjYuMyw2ODksMjY2LjN6Ii8+CgkJCTxwYXRoIGQ9Ik03MzMuNCwyMzkuOGMtMS43LDAtMy4xLTAuNi00LjMtMS43Yy0xLjItMS4yLTEuNy0yLjctMS43LTQuNWMwLTEuOSwwLjYtMy40LDEuNy00LjZjMS4yLTEuMiwyLjYtMS43LDQuMy0xLjcKCQkJCWMxLjcsMCwzLjEsMC42LDQuMywxLjdjMS4yLDEuMiwxLjcsMi43LDEuNyw0LjZjMCwxLjgtMC42LDMuMy0xLjcsNC41QzczNi41LDIzOS4yLDczNS4xLDIzOS44LDczMy40LDIzOS44eiBNNzMzLjQsMjY2LjMKCQkJCWMtMS43LDAtMy4xLTAuNi00LjMtMS43Yy0xLjItMS4yLTEuNy0yLjctMS43LTQuNWMwLTEuOSwwLjYtMy40LDEuNy00LjZjMS4yLTEuMiwyLjYtMS43LDQuMy0xLjdjMS43LDAsMy4xLDAuNiw0LjMsMS43CgkJCQljMS4yLDEuMiwxLjcsMi43LDEuNyw0LjZjMCwxLjgtMC42LDMuMy0xLjcsNC41QzczNi41LDI2NS43LDczNS4xLDI2Ni4zLDczMy40LDI2Ni4zeiIvPgoJCQk8cGF0aCBkPSJNNzgxLjIsMjY2LjNjLTMuNywwLTcuMS0wLjctMTAuMS0yLjJjLTMtMS41LTUuMy0zLjYtNy02LjRjLTEuNy0yLjgtMi42LTYuMi0yLjYtMTAuMWMwLTQsMC45LTcuNSwyLjctMTAuMwoJCQkJYzEuOC0yLjgsNC4zLTUsNy4zLTYuNGMzLjEtMS41LDYuNC0yLjIsMTAtMi4yYzIuOSwwLDUuNSwwLjUsNy42LDEuNmMyLjIsMSw0LDIuMyw1LjUsMy43bC0zLDMuOWMtMS41LTEuMy0zLTIuMy00LjYtMwoJCQkJYy0xLjYtMC43LTMuMy0xLjEtNS4yLTEuMWMtMi44LDAtNS4yLDAuNi03LjMsMS43Yy0yLjEsMS4yLTMuNywyLjgtNC45LDQuOWMtMS4yLDIuMS0xLjgsNC41LTEuOCw3LjNjMCwyLjcsMC42LDUuMSwxLjcsNy4yCgkJCQljMS4yLDIuMSwyLjgsMy43LDQuOCw0LjhzNC41LDEuNyw3LjMsMS43YzIuMiwwLDQuMy0wLjQsNi4xLTEuM2MxLjgtMC45LDMuNS0xLjksNS0zLjJsMi43LDMuOWMtMiwxLjgtNC4yLDMuMi02LjYsNC4xCgkJCQlDNzg2LjQsMjY1LjgsNzgzLjksMjY2LjMsNzgxLjIsMjY2LjN6Ii8+CgkJCTxwYXRoIGQ9Ik04MjIuMiwyNjYuM2MtMy4yLDAtNi4xLTAuNy04LjgtMi4yYy0yLjctMS41LTQuOS0zLjYtNi41LTYuNGMtMS43LTIuOC0yLjUtNi4yLTIuNS0xMC4xYzAtNCwwLjgtNy41LDIuNS0xMC4zCgkJCQljMS43LTIuOCwzLjgtNSw2LjUtNi40YzIuNy0xLjUsNS42LTIuMiw4LjgtMi4yYzMuMiwwLDYuMSwwLjcsOC44LDIuMmMyLjcsMS41LDQuOSwzLjYsNi41LDYuNGMxLjcsMi44LDIuNSw2LjIsMi41LDEwLjMKCQkJCWMwLDMuOS0wLjgsNy4zLTIuNSwxMC4xYy0xLjcsMi44LTMuOCw1LTYuNSw2LjRDODI4LjMsMjY1LjUsODI1LjQsMjY2LjMsODIyLjIsMjY2LjN6IE04MjIuMiwyNjEuM2MzLjUsMCw2LjItMS4zLDguMy0zLjgKCQkJCWMyLjEtMi41LDMuMS01LjksMy4xLTEwYzAtNC4xLTEtNy41LTMuMS0xMC4xYy0yLjEtMi42LTQuOS0zLjgtOC4zLTMuOGMtMy41LDAtNi4yLDEuMy04LjMsMy44Yy0yLjEsMi42LTMuMSw1LjktMy4xLDEwLjEKCQkJCWMwLDQuMSwxLDcuNCwzLjEsMTBDODE2LDI2MCw4MTguNywyNjEuMyw4MjIuMiwyNjEuM3oiLz4KCQkJPHBhdGggZD0iTTg1MS4zLDI2NS40di0zNmg1bDAuNSw2LjFoMC4zYzEuOS0yLDMuOS0zLjcsNi4xLTVjMi4yLTEuMyw0LjctMiw3LjUtMmM0LjIsMCw3LjQsMS4yLDkuNCwzLjdjMiwyLjUsMyw2LjEsMywxMC44djIyLjMKCQkJCUg4Nzd2LTIxLjVjMC0zLjQtMC42LTUuOS0xLjktNy42Yy0xLjMtMS43LTMuNC0yLjUtNi40LTIuNWMtMi4xLDAtNCwwLjUtNS43LDEuNmMtMS43LDEuMS0zLjYsMi43LTUuNyw0Ljl2MjUuMUg4NTEuM3oiLz4KCQkJPHBhdGggZD0iTTkxOCwyNjYuM2MtMy41LDAtNi4zLTAuNi04LjMtMS45Yy0yLTEuMy0zLjUtMy00LjMtNS4yYy0wLjktMi4yLTEuMy00LjgtMS4zLTcuOHYtMTdoLTEwLjF2LTQuNmwxMC40LTAuNGwwLjgtMTEuNWg1CgkJCQl2MTEuNWgxNy43djVoLTE3Ljd2MTcuMWMwLDMuMiwwLjcsNS42LDIsNy4zYzEuMywxLjcsMy43LDIuNSw3LjEsMi41YzEuNywwLDMuMy0wLjEsNC43LTAuNGMxLjQtMC4zLDIuNy0wLjcsNC0xLjJsMS4zLDQuNAoJCQkJYy0xLjYsMC42LTMuMywxLjEtNS4xLDEuNVM5MjAuMiwyNjYuMyw5MTgsMjY2LjN6Ii8+CgkJCTxwYXRoIGQ9Ik05NDQsMjY1LjR2LTM2aDVsMC41LDguNWgwLjJjMS45LTIuOSw0LjItNS4yLDctNi45YzIuOC0xLjcsNS44LTIuNSw5LjEtMi41YzEuMywwLDIuNiwwLjEsMy43LDAuMwoJCQkJYzEuMiwwLjIsMi4zLDAuNiwzLjQsMS4xbC0xLjQsNS4zYy0xLjItMC40LTIuMy0wLjgtMy4yLTFjLTAuOS0wLjItMi0wLjMtMy41LTAuM2MtMi43LDAtNS4zLDAuOC03LjgsMi4zYy0yLjUsMS42LTQuOCw0LjItNyw4CgkJCQl2MjEuMUg5NDR6Ii8+CgkJCTxwYXRoIGQ9Ik05OTUuOCwyNjYuM2MtMi4yLDAtNC4zLTAuNC02LjEtMS4yYy0xLjgtMC44LTMuMy0yLTQuNC0zLjVjLTEuMS0xLjUtMS43LTMuNC0xLjctNS41YzAtMi43LDAuOS01LDIuNi02LjgKCQkJCWMxLjgtMS44LDQuNi0zLjIsOC40LTQuM2MzLjgtMS4xLDguOS0xLjksMTUtMi40YzAtMS42LTAuNC0zLjEtMS00LjVjLTAuNi0xLjQtMS42LTIuNS0zLTMuM2MtMS40LTAuOC0zLjItMS4zLTUuNS0xLjMKCQkJCWMtMi4zLDAtNC42LDAuNS02LjgsMS40Yy0yLjIsMC45LTQuMSwxLjktNS44LDIuOWwtMi40LTQuMWMxLjgtMS4yLDQuMi0yLjMsNy0zLjVjMi44LTEuMSw1LjgtMS43LDktMS43YzQuOSwwLDguNiwxLjMsMTEsNAoJCQkJYzIuNCwyLjcsMy42LDYuMywzLjYsMTAuOHYyMi4xaC01bC0wLjUtNC45aC0wLjJjLTIsMS41LTQuMiwyLjktNi43LDRDMTAwMC45LDI2NS43LDk5OC40LDI2Ni4zLDk5NS44LDI2Ni4zeiBNOTk3LjQsMjYxLjQKCQkJCWMyLDAsNC4xLTAuNSw2LjEtMS40YzItMC45LDQuMS0yLjIsNi4xLTMuOXYtOS41Yy01LjEsMC40LTkuMiwxLTEyLjEsMS44Yy0yLjksMC44LTUsMS44LTYuMiwzYy0xLjIsMS4yLTEuOCwyLjYtMS44LDQuMgoJCQkJYzAsMiwwLjgsMy41LDIuNCw0LjRDOTkzLjUsMjYwLjksOTk1LjQsMjYxLjQsOTk3LjQsMjYxLjR6Ii8+CgkJCTxwYXRoIGQ9Ik0xMDQ3LjYsMjY2LjNjLTMuNywwLTcuMS0wLjctMTAuMS0yLjJjLTMtMS41LTUuMy0zLjYtNy02LjRjLTEuNy0yLjgtMi42LTYuMi0yLjYtMTAuMWMwLTQsMC45LTcuNSwyLjctMTAuMwoJCQkJYzEuOC0yLjgsNC4zLTUsNy4zLTYuNGMzLjEtMS41LDYuNC0yLjIsMTAtMi4yYzIuOSwwLDUuNSwwLjUsNy42LDEuNmMyLjIsMSw0LDIuMyw1LjUsMy43bC0zLDMuOWMtMS41LTEuMy0zLTIuMy00LjYtMwoJCQkJYy0xLjYtMC43LTMuMy0xLjEtNS4yLTEuMWMtMi44LDAtNS4yLDAuNi03LjMsMS43Yy0yLjEsMS4yLTMuNywyLjgtNC45LDQuOWMtMS4yLDIuMS0xLjgsNC41LTEuOCw3LjNjMCwyLjcsMC42LDUuMSwxLjcsNy4yCgkJCQljMS4yLDIuMSwyLjgsMy43LDQuOCw0LjhzNC41LDEuNyw3LjMsMS43YzIuMiwwLDQuMy0wLjQsNi4xLTEuM2MxLjgtMC45LDMuNS0xLjksNS0zLjJsMi43LDMuOWMtMiwxLjgtNC4yLDMuMi02LjYsNC4xCgkJCQlDMTA1Mi44LDI2NS44LDEwNTAuMywyNjYuMywxMDQ3LjYsMjY2LjN6Ii8+CgkJCTxwYXRoIGQ9Ik0xMDk1LjYsMjY2LjNjLTMuNSwwLTYuMy0wLjYtOC4zLTEuOWMtMi0xLjMtMy41LTMtNC4zLTUuMmMtMC45LTIuMi0xLjMtNC44LTEuMy03Ljh2LTE3aC0xMC4xdi00LjZsMTAuNC0wLjRsMC44LTExLjUKCQkJCWg1djExLjVoMTcuN3Y1aC0xNy43djE3LjFjMCwzLjIsMC43LDUuNiwyLDcuM2MxLjMsMS43LDMuNywyLjUsNy4xLDIuNWMxLjcsMCwzLjMtMC4xLDQuNy0wLjRjMS40LTAuMywyLjctMC43LDQtMS4ybDEuMyw0LjQKCQkJCWMtMS42LDAuNi0zLjMsMS4xLTUuMSwxLjVTMTA5Ny44LDI2Ni4zLDEwOTUuNiwyNjYuM3oiLz4KCQkJPHBhdGggZD0iTTExMTgsMjc2LjZ2LTMuNWgxNS42di01Ni43SDExMThWMjEzaDIwLjV2NjMuNkgxMTE4eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iMTM5OS41IiBjeT0iNDc5LjIiIHJ4PSIzMy45IiByeT0iMjAuOCIvPgoJCTwvZz4KCQk8Zz4KCQkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjE0ODMuOCIgY3k9IjQ3OC43IiByeD0iMjcuOSIgcnk9IjE3LjIiLz4KCQk8L2c+CgkJPGc+CgkJCTxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxNTUyLjQiIGN5PSI0NzkiIHJ4PSIxOC42IiByeT0iMTEuNSIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K"},28453:(e,n,t)=>{t.d(n,{R:()=>M,x:()=>u});var s=t(96540);const i={},L=s.createContext(i);function M(e){const n=s.useContext(L);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:M(e.components),s.createElement(L.Provider,{value:n},e.children)}}}]);
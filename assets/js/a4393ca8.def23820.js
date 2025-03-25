"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2325],{88166:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"debugging/replays","title":"Replays","description":"Magnifying Glass Title Picture","source":"@site/versioned_docs/version-v6/debugging/replays.md","sourceDirName":"debugging","slug":"/contract-debugging/transaction-extrinsic-replays","permalink":"/ink-docs/docs/v6/contract-debugging/transaction-extrinsic-replays","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/debugging/replays.md","tags":[],"version":"v6","frontMatter":{"title":"Replays","slug":"/contract-debugging/transaction-extrinsic-replays","hide_title":true},"sidebar":"reference","previous":{"title":"Decoding raw transactions","permalink":"/ink-docs/docs/v6/contract-debugging/decoding-transactions"},"next":{"title":"Pre-compiles","permalink":"/ink-docs/docs/v6/contract-debugging/pre-compiles"}}');var c=t(74848),s=t(28453);const i={title:"Replays",slug:"/contract-debugging/transaction-extrinsic-replays",hide_title:!0},r="Replays",o={},l=[{value:"Replay and Debug a Block",id:"replay-and-debug-a-block",level:2},{value:"Fork Node and Replay Transactions",id:"fork-node-and-replay-transactions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"Magnifying Glass Title Picture",src:t(25538).A+"",width:"1600",height:"500"})}),"\n",(0,c.jsxs)(n.admonition,{type:"caution",children:[(0,c.jsx)(n.p,{children:"This section has not yet been updated to ink! v6."}),(0,c.jsx)(n.p,{children:"TODO Verify if this still works."})]}),"\n",(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"replays",children:"Replays"})}),"\n",(0,c.jsx)(n.p,{children:"On this page we'll examine possibilities of replaying on-chain action."}),"\n",(0,c.jsx)(n.h2,{id:"replay-and-debug-a-block",children:"Replay and Debug a Block"}),"\n",(0,c.jsxs)(n.p,{children:["To replay a transaction, you can use ",(0,c.jsx)(n.a,{href:"https://github.com/AcalaNetwork/chopsticks",children:"Chopstick"})," to create a local fork of the chain and replay the block with trace-level logging."]}),"\n",(0,c.jsxs)(n.p,{children:["Assuming you have a node that you can connect to at ",(0,c.jsx)(n.code,{children:"$ENDPOINT"})," and the transaction you want to replay is in block ",(0,c.jsx)(n.code,{children:"$BLOCK_HASH"}),", you can use the following command:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ npx @acala-network/chopsticks@latest run-block \\\n    --endpoint $ENDPOINT \\\n    --block $BLOCK_HASH \\\n    --runtime-log-level 5 \\\n    | grep runtime::contracts\n"})}),"\n",(0,c.jsxs)(n.p,{children:["This command replays the block with trace-level logging enabled. By filtering the output with ",(0,c.jsx)(n.code,{children:"runtime::contracts"}),", you can view all the contract calls in the block:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"runtime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [246, 118, 44, 201]\nruntime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [254, 91, 216, 234, 1, 0, 0, 0]\nruntime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }\nruntime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }\n"})}),"\n",(0,c.jsx)(n.p,{children:"From here, you can identify the call you are interested in and decode the data payload:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ echo 254, 91, 216, 234, 1, 0, 0, 0 \\\n    | tr ',' ' ' \\\n    | xargs printf '%02x' \\\n    | xargs cargo contract decode message -d\n"})}),"\n",(0,c.jsx)(n.p,{children:"This command will output the following:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"Decoded data: inc_by { n: 1 }\n"})}),"\n",(0,c.jsx)(n.h2,{id:"fork-node-and-replay-transactions",children:"Fork Node and Replay Transactions"}),"\n",(0,c.jsxs)(n.admonition,{type:"caution",children:[(0,c.jsx)(n.p,{children:"This section has not yet been updated to ink! v6."}),(0,c.jsx)(n.p,{children:"TODO Verify if this still works."})]}),"\n",(0,c.jsxs)(n.p,{children:["You can also use ",(0,c.jsx)(n.a,{href:"https://github.com/AcalaNetwork/chopsticks",children:"Chopstick"})," to start a local fork of your chain."]}),"\n",(0,c.jsxs)(n.p,{children:["This command starts a fork beginning at block ",(0,c.jsx)(n.code,{children:"$BLOCK_HASH"}),". You can connect to this fork using ",(0,c.jsx)(n.code,{children:"ws://localhost:8000"})," to submit extrinsics via PolkadotJs or ",(0,c.jsx)(n.code,{children:"cargo contract"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ npx @acala-network/chopsticks@latest \\\n    --endpoint $ENDPOINT \\\n    --block $BLOCK_HASH \\\n    --runtime-log-level 5\n"})}),"\n",(0,c.jsx)(n.p,{children:"Here, for example, you can re-run the transaction that we decoded in the previous section:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ cargo contract call \\\n    --contract $CONTRACT_ADDR \\\n    --message inc_by --args 1 \\\n    --suri //Alice \\\n    --url ws://localhost:8000\n"})}),"\n",(0,c.jsx)(n.p,{children:"Since trace-level logging is used, you will receive detailed information about all the host functions called during the execution of the contract:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"runtime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [254, 91, 216, 234, 2, 0, 0, 0]\nruntime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }\nruntime::contracts           DEBUG: Execution finished with debug buffer: seal0::value_transferred(out_ptr: 65488, out_len_ptr: 65516) = Ok(())\nseal0::input(out_ptr: 65536, out_len_ptr: 65524) = Ok(())\nseal1::get_storage(key_ptr: 65536, key_len: 4, out_ptr: 65540, out_len_ptr: 65524) = Ok(Success)\nseal2::set_storage(key_ptr: 65536, key_len: 4, value_ptr: 65540, value_len: 4) = Ok(4)\nseal0::seal_return(flags: 0, data_ptr: 65536, data_len: 1) = Err(TrapReason::Return(ReturnData { flags: 0, data: [0] }))\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},25538:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/magnifying-glass-3ca6f9b0db517931b899b678a8543a81.svg"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(96540);const c={},s=a.createContext(c);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8231],{98310:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"basics/verification/sirato","title":"Sirato","description":"Verification Title Picture","source":"@site/versioned_docs/version-v4/basics/verification/sirato.md","sourceDirName":"basics/verification","slug":"/basics/verification/sirato","permalink":"/ink-docs/docs/v4/basics/verification/sirato","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v4/basics/verification/sirato.md","tags":[],"version":"v4","frontMatter":{"title":"Sirato","slug":"/basics/verification/sirato","hide_title":true},"sidebar":"reference","previous":{"title":"Contract Verification","permalink":"/ink-docs/docs/v4/basics/verification/contract-verification"},"next":{"title":"Overview","permalink":"/ink-docs/docs/v4/macros-attributes"}}');var r=n(74848),a=n(28453);const s={title:"Sirato",slug:"/basics/verification/sirato",hide_title:!0},o="Sirato Verification Service",c={},d=[{value:"Performing a verifiable build",id:"performing-a-verifiable-build",level:2},{value:"Verifying an ink! smart contract",id:"verifying-an-ink-smart-contract",level:2},{value:"Using the verification service web app",id:"using-the-verification-service-web-app",level:3},{value:"Using Sirato",id:"using-sirato",level:3},{value:"Unverified metadata upload",id:"unverified-metadata-upload",level:3}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Verification Title Picture",src:n(599).A+"",width:"1600",height:"500"})}),"\n",(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"sirato-verification-service",children:"Sirato Verification Service"})}),"\n",(0,r.jsxs)(i.p,{children:["Web3 Labs have made available a public version of their\n",(0,r.jsx)(i.a,{href:"https://github.com/web3labs/ink-verifier-server",children:"verification service"}),"\nto cater for the ink! and DotSama ecosystems. This can be used alongside\nthe verifiable build image container to verify ink! smart contracts."]}),"\n",(0,r.jsx)(i.p,{children:"The following steps outline how to create a verifiable build and\nsubsequently verify it using these services."}),"\n",(0,r.jsx)(i.h2,{id:"performing-a-verifiable-build",children:"Performing a verifiable build"}),"\n",(0,r.jsxs)(i.p,{children:["You should already be familiar with using ",(0,r.jsx)(i.code,{children:"cargo-contract"})," to\n",(0,r.jsx)(i.a,{href:"/ink-docs/docs/v4/getting-started/building-your-contract",children:"compile your contract"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"You will need to install the ink! verified image crate:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"cargo install \u2014 git \nhttps://github.com/web3labs/ink-verifier-image.git\n"})}),"\n",(0,r.jsx)(i.p,{children:"You can now perform a verified build by running the following\ncommand in the smart contracts project folder:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"build-verifiable-ink -i ghcr.io/web3labs/ink-verifier .\n"})}),"\n",(0,r.jsx)(i.admonition,{type:"note",children:(0,r.jsx)(i.p,{children:"Reproducable builds only work with cargo-contract >= 2.0.2 and\ncontracts generated with that version onwards. To work around\nthis you can use the signed metadata file instead."})}),"\n",(0,r.jsxs)(i.p,{children:["If you were to use the\n",(0,r.jsx)(i.a,{href:"/ink-docs/docs/v4/getting-started/creating-an-ink-project",children:"flipper example"})," you would see\noutput similar to the below:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"...\n [5/5] Generating bundle\n\nOriginal wasm size: 20.6K, Optimized: 1.4K\n\nThe contract was built in RELEASE mode.\n\nYour contract artifacts are ready. You can find them in:\n/build/package/src/target/ink\n\n  - flipper.contract (code + metadata)\n  - flipper.wasm (the contract's code)\n  - flipper.json (the contract's metadata)\n  adding: src/ (stored 0%)\n  adding: src/Cargo.lock (deflated 75%)\n  adding: src/Cargo.toml (deflated 52%)\n  adding: src/lib.rs (deflated 72%)\n  adding: flipper.contract (deflated 64%)\nVerification package in /build/target/ink/package.zip\nArchive:  /build/target/ink/package.zip\n  Length      Date    Time    Name\n---------  ---------- -----   ----\n        0  2023-03-08 21:41   src/\n   105695  2023-03-08 21:28   src/Cargo.lock\n      573  2023-03-08 20:40   src/Cargo.toml\n     5177  2023-03-08 20:40   src/lib.rs\n     5278  2023-03-08 21:41   flipper.contract\n---------                     -------\n   116723                     5 files\n"})}),"\n",(0,r.jsx)(i.p,{children:"If you have any issues running the build, you can built it yourself by\nrunning the following commands:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"cd ../\ngit clone https://github.com/web3labs/ink-verifier-image.git\ncd ink-verifier-image\ndocker build . -t ink-verifier:develop\ncd ../flipper\nbuild-verifiable-ink -t develop .\n"})}),"\n",(0,r.jsx)(i.p,{children:"There will now be a package zipfile available which contains the contract\nsource code, metadata and Wasm binary:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"tree -L 3\n.\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 lib.rs\n\u2514\u2500\u2500 target\n    \u2514\u2500\u2500 ink\n        \u2514\u2500\u2500 package.zip\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Now that you have created the verified build, you can\n",(0,r.jsx)(i.a,{href:"/ink-docs/docs/v4/getting-started/deploy-your-contract",children:"deploy your contract"}),"."]}),"\n",(0,r.jsx)(i.p,{children:"Once deployed, you will need to make a note of the contract's code hash in\norder to verify it."}),"\n",(0,r.jsx)(i.h2,{id:"verifying-an-ink-smart-contract",children:"Verifying an ink! smart contract"}),"\n",(0,r.jsx)(i.h3,{id:"using-the-verification-service-web-app",children:"Using the verification service web app"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.a,{href:"https://github.com/web3labs/ink-verifier-server",children:"ink! Verification Service"}),"\nis a RESTful web service created for verifying smart contracts deployed using\n",(0,r.jsx)(i.a,{href:"https://crates.io/crates/pallet-contracts",children:"pallet-contracts"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Web3 Labs host a public instance of the service at\n",(0,r.jsx)(i.a,{href:"https://ink-verifier.sirato.xyz/",children:"ink-verifier.sirato.xyz"}),". A Swagger interface\nto the service is also avilable at\n",(0,r.jsx)(i.a,{href:"https://ink-verifier.sirato.xyz/api/api-docs/",children:"ink-verifier.sirato.xyz/api/api-docs/"}),"."]}),"\n",(0,r.jsx)("img",{src:"/img/verification-service-api.png",alt:"ink! Verification Service Swagger endpoint"}),"\n",(0,r.jsx)(i.p,{children:"The verification process entails the following steps:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"A requestor uploads the source packge archive for a network and code hash"}),"\n",(0,r.jsxs)(i.li,{children:["The server checks that:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The source code for the network and code hash is not already verified or\nbeing verified"}),"\n",(0,r.jsx)(i.li,{children:"There is enough host resources to start a new verification"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.li,{children:"The server downloads the pristine Wasm byte code correspondening to the\nprovided network and code hash"}),"\n",(0,r.jsx)(i.li,{children:"The server streams the archive if it is a compressed archive"}),"\n",(0,r.jsx)(i.li,{children:"The server moves the staging files to the processing directory"}),"\n",(0,r.jsx)(i.li,{children:"The server runs a container process for the verifier image to verify the\npackage in processing. See source code verification workflow for details"}),"\n",(0,r.jsx)(i.li,{children:"On the event of container exit the server moves the verified artificats to\nthe publish directory if the verification was successful, otherwise keeps a log in the errors directory"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["It works with any network that is defined in the\n",(0,r.jsx)(i.a,{href:"https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/endpoints",children:"@polkadot/apps-config"}),"\npackage."]}),"\n",(0,r.jsxs)(i.p,{children:["In order to verify a deployed contract using the service you will need to use\nthe ",(0,r.jsx)(i.code,{children:"/verify/{network}/{codeHash}"})," endpoint which is documented\n",(0,r.jsx)(i.a,{href:"https://ink-verifier.sirato.xyz/api/api-docs/#/default/post_verify__network___codeHash_",children:"here"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Once a contract has been verified you can use the\n",(0,r.jsx)(i.code,{children:"/contract/{codeHash}/metadata.json"})," and ",(0,r.jsx)(i.code,{children:"/contract/{codeHash}/src"})," endpoints\nto retrieve metadata and source code respectively."]}),"\n",(0,r.jsx)(i.h3,{id:"using-sirato",children:"Using Sirato"}),"\n",(0,r.jsx)(i.p,{children:"Sirato Substrate is a smart contract explorer for ink! smart contracts. It\nintegrates with the contract verification service allowing users to upload\npackage files generated by the verifiable build image via the Sirato UI instead\nof having to use the web endpoint."}),"\n",(0,r.jsx)(i.p,{children:"In addition once a contract has been verified, details of any contract activity\nand events taking place on a parachain or Substrate chain are decoded for the\nuser in Sirato."}),"\n",(0,r.jsxs)(i.p,{children:["For instance, in order to verify a contract deployed on the Rococo parachain,\nyou can head to the Sirato instance at\n",(0,r.jsx)(i.a,{href:"https://substrate.sirato.xyz/",children:"substrate.sirato.xyz"}),"."]}),"\n",(0,r.jsx)("img",{src:"/img/sirato-substrate.png",alt:"Sirato Substrate"}),"\n",(0,r.jsx)(i.p,{children:"From there you can navigate to the deployed code by clicking on the Code\nreference that matches the code hash returned by the cargo contract instantiate\ncall."}),"\n",(0,r.jsxs)(i.p,{children:["Alternatively, you can navigate directly by entering the URL\n",(0,r.jsx)(i.code,{children:"https://substrate.sirato.xyz/codes/0x<code-hash>"}),"."]}),"\n",(0,r.jsx)("img",{src:"/img/sirato-contract-instance.png",alt:"Sirato contract instance view"}),"\n",(0,r.jsx)(i.p,{children:"Now click on the source code tab:"}),"\n",(0,r.jsx)("img",{src:"/img/sirato-package-upload.png",alt:"Sirato package upload page"}),"\n",(0,r.jsxs)(i.p,{children:["Then upload the verified ",(0,r.jsx)(i.code,{children:"package.zip"})," file that you generated earlier."]}),"\n",(0,r.jsx)("img",{src:"/img/sirato-package-upload-done.png",alt:"Sirato package upload complete"}),"\n",(0,r.jsx)(i.p,{children:"You can now start the verification process which kicks off a build of the\nprovided resources."}),"\n",(0,r.jsx)("img",{src:"/img/sirato-package-verify.png",alt:"Sirato package verification"}),"\n",(0,r.jsxs)(i.p,{children:["Once the process has finished you will see the message\n",(0,r.jsx)(i.code,{children:"Contract successfully verified"}),"."]}),"\n",(0,r.jsx)("img",{src:"/img/sirato-verify-complete.png",alt:"Sirato package verification complete"}),"\n",(0,r.jsx)(i.p,{children:"Clicking Browse verified files will display the associated metadata and\nsource files for your contract."}),"\n",(0,r.jsx)("img",{src:"/img/sirato-browse-verified.png",alt:"Sirato browse verified contract"}),"\n",(0,r.jsx)(i.p,{children:"If we then browse back to our contract instance, any methods or events will\nnow be decoded."}),"\n",(0,r.jsx)("img",{src:"/img/sirato-decoded-transaction.png",alt:"Sirato decoded contract transaction"}),"\n",(0,r.jsx)(i.p,{children:"We can verify this by invoking a method on the contract. We can now see the\ndecoded method that was called in Sirato."}),"\n",(0,r.jsx)("img",{src:"/img/sirato-decoded-transaction2.png",alt:"Another Sirato decoded contract transaction"}),"\n",(0,r.jsx)(i.h3,{id:"unverified-metadata-upload",children:"Unverified metadata upload"}),"\n",(0,r.jsx)(i.p,{children:"The verification service supports uploading signed contract metadata as an\nadditional alternative to reproducible builds generated metadata. Please note\nthat the signed metadata is not verified and the owner of the code hash is\ntrusted."}),"\n",(0,r.jsx)(i.p,{children:"This feature responds to:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["The support for ",(0,r.jsx)(i.code,{children:"build_info"})," data is only available from ",(0,r.jsx)(i.code,{children:"cargo-contract"}),"\n2.0.2."]}),"\n",(0,r.jsx)(i.li,{children:"There is no official image or procedure regarding reproducible builds\nyet."}),"\n",(0,r.jsx)(i.li,{children:"We want to expand the service utility in the meantime."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Although it is a far from ideal way to bind the metadata to a given code\nhash it prevents trivial exploitation by:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Verifying that the signature is from the owner account of the code hash."}),"\n",(0,r.jsx)(i.li,{children:"Verifying that the signed message matches the sha256 of the uploaded\nmetadata.json + the code hash of the uploaded contract bytecode."}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["To provide signed metadata, you will need to use\nthe ",(0,r.jsx)(i.code,{children:"/upload/{network}/{codeHash}"})," endpoint which is documented\n",(0,r.jsx)(i.a,{href:"https://ink-verifier.sirato.xyz/api/api-docs/#/default/post_upload__network___codeHash_",children:"here"})]}),"\n",(0,r.jsxs)(i.p,{children:["For the request body you will need to sign this message using the account that\nuploaded the contract. You can use the ",(0,r.jsx)(i.a,{href:"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/signing",children:"sign and verify tool"}),"\nin Polkadot.js."]}),"\n",(0,r.jsxs)(i.p,{children:["It is also possible to use Sirato for this, you can find instructions\n",(0,r.jsx)(i.a,{href:"https://github.com/web3labs/ink-verifier-server/blob/main/docs/TUTORIAL.md#s2---owner-signed-metadata",children:"here"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},599:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/verification-87d6349728d16786f0aefbbedc75614c.svg"},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>o});var t=n(96540);const r={},a=t.createContext(r);function s(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);
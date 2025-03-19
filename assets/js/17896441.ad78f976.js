/*! For license information please see 17896441.ad78f976.js.LICENSE.txt */
"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8401],{53505:(e,t,s)=>{s.r(t),s.d(t,{default:()=>he});var n=s(96540),a=s(81769),i=s(26849),l=s(74848);const o=n.createContext(null);function r(e){let{children:t,content:s}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,l.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,n.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var m=s(34164),h=s(86682),u=s(50539),x=s(56289);function p(e){const{permalink:t,title:s,subLabel:n,isNext:a}=e;return(0,l.jsxs)(x.A,{className:(0,m.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[n&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:n}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}function g(e){const{previous:t,next:s}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[(0,l.jsx)("span",{className:"pagination-nav__info",children:"Continue Learning"}),(0,l.jsxs)("div",{className:"grid w-full grid-cols-2 gap-4",children:[t&&(0,l.jsx)(p,{...t,subLabel:(0,l.jsx)(u.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,l.jsx)(p,{...s,subLabel:(0,l.jsx)(u.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})]})}function b(){const{metadata:e}=c();return(0,l.jsx)(g,{previous:e.previous,next:e.next})}var j=s(40797),f=s(56942),v=s(204),N=s(96351),_=s(21858);const A={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(u.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(u.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function w(e){const t=A[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function C(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,l.jsx)(u.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(x.A,{to:s,onClick:n,children:(0,l.jsx)(u.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:n}}=(0,j.A)(),{pluginId:a}=(0,f.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,N.g1)(a),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,f.HW)(a),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,m.A)(t,v.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(w,{siteTitle:n,versionMetadata:s})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(C,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function T(e){let{className:t}=e;const s=(0,_.r)();return s.banner?(0,l.jsx)(k,{className:t,versionMetadata:s}):null}const L=(...e)=>e.filter(((e,t,s)=>Boolean(e)&&""!==e.trim()&&s.indexOf(e)===t)).join(" ").trim();var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const M=(0,n.forwardRef)((({color:e="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:i="",children:l,iconNode:o,...r},c)=>(0,n.createElement)("svg",{ref:c,...y,width:t,height:t,stroke:e,strokeWidth:a?24*Number(s)/Number(t):s,className:L("lucide",i),...r},[...o.map((([e,t])=>(0,n.createElement)(e,t))),...Array.isArray(l)?l:[l]]))),z=((e,t)=>{const s=(0,n.forwardRef)((({className:s,...a},i)=>{return(0,n.createElement)(M,{ref:i,iconNode:t,className:L(`lucide-${l=e,l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,s),...a});var l}));return s.displayName=`${e}`,s})("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);function B(e){let{className:t}=e;const s=(0,_.r)(),n=(0,f.jh)(),a=s.label?.replace("v","")?parseInt(s.label.replace("v","")):0,i=n.find((e=>"current"===e.name)),o=i?.label.replace("v","")?parseInt(i.label.replace("v","")):0,r=a>o,c=a<o;return s.badge?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:(0,m.A)(t,v.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(u.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}),r&&(0,l.jsxs)("div",{className:"attention-box",children:[(0,l.jsx)("span",{className:"fit-content  text-[22px] text-transparent font-freude bg-clip-text bg-gradient-to-r from-[#bd82fd] to-[#8c7cf7] leading-[22px]",children:"Attention!"}),(0,l.jsxs)("span",{children:["You are viewing ",(0,l.jsx)("em",{children:"unreleased"})," ink! ",a," docs."," ",(0,l.jsx)(x.A,{to:"/docs",className:"underline",children:"Click here"})," ","to view the latest docs."]})]}),c&&(0,l.jsx)("div",{className:"admonition-wrap-caution admonition-wrap p-[5px] rounded-[12px] border border-solid my-4",children:(0,l.jsxs)("div",{className:"theme-admonition theme-admonition-caution admonition_xJq3 alert alert--warning",children:[(0,l.jsx)("div",{className:"admonitionHeading_Gvgb",children:(0,l.jsxs)("span",{className:"flex items-center gap-2",children:[(0,l.jsx)(z,{size:20,fill:"transparent",stroke:"currentColor"}),"Attention!"]})}),(0,l.jsxs)("span",{children:["You are viewing ",(0,l.jsx)("em",{children:"outdated"})," ink! ",a," docs."," ",(0,l.jsx)(x.A,{to:"/docs",className:"underline",children:"Click here"})," ","to view the latest docs."]})]})})]}):null}const I={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function V(e){let{permalink:t,label:s,count:n,description:a}=e;return(0,l.jsxs)(x.A,{href:t,title:a,className:(0,m.A)(I.tag,n?I.tagWithCount:I.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}const H={tags:"tags_jXut",tag:"tag_QGVx"};function E(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(u.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,m.A)(H.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:H.tag,children:(0,l.jsx)(V,{...e})},e.permalink)))})]})}var G=s(81708);function R(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,tags:a}=e,i=a.length>0,o=!!(t||s||n);return i||o?(0,l.jsxs)("footer",{className:(0,m.A)(v.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,m.A)("row margin-top--sm",v.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(E,{tags:a})})}),o&&(0,l.jsx)(G.A,{className:(0,m.A)("margin-top--sm",v.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n})]}):null}var S=s(33535),P=s(71021);const W={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function D(e){let{collapsed:t,...s}=e;return(0,l.jsx)("button",{type:"button",...s,className:(0,m.A)("clean-btn",W.tocCollapsibleButton,!t&&W.tocCollapsibleButtonExpanded,s.className),children:(0,l.jsx)(u.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const F={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function O(e){let{toc:t,className:s,minHeadingLevel:n,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,S.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,m.A)(F.tocCollapsible,!i&&F.tocCollapsibleExpanded,s),children:[(0,l.jsx)(D,{collapsed:i,onClick:o}),(0,l.jsx)(S.N,{lazy:!0,className:F.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(P.A,{toc:t,minHeadingLevel:n,maxHeadingLevel:a})})]})}const U={tocMobile:"tocMobile_ITEo"};function $(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(O,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.A)(v.G.docs.docTocMobile,U.tocMobile)})}var Q=s(97959);function Y(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(Q.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.G.docs.docTocDesktop})}var q=s(9303),J=s(900);function K(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=c();return t.hide_title||void 0!==s?null:e.title}();return(0,l.jsxs)("div",{className:(0,m.A)(v.G.docs.docMarkdown,"markdown"),children:[s&&(0,l.jsx)("header",{children:(0,l.jsx)(q.A,{as:"h1",children:s})}),(0,l.jsx)(J.A,{children:t})]})}var X=s(93751),Z=s(30214),ee=s(29030),te=s(8532);function se(e){const{colorMode:t,setColorMode:s}=(0,te.G)();return"dark"===t?(0,l.jsxs)("svg",{version:"1.1",id:"svg-701448692_806",x:"0",y:"0",viewBox:"0 0 44.5 76",style:{enableBackground:"new 0 0 44.5 76"},fill:"currentColor",xmlSpace:"preserve",role:"img",...e,children:[(0,l.jsx)("circle",{className:"st0",cx:"22.2",cy:"33.7",r:"14.7"}),(0,l.jsx)("path",{className:"st0",d:"M22.2 49.5c-1.4 0-2.5-1.1-2.5-2.5v-4.7c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V47c0 1.4-1.1 2.5-2.5 2.5zM20.1 1l-7.5 9.5c-1.4 1.8-.1 4.4 2.1 4.4h15c2.3 0 3.6-2.6 2.1-4.4L24.4 1c-1.1-1.3-3.2-1.3-4.3 0z"}),(0,l.jsx)("path",{className:"st0",d:"M2.5 66.9c-.7 0-1.4-.3-1.9-.8-.9-1-.8-2.6.2-3.5l21.4-18.9 21.4 18.9c1 .9 1.1 2.5.2 3.5-.9 1-2.5 1.1-3.5.2l-18.1-16-18.1 16c-.4.4-1 .6-1.6.6z"}),(0,l.jsx)("path",{className:"st0",d:"M30.9 76c-1.1 0-2-.7-2.4-1.7l-6.2-19.2L16 74.3c-.4 1.3-1.8 2-3.2 1.6-1.3-.4-2-1.8-1.6-3.2l11-33.8 11 33.8c.4 1.3-.3 2.7-1.6 3.2-.2.1-.5.1-.7.1z"})]}):(0,l.jsxs)("svg",{id:"prefix__Layer_1",xmlns:"http://www.w3.org/2000/svg",x:0,y:0,viewBox:"0 0 75 73.3",style:{enableBackground:"new 0 0 75 73.3"},xmlSpace:"preserve",role:"img",...e,children:[(0,l.jsx)("style",{children:".prefix__st0{opacity:.75}.prefix__st1{fill-rule:evenodd;clip-rule:evenodd;fill:#1c1e21}.prefix__st2{fill:#fff}"}),(0,l.jsxs)("g",{className:"prefix__st0",children:[(0,l.jsx)("g",{className:"prefix__st0",children:(0,l.jsx)("path",{className:"prefix__st1",d:"M6.9 47.1h2.4c8.8-26.7-22.6-20.4-2.4 0z"})}),(0,l.jsx)("g",{className:"prefix__st0",children:(0,l.jsx)("path",{className:"prefix__st1",d:"M6.9 49.1h2.4c8.8 26.7-22.6 20.4-2.4 0z"})}),(0,l.jsx)("g",{className:"prefix__st0",children:(0,l.jsx)("path",{className:"prefix__st2",d:"M12.2 50.6H5.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h7.1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"})}),(0,l.jsx)("g",{className:"prefix__st0",children:(0,l.jsx)("path",{className:"prefix__st1",d:"M37.4 19.7V5.9C37.4 2.7 40 0 43.3 0h11.9v10.7h-4.7c-1.2 0-2.2 1-2.2 2.2v6.7l-10.9.1z"})}),(0,l.jsx)("path",{d:"m58.5 31.2-1.2-9.4c-.2-1.7-1.7-3-3.4-3H33.3c-1.7 0-3.2 1.3-3.4 3l-1.2 9.4h29.8z",style:{fillRule:"evenodd",clipRule:"evenodd",fill:"#fff"},className:"prefix__st0"}),(0,l.jsx)("g",{className:"prefix__st0",children:(0,l.jsx)("path",{className:"prefix__st1",d:"M43.6 22.9c-17.4 0-31.4 11.3-31.4 25.2s14.1 25.2 31.4 25.2S75 62 75 48.1 60.9 22.9 43.6 22.9zm0 36.5c-6.6 0-11.9-5.3-11.9-11.9S37 35.6 43.6 35.6 55.5 41 55.5 47.5s-5.4 11.9-11.9 11.9z"})}),(0,l.jsx)("path",{d:"M38 52.8c-.6 0-1.3-.2-1.8-.7-1-1-1-2.6 0-3.5l8.4-8.4c1-1 2.6-1 3.5 0 1 1 1 2.6 0 3.5l-8.4 8.4c-.4.5-1 .7-1.7.7z",style:{fill:"#1c1e21"},className:"prefix__st0"}),(0,l.jsx)("g",{className:"prefix__st0",children:(0,l.jsx)("path",{className:"prefix__st2",d:"M43.6 63.7c-8.9 0-16.2-7.3-16.2-16.2s7.3-16.2 16.2-16.2 16.2 7.3 16.2 16.2-7.3 16.2-16.2 16.2zm0-27.3c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2 11.2-5 11.2-11.2-5.1-11.2-11.2-11.2z"})})]}),(0,l.jsx)("g",{className:"prefix__st0",children:(0,l.jsx)("path",{className:"prefix__st2",d:"M52.8 0h5v10.7h-5z"})})]})}const ne={breadcrumbHomeIcon:"breadcrumbHomeIcon_xK9p"};function ae(){const e=(0,ee.Ay)("/docs");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(x.A,{"aria-label":(0,u.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(se,{className:ne.breadcrumbHomeIcon})})})}const ie={breadcrumbsContainer:"breadcrumbsContainer_Alpn"};function le(e){let{children:t,href:s,isLast:n}=e;const a="breadcrumbs__link";return n?(0,l.jsx)("span",{className:a,itemProp:"name",children:t}):s?(0,l.jsx)(x.A,{className:a,href:s,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:a,children:t})}function oe(e){let{children:t,active:s,index:n,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,m.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function re(){const e=(0,X.OF)(),t=(0,Z.Dt)();return e?(0,l.jsx)("nav",{className:(0,m.A)(v.G.docs.docBreadcrumbs,ie.breadcrumbsContainer),"aria-label":(0,u.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(ae,{}),e.map(((t,s)=>{const n=s===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(oe,{active:n,index:s,addMicrodata:!!a,children:(0,l.jsx)(le,{href:a,isLast:n,children:t.label})},s)}))]})}):null}var ce=s(28467);const de={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function me(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=c(),s=(0,h.l)(),n=e.hide_table_of_contents,a=!n&&t.length>0;return{hidden:n,mobile:a?(0,l.jsx)($,{}):void 0,desktop:!a||"desktop"!==s&&"ssr"!==s?void 0:(0,l.jsx)(Y,{})}}(),{metadata:n}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,m.A)("col",!s.hidden&&de.docItemCol),children:[(0,l.jsx)(ce.A,{metadata:n}),(0,l.jsx)(T,{}),(0,l.jsxs)("div",{className:de.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(re,{}),(0,l.jsx)(B,{}),s.mobile,(0,l.jsx)(K,{children:t}),(0,l.jsx)(R,{})]}),(0,l.jsx)(b,{})]})]}),s.desktop&&(0,l.jsx)("div",{className:"col col--3",children:s.desktop})]})}function he(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(me,{children:(0,l.jsx)(s,{})})]})})}},46580:(e,t,s)=>{s.d(t,{A:()=>A});s(96540);var n=s(60506),a=s(34164),i=s(50539),l=s(25795),o=s(20568),r=s(74848);const c={icon:(0,r.jsx)(o.m,{weight:"bold"}),title:(0,r.jsx)(i.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function d(e){return(0,r.jsx)(l.A,{...c,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}var m=s(36480);const h={icon:(0,r.jsx)(m.g,{weight:"bold"}),title:(0,r.jsx)(i.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function u(e){return(0,r.jsx)(l.A,{...h,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}const x={icon:(0,r.jsx)(m.g,{weight:"bold"}),title:(0,r.jsx)(i.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function p(e){return(0,r.jsx)(l.A,{...x,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}var g=s(60146);const b={icon:(0,r.jsx)(g.Q,{weight:"bold"}),title:(0,r.jsx)(i.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};var j=s(97036);const f={icon:(0,r.jsx)(j.v,{weight:"bold"}),title:(0,r.jsx)(i.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const v={icon:(0,r.jsx)(g.Q,{weight:"bold"}),title:(0,r.jsx)(i.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const N={icon:(0,r.jsx)(g.Q,{weight:"bold"}),title:(0,r.jsx)(i.A,{id:"theme.admonition.color",description:"The default label used for the Color admonition (:::color)",children:"Attention"})};const _={...{note:d,tip:u,info:p,warning:function(e){return(0,r.jsx)(l.A,{...b,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,r.jsx)(l.A,{...f,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})},color:function(e){return(0,r.jsx)(l.A,{...N,...e,className:(0,a.A)("color",e.className),children:e.children})}},...{secondary:e=>(0,r.jsx)(d,{title:"secondary",...e}),important:e=>(0,r.jsx)(p,{title:"important",...e}),success:e=>(0,r.jsx)(u,{title:"success",...e}),caution:function(e){return(0,r.jsx)(l.A,{...v,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function A(e){const t=(0,n.c)(e),s=(i=t.type,_[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),_.info));var i;return["note","info","tip","caution","danger","color"].includes(t.type)||(t.type="info"),(0,r.jsx)("div",{className:(0,a.A)(`admonition-wrap-${t.type}`,"admonition-wrap p-[5px] rounded-[12px] border border-solid my-2"),children:(0,r.jsx)(s,{...t})})}}}]);
"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8401],{46107:(e,t,s)=>{s.r(t),s.d(t,{default:()=>re});var a=s(96540),n=s(26828),l=s(16144),i=s(74848);const c=a.createContext(null);function r(e){let{children:t,content:s}=e;const n=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,i.jsx)(c.Provider,{value:n,children:t})}function o(){const e=(0,a.useContext)(c);if(null===e)throw new l.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=o();return(0,i.jsx)(n.be,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var m=s(34164),h=s(85873),u=s(59979),x=s(7634);function p(e){const{permalink:t,title:s,subLabel:a,isNext:n}=e;return(0,i.jsxs)(x.A,{className:(0,m.A)("pagination-nav__link",n?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,i.jsx)("div",{className:"pagination-nav__label",children:s})]})}function b(e){const{previous:t,next:s}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(p,{...t,subLabel:(0,i.jsx)(u.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,i.jsx)(p,{...s,subLabel:(0,i.jsx)(u.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){const{metadata:e}=o();return(0,i.jsx)(b,{previous:e.previous,next:e.next})}var g=s(40502),f=s(35075),j=s(90811),_=s(22634),N=s(2477);const A={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,i.jsx)(u.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,i.jsx)(u.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const t=A[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function y(e){let{versionLabel:t,to:s,onClick:a}=e;return(0,i.jsx)(u.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(x.A,{to:s,onClick:a,children:(0,i.jsx)(u.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function L(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:a}}=(0,g.A)(),{pluginId:n}=(0,f.vT)({failfast:!0}),{savePreferredVersionName:l}=(0,_.g1)(n),{latestDocSuggestion:c,latestVersionSuggestion:r}=(0,f.HW)(n),o=c??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,i.jsxs)("div",{className:(0,m.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(C,{siteTitle:a,versionMetadata:s})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(y,{versionLabel:r.label,to:o.path,onClick:()=>l(r.name)})})]})}function M(e){let{className:t}=e;const s=(0,N.r)();return s.banner?(0,i.jsx)(L,{className:t,versionMetadata:s}):null}function T(e){let{className:t}=e;const s=(0,N.r)();return s.badge?(0,i.jsx)("span",{className:(0,m.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(u.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}const k={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function w(e){let{permalink:t,label:s,count:a,description:n}=e;return(0,i.jsxs)(x.A,{href:t,title:n,className:(0,m.A)(k.tag,a?k.tagWithCount:k.tagRegular),children:[s,a&&(0,i.jsx)("span",{children:a})]})}const E={tags:"tags_jXut",tag:"tag_QGVx"};function B(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(u.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,m.A)(E.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:E.tag,children:(0,i.jsx)(w,{...e})},e.permalink)))})]})}var V=s(12497);function z(){const{metadata:e}=o(),{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a,tags:n}=e,l=n.length>0,c=!!(t||s||a);return l||c?(0,i.jsxs)("footer",{className:(0,m.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,i.jsx)("div",{className:(0,m.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(B,{tags:n})})}),c&&(0,i.jsx)(V.A,{className:(0,m.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:s,lastUpdatedBy:a})]}):null}var I=s(89090),H=s(74933);const G={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function R(e){let{collapsed:t,...s}=e;return(0,i.jsx)("button",{type:"button",...s,className:(0,m.A)("clean-btn",G.tocCollapsibleButton,!t&&G.tocCollapsibleButtonExpanded,s.className),children:(0,i.jsx)(u.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const S={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function P(e){let{toc:t,className:s,minHeadingLevel:a,maxHeadingLevel:n}=e;const{collapsed:l,toggleCollapsed:c}=(0,I.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,m.A)(S.tocCollapsible,!l&&S.tocCollapsibleExpanded,s),children:[(0,i.jsx)(R,{collapsed:l,onClick:c}),(0,i.jsx)(I.N,{lazy:!0,className:S.tocCollapsibleContent,collapsed:l,children:(0,i.jsx)(H.A,{toc:t,minHeadingLevel:a,maxHeadingLevel:n})})]})}const O={tocMobile:"tocMobile_ITEo"};function F(){const{toc:e,frontMatter:t}=o();return(0,i.jsx)(P,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.A)(j.G.docs.docTocMobile,O.tocMobile)})}var D=s(39149);function U(){const{toc:e,frontMatter:t}=o();return(0,i.jsx)(D.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var W=s(24861),Q=s(74781);function X(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=o();return t.hide_title||void 0!==s?null:e.title}();return(0,i.jsxs)("div",{className:(0,m.A)(j.G.docs.docMarkdown,"markdown"),children:[s&&(0,i.jsx)("header",{children:(0,i.jsx)(W.A,{as:"h1",children:s})}),(0,i.jsx)(Q.A,{children:t})]})}var Y=s(37936),Z=s(76653),$=s(76813),q=s(67377);function J(e){const{colorMode:t,setColorMode:s}=(0,q.G)();return"dark"===t?(0,i.jsxs)("svg",{version:"1.1",id:"svg-701448692_806",x:"0",y:"0",viewBox:"0 0 44.5 76",style:{enableBackground:"new 0 0 44.5 76",color:"#bc83fb"},fill:"currentColor",xmlSpace:"preserve",role:"img",...e,children:[(0,i.jsx)("circle",{className:"st0",cx:"22.2",cy:"33.7",r:"14.7"}),(0,i.jsx)("path",{className:"st0",d:"M22.2 49.5c-1.4 0-2.5-1.1-2.5-2.5v-4.7c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V47c0 1.4-1.1 2.5-2.5 2.5zM20.1 1l-7.5 9.5c-1.4 1.8-.1 4.4 2.1 4.4h15c2.3 0 3.6-2.6 2.1-4.4L24.4 1c-1.1-1.3-3.2-1.3-4.3 0z"}),(0,i.jsx)("path",{className:"st0",d:"M2.5 66.9c-.7 0-1.4-.3-1.9-.8-.9-1-.8-2.6.2-3.5l21.4-18.9 21.4 18.9c1 .9 1.1 2.5.2 3.5-.9 1-2.5 1.1-3.5.2l-18.1-16-18.1 16c-.4.4-1 .6-1.6.6z"}),(0,i.jsx)("path",{className:"st0",d:"M30.9 76c-1.1 0-2-.7-2.4-1.7l-6.2-19.2L16 74.3c-.4 1.3-1.8 2-3.2 1.6-1.3-.4-2-1.8-1.6-3.2l11-33.8 11 33.8c.4 1.3-.3 2.7-1.6 3.2-.2.1-.5.1-.7.1z"})]}):(0,i.jsxs)("svg",{id:"prefix__Layer_1",xmlns:"http://www.w3.org/2000/svg",x:0,y:0,viewBox:"0 0 75 73.3",style:{enableBackground:"new 0 0 75 73.3"},xmlSpace:"preserve",role:"img",...e,children:[(0,i.jsx)("style",{children:".prefix__st0{opacity:.75}.prefix__st1{fill-rule:evenodd;clip-rule:evenodd;fill:#1c1e21}.prefix__st2{fill:#fff}"}),(0,i.jsxs)("g",{className:"prefix__st0",children:[(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st1",d:"M6.9 47.1h2.4c8.8-26.7-22.6-20.4-2.4 0z"})}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st1",d:"M6.9 49.1h2.4c8.8 26.7-22.6 20.4-2.4 0z"})}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st2",d:"M12.2 50.6H5.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h7.1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"})}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st1",d:"M37.4 19.7V5.9C37.4 2.7 40 0 43.3 0h11.9v10.7h-4.7c-1.2 0-2.2 1-2.2 2.2v6.7l-10.9.1z"})}),(0,i.jsx)("path",{d:"m58.5 31.2-1.2-9.4c-.2-1.7-1.7-3-3.4-3H33.3c-1.7 0-3.2 1.3-3.4 3l-1.2 9.4h29.8z",style:{fillRule:"evenodd",clipRule:"evenodd",fill:"#fff"},className:"prefix__st0"}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st1",d:"M43.6 22.9c-17.4 0-31.4 11.3-31.4 25.2s14.1 25.2 31.4 25.2S75 62 75 48.1 60.9 22.9 43.6 22.9zm0 36.5c-6.6 0-11.9-5.3-11.9-11.9S37 35.6 43.6 35.6 55.5 41 55.5 47.5s-5.4 11.9-11.9 11.9z"})}),(0,i.jsx)("path",{d:"M38 52.8c-.6 0-1.3-.2-1.8-.7-1-1-1-2.6 0-3.5l8.4-8.4c1-1 2.6-1 3.5 0 1 1 1 2.6 0 3.5l-8.4 8.4c-.4.5-1 .7-1.7.7z",style:{fill:"#1c1e21"},className:"prefix__st0"}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st2",d:"M43.6 63.7c-8.9 0-16.2-7.3-16.2-16.2s7.3-16.2 16.2-16.2 16.2 7.3 16.2 16.2-7.3 16.2-16.2 16.2zm0-27.3c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2 11.2-5 11.2-11.2-5.1-11.2-11.2-11.2z"})})]}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st2",d:"M52.8 0h5v10.7h-5z"})})]})}const K={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ee(){const e=(0,$.Ay)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(x.A,{"aria-label":(0,u.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(J,{className:K.breadcrumbHomeIcon})})})}const te={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function se(e){let{children:t,href:s,isLast:a}=e;const n="breadcrumbs__link";return a?(0,i.jsx)("span",{className:n,itemProp:"name",children:t}):s?(0,i.jsx)(x.A,{className:n,href:s,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:n,children:t})}function ae(e){let{children:t,active:s,index:a,addMicrodata:n}=e;return(0,i.jsxs)("li",{...n&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,m.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function ne(){const e=(0,Y.OF)(),t=(0,Z.Dt)();return e?(0,i.jsx)("nav",{className:(0,m.A)(j.G.docs.docBreadcrumbs,te.breadcrumbsContainer),"aria-label":(0,u.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(ee,{}),e.map(((t,s)=>{const a=s===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(ae,{active:a,index:s,addMicrodata:!!n,children:(0,i.jsx)(se,{href:n,isLast:a,children:t.label})},s)}))]})}):null}var le=s(12977);const ie={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ce(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=o(),s=(0,h.l)(),a=e.hide_table_of_contents,n=!a&&t.length>0;return{hidden:a,mobile:n?(0,i.jsx)(F,{}):void 0,desktop:!n||"desktop"!==s&&"ssr"!==s?void 0:(0,i.jsx)(U,{})}}(),{metadata:a}=o();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,m.A)("col",!s.hidden&&ie.docItemCol),children:[(0,i.jsx)(le.A,{metadata:a}),(0,i.jsx)(M,{}),(0,i.jsxs)("div",{className:ie.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(ne,{}),(0,i.jsx)(T,{}),s.mobile,(0,i.jsx)(X,{children:t}),(0,i.jsx)(z,{})]}),(0,i.jsx)(v,{})]})]}),s.desktop&&(0,i.jsx)("div",{className:"col col--3",children:s.desktop})]})}function re(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,i.jsx)(r,{content:e.content,children:(0,i.jsxs)(n.e3,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(ce,{children:(0,i.jsx)(s,{})})]})})}},22611:(e,t,s)=>{s.d(t,{A:()=>x});var a,n,l,i,c,r,o=s(96540),d=s(59856);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)({}).hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},m.apply(null,arguments)}const h=e=>{let{title:t,titleId:s,...d}=e;return o.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 75 75","aria-labelledby":s},d),t?o.createElement("title",{id:s},t):null,a||(a=o.createElement("style",null,".st1{fill:#bc83fb}.st4{fill:#d8b7fb}")),o.createElement("ellipse",{cx:37.5,cy:37.5,rx:38.92,ry:36.03,style:{fill:"#fff"},transform:"rotate(-45.001 37.501 37.497)"}),n||(n=o.createElement("path",{d:"M34.56 50.4s3.56 4.75 9.4-1.47c3.71-3.94 6.78-4.02 7.19-1.17.51 3.54-5.11 12.97-13.43 12.97z",className:"st1"})),l||(l=o.createElement("path",{d:"M37.5 66.74c-15.46 0-28.04-12.58-28.04-28.04 0-9.82 5-18.76 13.38-23.91.89-.55 2.05-.27 2.59.62.55.89.27 2.05-.62 2.59-7.25 4.46-11.58 12.19-11.58 20.7 0 13.38 10.89 24.27 24.27 24.27S61.77 52.08 61.77 38.7c0-8.5-4.33-16.24-11.58-20.69a1.886 1.886 0 0 1-.62-2.59c.55-.89 1.71-1.16 2.59-.62 8.38 5.15 13.38 14.09 13.38 23.91 0 15.44-12.58 28.03-28.04 28.03",className:"st1"})),o.createElement("path",{d:"M37.5 60.73c-3.55 0-6.46-2.91-6.46-6.46V29.56c0-3.55 2.91-6.46 6.46-6.46s6.46 2.91 6.46 6.46v24.71c0 3.55-2.91 6.46-6.46 6.46",style:{fill:"#8747cc"}}),o.createElement("ellipse",{cx:37.49,cy:13.82,rx:5.51,ry:6.18,style:{fillRule:"evenodd",clipRule:"evenodd",fill:"#bc83fb"},transform:"rotate(-76.761 37.496 13.816)"}),i||(i=o.createElement("ellipse",{cx:37.25,cy:51.86,className:"st4",rx:3.54,ry:2.4,transform:"rotate(-84.393 37.253 51.863)"})),c||(c=o.createElement("ellipse",{cx:37.25,cy:39.35,className:"st4",rx:4.39,ry:2.97,transform:"rotate(-84.393 37.25 39.353)"})),r||(r=o.createElement("path",{d:"M43.96 29.55v7.86c0-4.78-2.03-7.84-5.29-7.75-2.38.06-5.25 3.51-7.63 6.05-3.7 3.95-6.78 3.22-7.18.37-.5-3.47 5.11-12.6 13.17-12.95.15-.01.31-.02.46-.02h.02c3.55 0 6.45 2.89 6.45 6.44",className:"st1"})))};var u=s(74848);function x(e){return"note"!==e.type&&"info"!==e.type?(0,u.jsx)(d.A,{...e}):(0,u.jsx)(d.A,{icon:(0,u.jsx)(h,{}),...e})}}}]);
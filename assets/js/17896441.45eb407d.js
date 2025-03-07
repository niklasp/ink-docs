"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8401],{46107:(e,s,t)=>{t.r(s),t.d(s,{default:()=>ce});var a=t(96540),l=t(26828),n=t(16144),i=t(74848);const r=a.createContext(null);function c(e){let{children:s,content:t}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,i.jsx)(r.Provider,{value:l,children:s})}function o(){const e=(0,a.useContext)(r);if(null===e)throw new n.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:s,assets:t}=o();return(0,i.jsx)(l.be,{title:e.title,description:e.description,keywords:s.keywords,image:t.image??s.image})}var m=t(34164),x=t(85873),h=t(59979),p=t(7634);function u(e){const{permalink:s,title:t,subLabel:a,isNext:l}=e;return(0,i.jsxs)(p.A,{className:(0,m.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:s,children:[a&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,i.jsx)("div",{className:"pagination-nav__label",children:t})]})}function f(e){const{previous:s,next:t}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[s&&(0,i.jsx)(u,{...s,subLabel:(0,i.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,i.jsx)(u,{...t,subLabel:(0,i.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function b(){const{metadata:e}=o();return(0,i.jsx)(f,{previous:e.previous,next:e.next})}var _=t(40502),v=t(35075),g=t(90811),j=t(22634),N=t(2477);const A={unreleased:function(e){let{siteTitle:s,versionMetadata:t}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:s,versionLabel:(0,i.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:s,versionMetadata:t}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:s,versionLabel:(0,i.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const s=A[e.versionMetadata.banner];return(0,i.jsx)(s,{...e})}function y(e){let{versionLabel:s,to:t,onClick:a}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:s,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(p.A,{to:t,onClick:a,children:(0,i.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function M(e){let{className:s,versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,_.A)(),{pluginId:l}=(0,v.vT)({failfast:!0}),{savePreferredVersionName:n}=(0,j.g1)(l),{latestDocSuggestion:r,latestVersionSuggestion:c}=(0,v.HW)(l),o=r??(d=c).docs.find((e=>e.id===d.mainDocId));var d;return(0,i.jsxs)("div",{className:(0,m.A)(s,g.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(C,{siteTitle:a,versionMetadata:t})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(y,{versionLabel:c.label,to:o.path,onClick:()=>n(c.name)})})]})}function L(e){let{className:s}=e;const t=(0,N.r)();return t.banner?(0,i.jsx)(M,{className:s,versionMetadata:t}):null}function T(e){let{className:s}=e;const t=(0,N.r)();return t.badge?(0,i.jsx)("span",{className:(0,m.A)(s,g.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}const k={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function w(e){let{permalink:s,label:t,count:a,description:l}=e;return(0,i.jsxs)(p.A,{href:s,title:l,className:(0,m.A)(k.tag,a?k.tagWithCount:k.tagRegular),children:[t,a&&(0,i.jsx)("span",{children:a})]})}const z={tags:"tags_jXut",tag:"tag_QGVx"};function E(e){let{tags:s}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,m.A)(z.tags,"padding--none","margin-left--sm"),children:s.map((e=>(0,i.jsx)("li",{className:z.tag,children:(0,i.jsx)(w,{...e})},e.permalink)))})]})}var B=t(12497);function V(){const{metadata:e}=o(),{editUrl:s,lastUpdatedAt:t,lastUpdatedBy:a,tags:l}=e,n=l.length>0,r=!!(s||t||a);return n||r?(0,i.jsxs)("footer",{className:(0,m.A)(g.G.docs.docFooter,"docusaurus-mt-lg"),children:[n&&(0,i.jsx)("div",{className:(0,m.A)("row margin-top--sm",g.G.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(E,{tags:l})})}),r&&(0,i.jsx)(B.A,{className:(0,m.A)("margin-top--sm",g.G.docs.docFooterEditMetaRow),editUrl:s,lastUpdatedAt:t,lastUpdatedBy:a})]}):null}var H=t(89090),I=t(74933);const R={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function S(e){let{collapsed:s,...t}=e;return(0,i.jsx)("button",{type:"button",...t,className:(0,m.A)("clean-btn",R.tocCollapsibleButton,!s&&R.tocCollapsibleButtonExpanded,t.className),children:(0,i.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const G={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function P(e){let{toc:s,className:t,minHeadingLevel:a,maxHeadingLevel:l}=e;const{collapsed:n,toggleCollapsed:r}=(0,H.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,m.A)(G.tocCollapsible,!n&&G.tocCollapsibleExpanded,t),children:[(0,i.jsx)(S,{collapsed:n,onClick:r}),(0,i.jsx)(H.N,{lazy:!0,className:G.tocCollapsibleContent,collapsed:n,children:(0,i.jsx)(I.A,{toc:s,minHeadingLevel:a,maxHeadingLevel:l})})]})}const O={tocMobile:"tocMobile_ITEo"};function F(){const{toc:e,frontMatter:s}=o();return(0,i.jsx)(P,{toc:e,minHeadingLevel:s.toc_min_heading_level,maxHeadingLevel:s.toc_max_heading_level,className:(0,m.A)(g.G.docs.docTocMobile,O.tocMobile)})}var D=t(39149);function U(){const{toc:e,frontMatter:s}=o();return(0,i.jsx)(D.A,{toc:e,minHeadingLevel:s.toc_min_heading_level,maxHeadingLevel:s.toc_max_heading_level,className:g.G.docs.docTocDesktop})}var W=t(24861),Q=t(74781);function X(e){let{children:s}=e;const t=function(){const{metadata:e,frontMatter:s,contentTitle:t}=o();return s.hide_title||void 0!==t?null:e.title}();return(0,i.jsxs)("div",{className:(0,m.A)(g.G.docs.docMarkdown,"markdown"),children:[t&&(0,i.jsx)("header",{children:(0,i.jsx)(W.A,{as:"h1",children:t})}),(0,i.jsx)(Q.A,{children:s})]})}var Y=t(37936),Z=t(76653),$=t(76813),q=t(67377);function J(e){const{colorMode:s,setColorMode:t}=(0,q.G)();return"dark"===s?(0,i.jsxs)("svg",{id:"prefix__Layer_1",xmlns:"http://www.w3.org/2000/svg",x:0,y:0,viewBox:"0 0 75 73.3",style:{enableBackground:"new 0 0 75 73.3"},xmlSpace:"preserve",role:"img",...e,children:[(0,i.jsx)("style",{children:".prefix__st0{opacity:.75}.prefix__st1{fill-rule:evenodd;clip-rule:evenodd;fill:#e3e3e3}.prefix__st2{fill:#fff}"}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st1",d:"M6.9 47.1h2.4c8.8-26.7-22.6-20.4-2.4 0z"})}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st1",d:"M6.9 49.1h2.4c8.8 26.7-22.6 20.4-2.4 0z"})}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st2",d:"M12.2 50.6H5.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h7.1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"})}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st1",d:"M37.4 19.7V5.9C37.4 2.7 40 0 43.3 0h11.9v10.7h-4.7c-1.2 0-2.2 1-2.2 2.2v6.7l-10.9.1z"})}),(0,i.jsx)("path",{d:"m58.5 31.2-1.2-9.4c-.2-1.7-1.7-3-3.4-3H33.3c-1.7 0-3.2 1.3-3.4 3l-1.2 9.4h29.8z",style:{fillRule:"evenodd",clipRule:"evenodd",fill:"#fff"},className:"prefix__st0"}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st1",d:"M43.6 22.9c-17.4 0-31.4 11.3-31.4 25.2s14.1 25.2 31.4 25.2S75 62 75 48.1 60.9 22.9 43.6 22.9zm0 36.5c-6.6 0-11.9-5.3-11.9-11.9S37 35.6 43.6 35.6 55.5 41 55.5 47.5s-5.4 11.9-11.9 11.9z"})}),(0,i.jsx)("path",{d:"M38 52.8c-.6 0-1.3-.2-1.8-.7-1-1-1-2.6 0-3.5l8.4-8.4c1-1 2.6-1 3.5 0 1 1 1 2.6 0 3.5l-8.4 8.4c-.4.5-1 .7-1.7.7z",style:{fill:"#e3e3e3"},className:"prefix__st0"}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st2",d:"M43.6 63.7c-8.9 0-16.2-7.3-16.2-16.2s7.3-16.2 16.2-16.2 16.2 7.3 16.2 16.2-7.3 16.2-16.2 16.2zm0-27.3c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2 11.2-5 11.2-11.2-5.1-11.2-11.2-11.2z"})}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st2",d:"M52.8 0h5v10.7h-5z"})})]}):(0,i.jsxs)("svg",{id:"prefix__Layer_1",xmlns:"http://www.w3.org/2000/svg",x:0,y:0,viewBox:"0 0 75 73.3",style:{enableBackground:"new 0 0 75 73.3"},xmlSpace:"preserve",role:"img",...e,children:[(0,i.jsx)("style",{children:".prefix__st0{opacity:.75}.prefix__st1{fill-rule:evenodd;clip-rule:evenodd;fill:#1c1e21}.prefix__st2{fill:#fff}"}),(0,i.jsxs)("g",{className:"prefix__st0",children:[(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st1",d:"M6.9 47.1h2.4c8.8-26.7-22.6-20.4-2.4 0z"})}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st1",d:"M6.9 49.1h2.4c8.8 26.7-22.6 20.4-2.4 0z"})}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st2",d:"M12.2 50.6H5.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h7.1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"})}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st1",d:"M37.4 19.7V5.9C37.4 2.7 40 0 43.3 0h11.9v10.7h-4.7c-1.2 0-2.2 1-2.2 2.2v6.7l-10.9.1z"})}),(0,i.jsx)("path",{d:"m58.5 31.2-1.2-9.4c-.2-1.7-1.7-3-3.4-3H33.3c-1.7 0-3.2 1.3-3.4 3l-1.2 9.4h29.8z",style:{fillRule:"evenodd",clipRule:"evenodd",fill:"#fff"},className:"prefix__st0"}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st1",d:"M43.6 22.9c-17.4 0-31.4 11.3-31.4 25.2s14.1 25.2 31.4 25.2S75 62 75 48.1 60.9 22.9 43.6 22.9zm0 36.5c-6.6 0-11.9-5.3-11.9-11.9S37 35.6 43.6 35.6 55.5 41 55.5 47.5s-5.4 11.9-11.9 11.9z"})}),(0,i.jsx)("path",{d:"M38 52.8c-.6 0-1.3-.2-1.8-.7-1-1-1-2.6 0-3.5l8.4-8.4c1-1 2.6-1 3.5 0 1 1 1 2.6 0 3.5l-8.4 8.4c-.4.5-1 .7-1.7.7z",style:{fill:"#1c1e21"},className:"prefix__st0"}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st2",d:"M43.6 63.7c-8.9 0-16.2-7.3-16.2-16.2s7.3-16.2 16.2-16.2 16.2 7.3 16.2 16.2-7.3 16.2-16.2 16.2zm0-27.3c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2 11.2-5 11.2-11.2-5.1-11.2-11.2-11.2z"})})]}),(0,i.jsx)("g",{className:"prefix__st0",children:(0,i.jsx)("path",{className:"prefix__st2",d:"M52.8 0h5v10.7h-5z"})})]})}const K={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ee(){const e=(0,$.Ay)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(p.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(J,{className:K.breadcrumbHomeIcon})})})}const se={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function te(e){let{children:s,href:t,isLast:a}=e;const l="breadcrumbs__link";return a?(0,i.jsx)("span",{className:l,itemProp:"name",children:s}):t?(0,i.jsx)(p.A,{className:l,href:t,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:s})}):(0,i.jsx)("span",{className:l,children:s})}function ae(e){let{children:s,active:t,index:a,addMicrodata:l}=e;return(0,i.jsxs)("li",{...l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,m.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[s,(0,i.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function le(){const e=(0,Y.OF)(),s=(0,Z.Dt)();return e?(0,i.jsx)("nav",{className:(0,m.A)(g.G.docs.docBreadcrumbs,se.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[s&&(0,i.jsx)(ee,{}),e.map(((s,t)=>{const a=t===e.length-1,l="category"===s.type&&s.linkUnlisted?void 0:s.href;return(0,i.jsx)(ae,{active:a,index:t,addMicrodata:!!l,children:(0,i.jsx)(te,{href:l,isLast:a,children:s.label})},t)}))]})}):null}var ne=t(12977);const ie={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function re(e){let{children:s}=e;const t=function(){const{frontMatter:e,toc:s}=o(),t=(0,x.l)(),a=e.hide_table_of_contents,l=!a&&s.length>0;return{hidden:a,mobile:l?(0,i.jsx)(F,{}):void 0,desktop:!l||"desktop"!==t&&"ssr"!==t?void 0:(0,i.jsx)(U,{})}}(),{metadata:a}=o();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,m.A)("col",!t.hidden&&ie.docItemCol),children:[(0,i.jsx)(ne.A,{metadata:a}),(0,i.jsx)(L,{}),(0,i.jsxs)("div",{className:ie.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(le,{}),(0,i.jsx)(T,{}),t.mobile,(0,i.jsx)(X,{children:s}),(0,i.jsx)(V,{})]}),(0,i.jsx)(b,{})]})]}),t.desktop&&(0,i.jsx)("div",{className:"col col--3",children:t.desktop})]})}function ce(e){const s=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,i.jsx)(c,{content:e.content,children:(0,i.jsxs)(l.e3,{className:s,children:[(0,i.jsx)(d,{}),(0,i.jsx)(re,{children:(0,i.jsx)(t,{})})]})})}},22611:(e,s,t)=>{t.d(s,{A:()=>p});var a,l,n,i,r,c,o=t(96540),d=t(59856);function m(){return m=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},m.apply(null,arguments)}const x=e=>{let{title:s,titleId:t,...d}=e;return o.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 75 75","aria-labelledby":t},d),s?o.createElement("title",{id:t},s):null,a||(a=o.createElement("style",null,".st1{fill:#bc83fb}.st4{fill:#d8b7fb}")),o.createElement("ellipse",{cx:37.5,cy:37.5,rx:38.92,ry:36.03,style:{fill:"#fff"},transform:"rotate(-45.001 37.501 37.497)"}),l||(l=o.createElement("path",{d:"M34.56 50.4s3.56 4.75 9.4-1.47c3.71-3.94 6.78-4.02 7.19-1.17.51 3.54-5.11 12.97-13.43 12.97z",className:"st1"})),n||(n=o.createElement("path",{d:"M37.5 66.74c-15.46 0-28.04-12.58-28.04-28.04 0-9.82 5-18.76 13.38-23.91.89-.55 2.05-.27 2.59.62.55.89.27 2.05-.62 2.59-7.25 4.46-11.58 12.19-11.58 20.7 0 13.38 10.89 24.27 24.27 24.27S61.77 52.08 61.77 38.7c0-8.5-4.33-16.24-11.58-20.69a1.886 1.886 0 0 1-.62-2.59c.55-.89 1.71-1.16 2.59-.62 8.38 5.15 13.38 14.09 13.38 23.91 0 15.44-12.58 28.03-28.04 28.03",className:"st1"})),o.createElement("path",{d:"M37.5 60.73c-3.55 0-6.46-2.91-6.46-6.46V29.56c0-3.55 2.91-6.46 6.46-6.46s6.46 2.91 6.46 6.46v24.71c0 3.55-2.91 6.46-6.46 6.46",style:{fill:"#8747cc"}}),o.createElement("ellipse",{cx:37.49,cy:13.82,rx:5.51,ry:6.18,style:{fillRule:"evenodd",clipRule:"evenodd",fill:"#bc83fb"},transform:"rotate(-76.761 37.496 13.816)"}),i||(i=o.createElement("ellipse",{cx:37.25,cy:51.86,className:"st4",rx:3.54,ry:2.4,transform:"rotate(-84.393 37.253 51.863)"})),r||(r=o.createElement("ellipse",{cx:37.25,cy:39.35,className:"st4",rx:4.39,ry:2.97,transform:"rotate(-84.393 37.25 39.353)"})),c||(c=o.createElement("path",{d:"M43.96 29.55v7.86c0-4.78-2.03-7.84-5.29-7.75-2.38.06-5.25 3.51-7.63 6.05-3.7 3.95-6.78 3.22-7.18.37-.5-3.47 5.11-12.6 13.17-12.95.15-.01.31-.02.46-.02h.02c3.55 0 6.45 2.89 6.45 6.44",className:"st1"})))};var h=t(74848);function p(e){return"note"!==e.type&&"info"!==e.type?(0,h.jsx)(d.A,{...e}):(0,h.jsx)(d.A,{icon:(0,h.jsx)(x,{}),...e})}}}]);
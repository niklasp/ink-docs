"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2138],{86785:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L});var s=r(96540),a=r(40502),n=r(74547),c=r(50344),l=r(7634),o=r(59979);const u=["zero","one","two","few","many","other"];function i(e){return u.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function m(){const e=d();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}var g=r(5391),p=r(56347),f=r(75251),x=r(31245);const y=function(){const e=(0,f.A)(),t=(0,p.W6)(),r=(0,p.zy)(),{siteConfig:{baseUrl:s}}=(0,a.A)(),n=e?new URLSearchParams(r.search):null,c=n?.get("q")||"",l=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:c,searchContext:l&&Array.isArray(x.Hg)&&x.Hg.some((e=>"string"==typeof e?e===l:e.path===l))?l:"",searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var j=r(13201),S=r(81973),A=r(23093),C=r(3044),w=r(24510),v=r(27528),P=r(64147);const _="searchContextInput_mXoe",b="searchQueryInput_CFBF",F="searchResultItem_U687",R="searchResultItemPath_uIbk",T="searchResultItemSummary_oZHr",$="searchQueryColumn_q7nx",k="searchContextColumn_oWAF";var H=r(86805),I=r(74848);function N(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,a.A)(),{selectMessage:r}=m(),{searchValue:n,searchContext:l,searchVersion:u,updateSearchPath:i,updateSearchContext:h}=y(),[d,p]=(0,s.useState)(n),[f,S]=(0,s.useState)(),A=`${e}${u}`,C=(0,s.useMemo)((()=>d?(0,o.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:d}):(0,o.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[d]);(0,s.useEffect)((()=>{i(d),d?(async()=>{const e=await(0,j.w)(A,l,d);S(e)})():S(void 0)}),[d,A,l]);const w=(0,s.useCallback)((e=>{p(e.target.value)}),[]);(0,s.useEffect)((()=>{n&&n!==d&&p(n)}),[n]);const[P,F]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{!async function(){(!Array.isArray(x.Hg)||l||x.dz)&&await(0,j.k)(A,l),F(!0)}()}),[l,A]),(0,I.jsxs)(s.Fragment,{children:[(0,I.jsxs)(c.A,{children:[(0,I.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,I.jsx)("title",{children:C})]}),(0,I.jsxs)("div",{className:"container margin-vert--lg",children:[(0,I.jsx)("h1",{children:C}),(0,I.jsxs)("div",{className:"row",children:[(0,I.jsx)("div",{className:(0,g.A)("col",{[$]:Array.isArray(x.Hg),"col--9":Array.isArray(x.Hg),"col--12":!Array.isArray(x.Hg)}),children:(0,I.jsx)("input",{type:"search",name:"q",className:b,"aria-label":"Search",onChange:w,value:d,autoComplete:"off",autoFocus:!0})}),Array.isArray(x.Hg)?(0,I.jsx)("div",{className:(0,g.A)("col","col--3","padding-left--none",k),children:(0,I.jsxs)("select",{name:"search-context",className:_,id:"context-selector",value:l,onChange:e=>h(e.target.value),children:[x.dz&&(0,I.jsx)("option",{value:"",children:(0,o.T)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})}),x.Hg.map((e=>{const{label:r,path:s}=(0,H.p)(e,t);return(0,I.jsx)("option",{value:s,children:r},s)}))]})}):null]}),!P&&d&&(0,I.jsx)("div",{children:(0,I.jsx)(v.A,{})}),f&&(f.length>0?(0,I.jsx)("p",{children:r(f.length,(0,o.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:f.length}))}):(0,I.jsx)("p",{children:(0,o.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,I.jsx)("section",{children:f&&f.map((e=>(0,I.jsx)(q,{searchResult:e},e.document.i)))})]})]})}function q(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=r===S.i.Title,o=r===S.i.Keywords,u=r===S.i.Description,i=u||o,h=c||i,d=r===S.i.Content,m=(c?t.b:s.b).slice(),g=d||i?t.s:t.t;h||m.push(s.t);let p="";if(x.CU&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);p=`?${e.toString()}`}return(0,I.jsxs)("article",{className:F,children:[(0,I.jsx)("h2",{children:(0,I.jsx)(l.A,{to:t.u+p+(t.h||""),dangerouslySetInnerHTML:{__html:d||i?(0,A.Z)(g,a):(0,C.C)(g,(0,w.g)(n,"t"),a,100)}})}),m.length>0&&(0,I.jsx)("p",{className:R,children:(0,P.$)(m)}),(d||u)&&(0,I.jsx)("p",{className:T,dangerouslySetInnerHTML:{__html:(0,C.C)(t.t,(0,w.g)(n,"t"),a,100)}})]})}const L=function(){return(0,I.jsx)(n.A,{children:(0,I.jsx)(N,{})})}}}]);
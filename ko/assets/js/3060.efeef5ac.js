"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3060],{9460:(e,r,t)=>{t.d(r,{C:()=>i,n:()=>l});var n=t(7294),o=t(902),s=t(5893);const a=n.createContext(null);function l(e){let{children:r,content:t,isBlogPostPage:o=!1}=e;const l=function(e){let{content:r,isBlogPostPage:t}=e;return(0,n.useMemo)((()=>({metadata:r.metadata,frontMatter:r.frontMatter,assets:r.assets,toc:r.toc,isBlogPostPage:t})),[r,t])}({content:t,isBlogPostPage:o});return(0,s.jsx)(a.Provider,{value:l,children:r})}function i(){const e=(0,n.useContext)(a);if(null===e)throw new o.i6("BlogPostProvider");return e}},5130:(e,r,t)=>{t.d(r,{b:()=>l,k:()=>i});var n=t(7294),o=t(902),s=t(5893);const a=n.createContext(null);function l(e){let{children:r,content:t}=e;const o=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,s.jsx)(a.Provider,{value:o,children:r})}function i(){const e=(0,n.useContext)(a);if(null===e)throw new o.i6("DocProvider");return e}},4353:(e,r,t)=>{t.d(r,{D:()=>i,f:()=>u});var n=t(7294),o=t(902),s=t(5893);const a=Symbol("EmptyContext"),l=n.createContext(a);function i(e){let{children:r}=e;const[t,o]=(0,n.useState)(null),a=(0,n.useMemo)((()=>({expandedItem:t,setExpandedItem:o})),[t]);return(0,s.jsx)(l.Provider,{value:a,children:r})}function u(){const e=(0,n.useContext)(l);if(e===a)throw new o.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,r,t)=>{t.d(r,{a:()=>a});var n=t(7294),o=t(2466),s=t(5936);function a(e){let{threshold:r}=e;const[t,a]=(0,n.useState)(!1),l=(0,n.useRef)(!1),{startScroll:i,cancelScroll:u}=(0,o.Ct)();return(0,o.RF)(((e,t)=>{let{scrollY:n}=e;const o=t?.scrollY;o&&(l.current?l.current=!1:n>=o?(u(),a(!1)):n<r?a(!1):n+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,s.S)((e=>{e.location.hash&&(l.current=!0,a(!1))})),{shown:t,scrollToTop:()=>i(0)}}},6841:(e,r,t)=>{t.d(r,{S:()=>i});var n=t(7294),o=t(6668);function s(e){const r=e.getBoundingClientRect();return r.top===r.bottom?s(e.parentNode):r}function a(e,r){let{anchorTopOffset:t}=r;const n=e.find((e=>s(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function l(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:r}}=(0,o.L)();return(0,n.useEffect)((()=>{e.current=r?0:document.querySelector(".navbar").clientHeight}),[r]),e}function i(e){const r=(0,n.useRef)(void 0),t=l();(0,n.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:o,minHeadingLevel:s,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){let{minHeadingLevel:r,maxHeadingLevel:t}=e;const n=[];for(let o=r;o<=t;o+=1)n.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),u=a(i,{anchorTopOffset:t.current}),c=e.find((e=>u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(r.current&&r.current!==e&&r.current.classList.remove(o),e.classList.add(o),r.current=e):e.classList.remove(o)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}},913:(e,r,t)=>{t.r(r),t.d(r,{Collapsible:()=>u.z,ErrorBoundaryError:()=>F.aG,ErrorBoundaryErrorMessageFallback:()=>F.Ac,ErrorBoundaryTryAgainButton:()=>F.Cw,ErrorCauseBoundary:()=>F.QW,HtmlClassNameProvider:()=>f.FG,NavbarSecondaryMenuFiller:()=>h.Zo,PageMetadata:()=>f.d,ReactContextError:()=>m.i6,SkipToContentFallbackId:()=>I.u,SkipToContentLink:()=>I.l,ThemeClassNames:()=>c.k,ThemedComponent:()=>o.Z,UnlistedBannerMessage:()=>w.eU,UnlistedBannerTitle:()=>w.cI,UnlistedMetadata:()=>w.T$,composeProviders:()=>m.Qc,createStorageSlot:()=>s.WA,duplicates:()=>M.l,filterDocCardListItems:()=>l.MN,isMultiColumnFooterLinks:()=>x.a,isRegexpStringMatch:()=>E.F,listStorageKeys:()=>s._f,listTagsByLetters:()=>v.P,prefersReducedMotion:()=>d.n,processAdmonitionProps:()=>B.X,translateTagsPageTitle:()=>v.M,uniq:()=>M.j,useCollapsible:()=>u.u,useColorMode:()=>g.I,useContextualSearchFilters:()=>a._q,useCurrentSidebarCategory:()=>l.jA,useDocsPreferredVersion:()=>k.J,useEvent:()=>m.zX,usePluralForm:()=>i.c,usePrevious:()=>m.D9,usePrismTheme:()=>L.p,useSearchLinkCreator:()=>y,useSearchQueryString:()=>T,useStorageSlot:()=>s.Nk,useThemeConfig:()=>n.L,useWindowSize:()=>p.i});var n=t(6668),o=t(8431),s=t(12),a=t(3320),l=t(3438),i=t(8824),u=t(6043),c=t(5281),d=t(1442),m=t(902),f=t(833),g=t(2949),h=t(3102),p=t(7524),v=t(5155),b=t(7294),C=t(2263),S=t(1980);const P="q";function T(){return(0,S.Nc)(P)}function y(){const{siteConfig:{baseUrl:e,themeConfig:r}}=(0,C.default)(),{algolia:{searchPagePath:t}}=r;return(0,b.useCallback)((r=>`${e}${t}?${P}=${encodeURIComponent(r)}`),[e,t])}var x=t(2489),E=t(8022),M=t(7392),L=t(6412),k=t(373),B=t(4697),I=t(5225),w=t(5835),F=t(9690)},3389:(e,r,t)=>{t.r(r),t.d(r,{AnnouncementBarProvider:()=>c.pl,BlogPostProvider:()=>i.n,Collapsible:()=>n.Collapsible,ColorModeProvider:()=>x.S,DEFAULT_SEARCH_TAG:()=>L.HX,DocProvider:()=>l.b,DocSidebarItemsExpandedStateProvider:()=>o.D,DocsPreferredVersionContextProvider:()=>u.L5,DocsSidebarProvider:()=>a.b,DocsVersionProvider:()=>s.q,ErrorBoundaryError:()=>n.ErrorBoundaryError,ErrorBoundaryErrorMessageFallback:()=>n.ErrorBoundaryErrorMessageFallback,ErrorBoundaryTryAgainButton:()=>n.ErrorBoundaryTryAgainButton,ErrorCauseBoundary:()=>n.ErrorCauseBoundary,HtmlClassNameProvider:()=>n.HtmlClassNameProvider,NavbarProvider:()=>H.V,NavbarSecondaryMenuFiller:()=>n.NavbarSecondaryMenuFiller,PageMetadata:()=>n.PageMetadata,PluginHtmlClassNameProvider:()=>N.VC,ReactContextError:()=>n.ReactContextError,ScrollControllerProvider:()=>V.OC,SkipToContentFallbackId:()=>n.SkipToContentFallbackId,SkipToContentLink:()=>n.SkipToContentLink,ThemeClassNames:()=>n.ThemeClassNames,ThemedComponent:()=>n.ThemedComponent,UnlistedBannerMessage:()=>n.UnlistedBannerMessage,UnlistedBannerTitle:()=>n.UnlistedBannerTitle,UnlistedMetadata:()=>n.UnlistedMetadata,composeProviders:()=>n.composeProviders,containsLineNumbers:()=>M.nt,createStorageSlot:()=>n.createStorageSlot,docVersionSearchTag:()=>L.os,duplicates:()=>n.duplicates,filterDocCardListItems:()=>n.filterDocCardListItems,findFirstSidebarItemLink:()=>k.LM,findSidebarCategory:()=>k.em,getPrismCssVariables:()=>M.QC,isActiveSidebarItem:()=>k._F,isDocsPluginEnabled:()=>k.cE,isMultiColumnFooterLinks:()=>n.isMultiColumnFooterLinks,isRegexpStringMatch:()=>n.isRegexpStringMatch,isSamePath:()=>D.Mg,isVisibleSidebarItem:()=>k.pC,keyboardFocusedClassName:()=>$.h,listStorageKeys:()=>n.listStorageKeys,listTagsByLetters:()=>n.listTagsByLetters,parseCodeBlockTitle:()=>M.bc,parseLanguage:()=>M.Vo,parseLines:()=>M.nZ,prefersReducedMotion:()=>n.prefersReducedMotion,processAdmonitionProps:()=>n.processAdmonitionProps,sanitizeTabsChildren:()=>v,splitNavbarItems:()=>H.A,translateTagsPageTitle:()=>n.translateTagsPageTitle,uniq:()=>n.uniq,useAlternatePageUtils:()=>E.l,useAnnouncementBar:()=>c.nT,useBackToTopButton:()=>O.a,useBlogPost:()=>i.C,useCodeWordWrap:()=>q.F,useCollapsible:()=>n.useCollapsible,useColorMode:()=>n.useColorMode,useContextualSearchFilters:()=>n.useContextualSearchFilters,useCurrentSidebarCategory:()=>n.useCurrentSidebarCategory,useDoc:()=>l.k,useDocById:()=>k.xz,useDocRootMetadata:()=>k.SN,useDocSidebarItemsExpandedState:()=>o.f,useDocsPreferredVersion:()=>n.useDocsPreferredVersion,useDocsPreferredVersionByPluginId:()=>u.Oh,useDocsSidebar:()=>a.V,useDocsVersion:()=>s.E,useDocsVersionCandidates:()=>k.lO,useEvent:()=>n.useEvent,useFilteredAndTreeifiedTOC:()=>F.b,useHideableNavbar:()=>R.c,useHistoryPopHandler:()=>g.Rb,useHistorySelector:()=>g.xL,useHomePageRoute:()=>D.Ns,useKeyboardNavigation:()=>$.t,useLayoutDoc:()=>k.vY,useLayoutDocsSidebar:()=>k.oz,useLocalPathname:()=>w.b,useLocationChange:()=>I.S,useLockBodyScroll:()=>U.N,useNavbarMobileSidebar:()=>T.e,useNavbarSecondaryMenu:()=>y.Y,usePluralForm:()=>n.usePluralForm,usePrevious:()=>n.usePrevious,usePrismTheme:()=>n.usePrismTheme,useQueryStringValue:()=>g._X,useScrollController:()=>V.sG,useScrollPosition:()=>V.RF,useScrollPositionBlocker:()=>V.o5,useSearchLinkCreator:()=>n.useSearchLinkCreator,useSearchQueryString:()=>n.useSearchQueryString,useSidebarBreadcrumbs:()=>k.s1,useSmoothScrollTo:()=>V.Ct,useStorageSlot:()=>n.useStorageSlot,useTOCHighlight:()=>j.S,useTabs:()=>P,useThemeConfig:()=>n.useThemeConfig,useTitleFormatter:()=>B.p,useTreeifiedTOC:()=>F.a,useVisibleBlogSidebarItems:()=>A.c,useVisibleSidebarItems:()=>k.f,useWindowSize:()=>n.useWindowSize});var n=t(913),o=t(4353),s=t(4477),a=t(1116),l=t(5130),i=t(9460),u=t(373),c=t(9689),d=t(7294),m=t(6550),f=t(469),g=t(1980),h=t(7392),p=t(12);function v(e){return d.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,d.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:r,children:t}=e;return(0,d.useMemo)((()=>{const e=r??function(e){return v(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:o}}=e;return{value:r,label:t,attributes:n,default:o}}))}(t);return function(e){const r=(0,h.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function C(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function S(e){let{queryString:r=!1,groupId:t}=e;const n=(0,m.k6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,g._X)(o),(0,d.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace({...n.location,search:r.toString()})}),[o,n])]}function P(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,o=b(e),[s,a]=(0,d.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!C({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[l,i]=S({queryString:t,groupId:n}),[u,c]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,o]=(0,p.Nk)(t);return[n,(0,d.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),m=(()=>{const e=l??u;return C({value:e,tabValues:o})?e:null})();(0,f.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:s,selectValue:(0,d.useCallback)((e=>{if(!C({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);a(e),i(e),c(e)}),[i,c,o]),tabValues:o}}var T=t(3163),y=t(6857),x=t(2949),E=t(4711),M=t(7016),L=t(3320),k=t(3438),B=t(2128),I=t(5936),w=t(1753),F=t(9665),V=t(2466),D=t(8596),N=t(833),H=t(8978),j=t(6841),A=t(3961),R=t(9445),$=t(9727),U=t(9800),q=t(5448),O=t(2730)},3961:(e,r,t)=>{t.d(r,{c:()=>a});var n=t(7294),o=t(6550),s=t(8596);function a(e){const{pathname:r}=(0,o.TH)();return(0,n.useMemo)((()=>e.filter((e=>function(e,r){return!(e.unlisted&&!(0,s.Mg)(e.permalink,r))}(e,r)))),[e,r])}},5155:(e,r,t)=>{t.d(r,{M:()=>o,P:()=>s});var n=t(5999);const o=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function s(e){const r={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);r[t]??=[],r[t].push(e)})),Object.entries(r).sort(((e,r)=>{let[t]=e,[n]=r;return t.localeCompare(n)})).map((e=>{let[r,t]=e;return{letter:r,tags:t.sort(((e,r)=>e.label.localeCompare(r.label)))}}))}},9665:(e,r,t)=>{t.d(r,{a:()=>s,b:()=>l});var n=t(7294);function o(e){const r=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);r.forEach(((e,r)=>{const n=t.slice(2,e.level);e.parentIndex=Math.max(...n),t[e.level]=r}));const n=[];return r.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?r[t].children.push(o):n.push(o)})),n}function s(e){return(0,n.useMemo)((()=>o(e)),[e])}function a(e){let{toc:r,minHeadingLevel:t,maxHeadingLevel:n}=e;return r.flatMap((e=>{const r=a({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[{...e,children:r}]:r}))}function l(e){let{toc:r,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,n.useMemo)((()=>a({toc:o(r),minHeadingLevel:t,maxHeadingLevel:s})),[r,t,s])}},5835:(e,r,t)=>{t.d(r,{T$:()=>i,cI:()=>a,eU:()=>l});t(7294);var n=t(5999),o=t(5742),s=t(5893);function a(){return(0,s.jsx)(n.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(n.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function i(){return(0,s.jsx)(o.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}},8824:(e,r,t)=>{t.d(r,{c:()=>u});var n=t(7294),o=t(2263);const s=["zero","one","two","few","many","other"];function a(e){return s.filter((r=>e.includes(r)))}const l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,o.default)();return(0,n.useMemo)((()=>{try{return function(e){const r=new Intl.PluralRules(e);return{locale:e,pluralForms:a(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}(e)}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${r.message}\n`),l}}),[e])}function u(){const e=i();return{selectMessage:(r,t)=>function(e,r,t){const n=e.split("|");if(1===n.length)return n[0];n.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=t.select(r),s=t.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(t,r,e)}}},5845:(e,r,t)=>{const n=t(5893);r.Footer=function(){return n.jsxs("footer",{className:"tsd-footer",children:["Powered by"," ",n.jsx("a",{href:"https://github.com/milesj/docusaurus-plugin-typedoc-api",children:"docusaurus-plugin-typedoc-api"})," ","and ",n.jsx("a",{href:"https://typedoc.org/",children:"TypeDoc"})]})}},7850:(e,r,t)=>{const n=t(7294),o=t(9960),s=t(143),a=t(913),l=t(3389),i=t(5893),u=(e=>e&&e.__esModule?e:{default:e})(o);r.VersionBanner=function(){const e=l.useDocsVersion(),r=e.banner,t=e.docs,o=e.pluginId,c=e.version,d=s.useDocVersionSuggestions(o).latestVersionSuggestion,m=a.useDocsPreferredVersion(o).savePreferredVersionName,f=n.useCallback((()=>{m(d.name)}),[d.name,m]);if(!r||!d)return null;const g=t[d.label];return i.jsx("div",{className:`${a.ThemeClassNames.docs.docVersionBanner} alert alert--warning margin-bottom--md`,role:"alert",children:i.jsxs("div",{children:["unreleased"===r&&i.jsx(i.Fragment,{children:"This is documentation for an unreleased version."}),"unmaintained"===r&&i.jsxs(i.Fragment,{children:["This is documentation for version ",i.jsx("b",{children:c}),"."]})," ","For the latest API, see version"," ",i.jsx("b",{children:i.jsx(u.default,{to:g.id,onClick:f,children:g.title})}),"."]})})}}}]);
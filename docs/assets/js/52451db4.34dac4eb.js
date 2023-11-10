"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9518,4368],{3394:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var a=n(7294),o=n(6010),r=n(833),i=n(5281),s=n(3438),l=n(1116),c=n(5999),d=n(2730);const u={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var m=n(5893);function b(){const{shown:e,scrollToTop:t}=(0,d.a)({threshold:300});return(0,m.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",i.k.common.backToTopButton,u.backToTopButton,e&&u.backToTopButtonShow),type:"button",onClick:t})}var p=n(1442),h=n(6550),f=n(7524),x=n(6668),j=n(1327);function v(e){return(0,m.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,m.jsxs)("g",{fill:"#7a7a7a",children:[(0,m.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,m.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const g={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function k(e){let{onClick:t}=e;return(0,m.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",g.collapseSidebarButton),onClick:t,children:(0,m.jsx)(v,{className:g.collapseSidebarButtonIcon})})}var _=n(9689),S=n(2466),y=n(4353),C=n(902),I=n(6043),N=n(8596),T=n(9960),w=n(2389);function A(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,m.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function B(e){let{item:t,onItemClick:n,activePath:r,level:l,index:c,...d}=e;const{items:u,label:b,collapsible:p,className:h,href:f}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,x.L)(),v=function(e){const t=(0,w.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,s.LM)(e):void 0),[e,t])}(t),g=(0,s._F)(t,r),k=(0,N.Mg)(f,r),{collapsed:_,setCollapsed:S}=(0,I.u)({initialState:()=>!!p&&(!g&&t.collapsed)}),{expandedItem:B,setExpandedItem:E}=(0,y.f)(),O=function(e){void 0===e&&(e=!_),E(e?null:c),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const r=(0,C.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&o(!1)}),[t,r,n,o])}({isActive:g,collapsed:_,updateCollapsed:O}),(0,a.useEffect)((()=>{p&&null!=B&&B!==c&&j&&S(!0)}),[p,B,c,S,j]),(0,m.jsxs)("li",{className:(0,o.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":_},h),children:[(0,m.jsxs)("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k}),children:[(0,m.jsx)(T.default,{className:(0,o.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!f&&p,"menu__link--active":g}),onClick:p?e=>{n?.(t),f?O(!1):(e.preventDefault(),O())}:()=>{n?.(t)},"aria-current":k?"page":void 0,"aria-expanded":p?!_:void 0,href:p?v??"#":v,...d,children:b}),f&&p&&(0,m.jsx)(A,{collapsed:_,categoryLabel:b,onClick:e=>{e.preventDefault(),O()}})]}),(0,m.jsx)(I.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_,children:(0,m.jsx)(R,{items:u,tabIndex:_?-1:0,onItemClick:n,activePath:r,level:l+1})})]})}var E=n(3919),O=n(9471);const P={menuExternalLink:"menuExternalLink_NmtK"};function L(e){let{item:t,onItemClick:n,activePath:a,level:r,index:l,...c}=e;const{href:d,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,s._F)(t,a),f=(0,E.Z)(d);return(0,m.jsx)("li",{className:(0,o.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(r),"menu__list-item",b),children:(0,m.jsxs)(T.default,{className:(0,o.Z)("menu__link",!f&&P.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:d,...f&&{onClick:n?()=>n(t):void 0},...c,children:[u,!f&&(0,m.jsx)(O.Z,{})]})},u)}const Z={menuHtmlItem:"menuHtmlItem_M9Kj"};function H(e){let{item:t,level:n,index:a}=e;const{value:r,defaultStyle:s,className:l}=t;return(0,m.jsx)("li",{className:(0,o.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(n),s&&[Z.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:r}},a)}function M(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,m.jsx)(B,{item:t,...n});case"html":return(0,m.jsx)(H,{item:t,...n});default:return(0,m.jsx)(L,{item:t,...n})}}function D(e){let{items:t,...n}=e;const a=(0,s.f)(t,n.activePath);return(0,m.jsx)(y.D,{children:a.map(((e,t)=>(0,m.jsx)(M,{item:e,index:t,...n},t)))})}const R=(0,a.memo)(D),W={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function F(e){let{path:t,sidebar:n,className:r}=e;const s=function(){const{isActive:e}=(0,_.nT)(),[t,n]=(0,a.useState)(e);return(0,S.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,m.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",W.menu,s&&W.menuWithAnnouncementBar,r),children:(0,m.jsx)("ul",{className:(0,o.Z)(i.k.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(R,{items:n,activePath:t,level:1})})})}const V="sidebar_njMd",U="sidebarWithHideableNavbar_wUlq",K="sidebarHidden_VK0M",Y="sidebarLogo_isFc";function z(e){let{path:t,sidebar:n,onCollapse:a,isHidden:r}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:s}}}=(0,x.L)();return(0,m.jsxs)("div",{className:(0,o.Z)(V,i&&U,r&&K),children:[i&&(0,m.jsx)(j.Z,{tabIndex:-1,className:Y}),(0,m.jsx)(F,{path:t,sidebar:n}),s&&(0,m.jsx)(k,{onClick:a})]})}const G=a.memo(z);var q=n(3102),J=n(3163);const Q=e=>{let{sidebar:t,path:n}=e;const a=(0,J.e)();return(0,m.jsx)("ul",{className:(0,o.Z)(i.k.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(R,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function X(e){return(0,m.jsx)(q.Zo,{component:Q,props:e})}const $=a.memo(X);function ee(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)(G,{...e}),a&&(0,m.jsx)($,{...e})]})}const te={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function ne(e){let{toggleSidebar:t}=e;return(0,m.jsx)("div",{className:te.expandButton,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,m.jsx)(v,{className:te.expandButtonIcon})})}const ae={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function oe(e){let{children:t}=e;const n=(0,l.V)();return(0,m.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function re(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:s}=(0,h.TH)(),[l,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{l&&c(!1),!l&&(0,p.n)()&&c(!0),r((e=>!e))}),[r,l]);return(0,m.jsx)("aside",{className:(0,o.Z)(i.k.docs.docSidebarContainer,ae.docSidebarContainer,n&&ae.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ae.docSidebarContainer)&&n&&c(!0)},children:(0,m.jsx)(oe,{children:(0,m.jsxs)("div",{className:(0,o.Z)(ae.sidebarViewport,l&&ae.sidebarViewportHidden),children:[(0,m.jsx)(ee,{sidebar:t,path:s,onCollapse:d,isHidden:l}),l&&(0,m.jsx)(ne,{toggleSidebar:d})]})})})}const ie={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function se(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,l.V)();return(0,m.jsx)("main",{className:(0,o.Z)(ie.docMainContainer,(t||!a)&&ie.docMainContainerEnhanced),children:(0,m.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ie.docItemWrapper,t&&ie.docItemWrapperEnhanced),children:n})})}const le={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ce(e){let{children:t}=e;const n=(0,l.V)(),[o,r]=(0,a.useState)(!1);return(0,m.jsxs)("div",{className:le.docsWrapper,children:[(0,m.jsx)(b,{}),(0,m.jsxs)("div",{className:le.docRoot,children:[n&&(0,m.jsx)(re,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:r}),(0,m.jsx)(se,{hiddenSidebarContainer:o,children:t})]})]})}var de=n(5658);function ue(e){const t=(0,s.SN)(e);if(!t)return(0,m.jsx)(de.Z,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,m.jsx)(r.FG,{className:(0,o.Z)(i.k.page.docsDocPage),children:(0,m.jsx)(l.b,{name:a,items:c,children:(0,m.jsx)(ce,{children:n})})})}},5658:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var a=n(6010),o=n(5999),r=n(2503),i=n(5893);function s(e){let{className:t}=e;return(0,i.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",t),children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,i.jsx)(r.default,{as:"h1",className:"hero__title",children:(0,i.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,i.jsx)("p",{children:(0,i.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,i.jsx)("p",{children:(0,i.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}},4353:(e,t,n)=>{n.d(t,{D:()=>l,f:()=>c});var a=n(7294),o=n(902),r=n(5893);const i=Symbol("EmptyContext"),s=a.createContext(i);function l(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,r.jsx)(s.Provider,{value:i,children:t})}function c(){const e=(0,a.useContext)(s);if(e===i)throw new o.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,n)=>{n.d(t,{a:()=>i});var a=n(7294),o=n(2466),r=n(5936);function i(e){let{threshold:t}=e;const[n,i]=(0,a.useState)(!1),s=(0,a.useRef)(!1),{startScroll:l,cancelScroll:c}=(0,o.Ct)();return(0,o.RF)(((e,n)=>{let{scrollY:a}=e;const o=n?.scrollY;o&&(s.current?s.current=!1:a>=o?(c(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,r.S)((e=>{e.location.hash&&(s.current=!0,i(!1))})),{shown:n,scrollToTop:()=>l(0)}}},3660:(e,t,n)=>{const a=n(7294).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=a},6454:(e,t,n)=>{const a=["options","packages"];function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n(60),n(8878);const l=n(7294),c=n(3394),d=n(3660),u=n(5893),m=(e=>e&&e.__esModule?e:{default:e})(c);function b(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function p(e,t,n){return Object.entries(e).forEach((a=>{let[o,r]=a;if("id"===o){const a="type"in e;(!a||a&&"reference"!==e.type)&&(t[Number(r)]=e,n&&(e.parentId=n.id))}else Array.isArray(r)?r.forEach((n=>{b(n)&&p(n,t,e)})):b(r)&&p(r,t,e)})),t}function h(e){const t={};return e.forEach((e=>{e.entryPoints.forEach((e=>{p(e.reflection,t)}))})),t}e.exports=function(e){let t=e.options,n=e.packages,o=s(e,a);const i=l.useMemo((()=>({options:t,reflections:h(n)})),[t,n]);return u.jsx(d.ApiDataContext.Provider,{value:i,children:u.jsx("div",{className:"apiPage",children:u.jsx(m.default,r({},o))})})}},60:(e,t,n)=>{n.r(t)},8878:(e,t,n)=>{n.r(t)}}]);
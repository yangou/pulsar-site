"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[29514,4972],{91262:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(72389);function l(e){let{children:t,fallback:n}=e;return(0,o.Z)()?a.createElement(a.Fragment,null,t?.()):n??null}},4972:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(67294),o=n(95999),l=n(10833),r=n(22215);function c(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},74477:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>r});var a=n(67294),o=n(902);const l=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new o.i6("DocsVersionProvider");return e}},96933:(e,t,n)=>{n.r(t),n.d(t,{default:()=>He});var a=n(67294),o=n(86010),l=n(10833),r=n(35281),c=n(43320),i=n(53438),s=n(74477),d=n(1116),m=n(22215),u=n(95999),b=n(12466),p=n(85936);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(l.current?l.current=!1:a>=r?(c(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.S)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",r.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(16550),v=n(87524),g=n(86668),k=n(21327),I=n(87462);function _(e){return a.createElement("svg",(0,I.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const C={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function S(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",C.collapseSidebarButton),onClick:t},a.createElement(_,{className:C.collapseSidebarButtonIcon}))}var x=n(59689),N=n(902);const Z=Symbol("EmptyContext"),w=a.createContext(Z);function T(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(w.Provider,{value:l},t)}var B=n(86043),y=n(48596),A=n(39960),L=n(72389);function P(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,g.L)(),f=function(e){const t=(0,L.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),v=(0,i._F)(t,l),k=(0,y.Mg)(h,l),{collapsed:_,setCollapsed:C}=(0,B.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:S,setExpandedItem:x}=function(){const e=(0,a.useContext)(w);if(e===Z)throw new N.i6("DocSidebarItemsExpandedStateProvider");return e}(),T=function(e){void 0===e&&(e=!_),x(e?null:s),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,N.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:v,collapsed:_,updateCollapsed:T}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&E&&C(!0)}),[b,S,s,C,E]),a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":_},p)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},a.createElement(A.Z,(0,I.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":v}),onClick:b?e=>{n?.(t),h?T(!1):(e.preventDefault(),T())}:()=>{n?.(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!_:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(P,{categoryLabel:u,onClick:e=>{e.preventDefault(),T()}})),a.createElement(B.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},a.createElement(U,{items:m,tabIndex:_?-1:0,onItemClick:n,activePath:l,level:c+1})))}var M=n(13919),H=n(22457);const V={menuExternalLink:"menuExternalLink_NmtK"};function D(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,l),E=(0,M.Z)(m);return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(A.Z,(0,I.Z)({className:(0,o.Z)("menu__link",!E&&V.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(H.Z,null)))}const W={menuHtmlItem:"menuHtmlItem_M9Kj"};function R(e){let{item:t,level:n,index:l}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),i&&[W.menuHtmlItem,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:c}})}function z(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(F,(0,I.Z)({item:t},n));case"html":return a.createElement(R,(0,I.Z)({item:t},n));default:return a.createElement(D,(0,I.Z)({item:t},n))}}function O(e){let{items:t,...n}=e;return a.createElement(T,null,t.map(((e,t)=>a.createElement(z,(0,I.Z)({key:t,item:e,index:t},n)))))}const U=(0,a.memo)(O),G={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function K(e){let{path:t,sidebar:n,className:l}=e;const c=function(){const{isActive:e}=(0,x.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",G.menu,c&&G.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:n,activePath:t,level:1})))}const Y="sidebar_mhZE",j="sidebarWithHideableNavbar__6UL",q="sidebarHidden__LRd",J="sidebarLogo_F_0z",X="sidebarVersionSwitch_EHpo";var $=n(577),Q=n(79705),ee=n(80143),te=n(60373);let ne=n(44908);ne=[{name:"current",label:"Next",path:"/docs/next"}].concat(ne.map((e=>({label:e,name:e,path:"/docs/"+e})))).slice(0,5).concat({name:"others",label:"Others",path:"/versions"});const ae=e=>e.docs.find((t=>t.id===e.mainDocId));function oe(e){let{mobile:t,docsPluginId:n,dropdownActiveClassDisabled:o,dropdownItemsBefore:l,dropdownItemsAfter:r,...c}=e;const i=(0,ee.Iw)(n),s=(0,ee.yW)(n),{preferredVersion:d,savePreferredVersionName:m}=(0,te.J)(n);const b=function(){const e=ne.map((e=>{const t={path:"/docs"+("current"===e.name?"/next":"/"+e.name)+("about"===i.activeDoc.id?"/":"/"+i.activeDoc.id)};return{isNavLink:!0,label:e.label,to:"",isActive:()=>e.name===i.activeVersion.name,onClick:()=>{m(e.name),window.location.href="others"===e.name?"/versions":t.path}}}));return[...l,...e,...r]}(),p=i.activeVersion??d??s,h=t&&b.length>1?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):p.label,E=t&&b.length>1?void 0:ae(p).path;return b.length<=1?a.createElement($.Z,(0,I.Z)({},c,{mobile:t,label:h,to:E,isActive:o?()=>!1:void 0})):a.createElement(Q.Z,(0,I.Z)({},c,{mobile:t,label:h,to:E,items:b,isActive:o?()=>!1:void 0}))}function le(e){let{path:t,sidebar:n,onCollapse:l,isHidden:r,docsPluginId:c}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:s}}}=(0,g.L)();return a.createElement("div",{className:(0,o.Z)(Y,i&&j,r&&q)},i&&a.createElement(k.Z,{tabIndex:-1,className:J}),t.indexOf("/docs/")>-1?a.createElement(ce,{docsPluginId:c}):a.createElement(a.Fragment,null),a.createElement(K,{path:t,sidebar:n}),s&&a.createElement(S,{onClick:l}))}function re(e){return a.createElement("div",{className:X},"Version:",a.createElement(oe,{docsPluginId:e.docsPluginId,dropdownItemsBefore:[],dropdownItemsAfter:[],items:[]}))}const ce=a.memo(re),ie=a.memo(le);var se=n(13102),de=n(93163);const me="sidebarVersionSwitch_n00S";var ue=n(91262);const be=e=>{let{sidebar:t,path:n,docsPluginId:l}=e;const c=(0,de.e)();return a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(fe,{docsPluginId:l}),a.createElement(U,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&c.toggle(),"link"===e.type&&c.toggle()},level:1}))};function pe(e){return a.createElement(se.Zo,{component:be,props:e})}function he(e){return a.createElement("div",{className:me},"Version:",a.createElement(oe,{docsPluginId:e.docsPluginId,dropdownItemsBefore:[],dropdownItemsAfter:[],items:["Master","Legacy"]}))}const Ee=a.memo(he),fe=e=>a.createElement(ue.Z,null,(()=>location.pathname.indexOf("/docs/")>-1?a.createElement(Ee,{docsPluginId:e.docsPluginId}):a.createElement(a.Fragment,null))),ve=a.memo(pe);function ge(e){const t=(0,v.i)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ie,e),o&&a.createElement(ve,e))}const ke={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function Ie(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ke.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(_,{className:ke.expandButtonIcon}))}const _e={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function Ce(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function Se(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:c}=(0,f.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),l((e=>!e))}),[l,i]);return a.createElement("aside",{className:(0,o.Z)(r.k.docs.docSidebarContainer,_e.docSidebarContainer,n&&_e.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(_e.docSidebarContainer)&&n&&s(!0)}},a.createElement(Ce,null,a.createElement("div",{className:(0,o.Z)(_e.sidebarViewport,i&&_e.sidebarViewportHidden)},a.createElement(ge,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(Ie,{toggleSidebar:d}))))}const xe={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ne(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.V)();return a.createElement("main",{className:(0,o.Z)(xe.docMainContainer,(t||!l)&&xe.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",xe.docItemWrapper,t&&xe.docItemWrapperEnhanced)},n))}const Ze={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function we(e){let{children:t}=e;const n=(0,d.V)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:Ze.docsWrapper},a.createElement(E,null),a.createElement("div",{className:Ze.docPage},n&&a.createElement(Se,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(Ne,{hiddenSidebarContainer:o},t)))}var Te=n(4972),Be=n(90197),ye=n(52263),Ae=n(44996),Le=n(21895),Pe=n.n(Le);function Fe(e){const{siteConfig:t}=(0,ye.Z)(),{versionMetadata:n,location:a,match:o}=e;if("current"===n.version)return t.url+(0,Ae.Z)(a.pathname);const l=a.pathname.replace(o.path,"");return t.url+(0,Ae.Z)(`/docs/${l}`)}function Me(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(Be.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(l.d,null,(t.noIndex||function(e){const{versionMetadata:t}=e;return"current"!=t.version&&Pe().coerce(t.version).compareMain("2.10.0")<0}(e))&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"}),a.createElement("link",{rel:"canonical",href:Fe(e)})))}function He(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(Te.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(Me,e),a.createElement(l.FG,{className:(0,o.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(we,null,c)))))}},44908:e=>{e.exports=JSON.parse('["3.2.x","3.1.x","3.0.x","2.11.x","2.10.x","2.9.x","2.8.x","2.7.5","2.7.4","2.7.3","2.7.2","2.7.1","2.7.0","2.6.4","2.6.3","2.6.2","2.6.1","2.6.0","2.5.2","2.5.1","2.5.0","2.4.2","2.4.1","2.4.0","2.3.2","2.3.1","2.3.0","2.2.1","2.2.0"]')}}]);
(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[8401,8693],{30106:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/jan-molak.eac7569.460.png 460w",images:[{path:n.p+"assets/ideal-img/jan-molak.eac7569.460.png",width:460,height:460}],src:n.p+"assets/ideal-img/jan-molak.eac7569.460.png",toString:function(){return n.p+"assets/ideal-img/jan-molak.eac7569.460.png"},placeholder:void 0,width:460,height:460},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQUlEQVR4nAE2Acn+AOrn5enl5O/s7NHNy8fCvd7a08rGwebn6NbW1sG7tgDl4+Hv6+u3r6pfSDleRTidi4DDvbjU09LPzs3GwLkA4+De5ubmpJOFxI1x2qWPtI16w8C8x8O+saulo6SxANzb2dbQzqaFcayCbMGTgbmVhse3rNDKwpqUkUNFTgDU09HOxcG4jnq2gnC7iHjDloV/aWGbj32Ac2c/QUEAzsnGycTCu6mfpnVksH5zmXlpP0BCk5CLfW5cOz1LAMW/vL62taaUiZJoVaV7bLqilbKxrqWhmHBlVi8zQwDBubPVzcHBtKGefGuhfm7TxLn08Onm39aVjoYtLTMA3dPD5N3M4tzNzcS0w7Wn5OHX6+Tb7+jg4d3Xal9WAODYyeHbzODZyt/Zy+bg0+Xf0+Xf1eTf197a1Ix3Z0REyneI+WKeAAAAAElFTkSuQmCC"}},97748:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>z});n(96540);var s=n(45500),a=n(60542),i=n(74848);function o(){const{metadata:e,frontMatter:t,assets:n}=(0,a.u)();return(0,i.jsx)(s.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var r=n(24581),l=n(95293),d=n(12171),c=n(71243),h=n(34164),u=n(17559),m=n(51107),g=n(77910);function p(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,a.u)();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,h.A)(u.G.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(m.default,{as:"h1",children:n})}),(0,i.jsx)(g.default,{children:t})]})}var j=n(62053),x=n(4336);function b(){const{metadata:e}=(0,a.u)(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:o}=e,r=o.length>0,l=!!(t||n||s);return r||l?(0,i.jsxs)("footer",{className:(0,h.A)(u.G.docs.docFooter,"docusaurus-mt-lg"),children:[r&&(0,i.jsx)("div",{className:(0,h.A)("row margin-top--sm",u.G.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(j.A,{tags:o})})}),l&&(0,i.jsx)(x.A,{className:(0,h.A)("margin-top--sm",u.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var f=n(27719);function v(){const{metadata:e}=(0,a.u)();return(0,i.jsx)(f.default,{previous:e.previous,next:e.next})}var A=n(67763);function w(){const{toc:e,frontMatter:t}=(0,a.u)();return(0,i.jsx)(A.default,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:u.G.docs.docTocDesktop})}var y=n(49765);const k={tocMobile:"tocMobile_ITEo"};function N(){const{toc:e,frontMatter:t}=(0,a.u)();return(0,i.jsx)(y.default,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,h.A)(u.G.docs.docTocMobile,k.tocMobile)})}var T=n(4267),_=n(44586),U=n(28774),L=n(21312),S=n(44070),C=n(53886),M=n(23025);const D={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(L.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(L.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function I(e){const t=D[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function B(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(L.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(U.default,{to:n,onClick:s,children:(0,i.jsx)(L.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function W(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,_.default)(),{pluginId:a}=(0,S.useActivePlugin)({failfast:!0}),{savePreferredVersionName:o}=(0,C.g1)(a),{latestDocSuggestion:r,latestVersionSuggestion:l}=(0,S.useDocVersionSuggestions)(a),d=r??(c=l).docs.find((e=>e.id===c.mainDocId));var c;return(0,i.jsxs)("div",{className:(0,h.A)(t,u.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(I,{siteTitle:s,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(B,{versionLabel:l.label,to:d.path,onClick:()=>o(l.name)})})]})}function V(e){let{className:t}=e;const n=(0,M.r)();return n.banner?(0,i.jsx)(W,{className:t,versionMetadata:n}):null}const G={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ"};function H(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=(0,a.u)(),n=(0,r.l)(),s=e.hide_table_of_contents,o=!s&&t.length>0;return{hidden:s,mobile:o?(0,i.jsx)(N,{}):void 0,desktop:!o||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(w,{})}}(),{colorMode:s}=(0,l.G)();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,h.A)("col",!n.hidden&&G.docItemCol),children:[(0,i.jsx)(V,{}),(0,i.jsxs)("div",{className:G.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(c.default,{}),(0,i.jsx)(T.default,{}),n.mobile,(0,i.jsx)(p,{children:t}),(0,i.jsx)(b,{})]}),(0,i.jsx)(v,{}),(0,i.jsx)(d.A,{id:"giscus-comments",repo:"serenity-js/serenity-js",repoId:"MDEwOlJlcG9zaXRvcnk2MTMwODcxNA==",category:"Comments",categoryId:"DIC_kwDOA6d_Ks4CSdtl",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:s,lang:"en",strict:"1",loading:"lazy"})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function z(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(a._,{content:e.content,children:(0,i.jsxs)(s.e3,{className:t,children:[(0,i.jsx)(o,{}),(0,i.jsx)(H,{children:(0,i.jsx)(n,{})})]})})}},4336:(e,t,n)=>{"use strict";n.d(t,{A:()=>j});n(96540);var s=n(34164),a=n(21312),i=n(17559),o=n(28774);const r={iconEdit:"iconEdit_Z9Sw"};var l=n(74848);function d(e){let{className:t,...n}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(r.iconEdit,t),"aria-hidden":"true",...n,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function c(e){let{editUrl:t}=e;return(0,l.jsxs)(o.default,{to:t,className:i.G.common.editThisPage,children:[(0,l.jsx)(d,{}),(0,l.jsx)(a.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var h=n(36266);function u(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=(0,h.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,l.jsx)(a.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function m(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(a.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function g(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,l.jsxs)("span",{className:i.G.common.lastUpdated,children:[(0,l.jsx)(a.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,l.jsx)(u,{lastUpdatedAt:t}):"",byUser:n?(0,l.jsx)(m,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const p={lastUpdated:"lastUpdated_JAkA"};function j(e){let{className:t,editUrl:n,lastUpdatedAt:a,lastUpdatedBy:i}=e;return(0,l.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,l.jsx)("div",{className:"col",children:n&&(0,l.jsx)(c,{editUrl:n})}),(0,l.jsx)("div",{className:(0,s.A)("col",p.lastUpdated),children:(a||i)&&(0,l.jsx)(g,{lastUpdatedAt:a,lastUpdatedBy:i})})]})}},56133:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(96540);var s=n(34164),a=n(28774);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var o=n(74848);function r(e){let{permalink:t,label:n,count:r,description:l}=e;return(0,o.jsxs)(a.default,{href:t,title:l,className:(0,s.A)(i.tag,r?i.tagWithCount:i.tagRegular),children:[n,r&&(0,o.jsx)("span",{children:r})]})}},62053:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});n(96540);var s=n(34164),a=n(21312),i=n(56133);const o={tags:"tags_jXut",tag:"tag_QGVx"};var r=n(74848);function l(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,s.A)(o.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,r.jsx)("li",{className:o.tag,children:(0,r.jsx)(i.A,{...e})},e.permalink)))})]})}},36266:(e,t,n)=>{"use strict";n.d(t,{i:()=>a});var s=n(44586);function a(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,s.default)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,s.default)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}},71370:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(96540);var s=n(82331);const a={authorBio:"authorBio_pZ75"};var i=n(74848);const o=function(e,t){const n=Math.abs(t.getTime()-e.getTime());return Math.floor(n/315576e5)}(new Date("2006-03-01"),new Date);function r(){return(0,i.jsxs)("footer",{className:a.authorBio,children:[(0,i.jsx)(s.A,{img:n(30106),width:200,alt:"Jan Molak",style:{overflow:"hidden"}}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"Jan Molak"})," is an independent software development consultant and trainer helping teams around the world deliver software that matters."]}),(0,i.jsxs)("p",{children:["In his career spanning the last ",o," years, Jan has worked on software ranging from best-selling, award-winning ",(0,i.jsx)("a",{href:"https://www.mobygames.com/person/292010/jan-molak/",target:"_blank",children:"AAA video games"})," through high-traffic websites and web apps to search engines, complex event processing and financial systems."]}),(0,i.jsxs)("p",{children:["Jan is the author of the Serenity/JS acceptance testing framework, co-author of ",(0,i.jsx)("a",{href:"https://www.manning.com/books/bdd-in-action-second-edition",target:"_blank",children:'"BDD in Action, Second Edition"'}),", a contributor to the ",(0,i.jsx)("a",{href:"/handbook/design/screenplay-pattern/",children:"Screenplay Pattern"}),", and dozens of open-source tools in the Behaviour-Driven Development and test automation space."]}),(0,i.jsxs)("p",{children:["Get in touch via ",(0,i.jsx)("a",{href:"https://linkedin.com/in/janmolak",target:"_blank",children:"LinkedIn"})," \ud83d\udcac"]})]})]})}},16889:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});n(96540);var s=n(34164);const a={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var i=n(74848);function o(e){let{children:t,minHeight:n,backgroundColor:o="none",url:r="http://localhost:3000"}=e;return(0,i.jsxs)("div",{className:a.browserWindow,style:{minHeight:n},children:[(0,i.jsxs)("div",{className:a.browserWindowHeader,children:[(0,i.jsxs)("div",{className:a.buttons,children:[(0,i.jsx)("span",{className:a.dot,style:{background:"#f25f58"}}),(0,i.jsx)("span",{className:a.dot,style:{background:"#fbbe3c"}}),(0,i.jsx)("span",{className:a.dot,style:{background:"#58cb42"}})]}),(0,i.jsx)("div",{className:(0,s.A)(a.browserWindowAddressBar,"text--truncate"),children:r}),(0,i.jsx)("div",{className:a.browserWindowMenuIcon,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:a.bar}),(0,i.jsx)("span",{className:a.bar}),(0,i.jsx)("span",{className:a.bar})]})})]}),(0,i.jsx)("div",{className:a.browserWindowBody,style:{backgroundColor:o},children:t})]})}},75512:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(96540);var s=n(34164),a=n(74848);function i(e){let{type:t,format:n=e=>e,className:i}=e;const o={required:"You MUST install a compatible version of this dependency in your package.json file",optional:"You SHOULD install a compatible version of at least one of the available optional dependencies in your package.json file",direct:"A compatible version of this dependency will be installed together with the corresponding Serenity/JS module, but you COULD also add it in your package.json file"}[t];return(0,a.jsx)("span",{className:(0,s.A)(i),"aria-label":o,title:o,children:n(t)})}},45164:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var s=n(28774),a=(n(96540),n(74848));function i(e){let{packageName:t,showPackageName:n=!0}=e;return(0,a.jsxs)(s.default,{className:n?"tsd-kind-icon":"tsd-anchor",href:`https://npmjs.com/package/${t}`,rel:"noreferrer",target:"_blank",title:`See ${t} on npmjs.com`,children:[(0,a.jsx)("i",{className:"codicon codicon-package"}),n?t:null]})}},36260:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(96540);var s=n(34164),a=n(74848);function i(e){let{range:t,className:n}=e;const i={"^":`${t.slice(1)} or any newer patch or minor version`,"~":`${t.slice(1)} or any newer patch version`}[t.charAt(0)]??`Version ${t} exactly`;return(0,a.jsx)("code",{className:(0,s.A)(n),title:i,"aria-label":i,children:t})}},1218:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var s=n(71370),a=(n(96540),n(13472)),i=n(74848);var o=n(16889),r=n(45164),l=n(75512),d=n(82331);var c=n(36260),h=n(2972),u=n(19365),m=n(11470);const g={...h.A,AuthorBio:s.A,ArticleComingSoon:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("hr",{}),(0,i.jsxs)(a.A,{type:"info",title:"Coming soon",children:[(0,i.jsxs)("p",{children:["This article is coming soon! If you'd like me to prioritise writing it, give it a thumbs up \ud83d\udc4d in the reactions section below so that I know that this topic is in demand. Also make sure to follow Serenity/JS on ",(0,i.jsx)("a",{href:"https://www.linkedin.com/company/serenity-js/",title:"Follow Serenity/JS on LinkedIn",children:"LinkedIn"})," or ",(0,i.jsx)("a",{href:"https://twitter.com/SerenityJS",title:"Follow Serenity/JS on Twitter",children:"Twitter"})," to get notified \ud83d\udd14 when new materials and releases are available."]}),(0,i.jsxs)("p",{children:["And if you appreciate the amount of effort that goes into maintaining Serenity/JS and producing all the learning materials, please ",(0,i.jsx)("a",{href:"https://github.com/sponsors/serenity-js",target:"_blank",rel:"noopener noreferrer",children:"support our work on GitHub"}),"."]})]})]})},BrowserWindow:o.A,DependencyTypeDescription:l.A,Image:d.A,NpmLink:r.A,Tabs:m.A,TabItem:u.A,SemanticVersionRangeDescription:c.A,Figure:function(e){let{img:t,caption:n,externalLink:s}=e;const a=s?(0,i.jsxs)("figcaption",{children:[n," (",(0,i.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:"source"}),")"]}):(0,i.jsx)("figcaption",{children:n});return(0,i.jsxs)("figure",{children:[(0,i.jsx)(d.A,{img:t,alt:n}),a]})}}},12171:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var s=n(74848),a=n(96540);function i({id:e,host:t,repo:i,repoId:o,category:r,categoryId:l,mapping:d,term:c,strict:h,reactionsEnabled:u,emitMetadata:m,inputPosition:g,theme:p,lang:j,loading:x}){const[b,f]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{b||n.e(416).then(n.bind(n,80416)).then((()=>f(!0)))}),[]),b?(0,s.jsx)("giscus-widget",{id:e,host:t,repo:i,repoid:o,category:r,categoryid:l,mapping:d,term:c,strict:h,reactionsenabled:u,emitmetadata:m,inputposition:g,theme:p,lang:j,loading:x}):null}}}]);
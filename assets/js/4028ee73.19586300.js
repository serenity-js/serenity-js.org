"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[3813],{23141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>m,default:()=>f,frontMatter:()=>u,metadata:()=>x,toc:()=>y});var s=n(74848),r=n(28453),i=n(96540),o=n(97639),a=n(14783),c=n(70785),l=n(70801),d=n(46045);function p(e){const t=Object.entries(e.compatibility).sort();return[{name:e.name,version:e.version,dependencies:t.map((e=>{let[t,n]=e;return{name:t,type:n.type,versionRanges:n.version.split("||").map((e=>e.trim()))}}))}]}const h=()=>{const{siteConfig:e}=(0,o.default)(),t=e.customFields.categories,n=e=>`/api/${e.split("/")[1]}`;return(0,s.jsxs)("table",{id:"serenity-js-compatibility-matrix",children:[(0,s.jsxs)("thead",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{colSpan:2,scope:"colgroup",children:"Serenity/JS Modules"}),(0,s.jsx)("th",{colSpan:2,scope:"colgroup",children:"Compatibility"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{scope:"col",children:"Package"}),(0,s.jsx)("th",{scope:"col",children:"Current version"}),(0,s.jsx)("th",{scope:"col",children:"Package"}),(0,s.jsx)("th",{scope:"col",children:"Compatible versions"})]})]}),(0,s.jsx)("tbody",{children:t.map((e=>(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)("tr",{children:(0,s.jsx)("th",{colSpan:4,scope:"colgroup",children:e.name})}),e.items.flatMap(p).map(((t,r)=>0===t.dependencies.length?(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{scope:"row",children:(0,s.jsx)(a.default,{to:n(t.name),children:t.name})}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:t.version})}),(0,s.jsx)("td",{colSpan:2})]},e.name+r):t.dependencies.map(((e,o)=>(0,s.jsxs)("tr",{children:[0===o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("th",{rowSpan:t.dependencies.length,scope:"rowgroup",children:(0,s.jsx)(a.default,{to:n(t.name),children:t.name})}),(0,s.jsx)("td",{rowSpan:t.dependencies.length,children:(0,s.jsx)("code",{children:t.version})})]}),(0,s.jsxs)("td",{children:[(0,s.jsx)(l.A,{packageName:e.name})," ",(0,s.jsx)("small",{children:(0,s.jsx)(c.A,{format:e=>`(${e})`,type:e.type})})]}),(0,s.jsx)("td",{children:e.versionRanges.map(((t,n)=>(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)(d.A,{range:t}),(0,s.jsx)("br",{})]},e.name+n)))})]},e.name+r)))))]},e.name)))})]})},u={title:"Current releases and compatibility",sidebar_position:1},m="Current releases and compatibility",x={id:"index",title:"Current releases and compatibility",description:"Serenity/JS helps you integrate your test automation framework with your favourite tools and libraries.",source:"@site/src/docs/releases/index.mdx",sourceDirName:".",slug:"/",permalink:"/releases/",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/releases/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Current releases and compatibility",sidebar_position:1},sidebar:"docs",next:{title:"Versioning strategy",permalink:"/releases/versioning"}},j={},y=[];function g(e){const t={a:"a",admonition:"admonition",h1:"h1",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"current-releases-and-compatibility",children:"Current releases and compatibility"}),"\n","\n",(0,s.jsx)(t.p,{children:"Serenity/JS helps you integrate your test automation framework with your favourite tools and libraries."}),"\n",(0,s.jsx)(t.p,{children:"To make sure your Serenity/JS setup is up to date and you're using the right versions of the Serenity/JS modules, check the compatibility matrix below."}),"\n",(0,s.jsx)(h,{}),"\n",(0,s.jsx)(t.admonition,{title:"Use a bot to update your dependencies automatically",type:"info",children:(0,s.jsxs)(t.p,{children:["Use a dependency management bot like ",(0,s.jsx)(t.a,{href:"https://docs.renovatebot.com/",children:"Renovate"})," or ",(0,s.jsx)(t.a,{href:"https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide",children:"Dependabot"}),"\nto stay up-to-date with the new features, bug fixes, and security patches."]})})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},70785:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(34164),r=n(74848);function i(e){let{type:t,format:n=e=>e,className:i}=e;const o={required:"You MUST install a compatible version of this dependency in your package.json file",optional:"You SHOULD install a compatible version of at least one of the available optional dependencies in your package.json file",direct:"A compatible version of this dependency will be installed together with the corresponding Serenity/JS module, but you COULD also add it in your package.json file"}[t];return(0,r.jsx)("span",{className:(0,s.A)(i),"aria-label":o,title:o,children:n(t)})}},70801:(e,t,n)=>{n.d(t,{A:()=>i});var s=n(14783),r=(n(96540),n(74848));function i(e){let{packageName:t,showPackageName:n=!0}=e;return(0,r.jsxs)(s.default,{className:n?"tsd-kind-icon":"tsd-anchor",href:`https://npmjs.com/package/${t}`,rel:"noreferrer",target:"_blank",title:`See ${t} on npmjs.com`,children:[(0,r.jsx)("i",{className:"codicon codicon-package"}),n?t:null]})}},46045:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(34164),r=n(74848);function i(e){let{range:t,className:n}=e;const i={"^":`${t.slice(1)} or any newer patch or minor version`,"~":`${t.slice(1)} or any newer patch version`}[t.charAt(0)]??`Version ${t} exactly`;return(0,r.jsx)("code",{className:(0,s.A)(n),title:i,"aria-label":i,children:t})}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
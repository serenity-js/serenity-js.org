"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[5056],{42796:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"versioning","title":"Versioning strategy","description":"Serenity/JS complies with Semantic Versioning 2.0.0,","source":"@site/src/docs/releases/versioning.mdx","sourceDirName":".","slug":"/versioning","permalink":"/releases/versioning","draft":false,"unlisted":false,"editUrl":"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/releases/versioning.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Versioning strategy"},"sidebar":"docs","previous":{"title":"Current releases and compatibility","permalink":"/releases/"},"next":{"title":"Updating Serenity/JS","permalink":"/releases/updating-serenity-js"}}');var s=i(74848),r=i(28453);const o={sidebar_position:2,title:"Versioning strategy"},a="Serenity/JS versioning strategy",c={},d=[{value:"Release cadence",id:"release-cadence",level:2},{value:"Deprecated APIs",id:"deprecated-apis",level:2},{value:"Experimental APIs",id:"experimental-apis",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"serenityjs-versioning-strategy",children:"Serenity/JS versioning strategy"})}),"\n",(0,s.jsxs)(t.p,{children:["Serenity/JS complies with ",(0,s.jsx)(t.a,{href:"https://semver.org/",children:"Semantic Versioning 2.0.0"}),",\nwith release versions ",(0,s.jsx)(t.a,{href:"/community/contributing/commit-message-conventions/",children:"determined automatically"}),"\nbased on the commit messages introduced with changes\nintroduced to the ",(0,s.jsxs)(t.a,{href:"https://github.com/serenity-js/serenity-js/tree/main",children:[(0,s.jsx)(t.code,{children:"main"})," branch"]})," since the most recent release."]}),"\n",(0,s.jsxs)(t.p,{children:["All ",(0,s.jsx)(t.a,{href:"/handbook/getting-started/architecture",children:"Serenity/JS modules"})," are released together, even if not all of them have changed in a given release.\nThis is to make it easier for you to stay up to date without having to worry about any compatibility issues between the framework's modules."]}),"\n",(0,s.jsx)(t.h2,{id:"release-cadence",children:"Release cadence"}),"\n",(0,s.jsxs)(t.p,{children:["New minor and patch versions of Serenity/JS modules are typically released ",(0,s.jsx)(t.a,{href:"/releases/",children:"at least once per month"}),",\nbut typically more frequently to help ensure the framework is up-to-date\nwith any ",(0,s.jsx)(t.a,{href:"https://snyk.io/test/github/serenity-js/serenity-js",children:"security fixes"})," and patches to its dependencies"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Stay up to date",type:"info",children:[(0,s.jsxs)(t.p,{children:["The easiest way to stay up to date with the latest features and bug fixes is to ",(0,s.jsx)(t.strong,{children:"always use the latest version of your chosen Serenity/JS modules"}),"."]}),(0,s.jsxs)(t.p,{children:["Learn how to ",(0,s.jsx)(t.a,{href:"/releases/updating-serenity-js",children:"keep your Serenity/JS project up to date"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"deprecated-apis",children:"Deprecated APIs"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/api",children:"public APIs"})," of the framework will not be removed or changed in a backward-incompatible way in minor or patch releases of the framework. However, from time to time some APIs might get marked as ",(0,s.jsx)(t.code,{children:"@deprecated"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["When an API is marked as ",(0,s.jsx)(t.code,{children:"@deprectated"}),", the documentation of the API will provide instructions on what other API has superseded the deprecated one. Additionally, a ticket marked as ",(0,s.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js/labels/deprecation-notice",children:(0,s.jsx)(t.code,{children:"deprecation-notice"})})," is raised on Serenity/JS GitHub, and you'll have at least 3 months since the ticket is raised to migrate the code using a deprecated api to the new alternative."]}),"\n",(0,s.jsx)(t.p,{children:"Removing a deprecated API will not affect the major version number of the Serenity/JS framework, but a new major version release will typically remove all the deprecated APIs implemented in the previous major version."}),"\n",(0,s.jsxs)(t.p,{children:["You can ",(0,s.jsx)(t.a,{href:"https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository",children:"watch"})," the ",(0,s.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js",children:"Serenity/JS GitHub"})," repository to be notified of deprecated APIs."]}),"\n",(0,s.jsx)(t.h2,{id:"experimental-apis",children:"Experimental APIs"}),"\n",(0,s.jsxs)(t.p,{children:["In order to enable early feedback, from time to time experimental APIs are introduced to the framework. Those APIs are clearly marked as ",(0,s.jsx)(t.code,{children:"@experimental"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["When a new experimental API is introduced to the framework, a ticket marked as ",(0,s.jsx)(t.a,{href:"https://github.com/jan-molak/serenity-js/labels/experiment",children:(0,s.jsx)(t.code,{children:"experiment"})})," will be raised on Serenity/JS GitHub, so you're encouraged to give the idea ",(0,s.jsx)(t.a,{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-conversations-on-github#reacting-to-ideas-in-comments",children:"a thumbs up"})," or provide suggestions on how it could be improved."]}),"\n",(0,s.jsx)(t.p,{children:"Please be aware that experimental APIs might change or get removed without prior notice and without affecting the major version number of the Serenity/JS framework."}),"\n",(0,s.jsxs)(t.p,{children:["You can ",(0,s.jsx)(t.a,{href:"https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository",children:"watch"})," the ",(0,s.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js",children:"Serenity/JS GitHub"})," repository to be notified of experimental APIs."]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
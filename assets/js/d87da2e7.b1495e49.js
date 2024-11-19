"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[6227],{77427:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=t(74848),o=t(28453);const i={sidebar_position:9},s="Reporting",a={id:"reporting/index",title:"Reporting",description:"Just like the core design patterns in your Serenity/JS scenarios revolve around the system metaphor",source:"@site/src/docs/handbook/reporting/index.mdx",sourceDirName:"reporting",slug:"/reporting/",permalink:"/handbook/reporting/",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/reporting/index.mdx",tags:[],version:"current",lastUpdatedAt:1731609349e3,sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docs",previous:{title:"WebdriverIO",permalink:"/handbook/test-runners/webdriverio"},next:{title:"Domain Events",permalink:"/handbook/reporting/domain-events"}},c={},d=[];function h(e){const r={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"reporting",children:"Reporting"}),"\n",(0,n.jsxs)(r.p,{children:["Just like the ",(0,n.jsx)(r.a,{href:"/handbook/design/",children:"core design patterns"})," in your Serenity/JS scenarios revolve around the ",(0,n.jsx)(r.a,{href:"http://www.extremeprogramming.org/rules/metaphor.html",children:"system metaphor"}),"\nof a ",(0,n.jsx)(r.a,{href:"/handbook/design/screenplay-pattern",children:"stage performance"}),", Serenity/JS reporting services follow the metaphor of a ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Running_crew",children:(0,n.jsx)(r.em,{children:"stage crew"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"/api/core/interface/StageCrewMember",children:(0,n.jsx)(r.code,{children:"StageCrewMembers"})})," observe the ",(0,n.jsx)(r.a,{href:"/api/core/class/Actor",children:"actors"})," on ",(0,n.jsx)(r.a,{href:"/api/core/class/Stage",children:(0,n.jsx)(r.code,{children:"Stage"})}),",\nwatch the ",(0,n.jsx)(r.a,{href:"/api/core/class/Activity",children:(0,n.jsx)(r.code,{children:"Activities"})})," they perform, and listen to the ",(0,n.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"domain events"})," emitted by their environment.\nThey use the information they gather to ",(0,n.jsx)(r.a,{href:"/api/core-events/class/ArtifactGenerated",children:"generate artifacts"}),", such as test reports,\nproduce more events to prompt other crew members to action, or perform side effects like printing to the terminal, writing files to disk, or performing network or database calls."]}),"\n",(0,n.jsxs)(r.p,{children:["Several of the Serenity/JS modules provide ",(0,n.jsx)(r.a,{href:"/api/core/interface/StageCrewMember",children:(0,n.jsx)(r.code,{children:"StageCrewMembers"})})," you can use for test reporting purposes:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/reporting/console-reporter",children:"Console Reporter"})," - writes text-based test reports to your computer terminal,"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:"Serenity BDD Reporter"})," - emits ",(0,n.jsx)(r.a,{href:"https://serenity-bdd.github.io/",children:"Serenity BDD"}),"-compatible JSON reports,\nto be archived via ",(0,n.jsx)(r.a,{href:"/handbook/reporting/artifact-archiver",children:(0,n.jsx)(r.code,{children:"ArtifactArchiver"})}),"\nand consumed by the ",(0,n.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter/#using-serenity-bdd-cli",children:"Serenity BDD CLI"})," to produce HTML reports and living documentation,"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/reporting/photographer",children:"Photographer"})," - automatically captures screenshots of the web browser window used by the active actor, to be archived via ",(0,n.jsx)(r.a,{href:"/handbook/reporting/artifact-archiver",children:(0,n.jsx)(r.code,{children:"ArtifactArchiver"})})," and attached to ",(0,n.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:"Serenity BDD reports"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/reporting/artifact-archiver",children:"Artifact Archiver"})," - stores report artifacts on disk,"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/reporting/stream-reporter",children:"Stream Reporter"})," - logs any events it receives to help you with debugging."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["You might want to study the above examples to create your own ",(0,n.jsx)(r.a,{href:"/api/core/interface/StageCrewMember",children:(0,n.jsx)(r.code,{children:"StageCrewMembers"})})," to produce custom reports or send the results to external reporting or storage systems."]})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var n=t(96540);const o={},i=n.createContext(o);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[8784],{67261:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(74848),s=t(28453);const i={sidebar_position:1},o="Domain Events",a={id:"reporting/domain-events",title:"Domain Events",description:"Serenity/JS domain events represent all the important things that happen during the execution of your test suite.",source:"@site/src/docs/handbook/reporting/domain-events.mdx",sourceDirName:"reporting",slug:"/reporting/domain-events",permalink:"/handbook/reporting/domain-events",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/reporting/domain-events.mdx",tags:[],version:"current",lastUpdatedAt:17322056e5,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Reporting",permalink:"/handbook/reporting/"},next:{title:"Console Reporter",permalink:"/handbook/reporting/console-reporter"}},c={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"domain-events",children:"Domain Events"}),"\n",(0,r.jsxs)(n.p,{children:["Serenity/JS ",(0,r.jsx)(n.a,{href:"/api/core-events/class/DomainEvent",children:"domain events"})," represent all the important things that happen during the execution of your test suite.\nThey are a critical part of the Serenity/JS messaging infrastructure\nthat enables the ",(0,r.jsx)(n.a,{href:"/handbook/getting-started/architecture/",children:"loosely coupled, modular architecture"}),"\nof the framework, and ensure that all the registered ",(0,r.jsx)(n.a,{href:"/handbook/reporting/",children:"reporting services"}),"\nhave the same, consistent picture of your test scenarios."]}),"\n",(0,r.jsxs)(n.p,{children:["Serenity/JS domain events are produced when ",(0,r.jsx)(n.a,{href:"/api/core/class/Actor",children:"actors"})," perform their ",(0,r.jsx)(n.a,{href:"/api/core/class/Activity",children:"activities"}),"\nand when ",(0,r.jsx)(n.a,{href:"/handbook/test-runners/",children:"test runner adapters"})," translate information about your test runner lifecycle events.\nDomain events are then propagated via the ",(0,r.jsx)(n.a,{href:"/api/core/class/Stage",children:"stage"})," and consumed by all\nthe registered ",(0,r.jsx)(n.a,{href:"/api/core/interface/StageCrewMember",children:"stage crew members"})," for reporting purposes."]}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)(n.mermaid,{value:'flowchart TB\n    Developer["\ud83d\udcbb You"]\n    TestCode["Your Test Code"]\n    SerenityModules["Serenity/JS Modules"]\n    TestReports["Test Execution Reports"]\n    Stage\n\n    subgraph TestRunner["Test Runner"]\n    direction TB\n    TestRunnerAdapter["Serenity/JS Test Runner Adapter"]\n    end\n\n    subgraph ReportingServices["Serenity/JS Reporting Services"]\n    direction TB\n    StageCrewMember["StageCrewMember"]\n    end\n\n    Developer -- invoke --\x3e TestRunner\n\n    TestCode -- uses --\x3e SerenityModules\n    TestRunner -- executes --\x3e TestCode\n    TestRunnerAdapter --\x3e |emits DomainEvents| Stage\n    SerenityModules --\x3e |emit DomainEvents| Stage\n    Stage --\x3e |forwards DomainEvents| ReportingServices\n    ReportingServices --\x3e |produce| TestReports'}),(0,r.jsx)("figcaption",{children:"Serenity/JS Reporting Services integration diagram"})]}),"\n",(0,r.jsx)(n.p,{children:"You'll typically only need to learn about Serenity/JS domain events when implementing custom reporting services. In this case, you should study:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["the ",(0,r.jsx)(n.a,{href:"/api/core-events/class/DomainEvent",children:(0,r.jsx)(n.code,{children:"@serenity-js/core/lib/events"})})," package, to see what domain events are available,"]}),"\n",(0,r.jsxs)(n.li,{children:["built-in implementations of the ",(0,r.jsx)(n.a,{href:"/api/core/interface/StageCrewMember",children:(0,r.jsx)(n.code,{children:"StageCrewMember"})})," interface, to see examples of how to work with events."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[7754],{23566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(74848),r=t(28453);const s={sidebar_position:4},o="Logging",a={id:"design/logging",title:"Logging",description:"Serenity/JS helps you model your test scenarios from the perspective of actors performing activities to accomplish their goals.",source:"@site/src/docs/handbook/design/logging.mdx",sourceDirName:"design",slug:"/design/logging",permalink:"/handbook/design/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/design/logging.mdx",tags:[],version:"current",lastUpdatedAt:1732293741e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Waiting and synchronisation",permalink:"/handbook/design/waiting-and-synchronisation"},next:{title:"Debugging",permalink:"/handbook/design/debugging"}},c={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"logging",children:"Logging"}),"\n",(0,i.jsxs)(n.p,{children:["Serenity/JS helps you model your test scenarios from the perspective of ",(0,i.jsx)(n.a,{href:"/api/core/class/Actor",children:"actors"})," performing ",(0,i.jsx)(n.a,{href:"/api/core/class/Activity",children:"activities"})," to accomplish their goals.\nLogging follows this same consistent approach, with any log statements expressed using the interaction to ",(0,i.jsx)(n.a,{href:"/api/core/class/Log",children:(0,i.jsx)(n.code,{children:"Log"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The interaction to ",(0,i.jsx)(n.a,{href:"/api/core/class/Log",children:(0,i.jsx)(n.code,{children:"Log"})})," accepts any number of arguments, including dynamic values such as ",(0,i.jsx)(n.a,{href:"/api/core/class/Question",children:"questions"}),"\nand ",(0,i.jsx)(n.a,{href:"/api/core#QuestionAdapter",children:"question adapters"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { actorCalled, Log } from '@serenity-js/core'\nimport { Page } from '@serenity-js/web'\n\nawait actorCalled('Laura').attemptsTo(\n  Log.the('Current page', Page.current().title(), Page.current().url().href),\n  //  static value --^        question --^          question adapter --^\n)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When the actor reaches the interaction to ",(0,i.jsx)(n.a,{href:"/api/core/class/Log",children:(0,i.jsx)(n.code,{children:"Log"})})," in their workflow, the interaction:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"evaluates the arguments in the context of the given actor,"}),"\n",(0,i.jsxs)(n.li,{children:["makes the actor ",(0,i.jsx)(n.a,{href:"/api/core/class/Actor#collect",children:"collect"})," data artifacts with the results of the evaluation,"]}),"\n",(0,i.jsxs)(n.li,{children:["the actor emits collected artifacts as ",(0,i.jsx)(n.a,{href:"/handbook/reporting/domain-events",children:"domain events"}),","]}),"\n",(0,i.jsxs)(n.li,{children:["domain events are announced to all the registered ",(0,i.jsx)(n.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Since the interaction to ",(0,i.jsx)(n.code,{children:"Log"})," relies on Serenity/JS domain events to propagate the information,\nall the registered reporting services receive the exact same information and can include it in their respective reports."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
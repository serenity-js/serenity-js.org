"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[3984],{20777:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(74848),s=t(28453);const o={sidebar_position:6},i="Stream Reporter",a={id:"reporting/stream-reporter",title:"Stream Reporter",description:"StreamReporter, available as part of the @serenity-js/core module,",source:"@site/src/docs/handbook/reporting/stream-reporter.mdx",sourceDirName:"reporting",slug:"/reporting/stream-reporter",permalink:"/handbook/reporting/stream-reporter",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/reporting/stream-reporter.mdx",tags:[],version:"current",lastUpdatedAt:1731609349e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Artifact Archiver",permalink:"/handbook/reporting/artifact-archiver"},next:{title:"Integration",permalink:"/handbook/integration/"}},c={},l=[{value:"Installation and usage",id:"installation-and-usage",level:2},{value:"Integration",id:"integration",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"stream-reporter",children:"Stream Reporter"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/core/class/StreamReporter",children:(0,n.jsx)(r.code,{children:"StreamReporter"})}),", available as part of the ",(0,n.jsx)(r.a,{href:"/api/core",children:(0,n.jsx)(r.code,{children:"@serenity-js/core"})})," module,\nserialises ",(0,n.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"domain events"})," it receives to JSON and sends them\nto a ",(0,n.jsx)(r.a,{href:"https://nodejs.org/docs/latest/api/stream.html#stream_writable_streams",children:(0,n.jsx)(r.code,{children:"Writable"})})," stream of your choice."]}),"\n",(0,n.jsx)(r.p,{children:"This service is useful for debugging any custom extensions you create for Serenity/JS, or debugging the framework itself."}),"\n",(0,n.jsx)(r.h2,{id:"installation-and-usage",children:"Installation and usage"}),"\n",(0,n.jsxs)(r.p,{children:["To learn more about the ",(0,n.jsx)(r.code,{children:"StreamReporter"}),", please consult:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["installation instructions in ",(0,n.jsxs)(r.a,{href:"/api/core",children:[(0,n.jsx)(r.code,{children:"@serenity-js/core"})," documentation"]}),","]}),"\n",(0,n.jsxs)(r.li,{children:["configuration examples in ",(0,n.jsxs)(r.a,{href:"/api/core/class/StreamReporter",children:[(0,n.jsx)(r.code,{children:"StreamReporter"})," API documentation"]}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["You might also want to explore ",(0,n.jsx)(r.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples",children:"Serenity/JS example projects on GitHub"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"integration",children:"Integration"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/core/class/StreamReporter",children:(0,n.jsx)(r.code,{children:"StreamReporter"})})," listens to all the ",(0,n.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"domain events"})," emitted by ",(0,n.jsx)(r.a,{href:"/api/core/class/Actor",children:"actors"}),"\nand ",(0,n.jsx)(r.a,{href:"/handbook/test-runners/",children:"Serenity/JS test runner adapters"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Next, it streams them to a ",(0,n.jsx)(r.a,{href:"https://nodejs.org/docs/latest-v14.x/api/stream.html#stream_writable_streams",children:(0,n.jsx)(r.code,{children:"Writable"})})," stream,\nsuch as ",(0,n.jsx)(r.a,{href:"https://nodejs.org/docs/latest-v14.x/api/process.html#process_process_stdout",children:(0,n.jsx)(r.code,{children:"process.stdout"})}),",\nor one created via ",(0,n.jsx)(r.a,{href:"https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_createwritestream_path_options",children:(0,n.jsx)(r.code,{children:"fs.createWriteStream(filename)"})}),"."]}),"\n",(0,n.jsx)(r.mermaid,{value:'graph TB\n    A(["Actors"])\n    TRA(["Serenity/JS test runner adapter"])\n    S["Serenity"]\n    SR[StreamReporter]\n    T["serialised events"]\n    Log["log.ndjson"]\n\n    TRA -- notifies --\x3e S\n    A -- notify --\x3e S\n\n    subgraph "core"\n        S -- notifies --\x3e SR\n    end\n\n    SR -- prints --\x3e T\n    SR -- writes --\x3e Log\n\n    class A socket\n    class TRA socket\n\n    click A "/api/core/class/Actor"\n    click TRA "/handbook/test-runners/"\n    click S "/api/core/class/Serenity"\n    click SR "/api/core/class/StreamReporter"'})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);
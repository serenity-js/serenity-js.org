"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[3984],{26116:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"reporting/stream-reporter","title":"Stream Reporter","description":"StreamReporter, available as part of the @serenity-js/core module,","source":"@site/src/docs/handbook/reporting/stream-reporter.mdx","sourceDirName":"reporting","slug":"/reporting/stream-reporter","permalink":"/handbook/reporting/stream-reporter","draft":false,"unlisted":false,"editUrl":"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/reporting/stream-reporter.mdx","tags":[],"version":"current","lastUpdatedAt":1733490492000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docs","previous":{"title":"Artifact Archiver","permalink":"/handbook/reporting/artifact-archiver"},"next":{"title":"Integration","permalink":"/handbook/integration/"}}');var s=t(74848),o=t(28453);const a={sidebar_position:6},i="Stream Reporter",c={},l=[{value:"Installation and usage",id:"installation-and-usage",level:2},{value:"Integration",id:"integration",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"stream-reporter",children:"Stream Reporter"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/api/core/class/StreamReporter",children:(0,s.jsx)(r.code,{children:"StreamReporter"})}),", available as part of the ",(0,s.jsx)(r.a,{href:"/api/core",children:(0,s.jsx)(r.code,{children:"@serenity-js/core"})})," module,\nserialises ",(0,s.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"domain events"})," it receives to JSON and sends them\nto a ",(0,s.jsx)(r.a,{href:"https://nodejs.org/docs/latest/api/stream.html#stream_writable_streams",children:(0,s.jsx)(r.code,{children:"Writable"})})," stream of your choice."]}),"\n",(0,s.jsx)(r.p,{children:"This service is useful for debugging any custom extensions you create for Serenity/JS, or debugging the framework itself."}),"\n",(0,s.jsx)(r.h2,{id:"installation-and-usage",children:"Installation and usage"}),"\n",(0,s.jsxs)(r.p,{children:["To learn more about the ",(0,s.jsx)(r.code,{children:"StreamReporter"}),", please consult:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["installation instructions in ",(0,s.jsxs)(r.a,{href:"/api/core",children:[(0,s.jsx)(r.code,{children:"@serenity-js/core"})," documentation"]}),","]}),"\n",(0,s.jsxs)(r.li,{children:["configuration examples in ",(0,s.jsxs)(r.a,{href:"/api/core/class/StreamReporter",children:[(0,s.jsx)(r.code,{children:"StreamReporter"})," API documentation"]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["You might also want to explore ",(0,s.jsx)(r.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples",children:"Serenity/JS example projects on GitHub"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"integration",children:"Integration"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/api/core/class/StreamReporter",children:(0,s.jsx)(r.code,{children:"StreamReporter"})})," listens to all the ",(0,s.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"domain events"})," emitted by ",(0,s.jsx)(r.a,{href:"/api/core/class/Actor",children:"actors"}),"\nand ",(0,s.jsx)(r.a,{href:"/handbook/test-runners/",children:"Serenity/JS test runner adapters"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Next, it streams them to a ",(0,s.jsx)(r.a,{href:"https://nodejs.org/docs/latest-v14.x/api/stream.html#stream_writable_streams",children:(0,s.jsx)(r.code,{children:"Writable"})})," stream,\nsuch as ",(0,s.jsx)(r.a,{href:"https://nodejs.org/docs/latest-v14.x/api/process.html#process_process_stdout",children:(0,s.jsx)(r.code,{children:"process.stdout"})}),",\nor one created via ",(0,s.jsx)(r.a,{href:"https://nodejs.org/docs/latest-v14.x/api/fs.html#fs_fs_createwritestream_path_options",children:(0,s.jsx)(r.code,{children:"fs.createWriteStream(filename)"})}),"."]}),"\n",(0,s.jsx)(r.mermaid,{value:'graph TB\n    A(["Actors"])\n    TRA(["Serenity/JS test runner adapter"])\n    S["Serenity"]\n    SR[StreamReporter]\n    T["serialised events"]\n    Log["log.ndjson"]\n\n    TRA -- notifies --\x3e S\n    A -- notify --\x3e S\n\n    subgraph "core"\n        S -- notifies --\x3e SR\n    end\n\n    SR -- prints --\x3e T\n    SR -- writes --\x3e Log\n\n    class A socket\n    class TRA socket\n\n    click A "/api/core/class/Actor"\n    click TRA "/handbook/test-runners/"\n    click S "/api/core/class/Serenity"\n    click SR "/api/core/class/StreamReporter"'})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const s={},o=n.createContext(s);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);
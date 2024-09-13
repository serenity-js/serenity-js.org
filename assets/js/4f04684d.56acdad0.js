(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[7623],{82506:(e,r,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/console-reporter.e360551.1024.png 1024w",images:[{path:n.p+"assets/ideal-img/console-reporter.e360551.1024.png",width:1024,height:772}],src:n.p+"assets/ideal-img/console-reporter.e360551.1024.png",toString:function(){return n.p+"assets/ideal-img/console-reporter.e360551.1024.png"},placeholder:void 0,width:1024,height:772},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAABYlAAAWJQFJUiTwAAABM0lEQVR4nBXM7U6CUBgA4HMZDQNMUNTM2vqTzlZIIJ8eOARImT/63dbd1Go2twp20vl1d05gb/O5gAdNk+R1tlpvZ8tNOltu6PsPpW/fKf2kKzqly/Rrsd5+JPMX1HbjxWX8DOdknLf9MTTdGKp2AKIVgGAGeQ0/gKCTFPHq8K9FHqHuRHvJCgrRIEVFJwWn4qLUt/es5gJzayaoouH5mf8EzeEoP8UjaDghSHZ4WIBTcVbWfWD7dopE3Zu3yBgaTpTXnRBE0wfR8EEwCJQHXnZi3gOr2CmSTJe2SAyS5e8E3ct4FWe8hrPDxt7hHT8gUJLtX9Qm4eIijKFmeXnVIiCYHlQMD7gBAU7z8rIVAaviFEmy1hVkbcJeKxF/I8d8T46Pe3LMdPojpqtER1fyhOkqnX8jx4e9GS0bTwAAAABJRU5ErkJggg=="}},76976:(e,r,n)=>{"use strict";n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(74848),t=n(28453);const s={sidebar_position:2},i="Console Reporter",a={id:"reporting/console-reporter",title:"Console Reporter",description:"ConsoleReporter, available as part of the @serenity-js/console-reporter module,",source:"@site/src/docs/handbook/reporting/console-reporter.mdx",sourceDirName:"reporting",slug:"/reporting/console-reporter",permalink:"/handbook/reporting/console-reporter",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/reporting/console-reporter.mdx",tags:[],version:"current",lastUpdatedAt:172621628e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Domain Events",permalink:"/handbook/reporting/domain-events"},next:{title:"Serenity BDD Reporter",permalink:"/handbook/reporting/serenity-bdd-reporter"}},l={},c=[{value:"Installation and usage",id:"installation-and-usage",level:2},{value:"Integration",id:"integration",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,t.R)(),...e.components},{Figure:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Figure",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"console-reporter",children:"Console Reporter"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/api/console-reporter/class/ConsoleReporter",children:(0,o.jsx)(r.code,{children:"ConsoleReporter"})}),", available as part of the ",(0,o.jsx)(r.a,{href:"/api/console-reporter",children:(0,o.jsx)(r.code,{children:"@serenity-js/console-reporter"})})," module,\nwrites text-based reports to your computer terminal."]}),"\n",(0,o.jsx)(r.p,{children:"The reporter supports colour schemes for both light and dark terminals, as well as a monochromatic one."}),"\n",(0,o.jsx)(s,{caption:"Example console output produced by ConsoleReporter",img:n(82506)}),"\n",(0,o.jsx)(r.h2,{id:"installation-and-usage",children:"Installation and usage"}),"\n",(0,o.jsxs)(r.p,{children:["To learn more about the ",(0,o.jsx)(r.code,{children:"ConsoleReporter"}),", please consult:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["installation instructions in ",(0,o.jsxs)(r.a,{href:"/api/console-reporter",children:[(0,o.jsx)(r.code,{children:"@serenity-js/console-reporter"})," documentation"]}),","]}),"\n",(0,o.jsxs)(r.li,{children:["configuration examples in ",(0,o.jsx)(r.a,{href:"/api/console-reporter/class/ConsoleReporter",children:(0,o.jsx)(r.code,{children:"ConsoleReporter"})}),"."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["You might also want to explore ",(0,o.jsx)(r.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples",children:"Serenity/JS example projects on GitHub"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"integration",children:"Integration"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/api/console-reporter/class/ConsoleReporter",children:(0,o.jsx)(r.code,{children:"ConsoleReporter"})})," listens to ",(0,o.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"domain events"})," emitted by ",(0,o.jsx)(r.a,{href:"/api/core/class/Actor",children:"actors"})," and ",(0,o.jsx)(r.a,{href:"/handbook/test-runners/",children:"Serenity/JS test runner adapters"}),"."]}),"\n",(0,o.jsx)(r.mermaid,{value:'graph TB\n    A(["Actors"])\n    TRA(["Serenity/JS test runner adapter"])\n    S["Serenity"]\n    CR["ConsoleReporter"]\n    T["text report"]\n\n    TRA -- notifies --\x3e S\n    A -- notify --\x3e S\n    S -- notifies --\x3e CR\n    CR -- prints --\x3e T\n\n    subgraph "core"\n        S\n    end\n    subgraph "console-reporter"\n        CR\n    end\n\n    class A socket\n    class TRA socket\n\n    click A "/api/core/class/Actor"\n    click TRA "/handbook/test-runners/"\n    click S "/api/core/class/Serenity"\n    click CR "/api/console-reporter"'})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,r,n)=>{"use strict";n.d(r,{R:()=>i,x:()=>a});var o=n(96540);const t={},s=o.createContext(t);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);
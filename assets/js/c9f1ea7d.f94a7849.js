"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[7879],{39374:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var t=n(74848),i=n(28453);const s={sidebar_position:4},a="Photographer",o={id:"reporting/photographer",title:"Photographer",description:"Photographer, available as part of the @serenity-js/web module,",source:"@site/src/docs/handbook/reporting/photographer.mdx",sourceDirName:"reporting",slug:"/reporting/photographer",permalink:"/handbook/reporting/photographer",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/reporting/photographer.mdx",tags:[],version:"current",lastUpdatedAt:172621628e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Serenity BDD Reporter",permalink:"/handbook/reporting/serenity-bdd-reporter"},next:{title:"Artifact Archiver",permalink:"/handbook/reporting/artifact-archiver"}},c={},h=[{value:"Installation and usage",id:"installation-and-usage",level:2},{value:"Integration",id:"integration",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"photographer",children:"Photographer"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/web/class/Photographer",children:(0,t.jsx)(r.code,{children:"Photographer"})}),", available as part of the ",(0,t.jsx)(r.a,{href:"/api/web",children:(0,t.jsx)(r.code,{children:"@serenity-js/web"})})," module,\nwatches as ",(0,t.jsx)(r.a,{href:"/api/core/class/Actor",children:"actors"})," perform their ",(0,t.jsx)(r.a,{href:"/api/core/class/Interaction",children:"interactions"})," and automatically takes screenshots\nwhen the desired conditions are met."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Photographer"})," can be configured to take screenshots when:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["an interaction ",(0,t.jsx)(r.a,{href:"/api/web/class/TakePhotosOfFailures",children:"results in a failure"}),","]}),"\n",(0,t.jsxs)(r.li,{children:["after ",(0,t.jsx)(r.a,{href:"/api/web/class/TakePhotosOfInteractions",children:"any interaction takes place"}),","]}),"\n",(0,t.jsxs)(r.li,{children:["or ",(0,t.jsx)(r.a,{href:"/api/web/class/TakePhotosBeforeAndAfterInteractions",children:"before and after any interaction"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"installation-and-usage",children:"Installation and usage"}),"\n",(0,t.jsxs)(r.p,{children:["To learn more about the ",(0,t.jsx)(r.code,{children:"Photographer"}),", please consult:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["installation instructions in ",(0,t.jsxs)(r.a,{href:"/api/web",children:[(0,t.jsx)(r.code,{children:"@serenity-js/web"})," documentation"]}),","]}),"\n",(0,t.jsxs)(r.li,{children:["configuration examples in ",(0,t.jsxs)(r.a,{href:"/api/web/class/Photographer",children:[(0,t.jsx)(r.code,{children:"Photographer"})," API docs"]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["You might also want to explore ",(0,t.jsx)(r.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples",children:"Serenity/JS example projects on GitHub"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"integration",children:"Integration"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/web/class/Photographer",children:(0,t.jsx)(r.code,{children:"Photographer"})})," listens to\n",(0,t.jsx)(r.a,{href:"/api/core-events/class/InteractionStarts",children:(0,t.jsx)(r.code,{children:"InteractionStarts"})})," and ",(0,t.jsx)(r.a,{href:"/api/core-events/class/InteractionFinished",children:(0,t.jsx)(r.code,{children:"InteractionFinished"})})," ",(0,t.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"domain events"}),"\nand reacts to them based on the configured ",(0,t.jsx)(r.a,{href:"/api/web/class/PhotoTakingStrategy",children:(0,t.jsx)(r.code,{children:"PhototakingStrategy"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Photographer"})," takes a screenshot of the browser window used by the ",(0,t.jsx)(r.a,{href:"/api/core/function/actorInTheSpotlight",children:"actor in the spotlight"})," and emits ",(0,t.jsx)(r.a,{href:"/api/core-events/class/ArtifactGenerated",children:(0,t.jsx)(r.code,{children:"ArtifactGenerated"})})," events containing the screenshot,\nwhich can be persisted to disk by ",(0,t.jsx)(r.a,{href:"/handbook/reporting/artifact-archiver",children:(0,t.jsx)(r.code,{children:"ArtifactArchiver"})})," and included in Serenity BDD reports by ",(0,t.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:(0,t.jsx)(r.code,{children:"SerenityBDDReporter"})}),"."]}),"\n",(0,t.jsx)(r.mermaid,{value:'graph TB\n    A(["Actors"])\n    S["Serenity"]\n    P["Photographer"]\n    AA["ArtifactArchiver"]\n    FS(["File system"])\n\n    A -- "notify<br>[InteractionsStarts,InteractionFinished]" --\x3e S\n\n    subgraph "core"\n        AA -- "notifies<br>[ArtifactArchived]" --\x3e S\n        S -- "notifies<br>[ArtifactGenerated]" --\x3e AA\n    end\n\n    S -- "notifies<br>[InteractionsStarts,InteractionFinished]"--\x3e P\n\n    subgraph "web"\n        P -- "notifies<br>[ArtifactGenerated]" --\x3e S\n    end\n\n    AA -- "writes<br />[files]" --\x3e FS\n\n    class SCM socket\n    click S "/api/core"\n    click AA "/api/core/class/ArtifactArchiver"'})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var t=n(96540);const i={},s=t.createContext(i);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);
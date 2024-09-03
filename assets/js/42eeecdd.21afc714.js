"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[6187],{83916:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=t(74848),n=t(28453);const a={sidebar_position:5},s="Artifact Archiver",c={id:"reporting/artifact-archiver",title:"Artifact Archiver",description:"ArtifactArchiver, available as part of the @serenity-js/core module,",source:"@site/src/docs/handbook/reporting/artifact-archiver.mdx",sourceDirName:"reporting",slug:"/reporting/artifact-archiver",permalink:"/handbook/reporting/artifact-archiver",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/reporting/artifact-archiver.mdx",tags:[],version:"current",lastUpdatedAt:1725365117e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Photographer",permalink:"/handbook/reporting/photographer"},next:{title:"Stream Reporter",permalink:"/handbook/reporting/stream-reporter"}},o={},d=[{value:"Installation and usage",id:"installation-and-usage",level:2},{value:"Integration",id:"integration",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"artifact-archiver",children:"Artifact Archiver"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/api/core/class/ArtifactArchiver",children:(0,i.jsx)(r.code,{children:"ArtifactArchiver"})}),", available as part of the ",(0,i.jsx)(r.a,{href:"/api/core",children:(0,i.jsx)(r.code,{children:"@serenity-js/core"})})," module,\nlistens to ",(0,i.jsx)(r.a,{href:"/api/core-events/class/ArtifactGenerated",children:(0,i.jsx)(r.code,{children:"ArtifactGenerated"})})," events generated by other ",(0,i.jsx)(r.a,{href:"/api/core/interface/StageCrewMember",children:(0,i.jsx)(r.code,{children:"StageCrewMembers"})}),"\nand saves the artifacts they contain to disk. For example, ",(0,i.jsx)(r.code,{children:"ArtifactArchiver"})," is responsible for persisting screenshots generated by the ",(0,i.jsx)(r.a,{href:"/api/web/class/Photographer",children:(0,i.jsx)(r.code,{children:"Photographer"})}),", as well as Serenity BDD ",(0,i.jsx)(r.code,{children:"json"})," reports\ngenerated by the ",(0,i.jsx)(r.a,{href:"/api/serenity-bdd/class/SerenityBDDReporter",children:(0,i.jsx)(r.code,{children:"SerenityBDDReporter"})}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"installation-and-usage",children:"Installation and usage"}),"\n",(0,i.jsxs)(r.p,{children:["To learn more about the ",(0,i.jsx)(r.code,{children:"ArtifactArchiver"}),", please consult:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["installation instructions in ",(0,i.jsxs)(r.a,{href:"/api/core",children:[(0,i.jsx)(r.code,{children:"@serenity-js/core"})," documentation"]}),","]}),"\n",(0,i.jsxs)(r.li,{children:["configuration examples in ",(0,i.jsx)(r.a,{href:"/api/core/class/ArtifactArchiver",children:(0,i.jsx)(r.code,{children:"ArtifactArchiver"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["You might also want to explore ",(0,i.jsx)(r.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples",children:"Serenity/JS example projects on GitHub"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"integration",children:"Integration"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/api/core/class/ArtifactArchiver",children:(0,i.jsx)(r.code,{children:"ArtifactArchiver"})})," listens to ",(0,i.jsx)(r.a,{href:"/api/core-events/class/ArtifactGenerated",children:(0,i.jsx)(r.code,{children:"ArtifactGenerated"})})," ",(0,i.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"domain events"}),"\nand emits ",(0,i.jsx)(r.a,{href:"/api/core-events/class/ArtifactArchived",children:(0,i.jsx)(r.code,{children:"ArtifactArchived"})})," events when the generated artifact is successfully saved to disk."]}),"\n",(0,i.jsx)(r.mermaid,{value:'graph TB\n    SCM["StageCrewMember"]\n    S["Serenity"]\n    AA["ArtifactArchiver"]\n    HDD(["File system"])\n    SCM -- "notifies<br>[ArtifactGenerated]" --\x3e S\n\n    subgraph "core"\n        S -- "notifies<br>[ArtifactArchived]" --\x3e SCM\n        S -- "notifies<br>[ArtifactGenerated]" --\x3e AA\n        AA -- "notifies<br>[ArtifactArchived]" --\x3e S\n    end\n    AA -- "writes<br />[files]" --\x3e HDD\n\n    class SCM socket\n    click S "/api/core"\n    click AA "/api/core/class/ArtifactArchiver"'})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var i=t(96540);const n={},a=i.createContext(n);function s(e){const r=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);
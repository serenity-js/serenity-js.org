"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[9592],{79668:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"contributing/commit-message-conventions","title":"Commit message conventions","description":"Serenity/JS Continuous Delivery Pipeline uses Conventional Commits standard and analyses the files you\'ve modified to determine if the changes you propose require version bump and a release.","source":"@site/src/docs/community/contributing/commit-message-conventions.mdx","sourceDirName":"contributing","slug":"/contributing/commit-message-conventions","permalink":"/community/contributing/commit-message-conventions","draft":false,"unlisted":false,"editUrl":"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/community/contributing/commit-message-conventions.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Commit message conventions","sidebar_position":5},"sidebar":"docs","previous":{"title":"Proposing enhancements","permalink":"/community/contributing/proposing-enhancements"}}');var i=t(74848),o=t(28453),r=t(49489),a=t(7227);const l={title:"Commit message conventions",sidebar_position:5},c="Commit message conventions",d={},u=[{value:"Handling Pull Requests that trigger a release",id:"handling-pull-requests-that-trigger-a-release",level:2},{value:"Squashing Pull Requests",id:"squashing-pull-requests",level:3},{value:"Commit message wizard",id:"commit-message-wizard",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"commit-message-conventions",children:"Commit message conventions"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js/blob/main/.github/workflows/main.yaml",children:"Serenity/JS Continuous Delivery Pipeline"})," uses ",(0,i.jsx)(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",children:"Conventional Commits"})," standard and analyses the files you've modified to determine if the changes you propose ",(0,i.jsx)(n.strong,{children:"require version bump and a release"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, changes to ",(0,i.jsx)(n.strong,{children:"any files"})," in the ",(0,i.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/packages",children:(0,i.jsx)(n.code,{children:"packages"})})," directory\nwill result in a release of the new version of Serenity/JS to ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/org/serenity-js",children:"npmjs.com"})," and the ",(0,i.jsx)(n.a,{href:"https://serenity-js.org",children:"Serenity/JS website"})," being updated,\nwhile changes to ",(0,i.jsx)(n.strong,{children:"any files"})," in the ",(0,i.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/documentation",children:(0,i.jsx)(n.code,{children:"documentation"})})," will only result in the website being updated."]}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, if your changes are marked as ",(0,i.jsx)(n.code,{children:"feat"})," or ",(0,i.jsx)(n.code,{children:"fix"}),", they will be included in the ",(0,i.jsx)(n.a,{href:"/releases/",children:"changelog and release notes"}),". For example:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"docs(website): corrected a typo in the handbook"})," will not be included in the changelog"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"feat(console-reporter): improved stats aggregation"})," will be included in the changelog"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Your commit messages matter",type:"info",children:(0,i.jsxs)(n.p,{children:["Please pay attention to what you write in your commit messages, as messages marked as ",(0,i.jsx)(n.code,{children:"feat"})," and ",(0,i.jsx)(n.code,{children:"fix"})," are included in the ",(0,i.jsx)(n.a,{href:"/releases/",children:"changelog and release notes"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"handling-pull-requests-that-trigger-a-release",children:"Handling Pull Requests that trigger a release"}),"\n",(0,i.jsx)(n.p,{children:"When you raise a Pull Request, the Serenity/JS pipeline will automatically calculate the version number based on the commit messages and the files you've modified, according to the following rules:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["if your Pull Request contains a single commit with a ",(0,i.jsx)(n.code,{children:"fix"})," message, e.g. ",(0,i.jsx)(n.code,{children:"fix(core): corrected a typo in the API docs"}),", the pipeline will bump the ",(0,i.jsx)(n.strong,{children:"patch"})," version of the affected module, e.g. ",(0,i.jsx)(n.code,{children:"@serenity-js/core"}),", and other Serenity/JS modules that rely on it and release them together to npmjs.com."]}),"\n",(0,i.jsxs)(n.li,{children:["if your Pull Request contains a commit with a ",(0,i.jsx)(n.code,{children:"feat"})," message, the pipeline will bump the ",(0,i.jsx)(n.strong,{children:"minor"})," version"]}),"\n",(0,i.jsxs)(n.li,{children:["if your Pull Request contains multiple commits, some of which are ",(0,i.jsx)(n.code,{children:"fix"}),", some ",(0,i.jsx)(n.code,{children:"feat"}),", some ",(0,i.jsx)(n.code,{children:"style"}),", ",(0,i.jsx)(n.code,{children:"refactor"})," or ",(0,i.jsx)(n.code,{children:"docs"}),", the pipeline will determine the most significant change and bump the ",(0,i.jsx)(n.strong,{children:"minor"})," version if there's at least one ",(0,i.jsx)(n.code,{children:"feat"})," commit, or the ",(0,i.jsx)(n.strong,{children:"patch"})," version if there are only ",(0,i.jsx)(n.code,{children:"fix"})," commits."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Serenity/JS Continuous Delivery Pipeline",type:"tip",children:(0,i.jsxs)(n.p,{children:["The Serenity/JS pipeline runs ",(0,i.jsx)(n.strong,{children:"thousands of package- and integration-level tests"})," across a number of supported Node.js runtimes, browsers,\nand operating systems to help make sure new changes don't introduce regressions and takes only about 15 minutes to complete \ud83d\ude80"]})}),"\n",(0,i.jsx)(n.h3,{id:"squashing-pull-requests",children:"Squashing Pull Requests"}),"\n",(0,i.jsxs)(n.p,{children:["If your Pull Requests contains ",(0,i.jsx)(n.strong,{children:"multiple commits"})," affecting the same feature, it's fine to have the various commits follow the ",(0,i.jsx)(n.code,{children:"feat(scope): description"})," and ",(0,i.jsx)(n.code,{children:"fix(scope): description"})," format, as the pipeline will still calculate the version number based on the most significant change\nwhile including all ",(0,i.jsx)(n.code,{children:"feat"})," and ",(0,i.jsx)(n.code,{children:"fix"})," commits in the changelog and release notes."]}),"\n",(0,i.jsxs)(n.p,{children:["However, if you ",(0,i.jsxs)(n.strong,{children:["don't want to have all your ",(0,i.jsx)(n.code,{children:"feat"})," and ",(0,i.jsx)(n.code,{children:"fix"})," commits to be added to the changelog and release notes"]}),", please\nlet us know in the description of your Pull Request and make sure that the ",(0,i.jsx)(n.strong,{children:"title of your Pull Request follows the commit message standard instead"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"commit-message-wizard",children:"Commit message wizard"}),"\n",(0,i.jsxs)(n.p,{children:["To make getting the commit message format easy for you, we've added a little ",(0,i.jsx)(n.strong,{children:"commit message wizard"})," that will help you generate a commit message compliant with the standard.\nWe've also configured a pre-commit git hooks and a CI/CD pipeline-level check to ensure everything's correct."]}),"\n",(0,i.jsxs)(n.p,{children:["If you get stuck at any point, please feel free to reach out on the ",(0,i.jsx)(n.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community Chat"})," and we'll help you out."]}),"\n",(0,i.jsxs)(n.p,{children:["To use the commit message wizard, add the files you changed to ",(0,i.jsx)(n.a,{href:"https://git-scm.com/docs/git-add",children:"git index"})," using ",(0,i.jsx)(n.code,{children:"git add <filename>"}),", or your favourite IDE like ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/versioncontrol",children:"VSCode"})," or ",(0,i.jsx)(n.a,{href:"https://www.jetbrains.com/help/idea/commit-and-push-changes.html#set-passwords-for-git-remotes",children:"JetBrains"})]}),"\n",(0,i.jsx)(n.p,{children:"Next, invoke the following command in the root directory of your cloned Serenity/JS project:"}),"\n",(0,i.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,i.jsx)(a.A,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm run commit\n"})})}),(0,i.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"yarn commit\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"Which should yield output similar to the below:"}),"\n",(0,i.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,i.jsx)(a.A,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm run commit\n\n> serenity-js-monorepo@3.0.0-monorepo commit\n> bin/commit.ts\n\ncz-customizable standalone version\nAll lines except first will be wrapped after 100 characters.\n? Select the TYPE of change you're proposing:\n  feat:     A new feature that will be available to the developers using Serenity/JS, e.g. a new public API\n\u276f fix:      A bug fix, prepared typically to address a specific GitHub ticket\n  docs:     Documentation only changes affecting the website, examples, or the API docs\n  style:    Changes that do not affect the meaning of the code, e.g. formatting, fixing missing semicolons, etc.\n  refactor: Improvements to code that do not affect the observable behaviour of Serenity/JS\n  perf:     A code change aimed at improving performance\n  test:     Improvements to existing internal tests, or adding missing tests\n(Move up and down to reveal more choices)\n"})})}),(0,i.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"yarn commit\n\n> serenity-js-monorepo@3.0.0-monorepo commit\n> bin/commit.ts\n\ncz-customizable standalone version\nAll lines except first will be wrapped after 100 characters.\n? Select the TYPE of change you're proposing:\n  feat:     A new feature that will be available to the developers using Serenity/JS, e.g. a new public API\n\u276f fix:      A bug fix, prepared typically to address a specific GitHub ticket\n  docs:     Documentation only changes affecting the website, examples, or the API docs\n  style:    Changes that do not affect the meaning of the code, e.g. formatting, fixing missing semicolons, etc.\n  refactor: Improvements to code that do not affect the observable behaviour of Serenity/JS\n  perf:     A code change aimed at improving performance\n  test:     Improvements to existing internal tests, or adding missing tests\n(Move up and down to reveal more choices)\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you wanted to make a documentation change to the Serenity/JS website to explain the importance of commit messages, you'd select:\n",(0,i.jsx)(n.code,{children:"docs"})," as the type of change, and ",(0,i.jsx)(n.code,{children:"website"})," as the scope of the change:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'All lines except first will be wrapped after 100 characters.\n? Select the TYPE of change you\'re proposing: docs\n? Denote the SCOPE of this change: website\n\n? WHAT did you change? Please write a SHORT, IMPERATIVE tense description of the change:\n\n explained the importance of commit messages\n\n? WHY did you change it? Provide a LONGER description of the motivation behind the change (optional).\n  Use "|" to break new line\n\n This should help developers follow the commit message format conventions |\n and make contributing to Serenity/JS easier\n\n? List any GitHub TICKETS affected by this change (optional). E.g.: #31, #34:\n closes #2263\n\n###--------------------------------------------------------###\ndocs(website): explained the importance of commit messages\n\nThis should help developers follow the commit message format conventions\nand make contributing to Serenity/JS easier\n\nRelated tickets: closes #2263\n###--------------------------------------------------------###\n\n? Are you sure you want to proceed with the commit above? (Yneh)\n\n'})}),"\n",(0,i.jsxs)(n.admonition,{title:"Referencing and closing GitHub tickets",type:"tip",children:[(0,i.jsxs)(n.p,{children:["If your change is related to a specific GitHub ticket, please mention it in your commit message when the wizard asks about it, e.g. ",(0,i.jsx)(n.code,{children:"#2263"}),"."]}),(0,i.jsxs)(n.p,{children:["If your change should ",(0,i.jsx)(n.em,{children:"close"})," the related ticket altogether,\nplease use the ",(0,i.jsxs)(n.a,{href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword",children:[(0,i.jsx)(n.code,{children:"closes #<ticket number>"})," syntax"]}),", e.g. ",(0,i.jsx)(n.code,{children:"closes #2263"}),"."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Once you're happy with the commit message, push your commit to your forked repository, and ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request",children:"raise a pull request"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7227:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(34164);const i={tabItem:"tabItem_Ymn6"};var o=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,r),hidden:t,children:n})}},49489:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(96540),i=t(34164),o=t(24245),r=t(56347),a=t(36494),l=t(62814),c=t(45167),d=t(69900);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=h(e),[r,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,u]=p({queryString:t,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,d.Dv)(t);return[i,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),x=(()=>{const e=c??g;return m({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=t(11062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=a[t].value;i!==s&&(c(n),r(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,i.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function v(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,y.jsx)(b,{...n,...e}),(0,y.jsx)(j,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[4072],{53671:(e,t,s)=>{s.r(t),s.d(t,{contentTitle:()=>o,default:()=>h,frontMatter:()=>r,toc:()=>a});var n=s(74848),i=s(28453);const r={},o=void 0,a=[{value:"Serenity/JS REST",id:"serenityjs-rest",level:2},{value:"Installation",id:"installation",level:3},{value:"Example test",id:"example-test",level:3},{value:"\ud83d\udce3 Stay up to date",id:"-stay-up-to-date",level:2},{value:"\ud83d\udc9b Support Serenity/JS",id:"-support-serenityjs",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})}),"\n",(0,n.jsx)(t.a,{href:"https://www.youtube.com/@serenity-js",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})}),"\n",(0,n.jsx)(t.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})}),"\n",(0,n.jsx)(t.a,{href:"https://github.com/sponsors/serenity-js",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github",alt:"Support Serenity/JS on GitHub"})})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://serenity-js.org",children:"Serenity/JS"})," is an innovative open-source framework designed to make acceptance and regression testing\nof complex software systems faster, more collaborative and easier to scale."]}),"\n",(0,n.jsx)(t.p,{children:"\u2b50\ufe0f Get started with Serenity/JS!"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://serenity-js.org/handbook/web-testing/your-first-web-scenario",children:"Serenity/JS web testing tutorial"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://serenity-js.org/handbook",children:"Serenity/JS Handbook"})," and ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/handbook/getting-started/",children:"Getting Started guides"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://serenity-js.org/api/",children:"API documentation"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://serenity-js.org/handbook/getting-started/project-templates/",children:"Serenity/JS Project Templates on GitHub"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\ud83d\udc4b Join the Serenity/JS Community!"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Meet other Serenity/JS developers and maintainers on the ",(0,n.jsx)(t.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community chat channel"}),","]}),"\n",(0,n.jsxs)(t.li,{children:["Find answers to your Serenity/JS questions on the ",(0,n.jsx)(t.a,{href:"https://github.com/orgs/serenity-js/discussions/categories/how-do-i",children:"Serenity/JS Forum"}),","]}),"\n",(0,n.jsxs)(t.li,{children:["Learn how to ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/community/contributing/",children:"contribute to Serenity/JS"}),","]}),"\n",(0,n.jsxs)(t.li,{children:["Support the project and gain access to ",(0,n.jsx)(t.a,{href:"https://github.com/serenity-js/playbooks",children:"Serenity/JS Playbooks"})," by becoming a ",(0,n.jsx)(t.a,{href:"https://github.com/sponsors/serenity-js",children:"Serenity/JS GitHub Sponsor"}),"!"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"serenityjs-rest",children:"Serenity/JS REST"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://serenity-js.org/api/rest/",children:(0,n.jsx)(t.code,{children:"@serenity-js/rest"})})," module lets your actors interact with and test HTTP REST APIs."]}),"\n",(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(t.p,{children:["To install this module, as well as ",(0,n.jsxs)(t.a,{href:"https://github.com/axios/axios",children:[(0,n.jsx)(t.code,{children:"axios"})," HTTP client"]}),",\nrun the following command in your computer terminal:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"npm install --save-dev @serenity-js/core @serenity-js/rest @serenity-js/assertions axios\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To learn more about Serenity/JS and how to use it on your project, follow the ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/handbook/getting-started/",children:"Serenity/JS Getting Started guide"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"example-test",children:"Example test"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { actorCalled } from '@serenity-js/core'\nimport { CallAnApi, DeleteRequest, GetRequest, LastResponse, PostRequest, Send } from '@serenity-js/rest'\nimport { Ensure, equals, startsWith } from '@serenity-js/assertions'\n\nconst actor = actorCalled('Apisit').whoCan(CallAnApi.at('https://myapp.com/api'))\n\nawait actor.attemptsTo(\n    // no users present in the system\n    Send.a(GetRequest.to('/users')),\n    Ensure.that(LastResponse.status(), equals(200)),\n    Ensure.that(LastResponse.body(), equals([])),\n\n    // create a new test user account\n    Send.a(PostRequest.to('/users').with({\n        login: 'tester',\n        password: 'P@ssword1',\n    }),\n    Ensure.that(LastResponse.status(), equals(201)),\n    Ensure.that(LastResponse.header('Location'), startsWith('/users')),\n\n    // delete the test user account\n    Send.a(DeleteRequest.to(LastResponse.header('Location'))),\n    Ensure.that(LastResponse.status(), equals(200)),\n)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"-stay-up-to-date",children:"\ud83d\udce3 Stay up to date"}),"\n",(0,n.jsxs)(t.p,{children:["New features, tutorials, and demos are coming soon!\nFollow ",(0,n.jsx)(t.a,{href:"https://www.linkedin.com/company/serenity-js",children:"Serenity/JS on LinkedIn"}),",\nsubscribe to ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/@serenity-js",children:"Serenity/JS channel on YouTube"})," and join the ",(0,n.jsx)(t.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community Chat"})," to stay up to date!\nPlease also make sure to star \u2b50\ufe0f ",(0,n.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js",children:"Serenity/JS on GitHub"})," to help others discover the framework!"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})}),"\n",(0,n.jsx)(t.a,{href:"https://www.youtube.com/@serenity-js",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})}),"\n",(0,n.jsx)(t.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})}),"\n",(0,n.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge",alt:"GitHub stars"})})]}),"\n",(0,n.jsx)(t.h2,{id:"-support-serenityjs",children:"\ud83d\udc9b Support Serenity/JS"}),"\n",(0,n.jsx)(t.p,{children:"If you appreciate all the effort that goes into making sophisticated tools easy to work with, please support our work and become a Serenity/JS GitHub Sponsor today!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/sponsors/serenity-js",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub Sponsors"})})})]})}function h(e){void 0===e&&(e={});const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
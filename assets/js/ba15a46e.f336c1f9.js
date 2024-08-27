"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[1114],{98489:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>l,frontMatter:()=>i,toc:()=>c});var r=t(74848),s=t(28453);const i={},o=void 0,c=[{value:"Serenity/JS Cucumber",id:"serenityjs-cucumber",level:2},{value:"Installation",id:"installation",level:3},{value:"Command line usage",id:"command-line-usage",level:3},{value:"Cucumber 7.x and newer",id:"cucumber-7x-and-newer",level:4},{value:"Cucumber 3.x to 6.x",id:"cucumber-3x-to-6x",level:4},{value:"Cucumber 0.x to 2.x",id:"cucumber-0x-to-2x",level:4},{value:"Configuration",id:"configuration",level:3},{value:"Integration",id:"integration",level:3},{value:"\ud83d\udce3 Stay up to date",id:"-stay-up-to-date",level:2},{value:"\ud83d\udc9b Support Serenity/JS",id:"-support-serenityjs",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})}),"\n",(0,r.jsx)(n.a,{href:"https://www.youtube.com/@serenity-js",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})}),"\n",(0,r.jsx)(n.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/sponsors/serenity-js",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github",alt:"Support Serenity/JS on GitHub"})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://serenity-js.org",children:"Serenity/JS"})," is an innovative open-source framework designed to make acceptance and regression testing\nof complex software systems faster, more collaborative and easier to scale."]}),"\n",(0,r.jsx)(n.p,{children:"\u2b50\ufe0f Get started with Serenity/JS!"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://serenity-js.org/handbook/web-testing/your-first-web-scenario",children:"Serenity/JS web testing tutorial"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://serenity-js.org/handbook",children:"Serenity/JS Handbook"})," and ",(0,r.jsx)(n.a,{href:"https://serenity-js.org/handbook/getting-started/",children:"Getting Started guides"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://serenity-js.org/api/core",children:"API documentation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://serenity-js.org/handbook/getting-started/project-templates/",children:"Serenity/JS Project Templates on GitHub"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\ud83d\udc4b Join the Serenity/JS Community!"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Meet other Serenity/JS developers and maintainers on the ",(0,r.jsx)(n.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community chat channel"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["Find answers to your Serenity/JS questions on the ",(0,r.jsx)(n.a,{href:"https://github.com/orgs/serenity-js/discussions/categories/how-do-i",children:"Serenity/JS Forum"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["Learn how to ",(0,r.jsx)(n.a,{href:"https://serenity-js.org/community/contributing/",children:"contribute to Serenity/JS"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["Support the project and gain access to ",(0,r.jsx)(n.a,{href:"https://github.com/serenity-js/playbooks",children:"Serenity/JS Playbooks"})," by becoming a ",(0,r.jsx)(n.a,{href:"https://github.com/sponsors/serenity-js",children:"Serenity/JS GitHub Sponsor"}),"!"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"serenityjs-cucumber",children:"Serenity/JS Cucumber"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://serenity-js.org/api/cucumber/",children:(0,r.jsx)(n.code,{children:"@serenity-js/cucumber"})})," contains a set of adapters you register with ",(0,r.jsx)(n.a,{href:"https://github.com/cucumber/cucumber-js/",children:"Cucumber CLI runners"})," to enable integration and reporting between Cucumber.js and Serenity/JS."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Please note:"})," To use Cucumber and Serenity/JS to execute web-based acceptance tests, you should register Serenity/JS Cucumber adapter using Protractor configuration file."]}),"\n",(0,r.jsx)(n.p,{children:"Learn more about integrating Serenity/JS Cucumber:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["with ",(0,r.jsx)(n.a,{href:"https://serenity-js.org/handbook/test-runners/protractor/",children:"Protractor and Cucumber.js"}),","]}),"\n",(0,r.jsxs)(n.li,{children:["with ",(0,r.jsx)(n.a,{href:"https://serenity-js.org/handbook/test-runners/cucumber/",children:"Cucumber.js"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"To install this module, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm install --save-dev @serenity-js/cucumber @serenity-js/core\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This module reports test scenarios executed by ",(0,r.jsx)(n.strong,{children:"any version of Cucumber.js"}),", from 0.x to 9.x, which you need to install\nseparately."]}),"\n",(0,r.jsxs)(n.p,{children:["To install ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/@cucumber/cucumber",children:"Cucumber 9.x"}),", run:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm install --save-dev @cucumber/cucumber \n"})}),"\n",(0,r.jsxs)(n.p,{children:["To install ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/cucumber",children:"Cucumber 6.x"})," or earlier, run:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm install --save-dev cucumber \n"})}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about Serenity/JS and how to use it on your project, follow the ",(0,r.jsx)(n.a,{href:"https://serenity-js.org/handbook/getting-started/",children:"Serenity/JS Getting Started guide"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"command-line-usage",children:"Command line usage"}),"\n",(0,r.jsx)(n.h4,{id:"cucumber-7x-and-newer",children:"Cucumber 7.x and newer"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cucumber-js --format @serenity-js/cucumber \\\n    --require ./features/support/setup.js \\\n    --require ./features/step_definitions/sample.steps.js \n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"'--format-options', `{ \"specDirectory\": \"${ path.resolve(__dirname, '../../cucumber-specs/features') }\" }`,\n"})}),"\n",(0,r.jsx)(n.h4,{id:"cucumber-3x-to-6x",children:"Cucumber 3.x to 6.x"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cucumber-js --format node_modules/@serenity-js/cucumber \\\n    --require ./features/support/setup.js \\\n    --require ./features/step_definitions/sample.steps.js \n"})}),"\n",(0,r.jsx)(n.h4,{id:"cucumber-0x-to-2x",children:"Cucumber 0.x to 2.x"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cucumber-js --require=node_modules/@serenity-js/cucumber/lib/index.js \\\n    --require ./features/support/setup.js \\\n    --require ./features/step_definitions/sample.steps.js \n"})}),"\n",(0,r.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"When used with a configuration file written in JavaScript:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// features/support/setup.js\n\nconst { configure } = require('@serenity-js/core')\n\nconfigure({\n    // ... configure Serenity/JS \n})\n"})}),"\n",(0,r.jsx)(n.p,{children:"When used with a configuration file written in TypeScript:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// features/support/setup.ts\n\nimport { configure } from '@serenity-js/core'\n\nconfigure({\n    // ... configure Serenity/JS \n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"integration",children:"Integration"}),"\n",(0,r.jsx)(n.p,{children:"This module can be integrated with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://serenity-js.org/api/serenity-bdd",children:(0,r.jsx)(n.code,{children:"@serenity-js/serenity-bdd"})})," to produce HTML reports and living documentation,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://serenity-js.org/api/console-reporter",children:(0,r.jsx)(n.code,{children:"@serenity-js/console-reporter"})})," to print test execution reports to your computer terminal,"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://serenity-js.org/api/protractor",children:(0,r.jsx)(n.code,{children:"@serenity-js/protractor"})})," to implement Cucumber scenarios interacting with Web applications."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Learn more about ",(0,r.jsx)(n.a,{href:"https://serenity-js.org/handbook/about/architecture",children:"Serenity/JS modular architecture"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"-stay-up-to-date",children:"\ud83d\udce3 Stay up to date"}),"\n",(0,r.jsxs)(n.p,{children:["New features, tutorials, and demos are coming soon!\nFollow ",(0,r.jsx)(n.a,{href:"https://www.linkedin.com/company/serenity-js",children:"Serenity/JS on LinkedIn"}),",\nsubscribe to ",(0,r.jsx)(n.a,{href:"https://www.youtube.com/@serenity-js",children:"Serenity/JS channel on YouTube"})," and join the ",(0,r.jsx)(n.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community Chat"})," to stay up to date!\nPlease also make sure to star \u2b50\ufe0f ",(0,r.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js",children:"Serenity/JS on GitHub"})," to help others discover the framework!"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})}),"\n",(0,r.jsx)(n.a,{href:"https://www.youtube.com/@serenity-js",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})}),"\n",(0,r.jsx)(n.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge",alt:"GitHub stars"})})]}),"\n",(0,r.jsx)(n.h2,{id:"-support-serenityjs",children:"\ud83d\udc9b Support Serenity/JS"}),"\n",(0,r.jsx)(n.p,{children:"If you appreciate all the effort that goes into making sophisticated tools easy to work with, please support our work and become a Serenity/JS GitHub Sponsor today!"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sponsors/serenity-js",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub Sponsors"})})})]})}function l(e){void 0===e&&(e={});const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
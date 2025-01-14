"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[8984],{88310:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>l,frontMatter:()=>i,toc:()=>a});var n=r(74848),s=r(28453);const i={},o=void 0,a=[{value:"Serenity/JS Console Reporter",id:"serenityjs-console-reporter",level:2},{value:"Installation",id:"installation",level:3},{value:"Windows",id:"windows",level:4},{value:"Usage",id:"usage",level:3},{value:"Usage with Playwright Test",id:"usage-with-playwright-test",level:4},{value:"Usage with WebdriverIO",id:"usage-with-webdriverio",level:4},{value:"Usage with Protractor",id:"usage-with-protractor",level:4},{value:"Programmatic configuration",id:"programmatic-configuration",level:4},{value:"Colour Themes",id:"colour-themes",level:4},{value:"\ud83d\udce3 Stay up to date",id:"-stay-up-to-date",level:2},{value:"\ud83d\udc9b Support Serenity/JS",id:"-support-serenityjs",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})}),"\n",(0,n.jsx)(t.a,{href:"https://www.youtube.com/@serenity-js",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})}),"\n",(0,n.jsx)(t.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})}),"\n",(0,n.jsx)(t.a,{href:"https://github.com/sponsors/serenity-js",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github",alt:"Support Serenity/JS on GitHub"})})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://serenity-js.org",children:"Serenity/JS"})," is an innovative open-source framework designed to make acceptance and regression testing\nof complex software systems faster, more collaborative and easier to scale."]}),"\n",(0,n.jsx)(t.p,{children:"\u2b50\ufe0f Get started with Serenity/JS!"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://serenity-js.org/handbook/web-testing/your-first-web-scenario",children:"Serenity/JS web testing tutorial"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://serenity-js.org/handbook",children:"Serenity/JS Handbook"})," and ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/handbook/getting-started/",children:"Getting Started guides"})]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://serenity-js.org/api/",children:"API documentation"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://serenity-js.org/handbook/getting-started/project-templates/",children:"Serenity/JS Project Templates"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\ud83d\udc4b Join the Serenity/JS Community!"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Meet other Serenity/JS developers and maintainers on the ",(0,n.jsx)(t.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community chat channel"}),","]}),"\n",(0,n.jsxs)(t.li,{children:["Find answers to your Serenity/JS questions on the ",(0,n.jsx)(t.a,{href:"https://github.com/orgs/serenity-js/discussions/categories/how-do-i",children:"Serenity/JS Forum"}),","]}),"\n",(0,n.jsxs)(t.li,{children:["Learn how to ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/community/contributing/",children:"contribute to Serenity/JS"}),","]}),"\n",(0,n.jsxs)(t.li,{children:["Support the project and gain access to ",(0,n.jsx)(t.a,{href:"https://github.com/serenity-js/playbooks",children:"Serenity/JS Playbooks"})," by becoming a ",(0,n.jsx)(t.a,{href:"https://github.com/sponsors/serenity-js",children:"Serenity/JS GitHub Sponsor"}),"!"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"serenityjs-console-reporter",children:"Serenity/JS Console Reporter"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://serenity-js.org/api/console-reporter/",children:(0,n.jsx)(t.code,{children:"@serenity-js/console-reporter"})})," writes ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/handbook/reporting/console-reporter",children:"text-based reports"}),"\nto your computer terminal."]}),"\n",(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"npm install --save-dev @serenity-js/core @serenity-js/console-reporter\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To learn more about Serenity/JS and how to use it on your project, follow the ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/handbook/getting-started/",children:"Serenity/JS Getting Started guide"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"windows",children:"Windows"}),"\n",(0,n.jsxs)(t.p,{children:["If you're on Windows, consider using ",(0,n.jsx)(t.a,{href:"https://github.com/microsoft/terminal",children:"Windows Terminal"}),"\ninstead of ",(0,n.jsx)(t.code,{children:"cmd.exe"})," to benefit from the colour output."]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["To allow Serenity/JS to print the progress report to standard output, assign the ",(0,n.jsx)(t.code,{children:"ConsoleReporter"})," to the ",(0,n.jsx)(t.code,{children:"Stage"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"This can be done:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["via ",(0,n.jsx)(t.code,{children:"playwright.config.ts"}),", if you're using Serenity/JS with ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/api/playwright-test",children:"Playwright Test"})]}),"\n",(0,n.jsxs)(t.li,{children:["via ",(0,n.jsx)(t.code,{children:"wdio.conf.ts"}),", if you're using Serenity/JS with ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/api/playwright-test",children:"WebdriverIO"})]}),"\n",(0,n.jsxs)(t.li,{children:["via ",(0,n.jsx)(t.code,{children:"protractor.conf.js"}),", if you're using Serenity/JS with ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/api/protractor",children:"Protractor"})]}),"\n",(0,n.jsx)(t.li,{children:"or programmatically."}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"usage-with-playwright-test",children:"Usage with Playwright Test"}),"\n",(0,n.jsxs)(t.p,{children:["Learn more about using ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/api/playwright-test",children:"Serenity/JS with Playwright Test"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@serenity-js/playwright-test'\n\nconst config: PlaywrightTestConfig = {\n    reporter: [\n        [ '@serenity-js/playwright-test', {\n            crew: [\n                // console reporter with default settings\n                '@serenity-js/console-reporter',\n                \n                // console reporter with a theme for 'dark', 'light' or 'mono' terminals\n                // [ '@serenity-js/console-reporter', { theme: 'auto' } ]                \n            ]\n        }]\n    ],\n\n    // Other configuration omitted for brevity\n    // For details, see https://playwright.dev/docs/test-configuration    \n}\n\nexport default config\n"})}),"\n",(0,n.jsx)(t.h4,{id:"usage-with-webdriverio",children:"Usage with WebdriverIO"}),"\n",(0,n.jsxs)(t.p,{children:["Learn more about using ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/api/webdriverio",children:"Serenity/JS with WebdriverIO"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"// wdio.conf.ts\n\nimport { WebdriverIOConfig } from '@serenity-js/webdriverio'\n\nexport const config: WebdriverIOConfig = {\n\n    framework: '@serenity-js/webdriverio',\n\n    serenity: {\n        crew: [\n            // console reporter with default settings\n            '@serenity-js/console-reporter',\n\n            // console reporter with a theme for 'dark', 'light' or 'mono' terminals\n            // [ '@serenity-js/console-reporter', { theme: 'auto' } ]  \n        ]\n    },\n\n    // Other configuration omitted for brevity\n    // For details, see https://webdriver.io/docs/options\n}\n"})}),"\n",(0,n.jsx)(t.h4,{id:"usage-with-protractor",children:"Usage with Protractor"}),"\n",(0,n.jsxs)(t.p,{children:["Learn more about using ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/api/protractor",children:"Serenity/JS with Protractor"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// protractor.conf.js\n\nexports.config = {\n\n    framework:      'custom',\n    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),\n\n    serenity: {\n        crew: [\n            // console reporter with default settings\n            '@serenity-js/console-reporter',\n\n            // console reporter with a theme for 'dark', 'light' or 'mono' terminals\n            // [ '@serenity-js/console-reporter', { theme: 'auto' } ]  \n        ]\n    },\n\n    // ...\n}\n"})}),"\n",(0,n.jsx)(t.h4,{id:"programmatic-configuration",children:"Programmatic configuration"}),"\n",(0,n.jsxs)(t.p,{children:["Learn more about ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/api/core/class/SerenityConfig",children:"configuring Serenity/JS programmatically"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { configure } from '@serenity-js/core'\nimport { ConsoleReporter } from '@serenity-js/console-reporter'\n\nconfigure({\n    crew: [\n        ConsoleReporter.withDefaultColourSupport(),\n    ],\n})\n"})}),"\n",(0,n.jsx)(t.h4,{id:"colour-themes",children:"Colour Themes"}),"\n",(0,n.jsxs)(t.p,{children:["Consult the API docs of the ",(0,n.jsx)(t.a,{href:"https://serenity-js.org/api/console-reporter/class/ConsoleReporter",children:(0,n.jsx)(t.code,{children:"ConsoleReporter"})})," class\nto learn more about the supported colour themes."]}),"\n",(0,n.jsx)(t.h2,{id:"-stay-up-to-date",children:"\ud83d\udce3 Stay up to date"}),"\n",(0,n.jsxs)(t.p,{children:["New features, tutorials, and demos are coming soon!\nFollow ",(0,n.jsx)(t.a,{href:"https://www.linkedin.com/company/serenity-js",children:"Serenity/JS on LinkedIn"}),",\nsubscribe to ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/@serenity-js",children:"Serenity/JS channel on YouTube"})," and join the ",(0,n.jsx)(t.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community Chat"})," to stay up to date!\nPlease also make sure to star \u2b50\ufe0f ",(0,n.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js",children:"Serenity/JS on GitHub"})," to help others discover the framework!"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})}),"\n",(0,n.jsx)(t.a,{href:"https://www.youtube.com/@serenity-js",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})}),"\n",(0,n.jsx)(t.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})}),"\n",(0,n.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge",alt:"GitHub stars"})})]}),"\n",(0,n.jsx)(t.h2,{id:"-support-serenityjs",children:"\ud83d\udc9b Support Serenity/JS"}),"\n",(0,n.jsx)(t.p,{children:"If you appreciate all the effort that goes into making sophisticated tools easy to work with, please support our work and become a Serenity/JS GitHub Sponsor today!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/sponsors/serenity-js",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub Sponsors"})})})]})}function l(e){void 0===e&&(e={});const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
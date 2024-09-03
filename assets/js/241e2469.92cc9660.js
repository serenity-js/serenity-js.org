"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[6994],{81669:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>o,default:()=>h,frontMatter:()=>i,toc:()=>a});var t=r(74848),s=r(28453);const i={},o=void 0,a=[{value:"Serenity/JS Mocha",id:"serenityjs-mocha",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage with standalone Mocha",id:"usage-with-standalone-mocha",level:3},{value:"JavaScript",id:"javascript",level:4},{value:"TypeScript",id:"typescript",level:4},{value:"Using Mocha configuration file",id:"using-mocha-configuration-file",level:4},{value:"Configuring a custom requirements hierarchy root",id:"configuring-a-custom-requirements-hierarchy-root",level:4},{value:"Using Serenity/JS Mocha with Protractor",id:"using-serenityjs-mocha-with-protractor",level:3},{value:"Using Serenity/JS Mocha with WebdriverIO",id:"using-serenityjs-mocha-with-webdriverio",level:3},{value:"Example projects",id:"example-projects",level:3},{value:"\ud83d\udce3 Stay up to date",id:"-stay-up-to-date",level:2},{value:"\ud83d\udc9b Support Serenity/JS",id:"-support-serenityjs",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})}),"\n",(0,t.jsx)(n.a,{href:"https://www.youtube.com/@serenity-js",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})}),"\n",(0,t.jsx)(n.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/sponsors/serenity-js",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github",alt:"Support Serenity/JS on GitHub"})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://serenity-js.org",children:"Serenity/JS"})," is an innovative open-source framework designed to make acceptance and regression testing\nof complex software systems faster, more collaborative and easier to scale."]}),"\n",(0,t.jsx)(n.p,{children:"\u2b50\ufe0f Get started with Serenity/JS!"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://serenity-js.org/handbook/web-testing/your-first-web-scenario",children:"Serenity/JS web testing tutorial"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://serenity-js.org/handbook",children:"Serenity/JS Handbook"})," and ",(0,t.jsx)(n.a,{href:"https://serenity-js.org/handbook/getting-started/",children:"Getting Started guides"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://serenity-js.org/api/core",children:"API documentation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://serenity-js.org/handbook/getting-started/project-templates/",children:"Serenity/JS Project Templates on GitHub"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\ud83d\udc4b Join the Serenity/JS Community!"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Meet other Serenity/JS developers and maintainers on the ",(0,t.jsx)(n.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community chat channel"}),","]}),"\n",(0,t.jsxs)(n.li,{children:["Find answers to your Serenity/JS questions on the ",(0,t.jsx)(n.a,{href:"https://github.com/orgs/serenity-js/discussions/categories/how-do-i",children:"Serenity/JS Forum"}),","]}),"\n",(0,t.jsxs)(n.li,{children:["Learn how to ",(0,t.jsx)(n.a,{href:"https://serenity-js.org/community/contributing/",children:"contribute to Serenity/JS"}),","]}),"\n",(0,t.jsxs)(n.li,{children:["Support the project and gain access to ",(0,t.jsx)(n.a,{href:"https://github.com/serenity-js/playbooks",children:"Serenity/JS Playbooks"})," by becoming a ",(0,t.jsx)(n.a,{href:"https://github.com/sponsors/serenity-js",children:"Serenity/JS GitHub Sponsor"}),"!"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"serenityjs-mocha",children:"Serenity/JS Mocha"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://serenity-js.org/api/mocha/",children:(0,t.jsx)(n.code,{children:"@serenity-js/mocha"})})," contains an adapter you register with ",(0,t.jsx)(n.a,{href:"https://mochajs.org/",children:"Mocha test runner"})," to enable integration between Mocha and Serenity/JS."]}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.a,{href:"https://mochajs.org/",children:"Mocha"})," version 8.x or newer:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev mocha@8.x\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Install the ",(0,t.jsx)(n.code,{children:"@serenity-js/mocha"})," adapter, as well as ",(0,t.jsx)(n.code,{children:"@serenity-js/core"})," and any ",(0,t.jsx)(n.a,{href:"https://serenity-js.org/api/console-reporter/",children:"Serenity/JS reporting modules"})," you'd like to use, for example ",(0,t.jsx)(n.a,{href:"https://serenity-js.org/api/console-reporter/",children:(0,t.jsx)(n.code,{children:"@serenity-js/console-reporter"})}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev @serenity-js/core @serenity-js/console-reporter @serenity-js/mocha\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about Serenity/JS and how to use it on your project, follow the ",(0,t.jsx)(n.a,{href:"https://serenity-js.org/handbook/getting-started/",children:"Serenity/JS Getting Started guide"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"usage-with-standalone-mocha",children:"Usage with standalone Mocha"}),"\n",(0,t.jsxs)(n.p,{children:["To use Serenity/JS with standalone Mocha, for example to run tests of ",(0,t.jsx)(n.a,{href:"https://serenity-js/api/rest",children:"REST APIs"}),",\nyou'll need a setup file that configures Serenity/JS reporting services."]}),"\n",(0,t.jsx)(n.h4,{id:"javascript",children:"JavaScript"}),"\n",(0,t.jsxs)(n.p,{children:["If you're writing your tests in JavaScript, create a ",(0,t.jsx)(n.code,{children:"setup.js"})," file (for example under ",(0,t.jsx)(n.code,{children:"spec/support/setup.js"}),", but you can use any location you like):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// spec/support/setup.js\n\nconst \n    { ConsoleReporter } = require('@serenity-js/console-reporter'),\n    { configure } = require('@serenity-js/core');\n\nconfigure({\n    crew: [\n        ConsoleReporter.forDarkTerminals(),\n    ],\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, run Mocha as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"mocha --reporter=@serenity-js/mocha \\\n      --require=spec/support/setup.js \\\n      'spec/**/*.spec.js'\n"})}),"\n",(0,t.jsx)(n.h4,{id:"typescript",children:"TypeScript"}),"\n",(0,t.jsxs)(n.p,{children:["If you're writing your tests in TypeScript, you might want to run them via ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/ts-node",children:(0,t.jsx)(n.code,{children:"ts-node"})}),", which transpiles TypeScript in memory without you having to do it before every test run."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install --save-dev typescript ts-node\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you haven't done so already, configure your TypeScript transpiler via ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",children:(0,t.jsx)(n.code,{children:"tsconfig.json"})}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "target": "es2018",\n    "lib": ["es2018"],\n    "module": "commonjs"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"setup.ts"})," file (for example under ",(0,t.jsx)(n.code,{children:"spec/support/setup.ts"}),", but you can use any location you like):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// spec/support/setup.ts\n\nimport { ConsoleReporter } from '@serenity-js/console-reporter'\nimport { configure } from '@serenity-js/core'\n\nconfigure({\n    crew: [\n        ConsoleReporter.forDarkTerminals(),\n    ],\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, run Mocha as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mocha --reporter=@serenity-js/mocha \\\n      --require=ts-node/register \\\n      --require=spec/support/setup.ts \\\n      'spec/**/*.spec.ts'\n"})}),"\n",(0,t.jsx)(n.h4,{id:"using-mocha-configuration-file",children:"Using Mocha configuration file"}),"\n",(0,t.jsxs)(n.p,{children:["Please note that you can use ",(0,t.jsx)(n.code,{children:".mocharc.yml"})," ",(0,t.jsx)(n.a,{href:"https://mochajs.org/#configuring-mocha-nodejs",children:"configuration file"}),"\nto simplify your command line execution."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".mocharc.yml"',children:"reporter: '@serenity-js/mocha'\nrequire:\n  - ts-node/register\n  - spec/support/setup.ts\ncheck-leaks: false\ntimeout: 5000\nv8-stack-trace-limit: 100\n# ...other config\n"})}),"\n",(0,t.jsx)(n.h4,{id:"configuring-a-custom-requirements-hierarchy-root",children:"Configuring a custom requirements hierarchy root"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title=".mocharc.yml"',children:"reporter: '@serenity-js/mocha'\nreporter-options:       # Note: array, not an object\n  - 'specDirectory=e2e' # Configure custom requirements hierarchy root, such as \"e2e\"\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-serenityjs-mocha-with-protractor",children:"Using Serenity/JS Mocha with Protractor"}),"\n",(0,t.jsxs)(n.p,{children:["Configure your Protractor installation as per instructions in ",(0,t.jsx)(n.a,{href:"https://serenity-js.org/api/protractor/",children:(0,t.jsx)(n.code,{children:"@serenity-js/protractor"})})," module."]}),"\n",(0,t.jsxs)(n.p,{children:["Next, instruct Serenity/JS to run your tests using Mocha. You can also use your ",(0,t.jsx)(n.code,{children:"protractor.conf.js"})," file to ",(0,t.jsx)(n.a,{href:"https://serenity-js.org/api/mocha-adapter/interface/MochaConfig/",children:"configure Mocha"})," if needed:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="protractor.conf.js"',children:"// protractor.conf.js\n\nexports.config = {\n    // Tell Protractor to use the Serenity/JS framework adapter\n    framework:      'custom',\n    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),\n  \n    serenity: {\n        runner: 'mocha',        // Use Mocha\n        // ... other Serenity/JS-specific configuration\n    },\n\n    mochaOpts: {\n        // Custom requirements hierarchy root, optional \n        reporterOptions: [\n            'specDirectory=e2e'\n        ],\n        \n        // ... other Mocha-specific configuration\n    },\n\n    // ... other Protractor-specific configuration   \n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Learn more about supported ",(0,t.jsx)(n.a,{href:"https://serenity-js.org/api/mocha-adapter/interface/MochaConfig/",children:"Mocha configuration options"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"using-serenityjs-mocha-with-webdriverio",children:"Using Serenity/JS Mocha with WebdriverIO"}),"\n",(0,t.jsxs)(n.p,{children:["Configure your WebdriverIO installation as per instructions in ",(0,t.jsx)(n.a,{href:"https://serenity-js.org/api/webdriverio/",children:(0,t.jsx)(n.code,{children:"@serenity-js/webdriverio"})})," module."]}),"\n",(0,t.jsxs)(n.p,{children:["Next, instruct Serenity/JS to run your tests using Mocha. You can also use your ",(0,t.jsx)(n.code,{children:"wdio.conf.ts"})," file to ",(0,t.jsx)(n.a,{href:"https://serenity-js.org/api/mocha-adapter/interface/MochaConfig/",children:"configure Mocha"})," if needed:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="wdio.conf.ts"',children:"// wdio.conf.ts\n\nexport const config = {\n    // Tell WebdriverIO to use the Serenity/JS framework adapter\n    framework: '@serenity-js/webdriverio',\n\n    // Serenity/JS configuration\n    serenity: {\n        // Configure Serenity/JS to use an appropriate test runner adapter\n        runner: 'mocha',        // Use Mocha\n        // ... other Serenity/JS-specific configuration\n    },\n\n    mochaOpts: {\n        // Custom requirements hierarchy root, optional \n        reporterOptions: [\n            'specDirectory=e2e'\n        ],\n\n        // ... other Mocha-specific configuration\n    },\n\n    // ... other Protractor-specific configuration   \n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Learn more about supported ",(0,t.jsx)(n.a,{href:"https://serenity-js.org/api/mocha-adapter/interface/MochaConfig/",children:"Mocha configuration options"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"example-projects",children:"Example projects"}),"\n",(0,t.jsxs)(n.p,{children:["Study ",(0,t.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples",children:"Serenity/JS example projects"})," to learn more."]}),"\n",(0,t.jsx)(n.h2,{id:"-stay-up-to-date",children:"\ud83d\udce3 Stay up to date"}),"\n",(0,t.jsxs)(n.p,{children:["New features, tutorials, and demos are coming soon!\nFollow ",(0,t.jsx)(n.a,{href:"https://www.linkedin.com/company/serenity-js",children:"Serenity/JS on LinkedIn"}),",\nsubscribe to ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/@serenity-js",children:"Serenity/JS channel on YouTube"})," and join the ",(0,t.jsx)(n.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community Chat"})," to stay up to date!\nPlease also make sure to star \u2b50\ufe0f ",(0,t.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js",children:"Serenity/JS on GitHub"})," to help others discover the framework!"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})}),"\n",(0,t.jsx)(n.a,{href:"https://www.youtube.com/@serenity-js",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})}),"\n",(0,t.jsx)(n.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge",alt:"GitHub stars"})})]}),"\n",(0,t.jsx)(n.h2,{id:"-support-serenityjs",children:"\ud83d\udc9b Support Serenity/JS"}),"\n",(0,t.jsx)(n.p,{children:"If you appreciate all the effort that goes into making sophisticated tools easy to work with, please support our work and become a Serenity/JS GitHub Sponsor today!"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/sponsors/serenity-js",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub Sponsors"})})})]})}function h(e){void 0===e&&(e={});const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
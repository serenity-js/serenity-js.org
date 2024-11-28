"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[7560],{61609:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>u,default:()=>y,frontMatter:()=>p,metadata:()=>j,toc:()=>m});var s=r(74848),t=r(28453),i=r(45645),a=r(7227),l=(r(96540),r(97639));function o(e,n){switch(e.length){case 0:return"";case 1:return e[0];case 2:return`${e[0]} ${n} ${e[1]}`;default:const r=e.slice(0,-1),s=e.slice(-1);return r.join(", ")+`, ${n}`.trim()+` ${s}`}}function d(e){let{conjunction:n="and"}=e;const{siteConfig:r}=(0,l.default)(),t=r.customFields.supportedEngines.node.split("||").map((e=>e.replace(/.*?([0-9]+).*?/,"$1").trim()));return(0,s.jsx)("span",{children:o(t,n)})}var c=r(99183),h=r(82008);const p={sidebar_position:3},u="Installing Serenity/JS",j={id:"getting-started/installation",title:"Installing Serenity/JS",description:"In this article, you'll learn how to create a brand-new test automation project and install Serenity/JS from scratch.",source:"@site/src/docs/handbook/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/handbook/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/getting-started/installation.mdx",tags:[],version:"current",lastUpdatedAt:1732313702e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Serenity/JS Project Templates",permalink:"/handbook/getting-started/project-templates"},next:{title:"Architecture",permalink:"/handbook/getting-started/architecture"}},g={},m=[{value:"Installing Node.js",id:"installing-nodejs",level:2},{value:"Installing Java Runtime Environment (JRE)",id:"installing-java-runtime-environment-jre",level:2},{value:"Creating a Node.js project",id:"creating-a-nodejs-project",level:2},{value:"Using WebdriverIO installation wizard",id:"using-webdriverio-installation-wizard",level:3},{value:"Using Playwright Test installation wizard",id:"using-playwright-test-installation-wizard",level:3},{value:"Using plain Node.js",id:"using-plain-nodejs",level:3},{value:"Installing a web browser",id:"installing-a-web-browser",level:2},{value:"Using Playwright browsers",id:"using-playwright-browsers",level:3},{value:"Using Selenium Webdriver",id:"using-selenium-webdriver",level:3},{value:"Using TypeScript",id:"using-typescript",level:2},{value:"Installing Serenity/JS modules",id:"installing-serenityjs-modules",level:2},{value:"Updating Serenity/JS modules",id:"updating-serenityjs-modules",level:2},{value:"Configuring a test runner",id:"configuring-a-test-runner",level:2},{value:"Examples and reference implementations",id:"examples-and-reference-implementations",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"installing-serenityjs",children:"Installing Serenity/JS"}),"\n","\n",(0,s.jsxs)(n.p,{children:["In this article, you'll learn how to create a ",(0,s.jsx)(n.strong,{children:"brand-new test automation project"})," and install Serenity/JS from scratch."]}),"\n",(0,s.jsx)(n.p,{children:"I'll show you how to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create a Node.js project capable of running Serenity/JS test scenarios"}),"\n",(0,s.jsx)(n.li,{children:"Install runtime dependencies required to create automated tests based on Serenity/JS"}),"\n",(0,s.jsx)(n.li,{children:"Configure TypeScript (if you'd like to)"}),"\n",(0,s.jsx)(n.li,{children:"Choose and install appropriate Serenity/JS modules"}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"Short on time? \u23f1\ufe0f",type:"info",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Serenity/JS Project Templates"})," and ",(0,s.jsx)(n.strong,{children:"Serenity/JS GitPods"})," come with all the appropriate Serenity/JS modules\nand lower-level integration and test tools already configured, so you can start automating your tests straight away!"]}),(0,s.jsxs)(n.p,{children:["Learn more about faster ways to get started using ",(0,s.jsx)(n.a,{href:"/handbook/getting-started/project-templates/",children:"Serenity/JS Project Templates"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"installing-nodejs",children:"Installing Node.js"}),"\n",(0,s.jsxs)(n.p,{children:["Serenity/JS is a ",(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," program. To help you ensure maximum stability of your test scenarios,\nSerenity/JS relies on a recent ",(0,s.jsx)(n.a,{href:"https://github.com/nodejs/Release",children:"Long-Term Support (LTS)"})," version of the ",(0,s.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"Node.js platform"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can get both Node.js and the Node Package Manager (npm) either from the ",(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"nodejs.org"})," website,\nwhich provides convenient installers for all the major operating systems, or using the ",(0,s.jsx)(n.a,{href:"http://nvm.sh",children:"Node Version Manager (nvm)"}),".\nThe second option is more appropriate if you need to work with several versions of the Node.js platform simultaneously."]}),"\n",(0,s.jsx)(n.p,{children:"To check if your machine is set up correctly, execute the following command in your terminal:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"node --version\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The version number returned by the above command should be a ",(0,s.jsxs)("strong",{children:["recent version of Node ",(0,s.jsx)(d,{conjunction:"or"})]}),",\nfor example:"]}),"\n",(0,s.jsx)(h.default,{language:"bash",children:(0,s.jsx)(c.A,{})}),"\n",(0,s.jsx)(n.h2,{id:"installing-java-runtime-environment-jre",children:"Installing Java Runtime Environment (JRE)"}),"\n",(0,s.jsxs)(n.p,{children:["Serenity/JS delegates the work of generating the illustrated HTML reports to ",(0,s.jsx)(n.a,{href:"http://serenity-bdd.info/",children:"Serenity BDD"}),",\nwhich is a Java library and therefore requires\na ",(0,s.jsx)(n.a,{href:"http://www.oracle.com/technetwork/java/javase/overview/index.html",children:"Java Runtime Environment (JRE)"})," ",(0,s.jsx)(n.strong,{children:"version 11"})," or newer."]}),"\n",(0,s.jsxs)(n.p,{children:["You can download the JRE from ",(0,s.jsx)(n.a,{href:"http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html",children:"oracle.com"}),",\n",(0,s.jsx)(n.a,{href:"https://adoptopenjdk.net/",children:"adoptopenjdk.net"}),",\nor by using the excellent ",(0,s.jsx)(n.a,{href:"https://sdkman.io/",children:"Software Development Kit Manager (SDKMan)"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To verify that you have the JRE installed, execute the below command in your terminal:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"java -version\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output should look similar to the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"openjdk 21.0.1 2023-10-17 LTS\nOpenJDK Runtime Environment Temurin-21.0.1+12 (build 21.0.1+12-LTS)\nOpenJDK 64-Bit Server VM Temurin-21.0.1+12 (build 21.0.1+12-LTS, mixed mode)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you're working with several versions of the Java platform simultaneously, please make sure that you point\nyour ",(0,s.jsx)(n.code,{children:"JAVA_HOME"})," environment variable at the correct version."]}),"\n",(0,s.jsx)(n.p,{children:"On macOS this could be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"echo $JAVA_HOME\n/Users/jan/.sdkman/candidates/java/21.0.1-tem\n"})}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-nodejs-project",children:"Creating a Node.js project"}),"\n",(0,s.jsxs)(n.p,{children:["Serenity/JS is typically installed as a ",(0,s.jsx)(n.a,{href:"https://docs.npmjs.com/files/package.json#devdependencies",children:"dev dependency"}),"\nof a ",(0,s.jsx)(n.a,{href:"https://docs.npmjs.com/files/package.json",children:"Node.js project"}),".\nThis way it doesn't accidentally get bundled together with your production dependencies."]}),"\n",(0,s.jsxs)(n.p,{children:["If you're introducing Serenity/JS to an ",(0,s.jsx)(n.strong,{children:"existing project"})," you can skip this section as its purpose is to help you\ncreate ",(0,s.jsx)(n.code,{children:"package.json"})," - a Node.js project descriptor file, which would already be part of your project."]}),"\n",(0,s.jsx)(n.h3,{id:"using-webdriverio-installation-wizard",children:"Using WebdriverIO installation wizard"}),"\n",(0,s.jsxs)(n.p,{children:["If you're planning to start a new project using ",(0,s.jsx)(n.strong,{children:"WebdriverIO"}),", use the ",(0,s.jsx)(n.a,{href:"https://webdriver.io/docs/gettingstarted/#initiate-a-webdriverio-setup",children:"WebdriverIO installation wizard"})," to generate the initial structure:"]}),"\n",(0,s.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,s.jsx)(a.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm init wdio .\n"})})}),(0,s.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yarn create wdio .\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Next, follow the ",(0,s.jsx)(n.a,{href:"/handbook/getting-started/serenity-js-with-webdriverio/",children:'Serenity/JS "Getting Started" guide for WebdriverIO'}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"using-playwright-test-installation-wizard",children:"Using Playwright Test installation wizard"}),"\n",(0,s.jsxs)(n.p,{children:["If you're planning to use ",(0,s.jsx)(n.strong,{children:"Playwright Test"}),", use ",(0,s.jsx)(n.a,{href:"https://playwright.dev/docs/intro#installing-playwright",children:"Playwright Test installation wizard"}),":"]}),"\n",(0,s.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,s.jsx)(a.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm init playwright@latest\n"})})}),(0,s.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yarn create playwright@latest\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Next, follow the ",(0,s.jsx)(n.a,{href:"/handbook/getting-started/serenity-js-with-playwright-test/",children:'Serenity/JS "Getting Started" guide for Playwright Test'})]}),"\n",(0,s.jsx)(n.h3,{id:"using-plain-nodejs",children:"Using plain Node.js"}),"\n",(0,s.jsxs)(n.p,{children:["If your chosen ",(0,s.jsx)(n.a,{href:"/handbook/test-runners/",children:"test runner"})," doesn't offer an installation wizard,\nor when you want to create a Node.js project from scratch, create a new directory, such as ",(0,s.jsx)(n.code,{children:"serenity-js-example"}),".\nNext, initialise a new Node.js project accepting the default configuration suggested by the npm with these terminal commands:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mkdir serenity-js-example\ncd serenity-js-example\nnpm init\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Your actions should result in a basic ",(0,s.jsx)(n.a,{href:"https://docs.npmjs.com/files/package.json",children:(0,s.jsx)(n.code,{children:"package.json"})}),"\nfile appearing under ",(0,s.jsx)(n.code,{children:"serenity-js-example"}),", with contents similar to the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="serenity-js-example/package.json"',children:'{\n  "name": "example",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "ISC"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"installing-a-web-browser",children:"Installing a web browser"}),"\n",(0,s.jsxs)(n.p,{children:["If you're planning to make your acceptance tests interact with a web interface, you'll need a web browser.\nThe way you install web browsers and their associated drivers depends on whether you want to use ",(0,s.jsx)(n.a,{href:"/handbook/test-runners/playwright-test",children:"Playwright"}),"\nor a ",(0,s.jsx)(n.a,{href:"https://www.selenium.dev",children:"Selenium Webdriver"}),"-based integration library, such as ",(0,s.jsx)(n.a,{href:"/handbook/test-runners/webdriverio",children:"WebdriverIO"})," or ",(0,s.jsx)(n.a,{href:"/handbook/test-runners/protractor",children:"Protractor"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"using-playwright-browsers",children:"Using Playwright browsers"}),"\n",(0,s.jsxs)(n.p,{children:["To use Serenity/JS with ",(0,s.jsx)(n.a,{href:"https://playwright.dev/",children:"Playwright"})," and its default test runner - ",(0,s.jsx)(n.a,{href:"https://playwright.dev/docs/api/class-test",children:"Playwright Test"}),",\nuse its ",(0,s.jsx)(n.a,{href:"https://playwright.dev/docs/intro#installing-playwright",children:"dedicated installation wizard"})," then ",(0,s.jsx)(n.a,{href:"/handbook/getting-started/serenity-js-with-playwright-test/",children:"add Serenity/JS as per the getting started guide"}),":"]}),"\n",(0,s.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,s.jsx)(a.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm init playwright@latest\n"})})}),(0,s.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yarn create playwright@latest\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["To use ",(0,s.jsx)(n.a,{href:"https://playwright.dev/",children:"Playwright"})," with another test runner, like ",(0,s.jsx)(n.a,{href:"/handbook/test-runners/cucumber/",children:"Cucumber.js"}),", install the ",(0,s.jsx)(n.code,{children:"playwright"})," module, as well as its browsers and operating system-level dependencies\nby running the below commands in your terminal:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="serenity-js-example/"',children:"npm install --save-dev playwright\nnpx playwright install --with-deps\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Learn more about the ",(0,s.jsx)(n.a,{href:"https://playwright.dev/docs/ci#introduction",children:"installing Playwright"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"using-selenium-webdriver",children:"Using Selenium Webdriver"}),"\n",(0,s.jsxs)(n.p,{children:["For test suites using the Selenium Webdriver protocol via ",(0,s.jsx)(n.a,{href:"/handbook/test-runners/webdriverio",children:"WebdriverIO"})," or ",(0,s.jsx)(n.a,{href:"/handbook/test-runners/protractor",children:"Protractor"}),",\nyou'll need to install the appropriate web browsers and their ",(0,s.jsx)(n.a,{href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/",children:"associated drivers"})," on any machine running the tests."]}),"\n",(0,s.jsxs)(n.p,{children:["If you already have ",(0,s.jsx)(n.a,{href:"https://www.google.com/chrome/",children:"Google Chrome"})," installed locally,\nyou can add its ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/chromedriver",children:"driver"})," to your Node project by running the following command in your terminal:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="serenity-js-example/"',children:"npm install --save-dev chromedriver\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to test with a specific version of Google Chrome,\nconsider using ",(0,s.jsx)(n.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/#how-can-i-get-chrome-for-testing-binaries",children:"Google Chrome for Testing"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Consult the Selenium project documentation to learn ",(0,s.jsx)(n.a,{href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/",children:"how to install other drivers"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"using-typescript",children:"Using TypeScript"}),"\n",(0,s.jsxs)(n.p,{children:["Serenity/JS is written in ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})," and offers first-class support for TypeScript projects."]}),"\n",(0,s.jsx)(n.p,{children:"To use TypeScript in your project, install the following dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'npm2yarn title="serenity-js-example/"',children:"npm install typescript @types/node ts-node\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, create a ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig",children:(0,s.jsx)(n.code,{children:"tsconfig.json"})})," file in your project root directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="serenity-js-example/tsconfig.json"',children:'{\n  "compilerOptions": {\n    "target": "es2019",\n    "lib": ["es2019", "dom"],\n    "module": "commonjs",\n    "moduleResolution": "node",\n    "emitDecoratorMetadata": true,\n    "experimentalDecorators": true,\n    "sourceMap": true,\n    "declaration": true,\n    "types": [\n      "node"\n    ]\n  },\n\n  "include": [\n    "features/**/*.ts",\n    "test/**/*.ts"\n  ],\n\n  "exclude": [\n    "node_modules"\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Make sure to configure the ",(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/tsconfig#include",children:(0,s.jsx)(n.code,{children:"include"})})," property to cover all your\ntesting-related TypeScript sources."]}),"\n",(0,s.jsx)(n.h2,{id:"installing-serenityjs-modules",children:"Installing Serenity/JS modules"}),"\n",(0,s.jsxs)(n.p,{children:["All the official ",(0,s.jsx)(n.a,{href:"/handbook/getting-started/architecture",children:"Serenity/JS modules"})," are distributed\nvia the Node Package Manager registry at ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/search?q=%40serenity-js",children:"npmjs.com"}),"\nand published under the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/search?q=%40serenity-js",children:(0,s.jsx)(n.code,{children:"@serenity-js/"})})," namespace.\nThis is to help you distinguish the original Serenity/JS modules developed and maintained\nby the Serenity/JS Team from other modules created by the Serenity/JS Community."]}),"\n",(0,s.jsxs)(n.p,{children:["Each ",(0,s.jsx)(n.a,{href:"/api",children:"Serenity/JS module"})," provides detailed installation instructions, and you can install them from your computer\nterminal by running command similar to the one below:"]}),"\n",(0,s.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,s.jsx)(a.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev @serenity-js/core\n"})})}),(0,s.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yarn add --dev @serenity-js/core\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["On ",(0,s.jsx)(n.strong,{children:"macOS"})," and ",(0,s.jsx)(n.strong,{children:"Linux"})," you can save yourself some keystrokes and install several Serenity/JS modules simultaneously\nthanks to the terminal supporting ",(0,s.jsx)(n.a,{href:"https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html",children:"Bash brace expansion"}),":"]}),"\n",(0,s.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,s.jsx)(a.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev @serenity-js/{assertions,console-reporter,core,rest,serenity-bdd}\n"})})}),(0,s.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yarn add --dev @serenity-js/{assertions,console-reporter,core,rest,serenity-bdd}\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["On ",(0,s.jsx)(n.strong,{children:"Windows"}),", or when your shell doesn't support Bash brace expansion, you'll need to specify each Serenity/JS module individually:"]}),"\n",(0,s.jsxs)(i.A,{groupId:"code-examples",children:[(0,s.jsx)(a.A,{value:"macos/linux",label:"macOS/Linux",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'tab={"label":"macOS/Linux"}',children:"npm install --save-dev \\\n    @serenity-js/assertions \\\n    @serenity-js/console-reporter \\\n    @serenity-js/core \\\n    @serenity-js/rest \\\n    @serenity-js/serenity-bdd\n"})})}),(0,s.jsx)(a.A,{value:"windows",label:"Windows",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'tab={"label":"Windows"}',children:"npm install --save-dev ^\n    @serenity-js/assertions ^\n    @serenity-js/console-reporter ^\n    @serenity-js/core ^\n    @serenity-js/rest ^\n    @serenity-js/serenity-bdd\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"If your machine is part of a corporate network and doesn't have direct access to npmjs.com, you should be able to download\nSerenity/JS (and other publicly available Node modules) from your company internal artifact registry:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.jfrog.com/confluence/display/JFROG/npm+Registry",children:"Using NPM with JFrog Artifactory"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.sonatype.com/repomanager3/nexus-repository-administration/formats/npm-registry/configuring-npm",children:"Using NPM with Sonatype Nexus"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"updating-serenityjs-modules",children:"Updating Serenity/JS modules"}),"\n",(0,s.jsx)(n.p,{children:"Please make sure to always keep your Serenity/JS dependencies up to date to benefit from the latest features, bug fixes, and security patches.\nSerenity/JS follows semantic versioning to make sure that updates are as smooth as possible."}),"\n",(0,s.jsxs)(n.p,{children:["Learn more about ",(0,s.jsx)(n.a,{href:"/releases/versioning/",children:"Serenity/JS versioning strategy"}),", see the ",(0,s.jsx)(n.a,{href:"/releases/",children:"latest releases"})," and learn how to ",(0,s.jsx)(n.a,{href:"/releases/updating-serenity-js",children:"keep your Serenity/JS project up to date"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"configuring-a-test-runner",children:"Configuring a test runner"}),"\n",(0,s.jsxs)(n.p,{children:["Follow the below instructions to configure your chosen ",(0,s.jsx)(n.a,{href:"/handbook/test-runners/",children:"test runner"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/handbook/test-runners/cucumber",children:"Cucumber"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/handbook/test-runners/jasmine",children:"Jasmine"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/handbook/test-runners/mocha",children:"Mocha"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/handbook/test-runners/playwright-test",children:"Playwright Test"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/handbook/test-runners/protractor",children:"Protractor"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/handbook/test-runners/webdriverio",children:"WebdriverIO"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You might also want to consult the ",(0,s.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples",children:"Serenity/JS Examples and Reference Implementations"})," on GitHub."]}),"\n",(0,s.jsx)(n.h2,{id:"examples-and-reference-implementations",children:"Examples and reference implementations"}),"\n",(0,s.jsx)(n.p,{children:"If you ever get stuck setting up a Serenity/JS project from scratch, make sure to review:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/handbook/getting-started/project-templates/",children:"Serenity/JS Project Templates"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples",children:"Serenity/JS Examples and Reference Implementations"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Also, remember to join the ",(0,s.jsx)(n.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community chat"})," where you can meet fellow Serenity/JS developers who might be able to help you out."]})]})}function y(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},99183:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var s=r(97639),t=r(74848);function i(){const{siteConfig:e}=(0,s.default)(),n=e.customFields.currentNodeVersion;return(0,t.jsx)("span",{children:n})}}}]);
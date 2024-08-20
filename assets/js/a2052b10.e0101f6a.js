"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[8368],{8997:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var i=n(74848),t=n(28453),s=n(45645),o=n(7227);const a={sidebar_position:6},c="WebdriverIO",d={id:"test-runners/webdriverio",title:"WebdriverIO",description:"WebdriverIO is a progressive automation framework built to automate modern web and mobile applications.",source:"@site/src/docs/handbook/test-runners/webdriverio.mdx",sourceDirName:"test-runners",slug:"/test-runners/webdriverio",permalink:"/handbook/test-runners/webdriverio",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/test-runners/webdriverio.mdx",tags:[],version:"current",lastUpdatedAt:1724195066e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Protractor",permalink:"/handbook/test-runners/protractor"},next:{title:"Reporting",permalink:"/handbook/reporting/"}},l={},h=[{value:"Creating a new  project",id:"creating-a-new--project",level:2},{value:"Using the WebdriverIO wizard",id:"using-the-webdriverio-wizard",level:3},{value:"Using Serenity/JS Project Templates",id:"using-serenityjs-project-templates",level:3},{value:"Using Serenity/JS reporting services",id:"using-serenityjs-reporting-services",level:2},{value:"Installing Serenity/JS test runner adapter",id:"installing-serenityjs-test-runner-adapter",level:3},{value:"Configuring Serenity/JS",id:"configuring-serenityjs",level:3},{value:"Configuring WebdriverIO",id:"configuring-webdriverio",level:3},{value:"Using Serenity/JS Screenplay Pattern APIs",id:"using-serenityjs-screenplay-pattern-apis",level:2},{value:"Referring to actors in test scenarios",id:"referring-to-actors-in-test-scenarios",level:3},{value:"Configuring a custom cast of actors",id:"configuring-a-custom-cast-of-actors",level:3}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"webdriverio",children:"WebdriverIO"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://webdriver.io/",children:"WebdriverIO"})," is a progressive automation framework built to automate modern web and mobile applications.\nWebdriverIO leverages the power of the ",(0,i.jsx)(r.a,{href:"https://w3c.github.io/webdriver/",children:"WebDriver"})," and ",(0,i.jsx)(r.a,{href:"https://github.com/w3c/webdriver-bidi",children:"WebDriver-BiDi"})," protocols that are developed and supported\nby all browser vendors and guarantees a true cross-browser testing experience.\nFurthermore, WebdriverIO also supports alternative, proprietary automation protocols like ",(0,i.jsx)(r.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"Chrome DevTools"})," via ",(0,i.jsx)(r.a,{href:"https://www.npmjs.com/package/puppeteer",children:"Puppeteer"}),"."]}),"\n",(0,i.jsx)(r.admonition,{title:"Extending existing WebdriverIO Test suites",type:"tip",children:(0,i.jsxs)(r.p,{children:["If you want to add Serenity/JS to an existing WebdriverIO test suite, check out\n",(0,i.jsx)(r.a,{href:"/handbook/getting-started/serenity-js-with-webdriverio/",children:"Extending WebdriverIO with Serenity/JS"}),"."]})}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"In this article, you will learn:"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"How to create a new Serenity/JS + WebdriverIO project"}),"\n",(0,i.jsxs)(r.li,{children:["How to use ",(0,i.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"}),", including the ",(0,i.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:"Serenity BDD reporter"}),", even if your test scenarios don't follow the Screenplay Pattern yet"]}),"\n",(0,i.jsxs)(r.li,{children:["How to implement WebdriverIO test scenarios using reusable ",(0,i.jsx)(r.a,{href:"/handbook/design/screenplay-pattern",children:"Serenity/JS Screenplay Pattern"})," APIs and the ",(0,i.jsx)(r.a,{href:"/api/webdriverio",children:"Serenity/JS WebdriverIO module"})]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"creating-a-new--project",children:"Creating a new  project"}),"\n",(0,i.jsxs)(r.p,{children:["The easiest way to create a new Serenity/JS and WebdriverIO project is to use the WebdriverIO configuration wizard,\nor clone one of the ",(0,i.jsx)(r.a,{href:"/handbook/getting-started/project-templates/#webdriverio",children:"Serenity/JS + WebdriverIO project templates"}),"."]}),"\n",(0,i.jsx)(r.h3,{id:"using-the-webdriverio-wizard",children:"Using the WebdriverIO wizard"}),"\n",(0,i.jsx)(r.p,{children:"To use the WebdriverIO configuration wizard, run the following command in your computer terminal:"}),"\n",(0,i.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,i.jsx)(o.A,{value:"npm",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"npm init wdio\n"})})}),(0,i.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"yarn create wdio\n"})})})]}),"\n",(0,i.jsx)(r.p,{children:"Next, select the following options:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Type of testing: ",(0,i.jsx)(r.strong,{children:"E2E Testing"})]}),"\n",(0,i.jsxs)(r.li,{children:["Automation backend: ",(0,i.jsx)(r.strong,{children:"any"}),", as Serenity/JS supports both local and remote WebdriverIO test runners"]}),"\n",(0,i.jsxs)(r.li,{children:["Environment: ",(0,i.jsx)(r.strong,{children:"web"})]}),"\n",(0,i.jsxs)(r.li,{children:["Browser: ",(0,i.jsx)(r.strong,{children:"any"}),", as Serenity/JS supports all browsers supported by WebdriverIO"]}),"\n",(0,i.jsxs)(r.li,{children:["Framework: ",(0,i.jsx)(r.strong,{children:"Jasmine with Serenity/JS"}),", ",(0,i.jsx)(r.strong,{children:"Mocha with Serenity/JS"}),", or ",(0,i.jsx)(r.strong,{children:"Cucumber with Serenity/JS"})]}),"\n",(0,i.jsxs)(r.li,{children:["Compiler: ",(0,i.jsx)(r.strong,{children:"any"}),", as Serenity/JS supports both TypeScript and JavaScript (we recommend TypeScript)"]}),"\n",(0,i.jsxs)(r.li,{children:["Generate test files: ",(0,i.jsx)(r.strong,{children:"yes"}),", if you'd like Serenity/JS to give you a starting point for your test scenarios"]}),"\n",(0,i.jsxs)(r.li,{children:["Test file location: ",(0,i.jsx)(r.strong,{children:"accept the defaults"}),", unless you'd like to store your code in a different directory"]}),"\n",(0,i.jsxs)(r.li,{children:["Test reporter: ",(0,i.jsx)(r.strong,{children:"any"}),", Serenity/JS configures the project to use ",(0,i.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"}),", and you can add native WebdriverIO reporters too if needed"]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Check out the below video to see how to create a new project step by step:"}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("iframe",{width:"100%",height:"494",src:"https://www.youtube.com/embed/8mMY6Of4nCw?si=iMT8jiH3xA9lWl0v",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",allowfullscreen:!0}),(0,i.jsx)("figcaption",{children:"Generating a new Serenity/JS project using the WebdriverIO configuration wizard"})]}),"\n",(0,i.jsx)(r.h3,{id:"using-serenityjs-project-templates",children:"Using Serenity/JS Project Templates"}),"\n",(0,i.jsxs)(r.p,{children:["If you'd like to dive straight into the code, ",(0,i.jsx)(r.a,{href:"https://github.com/serenity-js",children:"Serenity/JS GitHub repository"})," provides:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/handbook/getting-started/project-templates/#webdriverio",children:"Serenity/JS + WebdriverIO project templates"}),", which are the easiest way to start with the framework,"]}),"\n",(0,i.jsxs)(r.li,{children:["several ",(0,i.jsx)(r.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples",children:"reference implementations"}),", demonstrating using Serenity/JS with WebdriverIO to write web-based acceptance tests"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"using-serenityjs-reporting-services",children:"Using Serenity/JS reporting services"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsxs)(r.a,{href:"/api/webdriverio",children:[(0,i.jsx)(r.code,{children:"@serenity-js/webdriverio"})," module"]})," provides a ",(0,i.jsx)(r.a,{href:"/handbook/getting-started/architecture",children:(0,i.jsx)(r.strong,{children:"test runner adapter"})}),"\nyou can attach to your ",(0,i.jsx)(r.a,{href:"https://webdriver.io/docs/testrunner",children:"WebdriverIO test runner"}),"\njust like any other standard ",(0,i.jsxs)(r.a,{href:"https://webdriver.io/docs/configurationfile",children:["WebdriverIO ",(0,i.jsx)(r.code,{children:"framework"})]}),"."]}),"\n",(0,i.jsx)(r.admonition,{title:"Serenity/JS test runner adapters",type:"tip",children:(0,i.jsxs)(r.p,{children:["Serenity/JS test runner adapters turn internal, test runner-specific events\ninto ",(0,i.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"Serenity/JS domain events"})," that can contribute to test execution reports produced\nby ",(0,i.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"}),"."]})}),"\n",(0,i.jsxs)(r.p,{children:["To use ",(0,i.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"})," in a WebdriverIO Test project, you need to:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["attach the ",(0,i.jsx)(r.a,{href:"/api/webdriverio",children:(0,i.jsx)(r.code,{children:"@serenity-js/webdriverio"})})," test runner adapter to the WebdriverIO test runner"]}),"\n",(0,i.jsxs)(r.li,{children:["use ",(0,i.jsx)(r.code,{children:"wdio.conf.ts"})," to ",(0,i.jsx)(r.a,{href:"/api/webdriverio/interface/WebdriverIOConfig",children:"configure Serenity/JS"})," to use the reporting services you want to use,\nsuch as the ",(0,i.jsx)(r.a,{href:"/handbook/reporting/console-reporter",children:(0,i.jsx)(r.code,{children:"ConsoleReporter"})}),"\nor ",(0,i.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:(0,i.jsx)(r.code,{children:"SerenityBDDReporter"})})]}),"\n"]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)(r.mermaid,{value:'graph TB\n    SUT(["Web App"])\n    DEV(["\ud83d\udcbb Developer"])\n    WdioCli["wdio"]\n    Wdio(["WebdriverIO"])\n    ConfigFile["wdio.conf.ts"]\n    SWdioAdapter(["@serenity-js/webdriverio/adapter"])\n    SWeb(["@serenity-js/web"])\n    SWdio(["@serenity-js/webdriverio"])\n    SCore(["@serenity-js/core"])\n    TR(["3rd-party test runner"])\n    TRA(["Serenity/JS test runner adapter"])\n    Specs["test scenarios"]\n    R(["Serenity/JS reporting services"])\n\n    DEV -- invokes --\x3e WdioCli\n    WdioCli -- loads --\x3e ConfigFile\n    WdioCli -- uses --\x3e SWdioAdapter\n    ConfigFile -- configures --\x3e SCore\n    SWdioAdapter -- registers --\x3e TRA\n    SWdioAdapter -- manages --\x3e TR\n    TR -- notifies --\x3e TRA\n    TR -- executes --\x3e Specs\n    Specs -- use --\x3e SWeb\n    SWeb -- notifies --\x3e SCore\n\n    SWeb -- uses --\x3e SWdio\n\n    SWdio -- uses --\x3e Wdio\n\n    Wdio -- interacts with --\x3e SUT\n\n    TRA -- notifies --\x3e SCore\n    SCore -- notifies --\x3e R\n\n    click SWdio "/api/webdriverio"\n    click SWeb "/api/web"\n    click SCore "/api/core"\n    click R "/handbook/reporting"'}),(0,i.jsx)("figcaption",{children:"Serenity/JS + WebdriverIO integration architecture"})]}),"\n",(0,i.jsx)(r.h3,{id:"installing-serenityjs-test-runner-adapter",children:"Installing Serenity/JS test runner adapter"}),"\n",(0,i.jsxs)(r.p,{children:["Follow ",(0,i.jsx)(r.a,{href:"https://webdriver.io/docs/gettingstarted",children:"WebdriverIO installation instructions"}),"\nto create a new WebdriverIO project."]}),"\n",(0,i.jsx)(r.admonition,{title:"Use TypeScript to get the most out of your development tools",type:"tip",children:(0,i.jsxs)(r.p,{children:["WebdriverIO installation wizard will ask you whether you want to use TypeScript or JavaScript\nto implement your test scenarios.\nChoosing TypeScript offers improved tooling support in IDEs such\nas ",(0,i.jsx)(r.a,{href:"/handbook/integration/jetbrains-idea",children:"JetBrains"})," and ",(0,i.jsx)(r.a,{href:"/handbook/integration/visual-studio-code",children:"Visual Studio Code"}),"."]})}),"\n",(0,i.jsx)(r.p,{children:"Next, add Serenity/JS WebdriverIO and web integration modules:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/api/core",children:(0,i.jsx)(r.code,{children:"@serenity-js/core"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/api/webdriverio",children:(0,i.jsx)(r.code,{children:"@serenity-js/webdriverio"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/api/web",children:(0,i.jsx)(r.code,{children:"@serenity-js/web"})})}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"You might also want to install Serenity/JS reporting services:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/api/console-reporter",children:(0,i.jsx)(r.code,{children:"@serenity-js/console-reporter"})})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/api/serenity-bdd",children:(0,i.jsx)(r.code,{children:"@serenity-js/serenity-bdd"})})}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"To do the above, run the following command in your terminal:"}),"\n",(0,i.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,i.jsx)(o.A,{value:"npm",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"npm install --save-dev @serenity-js/core @serenity-js/console-reporter @serenity-js/webdriverio @serenity-js/web @serenity-js/serenity-bdd\n"})})}),(0,i.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"yarn add --dev @serenity-js/core @serenity-js/console-reporter @serenity-js/webdriverio @serenity-js/web @serenity-js/serenity-bdd\n"})})})]}),"\n",(0,i.jsxs)(r.p,{children:["WebdriverIO offers a ",(0,i.jsx)(r.a,{href:"https://webdriver.io/docs/runner#local-runner",children:"local runner"})," that\nuses Jasmine, Mocha, or Cucumber to run your test scenarios.\nSince the task of running the scenarios is delegated to another tool,\nyou'll need to follow the installation instructions to add a Serenity/JS test runner adapter for the runner you've decided to use."]}),"\n",(0,i.jsx)(r.p,{children:"See Serenity/JS test runner adapter installation instructions for:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/handbook/test-runners/cucumber#installing-serenityjs-test-runner-adapter",children:"Cucumber"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/handbook/test-runners/jasmine#installing-serenityjs-test-runner-adapter",children:"Jasmine"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/handbook/test-runners/mocha#installing-serenityjs-test-runner-adapter",children:"Mocha"})}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"configuring-serenityjs",children:"Configuring Serenity/JS"}),"\n",(0,i.jsxs)(r.p,{children:["To use ",(0,i.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"})," in a WebdriverIO project,\nmodify your ",(0,i.jsxs)(r.a,{href:"https://webdriver.io/docs/configurationfile/",children:[(0,i.jsx)(r.code,{children:"wdio.conf.ts"})," configuration file"]}),"\nto register ",(0,i.jsx)(r.a,{href:"/api/webdriverio",children:"Serenity/JS WebdriverIO adapter"})," as a ",(0,i.jsxs)(r.a,{href:"https://webdriver.io/docs/frameworks",children:["WebdriverIO ",(0,i.jsx)(r.code,{children:"framework"})]}),"\nand list any ",(0,i.jsx)(r.a,{href:"/handbook/reporting",children:"Serenity/JS reporting services"})," under ",(0,i.jsx)(r.code,{children:"crew"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",metastring:'title="wdio.conf.ts"',children:"import { WebdriverIOConfig } from '@serenity-js/webdriverio';\n\nexport const config: WebdriverIOConfig = {\n    framework: '@serenity-js/webdriverio',\n    serenity: {\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n        ],\n    },\n}\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Learn more about configuring ",(0,i.jsx)(r.a,{href:"/api/webdriverio",children:"Serenity/JS WebdriverIO adapter"})," and ",(0,i.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"}),"."]}),"\n",(0,i.jsx)(r.h3,{id:"configuring-webdriverio",children:"Configuring WebdriverIO"}),"\n",(0,i.jsxs)(r.p,{children:["WebdriverIO relies on Cucumber, Jasmine, or Mocha to execute your test scenarios.\nHowever, it is responsible for configuring the test runners themselves.\nTo learn about the test runner configuration options, follow the ",(0,i.jsx)(r.a,{href:"/api/webdriverio#configuring-webdriverio",children:"Serenity/JS WebdriverIO configuration guide"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"To find out how to define test scenarios, check out the respective guide on using Serenity/JS with:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/handbook/test-runners/cucumber",children:"Cucumber"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/handbook/test-runners/jasmine",children:"Jasmine"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/handbook/test-runners/mocha",children:"Mocha"})}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["To learn about other WebdriverIO configuration options, consult the ",(0,i.jsx)(r.a,{href:"https://webdriver.io/docs/configuration",children:"WebdriverIO documentation"}),"."]}),"\n",(0,i.jsx)(r.h2,{id:"using-serenityjs-screenplay-pattern-apis",children:"Using Serenity/JS Screenplay Pattern APIs"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/api/core/class/Actor",children:"Serenity/JS actor model"})," works great with WebdriverIO\nand ",(0,i.jsx)(r.a,{href:"/handbook/design/screenplay-pattern",children:"Serenity/JS Screenplay Pattern"})," APIs can help your team implement\nWebdriverIO test scenarios that are easy to read and understand."]}),"\n",(0,i.jsxs)(r.p,{children:["The fastest way to get started with Serenity/JS and WebdriverIO is to use one of\nthe ",(0,i.jsx)(r.a,{href:"https://github.com/serenity-js?q=webdriverio+template&type=all&language=&sort=",children:"Serenity/JS + WebdriverIO project templates"}),".\nHowever, if you're adding Serenity/JS to an existing project or simply want to understand how the integration works,\nthis guide is for you."]}),"\n",(0,i.jsx)(r.h3,{id:"referring-to-actors-in-test-scenarios",children:"Referring to actors in test scenarios"}),"\n",(0,i.jsxs)(r.p,{children:["When you configure ",(0,i.jsx)(r.a,{href:"/api/webdriverio",children:"Serenity/JS WebdriverIO"}),"\nas the ",(0,i.jsxs)(r.a,{href:"/handbook/test-runners/webdriverio#configuring-serenityjs",children:["WebdriverIO ",(0,i.jsx)(r.code,{children:"framework"})]}),",\nSerenity/JS automatically creates and makes available a default ",(0,i.jsx)(r.a,{href:"/api/core/class/Cast",children:"cast of actors"}),"\nwhere every actor has the abilities to:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/api/webdriverio/class/BrowseTheWebWithWebdriverIO",children:(0,i.jsx)(r.code,{children:"BrowseTheWebWithWebdriverIO"})})," using the global ",(0,i.jsx)(r.code,{children:"browser"})]}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/api/core/class/TakeNotes",children:(0,i.jsx)(r.code,{children:"TakeNotes.usingAnEmptyNotepad()"})})}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["This means that any actors you refer to in your test scenarios using\n",(0,i.jsx)(r.a,{href:"/api/core/function/actorCalled",children:(0,i.jsx)(r.code,{children:"actorCalled"})}),"\nand ",(0,i.jsx)(r.a,{href:"/api/core/function/actorInTheSpotlight",children:(0,i.jsx)(r.code,{children:"actorInTheSpotlight"})})," functions are configured using\nthis default cast, and already have access to the WebdriverIO-managed browser instance."]}),"\n",(0,i.jsx)(r.p,{children:"Since WebdriverIO uses Jasmine, Mocha, or Cucumber to run your test scenarios, please refer to their\ndedicated guides to learn more about using Serenity/JS actors with:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/handbook/test-runners/cucumber#referring-to-actors-in-test-scenarios",children:"Cucumber"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/handbook/test-runners/jasmine#referring-to-actors-in-test-scenarios",children:"Jasmine"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/handbook/test-runners/mocha#referring-to-actors-in-test-scenarios",children:"Mocha"})}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"configuring-a-custom-cast-of-actors",children:"Configuring a custom cast of actors"}),"\n",(0,i.jsxs)(r.p,{children:["You can replace the default ",(0,i.jsx)(r.a,{href:"/api/core/class/Cast",children:"cast of actors"}),"\nby providing a custom implementation via ",(0,i.jsx)(r.a,{href:"/api/webdriverio/interface/WebdriverIOConfig#serenity",children:(0,i.jsx)(r.code,{children:"serenity.actors"})}),"\nconfiguration option in your ",(0,i.jsx)(r.code,{children:"wdio.conf.ts"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["For example, to implement a cast where every actor can ",(0,i.jsx)(r.a,{href:"/api/webdriverio/class/BrowseTheWebWithWebdriverIO",children:(0,i.jsx)(r.code,{children:"BrowseTheWebWithWebdriverIO"})}),",\n",(0,i.jsx)(r.a,{href:"/api/core/class/TakeNotes",children:(0,i.jsx)(r.code,{children:"TakeNotes"})})," and ",(0,i.jsx)(r.a,{href:"/api/rest/class/CallAnApi",children:(0,i.jsx)(r.code,{children:"CallAnApi"})}),", you could create a ",(0,i.jsx)(r.code,{children:"MyActors"})," class like this:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",metastring:'title="test/MyActors.ts"',children:"import { Actor, Cast, TakeNotes } from '@serenity-js/core'\nimport { CallAnApi } from '@serenity-js/rest'\nimport { BrowseTheWebWithWebdriverIO } from '@serenity-js/webdriverio'\n\nexport class MyActors implements Cast {\n    // use constructor parameters to pass properties from the configuration file\n    constructor(private readonly apiUrl: string) {\n    }\n\n    prepare(actor: Actor): Actor {\n        return actor.whoCan(\n            BrowseTheWebWithWebdriverIO.using(browser), // use global browser object\n            TakeNotes.usingAnEmptyNotepad(),\n            CallAnApi.at(this.apiUrl),\n        );\n    }\n}\n"})}),"\n",(0,i.jsx)(r.admonition,{title:"No browser in the configuration file",type:"info",children:(0,i.jsxs)(r.p,{children:["WebdriverIO doesn't allow you to use the ",(0,i.jsx)(r.code,{children:"browser"})," global variable in ",(0,i.jsx)(r.code,{children:"wdio.conf.ts"}),".\nThat's why you need to create a custom implementation of ",(0,i.jsx)(r.a,{href:"/api/core/class/Cast",children:(0,i.jsx)(r.code,{children:"Cast"})}),"\nand only refer to ",(0,i.jsx)(r.code,{children:"browser"})," in ",(0,i.jsx)(r.a,{href:"/api/core/class/Cast#prepare",children:(0,i.jsx)(r.code,{children:"Cast.prepare"})})," method."]})}),"\n",(0,i.jsxs)(r.p,{children:["Next, modify your WebdriverIO configuration file to provide your custom ",(0,i.jsx)(r.code,{children:"MyActors"})," implementation:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",metastring:'title="wdio.conf.ts"',children:"import { WebdriverIOConfig } from '@serenity-js/webdriverio'\n// highlight-next-line\nimport { MyActors } from './test/MyActors'\n\nexport const config: WebdriverIOConfig = {\n    framework: '@serenity-js/webdriverio',\n    serenity: {\n        // highlight-next-line\n        actors: new MyActors('https://api.example.org'),\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n        ],\n    },\n}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},7227:(e,r,n)=>{n.d(r,{A:()=>o});n(96540);var i=n(34164);const t={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:r,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,o),hidden:n,children:r})}},45645:(e,r,n)=>{n.d(r,{A:()=>p});var i=n(96540),t=n(34164),s=n(24245),o=n(8626),a=n(11062);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var d=n(74848);function l(e){let{className:r,block:n,selectedValue:i,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),u=e=>{const r=e.currentTarget,n=l.indexOf(r),t=a[n].value;t!==i&&(h(r),o(t))},p=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,d.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},r),children:a.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,d.jsx)("li",{role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,ref:e=>l.push(e),onKeyDown:p,onClick:u,...s,className:(0,t.A)("tabs__item",c.tabItem,s?.className,{"tabs__item--active":i===r}),children:n??r},r)}))})}function h(e){let{lazy:r,children:n,selectedValue:t}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,d.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==t})))})}function u(e){const r=(0,o.u)(e);return(0,d.jsxs)("div",{className:(0,t.A)("tabs-container",c.tabList),children:[(0,d.jsx)(l,{...r,...e}),(0,d.jsx)(h,{...r,...e})]})}function p(e){const r=(0,a.A)();return(0,d.jsx)(u,{...e,children:(0,o.v)(e.children)},String(r))}},8626:(e,r,n)=>{n.d(r,{u:()=>p,v:()=>d});var i=n(96540),t=n(56347),s=n(36494),o=n(62814),a=n(45167),c=n(69900);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function l(e){const{values:r,children:n}=e;return(0,i.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:i,default:t}}=e;return{value:r,label:n,attributes:i,default:t}}))}(n);return function(e){const r=(0,a.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:n}=e;const s=(0,t.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,o=l(e),[a,d]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:r,tabValues:o}))),[p,j]=u({queryString:n,groupId:t}),[b,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,s]=(0,c.Dv)(n);return[t,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:t}),x=(()=>{const e=p??b;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{x&&d(x)}),[x]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);d(e),j(e),f(e)}),[j,f,o]),tabValues:o}}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var i=n(96540);const t={},s=i.createContext(t);function o(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);
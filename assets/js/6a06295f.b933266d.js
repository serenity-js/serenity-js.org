"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[9428],{66151:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var n=t(74848),o=t(28453),s=t(45645),i=t(7227);const a={sidebar_position:5},c="Protractor",l={id:"test-runners/protractor",title:"Protractor",description:"Protractor is an end-to-end test framework for Angular and AngularJS applications, based on Selenium 3.",source:"@site/src/docs/handbook/test-runners/protractor.mdx",sourceDirName:"test-runners",slug:"/test-runners/protractor",permalink:"/handbook/test-runners/protractor",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/test-runners/protractor.mdx",tags:[],version:"current",lastUpdatedAt:1722015798e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Playwright Test",permalink:"/handbook/test-runners/playwright-test"},next:{title:"WebdriverIO",permalink:"/handbook/test-runners/webdriverio"}},d={},h=[{value:"Examples and Project Templates",id:"examples-and-project-templates",level:2},{value:"Using Serenity/JS reporting services",id:"using-serenityjs-reporting-services",level:2},{value:"Installing Serenity/JS test runner adapter",id:"installing-serenityjs-test-runner-adapter",level:3},{value:"Configuring Serenity/JS",id:"configuring-serenityjs",level:3},{value:"Configuring Protractor",id:"configuring-protractor",level:3},{value:"Using Serenity/JS Screenplay Pattern APIs",id:"using-serenityjs-screenplay-pattern-apis",level:2},{value:"Referring to actors in test scenarios",id:"referring-to-actors-in-test-scenarios",level:3},{value:"Configuring a custom cast of actors",id:"configuring-a-custom-cast-of-actors",level:3},{value:"Migrating from Protractor to WebdriverIO",id:"migrating-from-protractor-to-webdriverio",level:2}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"protractor",children:"Protractor"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://www.protractortest.org/",children:"Protractor"})," is an end-to-end test framework for Angular and AngularJS applications, based on Selenium 3.\nProtractor runs tests against your application running in a real browser, interacting with it as a user would."]}),"\n",(0,n.jsx)(r.admonition,{title:"Protractor is deprecated",type:"warning",children:(0,n.jsxs)(r.p,{children:["Protractor is now ",(0,n.jsx)(r.a,{href:"https://blog.angular.io/the-state-of-end-to-end-testing-with-angular-d175f751cb9c",children:"officially deprecated"}),"\nand has not received any updates since ",(0,n.jsx)(r.a,{href:"https://github.com/angular/protractor/commits/master",children:"April 2020"}),".\nYou ",(0,n.jsx)(r.strong,{children:"should not"})," rely on Protractor for any new test automation projects, and instead use Serenity/JS with more modern\nand developer-friendly integration tools like ",(0,n.jsx)(r.a,{href:"/handbook/test-runners/webdriverio",children:"WebdriverIO"}),"\nor ",(0,n.jsx)(r.a,{href:"/handbook/test-runners/playwright-test",children:"Playwright Test"}),"."]})}),"\n",(0,n.jsxs)(r.admonition,{title:"Should I use Serenity/JS with my existing Protractor project?",type:"info",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Yes"}),". The most common reason why you ",(0,n.jsx)(r.strong,{children:"should"})," introduce Serenity/JS\nto an ",(0,n.jsx)(r.strong,{children:"existing"})," Protractor project is that it can help you to ",(0,n.jsx)(r.strong,{children:"reliably migrate"})," your codebase\nto a more modern integration tool like ",(0,n.jsx)(r.a,{href:"/api/webdriverio",children:"WebdriverIO"}),"\nor ",(0,n.jsx)(r.a,{href:"/api/playwright",children:"Playwright"})," in the next step."]}),(0,n.jsxs)(r.p,{children:["Using Serenity/JS ",(0,n.jsx)(r.a,{href:"/handbook/design/screenplay-pattern",children:"Screenplay Pattern APIs"}),"\nwill also help you ",(0,n.jsx)(r.strong,{children:"future-proof your codebase"})," and make it ",(0,n.jsx)(r.strong,{children:"agnostic"})," of the underlying integration tools."]})]}),"\n",(0,n.jsx)(r.admonition,{title:"Extending existing Protractor test suites",type:"tip",children:(0,n.jsxs)(r.p,{children:["If you want to add Serenity/JS to an existing Protractor test suite, check out\n",(0,n.jsx)(r.a,{href:"/handbook/getting-started/serenity-js-with-protractor/",children:"Extending Protractor with Serenity/JS"}),"."]})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"In this article, you will learn:"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["How to use ",(0,n.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"}),", including the ",(0,n.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:"Serenity BDD reporter"}),", even if your test scenarios don't follow the Screenplay Pattern yet"]}),"\n",(0,n.jsxs)(r.li,{children:["How to implement Protractor test scenarios using reusable ",(0,n.jsx)(r.a,{href:"/handbook/design/screenplay-pattern",children:"Serenity/JS Screenplay Pattern"})," APIs and the ",(0,n.jsx)(r.a,{href:"/api/webdriverio",children:"Serenity/JS Protractor module"})]}),"\n",(0,n.jsxs)(r.li,{children:["How ",(0,n.jsx)(r.a,{href:"/api/web",children:"Serenity/JS Web APIs"})," will help you ",(0,n.jsx)(r.strong,{children:"reliably migrate"})," your tests from Protractor to WebdriverIO (the most compatible tool)"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"examples-and-project-templates",children:"Examples and Project Templates"}),"\n",(0,n.jsxs)(r.p,{children:["If you'd like to dive straight into the code, ",(0,n.jsx)(r.a,{href:"https://github.com/serenity-js",children:"Serenity/JS GitHub repository"})," provides:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://github.com/serenity-js?q=protractor+template&type=all&language=&sort=",children:"Serenity/JS + Protractor project templates"}),", which are the easiest way to start with the framework,"]}),"\n",(0,n.jsxs)(r.li,{children:["several ",(0,n.jsx)(r.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples",children:"reference implementations"}),", demonstrating using Serenity/JS with Protractor to write web-based acceptance tests"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"using-serenityjs-reporting-services",children:"Using Serenity/JS reporting services"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.a,{href:"/api/protractor",children:[(0,n.jsx)(r.code,{children:"@serenity-js/protractor"})," module"]})," provides a ",(0,n.jsx)(r.a,{href:"/handbook/getting-started/architecture",children:(0,n.jsx)(r.strong,{children:"test runner adapter"})}),"\nyou can attach to your ",(0,n.jsx)(r.a,{href:"https://www.protractortest.org/#/infrastructure",children:"Protractor test runner"})," just like any other standard ",(0,n.jsxs)(r.a,{href:"https://github.com/angular/protractor/blob/master/lib/config.ts#L612",children:["Protractor ",(0,n.jsx)(r.code,{children:"framework"})]}),"."]}),"\n",(0,n.jsx)(r.admonition,{title:"Serenity/JS test runner adapters",type:"tip",children:(0,n.jsxs)(r.p,{children:["Serenity/JS test runner adapters turn internal, test runner-specific events\ninto ",(0,n.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"Serenity/JS domain events"})," that can contribute to test execution reports produced\nby ",(0,n.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"}),"."]})}),"\n",(0,n.jsxs)(r.p,{children:["To use ",(0,n.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"})," in a Protractor project, you need to:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["attach the ",(0,n.jsx)(r.a,{href:"/api/protractor",children:(0,n.jsx)(r.code,{children:"@serenity-js/protractor"})})," test runner adapter to the Protractor test runner"]}),"\n",(0,n.jsxs)(r.li,{children:["use ",(0,n.jsx)(r.code,{children:"protractor.conf.js"})," to ",(0,n.jsx)(r.a,{href:"/api/protractor-adapter/interface/Config",children:"configure Serenity/JS"})," to use the reporting services you want to use,\nsuch as the ",(0,n.jsx)(r.a,{href:"/handbook/reporting/console-reporter",children:(0,n.jsx)(r.code,{children:"ConsoleReporter"})}),"\nor ",(0,n.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:(0,n.jsx)(r.code,{children:"SerenityBDDReporter"})})]}),"\n"]}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)(r.mermaid,{value:'graph TB\n    SUT(["Web App"])\n    DEV(["\ud83d\udcbb Developer"])\n    WdioCli["protractor"]\n    Wdio(["Protractor"])\n    ConfigFile["protractor.conf.js"]\n    SWdioAdapter(["@serenity-js/protractor/adapter"])\n    SWeb(["@serenity-js/web"])\n    SWdio(["@serenity-js/protractor"])\n    SCore(["@serenity-js/core"])\n    TR(["3rd-party test runner"])\n    TRA(["Serenity/JS test runner adapter"])\n    Specs["test scenarios"]\n    R(["Serenity/JS reporting services"])\n\n    DEV -- invokes --\x3e WdioCli\n    WdioCli -- loads --\x3e ConfigFile\n    WdioCli -- uses --\x3e SWdioAdapter\n    ConfigFile -- configures --\x3e SCore\n    SWdioAdapter -- registers --\x3e TRA\n    SWdioAdapter -- manages --\x3e TR\n    TR -- notifies --\x3e TRA\n    TR -- executes --\x3e Specs\n    Specs -- use --\x3e SWeb\n    SWeb -- notifies --\x3e SCore\n\n    SWeb -- uses --\x3e SWdio\n\n    SWdio -- uses --\x3e Wdio\n\n    Wdio -- interacts with --\x3e SUT\n\n    TRA -- notifies --\x3e SCore\n    SCore -- notifies --\x3e R\n\n    click SWdio "/api/protractor"\n    click SWeb "/api/web"\n    click SCore "/api/core"\n    click R "/handbook/reporting"'}),(0,n.jsx)("figcaption",{children:"Serenity/JS + Protractor integration architecture"})]}),"\n",(0,n.jsx)(r.h3,{id:"installing-serenityjs-test-runner-adapter",children:"Installing Serenity/JS test runner adapter"}),"\n",(0,n.jsx)(r.p,{children:"Assuming you already have a Protractor project, add Serenity/JS Protractor and web integration modules:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/core",children:(0,n.jsx)(r.code,{children:"@serenity-js/core"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/protractor",children:(0,n.jsx)(r.code,{children:"@serenity-js/protractor"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/web",children:(0,n.jsx)(r.code,{children:"@serenity-js/web"})})}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"You might also want to install Serenity/JS reporting services:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/console-reporter",children:(0,n.jsx)(r.code,{children:"@serenity-js/console-reporter"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/serenity-bdd",children:(0,n.jsx)(r.code,{children:"@serenity-js/serenity-bdd"})})}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"To do the above, run the following command in your terminal:"}),"\n",(0,n.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,n.jsx)(i.A,{value:"npm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sh",children:"npm install --save-dev @serenity-js/core @serenity-js/console-reporter @serenity-js/protractor @serenity-js/web @serenity-js/serenity-bdd\n"})})}),(0,n.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sh",children:"yarn add --dev @serenity-js/core @serenity-js/console-reporter @serenity-js/protractor @serenity-js/web @serenity-js/serenity-bdd\n"})})})]}),"\n",(0,n.jsx)(r.p,{children:"Protractor offers a test runner that uses Jasmine, Mocha, or Cucumber to run your test scenarios.\nSince the task of running the scenarios is delegated to another tool,\nyou'll need to follow the installation instructions to add a Serenity/JS test runner adapter for the runner you've decided to use."}),"\n",(0,n.jsx)(r.p,{children:"See Serenity/JS test runner adapter installation instructions for:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/handbook/test-runners/cucumber#installing-serenityjs-test-runner-adapter",children:"Cucumber"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/handbook/test-runners/jasmine#installing-serenityjs-test-runner-adapter",children:"Jasmine"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/handbook/test-runners/mocha#installing-serenityjs-test-runner-adapter",children:"Mocha"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"configuring-serenityjs",children:"Configuring Serenity/JS"}),"\n",(0,n.jsxs)(r.p,{children:["To use ",(0,n.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"})," in a Protractor project,\nmodify your ",(0,n.jsxs)(r.a,{href:"https://github.com/angular/protractor/blob/master/lib/config.ts",children:[(0,n.jsx)(r.code,{children:"protractor.conf.js"})," configuration file"]}),"\nto register ",(0,n.jsx)(r.a,{href:"/api/protractor",children:"Serenity/JS Protractor adapter"})," as a ",(0,n.jsx)(r.code,{children:"custom"})," Protractor ",(0,n.jsx)(r.code,{children:"framework"}),"\nand list any ",(0,n.jsx)(r.a,{href:"/handbook/reporting",children:"Serenity/JS reporting services"})," under ",(0,n.jsx)(r.code,{children:"crew"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",metastring:'title="protractor.conf.js"',children:"exports.config = {\n\n    framework:      'custom',\n    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),\n\n    serenity: {\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            [ '@serenity-js/web:Photographer', { strategy: 'TakePhotosOfFailures' } ],\n        ]\n    },\n\n    // other Protractor config\n}\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Learn more about configuring ",(0,n.jsx)(r.a,{href:"/api/protractor",children:"Serenity/JS Protractor adapter"})," and ",(0,n.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"configuring-protractor",children:"Configuring Protractor"}),"\n",(0,n.jsxs)(r.p,{children:["Protractor relies on Cucumber, Jasmine, or Mocha to execute your test scenarios.\nHowever, it is responsible for configuring the test runners themselves.\nTo learn about the test runner configuration options, follow the ",(0,n.jsx)(r.a,{href:"/api/protractor#configuring-protractor",children:"Serenity/JS Protractor configuration guide"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"To find out how to define test scenarios, check out the respective guide on using Serenity/JS with:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/handbook/test-runners/cucumber",children:"Cucumber"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/handbook/test-runners/jasmine",children:"Jasmine"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/handbook/test-runners/mocha",children:"Mocha"})}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["To learn about other Protractor configuration options, consult the ",(0,n.jsx)(r.a,{href:"/api/protractor-adapter/interface/Config",children:"Serenity/JS Protractor API docs"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"using-serenityjs-screenplay-pattern-apis",children:"Using Serenity/JS Screenplay Pattern APIs"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/core/class/Actor",children:"Serenity/JS actor model"})," works great with Protractor\nand ",(0,n.jsx)(r.a,{href:"/handbook/design/screenplay-pattern",children:"Serenity/JS Screenplay Pattern"})," APIs can help your team implement\nProtractor test scenarios that are easy to read and understand."]}),"\n",(0,n.jsxs)(r.p,{children:["The fastest way to get started with Serenity/JS and Protractor is to use one of\nthe ",(0,n.jsx)(r.a,{href:"https://github.com/serenity-js?q=protractor+template&type=all&language=&sort=",children:"Serenity/JS + Protractor project templates"}),".\nHowever, if you're adding Serenity/JS to an existing project or simply want to understand how the integration works,\nthis guide is for you."]}),"\n",(0,n.jsx)(r.h3,{id:"referring-to-actors-in-test-scenarios",children:"Referring to actors in test scenarios"}),"\n",(0,n.jsxs)(r.p,{children:["When you configure ",(0,n.jsx)(r.a,{href:"/api/protractor",children:"Serenity/JS Protractor"}),"\nas the ",(0,n.jsxs)(r.a,{href:"/handbook/test-runners/protractor#configuring-serenityjs",children:["Protractor ",(0,n.jsx)(r.code,{children:"framework"})]}),",\nSerenity/JS automatically creates and makes available a default ",(0,n.jsx)(r.a,{href:"/api/core/class/Cast",children:"cast of actors"}),"\nwhere every actor has the abilities to:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/api/protractor/class/BrowseTheWebWithProtractor",children:(0,n.jsx)(r.code,{children:"BrowseTheWebWithProtractor"})})," using the global ",(0,n.jsx)(r.code,{children:"browser"})]}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/core/class/TakeNotes",children:(0,n.jsx)(r.code,{children:"TakeNotes.usingAnEmptyNotepad()"})})}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["This means that any actors you refer to in your test scenarios using\n",(0,n.jsx)(r.a,{href:"/api/core/function/actorCalled",children:(0,n.jsx)(r.code,{children:"actorCalled"})}),"\nand ",(0,n.jsx)(r.a,{href:"/api/core/function/actorInTheSpotlight",children:(0,n.jsx)(r.code,{children:"actorInTheSpotlight"})})," functions are configured using\nthis default cast, and already have access to the Protractor-managed browser instance."]}),"\n",(0,n.jsx)(r.p,{children:"Since Protractor uses Jasmine, Mocha, or Cucumber to run your test scenarios, please refer to their\ndedicated guides to learn more about using Serenity/JS actors with:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/handbook/test-runners/cucumber#referring-to-actors-in-test-scenarios",children:"Cucumber"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/handbook/test-runners/jasmine#referring-to-actors-in-test-scenarios",children:"Jasmine"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/handbook/test-runners/mocha#referring-to-actors-in-test-scenarios",children:"Mocha"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"configuring-a-custom-cast-of-actors",children:"Configuring a custom cast of actors"}),"\n",(0,n.jsxs)(r.p,{children:["You can replace the default ",(0,n.jsx)(r.a,{href:"/api/core/class/Cast",children:"cast of actors"}),"\nby providing a custom implementation via ",(0,n.jsx)(r.a,{href:"/api/protractor-adapter/interface/Config#serenity",children:(0,n.jsx)(r.code,{children:"serenity.actors"})}),"\nconfiguration option in your ",(0,n.jsx)(r.code,{children:"protractor.conf.js"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["For example, to implement a cast where every actor can ",(0,n.jsx)(r.a,{href:"/api/protractor/class/BrowseTheWebWithProtractor",children:(0,n.jsx)(r.code,{children:"BrowseTheWebWithProtractor"})}),",\n",(0,n.jsx)(r.a,{href:"/api/core/class/TakeNotes",children:(0,n.jsx)(r.code,{children:"TakeNotes"})})," and ",(0,n.jsx)(r.a,{href:"/api/rest/class/CallAnApi",children:(0,n.jsx)(r.code,{children:"CallAnApi"})}),", you could create a ",(0,n.jsx)(r.code,{children:"MyActors"})," class like this:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",metastring:'title="test/MyActors.js"',children:"const { TakeNotes } = require('@serenity-js/core')\nconst { CallAnApi } = require('@serenity-js/rest')\nconst { BrowseTheWebWithProtractor } = require('@serenity-js/protractor')\n\nexports.Actors = class Actors {\n    constructor(apiUrl) {\n        this.apiUrl = apiUrl\n    }\n\n    prepare(actor) {\n        return actor.whoCan(\n            BrowseTheWebWithProtractor.using(require('protractor').browser),\n            TakeNotes.usingAnEmptyNotepad(),\n            CallAnApi.at(this.apiUrl),\n        );\n    }\n}\n"})}),"\n",(0,n.jsx)(r.admonition,{title:"No browser in the configuration file",type:"info",children:(0,n.jsxs)(r.p,{children:["Protractor doesn't allow you to use the ",(0,n.jsx)(r.code,{children:"browser"})," global variable in ",(0,n.jsx)(r.code,{children:"protractor.conf.js"}),".\nThat's why you need to create a custom implementation of ",(0,n.jsx)(r.a,{href:"/api/core/class/Cast",children:(0,n.jsx)(r.code,{children:"Cast"})}),"\nand only refer to ",(0,n.jsx)(r.code,{children:"browser"})," in ",(0,n.jsx)(r.a,{href:"/api/core/class/Cast#prepare",children:(0,n.jsx)(r.code,{children:"Cast.prepare"})})," method."]})}),"\n",(0,n.jsx)(r.admonition,{title:"No TypeScript in the configuration file",type:"info",children:(0,n.jsxs)(r.p,{children:["Protractor doesn't allow you to use TypeScript in ",(0,n.jsx)(r.code,{children:"protractor.conf.js"}),".\nThat's why ",(0,n.jsx)(r.code,{children:"MyActors"})," needs to be implemented in plain-old JavaScript."]})}),"\n",(0,n.jsxs)(r.p,{children:["Next, modify your Protractor configuration file to provide your custom ",(0,n.jsx)(r.code,{children:"MyActors"})," implementation:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",metastring:'title="protractor.conf.js"',children:"// highlight-next-line\nconst { MyActors } = require('./test/MyActors');\n\nexports.config = {\n\n    framework:      'custom',\n    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),\n\n    serenity: {\n        // highlight-next-line\n        actors: new MyActors(),\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            [ '@serenity-js/web:Photographer', { strategy: 'TakePhotosOfFailures' } ],\n        ]\n    },\n\n    // other Protractor config\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"migrating-from-protractor-to-webdriverio",children:"Migrating from Protractor to WebdriverIO"}),"\n",(0,n.jsxs)(r.p,{children:["Introducing Serenity/JS Screenplay Pattern APIs in your test scenarios\ncan help your code become and stay integration tool-agnostic.\nIt can also help you migrate from Protractor to a more modern tool like ",(0,n.jsx)(r.a,{href:"/handbook/test-runners/webdriverio",children:"WebdriverIO"}),"."]}),"\n",(0,n.jsxs)(r.admonition,{title:"Your feedback matters!",type:"info",children:[(0,n.jsx)(r.p,{children:"Are you planning to migrate your tests from Protractor to another integration tool?"}),(0,n.jsxs)(r.p,{children:["I'm considering writing a ",(0,n.jsx)(r.strong,{children:"tutorial"}),", recording a ",(0,n.jsx)(r.strong,{children:"video"}),", or maybe even a ",(0,n.jsx)(r.strong,{children:"course"})," on how to\nmigrate your tests from Protractor to WebdriverIO or Playwright in a safe and reliable way that minimises the risk to your organisation."]}),(0,n.jsx)(r.p,{children:"If you're interested in that, let me know in the comments! \ud83d\udc47\ud83d\udc47\ud83d\udc47"}),(0,n.jsx)(r.p,{children:"Also make sure to follow Serenity/JS to get notified \ud83d\udd14 when new content is available! \ud83c\udf89"}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,n.jsx)(r.img,{src:"https://img.shields.io/badge/Follow%20Serenity%2FJS-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",alt:"LinkedIn Follow"})}),"\n",(0,n.jsx)(r.a,{href:"https://www.youtube.com/@serenity-js",children:(0,n.jsx)(r.img,{src:"https://img.shields.io/badge/Watch%20@serenity--js-E62117?style=for-the-badge&logo=youtube&logoColor=white",alt:"YouTube Follow"})}),"\n",(0,n.jsx)(r.a,{href:"https://github.com/sponsors/serenity-js",children:(0,n.jsx)(r.img,{src:"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub Sponsors"})})]})]})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},7227:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(34164);const o={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,i),hidden:t,children:r})}},45645:(e,r,t)=>{t.d(r,{A:()=>p});var n=t(96540),o=t(34164),s=t(24245),i=t(8626),a=t(11062);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var l=t(74848);function d(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),u=e=>{const r=e.currentTarget,t=d.indexOf(r),o=a[t].value;o!==n&&(h(r),i(o))},p=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;r=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;r=d[t]??d[d.length-1];break}}r?.focus()};return(0,l.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},r),children:a.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,l.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>d.push(e),onKeyDown:p,onClick:u,...s,className:(0,o.A)("tabs__item",c.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function h(e){let{lazy:r,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,l.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function u(e){const r=(0,i.u)(e);return(0,l.jsxs)("div",{className:(0,o.A)("tabs-container",c.tabList),children:[(0,l.jsx)(d,{...r,...e}),(0,l.jsx)(h,{...r,...e})]})}function p(e){const r=(0,a.A)();return(0,l.jsx)(u,{...e,children:(0,i.v)(e.children)},String(r))}},8626:(e,r,t)=>{t.d(r,{u:()=>p,v:()=>l});var n=t(96540),o=t(56347),s=t(36494),i=t(62814),a=t(45167),c=t(69900);function l(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return l(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:o}}=e;return{value:r,label:t,attributes:n,default:o}}))}(t);return function(e){const r=(0,a.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:t}=e;const s=(0,o.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:o}=e,i=d(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[p,j]=u({queryString:t,groupId:o}),[g,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,s]=(0,c.Dv)(t);return[o,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),y=(()=>{const e=p??g;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{y&&l(y)}),[y]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),j(e),f(e)}),[j,f,i]),tabValues:i}}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
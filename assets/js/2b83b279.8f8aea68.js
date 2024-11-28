"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[6596],{11194:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var t=r(74848),i=r(28453),s=r(45645),a=r(7227);const o={sidebar_position:8,title:"Extending WebdriverIO"},l="Extending WebdriverIO with Serenity/JS",c={id:"getting-started/serenity-js-with-webdriverio",title:"Extending WebdriverIO",description:"Serenity/JS offers excellent support for WebdriverIO!",source:"@site/src/docs/handbook/getting-started/serenity-js-with-webdriverio.mdx",sourceDirName:"getting-started",slug:"/getting-started/serenity-js-with-webdriverio",permalink:"/handbook/getting-started/serenity-js-with-webdriverio",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/getting-started/serenity-js-with-webdriverio.mdx",tags:[],version:"current",lastUpdatedAt:1732313702e3,sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Extending WebdriverIO"},sidebar:"docs",previous:{title:"Extending Protractor",permalink:"/handbook/getting-started/serenity-js-with-protractor"},next:{title:"Upgrading to Serenity/JS 3",permalink:"/handbook/getting-started/upgrading-to-serenity-js-3"}},d={},h=[{value:"About Serenity/JS",id:"about-serenityjs",level:2},{value:"Creating a WebdriverIO project",id:"creating-a-webdriverio-project",level:2},{value:"Installing Serenity/JS",id:"installing-serenityjs",level:2},{value:"Configuring Serenity/JS and WebdriverIO",id:"configuring-serenityjs-and-webdriverio",level:2},{value:"Producing Serenity BDD reports and living documentation",id:"producing-serenity-bdd-reports-and-living-documentation",level:2},{value:"Using Serenity/JS Screenplay Pattern APIs",id:"using-serenityjs-screenplay-pattern-apis",level:2},{value:"Next steps",id:"next-steps",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"extending-webdriverio-with-serenityjs",children:"Extending WebdriverIO with Serenity/JS"}),"\n",(0,t.jsxs)(n.p,{children:["Serenity/JS offers excellent support for ",(0,t.jsx)(n.strong,{children:"WebdriverIO"}),"!\nPlus, it accommodates both classic WebdriverIO tests and Serenity/JS ",(0,t.jsx)(n.a,{href:"/handbook/design/screenplay-pattern/",children:"Screenplay Pattern scenarios"}),",\nallowing you to migrate to Screenplay gradually if you'd like."]}),"\n",(0,t.jsxs)(n.p,{children:["In this article, and in ",(0,t.jsx)(n.strong,{children:"less than 5 minutes"}),", you'll learn how to:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"integrate Serenity/JS"})," with your WebdriverIO test suite,"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"enable Serenity BDD reports"}),","]}),"\n",(0,t.jsxs)(n.li,{children:["start using the ",(0,t.jsx)(n.strong,{children:"Screenplay Pattern"}),"!"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Want to jump straight into the code? Check out:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template",children:"Serenity/JS + Cucumber + WebdriverIO project template on GitHub"}),",\nand its ",(0,t.jsx)(n.a,{href:"https://serenity-js.github.io/serenity-js-cucumber-webdriverio-template/",children:"Live Serenity BDD report"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js-mocha-webdriverio-template",children:"Serenity/JS + Mocha + WebdriverIO project template on GitHub"}),"\nand its ",(0,t.jsx)(n.a,{href:"https://serenity-js.github.io/serenity-js-mocha-webdriverio-template/",children:"live Serenity BDD report"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"about-serenityjs",children:"About Serenity/JS"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://serenity-js.org",children:"Serenity/JS"})," is an open-source framework designed to make acceptance and regression testing of complex software systems faster, more collaborative, and easier to scale."]}),"\n",(0,t.jsx)(n.p,{children:"For WebdriverIO test suites, Serenity/JS offers:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/handbook/reporting/",children:"Enhanced Reporting"})," - You can use Serenity/JS\nas a drop-in replacement of any built-in WebdriverIO framework to produce in-depth test execution reports and living documentation of your project."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/handbook/design/screenplay-pattern/",children:"Screenplay Pattern APIs"})," - To make your test code portable and reusable across projects and teams,\nSerenity/JS gives you an optional ",(0,t.jsx)(n.a,{href:"/api/webdriverio",children:"abstraction layer"})," on top of native WebdriverIO APIs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/api/core/",children:"Integration Libraries"})," - For test suites that follow the Screenplay Pattern,\nSerenity/JS also provides optional integration libraries to help you write ",(0,t.jsx)(n.a,{href:"/api/rest/",children:"API tests"}),",\n",(0,t.jsx)(n.a,{href:"/api/local-server/",children:"manage local servers"}),", ",(0,t.jsx)(n.a,{href:"/api/assertions/",children:"perform assertions"}),", and more!"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Serenity BDD Report Example",src:r(29867).A+"",width:"1600",height:"738"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-webdriverio-project",children:"Creating a WebdriverIO project"}),"\n",(0,t.jsxs)(n.p,{children:["You can add Serenity/JS to an existing WebdriverIO project, or create a new project using the ",(0,t.jsx)(n.a,{href:"https://webdriver.io/docs/gettingstarted/#initiate-a-webdriverio-setup",children:"WebdriverIO installation wizard"}),":"]}),"\n",(0,t.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,t.jsx)(a.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm init wdio .\n"})})}),(0,t.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"yarn create wdio .\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"installing-serenityjs",children:"Installing Serenity/JS"}),"\n",(0,t.jsx)(n.p,{children:"To add Serenity/JS to a WebdriverIO project, install the following Serenity/JS modules from NPM:"}),"\n",(0,t.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,t.jsx)(a.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev @serenity-js/core @serenity-js/web @serenity-js/webdriverio @serenity-js/assertions @serenity-js/console-reporter @serenity-js/serenity-bdd\n"})})}),(0,t.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"yarn add --dev @serenity-js/core @serenity-js/web @serenity-js/webdriverio @serenity-js/assertions @serenity-js/console-reporter @serenity-js/serenity-bdd\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Learn more about Serenity/JS modules:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/core/",children:(0,t.jsx)(n.code,{children:"@serenity-js/core"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/web/",children:(0,t.jsx)(n.code,{children:"@serenity-js/web"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/webdriverio/",children:(0,t.jsx)(n.code,{children:"@serenity-js/webdriverio"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/assertions/",children:(0,t.jsx)(n.code,{children:"@serenity-js/assertions"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/console-reporter/",children:(0,t.jsx)(n.code,{children:"@serenity-js/console-reporter"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/serenity-bdd/",children:(0,t.jsx)(n.code,{children:"@serenity-js/serenity-bdd"})})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-serenityjs-and-webdriverio",children:"Configuring Serenity/JS and WebdriverIO"}),"\n",(0,t.jsx)(n.p,{children:"To enable integration with Serenity/JS, configure WebdriverIO as follows:"}),"\n",(0,t.jsxs)(s.A,{groupId:"code-examples",children:[(0,t.jsx)(a.A,{value:"typescript",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="wdio.conf.ts" tab={"label":"TypeScript"}',children:"import { WebdriverIOConfig } from '@serenity-js/webdriverio';\n\nexport const config: WebdriverIOConfig = {\n\n    // Tell WebdriverIO to use Serenity/JS framework\n    framework: '@serenity-js/webdriverio',\n\n    // Serenity/JS configuration\n    serenity: {\n        // Configure Serenity/JS to use the appropriate adapter\n        // for your test runner\n        runner: 'cucumber', // or 'mocha', or 'jasmine'\n\n        // Register Serenity/JS reporting services, a.k.a. the \"stage crew\"\n        crew: [\n            // Optional, print test execution results to standard output\n            '@serenity-js/console-reporter',\n\n            // Optional, produce Serenity BDD reports\n            // and living documentation (HTML)\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', {\n                outputDirectory: 'target/site/serenity'\n            } ],\n\n            // Optional, automatically capture screenshots\n            // upon interaction failure\n            [ '@serenity-js/web:Photographer', {\n                strategy: 'TakePhotosOfFailures'\n            } ],\n        ]\n    },\n\n    // Configure your Cucumber runner\n    cucumberOpts: {\n        // see Cucumber configuration options below\n    },\n\n\n    // ... or Jasmine runner\n    jasmineOpts: {\n        // see Jasmine configuration options below\n    },\n\n    // ... or Mocha runner\n    mochaOpts: {\n        // see Mocha configuration options below\n    },\n\n    runner: 'local',\n\n    // Any other WebdriverIO configuration\n};\n"})})}),(0,t.jsx)(a.A,{value:"javascript",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="wdio.conf.js" tab={"label":"JavaScript"}',children:"export const config = {\n\n    // Tell WebdriverIO to use Serenity/JS framework\n    framework: '@serenity-js/webdriverio',\n\n    // Serenity/JS configuration\n    serenity: {\n        // Configure Serenity/JS to use the appropriate adapter for your test runner\n        runner: 'cucumber',\n        // runner: 'mocha',\n        // runner: 'jasmine',\n\n        // Register Serenity/JS reporting services, a.k.a. the \"stage crew\"\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            [ '@serenity-js/web:Photographer', { strategy: 'TakePhotosOfFailures' } ],\n        ]\n    },\n\n    // Configure your Cucumber runner\n    cucumberOpts: {\n        // see Cucumber configuration options below\n    },\n\n\n    // ... or Jasmine runner\n    jasmineOpts: {\n        // see Jasmine configuration options below\n    },\n\n    // ... or Mocha runner\n    mochaOpts: {\n        // see Mocha configuration options below\n    },\n\n    runner: 'local',\n\n    // Any other WebdriverIO configuration\n};\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Learn more about:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/cucumber-adapter/interface/CucumberConfig/",children:"Serenity/JS Cucumber configuration options"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/jasmine-adapter/interface/JasmineConfig/",children:"Serenity/JS Jasmine configuration options"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/mocha-adapter/interface/MochaConfig/",children:"Serenity/JS Mocha configuration options"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://webdriver.io/docs/configurationfile/",children:"WebdriverIO configuration file"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"producing-serenity-bdd-reports-and-living-documentation",children:"Producing Serenity BDD reports and living documentation"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://serenity-bdd.github.io/docs/reporting/the_serenity_reports",children:"Serenity BDD reports and living documentation"})," are generated by ",(0,t.jsx)(n.a,{href:"https://github.com/serenity-bdd/serenity-core/tree/main/serenity-cli",children:"Serenity BDD CLI"}),",\na Java program provided by the ",(0,t.jsx)(n.a,{href:"/api/serenity-bdd/",children:(0,t.jsx)(n.code,{children:"@serenity-js/serenity-bdd"})})," module."]}),"\n",(0,t.jsx)(n.p,{children:"To produce Serenity BDD reports, your test suite must:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["produce intermediate Serenity BDD ",(0,t.jsx)(n.code,{children:".json"})," reports, by registering ",(0,t.jsx)(n.a,{href:"/api/serenity-bdd/class/SerenityBDDReporter/",children:(0,t.jsx)(n.code,{children:"SerenityBDDReporter"})})," as per the ",(0,t.jsx)(n.a,{href:"#configuring-serenityjs-and-webdriverio",children:"configuration instructions"})]}),"\n",(0,t.jsxs)(n.li,{children:["invoke the Serenity BDD CLI when you want to produce the report, by calling ",(0,t.jsx)(n.code,{children:"serenity-bdd run"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The pattern used by all the ",(0,t.jsx)(n.a,{href:"/handbook/getting-started/project-templates/",children:"Serenity/JS Project Templates"})," relies\non using the following Node modules:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/npm-failsafe",children:(0,t.jsx)(n.code,{children:"npm-failsafe"})})," to run the reporting process even if the test suite itself has failed (which is precisely when you need test reports the most...)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/rimraf",children:(0,t.jsx)(n.code,{children:"rimraf"})})," as a convenience method to remove any test reports left over from the previous run"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "scripts": {\n    "clean": "rimraf target",\n    "test": "failsafe clean test:execute test:report",\n    "test:execute": "wdio wdio.conf.ts",\n    "test:report": "serenity-bdd run"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about the ",(0,t.jsx)(n.code,{children:"SerenityBDDReporter"}),", please consult:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["installation instructions in ",(0,t.jsxs)(n.a,{href:"/api/serenity-bdd/",children:[(0,t.jsx)(n.code,{children:"@serenity-js/serenity-bdd"})," documentation"]}),","]}),"\n",(0,t.jsxs)(n.li,{children:["configuration examples in ",(0,t.jsxs)(n.a,{href:"/api/serenity-bdd/class/SerenityBDDReporter/",children:[(0,t.jsx)(n.code,{children:"SerenityBDDReporter"})," API docs"]}),","]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples",children:"Serenity/JS examples on GitHub"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-serenityjs-screenplay-pattern-apis",children:"Using Serenity/JS Screenplay Pattern APIs"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/handbook/design/screenplay-pattern/",children:"Screenplay Pattern"})," is an innovative, user-centred approach to writing high-quality automated acceptance tests. It steers you towards an effective use of layers of abstraction,\nhelps your test scenarios capture the business vernacular of your domain, and encourages good testing and software engineering habits on your team."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, when you register ",(0,t.jsx)(n.code,{children:"@serenity-js/webdriverio"})," as your WebdriverIO ",(0,t.jsx)(n.code,{children:"framework"}),",\nSerenity/JS configures a default ",(0,t.jsx)(n.a,{href:"/api/core/class/Cast/",children:"cast"})," of ",(0,t.jsx)(n.a,{href:"/api/core/class/Actor/",children:"actors"}),",\nwhere every actor can:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/webdriverio/class/BrowseTheWebWithWebdriverIO/",children:(0,t.jsx)(n.code,{children:"BrowseTheWebWithWebdriverIO"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/core/class/TakeNotes/",children:(0,t.jsx)(n.code,{children:"TakeNotes.usingAnEmptyNotepad()"})})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This should be enough to help you get started with introducing test scenarios that follow the Screenplay Pattern even to an existing test suite, for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="specs/example.spec.ts"',children:"import { actorCalled } from '@serenity-js/core'\nimport { Navigate, Page } from '@serenity-js/web'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\ndescribe('My awesome website', () => {\n    it('can have test scenarios that follow the Screenplay Pattern', async () => {\n        await actorCalled('Alice').attemptsTo(\n            Navigate.to(`https://webdriver.io`),\n            Ensure.that(\n                Page.current().title(),\n                equals(`WebdriverIO \xb7 Next-gen browser and mobile automation test framework for Node.js | WebdriverIO`)\n            ),\n        )\n    })\n\n    it('can have non-Screenplay scenarios too', async () => {\n        await browser.url('https://webdriver.io')\n        await expect(browser)\n            .toHaveTitle('WebdriverIO \xb7 Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')\n    })\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"To learn more about the Screenplay Pattern, check out:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/handbook/design/screenplay-pattern/",children:"The Screenplay Pattern"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/handbook/web-testing/",children:"Web testing with Serenity/JS"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.manning.com/books/bdd-in-action-second-edition",children:'"BDD in Action, Second Edition"'})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsx)(n.p,{children:"Well done, your WebdriverIO test suite is now integrated with Serenity/JS! \ud83c\udf89\ud83c\udf89\ud83c\udf89"}),"\n",(0,t.jsx)(n.p,{children:"To take things further, check out:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/handbook/web-testing/",children:"Web testing with Serenity/JS"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples/",children:"Serenity/JS examples on GitHub"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/serenity-js?q=webdriverio-template&type=all&language=&sort=",children:"Serenity/JS WebdriverIO project templates"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/web/",children:"Serenity/JS API docs"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Remember, new features, tutorials, and demos are coming soon!\nFollow ",(0,t.jsx)(n.a,{href:"https://www.linkedin.com/company/serenity-js",children:"Serenity/JS on LinkedIn"}),",\nsubscribe to ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/@serenity-js",children:"Serenity/JS channel on YouTube"})," and join the ",(0,t.jsx)(n.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community Chat"})," to stay up to date!\nPlease also make sure to star \u2b50\ufe0f ",(0,t.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js",children:"Serenity/JS on GitHub"})," to help others discover the framework!"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})}),"\n",(0,t.jsx)(n.a,{href:"https://www.youtube.com/@serenity-js",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})}),"\n",(0,t.jsx)(n.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/serenity-js/serenity-js",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge",alt:"GitHub stars"})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},7227:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var t=r(34164);const i={tabItem:"tabItem_Ymn6"};var s=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,a),hidden:r,children:n})}},45645:(e,n,r)=>{r.d(n,{A:()=>p});var t=r(96540),i=r(34164),s=r(24245),a=r(8626),o=r(11062);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=r(74848);function d(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=d.indexOf(n),i=o[r].value;i!==t&&(h(n),a(i))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:p,onClick:u,...s,className:(0,i.A)("tabs__item",l.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function h(e){let{lazy:n,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function u(e){const n=(0,a.u)(e);return(0,c.jsxs)("div",{className:(0,i.A)("tabs-container",l.tabList),children:[(0,c.jsx)(d,{...n,...e}),(0,c.jsx)(h,{...n,...e})]})}function p(e){const n=(0,o.A)();return(0,c.jsx)(u,{...e,children:(0,a.v)(e.children)},String(n))}},8626:(e,n,r)=>{r.d(n,{u:()=>p,v:()=>c});var t=r(96540),i=r(56347),s=r(36494),a=r(62814),o=r(45167),l=r(69900);function c(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,a=d(e),[o,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[p,j]=u({queryString:r,groupId:i}),[y,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,l.Dv)(r);return[i,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),g=(()=>{const e=p??y;return h({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{g&&c(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),j(e),b(e)}),[j,b,a]),tabValues:a}}},29867:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/serenity-bdd-reporter-c90e03e1dcfdd70c21fa0acca0cd40b5.png"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(96540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
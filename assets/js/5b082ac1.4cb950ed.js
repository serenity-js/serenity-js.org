"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[637],{508:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(74848),i=t(28453);const s={sidebar_position:4,title:"Architecture"},o="Serenity/JS Architecture",a={id:"getting-started/architecture",title:"Architecture",description:"Serenity/JS is a modular, full-stack acceptance testing framework based on Node.js.",source:"@site/src/docs/handbook/getting-started/architecture.mdx",sourceDirName:"getting-started",slug:"/getting-started/architecture",permalink:"/handbook/getting-started/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/getting-started/architecture.mdx",tags:[],version:"current",lastUpdatedAt:1726216718e3,sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Architecture"},sidebar:"docs",previous:{title:"Installing Serenity/JS",permalink:"/handbook/getting-started/installation"},next:{title:"Extending Playwright Test",permalink:"/handbook/getting-started/serenity-js-with-playwright-test"}},d={},c=[{value:"Serenity/JS Test Runner Adapters",id:"serenityjs-test-runner-adapters",level:2},{value:"Serenity/JS Reporting Services",id:"serenityjs-reporting-services",level:2},{value:"Serenity/JS Screenplay Pattern APIs",id:"serenityjs-screenplay-pattern-apis",level:2},{value:"What Serenity/JS modules do I need?",id:"what-serenityjs-modules-do-i-need",level:2},{value:"Integration architecture summary",id:"integration-architecture-summary",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"serenityjs-architecture",children:"Serenity/JS Architecture"}),"\n",(0,n.jsxs)(r.p,{children:["Serenity/JS is a ",(0,n.jsx)(r.strong,{children:"modular"}),", ",(0,n.jsx)(r.strong,{children:"full-stack acceptance testing framework"})," based on Node.js.\nThe official Serenity/JS Node modules are distributed via ",(0,n.jsx)(r.a,{href:"https://www.npmjs.com/",children:"NPM"}),"\nunder the ",(0,n.jsxs)(r.a,{href:"https://www.npmjs.com/search?q=%40serenity-js",children:[(0,n.jsx)(r.code,{children:"@serenity-js/*"})," namespace"]}),", and you can use as many or as few of them as you need\nto improve the reporting capabilities of your test suite,\nintegrate with the various interfaces of your system under test,\nand introduce advanced code reuse patterns in your organisation."]}),"\n",(0,n.jsxs)(r.p,{children:["At the high level, Serenity/JS framework is a ",(0,n.jsx)(r.a,{href:"/api",children:(0,n.jsx)(r.strong,{children:"collection of modules"})})," where each module provides at least one of the following:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/design/screenplay-pattern",children:(0,n.jsx)(r.strong,{children:"Screenplay Pattern"})}),"-based ",(0,n.jsx)(r.strong,{children:"integration library"})," for the given interface of your system under test"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/test-runners/",children:(0,n.jsx)(r.strong,{children:"Test Runner Adapter"})})," that translates your test runner events into ",(0,n.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"Serenity/JS domain events"})," used for ",(0,n.jsx)(r.a,{href:"/handbook/reporting/",children:"reporting"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/reporting/",children:(0,n.jsx)(r.strong,{children:"Reporting Services"})})," that translate Serenity/JS domain events into test reports"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["To build a Serenity/JS-based test automation framework, you pick those Serenity/JS modules that provide the capabilities\n",(0,n.jsx)(r.strong,{children:"supporting the type of testing"})," and ",(0,n.jsx)(r.strong,{children:"reporting"})," you want to do.\nIf you wish, you can also ",(0,n.jsx)(r.strong,{children:"extend Serenity/JS"})," and create your own modules that ",(0,n.jsx)(r.a,{href:"/api/core/class/Ability",children:"wrap another low-level integration library"}),",\nor interact with an interface that the framework itself doesn't support yet!"]}),"\n",(0,n.jsx)(r.h2,{id:"serenityjs-test-runner-adapters",children:"Serenity/JS Test Runner Adapters"}),"\n",(0,n.jsxs)(r.p,{children:["Serenity/JS ",(0,n.jsx)(r.strong,{children:"Test Runner Adapters"})," are tiny reporting libraries that ",(0,n.jsx)(r.strong,{children:"attach to your test runner of choice"}),".\nThe responsibility of an adapter is to listen to the actions performed by the test runner and translate them to ",(0,n.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"Serenity/JS Domain Events"}),",\nwhich are then used for ",(0,n.jsx)(r.a,{href:"/handbook/reporting/",children:"test reporting purposes"}),"."]}),"\n",(0,n.jsx)(r.admonition,{title:"First steps with Serenity/JS",type:"tip",children:(0,n.jsx)(r.p,{children:"Setting up a Serenity/JS test runner adapter and reporting services is the first thing most developers do when introducing Serenity/JS to an existing code base."})}),"\n",(0,n.jsx)(r.p,{children:"Out of the box, Serenity/JS offers test runner adapters for the following test runners:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/api/cucumber",children:"Cucumber"})," - Serenity/JS supports ",(0,n.jsx)(r.strong,{children:"all latest major versions"})," of Cucumber.js"]}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/jasmine",children:"Jasmine"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/mocha",children:"Mocha"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/playwright-test",children:"Playwright Test"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/protractor",children:"Protractor"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/webdriverio",children:"WebdriverIO"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"serenityjs-reporting-services",children:"Serenity/JS Reporting Services"}),"\n",(0,n.jsxs)(r.p,{children:["Just like the ",(0,n.jsx)(r.a,{href:"/handbook/design/",children:"core design patterns"})," in your Serenity/JS scenarios revolve around the ",(0,n.jsx)(r.a,{href:"http://www.extremeprogramming.org/rules/metaphor.html",children:"system metaphor"}),"\nof a ",(0,n.jsx)(r.a,{href:"/handbook/design/screenplay-pattern",children:"stage performance"}),", Serenity/JS reporting services follow the metaphor of a ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Running_crew",children:(0,n.jsx)(r.em,{children:"stage crew"})}),"."]}),"\n",(0,n.jsx)(r.admonition,{title:"What if I don't follow the Screenplay Pattern yet?",type:"tip",children:(0,n.jsxs)(r.p,{children:["Serenity/JS Reporting Services rely on ",(0,n.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"domain events"})," emitted by ",(0,n.jsx)(r.a,{href:"/api/core/class/Actor",children:"actors"})," ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"and"})})," Test Runner Adapters.\nIf your test scenarios don't follow the Screenplay Pattern and have no actors yet, don't worry! Serenity/JS reports will present information gathered by the adapter\nand will start to include information provided by actors whenever you're ready to introduce them."]})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"/api/core/interface/StageCrewMember",children:(0,n.jsx)(r.code,{children:"StageCrewMembers"})})," observe the ",(0,n.jsx)(r.a,{href:"/api/core/class/Actor",children:"actors"})," on ",(0,n.jsx)(r.a,{href:"/api/core/class/Stage",children:(0,n.jsx)(r.code,{children:"Stage"})}),",\nwatch the ",(0,n.jsx)(r.a,{href:"/api/core/class/Activity",children:(0,n.jsx)(r.code,{children:"Activities"})})," they perform, and listen to the ",(0,n.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"domain events"})," emitted by their environment.\nThey use the information they gather to ",(0,n.jsx)(r.a,{href:"/api/core-events/class/ArtifactGenerated",children:"generate artifacts"}),", such as test reports,\nproduce more events to prompt other crew members to action, or perform side effects like printing to the terminal, writing files to disk, or performing network or database calls."]}),"\n",(0,n.jsxs)(r.p,{children:["Several of the Serenity/JS modules provide ",(0,n.jsx)(r.a,{href:"/api/core/interface/StageCrewMember",children:(0,n.jsx)(r.code,{children:"StageCrewMembers"})})," you can use for test reporting purposes:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/reporting/console-reporter",children:"Console Reporter"})," - writes text-based test reports to your computer terminal,"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:"Serenity BDD Reporter"})," - emits ",(0,n.jsx)(r.a,{href:"https://serenity-bdd.github.io/",children:"Serenity BDD"}),"-compatible JSON reports,\nto be archived via ",(0,n.jsx)(r.a,{href:"/handbook/reporting/artifact-archiver",children:(0,n.jsx)(r.code,{children:"ArtifactArchiver"})}),"\nand consumed by the ",(0,n.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter/#using-serenity-bdd-cli",children:"Serenity BDD CLI"}),"\nto produce HTML reports and living documentation,"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/reporting/photographer",children:"Photographer"})," - automatically captures screenshots of the web browser window used by the active actor,\nto be archived via ",(0,n.jsx)(r.a,{href:"/handbook/reporting/artifact-archiver",children:(0,n.jsx)(r.code,{children:"ArtifactArchiver"})})," and attached to ",(0,n.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:"Serenity BDD reports"})]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/reporting/artifact-archiver",children:"Artifact Archiver"})," - stores report artifacts on disk,"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/reporting/stream-reporter",children:"Stream Reporter"})," - logs any events it receives to help you with debugging."]}),"\n"]}),"\n",(0,n.jsx)(r.admonition,{title:"Creating custom reporting services",type:"tip",children:(0,n.jsxs)(r.p,{children:["Studying existing Serenity/JS reporting services will help you create your own ",(0,n.jsx)(r.a,{href:"/api/core/interface/StageCrewMember",children:(0,n.jsx)(r.code,{children:"StageCrewMembers"})})," that produce custom reports or send the results to external reporting or storage systems."]})}),"\n",(0,n.jsx)(r.h2,{id:"serenityjs-screenplay-pattern-apis",children:"Serenity/JS Screenplay Pattern APIs"}),"\n",(0,n.jsxs)(r.p,{children:["Most Serenity/JS modules offer low-level ",(0,n.jsx)(r.a,{href:"/handbook/design/screenplay-pattern",children:"Screenplay Pattern"})," APIs:\n",(0,n.jsx)(r.a,{href:"/api/core/class/Ability",children:"Abilities"}),", ",(0,n.jsx)(r.a,{href:"/api/core/class/Question",children:"Questions"})," and ",(0,n.jsx)(r.a,{href:"/api/core/class/Activity",children:"Activities"}),",\ndedicated to helping you integrate your test scenarios with the interfaces of your system under test and create elegant, business-focused test ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Domain-specific_language",children:"DSLs"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Out of the box, Serenity/JS enables integration with ",(0,n.jsx)(r.a,{href:"/handbook/web-testing/",children:"web-"}),", ",(0,n.jsx)(r.a,{href:"/handbook/mobile-testing/",children:"mobile-"}),", and ",(0,n.jsx)(r.a,{href:"/handbook/api-testing/",children:"HTTP API-based"}),"\ninterfaces and provides wrappers around battle-tested integration libraries to take care of the low-level interactions with your system."]}),"\n",(0,n.jsx)(r.p,{children:"In particular:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/api/web",children:(0,n.jsx)(r.strong,{children:"Serenity/JS Web module"})})," provides the universal web testing fa\xe7ade - a set of integration library-agnostic Screenplay Pattern APIs dedicated to web UI testing"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/api/playwright",children:(0,n.jsx)(r.strong,{children:"Serenity/JS Playwright module"})})," provides wrappers around ",(0,n.jsx)(r.a,{href:"https://playwright.dev/",children:"Microsoft Playwright"}),", to be used with the Serenity/JS Web module"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/api/protractor",children:(0,n.jsx)(r.strong,{children:"Serenity/JS Protractor module"})})," provides wrappers around ",(0,n.jsx)(r.a,{href:"https://www.protractortest.org/#/",children:"Angular Protractor"}),", to be used with the Serenity/JS Web module"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/api/webdriverio",children:(0,n.jsx)(r.strong,{children:"Serenity/JS WebdriverIO module"})})," provides wrappers around ",(0,n.jsx)(r.a,{href:"https://webdriver.io/",children:"WebdriverIO"}),", to be used with the Serenity/JS Web module"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/api/rest",children:(0,n.jsx)(r.strong,{children:"Serenity/JS REST module"})})," provides Screenplay Pattern APIs dedicated to HTTP and REST API testing, as well as wrappers around ",(0,n.jsx)(r.a,{href:"https://github.com/axios/axios",children:"Axios"})," HTTP client"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/api/local-server",children:(0,n.jsx)(r.strong,{children:"Serenity/JS Local Server"})})," provides Screenplay Pattern APIs dedicated to interacting with local HTTP servers, as well as wrappers supporting servers built with ",(0,n.jsx)(r.a,{href:"https://expressjs.com/",children:"Express"}),",\n",(0,n.jsx)(r.a,{href:"https://hapijs.com/",children:"Hapi"}),", ",(0,n.jsx)(r.a,{href:"https://koajs.com/",children:"Koa"}),", ",(0,n.jsx)(r.a,{href:"http://restify.com/",children:"Restify"}),", and raw ",(0,n.jsx)(r.a,{href:"https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/",children:"Node.js"}),".\nApart from the integration modules, the framework also offers ",(0,n.jsx)(r.a,{href:"/api/assertions",children:(0,n.jsx)(r.strong,{children:"Serenity/JS Assertions"})})," - a dedicated and interface-agnostic assertions library based on the Screenplay Pattern."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"what-serenityjs-modules-do-i-need",children:"What Serenity/JS modules do I need?"}),"\n",(0,n.jsxs)(r.p,{children:["What Serenity/JS modules you need depends on the ",(0,n.jsx)(r.strong,{children:"type of tests"})," you want to write and the ",(0,n.jsx)(r.strong,{children:"lower-level integration libraries"}),"\nyou want to use."]}),"\n",(0,n.jsxs)(r.p,{children:["For example, if you wanted to create a test suite that exercised a ",(0,n.jsx)(r.strong,{children:"REST API"})," and didn't need to touch the UI, you'd use:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/core",children:(0,n.jsx)(r.code,{children:"@serenity-js/core"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/assertions",children:(0,n.jsx)(r.code,{children:"@serenity-js/assertions"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/rest",children:(0,n.jsx)(r.code,{children:"@serenity-js/rest"})})}),"\n",(0,n.jsxs)(r.li,{children:["plus a ",(0,n.jsx)(r.a,{href:"/handbook/test-runners/",children:"test runner adapter"})," and a ",(0,n.jsx)(r.a,{href:"/handbook/reporting/",children:"reporting module"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["If you wanted to create a test suite that exercised a ",(0,n.jsx)(r.strong,{children:"web interface"}),", you'd need:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/core",children:(0,n.jsx)(r.code,{children:"@serenity-js/core"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/api/assertions",children:(0,n.jsx)(r.code,{children:"@serenity-js/assertions"})})}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/api/web",children:(0,n.jsx)(r.code,{children:"@serenity-js/web"})}),", plus a module providing wrappers for your integration library of choice, so ",(0,n.jsx)(r.a,{href:"/api/playwright",children:(0,n.jsx)(r.code,{children:"@serenity-js/playwright"})}),", ",(0,n.jsx)(r.a,{href:"/api/protractor",children:(0,n.jsx)(r.code,{children:"@serenity-js/protractor"})}),", or ",(0,n.jsx)(r.a,{href:"/api/webdriverio",children:(0,n.jsx)(r.code,{children:"@serenity-js/webdriverio"})})]}),"\n",(0,n.jsxs)(r.li,{children:["you'd also want a ",(0,n.jsx)(r.a,{href:"/handbook/test-runners/",children:"test runner adapter"})," and a ",(0,n.jsx)(r.a,{href:"/handbook/reporting/",children:"reporting module"})]}),"\n"]}),"\n",(0,n.jsxs)(r.admonition,{title:"Short on time? \u23f1\ufe0f",type:"info",children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Serenity/JS Project Templates"})," and ",(0,n.jsx)(r.strong,{children:"Serenity/JS GitPods"})," come with all the appropriate Serenity/JS modules\nand lower-level integration and test tools already configured, so you can start automating your tests straight away!"]}),(0,n.jsxs)(r.p,{children:["Learn more about faster ways to get started using ",(0,n.jsx)(r.a,{href:"/handbook/getting-started/project-templates/",children:"Serenity/JS Project Templates"}),"."]})]}),"\n",(0,n.jsx)(r.h2,{id:"integration-architecture-summary",children:"Integration architecture summary"}),"\n",(0,n.jsx)(r.p,{children:"At the high level:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/test-runners/",children:(0,n.jsx)(r.strong,{children:"Serenity/JS Test Runner Adapter"})})," attaches to your test runner and enables test reporting"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/design/screenplay-pattern/",children:(0,n.jsx)(r.strong,{children:"Serenity/JS Screenplay Pattern"})})," libraries provide an abstraction that enables your test scenarios to interact with the system under test,\nwhile being agnostic of the underlying integration tool"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/handbook/reporting/",children:(0,n.jsx)(r.strong,{children:"Serenity/JS Reporting Services"})})," combine the information provided by your test runner and any custom test automation code\nto produce test execution reports and living documentation in various formats"]}),"\n"]}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)(r.mermaid,{value:'flowchart TB\n    Developer["\ud83d\udcbb You"]\n    TestCode["Your Test Code"]\n    IntegrationLibraries["Low-Level Integration Libraries"]\n    SUT["Your System-Under-Test"]\n    TestReports["Test Execution Reports"]\n    Stage\n\n    subgraph TestRunner["Test Runner"]\n    direction TB\n    TestRunnerAdapter["Serenity/JS Test Runner Adapter"]\n    end\n\n    subgraph TestCode["Your Test Code"]\n    direction TB\n    TestScenarios["Your Test Scenarios"]\n    TestDSL["Your Custom Screenplay Pattern APIs"]\n    end\n\n    subgraph SerenityModules["Serenity/JS Modules"]\n    direction TB\n    ScreenplayPatternAPIs["Serenity/JS Screenplay Pattern APIs"]\n    end\n\n    subgraph ReportingServices["Serenity/JS Reporting Services"]\n    direction TB\n    StageCrewMember["StageCrewMember"]\n    end\n\n    Developer -- invoke --\x3e TestRunner\n\n    TestScenarios -- use --\x3e TestDSL\n    TestDSL -- use --\x3e SerenityModules\n    TestRunner -- executes --\x3e TestCode\n    TestRunnerAdapter --\x3e |emits DomainEvents| Stage\n    ScreenplayPatternAPIs --\x3e |emit DomainEvents| Stage\n    ScreenplayPatternAPIs --\x3e |wrap| IntegrationLibraries\n    IntegrationLibraries --\x3e |interact with| SUT\n    Stage --\x3e |forwards DomainEvents| ReportingServices\n    ReportingServices --\x3e |produce| TestReports'}),(0,n.jsx)("figcaption",{children:"Serenity/JS integration architecture diagram"})]})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var n=t(96540);const i={},s=n.createContext(i);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);
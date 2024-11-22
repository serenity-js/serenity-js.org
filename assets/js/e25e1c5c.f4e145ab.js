"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[6048],{39601:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(74848),s=n(28453),i=n(45645),a=n(7227);const o={sidebar_position:1},c="Cucumber",l={id:"test-runners/cucumber",title:"Cucumber",description:"Cucumber is a popular",source:"@site/src/docs/handbook/test-runners/cucumber.mdx",sourceDirName:"test-runners",slug:"/test-runners/cucumber",permalink:"/handbook/test-runners/cucumber",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/test-runners/cucumber.mdx",tags:[],version:"current",lastUpdatedAt:1732304999e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Test Runners",permalink:"/handbook/test-runners/"},next:{title:"Jasmine",permalink:"/handbook/test-runners/jasmine"}},u={},d=[{value:"Examples and Project Templates",id:"examples-and-project-templates",level:2},{value:"Using Serenity/JS reporting services",id:"using-serenityjs-reporting-services",level:2},{value:"Installing Serenity/JS test runner adapter",id:"installing-serenityjs-test-runner-adapter",level:3},{value:"Configuring Serenity/JS",id:"configuring-serenityjs",level:3},{value:"Configuring Cucumber profile",id:"configuring-cucumber-profile",level:3},{value:"Using Serenity/JS Screenplay Pattern APIs",id:"using-serenityjs-screenplay-pattern-apis",level:2},{value:"Configuring a cast of actors",id:"configuring-a-cast-of-actors",level:3},{value:"Referring to actors in test scenarios",id:"referring-to-actors-in-test-scenarios",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"cucumber",children:"Cucumber"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://github.com/cucumber/cucumber-js",children:"Cucumber"})," is a popular\n",(0,t.jsx)(r.a,{href:"https://cucumber.io/blog/collaboration/the-worlds-most-misunderstood-collaboration-tool/",children:"collaboration tool"}),"\nand a test runner capable of executing test scenarios\nwritten in ",(0,t.jsx)(r.a,{href:"https://cucumber.io/docs/guides/overview/",children:"plain language"}),"."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"In this article, you will learn:"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["How to use ",(0,t.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"}),", including the ",(0,t.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:"Serenity BDD reporter"}),", even if your test scenarios don't follow the Screenplay Pattern yet"]}),"\n",(0,t.jsxs)(r.li,{children:["How to implement Cucumber ",(0,t.jsx)(r.a,{href:"https://cucumber.io/docs/cucumber/step-definitions/?lang=javascript",children:"step definitions"})," using reusable ",(0,t.jsx)(r.a,{href:"/handbook/design/screenplay-pattern",children:"Serenity/JS Screenplay Pattern"})," APIs"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"examples-and-project-templates",children:"Examples and Project Templates"}),"\n",(0,t.jsxs)(r.p,{children:["If you'd like to dive straight into the code,\n",(0,t.jsx)(r.a,{href:"https://github.com/serenity-js",children:"Serenity/JS GitHub repository"})," provides:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/handbook/getting-started/project-templates/",children:"Serenity/JS + Cucumber project templates"}),", which are the easiest way to start with the framework"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples",children:"Examples and reference implementations"}),", demonstrating using Serenity/JS with Cucumber to write both REST API- and web-based acceptance tests"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"using-serenityjs-reporting-services",children:"Using Serenity/JS reporting services"}),"\n",(0,t.jsxs)(r.p,{children:["To use ",(0,t.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"})," in a Cucumber project, you need to:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["attach the ",(0,t.jsx)(r.a,{href:"/api/cucumber",children:(0,t.jsx)(r.code,{children:"@serenity-js/cucumber"})})," test runner adapter to Cucumber"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/api/core/function/configure",children:"configure Serenity/JS"})," to use the reporting services you want to use,\nsuch as the ",(0,t.jsx)(r.a,{href:"/handbook/reporting/console-reporter",children:(0,t.jsx)(r.code,{children:"ConsoleReporter"})}),"\nor ",(0,t.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:(0,t.jsx)(r.code,{children:"SerenityBDDReporter"})})]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{title:"Serenity/JS test runner adapters",type:"tip",children:(0,t.jsxs)(r.p,{children:["Serenity/JS test runner adapters turn internal, test runner-specific events\ninto ",(0,t.jsx)(r.a,{href:"/handbook/reporting/domain-events",children:"Serenity/JS domain events"})," that can contribute to test execution reports produced\nby ",(0,t.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"}),"."]})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsxs)(r.a,{href:"/api/cucumber",children:[(0,t.jsx)(r.code,{children:"@serenity-js/cucumber"})," module"]})," provides a set of ",(0,t.jsx)(r.a,{href:"/handbook/getting-started/architecture",children:(0,t.jsx)(r.strong,{children:"test runner adapters"})}),"\nyou can attach to ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"any version"})})," of Cucumber test runner.\nThe module detects the version of Cucumber you're using and picks the most appropriate adapter automatically."]}),"\n",(0,t.jsxs)(r.p,{children:["Integration architecture depicted below applies to invoking ",(0,t.jsx)(r.code,{children:"cucumber-js"})," command line interface directly,\nfor example for ",(0,t.jsx)(r.strong,{children:"domain-level"}),", ",(0,t.jsx)(r.a,{href:"/handbook/api-testing/",children:(0,t.jsx)(r.strong,{children:"REST/HTTP API-level"})}),",\nor ",(0,t.jsx)(r.a,{href:"/handbook/web-testing/",children:(0,t.jsx)(r.strong,{children:"web-based testing"})})," using ",(0,t.jsx)(r.a,{href:"/api/playwright",children:"Playwright"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["If you want your Cucumber scenarios to interact with ",(0,t.jsx)(r.strong,{children:"web interfaces"})," using ",(0,t.jsx)(r.a,{href:"https://www.selenium.dev/documentation/webdriver/",children:"Selenium Webdriver protocol"}),",\nor connect them to a ",(0,t.jsx)(r.a,{href:"https://www.selenium.dev/documentation/grid/",children:"Selenium Grid"}),",\nyou should use Cucumber via ",(0,t.jsx)(r.a,{href:"/handbook/test-runners/protractor",children:"Protractor"}),"\nor ",(0,t.jsx)(r.a,{href:"/handbook/test-runners/webdriverio",children:"WebdriverIO"})," instead."]}),"\n",(0,t.jsxs)("figure",{children:[(0,t.jsx)(r.mermaid,{value:'graph TB\n    DEV(["\ud83d\udcbb Developer"])\n    TR(["@cucumber/cucumber"])\n    SC(["@serenity-js/core"])\n    TRA(["@serenity-js/cucumber"])\n    CF["serenity.config.ts"]\n    R(["Serenity/JS reporting services"])\n    DEV -- invokes --\x3e TR\n    TR -- loads --\x3e CF\n    TR -- notifies --\x3e TRA\n    TRA -- notifies --\x3e SC\n    CF -- configures --\x3e SC\n    SC -- notifies --\x3e R\n\n    click R "/handbook/reporting"\n    click SC "/api/core"\n    click TRA "/api/cucumber"'}),(0,t.jsx)("figcaption",{children:"Serenity/JS + Cucumber integration architecture"})]}),"\n",(0,t.jsx)(r.h3,{id:"installing-serenityjs-test-runner-adapter",children:"Installing Serenity/JS test runner adapter"}),"\n",(0,t.jsxs)(r.p,{children:["Assuming you already have a ",(0,t.jsx)(r.a,{href:"/handbook/getting-started/installation/#creating-a-nodejs-project",children:"Node.js project"}),"\nand ",(0,t.jsx)(r.a,{href:"/handbook/getting-started/installation/",children:"Serenity/JS runtime dependencies"})," set up,\nadd the following Node modules:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/api/core",children:(0,t.jsx)(r.code,{children:"@serenity-js/core"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/api/cucumber",children:(0,t.jsx)(r.code,{children:"@serenity-js/cucumber"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/@cucumber/cucumber",children:(0,t.jsx)(r.code,{children:"@cucumber/cucumber"})})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"To do that, run the following command in your terminal:"}),"\n",(0,t.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,t.jsx)(a.A,{value:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"npm install --save-dev @serenity-js/core @serenity-js/cucumber @cucumber/cucumber\n"})})}),(0,t.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"yarn add --dev @serenity-js/core @serenity-js/cucumber @cucumber/cucumber\n"})})})]}),"\n",(0,t.jsx)(r.p,{children:"If you'd like to implement your test suite in TypeScript, also run:"}),"\n",(0,t.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,t.jsx)(a.A,{value:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"npm install --save-dev typescript ts-node @types/node\n"})})}),(0,t.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"yarn add --dev typescript ts-node @types/node\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"configuring-serenityjs",children:"Configuring Serenity/JS"}),"\n",(0,t.jsxs)(r.p,{children:["If you intend to run your Cucumber scenarios using the ",(0,t.jsx)(r.a,{href:"https://github.com/cucumber/cucumber-js/blob/main/docs/cli.md",children:"Cucumber CLI"}),",\nthe best way to configure Serenity/JS is to invoke the Serenity/JS ",(0,t.jsx)(r.a,{href:"/api/core/function/configure",children:(0,t.jsx)(r.code,{children:"configure"})})," function\nin the Cucumber ",(0,t.jsxs)(r.a,{href:"https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/hooks.md#beforeall--afterall",children:[(0,t.jsx)(r.code,{children:"BeforeAll"})," hook"]}),":"]}),"\n",(0,t.jsxs)(i.A,{groupId:"code-examples",children:[(0,t.jsx)(a.A,{value:"typescript",label:"TypeScript",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="features/support/serenity.config.ts" tab={"label":"TypeScript"}',children:"import { BeforeAll } from '@cucumber/cucumber'\nimport { configure } from '@serenity-js/core'\n\nBeforeAll(() => {\n\n    // Configure Serenity/JS\n    configure({\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            // ... any other reporting services\n        ],\n    })\n})\n"})})}),(0,t.jsx)(a.A,{value:"javascript",label:"JavaScript",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="features/support/serenity.config.js" tab={"label":"JavaScript"}',children:"const { BeforeAll } = require('@cucumber/cucumber')\nconst { configure } = require('@serenity-js/core')\n\nBeforeAll(() => {\n\n    // Configure Serenity/JS\n    configure({\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            // ... any other reporting services\n        ],\n    })\n})\n"})})})]}),"\n",(0,t.jsxs)(r.p,{children:["To learn more about installing and configuring Serenity/JS reporting services appropriate for your project,\nfollow the ",(0,t.jsx)(r.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting guide"}),"."]}),"\n",(0,t.jsx)(r.admonition,{title:"Serenity understands Cucumber",type:"tip",children:(0,t.jsxs)(r.p,{children:["Serenity understands the structure of your Cucumber ",(0,t.jsx)(r.code,{children:".feature"})," files and will augment your test execution reports\nwith feature and scenario descriptions, detailed information about Cucumber steps, and ",(0,t.jsx)(r.a,{href:"https://serenity-bdd.github.io/docs/reporting/the_serenity_reports",children:"much more"}),"!"]})}),"\n",(0,t.jsx)(r.h3,{id:"configuring-cucumber-profile",children:"Configuring Cucumber profile"}),"\n",(0,t.jsxs)(r.p,{children:["To make sure Cucumber loads your Serenity/JS configuration file and correctly interprets TypeScript (if you're using it),\ncreate a ",(0,t.jsxs)(r.a,{href:"https://github.com/cucumber/cucumber-js/blob/main/docs/profiles.md",children:[(0,t.jsx)(r.code,{children:"cucumber.yaml"})," profile"]}),":"]}),"\n",(0,t.jsxs)(i.A,{groupId:"code-examples",children:[(0,t.jsx)(a.A,{value:"typescript",label:"TypeScript",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",metastring:'title="cucumber.yaml" tab={"label":"TypeScript"}',children:"# This is a Cucumber.js profile\n# See https://github.com/cucumber/cucumber-js/blob/main/docs/profiles.md\ndefault:\n  requireModule:\n    - ts-node/register            # use TypeScript in-memory transpiler, ts-node\n  format:\n    - '@serenity-js/cucumber'     # attach Serenity/JS Cucumber adapter\n  require:\n    - ./features/**/*.steps.ts    # load step definition libraries\n    - ./features/**/*.config.ts   # load configuration files\n"})})}),(0,t.jsx)(a.A,{value:"javascript",label:"JavaScript",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",metastring:'title="cucumber.yaml" tab={"label":"JavaScript"}',children:"# This is a Cucumber.js profile\n# See https://github.com/cucumber/cucumber-js/blob/main/docs/profiles.md\ndefault:\n  format:\n    - '@serenity-js/cucumber'     # attach Serenity/JS Cucumber adapter\n  require:\n    - ./features/**/*.steps.js    # load step definition libraries\n    - ./features/**/*.config.js   # load configuration files\n"})})})]}),"\n",(0,t.jsxs)(r.p,{children:["The above configuration works with the latest version of the ",(0,t.jsx)(r.code,{children:"cucumber.Cli"})," available as part of\nthe ",(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/@cucumber/cucumber",children:(0,t.jsx)(r.code,{children:"@cucumber/cucumber"})})," module.\nConsult the ",(0,t.jsxs)(r.a,{href:"/api/cucumber",children:[(0,t.jsx)(r.code,{children:"@serenity-js/cucumber"})," documentation"]})," to learn how to configure\nthe adapter with older versions of the runner."]}),"\n",(0,t.jsx)(r.h2,{id:"using-serenityjs-screenplay-pattern-apis",children:"Using Serenity/JS Screenplay Pattern APIs"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/core/class/Actor",children:"Serenity/JS actor model"})," is a natural fit for Cucumber scenarios\nand ",(0,t.jsx)(r.a,{href:"/handbook/design/screenplay-pattern",children:"Serenity/JS Screenplay Pattern"})," APIs can help your team implement\nCucumber step definitions that are as easy to read and understand as your ",(0,t.jsx)(r.code,{children:".feature"})," files."]}),"\n",(0,t.jsxs)(r.p,{children:["The fastest way to get started with Serenity/JS and Cucumber is to use one of\nthe ",(0,t.jsx)(r.a,{href:"https://github.com/serenity-js?q=cucumber+template&type=all&language=&sort=",children:"Serenity/JS + Cucumber project templates"}),".\nHowever, if you're adding Serenity/JS to an existing project or simply want to understand how the integration works,\nthis guide is for you."]}),"\n",(0,t.jsx)(r.h3,{id:"configuring-a-cast-of-actors",children:"Configuring a cast of actors"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/handbook/design/screenplay-pattern",children:"Serenity/JS Screenplay Pattern"})," is an actor-centred model, so the first thing you\nneed to do is to tell Serenity/JS what ",(0,t.jsx)(r.a,{href:"/api/core/class/Cast",children:"cast of actors"})," you want to use."]}),"\n",(0,t.jsxs)(r.p,{children:["If you're planning to run Cucumber scenarios using the ",(0,t.jsx)(r.a,{href:"https://github.com/cucumber/cucumber-js/blob/main/docs/cli.md",children:"Cucumber CLI"})," ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.em,{children:"directly"})}),",\nyou can configure the actors in a ",(0,t.jsx)(r.a,{href:"https://cucumber.io/docs/cucumber/api/?lang=javascript#beforeall",children:(0,t.jsx)(r.code,{children:"BeforeAll"})})," hook, for example:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",metastring:'title="features/support/serenity.config.ts"',children:"import { BeforeAll, AfterAll } from '@cucumber/cucumber'\nimport { configure, Cast } from '@serenity-js/core'\nimport { BrowseTheWebWithPlaywright } from '@serenity-js/playwright'\n\nimport * as playwright from 'playwright'\n\nlet browser: playwright.Browser;\n\nBeforeAll(async () => {\n\n    // Launch the browser once before all the tests\n    // Serenity/JS will take care of managing Playwright browser context and browser tabs.\n    browser = await playwright.chromium.launch({\n        headless: true,\n    });\n\n    // Configure Serenity/JS\n    configure({\n        actors: Cast.where(actor =>\n            actor.whoCan(BrowseTheWebWithPlaywright.using(browser, {\n                baseURL: 'https://todo-app.serenity-js.org/',\n            }))\n        ),\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            // ... any other reporting services\n        ],\n    })\n})\n\nAfterAll(async () => {\n    // Close the browser after all the tests are finished\n    await browser?.close()\n})\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Consult the respective test runner instructions if you're invoking Cucumber ",(0,t.jsx)(r.em,{children:(0,t.jsx)(r.strong,{children:"indirectly"})}),",\nso via ",(0,t.jsx)(r.a,{href:"/handbook/test-runners/protractor",children:"Protractor"})," or ",(0,t.jsx)(r.a,{href:"/handbook/test-runners/webdriverio",children:"WebdriverIO"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"referring-to-actors-in-test-scenarios",children:"Referring to actors in test scenarios"}),"\n",(0,t.jsxs)(r.p,{children:["When using ",(0,t.jsx)(r.a,{href:"/api/core/class/Actor",children:"Serenity/JS actors"})," to represent user personas or important external systems\ninteracting with the system under test, a common strategy is to refer to them in your Cucumber scenarios using their name and pronouns :"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-gherkin",metastring:'title="features/todo_list.feature"',children:"Feature: Todo list\n\n  Scenario: Starting fresh\n\n    When Alice opens the todo app for the first time\n    Then her todo list should be empty\n"})}),"\n",(0,t.jsxs)(r.p,{children:["To make Cucumber understand that ",(0,t.jsx)(r.code,{children:"Alice"})," is a name of an actor, and that ",(0,t.jsx)(r.code,{children:"her"})," means the most recent actor we accessed,\nyou need to define custom ",(0,t.jsx)(r.a,{href:"https://github.com/cucumber/cucumber-expressions",children:"parameter types"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["All the ",(0,t.jsx)(r.a,{href:"https://github.com/serenity-js?q=cucumber+template&type=all&language=&sort=",children:"Serenity/JS + Cucumber Project Templates"}),"\nuse the below definitions, which use ",(0,t.jsx)(r.a,{href:"/api/core/function/actorCalled",children:(0,t.jsx)(r.code,{children:"actorCalled"})})," and ",(0,t.jsx)(r.a,{href:"/api/core/function/actorInTheSpotlight",children:(0,t.jsx)(r.code,{children:"actorInTheSpotlight"})}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",metastring:'title="features/step_definitions/parameter.steps.ts"',children:"import { defineParameterType } from '@cucumber/cucumber'\nimport { actorCalled, actorInTheSpotlight } from '@serenity-js/core'\n\ndefineParameterType({\n    regexp: /[A-Z][a-z]+/,\n    transformer(name: string) {\n        return actorCalled(name)\n    },\n    name: 'actor',\n})\n\ndefineParameterType({\n    regexp: /he|she|they|his|her|their/,\n    transformer() {\n        return actorInTheSpotlight()\n    },\n    name: 'pronoun',\n})\n"})}),"\n",(0,t.jsxs)(r.p,{children:["With ",(0,t.jsx)(r.code,{children:"actor"})," and ",(0,t.jsx)(r.code,{children:"pronoun"})," parameter types defined,\nyou can refer to them in ",(0,t.jsx)(r.a,{href:"https://github.com/serenity-js?q=cucumber&type=all&language=&sort=",children:"Cucumber expressions"}),"\ndescribing your ",(0,t.jsx)(r.a,{href:"https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/step_definitions.md",children:"Cucumber steps definitions"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",metastring:'title="features/step_definitions/todo-list.steps.ts"',children:"import { When, Then } from '@cucumber/cucumber'\nimport { Ensure, equals } from '@serenity-js/assertions'\nimport { Actor } from '@serenity-js/core'\nimport { Navigate, PageElements, By } from '@serenity-js/web'\n\nWhen('{actor} opens the todo app for the first time', async (actor: Actor) => {\n    await actor.attemptsTo(\n        Navigate.to('https://todo-app.serenity-js.org/')\n    )\n})\n\nThen('{pronoun} todo list should be empty', async (actor: Actor) => {\n    const displayedItems = () =>\n        PageElements.located(By.css('.todo-list li'))\n            .describedAs('displayed items')\n\n    await actor.attemptsTo(\n        Ensure.that(displayedItems().count(), equals(0))\n    )\n})\n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},7227:(e,r,n)=>{n.d(r,{A:()=>a});n(96540);var t=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:r,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:n,children:r})}},45645:(e,r,n)=>{n.d(r,{A:()=>p});var t=n(96540),s=n(34164),i=n(24245),a=n(8626),o=n(11062);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var l=n(74848);function u(e){let{className:r,block:n,selectedValue:t,selectValue:a,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),h=e=>{const r=e.currentTarget,n=u.indexOf(r),s=o[n].value;s!==t&&(d(r),a(s))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;r=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;r=u[n]??u[u.length-1];break}}r?.focus()};return(0,l.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},r),children:o.map((e=>{let{value:r,label:n,attributes:i}=e;return(0,l.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>u.push(e),onKeyDown:p,onClick:h,...i,className:(0,s.A)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function d(e){let{lazy:r,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,l.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function h(e){const r=(0,a.u)(e);return(0,l.jsxs)("div",{className:(0,s.A)("tabs-container",c.tabList),children:[(0,l.jsx)(u,{...r,...e}),(0,l.jsx)(d,{...r,...e})]})}function p(e){const r=(0,o.A)();return(0,l.jsx)(h,{...e,children:(0,a.v)(e.children)},String(r))}},8626:(e,r,n)=>{n.d(r,{u:()=>p,v:()=>l});var t=n(96540),s=n(56347),i=n(36494),a=n(62814),o=n(45167),c=n(69900);function l(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return l(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function d(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:n}=e;const i=(0,s.W6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,a.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(i.location.search);r.set(o,e),i.replace({...i.location,search:r.toString()})}),[o,i])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,a=u(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[p,m]=h({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,i]=(0,c.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),g=(()=>{const e=p??f;return d({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),b(e)}),[m,b,a]),tabValues:a}}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var t=n(96540);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);
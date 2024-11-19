(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[8996],{51927:(e,t,r)=>{e.exports={src:{srcSet:r.p+"assets/ideal-img/serenity-js-playwright-test-report.e96896e.1982.png 1982w",images:[{path:r.p+"assets/ideal-img/serenity-js-playwright-test-report.e96896e.1982.png",width:1982,height:2208}],src:r.p+"assets/ideal-img/serenity-js-playwright-test-report.e96896e.1982.png",toString:function(){return r.p+"assets/ideal-img/serenity-js-playwright-test-report.e96896e.1982.png"},placeholder:void 0,width:1982,height:2208},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAABYlAAAWJQFJUiTwAAABDklEQVR4nE2QS04CURBF3xK637fepxpsBzpypTpVd4EBJsKQLbAagRzTDUErOblJpT6514hkYhSs9TgX6K3D+0BKcmeaMePTC8uHkdYaOgyzWuvo+/6GpbcWk9oDLmasT3d8FHzMfwTB5NKIUnFBcCHd9Ir/h5GiVF2SdUmbtCipNIKU+8UkFRNzowyPDI/PLMYndBgpi5GgSsjTgpKyYnzw6KBXI6qUWim1zU6dczMxJUyShKpSa6PWOjMN51IQEUIIJBFMTGV22nWOzgY6F+isp+s9vQv3BMzr2xv7/Z7NZst69cV6tWKz3bL73vH+8YkPcc7VHA4Hpjqfz5x+fjifTlwul7l3PB7n11Pwv55Prl/JIbjbAAAAAElFTkSuQmCC"}},851:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(74848),s=r(28453),i=r(45645),a=r(7227);const o={sidebar_position:4},l="Playwright Test",c={id:"test-runners/playwright-test",title:"Playwright Test",description:"Playwright Test is a test runner designed specifically to accommodate the needs",source:"@site/src/docs/handbook/test-runners/playwright-test.mdx",sourceDirName:"test-runners",slug:"/test-runners/playwright-test",permalink:"/handbook/test-runners/playwright-test",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/test-runners/playwright-test.mdx",tags:[],version:"current",lastUpdatedAt:1731609349e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Mocha",permalink:"/handbook/test-runners/mocha"},next:{title:"Protractor",permalink:"/handbook/test-runners/protractor"}},h={},d=[{value:"Examples and Project Templates",id:"examples-and-project-templates",level:2},{value:"Using Serenity/JS reporting services",id:"using-serenityjs-reporting-services",level:2},{value:"Installing Serenity/JS Playwright and Playwright Test modules",id:"installing-serenityjs-playwright-and-playwright-test-modules",level:3},{value:"Configuring Serenity/JS",id:"configuring-serenityjs",level:3},{value:"Defining Playwright Test scenarios",id:"defining-playwright-test-scenarios",level:3},{value:"Using Serenity/JS Screenplay Pattern APIs",id:"using-serenityjs-screenplay-pattern-apis",level:2},{value:"Referring to actors in test scenarios",id:"referring-to-actors-in-test-scenarios",level:3},{value:"Configuring a custom cast of actors",id:"configuring-a-custom-cast-of-actors",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Figure:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Figure",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"playwright-test",children:"Playwright Test"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://playwright.dev/docs/intro",children:"Playwright Test"})," is a test runner designed specifically to accommodate the needs\nof browser-based end-to-end test automation using ",(0,n.jsx)(t.a,{href:"https://playwright.dev/",children:"Playwright"})," integration library."]}),"\n",(0,n.jsx)(t.p,{children:"Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.\nIt also lets you execute test scenarios on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari."}),"\n",(0,n.jsx)(t.admonition,{title:"Extending existing Playwright Test suites",type:"tip",children:(0,n.jsxs)(t.p,{children:["If you want to add Serenity/JS to an existing Playwright Test suite, check out\n",(0,n.jsx)(t.a,{href:"/handbook/getting-started/serenity-js-with-playwright-test/",children:"Extending Playwright Test with Serenity/JS"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"In this article, you will learn:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["How to use ",(0,n.jsx)(t.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"}),", including the ",(0,n.jsx)(t.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:"Serenity BDD reporter"}),", even if your test scenarios don't follow the Screenplay Pattern yet"]}),"\n",(0,n.jsxs)(t.li,{children:["How to implement Playwright Test scenarios using reusable ",(0,n.jsx)(t.a,{href:"/handbook/design/screenplay-pattern",children:"Serenity/JS Screenplay Pattern"})," APIs and the ",(0,n.jsx)(t.a,{href:"/api/playwright",children:"Serenity/JS Playwright module"})]}),"\n",(0,n.jsxs)(t.li,{children:["How to augment native Playwright Test HTML reports with information gathered by your ",(0,n.jsx)(t.a,{href:"/api/core/class/Actor",children:"Serenity/JS actors"})]}),"\n"]}),"\n",(0,n.jsx)(o,{caption:"Native Playwright Test HTML report, augmented with information from Serenity/JS Screenplay Pattern APIs, as well as automated screenshots captured by the Photographer",img:r(51927)}),"\n",(0,n.jsx)(t.h2,{id:"examples-and-project-templates",children:"Examples and Project Templates"}),"\n",(0,n.jsxs)(t.p,{children:["If you'd like to dive straight into the code, ",(0,n.jsx)(t.a,{href:"https://github.com/serenity-js",children:"Serenity/JS GitHub repository"})," provides:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/serenity-js?q=playwright+template&type=all&language=&sort=",children:"Serenity/JS + Playwright project templates"}),", which are the easiest way to start with the framework,"]}),"\n",(0,n.jsxs)(t.li,{children:["several ",(0,n.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples",children:"reference implementations"}),", demonstrating using Serenity/JS with Playwright and Playwright Test to write web-based acceptance tests"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"using-serenityjs-reporting-services",children:"Using Serenity/JS reporting services"}),"\n",(0,n.jsxs)(t.p,{children:["To use ",(0,n.jsx)(t.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"})," in a Playwright Test project, you need to:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["use ",(0,n.jsx)(t.code,{children:"playwright.config.ts"})," to ",(0,n.jsx)(t.a,{href:"/api/playwright-test/interface/SerenityOptions",children:"configure Serenity/JS"})," to use the reporting services you want to use,\nsuch as the ",(0,n.jsx)(t.a,{href:"/handbook/reporting/console-reporter",children:(0,n.jsx)(t.code,{children:"ConsoleReporter"})}),"\nor ",(0,n.jsx)(t.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:(0,n.jsx)(t.code,{children:"SerenityBDDReporter"})})]}),"\n",(0,n.jsxs)(t.li,{children:["optionally, use Serenity/JS Playwright Test ",(0,n.jsx)(t.a,{href:"/api/playwright-test/function/describe",children:(0,n.jsx)(t.code,{children:"describe"})})," and ",(0,n.jsx)(t.a,{href:"/api/playwright-test/function/it",children:(0,n.jsx)(t.code,{children:"it"})})," functions\nto define your test scenarios and inject ",(0,n.jsx)(t.a,{href:"/api/core/class/Actor",children:"Serenity/JS actors"})]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Serenity/JS test runner adapters",type:"tip",children:(0,n.jsxs)(t.p,{children:["Serenity/JS test runner adapters turn internal, test runner-specific events\ninto ",(0,n.jsx)(t.a,{href:"/handbook/reporting/domain-events",children:"Serenity/JS domain events"})," that can contribute to test execution reports produced\nby ",(0,n.jsx)(t.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.a,{href:"/api/playwright-test",children:[(0,n.jsx)(t.code,{children:"@serenity-js/playwright-test"})," module"]})," provides a ",(0,n.jsx)(t.a,{href:"/handbook/getting-started/architecture",children:(0,n.jsx)(t.strong,{children:"test runner adapter"})}),"\nyou can attach to your Playwright Test runner just like any other standard ",(0,n.jsx)(t.a,{href:"https://playwright.dev/docs/test-reporters",children:"Playwright Test reporter"}),"."]}),"\n",(0,n.jsxs)("figure",{children:[(0,n.jsx)(t.mermaid,{value:'graph TB\n    DEV(["\ud83d\udcbb Developer"])\n    TR(["playwright test"])\n    TS(["Playwright Test scenarios"])\n    SC(["@serenity-js/core"])\n    PTAPI(["@serenity-js/playwright-test"])\n    CF["playwright.config.ts"]\n    R(["Serenity/JS reporting services"])\n\n    DEV -- invokes --\x3e TR\n    TR -- runs --\x3e TS\n    TS -- use --\x3e PTAPI\n    TR -- loads --\x3e CF\n    PTAPI -- notifies --\x3e SC\n    CF -- configures --\x3e SC\n    SC -- notifies --\x3e R\n\n    click R "/handbook/reporting"\n    click SC "/api/core"\n    click TRA "/api/mocha"'}),(0,n.jsx)("figcaption",{children:"Serenity/JS + Playwright Test integration architecture"})]}),"\n",(0,n.jsx)(t.h3,{id:"installing-serenityjs-playwright-and-playwright-test-modules",children:"Installing Serenity/JS Playwright and Playwright Test modules"}),"\n",(0,n.jsxs)(t.p,{children:["Follow ",(0,n.jsx)(t.a,{href:"https://playwright.dev/docs/intro#installing-playwright",children:"Playwright Test installation instructions"}),"\nto create a new Playwright Test project:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"npm init playwright@latest\n\nGetting started with writing end-to-end tests with Playwright:\nInitializing project in '.'\n\u2714 Do you want to use TypeScript or JavaScript? \xb7 TypeScript\n\u2714 Where to put your end-to-end tests? \xb7 tests\n\u2714 Add a GitHub Actions workflow? (y/N) \xb7 false\n\u2714 Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) \xb7 true\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Use TypeScript to get the most out of your development tools",type:"tip",children:(0,n.jsxs)(t.p,{children:["Playwright Test installation wizard will ask you whether you want to use TypeScript or JavaScript\nto implement your test scenarios.\nChoosing TypeScript offers improved tooling support in IDEs such\nas ",(0,n.jsx)(t.a,{href:"/handbook/integration/jetbrains-idea",children:"JetBrains"})," and ",(0,n.jsx)(t.a,{href:"/handbook/integration/visual-studio-code",children:"Visual Studio Code"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"Next, add Serenity/JS Playwright and web integration modules:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/api/core",children:(0,n.jsx)(t.code,{children:"@serenity-js/core"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/api/playwright",children:(0,n.jsx)(t.code,{children:"@serenity-js/playwright"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/api/playwright-test",children:(0,n.jsx)(t.code,{children:"@serenity-js/playwright-test"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/api/web",children:(0,n.jsx)(t.code,{children:"@serenity-js/web"})})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You might also want to install Serenity/JS reporting services, to accompany your native Playwright Test reports:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/api/console-reporter",children:(0,n.jsx)(t.code,{children:"@serenity-js/console-reporter"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/api/serenity-bdd",children:(0,n.jsx)(t.code,{children:"@serenity-js/serenity-bdd"})})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"To do the above, run the following command in your terminal:"}),"\n",(0,n.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,n.jsx)(a.A,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"npm install --save-dev @serenity-js/core @serenity-js/console-reporter @serenity-js/playwright @serenity-js/playwright-test @serenity-js/web @serenity-js/serenity-bdd\n"})})}),(0,n.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"yarn add --dev @serenity-js/core @serenity-js/console-reporter @serenity-js/playwright @serenity-js/playwright-test @serenity-js/web @serenity-js/serenity-bdd\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"configuring-serenityjs",children:"Configuring Serenity/JS"}),"\n",(0,n.jsxs)(t.p,{children:["To use ",(0,n.jsx)(t.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"}),", list them under ",(0,n.jsx)(t.code,{children:"crew"})," in\nyour ",(0,n.jsx)(t.code,{children:"playwright.config.ts"}),", alongside any other native Playwright Test reporters you might want to use:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",metastring:'title="playwright.config.ts"',children:"import type { PlaywrightTestConfig } from '@playwright/test'\n\nconst config: PlaywrightTestConfig = {\n    reporter: [\n        [ '@serenity-js/playwright-test', {\n            crew: [\n                '@serenity-js/console-reporter',\n                '@serenity-js/serenity-bdd',\n                [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            ]\n        }],\n\n        // other native Playwright Test reporters\n        [ 'html', { open: 'never' } ],          // built-in Playwright HTML reporter\n    ],\n\n    // Other configuration omitted for brevity\n    // For details, see https://playwright.dev/docs/test-configuration\n}\n\nexport default config\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Learn more about configuring ",(0,n.jsx)(t.a,{href:"/api/playwright-test",children:"Serenity/JS Playwright Test reporter"})," and ",(0,n.jsx)(t.a,{href:"/handbook/reporting/",children:"Serenity/JS reporting services"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"defining-playwright-test-scenarios",children:"Defining Playwright Test scenarios"}),"\n",(0,n.jsxs)(t.p,{children:["When Serenity/JS reports on Playwright Test scenarios, it assumes you're following a common convention\nwhere the outermost ",(0,n.jsxs)(t.a,{href:"/api/playwright-test/function/describe",children:[(0,n.jsx)(t.code,{children:"describe"})," block"]})," describes the name of the feature or component under test,\nand any nested ",(0,n.jsx)(t.code,{children:"describe"})," blocks contribute to the name of the test scenario."]}),"\n",(0,n.jsx)(t.p,{children:"For example, Serenity/JS will report the below scenario as:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["feature: ",(0,n.jsx)(t.code,{children:"Todo List App"})]}),"\n",(0,n.jsxs)(t.li,{children:["scenario: ",(0,n.jsx)(t.code,{children:"when the user is a guest their list is empty"})]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { describe, it } from '@playwright/test'\n\ndescribe('Todo List App', () => {                     // - feature or component name\n\n    describe('when the user is', () => {              // - one or more nested `describe` blocks\n        describe('a guest', () => {                   //   to group scenarios\n            describe('their list', () => {            //   by context in which they apply\n\n                it('is empty', async ({ actor }) => { // - expected behaviour of the feature or component\n\n                })\n            })\n        })\n    })\n})\n"})}),"\n",(0,n.jsx)(t.admonition,{title:"Feature coverage",type:"tip",children:(0,n.jsxs)(t.p,{children:["Using the same name for the outermost ",(0,n.jsx)(t.code,{children:"describe"}),' block in several different spec files makes\nSerenity BDD associate the different test scenarios with the same logical "feature" or "component"\nand produce ',(0,n.jsx)(t.a,{href:"https://serenity-bdd.github.io/docs/reporting/the_serenity_reports",children:"feature coverage metrics"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"using-serenityjs-screenplay-pattern-apis",children:"Using Serenity/JS Screenplay Pattern APIs"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/core/class/Actor",children:"Serenity/JS actor model"})," works great with Playwright Test\nand ",(0,n.jsx)(t.a,{href:"/handbook/design/screenplay-pattern",children:"Serenity/JS Screenplay Pattern"})," APIs can help your team implement\nPlaywright Test scenarios that are easy to read and understand."]}),"\n",(0,n.jsxs)(t.p,{children:["The fastest way to get started with Serenity/JS and Playwright Test is to use one of\nthe ",(0,n.jsx)(t.a,{href:"https://github.com/serenity-js?q=playwright+test+template&type=all&language=&sort=",children:"Serenity/JS + Playwright Test project templates"}),".\nHowever, if you're adding Serenity/JS to an existing project or simply want to understand how the integration works,\nthis guide is for you."]}),"\n",(0,n.jsx)(t.h3,{id:"referring-to-actors-in-test-scenarios",children:"Referring to actors in test scenarios"}),"\n",(0,n.jsxs)(t.p,{children:["To start using ",(0,n.jsx)(t.a,{href:"/handbook/design/screenplay-pattern",children:"Serenity/JS Screenplay Pattern"})," APIs in your Playwright Test scenarios,\ndefine your test scenarios using the ",(0,n.jsx)(t.a,{href:"/api/playwright-test/function/describe",children:(0,n.jsx)(t.code,{children:"describe"})})," and ",(0,n.jsx)(t.a,{href:"/api/playwright-test/function/it",children:(0,n.jsx)(t.code,{children:"it"})})," functions\nfrom ",(0,n.jsx)(t.code,{children:"@serenity-js/playwright-test"})," instead of ",(0,n.jsx)(t.code,{children:"@playwright/test"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:"- import { describe, it, test } from '@playwright/test'\n+ import { describe, it, test } from '@serenity-js/playwright-test'\n"})}),"\n",(0,n.jsx)(t.p,{children:"That's it!"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/playwright-test",children:"Serenity/JS Playwright Test"})," module provides ",(0,n.jsx)(t.a,{href:"https://playwright.dev/docs/test-fixtures",children:"Playwright fixtures"}),"\nthat automatically configure all the actors injected\nvia ",(0,n.jsx)(t.a,{href:"/api/playwright-test/interface/SerenityFixtures#actor",children:(0,n.jsx)(t.code,{children:"actor"})})," and\n",(0,n.jsx)(t.a,{href:"/api/playwright-test/interface/SerenityFixtures#actorCalled",children:(0,n.jsx)(t.code,{children:"actorCalled"})}),"\nwith abilities to ",(0,n.jsx)(t.a,{href:"/api/playwright/class/BrowseTheWebWithPlaywright",children:(0,n.jsx)(t.code,{children:"BrowseTheWebWithPlaywright"})}),"\nand ",(0,n.jsx)(t.a,{href:"/api/core/class/TakeNotes",children:(0,n.jsx)(t.code,{children:"TakeNotes"})}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { describe, it } from '@serenity-js/playwright-test'\nimport { Navigate, PageElements, By } from '@serenity-js/web'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\ndescribe('Todo List', () => {                                   // - feature or component name\n\n    const displayedItems = () =>\n        PageElements.located(By.css('.todo-list li'))\n            .describedAs('displayed items')\n\n    describe('when the user is', () => {                        // - one or more nested `describe` blocks\n        describe('a guest', () => {                             //   to group scenarios\n            describe('their list', () => {                      //   by context in which they apply\n\n\n                it('is empty', async ({ actor }) => {           // - verify expected behaviour\n                    await actor.attemptsTo(                     //   using a default `actor`\n                        Navigate.to('https://todo-app.serenity-js.org/'),\n                        Ensure.that(displayedItems().count(), equals(0))\n                    )\n                })\n            })\n        })\n    })\n})\n"})}),"\n",(0,n.jsx)(t.h3,{id:"configuring-a-custom-cast-of-actors",children:"Configuring a custom cast of actors"}),"\n",(0,n.jsxs)(t.p,{children:["If you'd like to change the default settings, you can override the ",(0,n.jsx)(t.a,{href:"/api/playwright-test/interface/SerenityOptions",children:"relevant configuration options"}),"\neither in ",(0,n.jsx)(t.code,{children:"playwright.config.ts"}),", or in your test file, depending on the type of override you want to make."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, you can change the name given to the default actor and register a ",(0,n.jsx)(t.a,{href:"/api/web/class/Photographer",children:(0,n.jsx)(t.code,{children:"Photographer"})})," service\nin ",(0,n.jsx)(t.code,{children:"playwright.config.ts"})," (note the ",(0,n.jsx)(t.a,{href:"/api/playwright-test#PlaywrightTestConfig",children:(0,n.jsx)(t.code,{children:"PlaywrightTestConfig"})})," import from ",(0,n.jsx)(t.code,{children:"@serenity-js/playwright-test"})," instead of the default ",(0,n.jsx)(t.code,{children:"@playwright/test"}),"):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",metastring:'title="playwright.config.ts"',children:"import type { PlaywrightTestConfig } from '@serenity-js/playwright-test'\n\nconst config: PlaywrightTestConfig = {\n    use: {\n        defaultActorName: 'Tess',\n        crew: [\n            // [ '@serenity-js/web:Photographer', { strategy: 'TakePhotosOfFailures' } ]\n            [ '@serenity-js/web:Photographer', { strategy: 'TakePhotosOfInteractions' } ]\n        ],\n    },\n\n    reporter: [\n        [ '@serenity-js/playwright-test', {\n            crew: [\n                '@serenity-js/console-reporter',\n                '@serenity-js/serenity-bdd',\n                [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            ]\n        }],\n    ],\n}\n\nexport default config\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If you'd like to use a custom ",(0,n.jsx)(t.a,{href:"/api/core/class/Cast",children:(0,n.jsx)(t.code,{children:"Cast"})})," of actors instead of the default one,\nyou'll need to do that in a spec file as the ability to ",(0,n.jsx)(t.a,{href:"/api/playwright/class/BrowseTheWebWithPlaywright",children:(0,n.jsx)(t.code,{children:"BrowseTheWebWithPlaywright"})})," requires access\nto Playwright ",(0,n.jsx)(t.code,{children:"browser"})," object, which the config file doesn't offer."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, you could define a custom ",(0,n.jsx)(t.code,{children:"Cast"})," where each actor gets their own browser,\nbut they share their ",(0,n.jsx)(t.a,{href:"/api/core/function/notes",children:"notes"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { describe, it, test } from '@serenity-js/playwright-test'\nimport { Cast, Notepad, TakeNotes, notes } from '@serenity-js/core'\nimport { BrowseTheWebWithPlaywright } from '@serenity-js/playwright'\nimport { Navigate, PageElements, By } from '@serenity-js/web'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\ninterface SharedNotes {\n    numberOfItemsThatAliceSaw: number\n}\n\ntest.use({\n    actors: async ({ browser, contextOptions }, use) => {\n        const sharedNotepad = Notepad.empty<SharedNotes>();\n\n        const cast = Cast.where(actor => actor.whoCan(\n            BrowseTheWebWithPlaywright.using(browser, {\n                ...contextOptions,\n                userAgent: `${ actor.name }`\n            }),\n            TakeNotes.using(sharedNotepad),\n        ))\n\n        await use(cast)\n    },\n})\n\ndescribe('Todo List App', () => {\n\n    const displayedItems = () =>\n        PageElements.located(By.css('.todo-list li'))\n            .describedAs('displayed items')\n\n    it('support multiple users', async ({ actorCalled }) => {\n        // Alice and Bob use separate browser windows\n        await actorCalled('Alice').attemptsTo(\n            Navigate.to('https://todo-app.serenity-js.org/'),\n            notes<SharedNotes>().set('numberOfItemsThatAliceSaw', displayedItems().count())\n        )\n\n        // Bob doesn't have access to the browser that Alice uses,\n        // but he can access their shared notepad\n        await actorCalled('Bob').attemptsTo(\n            Ensure.that(notes<SharedNotes>().get('numberOfItemsThatAliceSaw'), equals(0)),\n        )\n    })\n})\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},7227:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},45645:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var n=r(96540),s=r(34164),i=r(24245),a=r(8626),o=r(11062);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=r(74848);function h(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:o}=e;const h=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),p=e=>{const t=e.currentTarget,r=h.indexOf(t),s=o[r].value;s!==n&&(d(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=h.indexOf(e.currentTarget)+1;t=h[r]??h[0];break}case"ArrowLeft":{const r=h.indexOf(e.currentTarget)-1;t=h[r]??h[h.length-1];break}}t?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>h.push(e),onKeyDown:u,onClick:p,...i,className:(0,s.A)("tabs__item",l.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function d(e){let{lazy:t,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function p(e){const t=(0,a.u)(e);return(0,c.jsxs)("div",{className:(0,s.A)("tabs-container",l.tabList),children:[(0,c.jsx)(h,{...t,...e}),(0,c.jsx)(d,{...t,...e})]})}function u(e){const t=(0,o.A)();return(0,c.jsx)(p,{...e,children:(0,a.v)(e.children)},String(t))}},8626:(e,t,r)=>{"use strict";r.d(t,{u:()=>u,v:()=>c});var n=r(96540),s=r(56347),i=r(36494),a=r(62814),o=r(45167),l=r(69900);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const i=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function u(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[o,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,y]=p({queryString:r,groupId:s}),[g,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,l.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),j=(()=>{const e=u??g;return d({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),y(e),f(e)}),[y,f,a]),tabValues:a}}},28453:(e,t,r)=>{"use strict";r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
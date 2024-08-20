"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[228],{32748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=n(74848),r=n(28453),a=n(45645),i=n(7227);const o={sidebar_position:2,title:"Configuring the HTTP client"},l="Configuring the HTTP client",c={id:"api-testing/configuring-http-client",title:"Configuring the HTTP client",description:"To interact with an HTTP-based API, your Serenity/JS actor",source:"@site/src/docs/handbook/api-testing/configuring-http-client.mdx",sourceDirName:"api-testing",slug:"/api-testing/configuring-http-client",permalink:"/handbook/api-testing/configuring-http-client",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/api-testing/configuring-http-client.mdx",tags:[],version:"current",lastUpdatedAt:1724195066e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Configuring the HTTP client"},sidebar:"docs",previous:{title:"Your first API scenario",permalink:"/handbook/api-testing/your-first-api-scenario"},next:{title:"Sending requests",permalink:"/handbook/api-testing/sending-requests"}},p={},u=[{value:"Configuring API-only test scenarios",id:"configuring-api-only-test-scenarios",level:2},{value:"Configuring blended test scenarios",id:"configuring-blended-test-scenarios",level:2},{value:"Dynamically configuring the base URL",id:"dynamically-configuring-the-base-url",level:2},{value:"Dynamically overriding abilities",id:"dynamically-overriding-abilities",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"configuring-the-http-client",children:"Configuring the HTTP client"}),"\n",(0,s.jsxs)(t.p,{children:["To interact with an HTTP-based API, your Serenity/JS ",(0,s.jsx)(t.a,{href:"/handbook/design/screenplay-pattern/#actors",children:"actor"}),"\nneeds the ",(0,s.jsx)(t.a,{href:"/handbook/design/screenplay-pattern/#abilities",children:"ability"}),"\nto ",(0,s.jsx)(t.a,{href:"/api/rest/class/CallAnApi/",children:"CallAnApi"}),", which wraps the Axios HTTP client enabling the low-level interactions."]}),"\n",(0,s.jsxs)(t.p,{children:["In addition to wrapping the Axios client, the ability to ",(0,s.jsx)(t.code,{children:"CallAnApi"})," also adds automatic proxy server support based\non your ",(0,s.jsx)(t.a,{href:"/api/rest/class/CallAnApi/",children:"environment variables or configuration"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"configuring-api-only-test-scenarios",children:"Configuring API-only test scenarios"}),"\n",(0,s.jsxs)(t.p,{children:["You can integrate Serenity/JS directly with ",(0,s.jsx)(t.a,{href:"/handbook/test-runners/cucumber/",children:"Cucumber"}),", ",(0,s.jsx)(t.a,{href:"/handbook/test-runners/mocha/",children:"Mocha"}),",\nor ",(0,s.jsx)(t.a,{href:"/handbook/test-runners/jasmine/",children:"Jasmine"})," to write API-only test scenarios without the overhead of managing a web browser.\nIn those cases, you should add the ability to ",(0,s.jsx)(t.code,{children:"CallAnApi"})," yourself when ",(0,s.jsx)(t.a,{href:"/api/core/class/Cast/",children:"configuring the cast of actors"}),":"]}),"\n",(0,s.jsxs)(a.A,{groupId:"code-examples",children:[(0,s.jsx)(i.A,{value:"mocha-(api-only)",label:"Mocha (API-only)",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="spec/example.spec.ts" tab={"label":"Mocha (API-only)"}',children:"import { before, describe, it } from 'mocha'\nimport { engage, Cast } from '@serenity-js/core'\nimport { CallAnApi } from '@serenity-js/rest'\n\ndescribe('GitHub Status API v2', () => {\n\n    before(async () => {\n        engage(Cast.where(actor => actor.whoCan(\n            CallAnApi.at('https://www.githubstatus.com/api/v2/')\n        )))\n    })\n})\n"})})}),(0,s.jsx)(i.A,{value:"jasmine-(api-only)",label:"Jasmine (API-only)",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="spec/example.spec.ts" tab={"label":"Jasmine (API-only)"}',children:"import 'jasmine';\nimport { engage, Cast } from '@serenity-js/core'\nimport { CallAnApi } from '@serenity-js/rest'\n\ndescribe('GitHub Status API v2', () => {\n\n    beforeAll(async () => {\n        engage(Cast.where(actor => actor.whoCan(\n            CallAnApi.at('https://www.githubstatus.com/api/v2/')\n        )))\n    })\n})\n"})})}),(0,s.jsx)(i.A,{value:"cucumber-(api-only)",label:"Cucumber (API-only)",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="features/support/serenity.config.ts" tab={"label":"Cucumber (API-only)"}',children:"import { BeforeAll } from '@cucumber/cucumber'\nimport { engage, Cast } from '@serenity-js/core'\nimport { CallAnApi } from '@serenity-js/rest'\n\nBeforeAll(async () => {\n\n    engage(Cast.where(actor => actor.whoCan(\n        CallAnApi.at('https://www.githubstatus.com/api/v2/')\n    )))\n})\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:["Make sure to review the ",(0,s.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples",children:"examples and reference implementations"}),", as well as ",(0,s.jsx)(t.a,{href:"/handbook/getting-started/project-templates/#resthttp-api-testing",children:"Serenity/JS REST API testing Project Templates"}),"\nto see how to apply the above configuration to an existing project."]}),"\n",(0,s.jsx)(t.h2,{id:"configuring-blended-test-scenarios",children:"Configuring blended test scenarios"}),"\n",(0,s.jsxs)(t.p,{children:["You can use Serenity/JS with ",(0,s.jsx)(t.a,{href:"/handbook/test-runners/playwright-test/",children:"Playwright Test"}),", ",(0,s.jsx)(t.a,{href:"/handbook/test-runners/webdriverio/",children:"WebdriverIO"}),",\nor ",(0,s.jsx)(t.a,{href:"/handbook/test-runners/protractor/",children:"Protractor"})," to write ",(0,s.jsx)(t.a,{href:"/handbook/api-testing/blended-testing/",children:(0,s.jsx)(t.strong,{children:"blended test scenarios"})})," interacting with ",(0,s.jsx)(t.strong,{children:"both the web UI and APIs"}),".\nIn those cases, the ability to ",(0,s.jsx)(t.code,{children:"CallAnApi"})," is ",(0,s.jsx)(t.strong,{children:"configured for you automatically"})," by the respective Serenity/JS test runner adapter\nand uses the ",(0,s.jsx)(t.strong,{children:"base URL"})," defined in your test runner configuration file.\nTo override the base URL, provide a full URL when performing ",(0,s.jsx)(t.code,{children:"Send"})," interactions."]}),"\n",(0,s.jsxs)(a.A,{groupId:"code-examples",children:[(0,s.jsx)(i.A,{value:"playwright-test (ui+api)",label:"Playwright Test (UI+API)",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="spec/healthcheck.spec.ts" tab={"label":"Playwright Test (UI+API)"}',children:"import { describe, it, test } from '@serenity-js/playwright-test'\nimport { Send, GetRequest, LastResponse } from '@serenity-js/rest'\nimport { Ensure, equals, startsWith } from '@serenity-js/assertions'\nimport { Navigate, Page } from '@serenity-js/web'\n\ndescribe('GitHub', () => {\n\n    // Set the baseURL directly in the test or in playwright.config.ts, for example:\n    test.use({\n        baseURL: 'https://github.com/'\n    })\n\n    describe('Sponsors', () => {\n\n        it('lets developers support Serenity/JS', async ({ actor }) => {\n\n            await actor.attemptsTo(\n                // Perform API-based interactions\n                Send.a(GetRequest.to('https://www.githubstatus.com/api/v2/summary.json')),\n                Ensure.that(LastResponse.status(), equals(200)),\n                Ensure.that(\n                    LastResponse.body().status.indicator,\n                    equals('none')\n                ),\n\n                // Perform any web-based interactions\n                Navigate.to('/sponsors/serenity-js'),\n                Ensure.that(\n                    Page.current().title(),\n                    startsWith('Sponsor @serenity-js on GitHub Sponsors')\n                ),\n            )\n        })\n    })\n})\n"})})}),(0,s.jsx)(i.A,{value:"webdriverio-(ui+api)",label:"WebdriverIO (UI+API)",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="spec/healthcheck.spec.ts" tab={"label":"WebdriverIO (UI+API)"}',children:"import { describe, it } from 'mocha'\nimport { actorCalled } from '@serenity-js/core'\nimport { Send, GetRequest, LastResponse } from '@serenity-js/rest'\nimport { Ensure, equals, startsWith } from '@serenity-js/assertions'\nimport { Navigate, Page } from '@serenity-js/web'\n\ndescribe('GitHub', () => {\n\n    // Set the baseUrl in wdio.conf.ts, for example:\n    //\n    //   baseUrl: 'https://jsonplaceholder.typicode.com/'\n\n    describe('Sponsors', () => {\n\n        it('lets developers support Serenity/JS', async ({ }) => {\n\n            await actorCalled('Apisitt').attemptsTo(\n                // Perform API-based interactions\n                Send.a(GetRequest.to('https://www.githubstatus.com/api/v2/summary.json')),\n                Ensure.that(LastResponse.status(), equals(200)),\n                Ensure.that(\n                    LastResponse.body().status.indicator,\n                    equals('none')\n                ),\n\n                // Perform any web-based interactions\n                Navigate.to('/sponsors/serenity-js'),\n                Ensure.that(\n                    Page.current().title(),\n                    startsWith('Sponsor @serenity-js on GitHub Sponsors')\n                ),\n            )\n        })\n    })\n})\n"})})}),(0,s.jsx)(i.A,{value:"protractor-(ui+api)",label:"Protractor (UI+API)",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="spec/healthcheck.spec.ts" tab={"label":"Protractor (UI+API)"}',children:"import { describe, it } from 'mocha'\nimport { actorCalled } from '@serenity-js/core'\nimport { Send, GetRequest, LastResponse } from '@serenity-js/rest'\nimport { Ensure, equals, startsWith } from '@serenity-js/assertions'\nimport { Navigate, Page } from '@serenity-js/web'\n\ndescribe('GitHub', () => {\n\n    // Set the baseUrl in protractor.conf.js, for example:\n    //\n    //   baseUrl: 'https://jsonplaceholder.typicode.com/'\n\n    describe('Sponsors', () => {\n\n        it('lets developers support Serenity/JS', async ({ }) => {\n\n            await actorCalled('Apisitt').attemptsTo(\n                // Perform API-based interactions\n                Send.a(GetRequest.to('https://www.githubstatus.com/api/v2/summary.json')),\n                Ensure.that(LastResponse.status(), equals(200)),\n                Ensure.that(\n                    LastResponse.body().status.indicator,\n                    equals('none')\n                ),\n\n                // Perform any web-based interactions\n                Navigate.to('/sponsors/serenity-js'),\n                Ensure.that(\n                    Page.current().title(),\n                    startsWith('Sponsor @serenity-js on GitHub Sponsors')\n                ),\n            )\n        })\n    })\n})\n"})})})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Learn more"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://playwright.dev/docs/test-configuration",children:"Configuring Playwright Test"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://webdriver.io/docs/configurationfile/",children:"Configuring WebdriverIO"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/angular/protractor/blob/master/lib/config.ts",children:"Configuring Protractor"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"dynamically-configuring-the-base-url",children:"Dynamically configuring the base URL"}),"\n",(0,s.jsxs)(t.p,{children:["If you need to dynamically ",(0,s.jsx)(t.a,{href:"/api/rest/class/ChangeApiConfig/#setUrlTo",children:"change the base URL"}),"\nor ",(0,s.jsx)(t.a,{href:"/api/rest/class/ChangeApiConfig/#setPortTo",children:"port"})," of the API you're interacting with,\nor ",(0,s.jsx)(t.a,{href:"/api/rest/class/ChangeApiConfig/#setHeader",children:"set extra HTTP headers"}),", use the task to ",(0,s.jsx)(t.a,{href:"/api/rest/class/ChangeApiConfig/",children:(0,s.jsx)(t.code,{children:"ChangeApiConfig"})}),".\nThis approach works for both API-only and ",(0,s.jsx)(t.a,{href:"/handbook/api-testing/blended-testing/",children:"blended test scenarios"}),", with any config overrides returning to their original state before the next scenario starts:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { ChangeApiConfig } from '@serenity-js/rest';\n\nawait actorCalled('Apisitt').attemptsTo(\n    ChangeApiConfig.setUrlTo('https://example.org/secure/oauth'),\n\n    // ... perform some API calls\n)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"dynamically-overriding-abilities",children:"Dynamically overriding abilities"}),"\n",(0,s.jsxs)(t.p,{children:["You can ",(0,s.jsx)(t.strong,{children:"add or override"})," the ability to ",(0,s.jsx)(t.code,{children:"CallAnApi"})," on a per-scenario / per-actor basis using ",(0,s.jsx)(t.a,{href:"/api/core/class/Actor/#whoCan",children:(0,s.jsx)(t.code,{children:"actor.whoCan"})}),".\nThis approach works for both API-only and blended test scenarios, with any config overrides returning to their original state before the next scenario starts:"]}),"\n",(0,s.jsxs)(a.A,{groupId:"code-examples",children:[(0,s.jsx)(i.A,{value:"mocha-(api-only)",label:"Mocha (API-only)",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="spec/product-search.spec.ts" tab={"label":"Mocha (API-only)"}',children:"import { describe, it, before } from 'mocha'\nimport { engage, Cast, actorCalled } from '@serenity-js/core'\nimport { CallAnApi, Send, GetRequest, PostRequest, LastResponse } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\ndescribe('My Shop', () => {\n\n    // Assume there are 2 web services:\n    // - test data service, responsible for populating an example online shop with test data\n    // - search service, using the test data created by the test data service\n    const testDataServiceUrl = 'https://test-data.example.org/api/v1/';\n    const searchServiceUrl   = 'https://search.example.org/api/v1/';\n\n    before(() => {\n        // Configure the cast so that all actor can interact with the search service\n        engage(\n            Cast.where(actor => actor.whoCan(CallAnApi.at(searchServiceUrl)))\n        )\n    })\n\n    describe('Product Search', () => {\n\n        it('finds products based on their name', async () => {\n\n            // Override the CallAnApi ability\n            await actorCalled('Admin')\n                .whoCan(CallAnApi.at(testDataServiceUrl))\n                .attemptsTo(\n                    // Perform API-based interactions to set up the test data\n                    Send.a(PostRequest.to('products').with({ name: 'Apples', price: '\xa32.50' })),\n                    Ensure.that(LastResponse.status(), equals(201)),\n                )\n\n            await actorCalled('Barbara')\n                .attemptsTo(\n                    // Perform API-based interactions with the search service\n                    Send.a(GetRequest.to('search?name=Apples')),\n                    Ensure.that(LastResponse.status(), equals(200)),\n                    Ensure.that(LastResponse.body(), equals([\n                        { name: 'Apples', price: '\xa32.50' }\n                    ])),\n                )\n        })\n    })\n})\n"})})}),(0,s.jsx)(i.A,{value:"playwright-test (ui+api)",label:"Playwright Test (UI+API)",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="spec/product-search.spec.ts" tab={"label":"Playwright Test (UI+API)"}',children:"import { describe, it, test } from '@serenity-js/playwright-test'\nimport { CallAnApi, Send, GetRequest, PostRequest, LastResponse } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\ndescribe('My Shop', () => {\n\n    // Assume there are 2 web services:\n    // - test data service, responsible for populating an example online shop with test data\n    // - search service, using the test data created by the test data service\n    const testDataServiceUrl = 'https://test-data.example.org/api/v1/';\n    const searchServiceUrl   = 'https://search.example.org/api/v1/';\n\n    // Configure the cast so that all actor can interact with the search service\n    test.use({\n        baseURL: searchServiceUrl\n    })\n\n    describe('Product Search', () => {\n\n        it('finds products based on their name', async ({ actorCalled }) => {\n\n            // Override the CallAnApi ability\n            await actorCalled('Admin')\n                .whoCan(CallAnApi.at(testDataServiceUrl))\n                .attemptsTo(\n                    // Perform API-based interactions to set up the test data\n                    Send.a(PostRequest.to('products').with({ name: 'Apples', price: '\xa32.50' })),\n                    Ensure.that(LastResponse.status(), equals(201)),\n                )\n\n            await actorCalled('Barbara')\n                .attemptsTo(\n                    // Perform API-based interactions with the search service\n                    Send.a(GetRequest.to('search?name=Apples')),\n                    Ensure.that(LastResponse.status(), equals(200)),\n                    Ensure.that(LastResponse.body(), equals([\n                        { name: 'Apples', price: '\xa32.50' }\n                    ])),\n                )\n        })\n    })\n})\n"})})}),(0,s.jsx)(i.A,{value:"webdriverio-(ui+api)",label:"WebdriverIO (UI+API)",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="spec/product-search.spec.ts" tab={"label":"WebdriverIO (UI+API)"}',children:"import { describe, it } from 'mocha'\nimport { actorCalled } from '@serenity-js/core'\nimport { CallAnApi, Send, GetRequest, PostRequest, LastResponse } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\ndescribe('My Shop', () => {\n\n    // Assume there are 2 web services:\n    // - test data service, responsible for populating an example online shop with test data\n    // - search service, using the test data created by the test data service\n\n    // Set the baseUrl of the search service available to all actors in wdio.conf.ts, for example:\n    //\n    //   baseUrl: 'https://search.example.org/api/v1/'\n\n    // URLs of other services can be set in the test itself, for example:\n    const testDataServiceUrl = 'https://test-data.example.org/api/v1/';\n\n    describe('Product Search', () => {\n\n        it('finds products based on their name', async () => {\n\n            // Override the CallAnApi ability\n            await actorCalled('Admin')\n                .whoCan(CallAnApi.at(testDataServiceUrl))\n                .attemptsTo(\n                    // Perform API-based interactions to set up the test data\n                    Send.a(PostRequest.to('products').with({ name: 'Apples', price: '\xa32.50' })),\n                    Ensure.that(LastResponse.status(), equals(201)),\n                )\n\n            await actorCalled('Barbara')\n                .attemptsTo(\n                    // Perform API-based interactions with the search service\n                    Send.a(GetRequest.to('search?name=Apples')),\n                    Ensure.that(LastResponse.status(), equals(200)),\n                    Ensure.that(LastResponse.body(), equals([\n                        { name: 'Apples', price: '\xa32.50' }\n                    ])),\n                )\n        })\n    })\n})\n"})})}),(0,s.jsx)(i.A,{value:"protractor-(ui+api)",label:"Protractor (UI+API)",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="spec/product-search.spec.ts" tab={"label":"Protractor (UI+API)"}',children:"import { describe, it } from 'mocha'\nimport { actorCalled } from '@serenity-js/core'\nimport { CallAnApi, Send, GetRequest, PostRequest, LastResponse } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\ndescribe('My Shop', () => {\n\n    // Assume there are 2 web services:\n    // - test data service, responsible for populating an example online shop with test data\n    // - search service, using the test data created by the test data service\n\n    // Set the baseUrl of the search service available to all actors in protractor.conf.js, for example:\n    //\n    //   baseUrl: 'https://search.example.org/api/v1/'\n\n    // URLs of other services can be set in the test itself, for example:\n    const testDataServiceUrl = 'https://test-data.example.org/api/v1/';\n\n    describe('Product Search', () => {\n\n        it('finds products based on their name', async () => {\n\n            // Override the CallAnApi ability\n            await actorCalled('Admin')\n                .whoCan(CallAnApi.at(testDataServiceUrl))\n                .attemptsTo(\n                    // Perform API-based interactions to set up the test data\n                    Send.a(PostRequest.to('products').with({ name: 'Apples', price: '\xa32.50' })),\n                    Ensure.that(LastResponse.status(), equals(201)),\n                )\n\n            await actorCalled('Barbara')\n                .attemptsTo(\n                    // Perform API-based interactions with the search service\n                    Send.a(GetRequest.to('search?name=Apples')),\n                    Ensure.that(LastResponse.status(), equals(200)),\n                    Ensure.that(LastResponse.body(), equals([\n                        { name: 'Apples', price: '\xa32.50' }\n                    ])),\n                )\n        })\n    })\n})\n"})})})]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},45645:(e,t,n)=>{n.d(t,{A:()=>d});var s=n(96540),r=n(34164),a=n(24245),i=n(8626),o=n(11062);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=n(74848);function p(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:o}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),h=e=>{const t=e.currentTarget,n=p.indexOf(t),r=o[n].value;r!==s&&(u(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>p.push(e),onKeyDown:d,onClick:h,...a,className:(0,r.A)("tabs__item",l.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function u(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function h(e){const t=(0,i.u)(e);return(0,c.jsxs)("div",{className:(0,r.A)("tabs-container",l.tabList),children:[(0,c.jsx)(p,{...t,...e}),(0,c.jsx)(u,{...t,...e})]})}function d(e){const t=(0,o.A)();return(0,c.jsx)(h,{...e,children:(0,i.v)(e.children)},String(t))}},8626:(e,t,n)=>{n.d(t,{u:()=>d,v:()=>c});var s=n(96540),r=n(56347),a=n(36494),i=n(62814),o=n(45167),l=n(69900);function c(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[o,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[d,m]=h({queryString:n,groupId:r}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,l.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),f=(()=>{const e=d??b;return u({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&c(f)}),[f]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),g(e)}),[m,g,i]),tabValues:i}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
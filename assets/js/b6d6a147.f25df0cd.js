"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[6532],{40445:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(74848),r=t(28453);const o={sidebar_position:6},i="Control flow",a={id:"design/control-flow",title:"Control flow",description:"Serenity/JS introduces idiomatic control flow constructs to support implementing conditional and repeated activities in your Screenplay Pattern scenarios.",source:"@site/src/docs/handbook/design/control-flow.mdx",sourceDirName:"design",slug:"/design/control-flow",permalink:"/handbook/design/control-flow",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/design/control-flow.mdx",tags:[],version:"current",lastUpdatedAt:1732313702e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Debugging",permalink:"/handbook/design/debugging"},next:{title:"Data structures",permalink:"/handbook/design/data-structures"}},c={},l=[{value:"Conditional statements",id:"conditional-statements",level:2},{value:"Loops",id:"loops",level:2},{value:"Iterating over a static Array",id:"iterating-over-a-static-array",level:3},{value:"Iterating over REST API responses",id:"iterating-over-rest-api-responses",level:3},{value:"Iterating over web UI elements",id:"iterating-over-web-ui-elements",level:3},{value:"Synchronisation caveats",id:"synchronisation-caveats",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"control-flow",children:"Control flow"}),"\n",(0,s.jsxs)(n.p,{children:["Serenity/JS introduces idiomatic control flow constructs to support implementing conditional and repeated ",(0,s.jsx)(n.a,{href:"/api/core/class/Activity",children:"activities"})," in your ",(0,s.jsx)(n.a,{href:"/handbook/design/screenplay-pattern",children:"Screenplay Pattern"})," scenarios."]}),"\n",(0,s.jsxs)(n.p,{children:["Consistently with the design of Serenity/JS ",(0,s.jsx)(n.a,{href:"/handbook/design/assertions",children:"assertions"})," and ",(0,s.jsx)(n.a,{href:"/handbook/design/waiting-and-synchronisation",children:"synchronisation statements"}),",\nall the Serenity/JS control flow statements rely on reusable ",(0,s.jsx)(n.a,{href:"/api/core/class/Expectation",children:"expectations"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"conditional-statements",children:"Conditional statements"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/core/class/Check",children:(0,s.jsx)(n.code,{children:"Check.whether"})})," is the Serenity/JS equivalent of an ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else",children:(0,s.jsx)(n.code,{children:"if...else"})})," statement."]}),"\n",(0,s.jsxs)(n.p,{children:["However, while ",(0,s.jsx)(n.code,{children:"if...else"})," is a construct limited to operating on static values, ",(0,s.jsx)(n.code,{children:"Check.whether"})," evaluates\nthe provided value dynamically in the context of the given actor:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { actorCalled, Check } from '@serenity-js/core'\nimport { PageElement, By, isVisible, Click } from '@serenity-js/web'\n\nclass CookieConsent {\n    static banner = () =>\n        PageElement.located(By.id('cookie-consent'))\n            .describedAs('cookie consent banner')\n\n    static closeButton = () =>\n        PageElement.located(By.css('.close'))\n            .describedAs('close button')\n            .of(this.banner())\n}\n\nawait actorCalled('Chuck').attemptsTo(\n    Check.whether(CookieConsent.banner(), isVisible())\n        .andIfSo(\n            Click.on(CookieConsent.closeButton()),\n        )\n)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Optionally, the interaction to ",(0,s.jsx)(n.code,{children:"Check"})," can also define the ",(0,s.jsx)(n.strong,{children:"alternative activities"}),"\nto perform when the condition is not met:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { actorCalled, Check, Log } from '@serenity-js/core'\nimport { isVisible, Click } from '@serenity-js/web'\n\nawait actorCalled('Chuck').attemptsTo(\n    Check.whether(CookieConsent.banner(), isVisible())\n        .andIfSo(\n            Click.on(CookieConsent.closeButton()),\n        )\n        .otherwise(\n            Log.the('Cookies already accepted')\n        )\n"})}),"\n",(0,s.jsx)(n.h2,{id:"loops",children:"Loops"}),"\n",(0,s.jsxs)(n.p,{children:["Serenity/JS ",(0,s.jsx)(n.a,{href:"/api/core/class/List",children:(0,s.jsx)(n.code,{children:"List"})}),"\noffers a ",(0,s.jsx)(n.a,{href:"/api/core/class/List#forEach",children:(0,s.jsx)(n.code,{children:"forEach"})})," method that"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"enables actors to iterate over synchronous and asynchronous collections,"}),"\n",(0,s.jsx)(n.li,{children:"provides access to the actor iterating over the list as well as the item accessed in the current iteration"}),"\n",(0,s.jsxs)(n.li,{children:["ensures correct synchronisation of actor's ",(0,s.jsx)(n.a,{href:"/api/core/class/Activity",children:"activities"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Since ",(0,s.jsx)(n.a,{href:"/api/web/class/PageElements",children:(0,s.jsx)(n.code,{children:"PageElements"})})," class derives from ",(0,s.jsx)(n.code,{children:"List"}),", it also offers this functionality."]}),"\n",(0,s.jsx)(n.h3,{id:"iterating-over-a-static-array",children:"Iterating over a static Array"}),"\n",(0,s.jsxs)(n.p,{children:["To instruct an actor to iterate over a static ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",children:(0,s.jsx)(n.code,{children:"Array"})}),",\nwrap it using ",(0,s.jsx)(n.a,{href:"/api/core/class/List#of",children:(0,s.jsx)(n.code,{children:"List.of"})}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { actorCalled, List, Log } from '@serenity-js/core'\n\nconst items = List.of([ 'first', 'second', 'third' ]);\n\nawait actorCalled('Joe').attemptsTo(\n    items.forEach(({ actor, item }) => actor.attemptsTo(\n        Log.the('current item', item)\n    )),\n)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"iterating-over-rest-api-responses",children:"Iterating over REST API responses"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/core/class/List#of",children:(0,s.jsx)(n.code,{children:"List.of"})})," pattern also applies to\nwrapping iterables returned from a ",(0,s.jsx)(n.a,{href:"/api/core/class/Question",children:(0,s.jsx)(n.code,{children:"Question"})})," or ",(0,s.jsx)(n.a,{href:"/api/core#QuestionAdapter",children:(0,s.jsx)(n.code,{children:"QuestionAdapter"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This is particularly useful when iterating over responses from ",(0,s.jsx)(n.a,{href:"/api/rest",children:"REST APIs"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="GET /products"',children:'{\n  "products": [\n      { "name": "apples" },\n      { "name": "bananas" },\n      { "name": "cinnamon rolls" }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { actorCalled, List, Log } from '@serenity-js/core'\nimport { GetRequest, LastResponse, Send } from '@serenity-js/rest'\n\ninterface ProductsResponse {\n    products: Array<{ name: string }>\n}\n\nawait actorCalled('Apisit')\n    .attemptsTo(\n        Send.a(GetRequest.to('/products')),\n        List.of(LastResponse.body<ProductsResponse>().products)\n            .forEach(({ actor, item }) => actor.attemptsTo(\n                Log.the(item),\n            ))\n    )\n"})}),"\n",(0,s.jsx)(n.h3,{id:"iterating-over-web-ui-elements",children:"Iterating over web UI elements"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/web/class/PageElements",children:(0,s.jsx)(n.code,{children:"PageElements"})})," is derived from ",(0,s.jsx)(n.code,{children:"List"}),", so it also offers a ",(0,s.jsx)(n.a,{href:"/api/web/class/PageElements#forEach",children:(0,s.jsx)(n.code,{children:"forEach"})})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="example widget"',children:'<label for="tnc-consent">\n    <input type="checkbox" name="tnc-consent">\n    Yes, I agree with terms and conditions\n</label>\n<label for="newsletter-consent">\n    <input type="checkbox" name="newsletter-consent">\n    Yes, I\'d like to receive the newsletter\n</label>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { actorCalled } from '@serenity-js/core'\nimport { PageElements, By, Click } from '@serenity-js/web'\n\nconst checkboxes = () =>\n    PageElements.located(By.css('[type=\"checkbox\"]'))\n        .describeAs('checkboxes')\n\nawait actorCalled('Francis')\n    .attemptsTo(\n        checkboxes().forEach(({ actor, item }) => actor.attemptsTo(\n            Click.on(item),\n        ))\n    )\n"})}),"\n",(0,s.jsx)(n.h3,{id:"synchronisation-caveats",children:"Synchronisation caveats"}),"\n",(0,s.jsxs)(n.p,{children:["All the ",(0,s.jsx)(n.a,{href:"/api/core/class/Activity",children:"activities"})," performed by Serenity/JS actors are ",(0,s.jsx)(n.strong,{children:"asynchronous"}),".\nWhile the framework takes care of sequencing them correctly when they're executed\nvia ",(0,s.jsx)(n.a,{href:"/api/core/class/Actor#attemptsTo",children:(0,s.jsx)(n.code,{children:"Actor.attemptsTo"})}),",\nthe ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",children:(0,s.jsx)(n.code,{children:"Promise"})}),"\nreturned by this method itself ",(0,s.jsx)(n.strong,{children:"must be synchronised"})," with the ",(0,s.jsx)(n.a,{href:"/handbook/test-runners/",children:"test runner"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This is very easy to do using ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await",children:(0,s.jsx)(n.code,{children:"async/await"})}),",\nlike in this example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { describe, it } from 'mocha'\nimport { actorCalled, Log } from '@serenity-js/core'\n\ndescribe('Serenity/JS actor.attemptsTo', () => {\n\n    it('returns a Promise', async () => {           // note \"async\"\n        await actorCalled('Joe').attemptsTo(        // note \"await\"\n            Log.the('current item')\n        )\n    })\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["However, most low-level JavaScript control flow constructs ",(0,s.jsx)(n.strong,{children:"DO NOT SUPPORT"})," ",(0,s.jsx)(n.code,{children:"async/await"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, this listing ",(0,s.jsx)(n.strong,{children:"DOESN'T WORK"})," as\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",children:(0,s.jsx)(n.code,{children:"Array.forEach"})}),"\nexpects a ",(0,s.jsx)(n.strong,{children:"synchronous function"})," and  ",(0,s.jsx)(n.strong,{children:"does not wait for promises"}),".\nThis means that the promise return by ",(0,s.jsx)(n.code,{children:"Actor.attemptsTo"}),"\nis ignored and the behaviour of the test scenario becomes unpredictable:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { describe, it } from 'mocha'\nimport { actorCalled, Log } from '@serenity-js/core'\n\ndescribe('Serenity/JS actor.attemptsTo', () => {\n\n    it('returns a Promise', async () => {\n        // BROKEN, DON'T USE! JavaScript forEach doesn't support Promises\n        await [ 'first', 'second', 'third' ]\n            .forEach(async item => {              // async/await ignored!\n                await actorCalled('Joe').attemptsTo(\n                    Log.the('current item', item)\n                )\n            })\n    })\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to iterate over a ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",children:"native JavaScript Array"}),",\nmake sure to do so using a construct that supports ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols",children:"async iterables"}),",\nsuch as ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of",children:(0,s.jsx)(n.code,{children:"for...of"})}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { describe, it } from 'mocha'\nimport { actorCalled, Log } from '@serenity-js/core'\n\ndescribe('Serenity/JS actor.attemptsTo', () => {\n\n    it('returns a Promise', async () => {\n        const items = [ 'first', 'second', 'third' ];\n\n        for (const item of items) {                 // for...of\n            await actorCalled('Joe').attemptsTo(    // supports async/await\n                Log.the('current item', item)\n            )\n        }\n    })\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Of course, the ",(0,s.jsx)(n.strong,{children:"most flexible approach"})," is to use the Serenity/JS-native ",(0,s.jsx)(n.a,{href:"/api/core/class/List",children:(0,s.jsx)(n.code,{children:"List"})})," data structure,\nwhich provides a custom implementation of ",(0,s.jsx)(n.a,{href:"/api/core/class/List#forEach",children:(0,s.jsx)(n.code,{children:"forEach"})}),"\nthat returns a ",(0,s.jsx)(n.a,{href:"/api/core/class/Task",children:"task"})," and ",(0,s.jsx)(n.strong,{children:"DOES SUPPORT"}),"\nasynchronous operations:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { describe, it } from 'mocha'\nimport { actorCalled, List, Log } from '@serenity-js/core'\n\ndescribe('Serenity/JS actor.attemptsTo', () => {\n\n    it('returns a Promise', async () => {\n        const items = List.of([ 'first', 'second', 'third' ]);\n\n        await actorCalled('Joe').attemptsTo(\n            items.forEach(({ actor, item }) => actor.attemptsTo(\n                Log.the('current item', item)\n            )),\n        )\n    })\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/core/class/List",children:(0,s.jsx)(n.code,{children:"List.forEach"})})," allows loops to be encapsulated in other ",(0,s.jsx)(n.a,{href:"/api/core/class/Task",children:"tasks"}),",\nand is therefore the ",(0,s.jsx)(n.strong,{children:"recommended approach"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { describe, it } from 'mocha'\nimport { actorCalled, List, Log, Task } from '@serenity-js/core'\n\ndescribe('Serenity/JS actor.attemptsTo', () => {\n\n    const logEachOf = <T>(items: List<T>) =>\n        Task.where(`#actor logs each item`,\n            items.forEach(({ actor, item }) => actor.attemptsTo(\n                Log.the('current item', item)\n            )),\n        )\n\n    it('returns a Promise', async () => {\n        const items = List.of([ 'first', 'second', 'third' ]);\n\n        await actorCalled('Joe').attemptsTo(\n            logEachOf(items),\n        )\n    })\n})\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
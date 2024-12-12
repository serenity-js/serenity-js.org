"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[7214],{84314:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,toc:()=>a});var s=n(74848),i=n(28453);const r={},o=void 0,a=[{value:"Serenity/JS Assertions",id:"serenityjs-assertions",level:2},{value:"Installation",id:"installation",level:3},{value:"Performing verifications using <code>Ensure</code>",id:"performing-verifications-using-ensure",level:3},{value:"Controlling execution flow using <code>Check</code>",id:"controlling-execution-flow-using-check",level:3},{value:"Synchronising the test with the System Under Test using <code>Wait</code>",id:"synchronising-the-test-with-the-system-under-test-using-wait",level:3},{value:"Defining custom expectations using <code>Expectation.thatActualShould</code>",id:"defining-custom-expectations-using-expectationthatactualshould",level:3},{value:"Composing expectations using <code>Expectation.to</code>",id:"composing-expectations-using-expectationto",level:3},{value:"\ud83d\udce3 Stay up to date",id:"-stay-up-to-date",level:2},{value:"\ud83d\udc9b Support Serenity/JS",id:"-support-serenityjs",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})}),"\n",(0,s.jsx)(t.a,{href:"https://www.youtube.com/@serenity-js",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})}),"\n",(0,s.jsx)(t.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})}),"\n",(0,s.jsx)(t.a,{href:"https://github.com/sponsors/serenity-js",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github",alt:"Support Serenity/JS on GitHub"})})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://serenity-js.org",children:"Serenity/JS"})," is an innovative open-source framework designed to make acceptance and regression testing\nof complex software systems faster, more collaborative and easier to scale."]}),"\n",(0,s.jsx)(t.p,{children:"\u2b50\ufe0f Get started with Serenity/JS!"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://serenity-js.org/handbook/web-testing/your-first-web-scenario",children:"Serenity/JS web testing tutorial"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://serenity-js.org/handbook",children:"Serenity/JS Handbook"})," and ",(0,s.jsx)(t.a,{href:"https://serenity-js.org/handbook/getting-started/",children:"Getting Started guides"})]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://serenity-js.org/api/",children:"API documentation"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://serenity-js.org/handbook/getting-started/project-templates/",children:"Serenity/JS Project Templates"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\ud83d\udc4b Join the Serenity/JS Community!"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Meet other Serenity/JS developers and maintainers on the ",(0,s.jsx)(t.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community chat channel"}),","]}),"\n",(0,s.jsxs)(t.li,{children:["Find answers to your Serenity/JS questions on the ",(0,s.jsx)(t.a,{href:"https://github.com/orgs/serenity-js/discussions/categories/how-do-i",children:"Serenity/JS Forum"}),","]}),"\n",(0,s.jsxs)(t.li,{children:["Learn how to ",(0,s.jsx)(t.a,{href:"https://serenity-js.org/community/contributing/",children:"contribute to Serenity/JS"}),","]}),"\n",(0,s.jsxs)(t.li,{children:["Support the project and gain access to ",(0,s.jsx)(t.a,{href:"https://github.com/serenity-js/playbooks",children:"Serenity/JS Playbooks"})," by becoming a ",(0,s.jsx)(t.a,{href:"https://github.com/sponsors/serenity-js",children:"Serenity/JS GitHub Sponsor"}),"!"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"serenityjs-assertions",children:"Serenity/JS Assertions"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://serenity-js.org/api/rest/",children:(0,s.jsx)(t.code,{children:"@serenity-js/assertions"})})," is an assertions library implementing the ",(0,s.jsx)(t.a,{href:"https://serenity-js.org/handbook/design/screenplay-pattern/",children:"Screenplay Pattern"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.p,{children:"To install this module, run the following command in your computer terminal:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"npm install --save-dev @serenity-js/core @serenity-js/assertions\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To learn more about Serenity/JS and how to use it on your project, follow the ",(0,s.jsx)(t.a,{href:"https://serenity-js.org/handbook/getting-started/",children:"Serenity/JS Getting Started guide"}),"."]}),"\n",(0,s.jsxs)(t.h3,{id:"performing-verifications-using-ensure",children:["Performing verifications using ",(0,s.jsx)(t.code,{children:"Ensure"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { Ensure, endsWith } from '@serenity-js/assertions'\nimport { actorCalled } from '@serenity-js/core'\nimport { Navigate, Page } from '@serenity-js/web'\n\nawait actorCalled('Erica').attemptsTo(\n    Navigate.to('https://serenity-js.org'),\n    Ensure.that(\n        Page.current().title(), \n        endsWith('Serenity/JS')\n    ),\n)\n"})}),"\n",(0,s.jsxs)(t.h3,{id:"controlling-execution-flow-using-check",children:["Controlling execution flow using ",(0,s.jsx)(t.code,{children:"Check"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { actorCalled } from '@serenity-js/core'\nimport { Check } from '@serenity-js/assertions' \nimport { Click, isVisible } from '@serenity-js/protractor'\n\nawait actorCalled('Erica').attemptsTo(\n    Check.whether(NewsletterModal, isVisible())\n        .andIfSo(Click.on(CloseModalButton)),\n)\n"})}),"\n",(0,s.jsxs)(t.h3,{id:"synchronising-the-test-with-the-system-under-test-using-wait",children:["Synchronising the test with the System Under Test using ",(0,s.jsx)(t.code,{children:"Wait"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { actorCalled } from '@serenity-js/core'\nimport { Click, isVisible, Wait } from '@serenity-js/protractor'\n\nawait actorCalled('Erica').attemptsTo(\n    Wait.until(CloseModalButton, isVisible()),\n    Click.on(CloseModalButton)\n)\n"})}),"\n",(0,s.jsxs)(t.h3,{id:"defining-custom-expectations-using-expectationthatactualshould",children:["Defining custom expectations using ",(0,s.jsx)(t.code,{children:"Expectation.thatActualShould"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { actorCalled } from '@serenity-js/core'\nimport { Expectation, Ensure } from '@serenity-js/assertions'\n\nfunction isDivisibleBy(expected: Answerable<number>): Expectation<number> {\n    return Expectation.thatActualShould<number, number>('have value divisible by', expected)\n        .soThat((actualValue, expectedValue) => actualValue % expectedValue === 0)\n}\n\nawait actorCalled('Erica').attemptsTo(\n    Ensure.that(4, isDivisibleBy(2)),\n)\n"})}),"\n",(0,s.jsxs)(t.h3,{id:"composing-expectations-using-expectationto",children:["Composing expectations using ",(0,s.jsx)(t.code,{children:"Expectation.to"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { actorCalled } from '@serenity-js/core'\nimport { Expectation, Ensure, and, or, isGreaterThan, isLessThan, equals  } from '@serenity-js/assertions'\n\nfunction isWithin(lowerBound: number, upperBound: number) {\n    return Expectation\n        .to(`have value within ${ lowerBound } and ${ upperBound }`)\n        .soThatActual(and(\n           or(isGreaterThan(lowerBound), equals(lowerBound)),\n           or(isLessThan(upperBound), equals(upperBound)),\n        ))\n}\n\nawait actorCalled('Erica').attemptsTo(\n    Ensure.that(5, isWithin(3, 6)),\n)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"-stay-up-to-date",children:"\ud83d\udce3 Stay up to date"}),"\n",(0,s.jsxs)(t.p,{children:["New features, tutorials, and demos are coming soon!\nFollow ",(0,s.jsx)(t.a,{href:"https://www.linkedin.com/company/serenity-js",children:"Serenity/JS on LinkedIn"}),",\nsubscribe to ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/@serenity-js",children:"Serenity/JS channel on YouTube"})," and join the ",(0,s.jsx)(t.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community Chat"})," to stay up to date!\nPlease also make sure to star \u2b50\ufe0f ",(0,s.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js",children:"Serenity/JS on GitHub"})," to help others discover the framework!"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})}),"\n",(0,s.jsx)(t.a,{href:"https://www.youtube.com/@serenity-js",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})}),"\n",(0,s.jsx)(t.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})}),"\n",(0,s.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge",alt:"GitHub stars"})})]}),"\n",(0,s.jsx)(t.h2,{id:"-support-serenityjs",children:"\ud83d\udc9b Support Serenity/JS"}),"\n",(0,s.jsx)(t.p,{children:"If you appreciate all the effort that goes into making sophisticated tools easy to work with, please support our work and become a Serenity/JS GitHub Sponsor today!"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/sponsors/serenity-js",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub Sponsors"})})})]})}function c(e){void 0===e&&(e={});const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
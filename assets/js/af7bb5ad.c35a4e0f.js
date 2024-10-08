"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[7677],{60154:(e,s,t)=>{t.r(s),t.d(s,{contentTitle:()=>o,default:()=>h,frontMatter:()=>i,toc:()=>a});var r=t(74848),n=t(28453);const i={},o=void 0,a=[{value:"Serenity/JS Local Server",id:"serenityjs-local-server",level:2},{value:"Installation",id:"installation",level:3},{value:"Example test",id:"example-test",level:3},{value:"Creating a server",id:"creating-a-server",level:3},{value:"Raw Node.js",id:"raw-nodejs",level:4},{value:"Express",id:"express",level:4},{value:"HAPI",id:"hapi",level:4},{value:"Koa",id:"koa",level:4},{value:"Restify",id:"restify",level:4},{value:"\ud83d\udce3 Stay up to date",id:"-stay-up-to-date",level:2},{value:"\ud83d\udc9b Support Serenity/JS",id:"-support-serenityjs",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,r.jsx)(s.img,{src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})}),"\n",(0,r.jsx)(s.a,{href:"https://www.youtube.com/@serenity-js",children:(0,r.jsx)(s.img,{src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})}),"\n",(0,r.jsx)(s.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:(0,r.jsx)(s.img,{src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})}),"\n",(0,r.jsx)(s.a,{href:"https://github.com/sponsors/serenity-js",children:(0,r.jsx)(s.img,{src:"https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github",alt:"Support Serenity/JS on GitHub"})})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://serenity-js.org",children:"Serenity/JS"})," is an innovative open-source framework designed to make acceptance and regression testing\nof complex software systems faster, more collaborative and easier to scale."]}),"\n",(0,r.jsx)(s.p,{children:"\u2b50\ufe0f Get started with Serenity/JS!"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://serenity-js.org/handbook/web-testing/your-first-web-scenario",children:"Serenity/JS web testing tutorial"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://serenity-js.org/handbook",children:"Serenity/JS Handbook"})," and ",(0,r.jsx)(s.a,{href:"https://serenity-js.org/handbook/getting-started/",children:"Getting Started guides"})]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://serenity-js.org/api/",children:"API documentation"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://serenity-js.org/handbook/getting-started/project-templates/",children:"Serenity/JS Project Templates on GitHub"})}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"\ud83d\udc4b Join the Serenity/JS Community!"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Meet other Serenity/JS developers and maintainers on the ",(0,r.jsx)(s.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community chat channel"}),","]}),"\n",(0,r.jsxs)(s.li,{children:["Find answers to your Serenity/JS questions on the ",(0,r.jsx)(s.a,{href:"https://github.com/orgs/serenity-js/discussions/categories/how-do-i",children:"Serenity/JS Forum"}),","]}),"\n",(0,r.jsxs)(s.li,{children:["Learn how to ",(0,r.jsx)(s.a,{href:"https://serenity-js.org/community/contributing/",children:"contribute to Serenity/JS"}),","]}),"\n",(0,r.jsxs)(s.li,{children:["Support the project and gain access to ",(0,r.jsx)(s.a,{href:"https://github.com/serenity-js/playbooks",children:"Serenity/JS Playbooks"})," by becoming a ",(0,r.jsx)(s.a,{href:"https://github.com/sponsors/serenity-js",children:"Serenity/JS GitHub Sponsor"}),"!"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"serenityjs-local-server",children:"Serenity/JS Local Server"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://serenity-js.org/api/local-server/",children:(0,r.jsx)(s.code,{children:"@serenity-js/local-server"})})," enables Serenity/JS Actors to manage local HTTP or HTTPS test servers powered by ",(0,r.jsx)(s.a,{href:"https://expressjs.com/",children:"Express"}),",\n",(0,r.jsx)(s.a,{href:"https://hapijs.com/",children:"Hapi"}),",\n",(0,r.jsx)(s.a,{href:"https://koajs.com/",children:"Koa"}),",\n",(0,r.jsx)(s.a,{href:"http://restify.com/",children:"Restify"}),"\nor raw ",(0,r.jsx)(s.a,{href:"https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/",children:"Node.js"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(s.p,{children:"To install this module, run the following command in your computer terminal:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"npm install --save-dev @serenity-js/core @serenity-js/local-server\n"})}),"\n",(0,r.jsxs)(s.p,{children:["To learn more about Serenity/JS and how to use it on your project, follow the ",(0,r.jsx)(s.a,{href:"https://serenity-js.org/handbook/getting-started/",children:"Serenity/JS Getting Started guide"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"example-test",children:"Example test"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"import { actorCalled } from '@serenity-js/core'\nimport {\n    ManageALocalServer, StartLocalTestServer, StopLocalTestServer\n} from '@serenity-js/local-server'\nimport { CallAnApi, GetRequest, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\nimport axios from 'axios'\n\nimport { requestListener } from './listener'                            (1)\n\nconst actor = actorCalled('Apisit').whoCan(\n    ManageALocalServer.using(requestListener),                          (2)\n    CallAnApi.using(axios.create()),\n)\n\nawait actor.attemptsTo(\n    StartLocalTestServer.onRandomPort(),                                (3)\n    Send.a(GetRequest.to(LocalServer.url())),                           (4)\n    Ensure.that(LastResponse.status(), equals(200)),\n    Ensure.that(LastResponse.body(), equals('Hello!')),\n    StopLocalTestServer.ifRunning(),                                    (5)\n)\n"})}),"\n",(0,r.jsx)(s.p,{children:"In the above example:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["A ",(0,r.jsx)(s.code,{children:"requestListener"})," to be tested is imported."]}),"\n",(0,r.jsxs)(s.li,{children:["The ",(0,r.jsx)(s.code,{children:"Actor"})," is given an ",(0,r.jsx)(s.code,{children:"Ability"})," to ",(0,r.jsx)(s.code,{children:"ManageALocalServer"}),". This enables the ",(0,r.jsx)(s.code,{children:"Interaction"})," to ",(0,r.jsx)(s.code,{children:"StartLocalTestServer"})," and ",(0,r.jsx)(s.code,{children:"StopLocalTestServer"}),", as well as the ",(0,r.jsx)(s.code,{children:"LocalServer"})," ",(0,r.jsx)(s.code,{children:"Question"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"The local server is started on a random port, although you can specify a port range if you prefer."}),"\n",(0,r.jsx)(s.li,{children:"The url of the local server is retrieved and used to test an interaction with its HTTP API."}),"\n",(0,r.jsxs)(s.li,{children:["The local server is stopped when the test is complete. Please note that you probably want to ",(0,r.jsx)(s.code,{children:"StopLocalTestServer"})," in an ",(0,r.jsx)(s.code,{children:"afterEach"})," block of your test (or something equivalent) to make sure that the server is correctly shut down even when the test fails."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"creating-a-server",children:"Creating a server"}),"\n",(0,r.jsxs)(s.p,{children:["Any ",(0,r.jsx)(s.code,{children:"requestListener"})," that Node's\n",(0,r.jsx)(s.a,{href:"https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener",children:(0,r.jsx)(s.code,{children:"http.createServer"})}),"\nor ",(0,r.jsx)(s.a,{href:"https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener",children:(0,r.jsx)(s.code,{children:"https.createServer"})}),"\nwould accept can be used with ",(0,r.jsx)(s.code,{children:"ManageALocalServer"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Below are example implementations of a simple HTTP server that would\nsatisfy the above test."}),"\n",(0,r.jsx)(s.h4,{id:"raw-nodejs",children:"Raw Node.js"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"// listener.js\nmodule.exports.requestListener = (request, response) => {\n  response.setHeader('Connection', 'close')\n  response.end('Hello World!')\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/",children:"Learn more about Node.js"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"express",children:"Express"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"// listener.js\nconst express = require('express')\n\nmodule.exports.requestListener = express().\n    get('/', (req: express.Request, res: express.Response) => {\n        res.status(200).send('Hello World!')\n    })\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://expressjs.com/",children:"Learn more about Express"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"hapi",children:"HAPI"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"// listener.js\nconst hapi = require('@hapi/hapi')\n\nconst server = new hapi.Server()\nserver.route({ method: 'GET', path: '/', handler: (req, h) => 'Hello World!' })\n\nmodule.exports.requestListener = server.listener\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://hapijs.com/",children:"Learn more about HAPI"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"koa",children:"Koa"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"// listener.js\nconst Koa = require('koa')\n\nmodule.exports.requestListener = new Koa()\n    .use(ctx => Promise.resolve(ctx.body = 'Hello World!'))\n    .callback()\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://koajs.com/",children:"Learn more about Koa"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"restify",children:"Restify"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"// listener.js\nconst restify = require('restify')\n\nconst server = restify.createServer(options)\n\nserver.get('/', (req, res, next) => {\n    res.send('Hello World!')\n})\n\nmodule.exports.requestListener = server\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"http://restify.com/",children:"Learn more about Restify"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"-stay-up-to-date",children:"\ud83d\udce3 Stay up to date"}),"\n",(0,r.jsxs)(s.p,{children:["New features, tutorials, and demos are coming soon!\nFollow ",(0,r.jsx)(s.a,{href:"https://www.linkedin.com/company/serenity-js",children:"Serenity/JS on LinkedIn"}),",\nsubscribe to ",(0,r.jsx)(s.a,{href:"https://www.youtube.com/@serenity-js",children:"Serenity/JS channel on YouTube"})," and join the ",(0,r.jsx)(s.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:"Serenity/JS Community Chat"})," to stay up to date!\nPlease also make sure to star \u2b50\ufe0f ",(0,r.jsx)(s.a,{href:"https://github.com/serenity-js/serenity-js",children:"Serenity/JS on GitHub"})," to help others discover the framework!"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,r.jsx)(s.img,{src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})}),"\n",(0,r.jsx)(s.a,{href:"https://www.youtube.com/@serenity-js",children:(0,r.jsx)(s.img,{src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})}),"\n",(0,r.jsx)(s.a,{href:"https://matrix.to/#/#serenity-js:gitter.im",children:(0,r.jsx)(s.img,{src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})}),"\n",(0,r.jsx)(s.a,{href:"https://github.com/serenity-js/serenity-js",children:(0,r.jsx)(s.img,{src:"https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge",alt:"GitHub stars"})})]}),"\n",(0,r.jsx)(s.h2,{id:"-support-serenityjs",children:"\ud83d\udc9b Support Serenity/JS"}),"\n",(0,r.jsx)(s.p,{children:"If you appreciate all the effort that goes into making sophisticated tools easy to work with, please support our work and become a Serenity/JS GitHub Sponsor today!"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/sponsors/serenity-js",children:(0,r.jsx)(s.img,{src:"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub Sponsors"})})})]})}function h(e){void 0===e&&(e={});const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>a});var r=t(96540);const n={},i=r.createContext(n);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);
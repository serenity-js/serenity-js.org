"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[3799],{64004:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var t=n(74848),r=n(28453);const i={sidebar_position:4,title:"Verifying responses"},o="Verifying responses",a={id:"api-testing/verifying-responses",title:"Verifying responses",description:"With Serenity/JS, you can verify responses to your API requests using LastResponse",source:"@site/src/docs/handbook/api-testing/verifying-responses.mdx",sourceDirName:"api-testing",slug:"/api-testing/verifying-responses",permalink:"/handbook/api-testing/verifying-responses",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/api-testing/verifying-responses.mdx",tags:[],version:"current",lastUpdatedAt:1726216718e3,sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Verifying responses"},sidebar:"docs",previous:{title:"Sending requests",permalink:"/handbook/api-testing/sending-requests"},next:{title:"Mobile testing",permalink:"/handbook/mobile-testing/"}},c={},p=[{value:"Verifying the response status",id:"verifying-the-response-status",level:2},{value:"Verifying the response body",id:"verifying-the-response-body",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"verifying-responses",children:"Verifying responses"}),"\n",(0,t.jsxs)(s.p,{children:["With Serenity/JS, you can verify responses to your API requests using ",(0,t.jsx)(s.a,{href:"/api/rest/class/LastResponse/",children:(0,t.jsx)(s.code,{children:"LastResponse"})}),"\nand the exact same ",(0,t.jsx)(s.a,{href:"/handbook/design/assertions/",children:"Serenity/JS assertions"}),"\nmodule you'd use for other kinds of test scenarios."]}),"\n",(0,t.jsxs)(s.p,{children:["Check the ",(0,t.jsx)(s.a,{href:"/api/rest/class/LastResponse/",children:(0,t.jsx)(s.code,{children:"LastResponse"})})," documentation for examples on how to extract interesting information from the response:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/api/rest/class/LastResponse/#status",children:"extracting response status"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/api/rest/class/LastResponse/#body",children:"extracting response body"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/api/rest/class/LastResponse/#headers",children:"extracting response headers"})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"verifying-the-response-status",children:"Verifying the response status"}),"\n",(0,t.jsxs)(s.p,{children:["To extract the response status, instruct the actor to ",(0,t.jsx)(s.a,{href:"/api/rest/class/Send",children:(0,t.jsx)(s.code,{children:"Send"})})," a ",(0,t.jsx)(s.a,{href:"/api/rest/class/HTTPRequest",children:(0,t.jsx)(s.code,{children:"HTTPRequest"})})," and use ",(0,t.jsx)(s.a,{href:"/api/rest/class/LastResponse/#body",children:(0,t.jsx)(s.code,{children:"LastResponse.status()"})}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"import { actorCalled } from '@serenity-js/core'\nimport { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\nawait actorCalled('Apisitt')\n  .whoCan(CallAnApi.at('https://api.example.org/'))\n  .attemptsTo(\n    Send.a(GetRequest.to('/books/0-688-00230-7')),\n    Ensure.that(LastResponse.status(), equals(200)),\n  )\n"})}),"\n",(0,t.jsx)(s.h2,{id:"verifying-the-response-body",children:"Verifying the response body"}),"\n",(0,t.jsxs)(s.p,{children:["To extract the response body, instruct the actor to ",(0,t.jsx)(s.a,{href:"/api/rest/class/Send",children:(0,t.jsx)(s.code,{children:"Send"})})," a ",(0,t.jsx)(s.a,{href:"/api/rest/class/HTTPRequest",children:(0,t.jsx)(s.code,{children:"HTTPRequest"})})," and use ",(0,t.jsx)(s.a,{href:"/api/rest/class/LastResponse/#body",children:(0,t.jsx)(s.code,{children:"LastResponse.body<T>()"})}),".\nHere ",(0,t.jsx)(s.code,{children:"T"})," is an optional generic parameter describing the shape of the response body."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"import { actorCalled } from '@serenity-js/core'\nimport { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\ninterface Book {\n    title: string;\n    author: string;\n}\n\nawait actorCalled('Apisitt')\n  .whoCan(CallAnApi.at('https://api.example.org/'))\n  .attemptsTo(\n    Send.a(GetRequest.to('/books/0-688-00230-7')),\n    Ensure.that(LastResponse.status(), equals(200)),\n    Ensure.that(LastResponse.header('Content-Type'), equals('application/json')),\n    Ensure.that(LastResponse.body<Book>(), equals({\n        title: 'Zen and the Art of Motorcycle Maintenance: An Inquiry into Values',\n        author: 'Robert M. Pirsig',\n    })),\n  )\n"})})]})}function l(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(96540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);
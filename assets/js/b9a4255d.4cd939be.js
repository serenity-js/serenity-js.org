"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[3359],{7741:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(74848),r=t(28453);const i={sidebar_position:3,title:"Sending requests"},a="Sending requests",o={id:"api-testing/sending-requests",title:"Sending requests",description:"To make a Serenity/JS actor send an HTTP request, you need to configure it with the ability to CallAnApi",source:"@site/src/docs/handbook/api-testing/sending-requests.mdx",sourceDirName:"api-testing",slug:"/api-testing/sending-requests",permalink:"/handbook/api-testing/sending-requests",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/api-testing/sending-requests.mdx",tags:[],version:"current",lastUpdatedAt:1732304999e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Sending requests"},sidebar:"docs",previous:{title:"Configuring the HTTP client",permalink:"/handbook/api-testing/configuring-http-client"},next:{title:"Verifying responses",permalink:"/handbook/api-testing/verifying-responses"}},d={},c=[{value:"Using relative resource URLs",id:"using-relative-resource-urls",level:2},{value:"Using absolute resource URLs",id:"using-absolute-resource-urls",level:2},{value:"Sending data",id:"sending-data",level:2},{value:"Sending dynamic JSON data",id:"sending-dynamic-json-data",level:3},{value:"Sending form data",id:"sending-form-data",level:3},{value:"Sending dynamic form data",id:"sending-dynamic-form-data",level:3}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"sending-requests",children:"Sending requests"}),"\n",(0,n.jsxs)(s.p,{children:["To make a Serenity/JS actor send an HTTP request, you need to ",(0,n.jsxs)(s.a,{href:"/handbook/api-testing/configuring-http-client/",children:["configure it with the ability to ",(0,n.jsx)(s.code,{children:"CallAnApi"})]}),"\nand instruct to perform an interaction to ",(0,n.jsx)(s.a,{href:"/api/rest/class/Send/",children:(0,n.jsx)(s.code,{children:"Send"})})," one of the available ",(0,n.jsx)(s.a,{href:"/api/rest/class/HeadRequest/",children:(0,n.jsx)(s.code,{children:"HTTPRequest"})}),"\nimplementations:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/api/rest/class/GetRequest",children:(0,n.jsx)(s.code,{children:"GetRequest"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/api/rest/class/PostRequest",children:(0,n.jsx)(s.code,{children:"PostRequest"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/api/rest/class/DeleteRequest",children:(0,n.jsx)(s.code,{children:"DeleteRequest"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/api/rest/class/HeadRequest",children:(0,n.jsx)(s.code,{children:"HeadRequest"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/api/rest/class/PatchRequest",children:(0,n.jsx)(s.code,{children:"PatchRequest"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/api/rest/class/PutRequest",children:(0,n.jsx)(s.code,{children:"PutRequest"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/api/rest/class/OptionsRequest",children:(0,n.jsx)(s.code,{children:"OptionsRequest"})})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Code listings below present some of the common usage patterns, but make sure to check the ",(0,n.jsx)(s.a,{href:"/api/rest",children:"Serenity/JS REST API documentation"})," for more examples."]}),"\n",(0,n.jsx)(s.h2,{id:"using-relative-resource-urls",children:"Using relative resource URLs"}),"\n",(0,n.jsxs)(s.p,{children:["When a ",(0,n.jsx)(s.code,{children:"HTTPRequest"})," is configured with a relative URL, such URL gets resolved against the base URL configured in the ability to ",(0,n.jsx)(s.a,{href:"/api/rest/class/CallAnApi/",children:(0,n.jsx)(s.code,{children:"CallAnApi"})}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import { actorCalled } from '@serenity-js/core'\nimport { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\nawait actorCalled('Apisitt')\n    .whoCan(CallAnApi.at('https://api.example.org/v1/'))\n    .attemptsTo(\n        Send.a(GetRequest.to('users')),                        // GET https://api.example.org/v1/users\n        Ensure.that(LastResponse.status(), equals(200)),\n    )\n"})}),"\n",(0,n.jsx)(s.h2,{id:"using-absolute-resource-urls",children:"Using absolute resource URLs"}),"\n",(0,n.jsxs)(s.p,{children:["When a ",(0,n.jsx)(s.code,{children:"HTTPRequest"})," is configured with absolute URL, base URL configured in the ability to ",(0,n.jsx)(s.a,{href:"/api/rest/class/CallAnApi/",children:(0,n.jsx)(s.code,{children:"CallAnApi"})})," is ignored for this request."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import { actorCalled } from '@serenity-js/core'\nimport { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\nawait actorCalled('Apisitt')\n    .whoCan(CallAnApi.at('https://api.example.org/v1/'))\n    .attemptsTo(\n        Send.a(GetRequest.to('https://auth.example.org/token')), // GET https://auth.example.org/token\n        Ensure.that(LastResponse.status(), equals(200)),\n    )\n"})}),"\n",(0,n.jsx)(s.h2,{id:"sending-data",children:"Sending data"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/api/rest/class/PostRequest",children:(0,n.jsx)(s.code,{children:"PostRequest"})}),", ",(0,n.jsx)(s.a,{href:"/api/rest/class/PatchRequest",children:(0,n.jsx)(s.code,{children:"PatchRequest"})})," and ",(0,n.jsx)(s.a,{href:"/api/rest/class/PutRequest",children:(0,n.jsx)(s.code,{children:"PutRequest"})})," can be configured using the ",(0,n.jsx)(s.code,{children:".with(data)"})," method to send data in the request body.\nSuch data can be any ",(0,n.jsx)(s.a,{href:"/api/core/#Answerable",children:(0,n.jsx)(s.code,{children:"Answerable"})})," that resolves to a JSON object, a ",(0,n.jsx)(s.code,{children:"string"}),", ",(0,n.jsx)(s.code,{children:"ArrayBuffer"}),", ",(0,n.jsx)(s.code,{children:"ArrayBufferView"}),", ",(0,n.jsx)(s.code,{children:"Buffer"}),", ",(0,n.jsx)(s.code,{children:"Stream"}),", or ",(0,n.jsx)(s.code,{children:"URLSearchParams"}),".\nSee ",(0,n.jsx)(s.a,{href:"https://axios-http.com/docs/req_config",children:"Axios API documentation"})," for more details on supported data types."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import { actorCalled } from '@serenity-js/core'\nimport { LastResponse, PostRequest, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\nawait actorCalled('Apisitt')\n  .attemptsTo(\n    Send.a(PostRequest.to('/books').with({\n      isbn: '0-688-00230-7',\n      title: 'Zen and the Art of Motorcycle Maintenance: An Inquiry into Values',\n      author: 'Robert M. Pirsig',\n    })),\n    Ensure.that(LastResponse.status(), equals(201)),\n  )\n"})}),"\n",(0,n.jsx)(s.h3,{id:"sending-dynamic-json-data",children:"Sending dynamic JSON data"}),"\n",(0,n.jsxs)(s.p,{children:["If you need to send data that's determined dynamically as part of the test scenario, use ",(0,n.jsx)(s.a,{href:"/api/core/class/Question/#fromObject",children:(0,n.jsx)(s.code,{children:"Question.fromObject"})}),"\nto create a ",(0,n.jsx)(s.a,{href:"/api/core/class/Question/",children:(0,n.jsx)(s.code,{children:"Question"})})," that resolves to a JSON object."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import { actorCalled, Question } from '@serenity-js/core'\nimport { LastResponse, PostRequest, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\nimport { By, Text, PageElement } from '@serenity-js/web'\n\nawait actorCalled('Apisitt')\n  .attemptsTo(\n    Send.a(PostRequest.to('/register').with(\n        Question.fromObject({                                       // Generate a Question<JSONObject>\n          token: Text.of(PageElement.located(By.id('#api-token'))), // with text of an HTML element\n        })\n    ),\n    Ensure.that(LastResponse.status(), equals(201)),\n  )\n"})}),"\n",(0,n.jsx)(s.h3,{id:"sending-form-data",children:"Sending form data"}),"\n",(0,n.jsxs)(s.p,{children:["To post ",(0,n.jsx)(s.code,{children:"multipart/form-data"}),", use ",(0,n.jsx)(s.a,{href:"https://axios-http.com/docs/multipart",children:(0,n.jsx)(s.code,{children:"axios.toFormData"})})," helper."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import { actorCalled } from '@serenity-js/core'\nimport { LastResponse, PostRequest, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\nimport axios from 'axios'\n\nconst form = axios.toFormData({\n    grant_type: 'password',\n    username:   'alice.smith',\n    password:   'secret',\n})\n\nawait actorCalled('Apisitt')\n  .attemptsTo(\n    Send.a(PostRequest.to('/oauth/token').with(form)),\n    Ensure.that(LastResponse.status(), equals(200)),\n  )\n"})}),"\n",(0,n.jsx)(s.h3,{id:"sending-dynamic-form-data",children:"Sending dynamic form data"}),"\n",(0,n.jsxs)(s.p,{children:["To post ",(0,n.jsx)(s.code,{children:"multipart/form-data"})," where form data is determined dynamically as part of the test scenario,\ncombine ",(0,n.jsx)(s.a,{href:"/api/core/class/Question/#fromObject",children:(0,n.jsx)(s.code,{children:"Question.fromObject"})}),", ",(0,n.jsx)(s.a,{href:"http://localhost:3000/api/core/class/Question/#as",children:(0,n.jsx)(s.code,{children:"Question.as"})}),",\nand the ",(0,n.jsx)(s.a,{href:"https://axios-http.com/docs/multipart",children:(0,n.jsx)(s.code,{children:"axios.toFormData"})})," helper."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import { actorCalled, Question } from '@serenity-js/core'\nimport { LastResponse, PostRequest, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\nimport { By, Text, PageElement } from '@serenity-js/web'\n\nimport axios from 'axios'\n\nconst form = Question\n    .fromObject({\n        grant_type: 'password',                                     // Some data can be static\n        username:   'alice.smith',\n        password:   Text.of(PageElement.located(By.id('#totp'))),   // while some can be dynamic\n    })\n    .as(data => axios.toFormData(data))\n\nawait actorCalled('Apisitt')\n  .attemptsTo(\n    Send.a(PostRequest.to('/oauth/token').with(form)),\n    Ensure.that(LastResponse.status(), equals(200)),\n  )\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var n=t(96540);const r={},i=n.createContext(r);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);
"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[2561],{92435:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>p});var n=t(7532),o=t(74848),i=t(28453);const s={slug:"support-for-serenity-bdd-4",title:"Support for Serenity BDD 4",authors:["jan-molak"],tags:["web","rest","reporting","jasmine","mocha","protractor","webdriverio","playwright-test","open-source"]},a=void 0,l={authorsImageUrls:[void 0]},p=[{value:"Important changes",id:"important-changes",level:3}];function c(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://github.com/serenity-js/serenity-js/releases/tag/v3.15.0",children:(0,o.jsx)(r.strong,{children:"Serenity/JS 3.15.0"})})," introduces support for ",(0,o.jsx)(r.strong,{children:"Serenity BDD 4"})," and aggregated test reports for Playwright Test, WebdriverIO, Mocha, Jasmine and Cucumber! \ud83e\udd73"]}),"\n",(0,o.jsx)(r.p,{children:"We've also updated the Serenity/JS Handbook to help you get the most out of the new Serenity/JS and Serenity BDD reporting features - check out:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter/",children:"Reporting > Serenity BDD Reporter"})}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter/#serenity-bdd-best-practices",children:"Serenity BDD Best Practices"})," (NEW!)"]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"important-changes",children:"Important changes"}),"\n",(0,o.jsxs)(r.p,{children:["If you're still using the Serenity/JS 2-style syntax for registering the ",(0,o.jsx)(r.code,{children:"SerenityBDDReporter"}),", you'll need to update your configuration file to use the Serenity/JS 3 convention:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-diff",children:"- import { ArtifactArchiver } from '@serenity-js/core';\n- import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';\n\n// ...\n    crew: [\n-     new SerenityBDDReporter(),\n-     ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),\n+     '@serenity-js/serenity-bdd',\n+     [ '@serenity-js/core:ArtifactArchiver', {\n+       outputDirectory: 'target/site/serenity'\n+     } ],\n    ]\n// ...\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Learn more about ",(0,o.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter/#configuration-overview",children:"Configuring Serenity BDD Reporter"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var n=t(96540);const o={},i=n.createContext(o);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:r},e.children)}},7532:e=>{e.exports=JSON.parse('{"permalink":"/blog/support-for-serenity-bdd-4","editUrl":"https://github.com/serenity-js/serenity-js.org/tree/main/src/blog/2024-01-11-support-for-serenity-bdd-4/index.mdx","source":"@site/src/blog/2024-01-11-support-for-serenity-bdd-4/index.mdx","title":"Support for Serenity BDD 4","description":"Serenity/JS 3.15.0 introduces support for Serenity BDD 4 and aggregated test reports for Playwright Test, WebdriverIO, Mocha, Jasmine and Cucumber! \ud83e\udd73","date":"2024-01-11T00:00:00.000Z","tags":[{"inline":true,"label":"web","permalink":"/blog/tags/web"},{"inline":true,"label":"rest","permalink":"/blog/tags/rest"},{"inline":true,"label":"reporting","permalink":"/blog/tags/reporting"},{"inline":true,"label":"jasmine","permalink":"/blog/tags/jasmine"},{"inline":true,"label":"mocha","permalink":"/blog/tags/mocha"},{"inline":true,"label":"protractor","permalink":"/blog/tags/protractor"},{"inline":true,"label":"webdriverio","permalink":"/blog/tags/webdriverio"},{"inline":true,"label":"playwright-test","permalink":"/blog/tags/playwright-test"},{"inline":true,"label":"open-source","permalink":"/blog/tags/open-source"}],"readingTime":0.665,"hasTruncateMarker":false,"authors":[{"name":"Jan Molak","url":"https://github.com/jan-molak","imageURL":"https://github.com/jan-molak.png","key":"jan-molak","page":null}],"frontMatter":{"slug":"support-for-serenity-bdd-4","title":"Support for Serenity BDD 4","authors":["jan-molak"],"tags":["web","rest","reporting","jasmine","mocha","protractor","webdriverio","playwright-test","open-source"]},"unlisted":false,"prevItem":{"title":"Support for @tags","permalink":"/blog/support-for-tags"},"nextItem":{"title":"Support for Playwright Test UI Mode!","permalink":"/blog/support-for-playwright-ui-mode"}}')}}]);
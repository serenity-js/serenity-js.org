"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[4103],{51061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=n(74848),r=n(28453);const a={sidebar_position:5},o="Lean Page Objects Pattern",i={id:"web-testing/page-objects-pattern",title:"Lean Page Objects Pattern",description:"While the Screenplay Pattern is a behavioural pattern,",source:"@site/src/docs/handbook/web-testing/page-objects-pattern.mdx",sourceDirName:"web-testing",slug:"/web-testing/page-objects-pattern",permalink:"/handbook/web-testing/page-objects-pattern",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/web-testing/page-objects-pattern.mdx",tags:[],version:"current",lastUpdatedAt:1732304999e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Page Element Query Language",permalink:"/handbook/web-testing/page-element-query-language"},next:{title:"Serenity/JS web modules",permalink:"/handbook/web-testing/serenity-js-web-modules"}},c={},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"lean-page-objects-pattern",children:"Lean Page Objects Pattern"}),"\n",(0,s.jsxs)(t.p,{children:["While the ",(0,s.jsx)(t.a,{href:"/handbook/design/screenplay-pattern",children:"Screenplay Pattern"})," is a ",(0,s.jsx)(t.strong,{children:"behavioural pattern"}),",\nLean Page Objects is a ",(0,s.jsx)(t.strong,{children:"structural pattern"}),". Contrary to the more ",(0,s.jsx)(t.a,{href:"https://martinfowler.com/bliki/PageObject.html",children:"traditional definition of Page Objects"}),",\nSerenity/JS Lean Page Objects are minimalistic and focused only on grouping\nrelated ",(0,s.jsx)(t.a,{href:"/handbook/web-testing/page-element-query-language",children:"page elements"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Consider the below UI widget showing product search results for an imaginary online grocery store:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<ul id="product-search-results">\n    <li class="product-search-result">\n        <span class="product-name">apples</span>\n        <span class="product-price">\xa32.25</span>\n    </li>\n    <li class="product-search-result">\n        <span class="product-name">bananas</span>\n        <span class="product-price">\xa31.50</span>\n    </li>\n</ul>\n'})}),"\n",(0,s.jsx)(t.p,{children:"How would you approach writing a test scenario that checks the displayed product price of an arbitrary product?"}),"\n",(0,s.jsxs)(t.p,{children:["With Serenity/JS you could define a Lean Page Object describing the interesting page elements of the individual ",(0,s.jsx)(t.code,{children:".product-search-result"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { PageElement, By, Text } from '@serenity-js/web'\n\nclass ProductSearchResult {\n    static name = () =>\n        Text.of(\n            PageElement.located(By.css('.product-name'))\n        ).describedAs('name')\n\n    static price = () =>\n        Text.of(\n            PageElement.located(By.css('.product-price'))\n        ).describedAs('price')\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then, you could define another Lean Page Object to describe the container widget of ",(0,s.jsx)(t.code,{children:"product-search-results"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { PageElement, PageElements, By } from '@serenity-js/web'\n\nclass ProductSearch {\n    static widget = () =>\n        PageElement.located(By.id('product-search-results'))\n            .describedAs('product search results widget')\n\n    static results = () =>\n        PageElements.located(By.css('.product-search-result'))\n            .of(this.widget())\n            .describedAs('product search results')\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Finally, you could use Serenity/JS ",(0,s.jsx)(t.a,{href:"/handbook/web-testing/page-element-query-language",children:"Page Element Query Language"}),"\nto define a method like ",(0,s.jsx)(t.code,{children:"resultFor"})," that returned the required search result based on the product name:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { Answerable } from '@serenity-js/core'\nimport { Text } from '@serenity-js/web'\nimport { includes } from '@serenity-js/assertions'\n\nclass ProductSearch {\n    static resultFor = (name: Answerable<string>) =>\n        this.results()\n            .where(ProductSearchResult.name(), includes(name))\n            .first()\n\n    // implementation of `results()` and `widget()` omitted for brevity\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Once you've created a handful of simple Lean Page Objects to help you identify the correct page elements,\nwriting a test scenario to verify the displayed price becomes trivial:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { actorCalled } from '@serenity-js/core'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\nawait actorCalled('Leonora').attemptsTo(\n    Ensure.that(\n        ProductSearchResult.price().of(\n            ProductSearch.resultFor('bananas')\n        ),\n        equals('\xa31.50')\n    )\n)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This is just one of many possible ways to structure your Lean Page Objects.\nOnce you get used to the Serenity/JS ",(0,s.jsx)(t.a,{href:"/handbook/web-testing/page-element-query-language",children:"Page Element Query Language"}),",\nyou'll likely find other page element structures that work for you and your project."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
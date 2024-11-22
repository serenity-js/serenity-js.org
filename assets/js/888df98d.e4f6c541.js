(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[6688],{79302:(e,r,i)=>{e.exports={src:{srcSet:i.p+"assets/ideal-img/example-report.e2fce3d.2104.png 2104w",images:[{path:i.p+"assets/ideal-img/example-report.e2fce3d.2104.png",width:2104,height:1462}],src:i.p+"assets/ideal-img/example-report.e2fce3d.2104.png",toString:function(){return i.p+"assets/ideal-img/example-report.e2fce3d.2104.png"},placeholder:void 0,width:2104,height:1462},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAx0lEQVR4nEXPy0rDQABA0fn/v3KhIGiqtIiL2ghtp0nm/Q5N5AoBcXE+4Ijj+QupJD472pxpc6K2uIklMHmPDh5RaiHmhIkBGz2pJNq9sq6N+1JZfxrLUhHOj1g34IIiV4Mykt3bC+/7jtfumcenB/aHHcJFiXY92p2wQaLcldvYM6hvLtcjh4+OU/+JsOnG5CUmjrikCNlQmtvEoglVk5tHmHjlYgekG7FpIhVNrpraNJMfOGuJDgqRiydnvy3nOW3rP7X9+wXB4ggdxvyttQAAAABJRU5ErkJggg=="}},23351:(e,r,i)=>{e.exports={src:{srcSet:i.p+"assets/ideal-img/results-per-ticket-report.6584bf6.2186.png 2186w",images:[{path:i.p+"assets/ideal-img/results-per-ticket-report.6584bf6.2186.png",width:2186,height:1648}],src:i.p+"assets/ideal-img/results-per-ticket-report.6584bf6.2186.png",toString:function(){return i.p+"assets/ideal-img/results-per-ticket-report.6584bf6.2186.png"},placeholder:void 0,width:2186,height:1648},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAt0lEQVR4nE3KS2rEMBQFUe1/f4GMGhyb9l/S+0hyTEMF3InJ4FCDe8PH45Nu7NCSOL6ddtjNqjLGxJwSwatTmmP1PVhRvOp1rE1pv8IWR5ZtINuK2HrXfCPJTMwToiuhXwaGpUd0Qux5yfqmPiE+oj4Txqnjq3+QZKW2RKnxorayxyfTMhDTRFhzQrwgtfF6nbfzPDBXzAVvibDnhZhnxDas7Dcv8WqWBfWNoLqjFmmHUv9rf+TqDyajMVOcYBOiAAAAAElFTkSuQmCC"}},26092:(e,r,i)=>{"use strict";i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var s=i(74848),t=i(28453),n=i(13012),a=i(19215);const o={},c="JIRA and other issue trackers",d={id:"integration/jira-and-other-issue-trackers",title:"JIRA and other issue trackers",description:"- Serenity BDD HTML reports can include links from scenarios to tickets in your issue tracker",source:"@site/src/docs/handbook/integration/jira-and-other-issue-trackers.mdx",sourceDirName:"integration",slug:"/integration/jira-and-other-issue-trackers",permalink:"/handbook/integration/jira-and-other-issue-trackers",draft:!1,unlisted:!1,editUrl:"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/integration/jira-and-other-issue-trackers.mdx",tags:[],version:"current",lastUpdatedAt:173229782e4,frontMatter:{},sidebar:"docs",previous:{title:"JetBrains IDEA",permalink:"/handbook/integration/jetbrains-idea"},next:{title:"Visual Studio Code",permalink:"/handbook/integration/visual-studio-code"}},l={},h=[{value:"Linking from test scenarios to tickets",id:"linking-from-test-scenarios-to-tickets",level:2},{value:"Tagging Cucumber scenarios and features",id:"tagging-cucumber-scenarios-and-features",level:2},{value:"Working with Jira",id:"working-with-jira",level:2},{value:"Working with GitHub and Gitlab",id:"working-with-github-and-gitlab",level:2}];function u(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"jira-and-other-issue-trackers",children:"JIRA and other issue trackers"}),"\n","\n",(0,s.jsx)(r.admonition,{title:"Key points",type:"note",children:(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#linking-from-test-scenarios-to-tickets",children:"Serenity BDD HTML reports"})," can include links from scenarios to tickets in your issue tracker"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#tagging-cucumber-scenarios-and-features",children:"Tagging a Cucumber scenario"})," with ",(0,s.jsx)(r.code,{children:"@issue:<id>"})," or ",(0,s.jsx)(r.code,{children:"@issues:<id1,id2>"})," indicates a link"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#working-with-jira",children:"Serenity BDD Jira linking"})," supports linking to tickets ",(0,s.jsx)(r.a,{href:"https://www.atlassian.com/software/jira",children:"Jira"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#working-with-github-and-gitlab",children:"Serenity BDD generic linking"})," supports linking to ",(0,s.jsx)(r.a,{href:"https://github.com/",children:"GitHub"}),", ",(0,s.jsx)(r.a,{href:"https://gitlab.com/",children:"GitLab"}),", ",(0,s.jsx)(r.a,{href:"https://trello.com/",children:"Trello"}),", and other popular issue trackers"]}),"\n"]})}),"\n",(0,s.jsx)(r.h2,{id:"linking-from-test-scenarios-to-tickets",children:"Linking from test scenarios to tickets"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/api/serenity-bdd",children:"Serenity BDD"})," supports linking from test scenario results in the report to tickets in issue trackers such as ",(0,s.jsx)(r.a,{href:"https://www.atlassian.com/software/jira",children:"Jira"}),", ",(0,s.jsx)(r.a,{href:"https://trello.com/",children:"Trello"}),", ",(0,s.jsx)(r.a,{href:"https://github.com/features/issues",children:"GitHub Issues"}),", ",(0,s.jsx)(r.a,{href:"https://docs.gitlab.com/ee/user/project/issues/",children:"GitLab Issues"}),", and many others."]}),"\n",(0,s.jsxs)(r.p,{children:["To make it work, you should ",(0,s.jsx)(r.a,{href:"https://cucumber.io/docs/cucumber/api/?lang=javascript#tags",children:"tag your Cucumber scenarios"})," with ",(0,s.jsx)(r.code,{children:"@issue"})," and ",(0,s.jsx)(r.code,{children:"@issues"})," as per the below listing:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-gherkin",children:'@issue:WF-1\nFeature: Weather forecast\n\n  @issue:WF-2\n  @issues:WF-3,WF4\n  Scenario: Umbrella needed now\n\n    Given it\'s currently raining\n     When Alice asks "Do I need my umbrella now?"\n     Then she should be told "Yes"\n'})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"@issue"})," an ",(0,s.jsx)(r.code,{children:"@issues"})," tags instruct Serenity to augment the reports with links to relevant tickets:"]}),"\n",(0,s.jsx)(a.A,{backgroundColor:"rgb(247,248,243)",children:(0,s.jsx)(n.A,{img:i(79302),alt:"Example Serenity/JS report showing an annotated test scenario"})}),"\n",(0,s.jsx)(r.p,{children:"Apart from improved navigation experience, another benefit of tagging your test scenarios with ticket IDs is that it helps Serenity understand what scenarios and features concern what tickets.\nThis gives you another way to slice your reports, which can be particularly useful when you need to see all the scenarios that cover a given ticket:"}),"\n",(0,s.jsx)(a.A,{backgroundColor:"rgb(247,248,243)",children:(0,s.jsx)(n.A,{img:i(23351),alt:"Example Serenity/JS report showing test results broken down by ticket"})}),"\n",(0,s.jsxs)(r.p,{children:["To make linking scenarios to tickets work, your test runner (such as ",(0,s.jsx)(r.a,{href:"/handbook/test-runners/cucumber",children:"Cucumber.js"}),") must use Serenity/JS ",(0,s.jsx)(r.a,{href:"/handbook/test-runners/",children:"test runner adapter"}),"\nto emit ",(0,s.jsx)(r.a,{href:"/api/core-events/class/SceneTagged",children:(0,s.jsx)(r.code,{children:"SceneTagged"})})," event with an ",(0,s.jsx)(r.code,{children:"IssueTag"})," pointing to the desired ticket when a test scenario is executed.\nThe information about ticket identifiers associated with a given test scenario gets included in Serenity BDD ",(0,s.jsx)(r.code,{children:"json"})," reports produced by ",(0,s.jsx)(r.a,{href:"/api/serenity-bdd/class/SerenityBDDReporter",children:(0,s.jsx)(r.code,{children:"SerenityBDDReporter"})}),".\nFrom there, it's picked up by Serenity BDD CLI and included in the ",(0,s.jsx)(r.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:"Serenity BDD HTML report"}),"."]}),"\n",(0,s.jsxs)(r.admonition,{title:"PRO TIP",type:"info",children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/handbook/test-runners/cucumber",children:"Serenity/JS Cucumber Test Runner Adapter"})," automatically links any scenarios tagged with ",(0,s.jsx)(r.code,{children:"@issue:<issueId>"})," and ",(0,s.jsx)(r.code,{children:"@issues:<issueId1,issueId2,...>"}),"."]}),(0,s.jsxs)(r.p,{children:["If you need this functionality for any other test runners, please ",(0,s.jsx)(r.a,{href:"https://github.com/serenity-js/serenity-js/issues",children:"raise a ticket on GitHub"})," or ",(0,s.jsx)(r.a,{href:"/community/contributing/",children:"submit a pull request"}),"."]})]}),"\n",(0,s.jsx)(r.h2,{id:"tagging-cucumber-scenarios-and-features",children:"Tagging Cucumber scenarios and features"}),"\n",(0,s.jsxs)(r.p,{children:["To indicate to Serenity/JS that you want your Serenity BDD report to link from a test scenario to a ticket in your issue tracker,\nyou should ",(0,s.jsx)(r.a,{href:"https://cucumber.io/docs/cucumber/api/?lang=javascript#tags",children:"tag your Cucumber.js scenario"})," with a tag following one of the below formats:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"@issue:<id>"})," - to link to a single ticket,"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"@issues:<id1,id2,...>"})," - to link to multiple tickets."]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{title:"PRO TIP",type:"info",children:(0,s.jsx)(r.p,{children:"Linking from a scenario to a ticket can be useful to indicate that the scenario was added to cover a specific defect reported in the issue tracker,\nor to provide additional context around the given feature or scenario."})}),"\n",(0,s.jsxs)(r.p,{children:["In the example below, the first scenario will be linked to tickets: ",(0,s.jsx)(r.code,{children:"WF-1"})," (inherited from the ",(0,s.jsx)(r.a,{href:"https://cucumber.io/docs/gherkin/reference/?sbsearch=reference#feature",children:(0,s.jsx)(r.code,{children:"Feature"})}),"), as well as ",(0,s.jsx)(r.code,{children:"WF-2"}),", ",(0,s.jsx)(r.code,{children:"WF-3"}),", ",(0,s.jsx)(r.code,{children:"WF-4"})," the scenario is tagged with explicitly.\nThe second scenario will be linked to ticket ",(0,s.jsx)(r.code,{children:"WF-1"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-gherkin",children:'@issue:WF-1\nFeature: Weather forecast\n\n  @issue:WF-2\n  @issues:WF-3,WF4\n  Scenario: Umbrella needed now\n\n    Given it\'s currently raining\n     When Alice asks "Do I need my umbrella now?"\n     Then she should be told "Yes"\n\n  Scenario: Umbrella needed later\n\n    Given it\'s currently not raining\n      But there\'s a high likelihood of rain throughout the day\n     When Alice asks "Do I need my umbrella now?"\n     Then she should be told "Not yet, but you\'ll need it later"\n'})}),"\n",(0,s.jsx)(r.p,{children:"It's important to note that different issue trackers use different naming conventions to identify tickets and to deep-link to them."}),"\n",(0,s.jsx)(r.p,{children:"Read on to find out more about the approach that will work best in your case."}),"\n",(0,s.jsx)(r.h2,{id:"working-with-jira",children:"Working with Jira"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://www.atlassian.com/software/jira",children:"Atlassian Jira"})," is project-centric and uses ticket identifiers that indicate both project ID and ticket sequence number, e.g. ",(0,s.jsx)(r.code,{children:"WF-123"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["To link a test scenario to a ticket in Jira, you should use a ",(0,s.jsx)(r.a,{href:"https://cucumber.io/docs/cucumber/api/?lang=javascript#tags",children:"Cucumber tag"})," such as ",(0,s.jsx)(r.code,{children:"@issue:WF-1"})," or ",(0,s.jsx)(r.code,{children:"@issues:WF-3,WF4"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-gherkin",metastring:'title="Linking to tickets in Jira"',children:"@issue:WF-1\nFeature: Weather forecast\n\n  @issue:WF-2\n  @issues:WF-3,WF4\n  Scenario: Umbrella needed now\n"})}),"\n",(0,s.jsxs)(r.p,{children:["To instruct Serenity BDD where your Jira instance is, provide the ",(0,s.jsx)(r.code,{children:"--jiraUrl"})," argument when\n",(0,s.jsx)(r.a,{href:"/api/serenity-bdd",children:"generating the report"})," from the command line:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"npx serenity-bdd run --jiraUrl=https://my-company.atlassian.net\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Alternatively, you can specify the ",(0,s.jsx)(r.a,{href:"https://serenity-bdd.github.io/docs/reference/serenity-properties#jiraurl",children:(0,s.jsx)(r.code,{children:"jira.url"})})," property in your ",(0,s.jsx)(r.a,{href:"https://serenity-bdd.github.io/docs/reference/serenity-properties#jiraurl",children:(0,s.jsx)(r.code,{children:"serenity.properties"})})," file,\nwhich Serenity BDD will pick up automatically when executed:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-properties",metastring:'title="serenity.properties"',children:"jira.url=https://my-company.atlassian.net\n"})}),"\n",(0,s.jsx)(r.h2,{id:"working-with-github-and-gitlab",children:"Working with GitHub and Gitlab"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://github.com/features/issues",children:"GitHub"})," and ",(0,s.jsx)(r.a,{href:"https://docs.gitlab.com/ee/user/project/issues/",children:"GitLab"})," are code-centric systems that associate tickets with their relevant code repositories.\nThey identify tickets using the ",(0,s.jsx)(r.code,{children:"#<id>"})," naming convention, e.g. ",(0,s.jsx)(r.code,{children:"#123"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["To link a test scenario to a ticket in GitHub or GitLab you should use a ",(0,s.jsx)(r.a,{href:"https://cucumber.io/docs/cucumber/api/?lang=javascript#tags",children:"Cucumber tag"})," such as ",(0,s.jsx)(r.code,{children:"@issue:#1"})," or ",(0,s.jsx)(r.code,{children:"@issues:#3,#4"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-gherkin",metastring:'title="Linking to tickets in GitHub or GitLab"',children:"@issue:#1\nFeature: Weather forecast\n\n  @issue:#2\n  @issues:#3,#4\n  Scenario: Umbrella needed now\n"})}),"\n",(0,s.jsxs)(r.p,{children:["To instruct Serenity BDD where your GitHub or GitLab instance is, provide the ",(0,s.jsx)(r.code,{children:"--issueTrackerUrl"})," argument when\n",(0,s.jsx)(r.a,{href:"/api/serenity-bdd",children:"generating the report"})," from the command line."]}),"\n",(0,s.jsxs)(r.p,{children:["Note that ",(0,s.jsx)(r.code,{children:"--issueTrackerUrl"})," is a template string where the ",(0,s.jsx)(r.code,{children:"{0}"})," token\ngets replaced with the issue ID you've tagged your test scenario with (Serenity removes the ",(0,s.jsx)(r.code,{children:"#"})," character from the ticket ID when generating the URL):"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"npx serenity-bdd run --issueTrackerUrl='https://github.com/my-namespace/my-project/{0}'\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Alternatively, you can specify the ",(0,s.jsx)(r.a,{href:"https://serenity-bdd.github.io/docs/reference/serenity-properties#jiraurl",children:(0,s.jsx)(r.code,{children:"serenity.issue.tracker.url"})})," property in your ",(0,s.jsx)(r.a,{href:"https://serenity-bdd.github.io/docs/reference/serenity-properties#jiraurl",children:(0,s.jsx)(r.code,{children:"serenity.properties"})})," file,\nwhich Serenity BDD will pick up automatically when executed:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-properties",metastring:'title="serenity.properties"',children:"serenity.issue.tracker.url=https://github.com/my-namespace/my-project/{0}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19215:(e,r,i)=>{"use strict";i.d(r,{A:()=>a});i(96540);var s=i(34164);const t={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var n=i(74848);function a(e){let{children:r,minHeight:i,backgroundColor:a="none",url:o="http://localhost:3000"}=e;return(0,n.jsxs)("div",{className:t.browserWindow,style:{minHeight:i},children:[(0,n.jsxs)("div",{className:t.browserWindowHeader,children:[(0,n.jsxs)("div",{className:t.buttons,children:[(0,n.jsx)("span",{className:t.dot,style:{background:"#f25f58"}}),(0,n.jsx)("span",{className:t.dot,style:{background:"#fbbe3c"}}),(0,n.jsx)("span",{className:t.dot,style:{background:"#58cb42"}})]}),(0,n.jsx)("div",{className:(0,s.A)(t.browserWindowAddressBar,"text--truncate"),children:o}),(0,n.jsx)("div",{className:t.browserWindowMenuIcon,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:t.bar}),(0,n.jsx)("span",{className:t.bar}),(0,n.jsx)("span",{className:t.bar})]})})]}),(0,n.jsx)("div",{className:t.browserWindowBody,style:{backgroundColor:a},children:r})]})}},28453:(e,r,i)=>{"use strict";i.d(r,{R:()=>a,x:()=>o});var s=i(96540);const t={},n=s.createContext(t);function a(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);
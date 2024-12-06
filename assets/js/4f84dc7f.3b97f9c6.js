"use strict";(self.webpackChunkserenity_js_org=self.webpackChunkserenity_js_org||[]).push([[689],{6944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"integration/gitlab-ci","title":"GitLab CI","description":"Serenity/JS integrates with industry-standard test runners, build tools, and CI/CD pipelines","source":"@site/src/docs/handbook/integration/gitlab-ci.mdx","sourceDirName":"integration","slug":"/integration/gitlab-ci","permalink":"/handbook/integration/gitlab-ci","draft":false,"unlisted":false,"editUrl":"https://github.com/serenity-js/serenity-js.org/tree/main/src/docs/handbook/integration/gitlab-ci.mdx","tags":[],"version":"current","lastUpdatedAt":1733490492000,"frontMatter":{"title":"GitLab CI"},"sidebar":"docs","previous":{"title":"GitHub Actions","permalink":"/handbook/integration/github-actions"},"next":{"title":"Jenkins CI","permalink":"/handbook/integration/jenkins-ci"}}');var r=n(74848),s=n(28453),a=n(49489),o=n(7227);const l={title:"GitLab CI"},c="Continuous Testing with GitLab CI",d={},h=[{value:"Writing tests",id:"writing-tests",level:2},{value:"Running tests on GitLab CI",id:"running-tests-on-gitlab-ci",level:2},{value:"Generating Serenity BDD reports",id:"generating-serenity-bdd-reports",level:2},{value:"Installing a Java Runtime Environment",id:"installing-a-java-runtime-environment",level:3},{value:"Building a custom Docker image",id:"building-a-custom-docker-image",level:3},{value:"Publishing Serenity BDD reports to GitLab Pages",id:"publishing-serenity-bdd-reports-to-gitlab-pages",level:2},{value:"Generating JUnit reports",id:"generating-junit-reports",level:2},{value:"Next steps",id:"next-steps",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"continuous-testing-with-gitlab-ci",children:"Continuous Testing with GitLab CI"})}),"\n",(0,r.jsxs)(t.p,{children:["Serenity/JS integrates with ",(0,r.jsx)(t.a,{href:"/handbook/test-runners/",children:"industry-standard test runners"}),", build tools, and ",(0,r.jsx)("abbr",{title:"Continuous Integration and Delivery",children:"CI/CD"})," pipelines\nto help your team ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/introduction/index.html#introduction-to-cicd-methodologies",children:"continuously deliver"})," high-quality software."]}),"\n",(0,r.jsxs)(t.p,{children:["In this article, I'll show you how to configure ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/introduction/",children:"GitLab CI"}),"\nto run automated acceptance tests built using Serenity/JS and publish test execution reports and living documentation to GitLab Pages, so that you can share them with your team."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"You will learn:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"How to run Serenity/JS test scenarios as part of a GitLab CI pipeline"}),"\n",(0,r.jsx)(t.li,{children:"How to produce Serenity BDD reports and living documentation and publish them to GitLab Pages"}),"\n",(0,r.jsx)(t.li,{children:"How to make your test suite produce JUnit-standard reports and use them to decorate GitLab Merge Requests"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"writing-tests",children:"Writing tests"}),"\n",(0,r.jsxs)(t.p,{children:["To run your automated tests on GitLab CI you first need to write them \ud83d\ude0a\nThe easiest way to get started with automating tests using Serenity/JS is to use one of the available ",(0,r.jsx)(t.a,{href:"/handbook/getting-started/project-templates/",children:(0,r.jsx)(t.strong,{children:"Serenity/JS Project Templates"})}),"\nas they come with example scenarios and combine some of the most popular configurations of Serenity/JS modules and test automation tools:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js-cucumber-template",children:"REST API testing with Cucumber and Serenity/JS"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js-mocha-template",children:"REST API testing with Mocha and Serenity/JS"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js-cucumber-playwright-template",children:"Web testing with Cucumber, Playwright, and Serenity/JS"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples/playwright-test-todomvc",children:"Web testing with Playwright Test and Serenity/JS"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js/tree/main/examples/webdriverio-mocha-todomvc",children:"Web testing with WebdriverIO, Mocha, and Serenity/JS"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template",children:"Web testing with WebdriverIO, Cucumber, and Serenity/JS"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If you're new to Serenity/JS, you might want to follow the ",(0,r.jsx)(t.strong,{children:"tutorial"})," to learn how to ",(0,r.jsx)(t.a,{href:"/handbook/web-testing/your-first-web-scenario",children:(0,r.jsx)(t.strong,{children:"write your first web scenario"})}),"!"]}),"\n",(0,r.jsx)(t.h2,{id:"running-tests-on-gitlab-ci",children:"Running tests on GitLab CI"}),"\n",(0,r.jsxs)(t.p,{children:["GitLab CI uses ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/docker/using_docker_images.html",children:"Docker containers"})," to run your ",(0,r.jsx)("abbr",{title:"Continuous Integration and Delivery",children:"CI/CD"})," jobs.\nTo ensure maximum stability of your test suite, you should run Serenity/JS in a container that offers the latest ",(0,r.jsx)(t.a,{href:"https://github.com/nodejs/Release",children:"Long-Term Support"})," version of Node.js, as per the the ",(0,r.jsx)(t.a,{href:"/handbook/getting-started/installation",children:"Serenity/JS installation guide"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The exact ",(0,r.jsx)(t.strong,{children:"Docker image"})," you choose depends on the runtime dependencies required for your tests."]}),"\n",(0,r.jsx)(t.p,{children:"For example:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"REST API"})," tests that don't require any web browsers should use the official plain Node.js image: ",(0,r.jsx)(t.a,{href:"https://hub.docker.com/_/node",children:(0,r.jsx)(t.code,{children:"node:lts"})})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Web tests"})," using ",(0,r.jsx)(t.strong,{children:"Playwright"})," should use the official Playwright image: ",(0,r.jsx)(t.a,{href:"https://mcr.microsoft.com/en-us/product/playwright/about",children:(0,r.jsx)(t.code,{children:"mcr.microsoft.com/playwright:latest"})})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Web tests"})," using ",(0,r.jsx)(t.strong,{children:"WebdriverIO"})," can use the official Puppeteer image: ",(0,r.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/pkgs/container/puppeteer",children:(0,r.jsx)(t.code,{children:"ghcr.io/puppeteer/puppeteer:latest"})})]}),"\n",(0,r.jsxs)(t.li,{children:["Alternatively, ",(0,r.jsx)(t.strong,{children:"web tests"})," using ",(0,r.jsx)(t.strong,{children:"WebdriverIO"})," can also use a ",(0,r.jsx)(t.a,{href:"https://hub.docker.com/_/node",children:(0,r.jsx)(t.code,{children:"node:lts"})})," image and an attached ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/services/",children:"GitLab CI service"})," running Selenium Standalone, for example:\n",(0,r.jsx)(t.a,{href:"https://hub.docker.com/r/selenium/standalone-chrome",children:(0,r.jsx)(t.code,{children:"selenium/standalone-chrome:latest"})}),", or ",(0,r.jsx)(t.a,{href:"https://hub.docker.com/r/selenium/standalone-firefox",children:(0,r.jsx)(t.code,{children:"selenium/standalone-firefox:latest"})})]}),"\n",(0,r.jsxs)(t.li,{children:["Additionally, if your organisation uses an in-house or external ",(0,r.jsx)(t.a,{href:"https://www.selenium.dev/documentation/grid/",children:(0,r.jsx)(t.strong,{children:"Selenium Grid"})}),", such as ",(0,r.jsx)(t.a,{href:"https://saucelabs.com/",children:"SauceLabs"})," or ",(0,r.jsx)(t.a,{href:"https://www.browserstack.com/",children:"BrowserStack"}),", you can use the ",(0,r.jsx)(t.a,{href:"https://hub.docker.com/_/node",children:(0,r.jsx)(t.code,{children:"node:lts"})})," image\nand connect your tests to the grid, as per the configuration instructions from your Selenium Grid provider"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Below example shows basic configuration of a ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/yaml/gitlab_ci_yaml.html",children:"GitLab CI Pipeline"})," you can place in the ",(0,r.jsx)(t.code,{children:".gitlab-ci.yml"})," file in the root directory of your GitLab repository:"]}),"\n",(0,r.jsxs)(a.A,{groupId:"code-examples",children:[(0,r.jsx)(o.A,{value:"node",label:"Node",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title=".gitlab-ci.yml" tab={"label":"Node"}',children:"stages:\n  - test\n\nserenity:\n  stage: test\n  image: node:lts\n  script:\n    - npm ci\n    - npm test\n  artifacts:\n    when: always\n    paths:\n      - target\n\n# other configuration\n"})})}),(0,r.jsx)(o.A,{value:"playwright",label:"Playwright",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title=".gitlab-ci.yml" tab={"label":"Playwright"}',children:"stages:\n  - test\n\nserenity:\n  stage: test\n  image: mcr.microsoft.com/playwright:latest\n  script:\n    - npm ci\n    - npm test\n  artifacts:\n    when: always\n    paths:\n      - target\n\n# other configuration\n"})})}),(0,r.jsx)(o.A,{value:"webdriverio+puppeteer",label:"WebdriverIO+Puppeteer",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title=".gitlab-ci.yml" tab={"label":"WebdriverIO+Puppeteer"}',children:"stages:\n  - test\n\nserenity:\n  stage: test\n  image: ghcr.io/puppeteer/puppeteer:latest\n  script:\n    - npm ci\n    - npm test\n  artifacts:\n    when: always\n    paths:\n      - target\n\n# other configuration\n"})})}),(0,r.jsx)(o.A,{value:"webdriverio+selenium-standalone",label:"WebdriverIO+Selenium Standalone",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title=".gitlab-ci.yml" tab={"label":"WebdriverIO+Selenium Standalone"}',children:"stages:\n  - test\n\nserenity:\n  stage: test\n  image: node:lts\n  services:\n    - selenium/standalone-chrome\n  script:\n    - npm ci\n\n    # configure your tests to use Selenium Grid at\n    # selenium__standalone-chrome:4444\n    - npm test\n  artifacts:\n    when: always\n    paths:\n      - target\n\n# other configuration\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"How a GitLab CI pipeline works"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["When a code change is pushed to your ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/project/repository/",children:"source control repository"}),", GitLab CI runs your code through the ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/yaml/#stages",children:(0,r.jsx)(t.code,{children:"stages"})})," of a pipeline you've defined in your pipeline configuration file.\nThe pipeline in our example has one stage so far: ",(0,r.jsx)(t.code,{children:"test"}),", however most pipelines will have additional stages like ",(0,r.jsx)(t.code,{children:"build"}),", ",(0,r.jsx)(t.code,{children:"report"}),", or ",(0,r.jsx)(t.code,{children:"deploy"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Each pipeline stage can have multiple ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/jobs/",children:"jobs"}),", in this case a job called ",(0,r.jsx)(t.code,{children:"serenity"})," provisions a Docker container specified as ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/yaml/#image",children:(0,r.jsx)(t.code,{children:"image"})}),", checks out your code, and invokes a ",(0,r.jsx)(t.code,{children:"script"})," responsible for running your automated tests."]}),"\n",(0,r.jsxs)(t.li,{children:["In our example, ",(0,r.jsx)(t.code,{children:"script"})," runs:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"npm ci"}),", which installs the Node.js modules that your automation projects depends on"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"npm test"}),", which invokes the ",(0,r.jsxs)(t.a,{href:"https://docs.npmjs.com/cli/v8/commands/npm-test",children:[(0,r.jsx)(t.code,{children:"test"})," script"]})," defined in your ",(0,r.jsx)(t.a,{href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json",children:(0,r.jsx)(t.code,{children:"package.json"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Since all the ",(0,r.jsx)(t.a,{href:"/handbook/getting-started/project-templates/",children:(0,r.jsx)(t.strong,{children:"Serenity/JS Project Templates"})})," are configured to run tests via ",(0,r.jsx)(t.code,{children:"npm test"})," and produce ",(0,r.jsx)(t.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:"Serenity BDD reports"})," under ",(0,r.jsx)(t.code,{children:"target/site/serenity"}),",\nwe configure GitLab to archive any ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/yaml/#artifacts",children:(0,r.jsx)(t.code,{children:"artifacts"})})," under ",(0,r.jsx)(t.code,{children:"target"}),". This way you can ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html",children:"inspect them in GitLab UI"})," or use them in subsequent stages of your pipeline."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"generating-serenity-bdd-reports",children:"Generating Serenity BDD reports"}),"\n",(0,r.jsxs)(t.p,{children:["Serenity/JS uses ",(0,r.jsx)(t.a,{href:"/handbook/reporting/serenity-bdd-reporter",children:"Serenity BDD CLI"})," to generate Serenity BDD HTML reports and living documentation. Serenity BDD CLI is a ",(0,r.jsx)(t.a,{href:"https://github.com/serenity-bdd/serenity-core/tree/main/serenity-cli",children:"Java program"})," downloaded and managed by Serenity/JS.\nHowever, since Serenity BDD CLI is a Java program, it requires a Java Runtime Environment (JRE) which might not be available in your Docker image."]}),"\n",(0,r.jsx)(t.p,{children:"If the Docker image you use doesn't offer a Java Runtime Environment (JRE), you can:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Install a JRE as part of your GitLab CI job"}),"\n",(0,r.jsx)(t.li,{children:"Create a custom Docker image with both Node.js and a JRE"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"installing-a-java-runtime-environment",children:"Installing a Java Runtime Environment"}),"\n",(0,r.jsxs)(t.p,{children:["To install a JRE before running the tests, add ",(0,r.jsx)(t.code,{children:"apt-get update && apt-get install default-jre -y"})," to your GitLab CI script:"]}),"\n",(0,r.jsxs)(a.A,{groupId:"code-examples",children:[(0,r.jsx)(o.A,{value:"node",label:"Node",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title=".gitlab-ci.yml" tab={"label":"Node"}',children:"stages:\n  - test\n\nserenity:\n  stage: test\n  image: node:lts\n  script:\n    // highlight-next-line\n    - apt-get update && apt-get install default-jre -y\n    - npm ci\n    - npm test\n  artifacts:\n    when: always\n    paths:\n      - target\n\n# other configuration\n"})})}),(0,r.jsx)(o.A,{value:"playwright",label:"Playwright",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title=".gitlab-ci.yml" tab={"label":"Playwright"}',children:"stages:\n  - test\n\nserenity:\n  stage: test\n  image: mcr.microsoft.com/playwright:latest\n  script:\n    // highlight-next-line\n    - apt-get update && apt-get install default-jre -y\n    - npm ci\n    - npm test\n  artifacts:\n    when: always\n    paths:\n      - target\n\n# other configuration\n"})})}),(0,r.jsx)(o.A,{value:"webdriverio+puppeteer",label:"WebdriverIO+Puppeteer",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title=".gitlab-ci.yml" tab={"label":"WebdriverIO+Puppeteer"}',children:"stages:\n  - test\n\nserenity:\n  stage: test\n  image: ghcr.io/puppeteer/puppeteer:latest\n  script:\n    // highlight-next-line\n    - apt-get update && apt-get install default-jre -y\n    - npm ci\n    - npm test\n  artifacts:\n    when: always\n    paths:\n      - target\n\n# other configuration\n"})})}),(0,r.jsx)(o.A,{value:"webdriverio+selenium-standalone",label:"WebdriverIO+Selenium Standalone",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title=".gitlab-ci.yml" tab={"label":"WebdriverIO+Selenium Standalone"}',children:"stages:\n  - test\n\nserenity:\n  stage: test\n  image: node:lts\n  services:\n    - selenium/standalone-chrome\n  script:\n    // highlight-next-line\n    - apt-get update && apt-get install default-jre -y\n    - npm ci\n\n    # configure your tests to use Selenium Grid at\n    # selenium__standalone-chrome:4444\n    - npm test\n  artifacts:\n    when: always\n    paths:\n      - target\n\n# other configuration\n"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"building-a-custom-docker-image",children:"Building a custom Docker image"}),"\n",(0,r.jsxs)(t.p,{children:["To avoid installing the Java Runtime Environment every time your GitLab CI pipeline runs, you might prefer to ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/build/building/packaging/",children:"build a custom Docker image"}),",\npublish it to your organisation's artifact registry, and use that image instead."]}),"\n",(0,r.jsxs)(t.p,{children:["To add a JRE to your base Docker image of choice, use a ",(0,r.jsx)(t.code,{children:"Dockerfile"})," like in the example below:"]}),"\n",(0,r.jsxs)(a.A,{groupId:"code-examples",children:[(0,r.jsx)(o.A,{value:"node",label:"Node",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-docker",metastring:'title="Dockerfile" tab={"label":"Node"}',children:"FROM node:lts\n\nRUN apt-get update \\\n && apt-get install default-jre -y \\\n && apt-get clean\n"})})}),(0,r.jsx)(o.A,{value:"playwright",label:"Playwright",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-docker",metastring:'title="Dockerfile" tab={"label":"Playwright"}',children:"FROM mcr.microsoft.com/playwright:latest\n\nRUN apt-get update \\\n && apt-get install default-jre -y \\\n && apt-get clean\n"})})}),(0,r.jsx)(o.A,{value:"webdriverio+puppeteer",label:"WebdriverIO+Puppeteer",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-docker",metastring:'title="Dockerfile" tab={"label":"WebdriverIO+Puppeteer"}',children:"FROM ghcr.io/puppeteer/puppeteer:latest\n\nRUN apt-get update \\\n && apt-get install default-jre -y \\\n && apt-get clean\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"Next, build and publish your Docker image as per the instructions from your artifact registry vendor:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://jfrog.com/help/r/jfrog-artifactory-documentation/docker-registry",children:'Artifactory: "Docker registry"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry",children:'GitHub: "Working with the Container registry"'})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/packages/container_registry/build_and_push_images.html",children:'GitLab: "Build and push container images to the Container Registry"'})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"publishing-serenity-bdd-reports-to-gitlab-pages",children:"Publishing Serenity BDD reports to GitLab Pages"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/project/pages/",children:"GitLab Pages"})," is a feature of GitLab CI that allows you to publish static HTML websites, such as Serenity BDD HTML reports,\nand share them with your team."]}),"\n",(0,r.jsx)(t.p,{children:"GitLab Pages rely on convention over configuration, so to use this feature your pipeline needs to meet the below criteria:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["You must declare a GitLab CI job called ",(0,r.jsx)(t.code,{children:"pages"})," in your ",(0,r.jsx)(t.code,{children:".gitlab-ci.yml"})]}),"\n",(0,r.jsxs)(t.li,{children:["There must be an explicit dependency between the ",(0,r.jsx)(t.code,{children:"serenity"})," job and the ",(0,r.jsx)(t.code,{children:"pages"})," job so that the ",(0,r.jsx)(t.code,{children:"artifacts"})," are propagated between the stages of your pipeline"]}),"\n",(0,r.jsxs)(t.li,{children:["Any static content you wish to publish must be moved to a directory called ",(0,r.jsx)(t.code,{children:"public"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Additionally, since GitLab Pages are ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/project/pages/introduction.html#gitlab-ciyml-for-a-repository-with-code",children:"branch/tag agnostic"}),",\nyou should use ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/yaml/#rulesif",children:(0,r.jsx)(t.code,{children:"rules:if"})})," to limit their deployment only to builds executed\non the ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/project/repository/branches/default.html",children:"default branch"})," in your repository."]}),"\n",(0,r.jsxs)(t.p,{children:["To publish your Serenity BDD reports to GitLab Pages, add a ",(0,r.jsx)(t.code,{children:"pages"})," job to your ",(0,r.jsx)(t.code,{children:".gitlab-ci.yml"})," as per the example below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title=".gitlab-ci.yml"',children:"stages:\n  - test\n  - publish\n\nserenity:\n  # ...\n\npages:\n  stage: publish\n  dependencies:\n    - serenity\n  script:\n    - mv target/site/serenity public\n  artifacts:\n    paths:\n      - public\n  rules:\n    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note that GitLab Pages for repositories hosted on ",(0,r.jsx)(t.a,{href:"https://gitlab.com",children:"gitlab.com"})," are published to ",(0,r.jsx)(t.em,{children:"gitlab.io"}),".\nFor example, project hosted at ",(0,r.jsx)(t.code,{children:"gitlab.com/my-group/my-project"})," will have its GitLab Pages published to ",(0,r.jsx)(t.code,{children:"my-group.gitlab.io/my-project"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Consult GitLab documentation to learn more about the ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/project/pages/getting_started_part_one.html",children:"GitLab Pages URL structure"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"generating-junit-reports",children:"Generating JUnit reports"}),"\n",(0,r.jsxs)(t.p,{children:["GitLab CI recognises test execution reports that conform to the ",(0,r.jsx)(t.a,{href:"https://llg.cubic.org/docs/junit/",children:(0,r.jsx)(t.strong,{children:"JUnit XML standard"})}),".\nSerenity/JS integrates with all the ",(0,r.jsx)(t.strong,{children:"native reporters"})," offered by the supported ",(0,r.jsx)(t.a,{href:"/handbook/test-runners/",children:"test runners"}),",\nincluding the ones producing JUnit reports, such as:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/cucumber/cucumber-js/blob/main/docs/formatters.md#junit",children:"Cucumber.js JUnit formatter"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/jasmine-reporters",children:"Jasmine JUnit reporter"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/mocha-junit-reporter",children:"Mocha JUnit reporter"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://playwright.dev/docs/test-reporters#junit-reporter",children:"Playwright Test JUnit reporter"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://webdriver.io/docs/junit-reporter/",children:"WebdriverIO"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To make GitLab CI recognise a JUnit-standard report produced by your Serenity/JS test suite and ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/testing/unit_test_reports.html",children:"surface test results in your Merge Requests"}),", you should:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Use a native JUnit reporter appropriate for your test runner"}),"\n",(0,r.jsxs)(t.li,{children:["Configure ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/testing/unit_test_reports.html",children:(0,r.jsx)(t.code,{children:"artifacts:reports:junit"})}),"  to tell GitLab where to find the report."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For example, if you have configured your JUnit reporter to produce a report at ",(0,r.jsx)(t.code,{children:"target/junit-results.xml"}),", you can configure your GitLab CI job as follows:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title=".gitlab-ci.yml"',children:"stages:\n  - test\n\nserenity:\n  stage: test\n  # ...\n  artifacts:\n    when: always\n    paths:\n      - target\n    # highlight-start\n    reports:\n      junit: target/junit-results.xml\n    # highlight-end\n\n# other configuration\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"Pro Tip",type:"tip",children:(0,r.jsxs)(t.p,{children:["Note that in the above example I use ",(0,r.jsx)(t.a,{href:"https://docs.gitlab.com/ee/ci/yaml/#artifactswhen",children:(0,r.jsx)(t.code,{children:"artifacts:when: always"})}),".\nThis instructs GitLab to upload and analyse the test report even when the test run fails, which is exactly when you need your test reports the most \ud83d\ude0a"]})}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsx)(t.p,{children:"Congratulations! \ud83e\udd73 You've just learnt how to run your Serenity/JS test scenarios on GitLab CI!\nIf you enjoyed this tutorial, please leave a \ud83d\udc4d in the reactions section below."}),"\n",(0,r.jsxs)(t.p,{children:["New tutorials and videos are coming soon, follow ",(0,r.jsx)(t.a,{href:"https://www.linkedin.com/company/serenity-js",children:"Serenity/JS on LinkedIn"})," and subscribe to ",(0,r.jsx)(t.a,{href:"https://www.youtube.com/channel/UC0RdeVPyjtJopVHvlLrXd1Q",children:"Serenity/JS YouTube channel"})," to get notified when they're available!"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.linkedin.com/company/serenity-js",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/badge/Follow%20Serenity%2FJS-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",alt:"LinkedIn Follow"})}),"\n",(0,r.jsx)(t.a,{href:"https://www.youtube.com/@serenity-js",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/badge/Watch%20@serenity--js-E62117?style=for-the-badge&logo=youtube&logoColor=white",alt:"YouTube Follow"})})]}),"\n",(0,r.jsxs)(t.admonition,{title:"Help us help you",type:"info",children:[(0,r.jsxs)(t.p,{children:["Serenity/JS is a free open-source framework, so we rely on our ",(0,r.jsx)(t.a,{href:"https://github.com/sponsors/serenity-js",children:"wonderful GitHub sponsors"})," to keep the lights on."]}),(0,r.jsx)(t.p,{children:"If you appreciate all the effort that goes into making sophisticated tools easy to work with, please support our work and become a Serenity/JS GitHub Sponsor today!"}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/sponsors/serenity-js",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub Sponsors"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var i=n(34164);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:n,children:t})}},49489:(e,t,n)=>{n.d(t,{A:()=>v});var i=n(96540),r=n(34164),s=n(24245),a=n(56347),o=n(36494),l=n(62814),c=n(45167),d=n(69900);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=u(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[c,h]=g({queryString:n,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),j=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,s]),tabValues:s}}var b=n(11062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function y(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==i&&(c(t),a(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(y,{...t,...e}),(0,x.jsx)(f,{...t,...e})]})}function v(e){const t=(0,b.A)();return(0,x.jsx)(w,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
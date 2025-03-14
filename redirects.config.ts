export default {
    // fromExtensions: [ 'html', 'htm' ], // /myPage.html -> /myPage
    // toExtensions: [ 'exe', 'zip' ], // /myAsset -> /myAsset.zip (if latter exists)
    redirects: [

        // { from: '/community/events-and-articles.html', to: '' },
        // { from: '/community/index.html',               to: '' },
        // { from: '/community/sponsors.html',            to: '' },
        // { from: '/support.html', to: '' },

        { from: '/handbook/web-testing/your-first-web-scenario/', to: '/handbook/tutorials/your-first-web-scenario/' },
        { from: '/handbook/api-testing/your-first-api-scenario/', to: '/handbook/tutorials/your-first-api-scenario/' },
        { from: '/handbook/getting-started/serenity-js-with-playwright-test/', to: '/handbook/test-runners/playwright-test/' },
        { from: '/handbook/getting-started/serenity-js-with-protractor/', to: '/handbook/test-runners/protractor/' },

        { from: '/privacy-policy/', to: '/legal/privacy-policy/' },
        { from: '/license/', to: '/legal/license/' },

        { from: '/handbook/api-testing/blended-testing/', to: '/handbook/web-testing/blended-testing/' },

        { from: [ '/handbook/about/', '/handbook/why-serenityjs.html' ], to: '/handbook/#why-choose-serenityjs' },
        {
            from: [
                '/handbook/about/architecture/',
                '/handbook/integration/architecture.html',
                '/handbook/getting-started/architecture'
            ],
            to: '/handbook/architecture'
        },
        {
            from: [
                '/handbook/about/installation/',
                '/handbook/integration/installation.html',
                '/handbook/getting-started/installation',
                '/handbook/integration/runtime-dependencies.html'
            ],
            to: '/handbook/installation'
        },
        {
            from: [
                '/handbook/about/serenity-js-v3/',
                '/handbook/getting-started/upgrading-to-serenity-js-3/',
                '/handbook/tutorials/upgrading-to-serenity-js-3',
                '/handbook/integration/serenity-2-migration-guide.html',
                '/handbook/release-notes/serenity-js-2.html',
                '/handbook/release-notes/serenity-js-3.html',
            ],
            to: '/handbook/tutorials/upgrading-from-serenity-js-2/' },

        { from: '/handbook/getting-started/serenity-js-with-webdriverio/', to: '/handbook/test-runners/webdriverio' },

        // Old changelog
        { from: '/changelog/', to: '/releases/' },
        { from: '/changelog/3.24.0/', to: 'https://github.com/serenity-js/serenity-js/releases/tag/v3.24.0' },
        { from: '/changelog/3.21.0/', to: 'https://github.com/serenity-js/serenity-js/releases/tag/v3.21.0' },
        { from: '/changelog/3.15.0/', to: 'https://github.com/serenity-js/serenity-js/releases/tag/v3.15.0' },
        { from: '/changelog/3.3.0/', to: 'https://github.com/serenity-js/serenity-js/releases/tag/v3.3.0/' },
        { from: '/changelog/3.2.0/', to: 'https://github.com/serenity-js/serenity-js/releases/tag/v3.2.0/' },

        // Serenity/JS v2 website
        {
            from: '/handbook/thinking-in-serenity-js/screenplay-pattern.html',
            to: '/handbook/design/screenplay-pattern'
        },

        { from: '/contributing/', to: '/community/contributing/' },
        { from: '/contributing.html', to: '/community/contributing/' },

        { from: '/handbook/about.html', to: '/handbook/#why-choose-serenityjs' },
        { from: '/handbook/demo.html', to: '/handbook/' },
        { from: '/handbook/design/abilities.html', to: '/api/core/class/Ability' },
        {
            from: [
                '/handbook/design/actors.html',
                '/handbook/thinking-in-serenity-js/actors-and-asynchrony.html'
            ], to: '/api/core/class/Actor'
        },
        { from: '/handbook/design/errors.html', to: '/api/core/class/RuntimeError' },
        { from: '/handbook/design/interactions.html', to: '/api/core/class/Interaction' },
        { from: '/handbook/design/questions.html', to: '/api/core/class/Question' },
        {
            from: [
                '/handbook/design/screenplay-pattern.html',
                '/design/screenplay-pattern.html'
            ], to: '/handbook/design/screenplay-pattern'
        },
        { from: '/handbook/design/tasks.html', to: '/api/core/class/Task' },
        { from: '/handbook/design/the-trouble-with-test-scripts.html', to: '/handbook/design' },

        {
            from: '/handbook/integration/jira-and-other-issue-trackers.html',
            to: '/handbook/integration/jira-and-other-issue-trackers'
        },
        { from: '/handbook/integration/serenityjs-and-cucumber.html', to: '/handbook/test-runners/cucumber' },
        { from: '/handbook/integration/serenityjs-and-jasmine.html', to: '/handbook/test-runners/jasmine' },
        { from: '/handbook/integration/serenityjs-and-mocha.html', to: '/handbook/test-runners/mocha' },
        { from: '/handbook/integration/serenityjs-and-protractor.html', to: '/handbook/test-runners/protractor' },
        { from: '/handbook/release-notes/index.html', to: '/releases/' },

        { from: '/handbook/release-notes/versioning.html', to: '/releases/versioning' },

        { from: '/handbook/reporting/artifact-archiver.html', to: '/handbook/reporting/artifact-archiver' },
        { from: '/handbook/reporting/console-reporter.html', to: '/handbook/reporting/console-reporter' },
        { from: '/handbook/reporting/serenity-bdd-reporter.html', to: '/handbook/reporting/serenity-bdd-reporter' },
        { from: '/handbook/reporting/stream-reporter.html', to: '/handbook/reporting/stream-reporter' },
        { from: '/handbook/thinking-in-serenity-js/assertions.html', to: '/handbook/design/assertions' },
        { from: '/handbook/thinking-in-serenity-js/hello-serenity-js.html', to: '/handbook' },
        { from: '/handbook/thinking-in-serenity-js/index.html', to: '/handbook/design/' },
        { from: '/handbook/thinking-in-serenity-js/test-runners.html', to: '/handbook/test-runners/' },
        { from: '/handbook/thinking-in-serenity-js/testing-rest-apis.html', to: '/handbook/api-testing/' },
        { from: '/handbook/thinking-in-serenity-js/testing-web-uis.html', to: '/handbook/web-testing/' },

        { from: '/license.html', to: '/legal/license/' },
        { from: '/changelog.html', to: '/releases' },

        // Serenity/JS v2 API docs
        { from: '/modules/assertions',          to: '/api/assertions' },
        { from: '/modules/console-reporter',    to: '/api/console-reporter' },
        { from: '/modules/core',                to: '/api/core' },
        { from: '/modules/cucumber',            to: '/api/cucumber' },
        { from: '/modules/jasmine',             to: '/api/jasmine' },
        { from: '/modules/local-server',        to: '/api/local-server' },
        { from: '/modules/mocha',               to: '/api/mocha' },
        { from: '/modules/protractor',          to: '/api/protractor' },
        { from: '/modules/rest',                to: '/api/rest' },
        { from: '/modules/serenity-bdd',        to: '/api/serenity-bdd' },
        { from: '/modules/webdriverio',         to: '/api/webdriverio' },
    ],
}

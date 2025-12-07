# Serenity/JS Website

[![Build Status](https://github.com/serenity-js/serenity-js.org/actions/workflows/main.yaml/badge.svg?branch=main)](https://github.com/serenity-js/serenity-js.org/actions)
[![Known Vulnerabilities](https://snyk.io/test/github/serenity-js/serenity-js.org/badge.svg)](https://snyk.io/test/github/serenity-js/serenity-js.org)
[![Support Serenity/JS on GitHub](https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github)](https://github.com/sponsors/serenity-js)

The **Serenity/JS Website** repository hosts the source for [serenity-js.org](https://serenity-js.org), including the documentation, tutorials, API reference, and community resources.  
The site is built using [**Docusaurus**](https://docusaurus.io/), extended with the [TypeDoc API plugin](https://github.com/milesj/docusaurus-plugin-typedoc-api/) to generate the Serenity/JS API documentation directly from the codebase.

## Getting Started

If you're new to Serenity/JS, explore:

- [**Tutorials**](https://serenity-js.org/handbook/tutorials/)
- [**Handbook**](https://serenity-js.org/handbook/)
- [**API Documentation**](https://serenity-js.org/api/)
- [**Project Templates**](https://serenity-js.org/handbook/project-templates/)

## Contributing

Contributions to the Serenity/JS website are welcome.  
Please read the [Contributing Guide](https://serenity-js.org/community/contributing/).

You can contribute using either **GitHub Codespaces** or your **local development environment**.

### Using GitHub Codespaces

This repository supports GitHub Codespaces.

To start contributing instantly:
1. [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) this repository
   and [create a new branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository) in your fork.
2. Open your fork in a Codespace (`Code → Codespaces → Create Codespace`).
3. Wait for the environment to provision and dependencies to install automatically.
4. Run a full build with:

```shell
npm run build
```

5. Commit your changes using conventional commit messages,  e.g. `docs(website): fixed a typo`, then [open a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

You can launch a Codespace directly:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?ref=main&repo=serenity-js/serenity-js.org)


### Using a Local Environment

To work on the website locally:
- [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) this repository
- [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) your fork
- Install a recent Node.js LTS version, as described in the [Serenity/JS installation guide](https://serenity-js.org/handbook/installation/).
- Install dependencies:
```shell
npm ci
```
- Build the site locally:
```shell
npm run build
```
- Start the development server:
```shell
npm start
```
- Implement your changes, build again, and [submit a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests).


### Useful Commands

Install dependencies:
```shell
npm ci
```

Run local development server:
```shell
npm start
```

Full production build:
```shell
npm run build
```


## Stay Connected

Follow Serenity/JS to learn about new features, tutorials, and releases!

[![Follow Serenity/JS on LinkedIn](https://img.shields.io/badge/LinkedIn-Serenity%2FJS%20-0077B5?logo=linkedin)](https://www.linkedin.com/company/serenity-js)
[![Watch Serenity/JS on YouTube](https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube)](https://www.youtube.com/@serenity-js)
[![Join Serenity/JS Community Chat](https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix)](https://matrix.to/#/#serenity-js:gitter.im)

⭐ Star the main [Serenity/JS repository](https://github.com/serenity-js/serenity-js) to help others discover the framework!

[![GitHub stars](https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge)](https://github.com/serenity-js/serenity-js)

## Support Serenity/JS

Serenity/JS is maintained by a small team committed to empowering high-quality, scalable test automation.
If the framework benefits your work, consider sponsoring the project:

[![GitHub Sponsors](https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/serenity-js)

## License

The Serenity/JS code base is licensed under the [Apache-2.0](https://opensource.org/license/apache-2-0) license,
while its documentation and the [Serenity/JS Handbook](https://serenity-js.org/handbook/) are licensed under the [Creative Commons BY-NC-SA 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).

See the [Serenity/JS License](https://serenity-js.org/legal/license/).

## Support

Support ongoing development through [GitHub Sponsors](https://github.com/sponsors/serenity-js). Sponsors gain access to [Serenity/JS Playbooks](https://github.com/serenity-js/playbooks)
and priority help in the [Discussions Forum](https://github.com/orgs/serenity-js/discussions).

For corporate sponsorship or commercial support, please contact [Jan Molak](https://www.linkedin.com/in/janmolak/).

[![GitHub Sponsors](https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/serenity-js)

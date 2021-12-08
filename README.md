## Demo 

https://srivastava-abhijeet.github.io/resume/


## Starter Template

This project is based on Spectral by HTML5 UP https://html5up.net/spectral & https://github.com/anubhavsrivastava/gatsby-starter-spectral

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Version of npm packages in package.json are tested on node v 17.  Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

```sh
cd resume
npm install
gatsby develop
```

### Personalization

Edit `config.js` to put up your details

```javascript
module.exports = {
  siteTitle: 'Resume in Gatsby', // <title>
  ...
  heading: 'Abhijeet',
  subHeading: 'Full Stack Developer',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/srivastava-abhijeet',
    }
    ...
  ],
};

```

### Deploying using Github page

`package.json` has a default script that uses `gh-pages` module to publish on Github pages. Simply running `npm run deploy` would publish the site on github pages.

Additionally, it also has [path-prefix](https://www.gatsbyjs.org/docs/path-prefix/) value set for gatsby config in `config.js`. Change `pathPrefix` to relevant path if your gatsby site is hosted on subpath of a domain, `https://theanubhav.com/somePath/`. If you are hosting it as root site, remove the pathPrefix configuration.



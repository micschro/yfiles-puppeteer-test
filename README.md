# yFiles Testing with Mocha+Puppeteer

A small sample showing how to test the yFiles library with [Mocha](https://mochajs.org/) and [Puppetteer](https://github.com/GoogleChrome/puppeteer)/chrome headless

## Installation

`yarn install`
or 
`npm install`

## Running

1. Add your yFiles for HTML license content in `app/index.html`
2. Put the `es6-modules/` folder of your yFiles for HTML package into `./app/vendor/yfiles/`
3. `yarn run server` or `npm run server`
3. `yarn run test` or `npm run test`
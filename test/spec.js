const puppeteer = require('puppeteer')
const {expect} = require('chai')

let browser = null
let page = null

before(async function () {
  browser = await puppeteer.launch({
    headless: true,
    timeout: 10000
  })
})

after (function () {
  browser.close();
});

beforeEach(async function() {
  page = await browser.newPage()
  page.on("pageerror", function(err) {
    expect.fail(null, null, `Page error: ${err.toString()}`)
  })
  await page.goto('http://localhost:8080')
})

describe('ExaGraphYFiles', function () {
  it('should create GraphComponent in DOM', async () => {
    const divId = await page.evaluate(async () => {
      return graphComponent.div.id
    })
    expect(divId).to.equal('graphComponent')
  })

})
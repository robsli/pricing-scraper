const router = require('express').Router()
const nightmare = require('nightmare')({ show: true })

const productLinks = require('../data/urls')
const { reducer } = require('../utilities/site-map.utilities')
const { getSiteMap } = require('../utilities/site-map.utilities')

const scrape = async (request, response) => {

  let scrapedData = {
    bookshelves: [],
    coffeeTables: [],
    nightstands: [],
    sideTables: []
  }

  scrapedData.bookshelves = await productLinks.bookshelves.reduce(reducer(accumulator, productLink),
    Promise.resolve(scrapedData.bookshelves).then(function(results) { return results }))

  scrapedData.sideTables = await productLinks.sideTables.reduce(reducer(accumulator, productLink),
    Promise.resolve(scrapedData.sideTables).then(function(results) { return results }))

  await nightmare.end()

  response.send(await scrapedData)
}

router.get('/', scrape)

module.exports = router

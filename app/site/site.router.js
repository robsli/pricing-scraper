const router = require('express').Router()

const welcomePage = (request, response) => {
  response.send('Welcome to the scraper site!')
}

router.get('/', welcomePage)

module.exports = router

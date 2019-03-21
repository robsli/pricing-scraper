const router = require('express').Router()

const pageNotFound = (request, response) => {
  response.status(404).send('Sorry! Page not found.')
}

router.get('/', pageNotFound)


module.exports = pageNotFound

const router = require('express').Router()
const pg = require('pg')

const addItem = (request, response) => {
  console.log('Request body:')
  console.log(request.body)

  response.status(200).send(request.body)
}

router.post('/add-item', addItem)

module.exports = router

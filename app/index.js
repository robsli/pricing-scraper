const express = require('express')
const { Client } = require('pg')

const port = process.env.PORT || 3000
const app = express()

app.use(express.json());

const client = new Client({
  connectionString: process.env.DATABASE_URL
})

client.connect()

client.query('SELECT * from products;', (error, response) => {
  if (error) throw error;

  console.log('Connected to the Database!')
  console.log('Database URL is: ', process.env.DATABASE_URL)
  for (let row of response.rows) {
    console.log(JSON.stringify(row))
  }
  client.end()
})

app.use('/home', require('./site/site.router'))
app.use('/items', require('./items/items.router'))
app.use('/scrape', require('./price-scraper/price-scraper.router'))
app.use('/', require('./errors/page-not-found.router'))

app.listen(port, () => console.log(`Price scraper server running on port ${port}!`))

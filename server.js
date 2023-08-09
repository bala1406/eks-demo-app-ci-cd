const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello sir im bharath icu student - tambaram branch ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

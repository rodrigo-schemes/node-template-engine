const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
  const user = {
    name: 'Rodrigo',
    surname: 'Bitencourt',
  }

  res.render('home', { user: user })
})

app.listen(3000)
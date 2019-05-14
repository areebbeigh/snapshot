const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const nunjucks = require('nunjucks')

const webshotHelper = require('./webshot')
const posts = require('./posts')

const app = express()

// Middleware
app.use(morgan('short'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

nunjucks.configure('views', {
  autoescape:true,
  express:app
});

app.set('views','./views');

app.set('view engine', 'html')

app.get('/api/post', async (req, res) => {
  const postUrl = req.query.url
  try {
    await posts.show(postUrl, res)
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
})

app.get('/api/capture', (req, res) => {
  const postUrl = req.query.url
  try {
    webshotHelper.capture(postUrl, res)
  } catch (err) {
    res.status(500).send({
      error: err.message
    })
  }
})

const path = require('path')
app.use('/', express.static(path.resolve(__dirname, 'build')))

app.listen(process.env.PORT || 8081, x => console.log('The server is running!'))


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
app.use(cors({ credentials: true, origin: 'http://localhost:8080' }))

nunjucks.configure('views', {
  autoescape:true,
  express:app
});

app.set('views','./views');

app.set('view engine', 'html')

// app.get('/', (req, res) => {
//   res.send(`hi. 
//   <div id="post" style="width:500px;">
//   <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Feuphinx%2Fposts%2F111954209705484&width=500" width="500" height="191" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
//   <!--<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I just made a logo for <a href="https://twitter.com/saber_land?ref_src=twsrc%5Etfw">@saber_land</a>:<br><br>()==[:::::::::::::&gt;</p>&mdash; EGOIST (@_egoistlily) <a href="https://twitter.com/_egoistlily/status/1123626834950742016?ref_src=twsrc%5Etfw">May 1, 2019</a></blockquote>-->
//   </div>
//   <script>
//   window.callPhantom({y: 1})
//   window.onload = () => {
//     console.log('here')
//   }
//   </script>
//   <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`)
// })

app.get('/post', async (req, res) => {
  const postUrl = req.query.url
  try {
    await posts.show(postUrl, res)
  } catch (err) {
    res.send({
      error: err.message
    })
  }
})

app.get('/capture', (req, res) => {
  const postUrl = req.query.url
  try {
    webshotHelper.capture(postUrl, res)
  } catch (err) {
    res.send(err)
  }
})

app.listen(process.env.PORT || 8081, x => console.log('The server is running!'))


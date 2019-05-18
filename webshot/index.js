const webshot = require('webshot');
const posts = require('../posts')

const selectors = {
  twitter: '.twitter-tweet',
  facebook: '.fb-post',
  instagram: 'iframe'
}

const options = {
  shotSize: {
    width: 'all',
    height: 'all'
  },
  errorIfStatusIsNot200: true,
  takeShotOnCallback: true,
  renderDelay: 5000,
  onLoadFinished: function () {
    var taken = false
    setInterval(function () {
      if (document.readyState == 'complete' && !taken) {
        taken = true
        setTimeout(function () { window.callPhantom('takeShot') }, 100)
      }
    }, 500)
  },
}

function capture(postUrl, req, res) {
  const url = `${req.protocol}://${req.get('host')}/api/post?url=${postUrl}`
  console.log(url)
  const platform = posts.platform(postUrl)
  options.captureSelector = selectors[platform]

  if (platform === 'facebook') options.renderDelay = 10000
  console.log(options)

  const renderStream = webshot(url, options)
  let imgBase64 = ''

  renderStream.on('data', chunk => {
    imgBase64 += chunk.toString('base64')
  }) 

  renderStream.on('end', () => {
    const img = `data:image/png;base64,${imgBase64}`
    if (img == 'data:image/png;base64,') {
      res.status(500).send({
        error: 'Could not snap post. The url could be malformed.'
      })
    } else {
      res.send({
        img
      })
    }
  })

  renderStream.on('error', console.log)
}

module.exports = {
  capture
}


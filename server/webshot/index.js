const posts = require('../posts')
const webshot = require('webshot');

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
  takeShotOnCallback: true,
  renderDelay: 10000,
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
  console.log('here', postUrl)
  const url = `${req.protocol}://${req.get('host')}/api/post?url=${postUrl}`
  console.log(url)
  options.captureSelector = selectors[posts.platform(postUrl)]

  console.log(options)

  const renderStream = webshot(url, options)
  let imgBase64 = ''

  renderStream.on('data', chunk => {
    imgBase64 += chunk.toString('base64')
  }) 

  renderStream.on('end', () => {
    const img = `data:image/png;base64,${imgBase64}`
    // TODO: Send back an error if no image data is collected
    res.send({
      img
    })
  })
}

module.exports = {
  capture
}


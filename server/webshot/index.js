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

function capture(postUrl, res) {
  console.log('here', postUrl)
  const url = `http://localhost:8081/post?url=${postUrl}`
  options.captureSelector = selectors[posts.platform(postUrl)]

  console.log(options)

  const renderStream = webshot(url, options)
  let imgBase64 = ''

  renderStream.on('data', chunk => {
    imgBase64 += chunk.toString('base64')
  }) 

  renderStream.on('end', () => {
    const url = `data:image/png;base64,${imgBase64}`
    res.send(url)
  })
}

module.exports = {
  capture
}


const axios = require('axios')

function isValidUrl(url) {
  const pattern = /^(http:\/\/|https:\/\/)*(www\.)*(twitter)\.com(\/.+\/status\/\d+)$/i
  const re = new RegExp(pattern)
  return re.exec(url) ? true : false
}

async function getEmbedCode(url) {
  if (isValidUrl(url)) {
    try {
      const response = await axios.get(`https://publish.twitter.com/oembed?url=${url}`)
      return response.data.html
    }
    catch (err) {
      throw err
    }
  }
}

module.exports = {
  isValidUrl,
  getEmbedCode
}


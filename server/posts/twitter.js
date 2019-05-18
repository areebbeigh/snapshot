const axios = require('axios')

function isValidUrl(url) {
  const pattern = /^((http:\/\/|https:\/\/)*(www\.)*(twitter)\.com(\/.+\/status\/\d+)\/?)/i
  const re = new RegExp(pattern)
  const match = url.match(re)
  return match ? match[1] : false
}

async function getEmbedCode(url) {
  try {
    if (url.slice(-1) === '/') url = url.slice(0, -1)
    const response = await axios.get(`https://publish.twitter.com/oembed?url=${url}`)
    return response.data.html
  }
  catch (err) {
    throw err
  }
}

module.exports = {
  isValidUrl,
  getEmbedCode,
}


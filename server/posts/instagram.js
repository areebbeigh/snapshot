const axios = require('axios')
const absolutify = require('absolutify')

module.exports = {
  isValidUrl(url) {
    const pattern = /(^(http:\/\/|https:\/\/)*(www\.)*(instagram)\.com(\/p\/\w+)\/?)/i
    const re = new RegExp(pattern)
    const match = url.match(re)
    return match ? match[1] : false
  },
  
  async getEmbedCode(url, req) {
    try {
      if (url.slice(-1) !== '/') url += '/'
      await axios.get(`https://api.instagram.com/oembed?url=${url}`)
      const embedUrl = require('url').resolve(url, 'embed/captioned')
      const embedProxy = `${req.protocol}://${req.get('host')}/api/proxy?url=${embedUrl}&base=https://www.instagram.com`
      return `<iframe src=${embedProxy}></iframe>`
    }
    catch (err) {
      throw err
    }
  }
}


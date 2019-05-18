const axios = require('axios')
const absolutify = require('absolutify')

module.exports = {
  isValidUrl(url) {
    const pattern = /^(http:\/\/|https:\/\/)*(www\.)*(instagram)\.com(\/p\/\w+)\/?$/i
    const re = new RegExp(pattern)
    return re.exec(url) ? true : false
  },
  
  async getEmbedCode(url, req) {
    try {
      if (url.slice(-1) !== '/') url += '/'
      const embedUrl = require('url').resolve(url, 'embed/captioned')
      const embedProxy = `${req.protocol}://${req.get('host')}/api/proxy?url=${embedUrl}&base=https://www.instagram.com`
      return `<iframe src=${embedProxy}></iframe>`
    }
    catch (err) {
      throw err
    }
  }
}


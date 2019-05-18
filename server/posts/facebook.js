const axios = require('axios')

module.exports = {
  isValidUrl(url) {
    const pattern = /^(http:\/\/|https:\/\/)*(www\.)*(facebook)\.com(\/.+\/posts\/\d+)\/?/i
    const re = new RegExp(pattern)
    const match = url.match(re)
    return match ? match[1] : false
  },

  async getEmbedCode(url) {
    try {
      const response = await axios.get(`https://www.facebook.com/plugins/post/oembed.json/?url=${url}`)
      return response.data.html
    }
    catch (err) {
      throw err
    }
  }
}


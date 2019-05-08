const axios = require('axios')

module.exports = {
  isValidUrl(url) {
    const pattern = /^(http:\/\/|https:\/\/)*(www\.)*(facebook)\.com(\/.+\/posts\/\d+)$/i
    const re = new RegExp(pattern)
    return re.exec(url) ? true : false
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


const axios = require('axios')
module.exports = {
  isValidUrl(url) {
    const pattern = /^(http:\/\/|https:\/\/)*(www\.)*(instagram)\.com(\/p\/\w+)\/?$/i
    const re = new RegExp(pattern)
    return re.exec(url) ? true : false
  },
  
  async getEmbedCode(url) {
    try {
      const response = await axios.get(`https://api.instagram.com/oembed?url=${url}`)
      return response.data.html
    }
    catch (err) {
      throw err
    }
  }
}


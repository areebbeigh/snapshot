const axios = require('axios')

module.exports = {
  isValidUrl(url) {
    const pattern = /^(http:\/\/|https:\/\/)*(www\.)*(facebook)\.com(\/.+\/posts\/\d+)$/i
    const re = new RegExp(pattern)
    return re.exec(url) ? true : false
  },

  async getEmbedCode(url) {
    html = `<div id="fb-root"></div>
    <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
    <div class="fb-post" data-href="${url}"></div>`
    return html
  }
}


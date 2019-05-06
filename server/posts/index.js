const twitter = require('./twitter')
const facebook = require('./facebook')
const instagram = require('./instagram')

const helpers = {
  twitter,
  facebook,
  instagram
}

function getHelper(url) {
  for (const platform in helpers) {
    if (helpers[platform].isValidUrl(url)) {
      return helpers[platform]
    }
  }
  return false
}

module.exports = {
  async getEmbedCode(postUrl) {
    const helper = getHelper(postUrl)
    if (helper) {
      try {
        const embedHtml = await helper.getEmbedCode(postUrl)
        return `<div id="post" style="display:inline-block;background:#fff;">${embedHtml}</div>`
      }
      catch (err) {
        throw err
      }
    }
    throw new Error('Unsupported URL')
  }
}


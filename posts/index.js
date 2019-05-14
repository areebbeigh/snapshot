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
      return {
        helperName: platform,
        helper: helpers[platform]
      } 
    }
  }
  throw Error('Unsupported URL')
}

module.exports = {
  async show(postUrl, res) {
    const { helper, helperName } = getHelper(postUrl)
    if (helper) {
      try {
        const embedCode = await helper.getEmbedCode(postUrl)
        res.render(helperName, { embedCode })
      }
      catch (err) {
        throw Error(err)
      }
    } else {
      throw Error('Unsupported URL')
    }
  },

  platform(postUrl) {
    return getHelper(postUrl).helperName
  }
}


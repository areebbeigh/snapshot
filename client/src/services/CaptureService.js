import Api from './api'

export default {
  getImageUrl(postUrl) {
    return Api().get('capture', {
      params: {
        url: postUrl
      }
    })
  }
}


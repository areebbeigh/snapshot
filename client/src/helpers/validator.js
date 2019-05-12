module.exports = {
  isValidUrl(url) {
    // return true
    const patterns = [
      /^(http:\/\/|https:\/\/)*(www\.)*(facebook)\.com(\/.+\/posts\/\d+)$/i,
      /^(http:\/\/|https:\/\/)*(www\.)*(instagram)\.com(\/p\/\w+)\/?$/i,
      /^(http:\/\/|https:\/\/)*(www\.)*(twitter)\.com(\/.+\/status\/\d+)$/i
    ]

    let isValid = false

    for (const p of patterns) {
      let re = new RegExp(p)
      if (re.exec(url)) {
        isValid = true
        console.log(p, re, url)
      }
    }
    console.log(url, isValid)
    return isValid
  }
}


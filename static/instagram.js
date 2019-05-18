window.onload = function () {
  var iframe = document.querySelector('iframe')
  var iframeDoc = iframe.contentDocument || iframe.contentWindow.document
  // Remove truncating css from username
  iframeDoc.querySelector('.UsernameText').style.maxWidth = 'initial'
  // Removed unwanted stuff
  var removeList = ['.ViewProfileButton', '.HoverCard', '.CommentInput']
  removeList.forEach(function (s) {
    try {
      console.log(s)
      iframeDoc.querySelector(s).remove()
    } catch (err) {
      console.error(err)
    }
  })
  // Move IG icon to header
  try {
    var igGlyph = iframeDoc.querySelector('.Footer > a.Glyph')
    igGlyph.remove()
    iframeDoc.querySelector('.Header').appendChild(igGlyph)
    iframeDoc.querySelector('.Footer').remove()
  } catch (err) {
    console.error(err)
  }
  // Remove story ring
  try {
    iframeDoc.querySelector('.StoryRing').remove()
    iframeDoc.querySelector('.InsideRing').classList.remove('InsideRing')
  } catch (err) {
    console.error(err)
  }
  // Add comments count next to likes count
  try {
    var comments = iframeDoc.querySelector('.CaptionCommentsExpand')
    var commentsText = comments.innerText
    var re = new RegExp(/view all (.+) comments/i)
    var commentsCount = commentsText.match(re)[1]
    var link = iframeDoc.createElement('a')
    link.innerText = ' ' + commentsCount + ' comments'
    link.style.marginLeft = '8px'
    iframeDoc.querySelector('.SocialProof').appendChild(link)
    comments.remove()
  } catch (err) {
    console.error(err)
  }

  iframe.height = iframeDoc.querySelector('.Embed').scrollHeight + 'px'
}  

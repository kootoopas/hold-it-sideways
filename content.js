(function() {
  function _selectPageElementByHost() {
    const host = window.location.host

    switch(host) {
      case 'mangarock.com':
        return document.getElementsByClassName('slick-slide slick-active')[0];
    }

    const keywords = ['manga', 'chapter', 'reader', 'anime', 'otaku', 'comics', 'cartoon'];
    if (keywords.some((keyword) => host.indexOf(keyword) !== -1)) {
      console.log(host)
      return document.getElementsByTagName('html')[0];
    }

    throw new RangeError(host + ' doesn\'t seem to be a reader');
  }

  try {
    const page = _selectPageElementByHost();
    var inverted = false;

    window.addEventListener('keydown', function(e) {
      // alt + I
      if (e.altKey && e.keyCode === 73) {
        inverted = !inverted
        page.style.transform = inverted
          ? 'rotate(90deg)'
          : ''
      }
    })
  } catch(e) {}
})();

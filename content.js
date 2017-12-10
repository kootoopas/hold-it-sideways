(function() {
  function _getPageSelectorByHost() {
    var host = window.location.host;

    switch(host) {
      case 'mangarock.com':
        return function() {
          return document.getElementsByClassName('slick-initialized slick-slider')[0];
        }
    }

    var keywords = ['manga', 'chapter', 'reader', 'anime', 'otaku', 'comics', 'cartoon'];
    var hostContainsKeyword = keywords.some(function(keyword) {
      return host.indexOf(keyword) !== -1;
    });

    if (hostContainsKeyword) {
      return function() {
        return document.getElementsByTagName('html')[0];
      }
    }

    throw new RangeError(host + ' doesn\'t seem to be a reader');
  }

  try {
    var selectPage = _getPageSelectorByHost();
    var inverted = false;

    window.addEventListener('keydown', function(e) {
      // alt + I
      if (e.altKey && e.keyCode === 73) {
        inverted = !inverted;
        selectPage().style.transform = inverted
          ? 'rotate(90deg)'
          : '';
      }
    })
  } catch(e) {}
})();

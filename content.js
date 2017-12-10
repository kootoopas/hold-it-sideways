(function() {

  function _selectPageElementByHost() {
      switch(window.location.host) {
        case 'mangarock.com':
          return document.getElementsByClassName('slick-slide slick-active')[0];
        default:
          return document.getElementsByClassName('html')[0];
      }
  }

  const page = _selectPageElementByHost();

  let inverted = false;

  window.addEventListener("keydown", function(e) {
    // alt + I
    if (e.altKey && e.keyCode === 73) {
      inverted = !inverted
      page.style.transform = inverted
        ? 'rotate(90deg)'
        : ''
    }
  })
})();

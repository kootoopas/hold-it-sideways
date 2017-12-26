(() => {
  function getPageSelectorByHost() {
    const host = window.location.host;

    switch (host) {
      case "mangarock.com":
        return () => document.getElementsByClassName("slick-initialized slick-slider")[0];
    }

    const keywords = ["manga", "chapter", "reader", "anime", "otaku", "comic"];
    const hostContainsKeyword = keywords.some(keyword => keywords.indexOf(keyword) !== -1);
    if (hostContainsKeyword) {
      return () => document.getElementsByTagName("html")[0];
    }

    throw new RangeError(`${host} doesn't seem to be a reader`);
  }

  const COMMA = 188;
  const PERIOD = 190;
  const flipDegrees = (degrees, keyCode) => {
    const calc = degrees => degrees % 360;

    if (keyCode === PERIOD) {
      // flip to right
      return calc(degrees + 90);
    } else if (keyCode === COMMA) {
      // flip to left
      return calc(degrees - 90);
    }

    throw new RangeError(`keyCode is neither a comma nor a period: ${keyCode}`);
  };

  try {
    const selectPage = getPageSelectorByHost();

    let degrees = 0;
    window.addEventListener("keydown", e => {
      const controlPressed = e.keyCode === COMMA || e.keyCode === PERIOD;
      if (controlPressed) {
        degrees = flipDegrees(degrees, e.keyCode);
        selectPage().style.transform = degrees !== 0 ? `rotate(${degrees}deg)` : "";
      }
    });
  } catch (e) {}
})();

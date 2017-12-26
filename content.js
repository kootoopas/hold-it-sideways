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

  try {
    const selectPage = getPageSelectorByHost();
    let inverted = false;

    window.addEventListener("keydown", e => {
      // alt + I
      if (e.altKey && e.keyCode === 73) {
        inverted = !inverted;
        selectPage().style.transform = inverted ? "rotate(90deg)" : "";
      }
    });
  } catch (e) {}
})();

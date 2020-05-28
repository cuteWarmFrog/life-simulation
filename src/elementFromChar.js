function elementFromChar(legend, ch) {
    if (ch == " ")
      return null;
    const element = new legend[ch]();
    element.originChar = ch;
    return element;
}

module.exports = elementFromChar;
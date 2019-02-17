export default class {
  constructor(words) {
    this.words = words;
  }

  findMatching(pattern) {
    return this.words.filter(word => {
      if ( word.length != pattern.length ) {
        // Different size
        return false;
      }

      for (var x = 0, c=''; c = pattern.charAt(x); x++) {
        if (c == '.') {
          continue;
        }
        if (word.charAt(x) != c.toLowerCase() && word.charAt(x) != c.toUpperCase()) {
          // Different char
          return false;
        }
      }
      return true;
    });
  }
}


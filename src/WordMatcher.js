const DIGRAPH_IJ_AS_ONE = 'ÿ';

const mapDigraphsToOneChar = (word) => {
  return word.replace('ij', 'ÿ');
};

const WILDCARDS = ['.', '%'];

export default class WordMatcher {
  constructor(words) {
    this.words = words;
  }

  findMatching(pattern) {
    let i = 0;
    let max = 100000;

    pattern = mapDigraphsToOneChar(pattern);
    return this.words.filter(word => {
      if ( i >= max ) {
        return false;
      }
      let isMatch = this.matchesPattern(word, pattern);
      if ( isMatch ) {
        i++;
      }
      return isMatch;
    });
  }

  matchesPattern(original, pattern) {
    let word = mapDigraphsToOneChar(original);

    if ( word.length != pattern.length ) {
      // Different size
      return false;
    }

    for (var x = 0, c = ''; c = pattern.charAt(x); x++) {
      if (WILDCARDS.includes(c)) {
        continue;
      }

      const c2 = word.charAt(x);
      if (c2 != c.toLowerCase() && c2 != c.toUpperCase()) {
        // Different char
        return false;
      }
    }
    return true;
  }
}


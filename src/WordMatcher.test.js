import WordMatcher from './WordMatcher';

test('finds words that match exactly', () => {
  var matcher = new WordMatcher(['foo', 'bar']);
  expect(matcher.findMatching('foo')).toEqual(['foo']);
  expect(matcher.findMatching('bar')).toEqual(['bar']);
  expect(matcher.findMatching('aaa')).toEqual([]);
});

test('finds words with wildcards', () => {
  var words = [
    'bar',
    'bat',
    'bot',
    'cat',
  ];
  var matcher = new WordMatcher(words);
  expect(matcher.findMatching('ba.')).toEqual(['bar', 'bat']);
  expect(matcher.findMatching('.at')).toEqual(['bat', 'cat']);
  expect(matcher.findMatching('.a.')).toEqual(['bar', 'bat', 'cat']);
  expect(matcher.findMatching('...')).toEqual(['bar', 'bat', 'bot', 'cat']);
});

test('treats words with ij correctly', () => {
  var words = [
    'as',
    'ijs',
    'jij',
    'yyy',
  ];
  var matcher = new WordMatcher(words);
  expect(matcher.findMatching('.s')).toEqual(['as', 'ijs']);
  expect(matcher.findMatching('ij.')).toEqual(['ijs']);
  expect(matcher.findMatching('..')).toEqual(['as', 'ijs', 'jij']);
  expect(matcher.findMatching('...')).toEqual(['yyy']);
  expect(matcher.findMatching('ys')).toEqual([]);
});

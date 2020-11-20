// Tests
let desc = 'one word';
let input = 'vault'.split('');
let actual = reverseWords(input).join('');
let expected = 'vault'
assertEqual(actual, expected, desc);
desc = 'two words';
input = 'thief cake'.split('');
actual = reverseWords(input).join('');
expected = 'cake thief';
assertEqual(actual, expected, desc);
desc = 'three words';
input = 'one another get'.split('');
actual = reverseWords(input).join('');
expected = 'get another one'
assertEqual(actual, expected, desc);
desc = 'multiple words same length';
input = 'rat the ate cat the'.split('');
actual = reverseWords(input).join('');
expected = 'the cat ate the rat'
assertEqual(actual, expected, desc);
desc = 'multiple words different lengths';
input = 'yummy is cake bundt chocolate'.split('');
actual = reverseWords(input).join('');
expected = 'chocolate bundt cake is yummy'
assertEqual(actual, expected, desc);
desc = 'empty string';
input = ''.split('');
reverseWords(input);
actual = reverseWords(input).join('');
expected = ''
assertEqual(actual, expected, desc);
function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

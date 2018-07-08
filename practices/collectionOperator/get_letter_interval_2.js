'use strict';
const { getDirection } = require('./get_integer_interval_2')
function get_letter_interval_2(number_a, number_b) {
  const letterCellection = ['a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'
    , 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const direction = getDirection(number_a, number_b);
  const result = getInterval2LetterCollection(number_a, number_b, direction, 1, letterCellection);
  return result;
}
function convertNumberTOLetterStr(number, letterCellection) {
  let letterStr = '';
  let numCollection = [];
  do {
    numCollection.push(number % 26);
    number = parseInt(number / 26);
  }
  while (number > 0)
  while (numCollection.length > 0) {
    let numTemp = numCollection.pop();
    if (numCollection[numCollection.length - 1] === 0) {
      numCollection[numCollection.length - 1] = 26;
      if ((numTemp - 1) > 0)
        letterStr += letterCellection[numTemp - 2];
    }
    else
      letterStr += letterCellection[numTemp - 1];
  }
  return letterStr;
}
function getInterval2LetterCollection(number_a, number_b, direction, interval, letterCellection) {
  const result = [];
  for (let index = number_a; index != number_b; index = index + direction) {
    if (index % interval === 0)
      result.push(convertNumberTOLetterStr(index, letterCellection));
  }
  if (number_b % interval === 0)
    result.push(convertNumberTOLetterStr(number_b, letterCellection));
  return result;
}

module.exports = {get_letter_interval_2};


/* eslint-disable indent */
'use strict';

function multiBracketValidation(string) {
  let bracketsArray = [];
  let split = string.split('');
  for (let i = 0; i < split.length; i++) {
    switch (split[i]) {
      case '(':
        bracketsArray.push(1);
        break;

      case ')':
        bracketsArray.push(-1);
        break;

      case '{':
        bracketsArray.push(2);
        break;

      case '}':
        bracketsArray.push(-2);
        break;

      case '[':
        bracketsArray.push(3);
        break;

      case ']':
        bracketsArray.push(-3);
        break;

      default:
        break;
    }
  }

  while (bracketsArray) {
    const openingBracket = bracketsArray.shift();

    // necessary to break the loop
    if (!openingBracket) break;

    // for brackets arriving without corresponding opening
    if (openingBracket < 0) return false;

    // for brackets without corresponding closing
    if (bracketsArray.length === 0) return false;


    for (let i = 0; i < bracketsArray.length; i++) {
      if (openingBracket === (bracketsArray[i] * -1)) {
        bracketsArray.splice(i, 1);
        break;
      }
      if (openingBracket !== bracketsArray[i]) {
        return false;
      }
    }
  }

  return true;
}

module.exports = multiBracketValidation;

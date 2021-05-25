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

  return [string, true];
}

// let string = "()[[Extra Characters]]";
// let arr = string.split("");
// let arr2 = [];

// console.log(string.split("").findIndex((element) => element === "E"));
// console.log(arr.splice(4, 1));
// console.log(arr);
// console.log(arr2.shift());
// console.log(multiBracketValidation(string));

let str1 = '{}';
let str2 = '{}(){}';
let str3 = '()[[Extra Characters]]';
let str4 = '(){}[[]]';
let str5 = '{}{Code}[Fellows](())';
let str6 = '[({}]';
let str7 = '(](';
let str8 = '{(})';
let str9 = '{';
let str10 = ')';
let str11 = '[)';

console.log(multiBracketValidation(str1));
console.log(multiBracketValidation(str2));
console.log(multiBracketValidation(str3));
console.log(multiBracketValidation(str4));
console.log(multiBracketValidation(str5));
console.log(multiBracketValidation(str6));
console.log(multiBracketValidation(str7));
console.log(multiBracketValidation(str8));
console.log(multiBracketValidation(str9));
console.log(multiBracketValidation(str10));
console.log(multiBracketValidation(str11));

/* eslint-disable indent */
'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;

function multiBracketValidation(string) {
  // if string is empty
  if (!string) return false;

  let bracketsArray = [];
  let split = string.split('');
  for (let i = 0; i < split.length; i++) {
    if (split[i] === '(') bracketsArray.push(1);
    if (split[i] === ')') bracketsArray.push(-1);
    if (split[i] === '{') bracketsArray.push(2);
    if (split[i] === '}') bracketsArray.push(-2);
    if (split[i] === '[') bracketsArray.push(3);
    if (split[i] === ']') bracketsArray.push(-3);
  }

  // if there were no brackets in the string or only one
  if (bracketsArray.length <= 1) return false;

  // if first bracket in string was closing
  if (bracketsArray[0] < 0) return false;

  const stack = new Stack();

  let length = bracketsArray.length;

  for (let i = 0; i < length; i++) {
    let bracket = bracketsArray.shift();
    // when stack is empty
    if (!stack.top) {
      stack.push(bracket);
    } else if (stack.top.value === bracket) { // if brackets are of same type and direction
      stack.push(bracket);
    } else if (stack.top.value === (bracket * -1)) { // matching closing
      stack.pop();
    } else {
      return false;
    }
  }
  return true;
}

module.exports = {
  multiBracketValidation
};

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
    console.log('before', stack.top)
    if (!stack.top) {
      stack.push(bracket);
    } else if (bracket > 0) { // if brackets are of opening type
      stack.push(bracket);
    } else if ((bracket * -1) === stack.top.value) { // matching closing
      stack.pop();
    } else {
      return false;
    }
    console.log('after', stack.top)
  }
  return true;
}

module.exports = {
  multiBracketValidation
};

'use strict';
const {getInterval2Collection,getDirection} = require('./get_integer_interval_2')
function get_integer_interval(number_a, number_b) {
  let flag = 1;
  const direction = getDirection(number_a,number_b)
  const result = getInterval2Collection(number_a,number_b,direction,flag);
  return result;
}

module.exports = get_integer_interval;


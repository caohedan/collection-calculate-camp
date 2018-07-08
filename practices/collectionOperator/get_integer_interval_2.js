'use strict';

function get_integer_interval_2(number_a, number_b) {
  let interval = 2;
  let direction = getDirection(number_a, number_b);
  const result = getInterval2Collection(number_a, number_b, direction,interval);
  return result;

}
function getInterval2Collection(number_a, number_b, direction,interval) {
  const result = [];
  for (let index = number_a; index != number_b; index = index + direction) {
    if (index % interval === 0)
      result.push(index);
  }
  if (number_b % interval === 0)
    result.push(number_b);
  return result;
}
function getDirection(number_a, number_b) {
  let direction = 0;
  if (number_a > number_b)
    direction = -1;
  else
    direction = 1;
  return direction;
}
module.exports = {get_integer_interval_2,getDirection,getInterval2Collection};
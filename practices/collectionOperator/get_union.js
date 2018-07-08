'use strict';

function get_union(collection_a, collection_b) {
  var unionSet = new Set();
  for(let A of collection_a)
  unionSet.add(A);
  for(let B of collection_b)
  unionSet.add(B);
  return Array.from(unionSet);
}

module.exports = get_union;


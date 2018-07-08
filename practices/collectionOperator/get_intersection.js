'use strict';

function get_intersection(collection_a, collection_b) {
  let intersectionCollection = [];
  for (const itemOfB of collection_b) {
    for (const itemOfA of collection_a) {
      if (itemOfB === itemOfA) {
        intersectionCollection.push(itemOfA)
      }
    }
  }
  return intersectionCollection;
}

module.exports = get_intersection;

'use strict';

function collect_all_even(collection) {
  let evenCollection = [];
  for(let oneOfCollection of collection)
  {
    if(oneOfCollection % 2 === 0)
    evenCollection.push(oneOfCollection);
  }
  return evenCollection;
}

module.exports = collect_all_even;

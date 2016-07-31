'use strict';

export default (target, fn = i => i) => {
  let map = {};

  return target.filter((item) => {
    let key = fn(item);
    let type = typeof(key);
    map[type] = map[type] || {};
    if (map[type].hasOwnProperty(key)) return false;
    map[type][key] = item;
    return true;
  });
}

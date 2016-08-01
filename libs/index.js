function defaultFn(i) {
  return i;
}

module.exports = function (target, fn) {
  fn = fn || defaultFn;
  var map = {};

  return target.filter(function (item) {
    var key = fn(item), type = typeof key;
    map[type] = map[type] || {};
    if (map[type].hasOwnProperty(key)) return false;
    map[type][key] = item;
    return true;
  });
};

function defaultFn(i) {
  return i;
}

module.exports = function (target, fn) {
  fn = fn || defaultFn;
  var map = new Map(), index = -1, resultIndex = 0, result = [];
  while (++index < target.length) {
    var key = fn(target[index]);
    if (map.has(key)) continue;
    map.set(key, '');
    result[resultIndex++] = target[index];
  }
  return result;
};


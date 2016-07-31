'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = function (target) {
  var fn = arguments.length <= 1 || arguments[1] === undefined ? function (i) {
    return i;
  } : arguments[1];

  var map = {};

  return target.filter(function (item) {
    var key = fn(item);
    var type = typeof key === 'undefined' ? 'undefined' : _typeof(key);
    map[type] = map[type] || {};
    if (map[type].hasOwnProperty(key)) return false;
    map[type][key] = item;
    return true;
  });
};
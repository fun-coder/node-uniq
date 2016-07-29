'use strict';

export default (target, fn = i => i) => {
	let map = {};
	return target.filter((item) => {
		let key = fn(item);
		if (map[key]) return false;
		map[key] = item
		return true;
	});
}

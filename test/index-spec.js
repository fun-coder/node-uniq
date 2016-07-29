'use strict';
import uniq from '../index';
import {expect} from 'chai';

describe('Uniq', () => {
	it('should remove repeatable item', () => {
		let a = [1, 2, 3, 2];

		expect(uniq(a)).to.deep.equal([1, 2, 3]);
	});

	it('should remove repeatable item', () => {
		let a = [{id: 1}, {id: 2}, {id: 3}, {id: 2}];
		let result = uniq(a, i => i.id);
		expect(result).to.deep.equal([{id: 1}, {id: 2}, {id: 3}]);
	});
});

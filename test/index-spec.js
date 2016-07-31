'use strict';
import uniq from '../dist/index';
import {expect} from 'chai';

describe('Uniq', () => {

	it('should remove repeatable item', () => {
		let a = [0, 1, 2, 3, 0, 'undefined', 2, undefined, false, false, undefined];

		expect(uniq(a)).to.deep.equal([0, 1, 2, 3, 'undefined', undefined, false]);
	});

	it(`should remove repeatable item when undefined`, () => {
		let res = uniq([undefined, undefined, undefined, 'undefined']);
		expect(res).to.deep.equal([undefined, 'undefined']);
	});

	it(`should remove repeatable item when null`, () => {
		let res = uniq([null, null, null, 'null']);
		expect(res).to.deep.equal([null, 'null']);
	});

	it(`should remove repeatable item when false`, () => {
		let res = uniq([false, false, false, 'false']);
		expect(res).to.deep.equal([false, 'false']);
	});

	it(`should remove repeatable item when true`, () => {
		let res = uniq([true, true, true, 'true']);
		expect(res).to.deep.equal([true, 'true']);
	});

	it(`should remove repeatable item when 0`, () => {
		let res = uniq([0, 0, 0, '0']);
		expect(res).to.deep.equal([0, '0']);
	});

	it('should remove repeatable item when ', () => {
		let a = [0, 1, 2, 3, 0];
		expect(uniq(a)).to.deep.equal([0, 1, 2, 3]);
	});

	it('should remove repeatable item', () => {
		let a = [{id: 1}, {id: 2}, {id: 3}, {id: 2}];
		let result = uniq(a, i => i.id);
		expect(result).to.deep.equal([{id: 1}, {id: 2}, {id: 3}]);
	});
});

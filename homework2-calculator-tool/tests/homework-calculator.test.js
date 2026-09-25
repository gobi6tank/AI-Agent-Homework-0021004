import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateExpression } from '../tools/arithmetic.js';

for (const [expression, expected] of [
  ['10 + 5 * 2', 20], ['(10 + 5) * 2', 30], ['1200 * 0.85', 1020],
  ['-2 * (3 + 4)', -14], ['.5 + 1.25', 1.75],
]) {
  test(`本機算式 ${expression}`, () => assert.equal(calculateExpression(expression), expected));
}
for (const expression of ['1/0', '(1+2', 'process.exit()', '2**3', '']) {
  test(`拒絕輸入 ${JSON.stringify(expression)}`, () => assert.throws(() => calculateExpression(expression)));
}

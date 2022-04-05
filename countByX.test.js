const countByX = require('./countByX')

test('takes two integers, first for times table and second for range', () => {
  expect(countByX(1, 2)).toEqual([1, 2])
})
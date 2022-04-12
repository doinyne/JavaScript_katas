const solution = require('./task_1_2')

test('takes an array of strings', () => {
  const A = ['Cardiology', 'Orthopaedics', 'Neurology', 'Cardiology', 'Orthopaedics', 'Cardiology']
  expect(solution(A).toBe(3))
});
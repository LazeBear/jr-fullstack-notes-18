function sum(a, b) {
  return a + b;
}

// 测试用例 - test case
// h1,h2,h3
// h1
describe('sum function', () => {
  // p - test case
  it('should return correct sum of two numbers', () => {
    // setup (initialize variables, mock)

    // execute test function/logic
    const result = sum(1, 2);

    // compare results (expected/actual)
    // expect (actual result) = expected result
    expect(result).toBe(3);
    // toEqual
    // toHaveBeenCalled
  });

  // it('should return')

  // p - test case
  // test('should return correct sum of two numbers')

  // // h2
  // describe('', ()=>{

  //   // h3
  //   describe()
  // })
});

// jest

// describe('/courses', () => {
//   describe('GET', () => {});

//   describe('POST', () => {});
// });

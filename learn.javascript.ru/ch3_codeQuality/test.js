describe('pow', function () {

    describe('gets x to the power of n', function() {

    function makeTests(x) {
      let expected = x * x * x;
      it(`${x} to the power of 3 returns ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let i = 1; i <= 5; i++) {
      makeTests(i);
    }

  });

  it('2 to the power of 3 returns 8', function() {
    assert.equal(pow(2, 3), 8);
  });

  it('3 to the power of 4 returns 81', function() {
    assert.equal(pow(3, 4), 81);
  });

  it('Asserting to the negative power returns NaN', function() {
    assert(isNaN(pow(2, -1)), 'pow(2, - 1) not NaN');
  });

  it('Asserting to the fractional power returns NaN', function() {
    assert(isNaN(pow(2, 1.5)), 'pow(2, 1.5) not NaN');
  });

  it('0 to the power of 0 returns NaN', function() {
    assert(isNaN(pow(0, 0)), 'pow(0, 0) not NaN');
  });

});

// another variant of the code structure
// note that in this one if first assert.equal fails
// you'll never know what happend to the second

// describe('pow', function() {
//
//   it('gets x to the power of n', function() {
//     assert.equal(pow(2, 3), 8);
//     assert.equal(pow(3, 4), 81);
//   });
//
// });

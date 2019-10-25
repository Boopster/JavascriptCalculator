const Calculator = require('../../public/js/calculator.js');
const assert = require('assert');

describe('calculator', function () {
  // let calculator;
  beforeEach(function () {
    calculator = new Calculator();
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true);
  });

  it('it can add 1 to 4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(calculator.runningTotal,5);
  });

});

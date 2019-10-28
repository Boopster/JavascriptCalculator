const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should update the display of the running total', function(){
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('22');
  });

  it('should update the display with the result of the operation', function(){
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('should display the expected output for a range of numbers__positive numbers', function(){
    element(by.css('#number8')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('should display the expected output for a range of numbers__negative numbers', function(){
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-6');
  });

  // it('should display the expected output for a range of numbers__decimal numbers', function(){
  //   element(by.css('#number2')).click();
  //   element(by.css('#number_decimal')).click();
  //   element(by.css('#number8')).click();
  //   element(by.css('#operator_subtract')).click();
  //   element(by.css('#number1')).click();
  //   element(by.css('#operator_equals')).click();
  //   expect(running_total.getAttribute('value')).to.eventually.equal('1.8');
  // });
  //
  // it('should display the expected output for a range of numbers__large numbers', function(){
  // });
  //
  // it('should display 0 when a number is divided by 0', function(){
  // });

});
// 1. Do the number buttons update the display of the running total?
// 2. Do the arithmetical operations update the display with the result of the operation?
// 3. Can multiple operations be chained together?
// 4. Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
// 5. What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).

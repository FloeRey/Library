# Testing Excercises CAS FEE

Code testing is a critical part of software development that involves verifying that code works as expected. Testing can help catch bugs and errors early in the development process, which can save time and money in the long run.

There are several types of testing, including unit testing, integration testing, and end-to-end testing. Unit testing involves testing individual units or components of code in isolation from the rest of the system. Integration testing involves testing how different units of code work together. End-to-end testing involves testing the entire system from start to finish.

To write a unit test, you first need to identify the unit of code that you want to test. This could be a function, a class, or a module. You then create a test case that exercises the unit of code and checks that it produces the expected output for a given input.

The test case typically consists of three parts: the setup, the execution, and the assertion. In the setup phase, you create any necessary objects or data structures that the unit of code requires. In the execution phase, you call the unit of code with the input data. In the assertion phase, you check that the output produced by the unit of code matches the expected output.

Such an example in JavaScript/TypeScript could be:

```js
function add(a, b) {
  return a + b;
}

test('add should return the sum of two numbers', () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
```

Testing can be done manually or automatically. Automated testing is typically preferred because it can be faster and more reliable than manual testing. Automated testing can be done using testing frameworks such as Jest or AVA.

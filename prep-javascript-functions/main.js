function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function convertHoursToMinutes(hours) {
  return hours * 60;
}

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function cube(number) {
  return number * number * number;
}

var sum = addTwoNumbers(4, 4);
console.log('sum: ', sum);

var mins = convertHoursToMinutes(2);
console.log('minutes: ', mins);

var greeting = getGreeting('Michael');
console.log(greeting);

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('Add and multiply by 5 result: ', addAndMultiplyBy5Result);

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('Multiply and divide by 5 result: ', multiplyAndDivideBy5Result);

var subtraction = subtractTwoNumbers(22, 7);
console.log('subtraction: ', subtraction);

var radius = 5;
var circumference = getCircleCircumference(radius);
console.log('circumference of a circle with a radius of ' + radius + ' is: ' + circumference);

var fullName = getFullName('Michael', 'Tang');
console.log('Full Name: ', fullName);

var number = 5;
var cubeResult = cube(number);
console.log('The cube of ' + number + ' is: ' + cubeResult);

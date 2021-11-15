var person = {
  firstName: 'Michael',
  lastName: 'Tang',
  hobby: 'lifting'
};

var fullname = person.firstName + ' ' + person.lastName;

console.log(person);
console.log("The person's name is:\n" + fullname);

person.job = 'systems analyst';
console.log("The person's job is:\n" + person.job);

person.previousJob = 'business analyst';
console.log("The person's previous job is:\n" + person.previousJob);

console.log(person);

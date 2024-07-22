"use strict";

class Employee {
  constructor(first, last, years) {
    this.first = first;
    this.last = last;
    this.years = years;
  }
}
let person1 = new Employee("Asanda", "Mayeza", 12);
let person2 = new Employee("Khwezi", "Dlamini", 5);
let workers = [person1, person2];

Employee.prototype.details = function () {
  return (
    this.first + " " + this.last + " has worked here " + this.years + " years"
  );
};

workers.forEach((person) => {
  console.log(person.details());
});
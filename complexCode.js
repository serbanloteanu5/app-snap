/**
 * filename: complexCode.js
 * content: Complex and sophisticated code example
 * 
 * This code generates and manipulates an array of objects representing employees and their details.
 * It demonstrates advanced JavaScript concepts such as object-oriented programming, closures, and higher-order functions.
 *
 * Usage:
 * Execute the 'main()' function to run the code and see the output in the console.
 */

// Employee class definition
class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  promote() {
    console.log(`${this.name} has been promoted!`);
    this.salary *= 1.1;
  }
}

// Utility functions
const generateRandomName = () => {
  const names = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace"];
  return names[Math.floor(Math.random() * names.length)];
}

const generateRandomDepartment = () => {
  const departments = ["IT", "Sales", "Marketing", "HR", "Finance"];
  return departments[Math.floor(Math.random() * departments.length)];
}

const generateRandomSalary = () => {
  return Math.floor(Math.random() * 10000) + 30000;
}

// Generate random employees
const generateEmployees = (count) => {
  const employees = [];

  for (let i = 0; i < count; i++) {
    const id = i + 1;
    const name = generateRandomName();
    const department = generateRandomDepartment();
    const salary = generateRandomSalary();
    employees.push(new Employee(id, name, department, salary));
  }

  return employees;
}

// Higher-order function to filter employees by criteria
const filterEmployees = (employees, criteriaFn) => {
  return employees.filter(criteriaFn);
}

// Examples of criteria functions to be used for filtering
const highSalaryEmployees = (employee) => employee.salary > 50000;
const itDepartmentEmployees = (employee) => employee.department === "IT";

// Main function
const main = () => {
  // Generate 10 random employees
  const employees = generateEmployees(10);

  console.log("All Employees:");
  console.log(employees);

  console.log("High Salary Employees:");
  const highSalaryEmps = filterEmployees(employees, highSalaryEmployees);
  console.log(highSalaryEmps);

  console.log("IT Department Employees:");
  const itDepartmentEmps = filterEmployees(employees, itDepartmentEmployees);
  console.log(itDepartmentEmps);

  const employeeToPromote = employees[0];
  employeeToPromote.promote();
  console.log(`New salary of ${employeeToPromote.name}: ${employeeToPromote.salary}`);
}

// Execute the main function
main();
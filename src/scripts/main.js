'use strict';

const employees = [...document.querySelectorAll('li')];

const clearSalaries = () => {
  const salaries = [];

  employees.forEach((el) => {
    const sal = el.dataset.salary;

    salaries.push(+sal.replace(/\D/g, ''));
  });

  return salaries;
};

const sortList = () => clearSalaries().sort((a, b) => a - b);

const getEmployees = () => {
  const correctEmployees = [];
  const sortedSalaries = sortList();

  sortedSalaries.forEach((el) => {
    const employee = employees.find((element) => {
      return +element.dataset.salary.replace(/\D/g, '') === el;
    });

    const currentEmploeey = {
      name: employee.textContent.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    };

    correctEmployees.push(currentEmploeey);
  });

  return correctEmployees;
};

getEmployees();

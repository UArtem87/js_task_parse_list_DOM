'use strict';

const list = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

const clearSalaries = () => {
  const salaries = [];

  employees.forEach((el) => {
    const sal = el.dataset.salary;

    salaries.push(+sal.replace(/\D/g, ''));
  });

  return salaries;
};

const sortList = () => clearSalaries().sort((a, b) => b - a);
const sortedSalaries = sortList();

const getEmployees = () => {
  const correctEmployees = [];

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

const res = getEmployees();

const render = res.map((el) => {
  const html = `
  <li
      data-salary="${el.salary}"
      data-position="${el.position}"
      data-age="${el.age}"
      >
      ${el.name}
      </li>
      `;

  return html;
});

list.innerHTML = render.join('');

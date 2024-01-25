import inquirer from 'inquirer'
import * as questions from './questions.js'
import { choices } from './choices.js'
import { DB } from './DB.js'

const db = new DB

export const init = () => {
  inquirer
    .prompt(questions.menu)
    .then((data) => {
      switch (data.selection) {
        case choices[0]:
          return db.getDepartmentHandler();
        case choices[1]:
          return db.getRolesHandler();
        case choices[2]:
          return db.getEmployeesHandler();
        case choices[3]:
          return inquirer.prompt(questions.addDepartment).then((data) => db.addDepartmentHandler(data));
        case choices[4]:
          return inquirer.prompt(questions.addRole).then((data) => db.addRoleHandler(data));
        case choices[5]:
          return inquirer.prompt(questions.addEmployee).then((data) => db.addEmployeeHandler(data));
        case choices[6]:
          console.log('future');
          return Promise.resolve(); // Assuming this case doesn't involve asynchronous operations
        case choices[7]:
          process.exit(0);
      }
    })
    .then(() => {
      return inquirer.prompt(questions.restart);
    })
    .then((data) => {
      if (data.restart) {
        init();
      } else {
        console.log('Bye!');
        process.exit(0);
      }
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
};


import inquirer from 'inquirer'
import * as questions from './questions.js'
import { choices } from './choices.js'
import { DB } from './DB.js'

const db = new DB()

//Main function handles user input to do required task
export const init = () => {
  inquirer
    .prompt(questions.menu)
    .then((data) => {
      switch (data.selection) {
        case choices[0]:
          return db.getDepartmentHandler()
        case choices[1]:
          return db.getRolesHandler()
        case choices[2]:
          return db.getEmployeesHandler()
        case choices[3]:
          return inquirer.prompt(questions.addDepartment).then((newDepartment) => db.addDepartmentHandler(newDepartment))
        case choices[4]:
          return inquirer.prompt(questions.addRole).then((newRole) => db.addRoleHandler(newRole))
        case choices[5]:
          return inquirer.prompt(questions.addEmployee).then((newEmployee) => db.addEmployeeHandler(newEmployee))
        case choices[6]:
          return inquirer.prompt(questions.searchEmployee).then((selectedEmployee) => inquirer.prompt(questions.updateEmployee).then((selectedRole) => db.updateEmployeeRole(selectedEmployee, selectedRole)))
        case choices[7]:
          process.exit(0)
      }
    })
    .catch((error) => {
      console.error('An error occurred:', error)
    })
}

import inquirer from 'inquirer'
import * as questions from './questions.js'
import * as handlers from './queryHandler.js'
import { choices } from './choices.js'

export const init = () => {
    inquirer
    .prompt(questions.menu)
    .then((data) => {
        switch (data.selection) {
        case choices[0]:
            handlers.getDepartmentsHandler()
        break
        case choices[1]:
            handlers.getRolesHandler()
        break
        case choices[2]:
            handlers.getEmployeesHandler()
        break
        case choices[3]:
            inquirer.prompt(questions.addDepartment).then((data) => handlers.addDepartmentHandler(data))
        break
        case choices[4]:
            inquirer.prompt(questions.addRole).then((data) => handlers.addRoleHandler(data))
        break
        case choices[5]:
            inquirer.prompt(questions.addEmployee).then((data) => handlers.addEmployeeHandler(data))
        break
        case choices[6]:
            console.log('future')
        break
        case choices[7]:
            process.exit(0)
        }
    })
} 

export const restarter = () => {
    inquirer.prompt(questions.restart)
    .then((data) => {
        if(data.restart){
            init()
        }else{
            console.log('Bye!')
            process.exit(0)
        }
    })
}
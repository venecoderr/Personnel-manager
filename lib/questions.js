import { choices } from './choices.js'
import { getList } from './list.js'

const dbChoices = await getList()

//Question arrays for inquirer

//menu
export const menu = [
    {
        type: 'list',
        name: 'selection', 
        message: 'What can I do for you? ', 
        choices: choices
    }
]

//Restart?
export const restart = [
    {
        type: 'confirm',
        name: 'confirm', 
        message: 'Would you like go back to the menu?'
    }
]

//Add feature questions
//Deparments
export const addDepartment = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter department name: ',
        validate: (name) => {
            if (name.length < 4){
                return 'Name must be 4 characters min'
            }else{
                return true
            }
        }
    }
]

//Roles
export const addRole = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter role name: ',
        validate: (name) => {
            if (name.length < 4){
                return 'Name must be 4 characters min'
            }else{
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Enter role salary: ',
        validate: (sum) => {
            if (Number(sum) <= 0){
                return 'Salary must be a postive number with 2 decimal points'
            }else{
                return true
            }
        }
    },
    {
        type: 'list',
        name: 'department',
        message: 'Enter role department id: ',
        choices: dbChoices.depts
    }
]

//Employees
export const addEmployee = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Enter employee first name: ',
        validate: (name) => {
            if (name.length < 4){
                return 'Name must be 4 characters min'
            }else{
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Enter employee last name: ',
        validate: (name) => {
            if (name.length < 4){
                return 'Name must be 4 characters min'
            }else{
                return true
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'Select employee role: ',
        choices: dbChoices.roles
    },
    {
        type: 'list',
        name: 'manager',
        message: 'Select employee manager: ',
        choices: dbChoices.managers
    },
]

//Updated feature questions
export const searchEmployee = [
    {
        type: 'list',
        name: 'search',
        message: 'Select employee to update: ',
        choices: dbChoices.employees
    }
]

export const updateEmployee = [
    {
        type: 'list',
        name: 'new',
        message: 'Select updated role for employee: ',
        choices: dbChoices.roles
    }
]



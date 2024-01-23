import { choices } from './choices.js'

export const menu = [
    {
        type: 'list',
        name: 'selection', 
        message: 'What can I do for you? ', 
        choices: choices
    }
]

export const restart = [
    {
        type: 'confirm',
        name: 'restart', 
        message: 'Would you like go back to the menu?'
    }
]

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
    }
]

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
        type: 'input',
        name: 'role',
        message: 'Enter employee role id: ',
        validate: (id) => {
            if (id.length <= 0){
                return 'ID must be 1 digit min'
            }else{
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'manager',
        message: 'Enter employee manager id: ',
        validate: (id) => {
            if (id.length <= 0){
                return 'ID must be 1 digit min'
            }else{
                return true
            }
        }
    },
]



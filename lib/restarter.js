import inquirer from 'inquirer'
import { restart } from './questions.js'
import { init } from './init.js'

//Back to menu function
export const restarter = () => {
    inquirer.prompt(restart)    
    .then((restart) => {
        if (restart.confirm) {
            init()
        } else {
            console.log('Bye!')
            process.exit(0)
        }
    })
}
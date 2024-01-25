import { dbConnector } from '../config/config.js'

const db = dbConnector

export class DB {
    getDepartmentHandler = () => {
      db.query('SELECT * FROM department', (err, results) => { 
        console.table(results)
      })
    }
    
    addDepartmentHandler = (department) => {
      db.query(`INSERT INTO department (department_name) 
        VALUES 
          ('${department.name}')`,
        (err, res) => {
          console.log(`Department added! new department ID: ${res.insertId}`) 
        })
    }
    
    getRolesHandler = () => {
      db.query('SELECT * FROM roles', (err, results) => { 
        console.table(results)  
      })
    }
    
    addRoleHandler = (role) => {
      db.query(`INSERT INTO roles (title, salary, department_id) 
        VALUES
          ('${role.name}', ${role.salary}, ${role.department})`,
        (err, res) => {
          console.log(`Role added! new role ID: ${res.insertId}`) 
        })
    }
    
    getEmployeesHandler = () => {
      db.query('SELECT * FROM employee', (err, results) => { 
        console.table(results)  
      })
    }
    
    addEmployeeHandler = (employee) => {
      db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES 
          ('${employee.firstName}', '${employee.lastName}', ${employee.role}, ${employee.manager})`,
        (err, res) => {
          console.log(`Employee added! new employee ID: ${res.insertId}`) 
        })
    }

    getDeptList = () => {
        return new Promise((resolve, reject) => {
          db.query('SELECT * FROM department', (err, results) => {
            if (err) {
              reject(err)
            } else {
              const list = results.map(item => item.department_name)
              resolve(list)
            }
          })
        })
    }

    getRoleList = () => {
        return new Promise((resolve, reject) => {
          db.query('SELECT * FROM roles', (err, results) => {
            if (err) {
              reject(err)
            } else {
              const list = results.map(item => item.department_name)
              resolve(list)
            }
          })
        })
    }

    getEmployeeList = () => {
        return new Promise((resolve, reject) => {
          db.query('SELECT * FROM employee', (err, results) => {
            if (err) {
              reject(err)
            } else {
              const list = results.map(item => item.department_name)
              resolve(list)
            }
          })
        })
    }
}


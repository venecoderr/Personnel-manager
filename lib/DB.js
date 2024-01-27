import { dbConnector } from '../config/config.js'
import { restarter } from './restarter.js'

//instance for MySql connection
const db = dbConnector

//Class to manipulate DB
export class DB {
  //GET
  getDepartmentHandler = () => {
    db.query('SELECT * FROM department', (err, results) => { 
      if(err){
        console.error(err)
      }else{
        console.table(results)
        restarter()
      }
    })
  }

  getRolesHandler = () => {
    db.query('SELECT * FROM roles', (err, results) => { 
      if(err){
        console.error(err)
      }else{
        console.table(results)
        restarter()
      }  
    })
  }

  getEmployeesHandler = () => {
    db.query('SELECT * FROM employee', (err, results) => { 
      if(err){
        console.error(err)
      }else{
        console.table(results)  
        restarter()
      }
    })
  }

  //ADD
  addDepartmentHandler = (department) => {
    db.query(`INSERT INTO department (department_name) 
      VALUES 
        ('${department.name}')`,
      (err, res) => {
        if(err){
          console.error(err)
        }else{
          console.log(`Department added! new department ID: ${res.insertId}`)
          restarter()
        }   
      })
  }

  addRoleHandler = (role) => {
    db.query(`INSERT INTO roles (title, salary, department_id) 
      VALUES
        ('${role.name}', ${role.salary}, ${role.department})`,
        (err, res) => {
          console.log(`Employee added! new employee ID: ${res.insertId}`) 
          restarter()
        })
  }

  addEmployeeHandler = (employee) => {
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES 
        ('${employee.firstName}', '${employee.lastName}', ${employee.role}, ${employee.manager})`,
      (err, res) => {
        if(err){
          console.error(err)
        }else{
          console.log(`Employee added! new employee ID: ${res.insertId}`) 
          restarter()
        }
      })
  }


  //UPDATE
  updateEmployeeRole = (employee, role) => {
    db.query(`UPDATE employee SET role_id = ${role.new} WHERE id = ${employee.search}`, (err, res) => {
      if(err){
        console.error(err)
      }else{
        console.log(`Employee updated successfully!`) 
        restarter()
      }
    })
  }

  //Lists GET
  getDeptList = () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT id AS value, department_name AS name FROM department', (err, results) => {
        if (err) {
          reject(err)
        } else {
          const list = results.map(item => item)
          resolve(list)
        }
      })
    })
  }

  getRoleList = () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT id AS value, title AS name FROM roles', (err, results) => {
        if (err) {
          reject(err)
        } else {
          const list = results.map(item => item)
          resolve(list)
        }
      })
    })
  }

  getEmployeeList = () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT id AS value, CONCAT (first_name, " ", last_name) AS name FROM employee', (err, results) => {
        if (err) {
          reject(err)
        } else {
          const list = results.map(item => item)
          resolve(list)
        }
      })
    })
  }

  getManagerList = () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT id AS value, CONCAT (first_name, " ", last_name) AS name FROM employee WHERE manager_id IS NULL', (err, results) => {
        if (err) {
          reject(err)
        } else {
          const list = results.map(item => item)
          resolve(list)
        }
      })
    })
  }
}
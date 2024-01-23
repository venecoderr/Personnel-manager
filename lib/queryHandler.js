import { createConnection } from 'mysql2'
import 'dotenv/config'
import { restarter } from './init.js';

const db = createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
)

export const getDepartmentsHandler = () => {
  db.query('SELECT * FROM department;', (err, results) => { 
    console.table(results)
    restarter() 
  })
}

export const addDepartmentHandler = (department) => {
  db.query(`INSERT INTO department (department_name) 
    VALUES 
      ('${department.name}');`,
    (err, res) => {
      console.log(`Department added! new department ID: ${res.insertId}`)
      restarter() 
    })
}

export const getRolesHandler = () => {
  db.query('SELECT * FROM roles;', (err, results) => { 
    console.table(results) 
    restarter() 
  })
}

export const addRoleHandler = (role) => {
  db.query(`INSERT INTO roles (title, salary, department_id) 
    VALUES
      ('${role.name}', ${role.salary}, ${role.department});`,
    (err, res) => {
      console.log(`Role added! new role ID: ${res.insertId}`)
      restarter() 
    })
}

export const getEmployeesHandler = () => {
  db.query('SELECT * FROM employee;', (err, results) => { 
    console.table(results) 
    restarter() 
  })
}

export const addEmployeeHandler = (employee) => {
  db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES 
      ('${employee.firstName}', '${employee.lastName}', ${employee.role}, ${employee.manager});`,
    (err, res) => {
      console.log(`Employee added! new employee ID: ${res.insertId}`)
      restarter() 
    })
}


import { DB } from "./DB.js"
const db = new DB

//class to create lists for inquirer to use as choices
class List {
    constructor(depts, roles, employees, managers){
        this.depts = depts,
        this.roles = roles,
        this.employees = employees
        this.managers = managers
    }
}

export const getList = async () => {
    const [deptList, roleList, employeeList, managerList] = await Promise.all([
      db.getDeptList(),
      db.getRoleList(),
      db.getEmployeeList(),
      db.getManagerList()
    ]);
  
    return new List(deptList, roleList, employeeList, managerList);
};
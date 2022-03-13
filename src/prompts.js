const inquirer = require('inquirer');
const db = require('../db/connection');
const cTable = require('console.table');

function promptUser() {
    return inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "What would you like to do?",
            choices: ["View all departments",
                        "View all roles",
                        "View all employees",
                        "Add a department",
                        "Add a role",
                        "Add an employee",
                        "Update an employee role"
                    ]
        }
    ])
}   

function nextAction(answer) {
    if(answer.userChoice === "View all departments") {
        const sql = `SELECT * FROM department`
        db.promise().query(sql)
        .then(([rows,fields]) => {
            console.table(rows);
        })
        .catch(console.log)
        .then(()=> db.end());
     } else if(answer.userChoice === "View all roles") {
        const sql = `SELECT * FROM role`
        db.promise().query(sql)
        .then(([rows,fields]) => {
            console.table(rows);
        })
        .catch(console.log)
        .then(()=> db.end());
    } else if(answer.userChoice === "View all employees") {
        const sql = `SELECT * FROM employee`
        db.promise().query(sql)
        .then(([rows,fields]) => {
            console.table(rows);
        })
        .catch(console.log)
        .then(()=> db.end());
    } else if(answer.userChoice === "Add a department") {
        addDept();
        return;
    } else if(answer.userChoice === "Add a role") {
        addRole();
        return;
    } else if(answer.userChoice === "Add an employee") {
        addEmployee();
        return;
    } else if(answer.userChoice === "Update an employee role") {
        updateEmployee();
        return;
    } 
}

function addDept() {
    return inquirer.prompt([
        {
            type: "input",
            name: "department_name",
            message: "Enter department name",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter department name");
                }
            }
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO department (department_name) VALUES ('${answer.department_name}')`;
        db.promise().query(sql)
        .catch(console.log)
        .then(()=>db.end());
    })
}

function addRole() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter role title",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter role");
                }
            }
        },
        {
            type: "input",
            name: "salary",
            message: "Enter salary",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please salary");
                }
            }
        },
        {
            type: "input",
            name: "department_id",
            message: "Enter department ID",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please department ID");
                }
            }
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO role (title, salary, department_id) VALUES ('${answer.title}','${answer.salary}','${answer.department_id}')`;
        db.promise().query(sql)
        .catch(console.log)
        .then(()=>db.end());
    })
}

function addEmployee() {
    return inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "Enter first name",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter first name");
                }
            }
        },
        {
            type: "input",
            name: "last_name",
            message: "Enter last name",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter last name");
                }
            }
        },
        {
            type: "input",
            name: "role_id",
            message: "Enter role ID",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter Role ID");
                }
            }
        },
        {
            type: "input",
            name: "manager_id",
            message: "Enter manager ID",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter manager ID");
                }
            }
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answer.first_name}','${answer.last_name}','${answer.role_id}','${answer.manager_id}')`;
        db.promise().query(sql)
        .catch(console.log)
        .then(()=>db.end());
    })
}

function updateEmployee() {
    return inquirer.prompt([
        {
            type: "input",
            name: "employee_id",
            message: "Enter employee id",
        },
        {
            type: "input",
            name: "role",
            message: "Enter updated role",
        }
    ])
    .then(answer => {
        const sql = `UPDATE employee SET role_id=${answer.role} WHERE id = ${answer.employee_id}`;
        db.promise().query(sql)
        .catch(console.log)
        .then(()=>db.end());
    })
}

module.exports = {
    promptUser,
    nextAction
}
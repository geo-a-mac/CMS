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
                        "Update an employee role",
                        "Exit"
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
        console.log('add dept picked');
        return;
    } else if(answer.userChoice === "Add a role") {
        console.log('add role picked');
        return;
    } else if(answer.userChoice === "Add an employee") {
        console.log('add employee picked');
        return;
    } else if(answer.userChoice === "Update an employee role") {
        console.log('update role picked');
        return;
    } else if(answer.userChoice === "Exit") {
        console.log('Exit picked');
        return;
    } 
}

function addDept() {
    return inquirer.prompt([

    ])
}

function addRole() {
    return inquirer.prompt([
        
    ])
}

function addEmployee() {
    return inquirer.prompt([
        
    ])
}

function updateEmployee() {
    return inquirer.prompt([
        
    ])
}

module.exports = {
    promptUser,
    nextAction
}
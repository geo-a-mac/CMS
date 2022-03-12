//const inquirer = require('inquirer');
const db = require('./db/connection');
//const departments = require('./src/departments');
//const employees = require('./src/employees');
//const roles = require('./src/roles');
const { promptUser, nextAction } = require('./src/prompts');

db.connect(err => {
    if(err) throw err;
    console.log('Connected!');
});

promptUser()
.then(nextAction);
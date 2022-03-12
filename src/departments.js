const db = require('../db/connection');
//const {promptUser, nextAction} = require('./prompts');

function getAllDepartments() {
    const sql = `SELECT * FROM department`
    db.query(sql, (err, rows) => {
        if(!err) {
            console.log(rows);
        }
    })
}

function newFunction() {
    console.log('NewFunction');
} 

module.exports = {
    getAllDepartments,
    newFunction
};
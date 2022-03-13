const db = require('./db/connection');
const { promptUser, nextAction } = require('./src/prompts');

db.connect(err => {
    if(err) throw err;
});

promptUser()
.then(nextAction);
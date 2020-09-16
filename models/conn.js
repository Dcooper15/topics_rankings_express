const host = "lallah.db.elephantsql.com";
const database = "rlieicqi";
const user = "rlieicqi";
const password = "NKcJpYvnqBFDn-7A-R0y8Zwa5Wae3aSS";

// can use this for almost all pgp's
const pgp = require('pg-promise') ({
    query: function (event) {
        console.log("QUERY:", event.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
}

const db = pgp(options);
module.exports = db;
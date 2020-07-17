var pgp = require('pg-promise')();

function getFromDB(uuid) {
    db.query(`select * from emp where uuid = $1`,[uuid])
    .then(data=>{console.log(data)})
    .catch(err=>{console.log(err)});
}

var getFromDB = async function(uuid, host, port, database, user, password) {
    var db = db ? db : pgp({
        host,
        port,
        database,
        user,
        password
    });
    getFromDB(db,uuid);
}

module.exports.getFromDB = getFromDB;
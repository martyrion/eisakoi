const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost:3306',
    user: 'db_admin',
    password: 'oimartyressoukyrie',
    connectionLimit: 5
});
async function asyncFunction() {
    let conn;
    try {
        conn = await pool.getConnection();
        console.log('hi')
        // const rows = await conn.query("SELECT 1 as val");
        // console.log(rows); //[ {val: 1}, meta: ... ]
        // const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
        // console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}
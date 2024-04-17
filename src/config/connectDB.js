const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Numolo@12345',
    database: 'roxxy'
});

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'admin',
//     password: 'Dph51mO5qkS8U1k',
//     database: '92lottery'
// });

export default connection;
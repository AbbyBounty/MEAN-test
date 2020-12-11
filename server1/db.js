const mysql=require('mysql2')


    const pool=mysql.createPool({
        host:'localhost',
        user:'root',
        password:'abhicompmit',
        port:3306,
        database:'mean',
        waitForConnection:true,
        connectionLimit:10,
        queueLimit:0

    });


module.exports=pool
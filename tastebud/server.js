const mysql = require("mysql2/promise");

const dbConnect = async() => {
    const connection = await mysql.createConnection({
        host: "sql12.freesqldatabase.com",
        user: "sql12661726",
        password: "GR75UHdb7l",
        database: "sql12661726",
        port: 3306,
    })

    try{
        await connection.connect();
        console.log("Connected to DB");
        await connection.query(
            "INSERT INTO User (username,email,password,name) VALUES ('parul_chaddha','parul947a@gmail.com','8090','parul')"
        );
        return connection;
    }
    catch(e){
        console.log(e);
    }
}
dbConnect();
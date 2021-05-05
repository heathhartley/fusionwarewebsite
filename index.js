let express = require("express");
let mysql = require('mysql2');
let bodyparser = require("body-parser");
let cors = require("cors");









db_config  =
    {
        host: 'localhost',
        user : 'newuser',
        password : 'password',
        database: 'heath', 
        multipleStatements : true,
        connectionLimit: 50,
        queueLimit: 0,
        waitForConnection: true
   
        
    }

var connection = mysql.createConnection(db_config);


//- Establish a new connection
// connection.connect(function(err) {
//     // if (err) throw err;
//     // console.log("Connected!");
//     /*Create a database named "mydb":*/
//     connection.query("SELECT * FROM heath.actors;", function (err, rows, fields) {
//     //   if (err) throw err;
//     //   console.log("Database created" + rows);
//       console.log( rows);
//     });
//   });

const app = express();
app.use(express.json());
app.use(cors());

// app.use(bodyparser.urlencoded({extended : true}));

let path = require("path");

//Sapp.set("view engine", "ejs");


app.get("/", function(req, resp) 
 { 
    connection.connect(function(err) {
        // if (err) throw err;
        
        // console.log("Connected!");
       
     connection.query("SELECT * FROM heath.roles inner join heath.characters on characters.rolesID = roles.Roles_ID;", function (err, rows, fields, results) {
        //   if (err) throw err;
        //   
          
        //  
        //   res.render("index", {test: rows});

        //   console.log(rows);
          
        // resp.json(rows[6]);
        resp.json(rows);
        })
        });

        
        
      });
    

    
   
            
      
    

    
    



//new route
app.get("/edit", function(req, res) {
    res.sendFile(path.join(__dirname +"/edit.html")
    );
});

app.listen(3000, function(){ console.log("This is my first app");});



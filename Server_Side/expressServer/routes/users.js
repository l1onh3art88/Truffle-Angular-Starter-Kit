var express = require('express');
var router = express.Router();
var pg= require('pg');
var conn = "postgres://username:password@host/dbname";
var db = new pg.Client(conn);
var bcrypt = require('bcrypt');
const saltRounds=10;
db.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const query="select * from users;";
  db.query(query, (err,data) => {
    if ( err){
      console.log("error");
    }
    else{
      console.log("callback")
      res.json(data.rows);
    }
  })  

});

/* Add User */
router.post('/',function(req,res,next) {
  
  const query="insert into users(username, password_hash) values ($1,$2);"
  let password = req.body['password'];
  bcrypt.hash(password,saltRounds,function(err,hash){
    const values = [req.body['username'],hash];
    db.query(query,values, (err,data) => {
      if(err) {
        console.log("error");
        res.json(err.stack);
      }
      else {
        console.log("callback");
        res.json("success");
      }
    })
  })
  
})


module.exports = router;

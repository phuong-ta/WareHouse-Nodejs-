var mysql = require('mysql');
var requirejs = require('requirejs');

var db = mysql.createConnection({
   host: 'localhost', 
   user: 'root', 
   password: '', 
   database: 'test'
}); 
 var connect =db.connect(function(err) {
   if (err) throw err;
   console.log('Database is connected successfully !');
});

module.exports = db;
var db = require('../Dbconnection');

var Career={
    getAllCareer:function(callback){
        return db.query("Select * from career",callback);
    }
   };
module.exports=Career;

var db = require('../Dbconnection');

var Expert={
    getAllExpert:function(callback){
        return db.query("Select * from expert",callback);
    },

    getExpertById:function(id,callback){
        return db.query("select * from expert where IdExpert=? ",[id],callback);
    },
    addExpert:function(Expert,callback){
        return db.query("Insert into expert(IdExpert,Password,LName,FName,career,country,image,isOnline,lat,lon,sdt) values(?,?,?,?,?,?,?,?,?,?,?)",[Expert.IdExpert,Expert.Password,Expert.LName,Expert.FName,Expert.career,Expert.country,Expert.image,Expert.isOnline,Expert.lat,Expert.lon,Expert.sdt],callback);
    }
   };
module.exports=Expert;

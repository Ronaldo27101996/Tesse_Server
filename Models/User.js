var db = require('../Dbconnection');

var User={
    getUserById:function(id,callback){
        return db.query("select * from user where IdUser=? ",[id],callback);
    },
    getAllUser:function(callback){
        return db.query("select * from user  ",callback);
    },
    getUserByIdPass:function(id,pass,callback){

        return db.query("select * from user where IdUser=? AND Password=?",[id,pass],callback);
    },
    addUser:function(User,callback){
        return db.query("Insert into user(IdUser,Password,FName,LName,avatar,isExpert) values(?,?,?,?,?,?)",[User.IdUser,User.Password,User.FName,User.LName,User.avatar,User.isExpert],callback);
    }
  };
 module.exports=User;

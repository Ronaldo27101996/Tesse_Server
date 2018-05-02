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
    },
    updateUserInfo:function(id,User,callback){
        return db.query("update user set Password=?,FName=?,LName=?,avatar=? where IdUser=?",[User.Password,User.FName,User.LName,User.avatar,id],callback);
    },
    updateUserbecomeExpert:function(id,User,callback){
        return db.query("update user set isExpert=? where IdUser=?",[User.isExpert,id],callback);
    }
  };
 module.exports=User;

var db = require('../Dbconnection');

var Skill={
    getAllSkill:function(callback){
        return db.query("Select * from skill",callback);
    },
    getSkillByCareer:function(id_career,callback){
      return db.query("select * from skill where career_id = ?",[id_career],callback);
    }
   };
module.exports=Skill;

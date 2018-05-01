var db = require('../Dbconnection');

var Expert_Skill={
    getAllExpertSkill:function(callback){
        return db.query("Select * from expert_skill",callback);
    },
    getSkillbyExpert:function(id,callback){
      return db.query("SELECT id,name,career_id FROM tesse.expert_skill inner join tesse.skill on expert_skill.id_skill = skill.id where id_expert = ?",[id],callback);
    },
    addExpert_Skill:function(expert_id,skill_id,callback){
        return db.query("Insert into expert_skill(id_expert,id_skill) values(?,?)",[expert_id,skill_id],callback);
    }
   };
module.exports=Expert_Skill;

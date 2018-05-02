var db = require('../Dbconnection');

var Search={

    getExpertbyKeyword:function(keyword,callback){
      return db.query( "SELECT DISTINCT IdExpert, Password, LName, FName, career, country, image, isOnline, lat, lon, sdt FROM tesse.expert inner join tesse.expert_skill on expert.IdExpert = expert_skill.id_expert inner join tesse.skill on expert_skill.id_skill = skill.id where career like '%" + keyword + "%' or name like '%" + keyword + "%'",callback);    
    }

   };
module.exports=Search;

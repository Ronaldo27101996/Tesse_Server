
// router.get('/users',function(req,res,next){
//         User.getUserById(req.query.id,function(err,rows){  //http://localhost:3000/tesse/users?id=xxx@gmail.com&pass=123456
//             if(err){
//               console.log(err.toString())
//                 return res.json(err);
//             }
//             else{
//               console.log(2)
//                 if (!rows || rows == [] || rows.length == 0){
//                   return res.send("Email khong dung!");
//                 }else{
//                   console.log(rows)
//                   if (rows[0].Password != req.query.pass){
//                     return res.send("Password sai!");
//                   }else{
//                     res.json(rows);
//                   }
//                 }
//             }
//         });
// });
// router.get('/users/:email/:password',function(req,res,next){
//         console.log(req.params)
//
// });
var express = require('express');
var router = express.Router();
var User = require('./Models/User');
var Appointment = require('./Models/Appointment');
var Expert = require('./Models/Expert');
var Skill = require('./Models/Skill');
var Search = require('./Models/Search');
var Career = require('./Models/Career');
var Expert_Skill = require('./Models/Expert_Skill');
router.get('/users',function(req,res,next){
        User.getUserByIdPass(req.query.id,req.query.pass,function(err,rows){
            if(err){
                res.json(err);
            } /*else{
                 if (rows.length == 0){
                   return res.send("Email hoặc mật khẩu không đúng!");
                 }*/ else{
                res.json(rows);
            }
          //}
        });

});
router.get('/users/all',function(req,res,next){
        User.getAllUser(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});
router.post('/users/',function(req,res,next){
    User.addUser(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
          console.log("body "+ req.body.FName);
            res.json(req.body);
        }
    });
});
router.put('/users/:id',function(req,res,next){
    User.updateUserbecomeExpert(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows.affectedRows);
        }
    });
});
router.put('/users/update/:id',function(req,res,next){
    User.updateUserInfo(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows.affectedRows);
        }
    });
});

router.get('/expert',function(req,res,next){
        Expert.getAllExpert(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});
router.get('/expert/:id',function(req,res,next){
        Expert.getExpertById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});
// body example
//   {
//     "IdExpert": "R275244224",
//     "Password": "321",
//     "LName": "32154",
//     "FName": "321",
//     "career": "321",
//     "country": "VietNam",
//     "image": "321",
//     "isOnline": 0,
//     "lat": "321",
//     "lon": "321",
//     "sdt": "321"
// }
router.post('/expert/',function(req,res,next){//http://192.168.43.242:3000/tesse/expert

    Expert.addExpert(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});
router.put('/expert/update/:id',function(req,res,next){
    Expert.updateExpertInfo(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows.affectedRows);
        }
    });
});
router.get('/career',function(req,res,next){
        Career.getAllCareer(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});
router.get('/skill/:id_career',function(req,res,next){
        Skill.getSkillByCareer(req.params.id_career,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});
router.get('/expert_skill/:id_expert',function(req,res,next){ //http://192.168.43.242:3000/tesse/expert_skill/xuanhuong27101996@gmail.com
        Expert_Skill.getSkillbyExpert(req.params.id_expert,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});
router.post('/expert_skill/',function(req,res,next){//http://192.168.43.242:3000/tesse/expert
    Expert_Skill.addExpert_Skill(req.body.expert_id,req.body.skill_id,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(count.affectedRows);
        }
    });
});
router.post('/appointment/',function(req,res,next){

    Appointment.addAppointment(req.body,function(err,count){
        if(err){
            res.json(err);
        } else{
            res.json(count.affectedRows);
        }
    });
});
router.get('/appointmentuser/:id',function(req,res,next){
        Appointment.getAppointmentBookingById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});
router.get('/appointmentexpert/:id',function(req,res,next){
        Appointment.getAppointmentExpertById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});
router.put('/appointment/commit/:id',function(req,res,next){
    Appointment.updateCommitAppointment(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows.affectedRows);
        }
    });
});

router.get('/search/:keyword',function(req,res,next){
        Search.getExpertbyKeyword(req.params.keyword,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});
module.exports=router;

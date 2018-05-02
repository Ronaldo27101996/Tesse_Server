var db = require('../Dbconnection');

var Appointment={
    getAppointmentBookingById:function(id,callback){
        return db.query("select * from appointment where id_user=? ORDER BY id DESC",[id],callback);
    },
    getAppointmentExpertById:function(id,callback){
        return db.query("select * from appointment where id_expert=? ORDER BY id DESC",[id],callback);
    },

    addAppointment:function(Appointment,callback){
        return db.query("Insert into appointment(id_expert, id_user, date, time, lat, lon, message,isAccepted) values(?,?,?,?,?,?,?,2)",[Appointment.id_expert, Appointment.id_user, Appointment.date, Appointment.time, Appointment.lat, Appointment.lon, Appointment.message],callback);
    },
    updateCommitAppointment:function(id,Appointment,callback){
        return db.query("update appointment set isAccepted=? where id=?",[Appointment.isAccepted,id],callback);
    }
  };
 module.exports=Appointment;

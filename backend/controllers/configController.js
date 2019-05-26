const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Config=mongoose.model('Config');

exports.updateWeeklyDaysOff=(req,res,next)=>{
    Config.findByIdAndUpdate(
        {
            _id:req.body.configid
        },
        {$set:{
            weeklyDaysOff:req.body.daysOffString
        }}
    ).then(()=>{
        console.log("updated weekly days off");
        res.send({
            success:true,
            message:"updated weekly days off successfully"
        });
    }).catch(err =>{
        console.log(err);
        res.send({
            success:false,
            message:"weekly days off did not update"
        })
    })
}

exports.updateVacationDays=(req,res,next)=>{
    Config.findByIdAndUpdate(
        {
            _id:req.body.configid
        },
        {$set:{
            vacationDays:req.body.vacationDays
        }}
    ).then(()=>{
        console.log("updated vacation days");
        res.send({
            success:true,
            message:"updated vacation days successfully"
        });
    }).catch(err =>{
        console.log(err);
        res.send({
            success:false,
            message:"vacation days did not update"
        })
    })
}


exports.updateHolidays=(req,res,next)=>{

    /// NOTE - REMOVE THIS AFTER UI CONNECTED

    req.body.holidays=[
            {"_id":"5cae8972cc086f7cfa99d537","name":"New Years Day","date":{"_id":"5cae8972cc086f7cfa99d538","month":0,"day":1}},
            {"_id":"5cae8972cc086f7cfa99d535","name":"MLK Day","date":{"_id":"5cae8972cc086f7cfa99d536","month":0,"day":15}},
            {"_id":"5cae8972cc086f7cfa99d533","name":"Presidents Day","date":{"_id":"5cae8972cc086f7cfa99d534","month":1,"day":19}},
            {"_id":"5cae8972cc086f7cfa99d531","name":"Good Friday","date":{"_id":"5cae8972cc086f7cfa99d532","month":2,"day":30}}
            ]

    /// REMOVE AFTER UI CONNECTED

    Config.findByIdAndUpdate({
        _id:req.body.configid
    },{
        $set:{
            holidays:req.body.holidays
        }
    }).then((result)=>{
        res.send({
            success:true,
            message:"updated holidays successfully"
        });
    }).catch((err)=>{
        console.log(err);
        res.send({
            success:false,
            message:"holidays were not updated successfully"
        }) 
    })
}


exports.updateEvents=(req,res,next)=>{
    Events.findByIdAndUpdate(
        {
            _id:req.body.eventsid
        },
        {$set:{
            events:req.body.events
        }}
    ).then(()=>{
        console.log("updated events");
        res.send({
            success:true,
            message:"event updated successfully in DB"
        });
    }).catch(err =>{
        console.log(err);
        res.send({
            success:false,
            message:"event did not update in DB"
        })
    })
}
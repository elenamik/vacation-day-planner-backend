const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Config=mongoose.model('Config');
const Events=mongoose.model('Events');
const defaultHolidays=require('../config/defaultHolidays');

exports.updateEvents=(req,res,next)=>{

    /// HERE TEMPORARILY! MUST CHANGE ONCE UI CONNECTED
    req.body.events=[ {
        name:'Aruba',
        date:{
            month:2,
            day:30
        }
    },
    {
        name:'mexico',
        date:{
            month:3,
            day:1
       }
    }]
    req.body.eventsid='5cae8972cc086f7cfa99d525';
    
    /// CHANGE AFTER UI CONNECTED
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

exports.test=(req,res)=>{
    const config= new Config({
        userid:'ussrIdfjsdflxyz',
        vacationDay:20,
        weeklyDaysOff:'1000001',
        holidays:[
            {
                name:'New Years Eve',
                date:{
                    month:2,
                    day:4
                }
            }
        ]
    });
    console.log(config);
    const events=new Events({
        id:'useridsdfsdjkl',
        events:[
            {
                name:'Aruba',
                date:{
                    month:3,
                    day:5
                }
            }
        ]
    })
    console.log(events);
    res.send({success:true});
}

exports.fetchUserData= async (req,res,next)=>{
    console.log('fetching user data');
   
    Promise.all([
        Events.findOne({userid:req.body.user._id}),
        Config.findOne({userid:req.body.user._id})
      ]).then(([events, config]) => {
        console.log('fetched user data');
        req.body.events=events;
        req.body.config=config;
        next();
      }).catch((err) => {
        console.log(err);
        res.send({
            success:false,
            message:'failed to fetch user data'
        })
      });
}

exports.generateDefaultData=(req,res,next)=>{
    console.log('generating default user data');
    const Events=createDefaultEvents(req.body.user._id);
    const Config=createDefaultConfig(req.body.user._id);
    Promise.all([Events.save(),Config.save()]).then(
        ()=>{
        console.log('save successful');
        req.body.config=Config;
        req.body.events=Events;
        next()
        }
    ).catch((err)=>{
        console.log(err);
        res.send({sucess:false});
    })
   
    //res.send({sucess:true});
}

function createDefaultEvents(userid){
    return new Events({
        userid:userid,
        events:[]
    })

}
function createDefaultConfig(userid){
    return new Config({
        userid:userid,
        vacationDays:20,
        weeklyDaysOff:'1000001',
        holidays:defaultHolidays
    });

}


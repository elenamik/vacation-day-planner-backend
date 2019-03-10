const events_template =require('../data/events');
const mongoose = require('mongoose');
mongoose.Promise=global.Promise; // tells mongo were are using promises AND specifically the built in ES6 promise
const User = mongoose.model('User');
const bcrypt = require('bcrypt');

exports.updateEvents=async (req,res)=>{
    console.log ("updating events in mongoDB");
    console.log(req.body);

    //save this update to mongo:
    await User.findByIdAndUpdate(req.body.id,{events:req.body.events},function(err,result){
        if (result){
            console.log("event update saved successfully");
        }
        else{
            console.log(err);
        }
    }) 
}

exports.getUserInfo=(req,res) =>{
    console.log("getting info for "+req.params.name);
    User.findOne({name:req.params.name},function(err,result){
        if (result){
            res.send(result);
        }
        else{
            res.send(err);
        }
    });
}

exports.getUsers= async(req,res)=>{
    const users = await User.find();
    res.body=users;
    res.send(users); 
}

exports.validate=(req,res,next)=>{
    console.log(req.body)
    req.sanitizeBody('username').escape();
    req.sanitizeBody('password').escape();
    req.sanitizeBody('username').trim();
    req.sanitizeBody('password').trim();
    req.checkBody('username','invalid login').isAlphanumeric().isLength({min:3});
    req.checkBody('password').isLength({min:5});

    const errors=req.validationErrors();
    if (!errors){
        next();
            // return res.send({
            //     success:true,
            //     message:"valid login"
            // }
    }
    else{
        console.log(errors);
        return res.json({
            success:false,
            message:"invalid login"
        });
        //return to ui with error
    }
}

exports.register= async (req,res,next)=>{
    await User.findOne({username:req.body.username},function(err,result){
        if (result){
                // return res.json({
                //     success:false,
                //     message:"user already exists"
                // })
                return res.json({
                    success:false,
                    message:"user already exists"
                });
        }  
        else{
            const hash = bcrypt.hashSync('myPassword', 10);
            const user = new User(
                {
                    username:req.body.username,
                    password:hash,
                    events: events_template
                }
            );   
            user
                .save() // send to mongo, will return promise
                .then( () => // if it works, do this
                    {
                        return res.json({success: true, message:"registered user"})
                        // next()
                    }
                )
                .catch( error =>
                    {
                        console.log(error);
                        return res.json({success:false,message:"error registering user"})
                    }
                ); //if it errors, do this
        }
    })
}

exports.addUser= (req,res)=>{
    console.log("ADDING USER ",req.params.name);
    const user = new User(
        {
            username:req.params.name,
            password:"password",
            events: events_template
        }
    );   
    user
        .save() // send to mongo, will return promise
        .then( () => // if it works, do this
            {
                return res.json({success: true})
            }
        )
        .catch( error =>
            {
                console.log(error);
            }
        ); //if it errors, do this

}

// ------------ examples ------------
// exports.homePage = (req, res) => {
//     res.render('index');
//   };
  
//   exports.addStore = (req, res) => {
//     res.render('editStore', { title: 'Add Store' });
//   };
  
//   exports.createStore = async (req, res) => {
//     const store = await (new Store(req.body)).save();
//     req.flash('success', `Successfully Created ${store.name}. Care to leave a review?`);
//     res.redirect(`/store/${store.slug}`);
//   };
  
//   exports.getStores = async (req, res) => {
//     // 1. Query the database for a list of all stores
//     const stores = await Store.find();
//     res.render('stores', { title: 'Stores', stores });
//   };
  
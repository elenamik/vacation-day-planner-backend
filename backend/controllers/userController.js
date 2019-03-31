const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
//const User = mongoose.model('User');


exports.login= (req,res,next)=>{
    console.log("logging in");
    res.send({success:true});
}

exports.register=(req,res,next)=>{
    console.log("registering user ");



    res.send({success:true});
};

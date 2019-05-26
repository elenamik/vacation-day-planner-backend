const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
const User = mongoose.model('User');

exports.createFirstUser=(req,res)=>{
    const user=new User({
        username:req.body.username,
        password:req.body.password
    });
    user.save()
    .then(()=>{
        //delete user.password;
        req.body.user=user;
        res.send({
            success:true,
            message:'registered user'
        })
    })
    .catch(err =>{
        console.log(err);
        res.send(
            {sucess:false, 
            message:"could not register user at this time"}
        );
    });
    
}


exports.register= async (req,res,next)=>{
    await User.findOne({username:req.body.username}, 
        (err,result)=>{
            if (err){
                console.log(err);
                res.send({
                    success:false,
                    message:"error in creating user"
                })
            }
            else if(result){
                console.log("error: user already exists in database");
                res.send({
                    success:false,
                    message:"user already exists"
                });
            }
            else{
                console.log("registering user in database");
                const user=new User({
                    username:req.body.username,
                    password:req.body.password
                });
                user.save()
                .then(()=>{
                    user.password=null;
                    req.body.user=user;
                    next();
                })
                .catch(err =>{
                    console.log(err);
                    res.send(
                        {sucess:false, 
                        message:"could not register user at this time"}
                    );
                });
                
            }
        }
    )
};

exports.returnUser=(req,res)=>{
    res.send({
        success:true,
        user:req.body.user,
        events:req.body.events,
        config:req.body.config
    })
}
const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
const User = mongoose.model('User');


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

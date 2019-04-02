const passport=require('passport');

exports.logout=(req,res)=>{
    console.log('logging out user');
    req.logout();
    res.send({success:true});
}

exports.login= (req,res,next)=>{
    passport.authenticate('local',(err,user)=>{
        if (err){
            console.log(err);
            res.send({
                success:false,
                message:'authentication failed'
            });
        }
        if (user){
                console.log("user is authenticated");
                //need to give authentication token
                res.send({
                    success:true,
                    message:'signed in successfully',
                    id:user._id
                });
        }
        else{
            console.log("invalid username or password");
            res.send({
                success:false,
                message: "invalid username or password"
            });
        }
    })(req,res,next); //req,res,next must be passed
}

exports.validateLogin=(req,res,next)=>{
    console.log('recieved for validation:',req.body);
    req.sanitizeBody('username').escape();
    req.sanitizeBody('password').escape();
    req.sanitizeBody('username').trim();
    req.sanitizeBody('password').trim();

    const errors=req.validationErrors();
    if(!errors){
        console.log("valid login parameters");
        next();
    }
    else{
        console.log('login parameters invalid')
        res.send({
            success:false,
            message:"Invalid username or password"
        })
    }

}
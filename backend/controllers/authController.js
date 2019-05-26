const passport=require('passport');


exports.authenticate=(req,res,next)=>{
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
                user.password=null;
                req.body.user=user;
                next();
        }
        else{
            console.log("invalid username or password");
            res.send({
                success:false,
                message: "invalid username or password"
            });
        }
    })(req,res); //req,res,next must be passed here for passport to call strategy
}

exports.isLoggedIn=(req,res,next)=>{
    if (req.isAuthenticated()){
        print("AUTHENTICATED")
        next()
    }
    else{
        console.log("IS NOT LOGGED IN")
        res.send(
            {sucess:false, 
            message:"user is not authenticated"}
        );
    }
}


exports.logout=(req,res)=>{
    console.log('logging out user');
    req.logout();
    res.send({success:true});
}

exports.login_old= (req,res)=>{
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

                userUIData={
                    userid:req.body.user._id,
                    username:req.body.user.username,

                }

                res.send({
                    success:true,
                    message:'signed in successfully',
                    user:req.body.user
                });
        }
        else{
            console.log("invalid username or password");
            res.send({
                success:false,
                message: "invalid username or password"
            });
        }
    })(req,res); //req,res,next must be passed here for passport to call strategy
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
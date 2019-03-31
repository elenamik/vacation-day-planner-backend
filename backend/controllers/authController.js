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
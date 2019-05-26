var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

passport.use(new LocalStrategy(
    async (username, password, done) =>{
        await User.findOne({username:username})
        .then((user)=>{
            if (!user){
                return done(null,false);
            }
            else{
                user.comparePassword(password,(err,isMatch)=>{
                    if (err){
                        console.log('password compare failed');
                        throw err;
                    }
                    if (isMatch){
                        console.log('passport',user);
                        user.password=null;
                        console.log('passport',user);
                        return done(null,user);
                    }
                    else{
                        return done(null,false);
                    }
                });
            }  
        })
        .catch(err=>{
            console.log(err);
            return done(err);
        })
    }
  ));

passport.serializeUser(function(user, done) {
    //console.log('serializaing user, returns username');
    done(null, user.username); 
});

passport.deserializeUser(function(id, done) {
    //console.log('desirializing user, returns User object');
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

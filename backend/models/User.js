const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true
  }
});

userSchema.methods.comparePassword=function(candidatePassword,callback){
    bcrypt.compare(candidatePassword,this.password,(err,isMatch)=>{
            if (err){
                console.log('bcrypt hash compare failed');
                return callback(err);
            }
            callback(null,isMatch);
    });
}
    


userSchema.pre('save',function(next){
    var user=this;
    bcrypt.hash(user.password,10, function(err,hash){
        if (err){
            console.log("error in bycrypt");
             next(err);   
        }
        else{
            user.password=hash;
            next();
        }
    })
});

module.exports = mongoose.model('User', userSchema);
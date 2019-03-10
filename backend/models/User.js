const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    // required: 'Please enter name!'
  },
  password: {
    type: String,
    // required: 'Please enter name!'
  },
  events: [Object]
});

// userSchema.pre('save', function(next) {
//   next();
// });

module.exports = mongoose.model('User', userSchema);

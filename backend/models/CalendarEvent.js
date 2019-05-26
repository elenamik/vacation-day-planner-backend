const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dateSchema = new mongoose.Schema({
    month: {
        type: Number,
        trim: true,
    },
    day: {
        type: Number,
        trim: true
    } 
});

const calendarEventSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    date: dateSchema
  }
);

module.exports = calendarEventSchema;

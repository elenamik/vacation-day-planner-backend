const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const calendarEventSchema=require('./CalendarEvent');

const configSchema = new mongoose.Schema({
    userid: {
        type: String,
        trim: true,
    },
    vacationDays: {
        type: Number,
        trim: true
    },
    weeklyDaysOff:{
        type: String,
        trim: true,
    },
    holidays:[calendarEventSchema]
  });

  module.exports = mongoose.model('Config', configSchema);
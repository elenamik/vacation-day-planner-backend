const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const calendarEventSchema=require('./CalendarEvent');

const eventsSchema = new mongoose.Schema({
    userid:String,
    events:[calendarEventSchema]
});

module.exports = mongoose.model('Events', eventsSchema);
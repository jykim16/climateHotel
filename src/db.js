var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/climate');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  Room: Number,
  Laundry: Number,
  Lighting: Number,
  Thermostat: Number,
  "Trash/Recycling": Number,
  Water: Number,
  date: String
});

var Entry = mongoose.model('Entry', itemSchema);

var selectAll = function(callback) {
  Entry.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;

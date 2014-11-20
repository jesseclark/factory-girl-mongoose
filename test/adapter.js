var MongooseAdapter = require('../').MongooseAdapter;
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var FactoryTests = require('factory-girl/lib/adapter-tests');


describe('Mongoose Adapter', function() {

  var db = Mongoose.connection;
  var schema = new Schema(
    {
      first_name:       String,
      last_name:        String,
    },
    {
      autoIndex: false,
      strict: false
    }
  );

  var User = Mongoose.model('User', schema);

  before( function (done) {
    db.on('error', function (err) {
      throw(err);
    });

    db.once('open', function () {
      done();
    });

    Mongoose.connect('mongodb://localhost:27017/fg-mongoose-test');
  });


  after( function (done) {
    db.close(function () {
      done();
    });
  });

  var countModels = function (callback) {
    User.where({}).count( function (err, count) {
      if (err) {
        return callback(err);
      }
      callback(null, count);
    });
  };

  FactoryTests(MongooseAdapter, User, countModels);
});




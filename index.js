var Factory = require("factory-girl");
var Adapter = Factory.Adapter;

var MongooseAdapter = function(){};

MongooseAdapter.prototype.build = function(Model, attributes) {
  return new Model(attributes);
};

MongooseAdapter.prototype.get = function(doc, attr, Model) {
  return doc.get(attr);
};

MongooseAdapter.prototype.set = function(props, doc, Model) {
  return doc.set(props);
};

MongooseAdapter.prototype.save = function(doc, Model, callback) {

  doc.save(function (err) {

    if (err) {
      return callback(err);
    }
    callback();
  });
};

MongooseAdapter.prototype.destroy = function(doc, Model, callback) {

  doc.remove(function (err) {

    if (err) {
      return callback(err);
    }
    callback();
  });
};

exports.MongooseAdapter = new MongooseAdapter();

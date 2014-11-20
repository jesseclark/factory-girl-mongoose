factory-girl-mongoose
=====================

A [Mongoose](http://http://mongoosejs.com/) adapter for [factory-girl](https://github.com/aexmachina/factory-girl).

[![Build Status](https://travis-ci.org/jesseclark/factory-girl-mongoose.png)](https://travis-ci.org/jesseclark/factory-girl-mongoose)

## Usage

```javascript
var FactoryGirl = require('factory-girl');
var Factory = new FactoryGirl.Factory();
var MongooseAdapter = require('factory-girl-mongoose').MongooseAdapter;
Factory.setAdapter(MongooseAdapter);
```

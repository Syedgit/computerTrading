'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('User', UserSchema);

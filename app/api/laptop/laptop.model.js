'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var LaptopSchema = new mongoose.Schema({
  name: String,
  ram:String,
  harddrive:String,
  Brand: String,

});

module.exports = mongoose.model('Laptop', LaptopSchema);

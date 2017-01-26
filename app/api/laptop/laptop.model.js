'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var LaptopSchema = new mongoose.Schema({
  name: String,
  ram:String,
  harddrive:String,
  brand: String,
  price: String,
  description: String

});

module.exports = mongoose.model('Laptop', LaptopSchema);


//create specific folder name under server dir like (diagram or user) then add following.
//CONTROLLER.JS

/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/diagrams              ->  index
 * POST    /api/diagrams              ->  create
 * GET     /api/diagrams/:id          ->  show
 * PUT     /api/diagrams/:id          ->  update
 * DELETE  /api/diagrams/:id          ->  destroy
 */

'use strict';

var _ = 'lodash';
var Laptop= require('./laptop.model');
var laptop = new Laptop({ name: 'Dell Latitude 14.1',cpu:'2.4GHZ' ,ram: '4GB', harddrive: '160GB',brand:'Dell',price: 135,description:'Dell Latitude D830 15.4" Laptop Computer 4GB 160GB DVD Wifi'});
laptop.save(function(err) {
  // we've saved the dog into the db here
  if (err) throw err;

});

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

//get
// Gets a list of Diagrams
exports.index = function(req, res) {
  Laptop.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}




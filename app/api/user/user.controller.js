
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
var User= require('./user.model');


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
  User.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new User in the DB
exports.create = function(req, res) {
  User.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}


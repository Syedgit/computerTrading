
var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/',controller.create);
// router.get('/:id', controller.show);
// router.get('/user', controller.userDiagram)
// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;
Controller.js

var fs = require('fs');
var multer  = require('multer');
var upload = multer({dest:'app/'}).single('file');
export function create(req, res) {

  upload(req, res, function (err) {
    if (err) {
     console.log("error occurred");
    }else{
      fs.readFile(req.file.path,'utf8', function(err, data) {
          if (err) throw err;
          res.json(data);
          fs.unlink(req.file.path);
      });
    }
  });
}


INDEX.JS

'use strict';

var express = require('express');
var controller = require('./fileUpload.controller');
var router = express.Router();

router.post('/fileUpload',controller.create);

module.exports = router;

routes.js

app.post('/fileUpload', require('./api/fileUpload'));

CLIENT

    $scope.uploadFile = function(file){
      var fileExt = file.name.split('.').pop();
      console.log(fileExt);
      if(fileExt === "bpmn"){
        $scope.addTab();
              var uploadUrl = "/fileUpload";
              fileUpload.uploadFileToUrl(file, uploadUrl)
                      .then(function(response) {
                        $scope.string = response.data;
                        $scope.tabs.push({titleId:$scope.counter, text:file.name.replace(/\.[^/.]+$/, ""), content: response.data});
                        // console.log($scope.tabs);
                        bpmnModeler.importXML(response.data,function(err) {
                          if(err) {
                            console.log(err);
                          }
                        });
                      })
                      .catch(function(error) { console.log(error) });
      } else {
      console.log("need bpmn file");
      toastr.info('you must upload bpmn file');
      }

    };
    
    HTML
    
    <label style="padding-left:20px" class="glyphicon glyphicon-folder-open glyphicon-size text-info" title="Upload">
                  <input type="file" file-model="myFile" callback-fn="uploadFile(file)" style="display: none;"/>
               </label>

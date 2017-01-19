var Nerd = require('./models/nerd');
var path = require('path');

    module.exports = function(app) {

        app.use('/api/user', require('./api/user'));
        // app.get('*', function(req, res) {
        //     res.sendfile('./public/views/index.html'); // load our public/index.html file
        //    // res.sendFile(path.join(__dirname, ''../public/views/index.html'')); 
        // });
         app.route('*')
            .get(function(req, res){
     // res.sendFile('./public/views/index.html');
             res.sendfile('./public/views/index.html');
    });
   //      app.use(function(req,res)
   // {
   //      app.get('*', function(req, res) {
   //      res.sendfile('./public/views/index.html');
   //     console.log("Not found....I will handle *unhandle* rout here for you");
   //      });
   //  }
};
// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var http = require('http');
var db = require('./config/db');
var db_check = mongoose.connection;
db_check.on('error', console.error.bind(console, 'connection error:'));
db_check.once('open', function() {
  console.log('DATABASE CONNECTED');
});
var port = process.env.PORT || 8080; 
mongoose.connect(db.url); 
app.use(bodyParser.json()); 
//app.use(require('./app/routes'));
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 
require('./app/routes')(app);
//function startServer() {
  app.listen(port, function() {
    console.log('Express server listening on %d, in %s mode', port);
  });
//}               
//setImmediate(startServer);

// expose app           
exports = module.exports = app;                         
//1- Ya ayu Alazina aminu astiyunu bisabre wasalahwat Inallah mahisabreen.

//2- quloon maroofun wa maghfiratun khairum min sadqatin iztabhoha izann wallah ganion aleem.

//3- wa taizu mantasha wa tazilu mantasha * Baidaka alkhair > Inika ala kule shain qadeer > Laijul laila
//   fi nahara wa laijul nahare fi lail > wa nahkrajul haya minal mayeta wa nahkrajul mayate minal haye > 
//   farozoqo man tasha begair hisab. 
//4 - wa kitabna aleham fiha anan nafsa bin nafse wal aina bil aine wal anfa bil anfe wal azona bil ozone 
 //   wa sina bis sine

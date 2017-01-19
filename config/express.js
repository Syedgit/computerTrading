// // config/db.js
//     /*module.exports = {
//         url : 'mongodb://localhost/trading-dev'
//     }
//     */

// /**
//  * Express configuration
//  */

// 'use strict';

// var express = require('express');
// var morgan = require('morgan');
// var bodyParser = require('body-parser');
// var session =require('express-session');
// // import cookieParser from 'cookie-parser';
// // import errorHandler from 'errorhandler';
// var path = require('path');
// // import lusca from 'lusca';
// var config = require('./db');
// var mongoose = require('mongoose');
// var connectMongo = require('connect-mongo');
// var mongoStore = connectMongo(session);

// module.exports = function(app) {
//  // app.engine('html', require('ejs').renderFile);
//  var env = app.get('env');	
//   app.set('view engine', 'html');
//   app.use(bodyParser.urlencoded({ extended: false }));
//   app.use(bodyParser.json());
//   //app.use(methodOverride());
//   app.set('appPath', path.join('public'));
//   app.use(express.static(__dirname + '/public'));

//    app.use(session({
//     saveUninitialized: true,
//     resave: false,
//     store: new mongoStore({
//       mongooseConnection: mongoose.connection,
//       db: 'stencil-dev'
//     })
//   }));
//   //app.use(cookieParser());

//   // Persist sessions with mongoStore / sequelizeStore
//   // We need to enable sessions for passport-twitter because it's an
//   // oauth 1.0 strategy, and Lusca depends on sessions
//   //app.use(session({
//   //   secret: config.secrets.session,
//   //   saveUninitialized: true,
//   //   resave: false,
//   //   store: new mongoStore({
//   //     mongooseConnection: mongoose.connection,
//   //     db: 'angular-modeler'
//   //   })
//   // }));

//   /**
//    * Lusca - express server security
//    * https://github.com/krakenjs/lusca
//    */
//   // if ('test' !== env) {
//   //   app.use(lusca({
//   //     csrf: {
//   //       angular: true
//   //     },
//   //     xframe: 'SAMEORIGIN',
//   //     hsts: {
//   //       maxAge: 31536000, //1 year, in seconds
//   //       includeSubDomains: true,
//   //       preload: true
//   //     },
//   //     xssProtection: true
//   //   }));
//   // }

//   // app.set('appPath', path.join(config.root, 'public'));

//   // if ('development' !== env) {
//   //   // app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
//   //   app.use(express.static(app.get('appPath')));
//   //   app.use(morgan('dev'));
//   // }
// }

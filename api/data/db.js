var mongoose = require('mongoose');
var dburl = 'mongodb://' + process.env.IP + ':27017/CDFinance';

<<<<<<< HEAD
mongoose.connect(dburl, 
{
 useMongoClient: true,
=======

mongoose.connect(dburl, 
{
  useMongoClient: true,
>>>>>>> 859a596a69ab4661c27ecfd766c859172bb5227a
});

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dburl);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

process.on('SIGINT', function () {
  mongoose.connection.close(function() {
    console.log("Mongoose disconnected through app termination (SIGINT)");
    process.exit(0);
  });
});

process.on('SIGTERM', function () {
  mongoose.connection.close(function() {
    console.log("Mongoose disconnected through app termination (SIGTERM)");
    process.exit(0);
  });
});

process.once('SIGUSR2', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through app termination (SIGUSR2)');
    process.kill(process.pid, 'SIGUSR2');
  });
});

require('./stocks.model.js');
require('./users.model.js');
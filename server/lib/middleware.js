'use strict';

//We'll use this to be able to send requests between the client and server
const bodyParser = require( 'body-parser' );

module.exports = function ( app, express ) {
  //Nothing we upload/send can be over 50 megabytes
  app.use( bodyParser.urlencoded({limit: '50mb', extended: true}) );
  app.use( bodyParser.json({limit: '50mb'}) );
  app.use( express.static( __dirname + '/../../client' ) );
};

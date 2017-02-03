'use strict';
const app = require( './app' );
const models = require( './models' );
const initData = require ('./lib/initData.js' );
/* Start the server */
const http = require( 'http' ).Server( app ); 

/* Warn about environment variables */
const warnEnvVars = function( vars ) {
  let didWarn = false;
  let warnString = '';
  vars.forEach( function( envVar ) {
    if( !process.env[envVar] ) {
      didWarn = true;
      warnString += '\n* It may be a good idea to set the ' + envVar + ' environment variable. You can use `export ' + envVar + '=<text>` to do this.';
    }
  });

  if( didWarn ) {
    console.log( 'WARNING:', warnString );
  }
}

warnEnvVars( ['PORT', 'JWT_SECRET', 'SQLUSER', 'SQLPASS', 'SQLPORT', 'SQLDBNAME'] );

process.env.JWT_SECRET  = process.env.JWT_SECRET || 'asf23r9sdf21';

/* Set the port, default 3000 */ 

app.set( 'port', process.env.PORT || 3000 );
  models.sequelize.sync({force:false}).then( () => {
  var server = http.listen( app.get( 'port' ), () => {
    initData( models );
    console.log( 'Express server listening on ' + server.address().port );
  });
})
.catch( ( error ) => {
  console.error( error );
});
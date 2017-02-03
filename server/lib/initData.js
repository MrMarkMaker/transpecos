'use strict';

module.exports = function( models ) {
  // In the future we'll populate the database with necessary stuffs here.  
  models.Test.findOrCreate({ 
    where: {
      message: "This is a test"
    }
  });  
  
}

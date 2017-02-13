import React from "react";
import SheetAbilities from "./abilities.jsx";
import SheetPriorsAndParticulars from "./priorsandparticulars.jsx"

function Sheet(){
  return(
    <div className='row'>
      <div className='col-sm-6 col-md-4'>
        <SheetAbilities />
      </div>
      
      <div className='col-sm-6 col-md-8'>
        <SheetPriorsAndParticulars />
      </div>
    </div>
  )
}

export default Sheet

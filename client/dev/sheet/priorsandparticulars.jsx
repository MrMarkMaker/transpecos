import React from "react";

function SheetPriorsAndParticulars(props){
  return(
    <div className="panel panel-default">
      <div className="panel-heading">Priors And Particulars</div>
      <div className="panel-body">
        <ul className="priors-and-particulars">
          <li>
            <span>Trait Name</span>
            <div className="btn-group">
              <span className="btn">Edit</span>
              <span className="btn">Delete</span>
            </div>
          </li>
        </ul>
        <div className="row">
          <form className="form col-md-12">
            <div className="input-group">
              <label className="sr-only" htmlFor="addprior">Add A Trait</label>
              <select className="form-control">
                <option>Placeholder</option>
                <option>Placeholder</option>
                <option>Placeholder</option>
              </select>
              <div className="input-group-btn">
                <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-plus-sign"></span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SheetPriorsAndParticulars;

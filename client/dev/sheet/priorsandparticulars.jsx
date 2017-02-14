import React from "react";

function Quirk( props ){
  return(
    <li key={props.id}>
      <span>{props.name}</span>
      <div className="btn-group">
        <span className="btn" onClick={ props.onQuirkDelete }>Delete</span>
      </div>
    </li>
  )
}              

var AddQuirkForm = React.createClass({
  
  getInitialState: function() {
    return {
      name: "",
    };
  },
  
  onSubmit: function( e ){
    e.preventDefault();
    console.log(this.state.name);
    this.props.onQuirkAdd(this.state.name);
    this.setState({ name: "" });
  },
  
  onQuirkSelection: function( e ){
    this.setState({ name: e.target.value });
  },
  
  render: function(){
    return(
      <div className="row">
        <form className="form col-md-12" onSubmit={this.onSubmit}>
          <div className="input-group">
            <label className="sr-only" htmlFor="addquirk">Add A Trait</label>
            <select className="form-control" onChange={this.onQuirkSelection}>
              <option value="Chunked">Chunked</option>
              <option value="Deathwish">Deathwish</option>
              <option value="Doppelganger">Doppelganger</option>
            </select>
            <div className="input-group-btn">
              <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-plus-sign"></span></button>
            </div>
          </div>
        </form>
      </div>
    )
  }
});

function Quirks( props ){
  console.log( "Quirks rendering" );
  return(
    <div className="col-sm-6 col-md-8">
      <div className="panel panel-default">
        <div className="panel-heading">Quirks And Particulars</div>
        <div className="panel-body">
           <ul className="quirks-and-particulars">
            {props.data.map(function( quirk, index ){
              return( 
                <Quirk
                  key={quirk.id}
                  index={index}
                  name={quirk.name}
                  onQuirkDelete={ 
                    function( index ){
                      props.onQuirkDelete( index ) 
                    }.bind( index )
                  }
                />
              )
            })}    
          </ul>
          <AddQuirkForm 
           onQuirkAdd={props.onQuirkAdd}
          />
        </div>
      </div>
    </div>
  )
}

export default Quirks;

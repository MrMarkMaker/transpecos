import React from "react";

class AbilitiesTable extends React.Component { 
  constructor( props ){
    super(props);
  
    //Initial state
    this.state = {
      data: props.data,
      tries: 3
    }
    
    //Manually bind functions 
    this.rollstats = this.rollstats.bind(this);
  }
      
  rollstats(event){
    if( this.state.tries > 0 ){ 
      var newData = this.state.data;
      for( var i = 0; i < 7; i ++ ){
        var abilityscore = Math.floor(Math.random() * (18 - 3 ) + 3 );
        var fractionalscore = Math.floor(Math.random() * (100 - 1 ) + 1 );
        newData[i].score = abilityscore;
        newData[i].fraction = fractionalscore;
        // TO DO: Set modifiers     
      }
      this.setState({
        data: newData,
        tries: this.state.tries - 1
      });
    } else {
      //TO DO: Notify user that they ran out of tries.
    }
  }
  
  render(){
    return(
    <div>
      <p>{this.state.tries} Rolls Left</p>
      <button onClick={this.rollstats}>Roll</button>
      <ul>
        {this.state.data.map(function(ability){
          return(
            <li key={ability.id}>
              <div>
                {ability.name}: {ability.score}/{ability.fraction}
              </div>
              <div>
                {ability.modifier.name} Modifier: { ability.modifier.score }
              </div>
            </li>
          )
        })}
      </ul>
    </div>
    )
  }
};

AbilitiesTable.propTypes = {
  tries: React.PropTypes.number,
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape(
      {
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string,
        modifiers: React.PropTypes.object,
        score: React.PropTypes.number,
        fraction: React.PropTypes.number,
        id: React.PropTypes.number.isRequired //used as key
      }
    )
  )
}

export default AbilitiesTable;

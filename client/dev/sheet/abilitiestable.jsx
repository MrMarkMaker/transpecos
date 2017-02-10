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
    this.confirmstats = this.confirmstats.bind(this);
  }
  
  confirmstats(){
    var newData = this.state.data; 
    var abilitySum = 0;
    var reputationScore = 0;
    for( var i = 0; i < 7; i++ ){
      abilitySum += parseInt( newData[i].score, 10 ); 
    }
    reputationScore = Math.floor( abilitySum / 7 ); 
    //Create Starting Reputation. 
    var reputation = {
      name: "Reputation",
      score: reputationScore,
      fraction: 0,
      id: 8,
      modifier: {
        name: "BP Bonus",
        score: 0
      }
    };
    newData.push( reputation );
    
    //TODO: Figure out how to calculate modifiers because that's how Fame is done and it needs doing
    var fame = {
      name: "Fame",
      score: 0,
      fraction: 0,
      id: 9,
      modifier:{
        name: null,
        score: null
      }
    }
    newData.push( fame );
    
    console.log( newData );
    this.setState({
      data: newData,
      tries: 0
    });
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
      this.confirmstats();
    }
  }
  
  render(){
    console.log( "Rendering" );
    return(
    <div>
      <p>{this.state.tries} Rolls Left</p>
      <button onClick={this.rollstats}>Roll</button>
      <button onClick={this.confirmstats}>Keep These Stats</button>
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

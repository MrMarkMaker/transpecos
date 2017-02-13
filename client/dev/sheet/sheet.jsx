import React from "react";
import AbilityScore from "./abilities.jsx";
import SheetPriorsAndParticulars from "./priorsandparticulars.jsx"; 

var Sheet = React.createClass({
  /* Set Properties */
  propTypes: {
    character: React.PropTypes.shape({
      abilities: React.PropTypes.array,
      priors: React.PropTypes.array
    })
  },
  
  getDefaultProps: function() {
    return {
      initialStats: {
        abilities: [
          {
            name: "Strength",
            score: 1,
            fraction: 0,
            id: 1
          },
          {
            name: "Intelligence",
            score: 1,
            fraction: 0,
            id: 2            
          }
        ],
        priors: []
      }
    }
  },
  
  /* Set state */  
  getInitialState: function() {
    return {
      character: { 
        stats: this.props.initialStats
      }
    };
  },
  
  /* Define functions */ 
  onScoreChange: function( index, delta ){
    var newScore = this.state.character.stats.abilities[index].score + delta;
    if( newScore <= 25 && newScore >= 1 ){
      this.state.character.stats.abilities[index].score = newScore;
      this.setState( this.state );
    }
  },
  
  /* Render */
  render: function(){
    return(
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className='panel panel-default'>
            <div className='panel-heading'>Abilities</div>
            <div className='panel-body'>
              <table className='table table-responsive'>
                <thead>
                  <tr>
                    <th>Ability</th>
                    <th>Rating</th>
                    <th>Fraction</th>
                    <th>Modifier</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.character.stats.abilities.map(function( stat, index ) {
                  return (
                    <AbilityScore
                      onScoreChange={function(delta) {this.onScoreChange(index ,delta)}.bind(this)}
                      name={stat.name} 
                      score={stat.score} 
                      fraction={stat.fraction}
                      key={stat.id} />
                  );
                }.bind(this))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-8">
          <SheetPriorsAndParticulars />
        </div>
      </div>
    )
  }
})

export default Sheet

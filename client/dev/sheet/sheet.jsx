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
            score: 0,
            fraction: 0,
            id: 1
          },
          {
            name: "Intelligence",
            score: 0,
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
    console.log( this.state.character.stats.abilities[index].score );
    this.state.character.stats.abilities[index].score += delta; 
    this.setState( this.state );
  },
  
  /* Render */
  render: function(){
    return(
      <div className="row">
        <div className="col-sm-6 col-md-4">
          {this.state.character.stats.abilities.map(function( stat, index ) {
            return (
              <AbilityScore
                onScoreChange={function(delta) {this.onScoreChange(index ,delta)}.bind(this)}
                name={stat.name} 
                score={stat.score} 
                key={stat.id} />
            );
          }.bind(this))}
        </div>
        <div className="col-sm-6 col-md-8">
          <SheetPriorsAndParticulars />
        </div>
      </div>
    )
  }
})

export default Sheet

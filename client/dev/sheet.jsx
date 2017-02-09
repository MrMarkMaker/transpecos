/* RIGHT NOW: 
  I r learn reacts, you can basically just nudge stats up and down between 1 and 25.

END GOAL BEHAVIOR: 
  Interactivity: 
    Player chooses to roll for stats or manually assign stats
    If rolls: 
      Player rolls 3d6 for each ability score, and a d100 for fractional ability of each
    If assigns stats:
      Player assigns a pool of numbers to the scores they want
      (let's go with 16/18, 15/27, 13/45, 11/63, 10/72, 8/90, 8/90 )      
    
    In both cases, once these stats are set, +/- buttons show up so player can adjust their results
    Player will need to decrease one ability by 2 for each ability they have increased by 1.
*/
    
import React from "react";

function Sheet(props){
  return(
    <AbilitiesTable data={props.abilities} />
    //Later on we will also put in other statset components
  );
}

Sheet.propTypes = {
  abilities: React.PropTypes.arrayOf(
    React.PropTypes.shape(
      {
        name: React.PropTypes.string.isRequired,
        modifier: React.PropTypes.string,
        score: React.PropTypes.number,
        id: React.PropTypes.number.isRequired //used as key
      }
    )
  )
};

Sheet.defaultProps = {
    abilities:
    [
      {
        name: "Strength",
        modifier: "Damage",
        id: 1
      },
      {
        name: "Intelligence",
        modifier: "Skill Learning",
        id: 2
      },
      {
        name: "Wisdom",
        modifier: "Skill Learning",
        id: 3
      },
      {
        name: "Dexterity",
        modifier: "To-Hit",
        id: 4
      },
      {
        name: "Constitution",
        modifier: "Hit Point",
        id: 5
      },
      {
        name: "Looks",
        modifier: "Rep/Fame",
        id: 6
      },
      {
        name: "Charisma",
        modifier: "Skill Learning",
        id: 7
      },
      {
        name: "Reputation",
        id: 8
        //No modifier
      },
      {
        name: "Fame",
        id: 9
        //No modifier
      }
    ]
};


function AbilitiesTable(props){
  return(
    <ul>
      {props.data.map(function(ability){
        return(
          <li key={ability.id}>
            <div>
              {ability.name}: {ability.modifier}
            </div>
            <StatCounter />
          </li>
        )
      })}
    </ul>
  )
}

AbilitiesTable.propTypes = {
// Since these propTypes are described by Sheet too, I wonder if this isn't just needlessly redundant
// But maybe as the app gets more complicado then this little chunk broken down will be useful
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape(
      {
        name: React.PropTypes.string.isRequired,
        modifier: React.PropTypes.string,
        score: React.PropTypes.number,
        id: React.PropTypes.number.isRequired //used as key
      }
    )
  )
}

var StatCounter = React.createClass({
  propTypes: {
    score: React.PropTypes.number
  },
  
  getInitialState: function(){
    return{
      score: 1      
    }
  },
  
  increaseScore: function(){
    //Maximum score is 25
    var tempscore = this.state.score + 1;
    if( tempscore < 26 ){
      this.setState({
        score: (this.state.score + 1)
      })
    }
  },
  
  decreaseScore: function(){
    //Minimum score is 1 
    var tempscore = this.state.score - 1;
    if( tempscore > 1 ){
      this.setState({
        score: (this.state.score - 1),
      });
    }
  },
  
  render: function(){
    return(
      <div>
        <button onClick={this.decreaseScore}> - </button>
        <span>{this.state.score}</span>
        <button onClick={this.increaseScore}> + </button>
      </div>
      //Sweet mother of victory I will turn this into an input later when I remotely understand how the hell to do that
    )  
  }
});

export default Sheet

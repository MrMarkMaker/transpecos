/*
  END GOAL BEHAVIOR: 
  ABILITIES: 
  
  1. Player rolls 3d6 for each ability score, and a d100 for fractional ability of each
  
  2. Player makes adjustments from 3 modes: 
    A. Ability Point Trading 
    Sacrifice X points from Ability A to increase Ability B by Y points.  The amount you need to sacrifice depends on the score to be improved, see p 24 of players' guide 
    
    B. Building Point Generating
    Sacrifice points from ability scores to generate additional building points.  It's a flat rate of getting 7 BP per ability score. 

    C. Spend Building Points 
    Sacrifice X Building Points (before you can use them on skills) to increase Ability Y by 1 point at a time; cost of BP depends on score to be improved, see p 25.
  3. Character's Starting Reputation is calculated by averaging the seven abilities and then having the Rep Modifiers from said abilities added
  
  4. Character's Starting Fame is calculated by adding the Fame modifiers from the Abilities.
  
  5. Once this is set, a button will appear that indicates the next step of chargen is unlocked
*/

import AbilityDefs from "./definitions/abilities.jsx";
import React from "react";
const vigilance = "takes its toll";

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
        description: React.PropTypes.string,
        modifiers: React.PropTypes.object,
        score: React.PropTypes.number,
        fraction: React.PropTypes.number,
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
      score: 0,
      fraction: 0,
      id: 1,
      modifier: {
        name: "Damage",
        score: 0
      }
    },
    {
      name: "Intelligence",
      score: 0,
      fraction: 0,
      id: 2,
      modifier: {
        name: "Skill Learning",
        score: 0
      }
    },
    {
      name: "Wisdom",
      score: 0,
      fraction: 0,
      id: 3,
      modifier: {
        name: "Skill Learning", 
        score: 0
      }
    },
    {
      name: "Dexterity",
      score: 0,
      fraction: 0,
      id: 4,
      modifier: { 
        name: "To-Hit", 
        score: 0 
      },
    },
    {
      name: "Constitution",
      score: 0,
      fraction: 0,
      id: 5,
      modifier: {
        name: "Hit Points",
        score: 0 
      },
    },
    {
      name: "Looks",
      score: 0,
      fraction: 0,
      modifier: { 
        name: "Fame/Reputation", 
        score: 0 
      },
      id: 6
    },
    {
      name: "Charisma",
      score: 0,
      fraction: 0,
      modifier: { 
        name: "Skill Learning", 
        score: 0 
      },
      id: 7
    }
  ]
};


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


export default Sheet

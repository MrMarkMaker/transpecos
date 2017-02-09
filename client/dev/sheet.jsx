/* RIGHT NOW: 
  I r learn reacts, you can basically just nudge stats up and down between 1 and 25.

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
      description: "Determines how much damage you can deal in melee and brawling situations, plus how much you can lift and carry.",
      id: 1,
      modifiers: {
        feature: ["Damage"], //The modifier to feature in the main ability score table. 
        fractional: true,  // for later code to do an if else.  Fractional = true means your modifier depends on your Ability Score + whether your Fractional Ability Score > 50 
        statsets: [ //Modifiers are responsible for modifying more than one thing hence the array 
          {
            name: "Damage",
            fractional: true,
            values: [        // Because the modifier is fractional we have an array of arrays: [A, B] where A is if your Fractional is < 50 and B is if > 50. 
              [-7, -6], //ability score of 1
              [-6, -5], //ability score of 2
              [-5, -4], //ability score of 3...
              [-4, -4], //4
              [-3, -3], //5
              [-3, -2], //6
              [-2, -2], //7
              [-1, -1], //8
              [-1, -1], //9
              [0, 0],   //10
              [0, 0],
              [1, 1],
              [1, 1],
              [2, 2],
              [2, 3],   //15
              [3, 3],   
              [4, 4],   
              [4, 5],
              [5, 6],
              [6, 7],   //20
              [7, 8],
              [8, 9],
              [10, 11],
              [12, 13],
              [14, 14]  //25
            ]
          },
          {
            name: "Lift",
            fractional: true,
            values: [] //aint nobody
          },
          {
            name: "Carry",
            fractional: true,
            values: [] //got time
          },
          {
            name: "Drag",
            fractional: true,
            values: [] //fo dat 
          }
        ]
      }
    },
    {
      name: "Intelligence",
      id: 2,
      modifiers: {
        feature: ["Skill Learning"],
        fractional: false,
        statsets: [
          {
            name: "Accuracy",
            values: [-3,-3,-3,-2,-2,  -2,-1,-1,-1,0,  0,1,1,1,2,  2,2,3,3,3,  4,4,4,5,5] //These are not fractional, yay. 
          },
          {
            name: "BP Bonus",
            values: [0,0,0,0,0,  0,0,0,0,0,  0,1,3,6,10,  15,21,28,36,45,  55,66,78,91,105]
          },
          {
            name: "Skill Learning",
            values: [-9,-8,-7,-6,-5,  -4,-3,-2,-1,0,  0,1,2,3,4,  5,6,7,8,9,  10,11,12,13,14]
          }
        ]
      }
    },
    {
      name: "Wisdom",
      id: 3,
      modifiers: {
        feature: ["Skill Learning"],
        fractional: false,
        statsets: [
          {
            name: "Speed",
            values: [5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 1, 1, 1, 0, 0, 0, -1, -1, -1, -2, -2, -2, -3]
          },
          {
            name: "BP Bonus",
            values: [0,0,0,0,0,  0,0,0,0,0,  0,1,3,6,10,  15,21,28,36,45,  55,66,78,91,105]
          },
          {
            name: "Skill Learning",
            values: [-9,-8,-7,-6,-5,  -4,-3,-2,-1,0,  0,1,2,3,4,  5,6,7,8,9,  10,11,12,13,14]
          }
        ]
      }
    },
    {
      name: "Dexterity",
      id: 4,
      modifiers: {
        feature: ["To-Hit"],
        fractional: true,
        statsets: [
          {
            name: "Speed",
            values: [] //Fill out later
          },
          {
            name: "Accuracy",
            values: [] //Fill out later, spoiler alert: it's the same as to-hit despite that these are two different stats
          },
          {
            name: "To-Hit", //Yeah apparently accuracy and to-hit are two different things
            values: [
              [-5,-4],
              [-4,-4],
              [-4,-3],
              [-3,-3],
              [-3,-2], //5
              [-2,-2],
              [-2,-1],
              [-1,-1],
              [-1,0],
              [0,0], //10
              [0,0],
              [1,1],
              [1,1],
              [2,2],
              [2,2], //15
              [3,3],
              [3,3],
              [4,4],
              [4,4],
              [5,5], //20
              [5,5],
              [6,6],
              [7,7], //Oh come on hackmasters why cant it just be not fractional
              [7,7],
              [7,7]  //25
            ]
          }         
        ]
      }
    },
    {
      name: "Constitution",
      modifiers: {
        feature: ["Hit Points"],
        fractional: false,
        statsets: [
          {
            name: "Hit Points",
            values: [-9,-8,-7,-6,-5,  -4,-3,-2,-1,0,  0,1,2,3,4,  5,6,7,8,9,  10,11,12,13,14]
          }
        ]
      },
      id: 5
    },
    {
      name: "Looks",
      modifiers: {
        feature: ["Fame", "Reputation"],
        fractional: false,
        statsets: [
          { 
            name: "Fame",
            values: [-9,-8,-7,-6,-5,  -4,-3,-2,-1,0,  0,1,2,3,4,  5,6,7,8,9,  10,11,12,13,14]
          },
          {
            name: "Reputation",
            values: [-9,-8,-7,-6,-5,  -4,-3,-2,-1,0,  0,1,1,2,2,  3,4,5,6,7,  8,9,10,11,12]
          }
        ]
      },
      id: 6
    },
    {
      name: "Charisma",
      modifiers: {
        feature: ["Skill Learning"],
        fractional: false,
        statsets: [
          {
            name: "Skill Learning",
            values: [-9,-8,-7,-6,-5,  -4,-3,-2,-1,0,  0,1,2,3,4,  5,6,7,8,9,  10,11,12,13,14] 
          },
          {
            name: "Reputation",
            values:  [-9,-8,-7,-6,-5,  -4,-3,-2,-1,0,  0,1,2,3,4,  5,6,7,8,9,  10,11,12,13,14]
          },
          {
            name: "BP Bonus",
            values: [0,0,0,0,0,  0,0,0,0,0,  0,1,3,6,10,  15,21,28,36,45,  55,66,78,91,105] 
          },
          {
            name: "Compatriots", //How many NPCs you can have, it's like a Retainers/Allies/Contacts score all in one
            values: [] //Fill out later
          }
        ]
      },
      id: 7
    }
  ]
};

/*
For later: Reputation and Fame 
{
  name: "Reputation", //REF: CH 4.2 Reputation and Fame
  id: 8
  modifiers: {
    fractional: false,
    statsets: [
      {
        name: "BP Bonus",
        values: [0,0,0,0,0,  5,10,15,20,25,  25,25,30,30,35,  40,45,50,55,60,  65,70,75,80,85]
      }
    ]
  }
},
{
  name: "Fame",
  id: 9
  //No modifier
}

*/

function AbilitiesTable(props){
  return(
    <ul>
      {props.data.map(function(ability){
        return(
          <li key={ability.id}>
            <div>
              {ability.name}
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

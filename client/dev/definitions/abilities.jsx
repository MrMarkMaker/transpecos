const AbilityDefs = [
    {
      name: "Strength",
      description: "Determines how much damage you can deal in melee and brawling situations, plus how much you can lift and carry.",
      id: 1,
      modifiers: {
        fractional: true,  // for later code to do an if else.  Fractional = true means your modifier depends on your Ability Score + whether your Fractional Ability Score > 50 
        statsets: [ //Modifiers are responsible for modifying more than one thing hence the array 
          {
            name: "Damage",
            feature: true, //Search for the attribute table's feature modifier by finding the one which is marked feature: true 
            values: [    // Because the modifier is fractional we have an array of arrays: [A, B] where A is if your Fractional is < 50 and B is if > 50. 
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
            values: [] //aint nobody
          },
          {
            name: "Carry",
            values: [] //got time
          },
          {
            name: "Drag",
            values: [] //fo dat 
          }
        ]
      }
    },
    {
      name: "Intelligence",
      id: 2,
      modifiers: {
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
            values: [-9,-8,-7,-6,-5,  -4,-3,-2,-1,0,  0,1,2,3,4,  5,6,7,8,9,  10,11,12,13,14],
            feature: true
          }
        ]
      }
    },
    {
      name: "Wisdom",
      id: 3,
      modifiers: {
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
            values: [-9,-8,-7,-6,-5,  -4,-3,-2,-1,0,  0,1,2,3,4,  5,6,7,8,9,  10,11,12,13,14],
            feature: true
          }
        ]
      }
    },
    {
      name: "Dexterity",
      id: 4,
      modifiers: {
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
            feature: true,
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
        fractional: false,
        statsets: [
          {
            name: "Hit Points",
            feature: true,
            values: [-9,-8,-7,-6,-5,  -4,-3,-2,-1,0,  0,1,2,3,4,  5,6,7,8,9,  10,11,12,13,14]
          }
        ]
      },
      id: 5
    },
    {
      name: "Looks",
      modifiers: {
        fractional: false,
        statsets: [
          { 
            name: "Fame",
            feature: true,
            values: [-9,-8,-7,-6,-5,  -4,-3,-2,-1,0,  0,1,2,3,4,  5,6,7,8,9,  10,11,12,13,14]
          },
          {
            name: "Reputation",
            feature: true,
            values: [-9,-8,-7,-6,-5,  -4,-3,-2,-1,0,  0,1,1,2,2,  3,4,5,6,7,  8,9,10,11,12]
          }
        ]
      },
      id: 6
    },
    {
      name: "Charisma",
      modifiers: {
        fractional: false,
        statsets: [
          {
            name: "Skill Learning",
            feature: true,
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
    },
    {
      name: "Reputation", 
      id: 8,
      modifiers: {
        fractional: false,
        statsets: [
          {
            name: "BP Bonus",
            feature: true,
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
  ];

export default AbilityDefs;
import React from "react";

function SheetAbilities(){
  return(
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
            <tr>
              <td>Strength</td>
              <td>0</td>
              <td>50</td>
              <td>+0 Damage</td>
            </tr>
            <tr>
              <td>Intelligence</td>
              <td>0</td>
              <td>50</td>
              <td>+0 Skill Learning</td>
            </tr>
            <tr>
              <td>Wisdom</td>
              <td>0</td>
              <td>50</td>
              <td>+0 Skill Learning</td>
            </tr>
            <tr>
              <td>Dexterity</td>
              <td>0</td>
              <td>50</td>
              <td>+0 To-Hit</td>
            </tr>
            <tr>
              <td>Constitution</td>
              <td>0</td>
              <td>50</td>
              <td>+0 Hit Points</td>
            </tr>
            <tr>
              <td>Looks</td>
              <td>0</td>
              <td>50</td>
              <td>+0 Rep/Fame</td>
            </tr>
            <tr>
              <td>Charisma</td>
              <td>0</td>
              <td>50</td>
              <td>+0 Skill Learning</td>
            </tr>
            <tr>
              <td>Reputation</td>
              <td>0</td>
              <td>50</td>
              <td>+0 Starting Fame</td>
            </tr>
            <tr>
              <td>Fame</td>
              <td>0</td>
              <td>50</td>
              <td>Fame Category</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SheetAbilities;

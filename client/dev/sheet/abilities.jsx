import React from "react";

function AbilityScore(props){
  return( 
    <tr>
      <td>
        {props.name}
      </td>
      <td>{props.score}
        <div className="btn-group-vertical btn-group-sm">
          <span className="btn btn-default" onClick={function() {props.onScoreChange(+1);}}>+</span>
          <span className="btn btn-default" onClick={function() {props.onScoreChange(-1);}}>-</span>
        </div>
      </td>
      <td>
        {props.fraction}
      </td>
      <td>
        {props.modifier}
      </td>
    </tr>
  )
}

AbilityScore.propTypes = {
  onScoreChange: React.PropTypes.func
};


export default AbilityScore;

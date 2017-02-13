import React from "react";

function AbilityScore(props){
  return( 
    <div>
      {props.name}
      
      {props.score}
      <div className="btn-group-vertical btn-group-sm">
        <span className="btn btn-default" onClick={function() {props.onScoreChange(+1);}}>+</span>
        <span className="btn btn-default" onClick={function() {props.onScoreChange(-1);}}>-</span>
      </div>
    </div>

  )
}

AbilityScore.propTypes = {
  onScoreChange: React.PropTypes.func
};


export default AbilityScore;

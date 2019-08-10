import React, {memo} from "react";
import "./ScoreDisplay.scss";

const ScoreDisplay = ({score}) => {
  return (
    <div className="score-display">
      {score !==0 ?
        <>
          <h1>Congratulations!</h1>
          <h2 className="score">Your award is: {score}</h2>
        </> : null}
      </div>
  );
};

export default memo(ScoreDisplay);
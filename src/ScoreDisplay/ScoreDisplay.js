import React, {memo} from "react";
import "./ScoreDisplay.scss";
import PropTypes from 'prop-types';

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

ScoreDisplay.propTypes = {
  score: PropTypes.number.isRequired
};

export default memo(ScoreDisplay);
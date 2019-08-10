import React from "react";
import Slot from "../Slot/Slot";
import './SlotsDisplay.scss';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';


const SlotsDisplay = ({rolling, slots}) => {
  return (
    <div className="slot-container">
      {slots.map(slot => (
        <Slot key={uuid()} symbol={slot} rolling={rolling} />
      ))}
    </div>
  );
};

SlotsDisplay.propTypes = {
  rolling: PropTypes.bool.isRequired,
  slots: PropTypes.array.isRequired
};

export default SlotsDisplay;


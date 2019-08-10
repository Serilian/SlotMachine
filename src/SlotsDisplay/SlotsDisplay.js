import React from "react";
import Slot from "../Slot/Slot";
import './SlotsDisplay.scss';
import uuid from 'uuid/v4';

const SlotsDisplay = ({rolling, slots}) => {
  return (
    <div className="slot-container">
      {slots.map(slot => (
        <Slot key={uuid()} symbol={slot} rolling={rolling} />
      ))}
    </div>
  );
};

export default SlotsDisplay;


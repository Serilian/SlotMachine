import React, { memo } from "react";
import "./Slot.scss";
import PropTypes from "prop-types";

const Slot = ({symbol})=> {
    return <div className={"symbol"}>{symbol}</div>;
};

Slot.propTypes = {
    symbol: PropTypes.string.isRequired,
};

export default memo(Slot);



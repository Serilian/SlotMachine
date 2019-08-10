import React, { memo } from "react";
import "./Slot.scss";

const Slot = ({symbol})=> {
    return <div className={"symbol"}>{symbol}</div>;
};
export default memo(Slot);

import React from "react";

function ActionButton({ handleAction, icon }) {
  return <button onClick={handleAction}><img src={icon} /></button>;
}

export default ActionButton;

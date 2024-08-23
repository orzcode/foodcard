import React from "react";
import updateIcon from '../assets/update.png'; 

function ActionButton({ handleAction }) {
  return <button onClick={handleAction}><img src={updateIcon} /></button>;
}

export default ActionButton;

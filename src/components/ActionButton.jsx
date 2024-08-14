import React from "react";

function ActionButton({ handleAction }) {
  return <button onClick={handleAction}>➕</button>;
}

export default ActionButton;

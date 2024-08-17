import React from "react";
import "../styles/PrintButton.css";

function PrintButton(props) {


  return (
    <div className="printButton">
      <button
        onClick={props.handlePrint}
        name="printButton-button"
        id="printButton-button"
        className="printButton-button"
      />
      <label className="printButton-label" htmlFor="printButton-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
          aria-hidden="true"
          focusable="false"
          role="img"
        >
          <path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z" />
        </svg>

        <span>Print</span>
      </label>
    </div>
  );
}

export default PrintButton;

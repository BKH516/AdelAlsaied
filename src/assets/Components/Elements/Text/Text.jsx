import React from "react";
import "./Text.css";

const Text = () => {
  return (
    <button className="x9_button" data-text="PORTFOLIO">
      <span className="x9_actual">&nbsp;PORTFOLIO&nbsp;</span>
      <span aria-hidden="true" className="x9_hover">
        &nbsp;PORTFOLIO&nbsp;
      </span>
    </button>
  );
};

export default Text;

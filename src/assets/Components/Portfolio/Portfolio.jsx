import React from "react";
import "./Portfolio.css";
import Text from "../Elements/Text/Text";
export default function Portfolio() {
  return (
    <div className="bckp">
      <div className="por">
        <div>
          <p className="Text-por">
            <Text />
          </p>
          <p className="Text-d">
            <span id="number-1" className="wave">
              2
            </span>
            <span id="number-1" className="wave">
              0
            </span>
            <span id="number-2" className="wave delay">
              2
            </span>
            <span id="number-2" className="wave delay">
              5
            </span>
          </p>
        </div>
        <div className="img-logo">
          <img src="/Image/logovector2.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}

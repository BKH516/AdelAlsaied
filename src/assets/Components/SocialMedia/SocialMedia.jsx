import React from "react";
import "./SocialMedia.css";
import Social from "../../Components/Elements/Social/Social";
import Etext from "./../../Components/Elements/Etext/Etext";
export default function SocialMedia() {
  return (
    <div className="bcks">
      <div className="Text-s">
        <Etext />
      </div>
      <div className="bimg">
        <Social />
      </div>
    </div>
  );
}

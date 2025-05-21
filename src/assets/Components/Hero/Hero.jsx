import Buttonn from "../Elements/Button/Button";
import "./Hero.css";
import Images from "../Elements/ImageE/ImageE"
export default function Hero() {
  return (
    <div className="Part">
      <div className="Partone">
        <h1>GRAPHICS DESIGNER</h1>
        <p>
          Hello, I am Adel Alsaied. I am a professional graphic designer with 4
          years of expertise in the industry. My services include creating and
          presenting creative.
        </p>
        <div>
          <Buttonn />
        </div>
      </div>
      <div className="image">
        <Images />
      </div>
    </div>
  );
}

import svg from "./Mockup (1).svg";
import "./playstore.css";

function Playstores() {
  return (
    <div className="playstore-wrapper">
      <img src={svg} className="phone" alt="Phone mockup" />
      {/* <div className="line"></div> */}
    </div>
  );
}

export default Playstores;

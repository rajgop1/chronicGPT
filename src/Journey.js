import "./Journey.css";
import Nav from "./Nav";
import Box4 from "./box4";
import SS from "./SS";
import Box7 from "./Box7";
import Staticjourney from "./staticjourney";
import Footer from "./footer";

function Journey(){
    return (
        <div className="journey-container">
           <Nav starOn="journey" />
           <Staticjourney/>
           <Footer/>
        </div>
    );
}
export default Journey;
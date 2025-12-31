import "./Trust.css";
import Try from "./try";
import Box3 from "./Box3";
import Nav from "./Nav";
import Statichiw from "./statichiw";
import Statichiw1 from "./statichiw1";
import Footer from "./footer";
import BlankBox from "./Blank";
import Roundbox from "./Roundbox";

function Trust(){
    
    return (
        <div className="trust-container">
        <Nav starOn="trust" />
        {/* <Roundbox/> */}
         <Statichiw/>
         <Statichiw1/>
         {/* <BlankBox/> */}
         <Footer/>
        </div>
    );
}
export default Trust;
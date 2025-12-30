import "./Trust.css";
import Try from "./try";
import Box3 from "./Box3";
import Nav from "./Nav";
import Statichiw from "./statichiw";
import Footer from "./footer";
import BlankBox from "./Blank";

function Trust(){
    
    return (
        <div className="trust-container">
        <Nav starOn="trust" />
         <Statichiw/>
         {/* <BlankBox/> */}
         <Footer/>
        </div>
    );
}
export default Trust;
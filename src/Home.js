import "./Home.css";
import Navigation from "./Navigation";
import Hiw from "./hiw";
import Box10 from "./box10";
import EverydayOutcomes from "./everydayoutcomes";
import Footer from "./footer";
import Statichome from "./statichome";
import LoadingScreen from "./LoadingScreen";
import { useState } from 'react';
import Playstores from "./playstore";
import FirstNav from "./FirstNav";
import Header from "./Header";
import Hero from "./Doct";
import Absoluteheader from "./absoluteheader";
import Statichiw from "./statichiw";
import Roundbox from "./Roundbox";
import Roundbox1 from "./Roundbox1";
import Roundbox2 from "./Roundbox2";


function Home() {
  // const [isLoading, setIsLoading] = useState(true);
  //  if (isLoading) {
  //   return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  // }
  return (
    
    <div className="home-container">
        <Header/>
        {/* <Hero/> */}
        {/* <Absoluteheader/> */}
        <FirstNav />
        <Navigation />
        <Roundbox/>
        <Roundbox1/>
        <Roundbox2/>
      {/* <Box10/> */}
      {/* <Playstores/> */}
      {/* <Footer/> */}
    </div>

  );
}

export default Home;

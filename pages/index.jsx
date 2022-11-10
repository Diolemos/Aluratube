import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import Header from "../src/Header";
import Banner from "../src/components/Banner";

function HomePage(){
    const homepageStyles = {backgroundColor : "#fff", color: "black"}
    // console.log(config.playlists)
    return(
    <>
    <CSSReset/>
    <div style={homepageStyles}>
     <Menu/> 
    <Banner url={config.banner}/>
        
    <Header></Header>
    <Timeline playLists={config.playlists} favoriteList={config.favorites}></Timeline>
    </div> </>)
    
    
}

export default HomePage
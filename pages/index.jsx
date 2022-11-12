import config from "../config.json";
import Menu from "../src/components/Menu/";
import Timeline from "../src/components/Timeline";
import Header from "../src/Header";
import Banner from "../src/components/Banner";
import React from "react";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";




function HomePage(){
    const context = React.useContext(ColorModeContext);
    const initialBanner = context.mode=="light"?"bannerLight":"bannerDark" //This variable will recieve a string corresponding to the key of the banner on the config file, depending on the mode derived from the useContext.  
    const [bannerUrl, setBannertUrl] = React.useState(config[initialBanner])
    // console.log("on the index contex", context)
    const [searchInput, setSearchInput] = React.useState("")
    
   

    
    
    
    return(
    <>
    
    <div >
     <Menu searchInput={searchInput} setSearchInput={setSearchInput}
     url={bannerUrl} setUrl={setBannertUrl}/> 
    <Banner url={bannerUrl}/>
        
    <Header></Header>
    <Timeline playLists={config.playlists} favoriteList={config.favorites} searchValue={searchInput} ></Timeline>
    </div> </>)
    
    
}

export default HomePage
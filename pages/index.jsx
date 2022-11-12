import config from "../config.json";
import Menu from "../src/components/Menu/";
import Timeline from "../src/components/Timeline";
import Header from "../src/Header";
import Banner from "../src/components/Banner";
import React from "react";

function HomePage(){

    const [searchInput, setSearchInput] = React.useState("")

    
    // console.log(config.playlists)
    return(
    <>
    
    <div >
     <Menu searchInput={searchInput} setSearchInput={setSearchInput}/> 
    <Banner url={config.banner}/>
        
    <Header></Header>
    <Timeline playLists={config.playlists} favoriteList={config.favorites} searchValue={searchInput} ></Timeline>
    </div> </>)
    
    
}

export default HomePage
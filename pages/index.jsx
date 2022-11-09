import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/Menu";
import StyledTimeline from "../src/components/Timeline";
function HomePage(){
    const homepageStyles = {backgroundColor : "#fff", color: "black"}
    // console.log(config.playlists)
    return(
    <>
    <CSSReset/>
    <div style={homepageStyles}>
        <Menu/>
        <Header></Header>
        <Timeline playLists={config.playlists}></Timeline>
    </div> </>)
    
    
}





const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius:50%;
    }

    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`; 




const Header = ()=>{
    return( <StyledHeader>

        {/* <img src="" alt="Banner" /> */}

        <section className="user-info">
            <img src={`https://github.com/${config.github}.png`} alt="profile-sm" />
           
           <div><h2>{config.name}</h2> 
            <p>{config.job}</p></div>
           
        </section>

      
    </StyledHeader>)
}

const Timeline = ({playLists})=>{
    const playlistNames = Object.keys(playLists)
    

    return (<StyledTimeline>
        {playlistNames.map((playlistName)=>{
            const videos = playLists[playlistName]
            console.log(videos)
            return(
                <section>
                    <h2>{playlistName}</h2>
                    <div>
                   { videos.map((video)=>{
                return(
                    <a href={video.url}>
                        <img src={video.thumb}/>
                        <span>
                            {video.title}
                        </span>

                    </a>
                )
            })}
                    </div>
                </section>
            )
             })}
    </StyledTimeline>)
}

export default HomePage
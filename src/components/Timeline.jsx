import styled from "styled-components";


 const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  .favoriteImage{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;


const Timeline = ({playLists,favoriteList})=>{
    const playlistNames = Object.keys(playLists)
    // const favoritesNames = Object.keys(favoriteList)

    return (<StyledTimeline>
        {playlistNames.map((playlistName)=>{
            const videos = playLists[playlistName]
            
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
           <section>
            <h2>Favorites</h2>
            <div className="favorites-container">
                {
                    favoriteList.map((favorite)=>{
                        return(
                            <a href={favorite.url} className="favoriteContainer">
                                <img src={favorite.img} className="favoriteImage" alt="favorite channel profile image" />
                                <p className="favoriteName">{favorite.name}</p>
                            </a>
                        )
                    })
                }
            </div>
           </section>
    </StyledTimeline>)
}

export default Timeline
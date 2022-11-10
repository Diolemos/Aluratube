import React from "react";
import styled from "styled-components";


const StyledDiv = styled.div`
   img{
    width: 100vw;
    height:300px;
    object-fit: cover;
    object-position: 0 -350px; /* The specif image I chose looks better this way */
    margin-top: 56px; /* menu  */
   }


`


const Banner = ({url})=>{
  

    return(
        <StyledDiv>
          <img src={url} alt="Personalized Banner" />
        </StyledDiv>
    )

}





export default Banner
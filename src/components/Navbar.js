import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPlaylist } from "./../services/APIsong";

const Container = styled.div`
  width: 15%;
  height: 100vh;
  background-color: #636363;
  margin: 0;
  padding: 0;
`;

<<<<<<< HEAD

const Wrapper = styled.div``;
=======
const Wrapper = styled.div`
 margin-top:2rem;
 `;
>>>>>>> c06df6d63bc618871eafa9f17ef5fd1ef53616b4

const ActionContainer = styled.div``;

const Action = styled.div`
a{
  margin-left:2rem;
  text-decoration:none;
  color:white;
  font-size:1.5rem;
}

`;

function NavBar() {
  const [play ,setPlay ] = useState([])

  useEffect(() => {
    getPlaylist(1).then(response => setPlay(response))
  } ,[])
  console.log(play)

  return (
    <Container>
      <Wrapper>
        <ActionContainer>
          <Action>
            <Link to="/Newplaylist">+ New Playlist</Link>          
          </Action>
             {play.map( (item) => (<p>{item.name}</p>))}  
        </ActionContainer>
      </Wrapper>
    </Container>
  );
}
export default NavBar;
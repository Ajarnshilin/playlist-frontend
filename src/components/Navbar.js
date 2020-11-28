import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPlaylist } from "./../services/APIsong";

const Container = styled.div`
  width: 15%;
  height: 100vh;
  background-color: gray;
  margin: 0;
  padding: 0;
`;


const Wrapper = styled.div``;

const ActionContainer = styled.div``;

const Action = styled.div``;

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
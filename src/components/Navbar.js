import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 15%;
  height: 100vh;
  background-color: #636363;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.div`
 margin-top:2rem;
 `;

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
  return (
    <Container>
      <Wrapper>
        <ActionContainer>
          <Action>
            <Link to="/Newplaylist">+ New Playlist</Link>
          </Action>
        </ActionContainer>
      </Wrapper>
    </Container>
  );
}
export default NavBar;
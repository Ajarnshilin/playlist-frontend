import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
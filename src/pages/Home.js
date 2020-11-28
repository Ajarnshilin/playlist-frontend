import React from "react";
import styled from "styled-components";
import NavBar from "../components/Navbar";
import Content from "../components/Content";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: blue;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

function Home() {
  return (
    <Container>
      <NavBar />
      <Content/>
    </Container>
  );
}
export default Home;

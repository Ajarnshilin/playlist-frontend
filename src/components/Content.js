import React, { useEffect, useState } from "react";
import styled from "styled-components";
import songJson from "../songs.json"

const Container = styled.div`
  width: 85%;
  height: 100vh;
  background-color: greenyellow;
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  h1 {
    margin-top: 1.6rem;
    margin-right: 9rem;
  }
`;

const Pic = styled.div`
  width: 15vw;
  height: 25vh;
  background-color: blue;

  margin-top: 2rem;
  margin-left: 2rem;
  span {
    font-size: 10rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Text = styled.div`
  margin-left: 2rem;

  h1 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }
  span {
    font-size: 2rem;
    margin-left: 15%;
  }
`;
const Space = styled.div`
  margin-bottom: 2rem;
`
const SongContainer = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: row;
`
const SongTitleContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const SongArtistContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
`
const SongDurationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

function Content() {
  return (
    <Container>
      <Wrapper>
        <Pic>
          <span>M</span>
        </Pic>
        <Text>
          <h1>MY PLAYLIST</h1>
          <span>CREART BY asdjalsdjldsjf: 2 song ,7 min 44 sec</span>
          <Space/>
            {songJson.map((item) => (
              <SongContainer>
                <SongTitleContainer>{item.title}</SongTitleContainer>
                <SongArtistContainer>{item.artist}</SongArtistContainer>
                <SongDurationContainer>{item.duration}</SongDurationContainer>
              </SongContainer>
            ))}
        </Text>
      </Wrapper>
    </Container>
  );
}
export default Content;

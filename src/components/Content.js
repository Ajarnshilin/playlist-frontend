import React, { useEffect, useState } from "react";
import styled from "styled-components";
import songJson from "../songs.json"

const Container = styled.div`
  width: 85%;
  height: 100vh;
  background-color: #ffff;
  margin: 0;
  padding: 0;


`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;


`;

const Pic = styled.div`
  width: 15vw;
  height: 25vh;
  background-color: #f5ce7a;
  border:5px solid black;
  margin-left: 2rem;
  margin-top:2rem;
  span {
    margin-top:0.5rem;
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
    font-size:3rem;
    font-weight:600;
    margin-top: 1.6rem;
    margin-right: 9rem;
    margin-bottom:1rem;
  }
  span {
    margin-top:2rem;
    margin-left: 0;
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

const Remove = styled.button`
  height: 45px;
  width: 110px;
  background-color: #deaead;
  margin-top: 30px;
  border: 0;
  color: black;
  font-size: 20px;
  outline: none;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    background-color: #bd8584;
  }
`;

const Add = styled.button`
  height: 45px;
  width: 110px;
  background-color: #a1bdc7;
  margin-top: 30px;
  border: 0;
  color: black;
  font-size: 20px;
  outline: none;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    background-color: #799eab;
  }
`;

const Refresh = styled.button`
  height: 45px;
  width: 110px;
  background-color: #ebc3a7;
  margin-top: 30px;
  border: 0;
  color: black;
  font-size: 20px;
  outline: none;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    background-color: #c99c7d;
  }
`;


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

      <Remove type="submit">Remove</Remove>
      <Add type="submit">Remove</Add>

    </Container>
  );
}
export default Content;

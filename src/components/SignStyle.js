import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
// nav
export const RightContainer = styled.div`
  background-color: #030720;
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  font-size: 8rem;
  width: 10rem;
  height: 10rem;
  background-color: greenyellow;
`;

// myplay
export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f3f58;
  width: 50vw;
  height: 100vh;
`;
export const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
  color: #ffffff;
`;
export const HeadSign = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 50px;
  color: #ffffff;
  margin: 2rem;
`;

export const Input = styled.input`
  margin: 1rem;
  width: 25rem;
  height: 2.5rem;
  border-radius: 25px;
  border: 0;
  border-style: none;
  padding-left: 20px;
`;

export const ButtonSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 1rem;
  width: 26.4rem;
  height: 2.5rem;
  font-size: 20px;
  background-color: #ae3a3a;
  transition: 0.3s;
  &:hover {
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #e22929;
    cursor: pointer;
  }
`;
export const Register = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  transition: 0.3s;
  &:hover {
    color: greenyellow;
    cursor: pointer;
  }
`;
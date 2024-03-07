import styled from "styled-components";
import homeBGImg from "../../assets/bg-homepage.jpeg";

export const HomePageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${homeBGImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HomePageText = styled.h1`
  font-family: "Manrope", sans-serif;
  font-size: 28px;
  text-align: center;
  color: white;
  padding: 20px;
`;

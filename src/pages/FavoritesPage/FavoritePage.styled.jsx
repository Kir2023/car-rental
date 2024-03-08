import styled from "styled-components";

export const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  background-image: ${(props) => props.$url || "none"};
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  margin: 0 auto;
  padding: 0px 30px;
  margin-bottom: ${(props) => props.$bottom || "20px"};
  margin-top: ${(props) => props.$top || "0px"};

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0px 50px;
    margin-bottom: ${(props) => props.$bottom || "30px"};
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0px 128px;
    margin-bottom: ${(props) => props.$bottom || "50px"};
  }
`;

export const EmptyPage = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  font-weight: 600;
  font-size: 22px;
  color: var(--color-text-main);
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
`;
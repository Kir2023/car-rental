import styled from "styled-components";

export const Section = styled.section`
  margin: 0 auto;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  margin: 0 auto;
  padding: 0px 128px;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const EmptyPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  margin: 0 auto;
`;

export const EmptyPageText = styled.p`
  color: #121417;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`;

export const EmptyPageImg = styled.img`
  margin-bottom: 40px;
`;

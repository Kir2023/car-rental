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
`;

export const EmptyPage = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  font-weight: 600;
  font-size: 40px;
  color: #121417;
  margin: 0 auto;
`;

export const CarsListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-bottom: 100px;
`;

export const LoadMore = styled.p`
  zcolor: #3470ff;
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  margin: 0 auto;
  padding: 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;

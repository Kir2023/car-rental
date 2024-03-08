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
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const CatalogListWrapper = styled.div`
  margin-top: 150px;
  width: 1184px;
  margin-left: auto;
  margin-right: auto;
`;

export const CatalogList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 29px;
  column-gap: 50px;
  justify-content: center;
`;

export const LoadMore = styled.a`

  margin-bottom: 100px;
  font-weight: 500;
  font-size: 16px;
  outline: none;
  border: darkblue;
  background-color: darkblue;
  color: #3470ff;
  line-height: calc(16 / 24);
  text-decoration: underline;
  cursor: pointer;
}

.btn:hover,
.btn:focus {
  color: #0b44cd;
  scale: 1.1;
`;

import styled from "styled-components";

export const CarItemStyle = styled.li`
  display: flex;
  width: 100%;
  width: 274px;
  height: 426px;
  flex-basis: calc((100% - 3 * 29px) / 4);
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 28px;
`;

export const CarCard = styled.div`
  display: flex;
  width: 100%;
  height: 354px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
`;

export const ImgWrap = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  right: -65px;
  height: 268px;
`;

export const Heart = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  fill: ${(props) => props.fill || "none"};
  stroke: ${(props) => props.stroke || "var(--color-text-button-and-back)"};
  display: inline-block;
  width: 18px;
  height: 18px;
`;

export const DescriptionWrap = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  gap: 8px;
`;

export const TitleWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
`;

export const TitleH3 = styled.h3`
  font-size: inherit;
  font-weight: inherit;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const DescriptListWrap = styled.div`
  display: flex;
  height: auto;
  gap: 4px;
  flex-direction: column;
`;

export const DescriptList = styled.ul`
  display: inline-flex;
  height: 28px;
  font-size: 12px;
  gap: 6px;
  color: rgba(18, 20, 23, 0.5);
  text-align: center;
`;

export const DescriptItem = styled.li`
  display: flex;
  flex-shrink: 1;

  &:not(:first-child) {
    &:before {
      display: block;
      height: 16px;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      margin-right: 6px;
      content: "";
    }
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 12px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

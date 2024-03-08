import styled from "styled-components";

export const BackdropModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  width: 541px;
  height: 752;
`;

export const CloseBtnWrapper = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  stroke: #121417;
  top: ${(props) => props.$top || "16px"};
  right: ${(props) => props.$right || "16px"};
  cursor: pointer;
`;

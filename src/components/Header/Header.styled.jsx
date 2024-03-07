import styled from "styled-components";
import { NavLink } from "react-router-dom/dist";

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 20px 30px 20px 30px;
  color: white;
  position: fixed;
  top: 0;
  z-index: 1000;
  font-size: 24px;
  font-weight: 600;
`;

export const NavList = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

export const NavItem = styled(NavLink)`
 &:hover,
  &:focus {
    color: red;
  }

  &.active {
    color: green;
`;

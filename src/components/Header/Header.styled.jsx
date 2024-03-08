import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  font-size: 24px;
  background-color: #c46f07dc;
  display: flex;
  justify-content: center;
`;

export const NavWrapper = styled.nav`
  display: flex;
  gap: 150px;
  text-decoration: none;
  color: black;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;

  &.active {
    background-color: black;
    color: white;
  }
`;

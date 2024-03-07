import { HeaderWrapper, NavItem, NavList } from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>Catalog</NavItem>
        <NavItem>Favorite</NavItem>
      </NavList>
    </HeaderWrapper>
  );
};

export default Header;

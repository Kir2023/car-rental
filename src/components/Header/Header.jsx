import { HeaderWrapper, NavWrapper, StyledNavLink } from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;

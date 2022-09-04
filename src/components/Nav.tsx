import { Link } from "react-router-dom";
import styled from "styled-components";
import CommonWrapper from "../common/commonWrapper";

import LogoImg from "../imgs/logo.svg";

const Header = styled.header`
  display: flex;
  justify-content: center;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  width: 80px;
  height: 80px;
  margin-right: 80px;
  background-image: url(${LogoImg});
`;

const NavList = styled.ul`
  display: flex;
  gap: 40px;
`;

const NavItem = styled(Link)`
  font-size: 20px;
`;

const Nav = () => {
  return (
    <Header>
      <CommonWrapper>
        <StyledNav>
          <Logo to="/" />
          <NavList>
            <NavItem to="/coin">Markets</NavItem>
            <NavItem to="/article">Article</NavItem>
            <NavItem to="/history">History</NavItem>
            <NavItem to="/more">More</NavItem>
          </NavList>
        </StyledNav>
      </CommonWrapper>
    </Header>
  );
};

export default Nav;

import { isDarkAtom } from "../atom";

import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import styled from "styled-components";

import CommonWrapper from "../common/commonWrapper";
import Logo from "./Logo";

const Header = styled.header`
  display: flex;
  justify-content: center;
`;

const NavWrapper = styled(CommonWrapper)`
  display: flex;
  justify-content: space-between;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  width: 80px;
  height: 80px;
  margin-right: 80px;
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled(Link)`
  font-size: 16px;
`;

const ThemeModeBtn = styled.button`
  width: 40px;
  color: ${(props) => props.theme.nameColor};
`;

const Nav = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  const handleToggleBtnClick = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <Header>
      <NavWrapper>
        <StyledNav>
          <LogoLink to="/">
            <Logo strokeColor={isDark ? "white" : "black"} />
          </LogoLink>
          <NavList>
            <NavItem to="/coin/bit-coin">Markets</NavItem>
          </NavList>
        </StyledNav>
        <ThemeModeBtn onClick={handleToggleBtnClick}> 토글버튼</ThemeModeBtn>
      </NavWrapper>
    </Header>
  );
};

export default Nav;

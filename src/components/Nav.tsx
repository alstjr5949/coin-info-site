import { isDarkAtom } from "../atom";

import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import styled from "styled-components";

import CommonWrapper from "../common/commonWrapper";
import Logo from "./Logo";
import { useState } from "react";

const Header = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

const NavWrapper = styled(CommonWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const ThemeModeBtn = styled.button<{ buttonLeftPosition: string }>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.nameColor};
  width: 40px;
  height: 20px;
  border-radius: 10px;
  color: ${(props) => props.theme.nameColor};
  position: relative;
  &::before {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.boardColor};
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.buttonLeftPosition};
    margin: auto 0;
    transition: left 0.5s linear;
  }
`;

const Nav = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const [buttonLeftPosition, setButtonLeftPosition] = useState<string>("2px");

  const handleToggleBtnClick = () => {
    setIsDark((prev) => !prev);
    if (buttonLeftPosition === "2px") {
      setButtonLeftPosition("20px");
    }
    if (buttonLeftPosition === "20px") {
      setButtonLeftPosition("2px");
    }
  };
  return (
    <Header>
      <NavWrapper>
        <StyledNav>
          <LogoLink to="/">
            <Logo strokeColor={isDark ? "white" : "black"} />
          </LogoLink>
          <NavList>
            <NavItem to="/coin/KRW-BTC">Markets</NavItem>
          </NavList>
        </StyledNav>
        <ThemeModeBtn
          onClick={handleToggleBtnClick}
          buttonLeftPosition={buttonLeftPosition}
        ></ThemeModeBtn>
      </NavWrapper>
    </Header>
  );
};

export default Nav;

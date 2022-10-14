import styled from "styled-components";
import CommonWrapper from "../common/commonWrapper";

const StyledFooter = styled.footer`
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme.boardColor};
  color: ${(props) => props.theme.nameColor};
`;

const LinkSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 54px 0 42px;
  border-bottom: 1px solid #c4c4c4;
`;

const CorpLink = styled.a`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
`;

const InfoSection = styled.section`
  padding: 36px 0 38px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
`;

const CorpInfo = styled.dl`
  display: flex;
  align-items: center;
  dt {
    margin-right: 0.5rem;
  }
  dd {
    font-weight: 400;
    display: flex;
    align-items: center;
    &:first-of-type {
      font-weight: 700;
    }
    &::after {
      content: " ";
      width: 0.1rem;
      height: 1.6rem;
      background-color: #4f4f4f;
      display: block;
      margin: 0 1rem;
    }
    &:last-of-type::after {
      display: none;
    }
  }
`;

const Copyright = styled.small``;

const Footer = () => {
  return (
    <StyledFooter>
      <CommonWrapper>
        <LinkSection>
          <CorpLink href="#">CatCoin</CorpLink>
        </LinkSection>
        <InfoSection>
          <CorpInfo>
            <dt className="ir">회사명</dt>
            <dd>(주) 캣코인</dd>
            <dt>대표</dt>
            <dd>Cheeze Cat</dd>
            <dt>사업자 번호</dt>
            <dd>000-0000-0000</dd>
            <dt className="ir">업종</dt>
            <dd>블록체인 코인 정보 제공업</dd>
            <dt>주소</dt>
            <dd>서울특별시</dd>
          </CorpInfo>
          <Copyright>©CatCoin</Copyright>
        </InfoSection>
      </CommonWrapper>
    </StyledFooter>
  );
};

export default Footer;

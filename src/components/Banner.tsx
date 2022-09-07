import { Link } from "react-router-dom";
import styled from "styled-components";
import CommonWrapper from "../common/commonWrapper";
import EmphasizeText from "../common/emphasize";

import BannerImg from "../imgs/banner.jpg";

const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  position: relative;
  background-image: url(${BannerImg});
  z-index: 0;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const BannerTextBox = styled.div`
  z-index: 10;
`;

const WebTitle = styled.h1``;

const WebIntro = styled.p`
  font-size: 40px;
  line-height: 1.5;
  font-weight: 700;
  color: #eee;
`;

const CoinInfoLink = styled(Link)`
  display: block;
  text-align: center;
  width: 120px;
  height: 50px;
  color: #eee;
  background-color: ${(props) => props.theme.accentColor};
  margin-top: 20px;
  font-size: 14px;
  line-height: 50px;
`;

const Banner = () => {
  return (
    <StyledBanner>
      <CommonWrapper>
        <BannerTextBox>
          <WebTitle className="ir">코인정보 제공사이트 캣코인</WebTitle>
          <WebIntro>다양한 코인정보들</WebIntro>
          <WebIntro>
            이제 <EmphasizeText>캣코인</EmphasizeText>에서 확인하세요.
          </WebIntro>
          <CoinInfoLink to="coin/bit-coin">코인 둘러보기</CoinInfoLink>
        </BannerTextBox>
      </CommonWrapper>
    </StyledBanner>
  );
};

export default Banner;

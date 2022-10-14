import { useQuery } from "react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllCoin } from "../api";

import styled, { keyframes } from "styled-components";

import CommonWrapper from "../common/commonWrapper";
import EmphasizeText from "../common/emphasize";
import ArrowIcon from "./ArrowIcon";

const ArrowAnimation = keyframes`
  0% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const CoinWrapper = styled(CommonWrapper)`
  width: 100%;
  overflow: hidden;
  margin: 50px auto;
`;

const CoinBoardTitle = styled.h2``;

const CoinBoardText = styled.p`
  font-size: 25px;
  font-weight: 700;
`;

const CoinBoardBox = styled.ul<{ boardHeight: string }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  height: ${(props) => props.boardHeight};
  padding: 5px 5px;
  overflow-y: hidden;
  margin-top: 30px;
`;

const Coin = styled.li`
  font-size: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s linear;
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
    color: #eee;
  }
`;

const CoinImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const MoreBtn = styled.button`
  margin-top: 30px;
  font-size: 14px;
  color: inherit;
  svg {
    animation: ${ArrowAnimation} 1s infinite linear alternate;
  }
`;

interface ICoin {
  market: string;
  korean_name: string;
  english_name: string;
}

const CoinBoard = () => {
  const [boardHeight, setBoardHeight] = useState<number>(260);
  const [boardFlag, setBoardFlag] = useState<boolean>(true);

  const handleMoreBtnClick = () => {
    if (boardHeight < 2130) {
      setBoardHeight((prev) => prev + 270);
    } else if (boardHeight > 2130 && boardHeight < 2420) {
      setBoardFlag(false);
      setBoardHeight((prev) => prev + 270);
    } else {
      setBoardHeight(260);
      setBoardFlag(true);
    }
  };

  const { isLoading, data } = useQuery<ICoin[]>("allCoins", getAllCoin);

  const krwCoinData = data?.filter((v) => v.market.includes("KRW"));

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <CoinWrapper>
          <CommonWrapper>
            <CoinBoardTitle className="ir">
              갖고 있는 코인 정보 리스트
            </CoinBoardTitle>
            <CoinBoardText>
              <EmphasizeText>캣코인</EmphasizeText>에선 이런{" "}
              <EmphasizeText>코인</EmphasizeText>들의 정보를 다뤄요.
            </CoinBoardText>
          </CommonWrapper>
          <CommonWrapper>
            <CoinBoardBox boardHeight={`${boardHeight}px`}>
              {krwCoinData?.map((coin) => (
                <Coin key={coin.market}>
                  <Link to={`/coin/${coin.market}`}>
                    <CoinImg
                      src={`https://coinicons-api.vercel.app/api/icon/${coin.market
                        .slice(4, 7)
                        .toLowerCase()}`}
                      alt={coin.korean_name}
                    />
                    {coin.korean_name}
                  </Link>
                </Coin>
              ))}
            </CoinBoardBox>
          </CommonWrapper>
          <MoreBtn type="button" onClick={handleMoreBtnClick}>
            <p>{boardFlag ? "더보기" : "줄이기"}</p>
            <ArrowIcon boardFlag={boardFlag} />
          </MoreBtn>
        </CoinWrapper>
      )}
    </>
  );
};

export default CoinBoard;

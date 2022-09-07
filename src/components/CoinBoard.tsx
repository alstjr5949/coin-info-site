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

const CoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const CoinBoardTitle = styled.h2``;

const CoinBoardText = styled.p`
  width: 1024px;
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
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s linear;
  a {
    display: flex;
    align-items: center;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  font-size: 14px;
  width: 50px;
  color: inherit;
  svg {
    animation: ${ArrowAnimation} 1s infinite linear alternate;
  }
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
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

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <CoinWrapper>
          <CoinBoardTitle className="ir">
            갖고 있는 코인 정보 리스트
          </CoinBoardTitle>
          <CoinBoardText>
            <EmphasizeText>캣코인</EmphasizeText>에선 이런{" "}
            <EmphasizeText>코인</EmphasizeText>들의 정보를 다뤄요.
          </CoinBoardText>
          <CommonWrapper>
            <CoinBoardBox boardHeight={`${boardHeight}px`}>
              {data?.map((coin) => (
                <Coin key={coin.id}>
                  <Link to={`/coin/${coin.id}`}>
                    <CoinImg
                      src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                    />
                    {coin.name}
                  </Link>
                </Coin>
              ))}
            </CoinBoardBox>
          </CommonWrapper>
          <MoreBtn type="button" onClick={handleMoreBtnClick}>
            {boardFlag ? "더보기" : "줄이기"}
            <ArrowIcon boardFlag={boardFlag} />
          </MoreBtn>
        </CoinWrapper>
      )}
    </>
  );
};

export default CoinBoard;

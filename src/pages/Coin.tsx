import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";

import { getAllCoin, getCoinHistory } from "../api";

import styled from "styled-components";

import ApexCharts from "react-apexcharts";
import CommonWrapper from "../common/commonWrapper";
import CoinTicker from "../components/CoinTicker";

const CoinWrapper = styled(CommonWrapper)`
  display: flex;
  gap: 10px;
  margin: 20px auto;
`;

const ChartWrapper = styled.div`
  background-color: ${(props) => props.theme.boardColor};
`;

const CoinImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const CoinName = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 10px 20px;
  border-bottom: 1px solid #b3b3b3;
`;

const CoinListBoard = styled.ul`
  width: 100%;
  height: 615.84px;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.boardColor};
`;

const CoinListItem = styled.li`
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 18px 10px;
  }
`;

const CoinListItemImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

interface IHistoric {
  market: string;
  candle_date_time_utc: string;
  candle_date_time_kst: string;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  timestamp: number;
  candle_acc_trade_price: number;
  candle_acc_trade_volume: number;
  first_day_of_period: string;
}

interface ICoin {
  market: string;
  korean_name: string;
  english_name: string;
}

const Coin = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const { coinId } = useParams();

  const { isLoading: coinInfoLoading, data: coinInfoData } = useQuery<ICoin[]>(
    "allCoins",
    getAllCoin
  );

  const { isLoading: ohlcvLoading, data: ohlcvData } = useQuery<IHistoric[]>(
    ["ohlcv", coinId],
    () => getCoinHistory(coinId ? coinId : "")
  );

  const coinInfoDataById = coinInfoData?.filter((v) =>
    v.market.includes(`${coinId}`)
  );
  const krwCoinData = coinInfoData?.filter((v) => v.market.includes("KRW"));

  return (
    <>
      {ohlcvLoading || coinInfoLoading ? (
        "Loading..."
      ) : (
        <CoinWrapper>
          <ChartWrapper>
            <CoinName>
              <CoinImg
                src={`https://coinicons-api.vercel.app/api/icon/${
                  coinId ? coinId.slice(4, 7).toLowerCase() : ""
                }`}
                alt={coinId}
              />
              {coinInfoDataById ? coinInfoDataById[0].korean_name : ""}
            </CoinName>
            <CoinTicker />
            <ApexCharts
              width="750px"
              type="candlestick"
              series={[
                {
                  data:
                    ohlcvData?.map((price) => {
                      return {
                        x: price.candle_date_time_utc,
                        y: [
                          price.opening_price,
                          price.high_price,
                          price.low_price,
                          price.trade_price,
                        ],
                      };
                    }) ?? [],
                },
              ]}
              options={{
                theme: {
                  mode: isDark ? "dark" : "light",
                },
                chart: {
                  toolbar: {
                    show: false,
                  },
                  background: "transparent",
                },
                plotOptions: {
                  candlestick: {
                    colors: {
                      upward: "#D25044",
                      downward: "#1261C4",
                    },
                  },
                },
                xaxis: {
                  type: "datetime",
                },
                yaxis: {
                  opposite: true,
                },
              }}
            />
          </ChartWrapper>
          <CoinListBoard>
            {krwCoinData
              ? krwCoinData.map((coin) => (
                  <CoinListItem key={coin.market}>
                    <Link to={`/coin/${coin.market}`}>
                      <CoinListItemImg
                        src={`https://coinicons-api.vercel.app/api/icon/${coin.market
                          .slice(4, 7)
                          .toLowerCase()}`}
                        alt={coin.korean_name}
                      />
                      <span>{coin.korean_name}</span>
                      <span>{coin.market}</span>
                    </Link>
                  </CoinListItem>
                ))
              : "loading"}
          </CoinListBoard>
        </CoinWrapper>
      )}
    </>
  );
};

export default Coin;

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getCoinTickerById } from "../api";

const CoinTickerPrice = styled.p`
  font-size: 24px;
  padding: 15px 20px;
  span {
    font-size: 12px;
    margin-left: 5px;
  }
`;

const CoinChange = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 0px 20px 15px;
  border-bottom: 1px solid #b3b3b3;
  font-size: 14px;
`;

const CoinChangeText = styled.span`
  font-size: 12px;
  color: #b3b3b3;
`;

const CoinChangeRate = styled.span``;

const CoinChangePrice = styled.span``;

interface ICoinTicker {
  market: string;
  trade_date: string;
  trade_time: string;
  trade_date_kst: string;
  trade_time_kst: string;
  trade_timestamp: number;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  prev_closing_price: number;
  change: string;
  change_price: number;
  change_rate: number;
  signed_change_price: number;
  signed_change_rate: number;
  trade_volume: number;
  acc_trade_price: number;
  acc_trade_price_24h: number;
  acc_trade_volume: number;
  acc_trade_volume_24h: number;
  highest_52_week_price: number;
  highest_52_week_date: string;
  lowest_52_week_price: number;
  lowest_52_week_date: string;
  timestamp: number;
}

const CoinTicker = () => {
  const { coinId } = useParams();

  const { isLoading: tickerLoading, data: tickerData } = useQuery<
    ICoinTicker[]
  >(["ticker", coinId], () => getCoinTickerById(coinId ? coinId : ""), {
    staleTime: 50000,
    cacheTime: Infinity,
    refetchInterval: 1000,
  });

  return (
    <>
      {tickerLoading ? (
        "Loading..."
      ) : (
        <>
          <CoinTickerPrice>
            {tickerData
              ? tickerData[0].trade_price.toLocaleString("ko-KR")
              : ""}
            <span>KRW</span>
          </CoinTickerPrice>
          <CoinChange>
            <CoinChangeText>전일대비</CoinChangeText>
            <CoinChangeRate>
              {tickerData
                ? (tickerData[0].signed_change_rate * 100).toFixed(2)
                : ""}
              %
            </CoinChangeRate>
            <CoinChangePrice>
              {tickerData
                ? tickerData[0].signed_change_price.toLocaleString("ko-KR")
                : ""}
            </CoinChangePrice>
          </CoinChange>
        </>
      )}
    </>
  );
};

export default CoinTicker;

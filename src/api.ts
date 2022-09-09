import axios from "axios";

const api = axios.create({
  baseURL: "https://api.upbit.com/v1",
});

export const getAllCoin = async () => {
  return api.get("/market/all").then((res) => res.data);
};

export const getCoinTickerById = async (coinId: string) => {
  return api.get(`/ticker?markets=${coinId}`).then((res) => res.data);
};

export const getCoinHistory = (coinId: string) => {
  return api
    .get(`/candles/weeks?market=${coinId}&count=20`)
    .then((res) => res.data);
};

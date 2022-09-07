import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1",
});

export const getAllCoin = async () => {
  return api.get("/coins").then((res) => res.data.slice(0, 100));
};

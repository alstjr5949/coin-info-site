import axios from "axios";

export const getData = async () => {
  try {
    const res = await axios.get(
      "https://api.upbit.com/v1/market/all?isDetails=false",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    console.log(
      res.data.filter((coin: { market: string }) => coin.market.includes("KRW"))
    );
  } catch (error) {
    console.log(error);
  }
};

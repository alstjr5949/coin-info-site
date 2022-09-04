import axios from "axios";

const BASED_URL = `https://api.coinpaprika.com/v1`;

export const getAllCoin = async () => {
  try {
    const res = await axios.get(`${BASED_URL}/coins`, {
      headers: {
        Accept: "application/json",
      },
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

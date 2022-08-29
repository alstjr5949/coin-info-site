import { useEffect } from "react";
import { getData } from "../api";

const Home = () => {
  useEffect(() => {
    getData();
  });
  return <h1>Home</h1>;
};

export default Home;

import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://api.github.com/users/Rich-Harris/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getProducts = async () => {
    const response = await axios.get(url).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};

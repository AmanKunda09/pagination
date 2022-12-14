import axios from "axios";
import { useState, useEffect } from "react";
import paginate from "./utils";

const url = "https://api.github.com/users/Rich-Harris/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getProducts = async () => {
    const response = await axios.get(url).then((res) => {
      setData(paginate(res.data));
      setLoading(false);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};

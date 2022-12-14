import React, { useEffect } from "react";
import { useFetch } from "./useFetch";

const Home = () => {
  const { loading, data } = useFetch();

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
    </main>
  );
};

export default Home;

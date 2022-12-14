import React, { useEffect, useState } from "react";
import Follower from "./Follower";
import { useFetch } from "./useFetch";

const Home = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    setFollowers(data[page]);
  }, [loading]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((person) => {
            return <Follower key={person.id} {...person} />;
          })}
        </div>
        {!loading && <div className="btn-container">hello</div>}
      </section>
    </main>
  );
};

export default Home;

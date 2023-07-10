import { useEffect, useState } from "react";
import Post from "../Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/post`).then((response) => {
      response.json().then((data) => {
        setPosts(data);
      });
    });
  }, []);

  return (
    <>
      {posts?.length > 0 &&
        posts?.map((post, ind) => <Post key={ind} {...post} />)}
    </>
  );
};

export default Home;

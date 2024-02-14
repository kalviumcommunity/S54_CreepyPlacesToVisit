import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
const CardList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://s54-creepyplace.onrender.com/post")
      .then((data) => {
        console.log(data.data);
        setPosts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(posts[0]);
  return (
    <div>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        marginTop={100}
      >
        {posts.map((e, i) => {
          return <Card data={posts[i]} />;
        })}
      </Grid>
    </div>
  );
};

export default CardList;

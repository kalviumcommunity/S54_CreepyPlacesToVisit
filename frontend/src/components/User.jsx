import { List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import axios from "axios";
import { transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function User() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://s54-creepyplace.onrender.com/users")
        .then((res) => {
          //   console.log(res.data);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  }, []);
  const userClick = (username) => {
    navigate(`/posts/${username}`);
  };
  return (
    <div className="users-parent">
      {data.length == 0 ? (
        <div className="loading">{}</div>
      ) : (
        <>
          <Text className="allUser">
            All Users
          </Text>
          <UnorderedList className="users">
            {data.map((e, i) => {
              return (
                <ListItem
                  fontSize="1.5vmax"
                  key={i}
                  onClick={() => {
                    userClick(e.username);
                  }}
                  cursor="pointer"
                  color="white"
                >
                  {e.username}
                </ListItem>
              );
            })}
          </UnorderedList>
        </>
      )}
    </div>
  );
}
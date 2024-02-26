import React, { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { ToastContainer, toast } from "react-toastify";

const UserPosts = () => {
  let { user } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://s54-creepyplace.onrender.com/post/user/${user}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          toast.error("No posts associated with this user found... Redirecting..!", {
            autoClose: 2000000,
            position: "top-center",
          });
          setTimeout(() => {
            navigate("/users");
          }, 3000);
        }
      });
  }, [user, navigate]);

  return (
    <div id="listings-parent">
      <ToastContainer />
      {data.length === 0 ? (
        <div className="loading"></div>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing={10} justifyContent="center" marginTop={20}
        >
          {data.map((e, i) => (
            <Card data={data[i]} key={i} />
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default UserPosts;

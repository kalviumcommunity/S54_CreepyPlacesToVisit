import { Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CardDetailed() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://s54-creepyplace.onrender.com/post/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data == "Post not found..!") {
          console.log(err);
        }else{
console.log("Server side error or wrong ID..!");
        }
      });
  }, []);
  const deletePost = () => {
    let result = confirm("Are you sure?");
    console.log(result);
    if (result) {
      axios
        .delete(`https://s54-creepyplace.onrender.com/post/${data._id}`)
        .then((res) => {
          console.log(res);
            navigate("/list");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const editPost = ()=>{
    navigate(`/list/edit/${data._id}`)
  }
  const back = ()=>{
    navigate(`/list`)
  }

  return (
    <div className="det-card">
      <ToastContainer />
      <div className="det-main">
        <div className="det-image">
          <img src={data.image} alt="" />
        </div>
        <div className="det-text">
          <div className="det-title">{data.title}</div>
          <div className="det-location">{data.location}</div>
          <div className="det-description">{data.description}</div>
        </div>
      </div>
      <div className="det-button">
        <text onClick={editPost} className="button_Edit">Edit</text>
        <text onClick={deletePost} className="button_Edit">
          Delete
        </text>
        <text onClick={back} className="button_Edit">Back</text>
      </div>
    </div>
  );
}
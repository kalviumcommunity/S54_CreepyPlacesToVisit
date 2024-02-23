import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Button
} from "@chakra-ui/react";
import axios from "axios"
import { getCookie } from "../utils/cookies";

export default function NewPost() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue
  } = useForm();
  const username = getCookie("username")
  useEffect(()=>{
    setValue("user",username)
  })
  const token = getCookie("auth-token")
  // console.log(watch())
  const FormSubmitHandler = (data)=>{
    axios.post("https://s54-creepyplace.onrender.com/post",data,{
    headers:{
      "Authorization":token
    }})
    .then(()=>{
      console.log("ADDED")
      navigate("/list")
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className="form-parent">
      <form className="form" onSubmit={handleSubmit(FormSubmitHandler)}>
        <Text as="b" fontSize="2.3vmax">New Post</Text>
        <Text as="i" fontSize="1vmax">Enter the following details!</Text>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Username</FormLabel>
          <Input
            isDisabled
            type="text"
            borderColor="black"
            {...register("user", {
              required: "Username is required"
            })}
          />
          <p className="err">{errors.user?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Title</FormLabel>
          <Input

            type="text"
            borderColor="black"
            {...register("title", {
              required: "Title is required",
              maxLength:{ value: 40, message: "Max 40 Chars" }
            })}
          />
          <p className="err">{errors.title?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Location</FormLabel>
          <Input
            type="text"
            borderColor="black"
            {...register("location", {
              required: "location is required",
            })}
          />
          <p className="err">{errors.location?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Description</FormLabel>
          <Input
            type="text"
            borderColor="black"
            {...register("description", {
              required: "description is required",
            })}
          />
          <p className="err">{errors.description?.message}</p>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="1.2vmax" as="i" fontWeight="550">Image Link</FormLabel>
          <Input
            type="text"
            borderColor="black"
            {...register("image", {
              required: "Provide a valid image url",
            })}
          />
          <p className="err">{errors.image?.message}</p>
        </FormControl>
        <Button type="submit" colorScheme="red">Submit</Button>
      </form>
    </div>
  );
}
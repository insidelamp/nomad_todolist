import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <input
          {...register("email", { required: true })}
          placeholder="Email"
        ></input>
        <input
          {...register("firstName", { required: true })}
          placeholder="firstName"
        ></input>
        <input
          {...register("lastName", { required: true })}
          placeholder="lastName"
        ></input>
        <input
          {...register("userName", { required: true })}
          placeholder="userName"
        ></input>
        <input
          {...register("password", { required: true })}
          placeholder="password"
        ></input>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: { value: 5, message: "Your passwrd is too short" },
          })}
          placeholder="Email"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register("email")} placeholder="Email"></input>
        <input {...register("email")} placeholder="Email"></input>
        <input {...register("email")} placeholder="Email"></input>
        <input {...register("email")} placeholder="Email"></input>
        <input {...register("email")} placeholder="Email"></input>
        <input {...register("email")} placeholder="Email"></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

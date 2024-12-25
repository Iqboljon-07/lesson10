import React, { useContext, useState } from "react";
import { Context } from "../create_user/Create";
import user1 from "@/assets/user.png";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

// let str = "olma";

// let arr = str.slice(0, 1).toUpperCase() + str.slice(1);
// let arr1 = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(arr1);
// console.log(arr1);

const Users = () => {
  const {
    data,
    setData,
    setFname,
    setLname,
    setAge,
    fname,
    lname,
    age,
    setEdit,
    gender,
    setGender,
  } = useContext(Context);
  console.log(data);

  const handleDelete = (id) => {
    setData((prev) => prev.filter((user) => user.id !== id));
  };
  const handleEdit = (user) => {
    setEdit(user);
    setFname(user.fname);
    setLname(user.lname);
    setAge(user.age);
    setGender(user.gender);
  };
  return (
    <>
      <div className="card">
        {data?.map((user) => (
          <div key={user.id} className="card_item">
            <img src={user1} alt="" />
            <div style={{ display: "flex", gap: "20px" }}>
              <h1>
                {user.fname.charAt(0).toUpperCase() + user.fname.slice(1)}
              </h1>
              <h1>
                {user.lname.charAt(0).toUpperCase() + user.lname.slice(1)}
              </h1>
            </div>
            <h1>{user.gender} </h1>
            <h4>{user.age} </h4>
            <div className="btns">
              <button
                onClick={() => handleDelete(user.id)}
                style={{ color: "red" }}
              >
                <MdDelete />
              </button>
              <button onClick={() => handleEdit(user)}>
                <FaRegEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;

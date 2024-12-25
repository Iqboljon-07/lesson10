import React, { createContext, useEffect, useState } from "react";
import Users from "../user/Users";
export const Context = createContext();
import "./create.css";

const Create = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const [edit, setEdit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fname.trim() || !lname.trim() || !age.trim() || !gender.trim()) {
      alert("Jadvalni to'ldiring");
      return null;
    }
    if (edit) {
      let editTodo = { id: edit.id, fname, lname, age, gender };

      setData((prev) =>
        prev.map((item) => (item.id === edit.id ? editTodo : item))
      );
      setEdit(null);
    } else {
      const newUser = {
        id: new Date().getTime(),
        fname,
        lname,
        age,
        gender,
      };
      console.log(newUser);
      setData((prev) => [...prev, newUser]);

      setFname("");
      setLname("");
      setAge("");
      setGender("");
    }
    resetForm();
  };

  const resetForm = () => {
    setFname("");
    setLname("");
    setAge("");
    setGender("");
  };
  console.log(gender);
  return (
    <>
      <div className="container">
        <header>
          <form onSubmit={handleSubmit} action="">
            <input
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              type="text"
              placeholder="firstname"
            />
            <input
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              type="text"
              placeholder="lastname"
            />
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              placeholder="age"
            />

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              id=""
              name=""
            >
              <option value="">Gender</option>
              <option value="Mele">Male</option>
              <option value="Female">Femele</option>
            </select>

            <button type="submit">{edit ? "Update" : "Create"} </button>
          </form>
        </header>
        <aside>
          <div className="aside_item">
            <Context.Provider
              value={{
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
              }}
            >
              <Users />
            </Context.Provider>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Create;

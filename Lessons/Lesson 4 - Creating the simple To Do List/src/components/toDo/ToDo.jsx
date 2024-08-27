/* eslint-disable react/prop-types */
// import axios from "axios";
import Box from "../box/Box";
import { useState } from "react";

const ToDo = ({ data, setData }) => {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (title.trim() === "") {
      alert("Please fill this field");
    } else {
      const newObj = {
        id: data.length + 1,
        title: title,
        completed: false,
        };
        setData([...data, ...[newObj]])
        setTitle("")
    }
  }

  // const API = `https://jsonplaceholder.typicode.com/posts`;
  // async function addTodos(obj) {
  //     try {
  //         const { data } = await axios.post(API, obj);
  //         getTodos()
  //         console.log(data);
  //     } catch (error) {
  //         console.error(error);

  //         throw new error();
  //     }
  //   }

  return (
    <>
      <Box>
        <header className="header flex flex-col justify-center items-center">
          <h1 className="text-4xl font-medium">To Do List</h1>
          <form
            action=""
            className="form mt-5 flex items-center gap-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name=""
              id=""
              className="outline-none border-red-500 border-[2px] px-2 py-1 rounded-md placeholder:text-gray-400 focus:border-gray-500"
              placeholder="Enter your title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <button className="bg-green-600 outline-none px-5 py-1 rounded-md text-md text-white">
              Add
            </button>
          </form>
        </header>
      </Box>
    </>
  );
};

export default ToDo;

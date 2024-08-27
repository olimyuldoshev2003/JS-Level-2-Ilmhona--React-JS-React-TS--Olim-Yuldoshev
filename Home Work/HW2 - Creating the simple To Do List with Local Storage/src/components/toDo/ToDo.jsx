import Box from "../box/Box";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ToDo = ({ data, setData }) => {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (title.trim() === "") {
      alert("Please fill this field");
    } else {
      const newObj = {
        // eslint-disable-next-line react/prop-types
        id: data.length + 1,
        title: title,
        completed: false,
      };
      const updatedData = [...data, newObj];
      setData(updatedData); 

      localStorage.setItem("data", JSON.stringify(updatedData)); // Update localStorage
      setTitle("");
    }
  }

  return (
    <Box>
      <header className="header flex flex-col justify-center items-center">
        <h1 className="text-4xl font-medium">To Do List</h1>
        <form
          className="form mt-5 flex items-center gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
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
  );
};

export default ToDo;

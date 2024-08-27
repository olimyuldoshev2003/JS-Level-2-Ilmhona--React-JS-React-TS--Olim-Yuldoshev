import { useState } from "react";
import ToDo from "./components/toDo/ToDo";
// import axios from "axios";
import Data from "./components/data/Data";

const App = () => {
  //State for putting the data from backend

  const [data, setData] = useState([
    {
      id: 1,
      title: "Hello",
      completed: true,
    },
    {
      id: 2,
      title: "Hi",
      completed: false,
    },
    {
      id: 3,
      title: "Welcome",
      completed: false,
    },
  ]);

  //Getting the data from the json-placeholder todos
  // const API = `https://jsonplaceholder.typicode.com/posts`;

  // async function getTodos() {
  //   try {
  //     const { data } = await axios.get(API);
  //     setData(data);
  //   } catch (error) {
  //     console.error(error);
  //     throw new error();
  //   }
  // }

  // useEffect(() => {
  //   getTodos();
  // }, []);

  return (
    <>
      <div className="app_component">
        <ToDo data={data} setData={setData} />

        <Data data={data} setData={setData} />
      </div>
    </>
  );
};

export default App;

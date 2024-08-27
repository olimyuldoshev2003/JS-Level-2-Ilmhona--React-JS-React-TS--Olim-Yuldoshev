import { useState, useEffect } from "react";
import ToDo from "./components/toDo/ToDo";
import Data from "./components/data/Data";

const App = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div className="app_component">
      <ToDo data={data} setData={setData} />
      <Data data={data} />
    </div>
  );
};

export default App;

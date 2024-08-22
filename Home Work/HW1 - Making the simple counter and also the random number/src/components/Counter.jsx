import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [number, setNumber] = useState(0);

  function plus() {
    setNumber(number + 1);
  }
  function minus() {
    setNumber(number - 1);
  }
  function randomPlus() {
    let randomNumber = Math.floor(Math.random() * 10);
    setNumber(number + randomNumber);
  }

  return (
    <>
      <div className="counter_component">
        <h1>{number}</h1>
        <div className="block_btn">
          <Button btnText={"+"} btnOnClickValue={plus} />
          <Button btnText={"-"} btnOnClickValue={minus} />
          <Button btnText={"?"} btnOnClickValue={randomPlus} />
        </div>
      </div>
    </>
  );
};

export default Counter;

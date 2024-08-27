import  { useState } from 'react'

const Counter = () => {

    const [value, setValue] = useState(0)    
  
  return (
    <>
      <div className="counter_component">
        <h1>Counter</h1>
        <h1>{value}</h1>
        <div className="for_btns">
          <button
            onClick={() => {
              setValue(value + 1);
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              setValue(value - 1);
            }}
          >
            -1
          </button>
          <button
            onClick={() => {
              setValue(value + 10);
            }}
          >
            +10
          </button>
          <button
            onClick={() => {
              setValue(value - 10);
            }}
          >
            -10
          </button>
          <button
            onClick={() => {
              setValue(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter
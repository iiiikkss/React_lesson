import { useEffect } from "react";
import { useState, useRef } from "react";
import { Button } from "./Button";

export const Form = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const buttonEl = useRef(null);

  useEffect(() => {
    console.log("ref", buttonEl);
  }, []);

  return (
    <>
      <h3>Parent component</h3>
      <p>{count}</p>
      <button ref={buttonEl} onClick={() => setCount(count + 1)}>
        +1
      </button>
      <br />
      <button onClick={() => setVisible(!visible)}>
        {visible ? "hide" : "visible"}
      </button>
      <h3>Child component</h3>
      {visible && <Button />}
    </>
  );
};

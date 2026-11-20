import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../JS/actions/action.counter";
import { useState } from "react";

const Counter = () => {
  const [pas, setPas] = useState(1);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <input type="text" value={pas} onChange={(e) => setPas(e.target.value)} />
      <br/>
      <Button
        variant="outline-secondary"
        onClick={() => {
          dispatch(increment(Number(pas)));
        }}
      >
        Increment
      </Button>

      
      <p style={{ fontSize: "2rem" }}>{counter}</p>
      <Button variant="outline-secondary" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
    </div>
  );
};

export default Counter;

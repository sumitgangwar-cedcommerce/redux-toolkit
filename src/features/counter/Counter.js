import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./counterSlice";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state) => {
    console.log("State =>", state);
    return state.coun.value;
  });
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <div>
          <button
            className={styles.button}
            onClick={() =>
              dispatch(decrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Subtract Amount
          </button>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            className={styles.button}
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

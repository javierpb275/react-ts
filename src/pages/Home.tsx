import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import {
  increment,
  decrement,
  changeIncrementAmount,
} from "../store/counterReducer";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const navigate = useNavigate();
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const incrementAmount = useSelector(
    (state: RootState) => state.counter.incrementAmount
  );
  function handleChange(incrementAmountValue: string) {
    dispatch(changeIncrementAmount(Number(incrementAmountValue)));
  }

  return (
    <div>
      <p>HOME PAGE</p>
      <Link to="/about">Go to the about page</Link>
      <br />
      <button onClick={() => navigate(`/layout/${incrementAmount}`)}>
        Go to layout, with a increment amount number
      </button>
      <button onClick={() => navigate(`/layout/${count}`)}>
        Go to layout, with a count number
      </button>
      <h2>COUNTER:</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <input
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
      />
      <p>count: {count}</p>
      <p>increment amount: {incrementAmount}</p>
    </div>
  );
};

export default HomePage;

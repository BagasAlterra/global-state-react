import React from "react";
import { Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../redux/actions/counter";

import { useNavigate } from "react-router-dom";

const Count = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/detailCount");
  };

  return (
    <div>
      <p>Hasil Perhitungan : {counter.value}</p>
      <div>
        <Button variant="primary" onClick={() => dispatch(decrement())}>
          -
        </Button>
        <Button variant="primary" onClick={() => dispatch(increment())}>
          +
        </Button>
      </div>
      <div>
        <Button variant="primary" onClick={() => nextPage()}>
          Lompat ke Detail Count
        </Button>
      </div>
    </div>
  );
};

export default Count;

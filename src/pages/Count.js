import React from "react";
import { Button } from "react-bootstrap";
import { useCountContext } from "../context/CountProvider";
import { useNavigate } from "react-router-dom";

const Count = () => {
  const navigate = useNavigate();
  const { count, handleCount } = useCountContext();

  const nextPage = () => {
    navigate("/detailCount");
  };

  return (
    <div>
      <div>
        <p>Hasil perhitungan : {count}</p>
      </div>
      <div>
        <Button onClick={() => handleCount(-1)}>-</Button>
        <Button onClick={() => handleCount(0)}>Reset</Button>
        <Button onClick={() => handleCount(1)}>+</Button>
      </div>
      <div style={{ marginTop: 30 }}>
        <Button onClick={() => nextPage()}>Lompat ke Detail Count</Button>
      </div>
    </div>
  );
};

export default Count;

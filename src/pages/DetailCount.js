import React from "react";

import { useSelector } from "react-redux";

const DetailCount = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <p>Detail Page</p>
      <p>Hasil value dari Redux : {counter.value}</p>
    </div>
  );
};

export default DetailCount;

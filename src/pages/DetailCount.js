import React from "react";
import { useCountContext } from "../context/CountProvider";

const DetailCount = () => {
  const { count, toggle } = useCountContext();

  return (
    <div style={{ background: toggle ? "white" : "black" }}>
      <div>
        <p>Hasil perhitungan dari halaman Count : {count}</p>
      </div>
    </div>
  );
};

export default DetailCount;

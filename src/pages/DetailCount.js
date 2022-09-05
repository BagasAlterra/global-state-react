import React from "react";
import { useCountContext } from "../context/CountProvider";

const DetailCount = () => {
  const { count } = useCountContext();

  return (
    <div>
      <div>
        <p>Hasil perhitungan dari halaman Count : {count}</p>
      </div>
    </div>
  );
};

export default DetailCount;

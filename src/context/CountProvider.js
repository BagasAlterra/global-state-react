import React, { useState, createContext, useContext } from "react";

const CountContext = createContext();

export const useCountContext = () => {
  const context = useContext(CountContext);
  const [count, setCount] = context.count;

  console.log("context :", context);

  const handleCount = (number) => {
    if (number === 0) {
      setCount(0);
    } else {
      setCount((c) => c + number);
    }
  };

  return {
    handleCount,
    count,
  };
};

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider
      value={{
        count: [count, setCount],
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

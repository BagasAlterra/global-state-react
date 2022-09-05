import React, { useState } from "react";
import Rectangle from "./components/Rectangle";
import { Button } from "react-bootstrap";

const App = () => {
  const [color, setColor] = useState("red");
  const [text, setText] = useState();

  return (
    <div>
      <div>
        <Rectangle backgroundColor={color} />
      </div>
      <div>
        <Button variant="primary" onClick={() => setColor("green")}>
          Ganti Warna
        </Button>
      </div>
    </div>
  );
};

export default App;

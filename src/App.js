import React, { useState } from "react";
import Rectangle from "./components/Rectangle";
import { Button } from "react-bootstrap";
import CustomModal from "./components/CustomModal";

const App = () => {
  const [color, setColor] = useState("red");
  const [modal, setModal] = useState(false);

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
      <div>
        <CustomModal
          show={modal}
          title={"Halo, selamat datang di React JS"}
          body={"Apa kamu yakin mau Menutup?"}
          handleShow={() => setModal(true)}
          handleClose={() => setModal(false)}
        />
      </div>
    </div>
  );
};

export default App;

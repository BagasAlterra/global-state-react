import React, { useState } from "react";
import Rectangle from "./components/Rectangle";
import { Button } from "react-bootstrap";
import CustomModal from "./components/CustomModal";
import CustomCarousel from "./components/CustomCarousel";

const App = () => {
  const [color, setColor] = useState("red");
  const [modal, setModal] = useState(false);

  const dataImages = {
    firstSlide:
      "https://cdn0-production-images-kly.akamaized.net/VfzViwLYTNFU4-QXPBy4aa2lRL4=/0x587:6016x3978/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3797087/original/003568800_1640615228-thomas-iversen-4W8FgDVyUME-unsplash.jpg",
    secondSlide:
      "https://i0.wp.com/starfarm.co.id/wp-content/uploads/2021/07/bebek-peking.jpeg?fit=1278%2C897&ssl=1",
    thirdSlide:
      "https://asset.kompas.com/crops/KghJ6qUGRrpm0fK4EJICOXqspn8=/19x5:960x633/750x500/data/photo/2022/01/05/61d54b808e254.jpg",
  };

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
      <div>
        <CustomCarousel
          imageFirst={dataImages.firstSlide}
          imageSecond={dataImages.secondSlide}
          imageThird={dataImages.thirdSlide}
        />
      </div>
    </div>
  );
};

export default App;

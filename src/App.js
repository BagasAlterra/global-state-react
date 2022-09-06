import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Count from "./pages/Count";
import DetailCount from "./pages/DetailCount";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Count />} />
          <Route path="/detailCount" element={<DetailCount />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

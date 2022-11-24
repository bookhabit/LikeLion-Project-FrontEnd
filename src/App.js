import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./pages/Main";
import Register from "./pages/Register";
import ShowProduct from "./pages/ShowProduct";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Top from "./component/Top";

function App() {
  return (
    <div className="App">
      <Top />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:postID" element={<ShowProduct />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

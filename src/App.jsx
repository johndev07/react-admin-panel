import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import NewUsers from "./pages/newusers/NewUsers";
import UserList from "./pages/userlist/userList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
import Productlist from "./pages/productlist/Productlist";
import Product from "./pages/product/Product";
import Newproduct from "./pages/newproduct/Newproduct";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <div className="main_container">
          <div className="sidenav">
            <Sidebar />
          </div>
          <div className="main_section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/newuser" element={<NewUsers />} />
              <Route path="/productlist" element={<Productlist />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/newproduct" element={<Newproduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Screens/HomePage";
import Model from "../Screens/modelsPage";
import Profile from "../Screens/profilePage";
import ModelProfile from "../Screens/modelProfilePage";
import Login from "../Screens/LoginPage";
import AddPost from "../Screens/addPostPage";
import Packages from "../Screens/PackagesPage";
import Payment from "../Screens/PaymentPage";
 
const Router = () => {
  return (
    <BrowserRouter basename="mike-smith">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model-page" element={<Model />} />
        <Route path="/profile-page" element={<Profile />} />
        <Route path="/model-profile-page" element={<ModelProfile />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/add-post-page" element={<AddPost />} />
        <Route path="/packages-page" element={<Packages />} />
        <Route path="/payment-page" element={<Payment />} />
      </Routes>
    </BrowserRouter>

    // <div>Router</div>
  );
};

export default Router;

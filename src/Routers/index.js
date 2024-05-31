
import React from 'react'
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from '../Screens/HomePage';
import Model from '../Screens/modelsPage';
import Profile from '../Screens/profilePage';
import Login from '../Screens/LoginPage';
import Payment from '../Screens/PaymenyPage';


const Router = () => {
  return (
    <BrowserRouter basename="mike-smith">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model-page" element={<Model />} />
        <Route path="/profile-page" element={<Profile />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/payment-page" element={<Payment />} />
      </Routes>
    </BrowserRouter>


    // <div>Router</div>

  )
}

export default Router
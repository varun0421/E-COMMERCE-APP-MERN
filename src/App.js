import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./layout/Navbar";
import { Routes, Route } from 'react-router-dom'
import { useEffect } from "react";

import Product from "./components/Product/Product";
import Footer from "./layout/Footer";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Admin from "./components/admin/Admin";
import {Toaster} from 'react-hot-toast';
import { useDispatch} from 'react-redux';
function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      // dispatch an action that modifies the store
      console.log(token)
      dispatch({
        type: "SET_AUTH_TOKEN",
        payload: { token }
      })
    }

  }, [])

  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Products />} />
        <Route path='/shop/:productId' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
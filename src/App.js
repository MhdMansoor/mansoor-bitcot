import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";

import { ToastContainer } from "react-toastify";

import PrivateRoute from "./PrivateRoute";
import Login from "./Container/Login";
import SignUp from "./Container/SignUp";
import Products from "./Container/Products";
import AddProduct from "./Container/AddProduct";

import "./assets/css/main.css";
import "react-toastify/dist/ReactToastify.css";
import EditProduct from "./Container/EditProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-up" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/products"
          element={<PrivateRoute Component={Products} />}
        />
        <Route path="/add" element={<PrivateRoute Component={AddProduct} />} />
        <Route
          path="/edit/:id"
          element={<PrivateRoute Component={EditProduct} />}
        />
      </Routes>
      <ToastContainer position="top-center" autoClose={2000} />
    </Router>
  );
};

export default App;

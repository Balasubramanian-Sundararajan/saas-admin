
import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const handleAddProduct = (newProduct) => {
     setProducts(prev => [...prev, newProduct]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard products={products} />} />
        <Route path="/register" element= {<Register/>} />
        <Route
          path="/add-product"
          element={<AddProduct onAdd={handleAddProduct} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

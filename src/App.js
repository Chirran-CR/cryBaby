import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./component/Product";
import ProductOne from "./component/ProductOne";
import Cart from "./component/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/product" element={<Product/>} />
        <Route exact path="/product/:id" element={<ProductOne/>} />
        <Route exact path="/cart" element={<Cart/>} />
        
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Product from "./page/Product";
import ProductList from "./page/ProductList";
import Register from "./page/Register";
import Login from "./page/Login";
import Cart from "./page/Cart";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/products" element={<ProductList/>} exact />
          <Route path="/product" element={<Product/>} exact />
          <Route path="/cart" elementexact={<Cart/>} exact />
          <Route path="/login" element={<Login/>} exact />
          <Route path="/register" element={<Register/>} exact />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

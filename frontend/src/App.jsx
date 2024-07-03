import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";

import ShopCategory from "./Pages/ShopCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

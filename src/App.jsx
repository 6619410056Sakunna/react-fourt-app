import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Adout from "./pages/About";
import Computer from "./pages/Computer";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Smartphone from "./pages/Smartphone";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/computer" element={<Computer />} />
          <Route path="/product/smartphone" element={<Smartphone />} />
          <Route path="/not" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

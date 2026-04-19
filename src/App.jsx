import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Listings from "./pages/Listings";
import Guarantee from "./pages/Guarantee";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/guarantee" element={<Guarantee />} />
      </Routes>
    </BrowserRouter>
  );
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import MainLayout from "./Layout";
import Login from "./pages/login";
import Register from "./pages/register/Register";
import ProductDetails from "./pages/ProductDetails";
import "./assets/styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

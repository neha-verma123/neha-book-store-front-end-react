import { useLocation } from "react-router";
import TopBanner from "../../components/TopBanner";
import ProductList from "../../components/ProductList";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();

  return (
    <>
      <TopBanner />
      <div className="home">
        <ProductList />
      </div>
    </>
  );
}

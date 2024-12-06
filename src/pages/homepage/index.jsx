import { useLocation } from "react-router";
import TopBanner from "../../components/TopBanner";
import ProductList from "../../components/ProductList";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <TopBanner />
      <div className="home">
        <ProductList />
      </div>
    </>
  );
}

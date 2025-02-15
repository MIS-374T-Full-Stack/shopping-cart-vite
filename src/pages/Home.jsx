import ProductCard from "../components/ProductCard";
import "../styles/Home.css";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div className="home">
      {products.map((product) => (
        <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Home;
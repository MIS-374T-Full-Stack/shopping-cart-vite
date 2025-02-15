import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/ProductCard.css";

const ProductCard = ({ id, name, price }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <h3>{name}</h3>
      </Link>
      <p>Price: ${price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

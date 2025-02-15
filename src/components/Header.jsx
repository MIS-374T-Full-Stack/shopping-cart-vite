import "../styles/header.css";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <img
        src="/ut-longhorn-icon.jpg"
        alt="UT Longhorn Logo"
        style={{ height: "60px", width: "auto" }}
      />
      <h1>Shopping Cart Demo</h1>
      <span>🛒 Cart Items: {cartCount}</span>
    </header>
  );
};

export default Header;

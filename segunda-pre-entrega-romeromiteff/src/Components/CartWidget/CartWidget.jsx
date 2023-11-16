import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";


const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link to="/carrito">
      <div>
      1 🛒  
      </div>
        <span> {cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
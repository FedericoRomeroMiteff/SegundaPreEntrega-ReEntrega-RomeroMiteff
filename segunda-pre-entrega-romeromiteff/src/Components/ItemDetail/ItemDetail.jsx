/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  const [isCount, setIsCount] = useState(true);
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  const handleAgregar = () => {
    agregarAlCarrito(item, cantidad);
    setIsCount(false);
  };
  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imageUrl} alt="" />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="marca">{item.marca}</p>
          <p className="categoria">{item.categoria}</p>
          <p className="precio">$ {item.precio}</p>
          {isCount ? (
            <>
              <ItemCount
                cantidad={cantidad}
                handleSumar={handleSumar}
                handleRestar={handleRestar}
                handleAgregar={handleAgregar}
              />
              <Link className="btn btn-primary buttonItemDetail" to="/">
                Volver al catálogo
              </Link>
            </>
          ) : (
            <>
              <Link className="btn btn-primary buttonItemDetail" to="/">
                Seguir comprando
              </Link>
              <Link className="btn btn-success buttonItemDetail" to="/carrito">
                Ir al carrito de compras
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

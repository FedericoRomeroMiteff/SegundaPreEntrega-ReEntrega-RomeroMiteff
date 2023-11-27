import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt="{item.img}" />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="marca">{item.marca}</p>
          <p className="categoria">{item.categoria}</p>
          <p className="precio">$ {item.precio}</p>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => {
              agregarAlCarrito(item, cantidad);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

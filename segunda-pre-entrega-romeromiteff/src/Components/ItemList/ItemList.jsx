import Item from "../Item/Item";
import { toCapital } from "../Helpers/Info";

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container">
      
      <h1>🔆 EL LIBRO DORADO 🔆</h1>
      <h2 className="main-title">{toCapital(titulo)}</h2>
      <h3>Los más vendidos del mes</h3>
      <div className="productos">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};
export default ItemList;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    const db = collection(db, "products");
    const q = categoria ? query(db, where("categoria", "==", categoria)) : db;
    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};
export default ItemListContainer;

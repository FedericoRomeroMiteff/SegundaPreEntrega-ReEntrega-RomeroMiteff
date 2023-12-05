import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { Loading } from "../Loading/Loading";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../Firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo] = useState('Catálogo');
  const [loading, setLoading] = useState(true);
  const categoria = useParams().categoria;

  useEffect(() => {
    const productosRef = collection(db, "products");
    const q = categoria
      ? query(productosRef, where("categoria", "==", categoria))
      : productosRef;
    getDocs(q)
    .then((resp) => {setProductos(resp.docs.map((doc) => {return { ...doc.data(), id: doc.id }}))})
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [categoria]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <ItemList productos={productos} titulo={titulo} />
      )}
    </div>
  );
};
export default ItemListContainer;

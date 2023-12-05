import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Loading } from "../Loading/Loading";
import { useParams } from "react-router-dom";

import { db } from "../Firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "products", id);
    getDoc(docRef)
      .then((resp) => setItem({ ...resp.data(), id: resp.id }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>{loading ? <Loading /> : item && <ItemDetail item={item} />}</div>
  );
};

export default ItemDetailContainer;

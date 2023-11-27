import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import {db} from "../Firebase/config"
import {doc, getDoc} from "firebase/firestore"


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "products", id)
    getDoc(docRef).then((resp) => {
      setItem({...resp.data(),id: resp.id});
    });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;

import CartContext from "../CartContext/CartContext";
import { db } from "../Firebase/config";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";

export const FinalizarCompra = () => {
  const [OCId, setPedidoId] = useState("");
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const OC = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };

    const OCRef = collection(db, "comprasdecliente");
    addDoc(OCRef, OC).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    });
  };

  if (OCId) {
    return (
      <div className="container">
        <p>Tu número de orden de compra es: {OCId}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="main-title">Finalizar compra</h1>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        />
        <input
          type="phone"
          placeholder="Ingresá tu teléfono"
          {...register("telefono")}
        />
        <button className="enviar" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default FinalizarCompra;

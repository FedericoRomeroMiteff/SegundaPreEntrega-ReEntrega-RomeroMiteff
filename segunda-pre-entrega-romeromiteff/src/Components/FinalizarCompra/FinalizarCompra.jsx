import CartContext from "../CartContext/CartContext";
import { db } from "../Firebase/config";

import { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";

export const FinalizarCompra = () => {
  const [OCId, setPedidoId] = useState("");
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    validacionemail: "",
  });
  const comprar = (evt) => {
    evt.preventDefault();
    const OC = {
      cliente: formData,
      productos: carrito,
      total: precioTotal(),
    };
    if (formData.email !== formData.email2) {
      alert("El correo electrónico no coincide");
      return;
    }
    const OCRef = collection(db, "comprasdecliente");
    addDoc(OCRef, OC).then((doc) => {
      setPedidoId(doc.id)
        .catch((err) => console.log(err))
        .finally(() => {
          setFormData({
            nombre: "",
            telefono: "",
            email: "",
            validacionemail: "",
          });
        });
      vaciarCarrito();
    });
  };

  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
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
      <form className="formulario" onSubmit={comprar}>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresá tu nombre"
          required
          onChange={handleOnChange}
          value={formData.nombre}
        />
        <input
          type="email"
          name="email"
          placeholder="Ingresá tu e-mail"
          required
          onChange={handleOnChange}
          value={formData.email}
        />
        <input
          type="email"
          name="email2"
          placeholder="Validá tu e-mail"
          required
          onChange={handleOnChange}
          value={formData.email2}
        />
        <input
          type="phone"
          name="telefono"
          placeholder="Ingresá tu teléfono"
          pattern="[0-9]+"
          required
          onChange={handleOnChange}
          value={formData.telefono}
        />
        <button className="enviar" type="submit">
          Finalizar compra
        </button>
      </form>
    </div>
  );
};

export default FinalizarCompra;

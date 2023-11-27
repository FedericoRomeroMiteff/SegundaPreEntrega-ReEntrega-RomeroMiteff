import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trayectoria from "./Components/Trayectoria/Trayectoria";
import Navbar from "../src/Components/Navbar/Navbar";
import ItemListContainer from "../src/Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../src/Components/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "../src/Components/CartWidget/CartWidget";
import Carrito from "../src/Components/Carrito/Carrito";
import FinalizarCompra from "../src/Components/FinalizarCompra/FinalizarCompra"
import { CartProvider } from "../src/Components/CartContext/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/trayectoria" element={<Trayectoria />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/finalizarcompra" element={<FinalizarCompra />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
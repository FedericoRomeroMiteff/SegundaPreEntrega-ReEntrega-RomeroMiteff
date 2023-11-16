import { BrowserRouter, Routes, Route } from "react-router-dom";
import Envios from "../src/Components/Envios/Envios";
import Navbar from "../src/Components/NavBar/NavBar";
import ItemListContainer from "../src/Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../src/Components/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "../src/Components/CartWidget/CartWidget";
import Carrito from "../src/Components/Carrito/Carrito";
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
          <Route path="/envio" element={<Envios />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;


















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

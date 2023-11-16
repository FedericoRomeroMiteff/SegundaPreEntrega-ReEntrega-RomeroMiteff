import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="../media/maqvial.png" width={100} height={100}></img>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/trayectoria">Trayectoria</Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Nuevos">Nuevos</Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Usados">Usados</Link>
        </li>
        <Link className="menu-link" to="/cart">
          <CartWidget />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar


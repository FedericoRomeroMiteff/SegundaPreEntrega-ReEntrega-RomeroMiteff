import CartWidget from "../CartWidget/CartWidget";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { categorias } from "../Categorias/Categorias";

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
          <Link className="menu-link" to="/trayectoria">
            Trayectoria
          </Link>
        </li>
        <NavDropdown title="Categorias" id="navbarScrollingDropdown">
          {categorias.map((category) => (
            <Link
              key={category.id}
              className="dropdown-item"
              to={`/productos/${category.category}`}
            >
              {category.name}
            </Link>
          ))}
        </NavDropdown>
        <Link className="menu-link" to="/carrito">
          <CartWidget />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

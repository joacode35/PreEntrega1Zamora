import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <>
      <div className="pe-5 ps-5 pt-3  d-flex justify-content-between align-items-center text-light">
        <Link to="/">
          <a className="nav-link fs-1" href="#">
            Synthetic
          </a>
        </Link>
        <Link to="/">
          <ul className="m-0">
            <a className="nav-link" href="#">
              Inicio
            </a>
          </ul>
        </Link>
        <Link to="/Servicios">
          <ul className="m-0">
            <a className="nav-link" href="#">
              Servicios
            </a>
          </ul>
        </Link>
        <Link to="/Contacto">
          <ul className="m-0">
            <a className="nav-link" href="#">
              Contacto
            </a>
          </ul>
        </Link>
        <Link to="/Cart">
          <div className="d-flex align-items-center">
            <CartWidget />
          </div>
        </Link>
      </div>
    </>
  );
};

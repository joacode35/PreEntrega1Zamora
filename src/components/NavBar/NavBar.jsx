import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <>
      <div className="pe-5 ps-5 pt-3  d-flex justify-content-between align-items-center text-light bg-black pb-3">
        <Link className="text-decoration-none text-light" to="/">
          <a className="nav-link fs-1" href="#">
            Synthetic
          </a>
        </Link>
        <Link className="text-decoration-none text-light fs-4" to="/">
          <ul className="m-0">
            <a className="nav-link" href="#">
              Inicio
            </a>
          </ul>
        </Link>
        <Link className="text-decoration-none text-light fs-4" to="/Servicios">
          <ul className="m-0">
            <a className="nav-link" href="#">
              Servicios
            </a>
          </ul>
        </Link>
        <Link className="text-decoration-none text-light fs-4" to="/Contacto">
          <ul className="m-0">
            <a className="nav-link" href="#">
              Contacto
            </a>
          </ul>
        </Link>
        <Link className="text-decoration-none text-light" to="/Cart">
          <div className="d-flex align-items-end">
            <CartWidget />
          </div>
        </Link>
      </div>
    </>
  );
};

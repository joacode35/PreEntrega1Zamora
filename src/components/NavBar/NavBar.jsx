import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <>
      <div className="pe-5 ps-5 pt-3  d-flex justify-content-between align-items-center text-light">
        <a className="nav-link fs-1" href="#">
          Synthetic
        </a>
        <ul className="m-0">
          <a className="nav-link" href="#">
            Productos
          </a>
        </ul>
        <ul className="m-0">
          <a className="nav-link" href="#">
            Servicios
          </a>
        </ul>
        <ul className="m-0">
          <a className="nav-link" href="#">
            Contacto
          </a>
        </ul>
        <div className="d-flex align-items-center">
          <CartWidget />
          <p className="m-0">0</p>
        </div>
      </div>
    </>
  );
};

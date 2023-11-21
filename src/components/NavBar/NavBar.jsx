import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../data/photos/piano.png";

export const NavBar = () => {
  return (
    <>
      <nav className="bg-green-500 flex place-content-between  items-center ps-8 pe-5 font-PoppinsFonts text-slate-100">
        <Link className="flex items-center gap-3" to="/">
          <img className="w-24" src={logo} alt="" />
          <p className="text-[30px]">Synthetic</p>
        </Link>
        <ul className="flex ps-20 gap-20">
          <li className="px-5 text-[20px]">
            <Link to="/"> Inicio </Link>
          </li>
          <li className="px-5 text-[20px]">
            <Link to="/Servicios">Servicios</Link>
          </li>
          <li className="px-5 text-[20px]">
            <Link to="/Contacto">Contacto</Link>
          </li>
        </ul>

        <Link className="text-decoration-none text-light" to="/Cart">
          <div className="flex items-end pr-4 gap-1">
            <CartWidget />
          </div>
        </Link>
      </nav>
    </>
  );
};

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemDetailContainer } from "./components/Detail/ItemDetailContainer";
import { ItemListContainer } from "./components/List/ItemListContainer";
import { Servicios } from "./components/Servicios/Servicios";
import { Contacto } from "./components/Contacto/Contacto";
import { Cart } from "./components/Cart/Cart";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer message={"bienvenidos"} />}
        ></Route>
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="Contacto" element={<Contacto />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

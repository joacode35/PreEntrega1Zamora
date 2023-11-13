import { Link } from "react-router-dom";

export const Item = ({ id, name, img, price }) => {
  return (
    <div className=" p-3 border bg-light">
      <img className="w-75" src={img} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <Link to={`/item/${id}`}>Detalles</Link>
    </div>
  );
};

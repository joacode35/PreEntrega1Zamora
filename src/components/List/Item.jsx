import { Link } from "react-router-dom";

export const Item = ({ id, name, img, price }) => {
  return (
    <div className=" p-3 border bg-light rounded-4">
      <div className="d-flex justify-content-center pb-4">
        <img className="w-75" src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>${price}</p>
      <Link className="btn btn-success" to={`/item/${id}`}>
        Detalles
      </Link>
    </div>
  );
};

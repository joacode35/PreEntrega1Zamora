import { Link } from "react-router-dom";

export const Item = ({ id, name, img, price }) => {
  return (
    <div className="p-7 border bg-white rounded-3xl">
      <div className="flex justify-center pb-4">
        <img className="w-60" src={img} alt={name} />
      </div>
      <h2 className="font-semibold pb-3 text-xl">{name}</h2>
      <p className="pb-3 text-xl">${price}</p>
      <div className="pt-3">
        <Link
          className="bg-green-500 text-white px-3 py-2.5 rounded-full text-md"
          to={`/item/${id}`}
        >
          Detalles
        </Link>
      </div>
    </div>
  );
};

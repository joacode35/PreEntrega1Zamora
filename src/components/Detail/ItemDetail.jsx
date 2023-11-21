import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ id, name, img, description, price }) => {
  return (
    <>
      <h1 className=" text-white pt-4 text-3xl pb-3">Detalles del producto</h1>

      <div className="flex justify-between p-6 bg-white rounded-2xl" key={id}>
        <img className="w-64" src={img} alt={name} />
        <p className="flex items-center">{description}</p>
        <p className="flex items-center">${price}</p>
        <ItemCount initial={1} stock={5} />
      </div>
    </>
  );
};

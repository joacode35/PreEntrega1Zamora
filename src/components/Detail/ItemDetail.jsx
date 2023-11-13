import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ id, name, price, description, img }) => {
  return (
    <>
      <h1>Detalles del producto</h1>
      <div className="p-3 border bg-light col-3" key={id}>
        <img className="w-50" src={img} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <ItemCount initial={1} stock={5} />
      </div>
    </>
  );
};

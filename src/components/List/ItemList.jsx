import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return items.map((item) => (
    <div className="col-3" key={item.id}>
      <Item
        id={item.id}
        name={item.name}
        img={item.img}
        description={item.description}
        price={item.price}
      />
    </div>
  ));
};

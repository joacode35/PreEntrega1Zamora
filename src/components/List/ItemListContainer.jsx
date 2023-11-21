import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../data/useFetch";
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ message }) => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      getCategories(category).then((res) => setItems(res));
    } else {
      useFetch().then((res) => setItems(res));
    }
  }, [items]);

  if (items.length > 0) {
    return (
      <>
        <div className="text-white text-center text-5xl pt-10">{message}</div>
        <div className="flex mt-20 justify-center">
          <div className="flex gap-20">
            <ItemList items={items} />
          </div>
        </div>
      </>
    );
  }
};

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
        <div className="text-light fs-1 pt-5 text-center">{message}</div>
        <div className="d-flex container mt-5">
          <div className="row g-5 d-flex justify-content-center">
            <ItemList items={items} />
          </div>
        </div>
      </>
    );
  }
};

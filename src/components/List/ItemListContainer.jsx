import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../data/useFetch";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
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
      <div className="container mt-4">
        <div className="row g-2">
          <ItemList items={items} />
        </div>
      </div>
    );
  } else {
    return <p>Cargando elementos...</p>;
  }
};

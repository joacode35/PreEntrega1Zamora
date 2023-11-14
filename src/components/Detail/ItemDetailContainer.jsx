import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getData } from "../../data/useFetch";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData(parseInt(id)).then((res) => setItem(res));
  }, []);

  if (item) {
    return (
      <div className="container mt-4">
        <div className="row g-2">
          <ItemDetail {...item} />
        </div>
      </div>
    );
  }
};

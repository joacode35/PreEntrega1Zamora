import { useState } from "react";

export const ItemCount = (props) => {
  const { stock } = props;
  const [initial, setInitial] = useState(props.initial);

  const sumar = () => {
    if (initial < stock) {
      setInitial(initial + 1);
    }
  };

  const restar = () => {
    if (initial > 0) {
      setInitial(initial - 1);
    }
  };

  return (
    <div>
      <div className="d-flex">
        <button
          type="button"
          className="btn bg-black text-light"
          onClick={restar}
        >
          -
        </button>
        <p className="px-5">{initial}</p>
        <button
          type="button"
          className="btn bg-black text-light"
          onClick={sumar}
        >
          +
        </button>
      </div>
      <button type="button" className="btn btn-success mt-4">
        Agregar al carrito
      </button>
    </div>
  );
};

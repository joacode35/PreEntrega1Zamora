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
      <div className="flex">
        <button
          type="button"
          className="bg-green-500 text-white px-5 py-3 rounded-full text-md"
          onClick={restar}
        >
          -
        </button>

        <p className="px-8 flex items-center">{initial}</p>

        <button
          type="button"
          className="bg-green-500 text-white px-5 py-3 rounded-full text-md"
          onClick={sumar}
        >
          +
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <button
          type="button"
          className=" bg-green-500 text-white px-3 py-3 rounded-full text-md mt-4"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export const ItemListContainer = ({ message }) => {
  return (
    <>
      <div className="text-light fs-1 pt-5 text-center">{message}</div>;
      <div className="foto-container">
        <img className="foto" src="./img/foto1.webp" alt="" />
      </div>
    </>
  );
};

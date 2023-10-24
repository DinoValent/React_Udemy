import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const ProductCardView = ({ handler, id, name, description, price }) => {
  const navigate = useNavigate();

  const onAddProduct = (product) => {
    console.log(product);
    handler(product);
    navigate("/cart");
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">$ {price}</p>
          <button
            className="btn btn-primary"
            onClick={() => onAddProduct({ id, name, description, price })}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

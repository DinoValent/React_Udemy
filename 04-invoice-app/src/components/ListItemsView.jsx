import { RowItemView } from "./RowItemView";
import PropTypes from "prop-types";

/* eslint-disable react/prop-types */
export const ListItemsView = ({ title, items }) => {
  return (
    <>
      <h4>{title}</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, price, quantity }) => {
            return (
              <RowItemView
                key={id} //El id es para renderizar cada elemento por separado
                product={product}
                price={price}
                quantity={quantity}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

ListItemsView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

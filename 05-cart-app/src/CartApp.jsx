/* eslint-disable react/jsx-key */

import { useEffect, useReducer } from "react";
import { CatalogView } from "./components/CatalogView";
import CartView from "./components/CartView";
import { itemsReducer } from "./reducer/itemsReducer";
import {
  AddProductCart,
  DeleteProductCart,
  UpdateQuantityProductCart,
} from "./reducer/itemsActions";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const CartApp = () => {
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
      dispatch({
        type: UpdateQuantityProductCart,
        payload: product,
      });
    } else {
      dispatch({
        type: AddProductCart,
        payload: product,
      });
    }
  };

  const handlerDeleteProductCart = (id) => {
    dispatch({
      type: DeleteProductCart,
      payload: id,
    });
  };
  return (
    <>
      <div className="container my-4">
        <h3>Cart App</h3>
        <CatalogView handler={handlerAddProductCart} />
        <div className="my-4 w-50">
          {cartItems?.length <= 0 || (
            <CartView
              items={cartItems}
              handlerDelete={handlerDeleteProductCart}
            />
          )}
        </div>
      </div>
    </>
  );
};
// setCartItems([
//   ...cartItems.filter((i) => i.product.id !== product.id),
//   {
//     product,
//     quantity: hasItem.quantity + 1,
//   },
// ]);

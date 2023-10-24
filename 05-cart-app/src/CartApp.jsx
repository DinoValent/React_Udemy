/* eslint-disable react/jsx-key */

import { UseItemsCart } from "./hooks/useItemsCart";
import { NavBar } from "./components/NavBar";
import { CartRoutes } from "./components/routes/CartRoutes";

export const CartApp = () => {
  const { cartItems, handlerAddProductCart, handlerDeleteProductCart } =
    UseItemsCart();

  return (
    <>
      <NavBar />
      <div className="container my-4">
        <h3>Cart App</h3>
        <CartRoutes
          cartItems={cartItems}
          handlerAddProductCart={handlerAddProductCart}
          handlerDeleteProductCart={handlerDeleteProductCart}
        />
      </div>
    </>
  );
};

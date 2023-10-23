/* eslint-disable react/jsx-key */

import { useState } from "react";
import { CatalogView } from "./components/CatalogView";
import CartView from "./components/CartView";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const CartApp = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
      // setCartItems([
      //   ...cartItems.filter((i) => i.product.id !== product.id),
      //   {
      //     product,
      //     quantity: hasItem.quantity + 1,
      //   },
      // ]);
      setCartItems(
        cartItems.map((i) => {
          if (i.product.id === product.id) {
            i.quantity = i.quantity + 1;
          }
          return i;
        })
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          product,
          quantity: 1,
          total: product.price * 1,
        },
      ]);
    }
  };

  const handlerDeleteProductCart = (id) => {
    setCartItems([...cartItems.filter((i) => i.product.id !== id)]);
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

import React from "react";
import CartItem from "./CartItem";
import { useProduct } from "../context/ProductContext";

const Cart = () => {
  const { cart, total, setCart } = useProduct();

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <div className="cart-empty-btn">
        <button disabled={cart.length < 1} onClick={clearCart}>
          Sepeti Boşalt
        </button>
      </div>
      {cart.map((c) => (
        <CartItem key={c.id} cart={c} />
      ))}

      <div className="total-price">$ {total.toFixed(2)}</div>
    </>
  );
};

export default Cart;

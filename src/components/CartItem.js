import React from "react";

const CartItem = ({ cart }) => {
  return (
    <>
      <div className="cart-main">
        <img src={cart.imgURL} alt={cart.title} />
        <div className="cart-info">
          <h5>{cart.title}</h5>
          <p>${cart.price.toFixed(2)}</p>
          <p>{cart.amount}</p>
          <p>${(cart.price * cart.amount).toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default CartItem;

import React from "react";
import { useProduct } from "../context/ProductContext";
import Cart from "./Cart";

const Product = ({ product }) => {
  const { money, total, cart, setCart } = useProduct();
  const cartItem = cart.find((c) => c.id === product.id);

  const addToCart = () => {
    const checkItem = cart.find((c) => c.id === product.id);
    if (checkItem) {
      setCart([
        ...cart.filter((c) => c.id !== product.id),
        { ...checkItem, amount: checkItem.amount + 1 },
      ]);
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  const removeFromCart = () => {
    const checkItem = cart.find((c) => c.id === product.id);
    checkItem.amount -= 1;
    if (checkItem.amount === 0) {
      setCart([...cart.filter((c) => c.id !== product.id)]);
    } else {
      setCart([...cart.filter((c) => c.id !== product.id), checkItem]);
    }
  };

  return (
    <div className="product-main">
      <div className="img-title">
        <img src={product.imgURL} alt={product.title} />
        <h5>
          {product.title} - ( ${product.price} )
        </h5>
      </div>
      <div className="product-buttons">
        <button disabled={!cartItem} onClick={removeFromCart}>
          Çıkar
        </button>
        <span
          style={{ marginRight: "5px", marginLeft: "5px", color: "crimson" }}
        >
          {cartItem?.amount || 0}
        </span>
        <button
          disabled={money - total < product.price || money - total === 0}
          onClick={addToCart}
        >
          Ekle
        </button>
      </div>
      {/* <style rxjs="true">
        {`

            .product-main{
                border-bottom:1px solid gray;
                padding:15px;
            }
            .product-buttons button{
                cursor:pointer;
            }
                      
          `}
      </style> */}
    </div>
  );
};

export default Product;

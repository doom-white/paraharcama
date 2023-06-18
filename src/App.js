import React, { useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useProduct } from "./context/ProductContext";

const App = () => {
  const { products, cart, setTotal } = useProduct();

  useEffect(() => {
    const result = cart.reduce((acc, citem) => {
      return acc + citem.amount * products.find((p) => p.id === citem.id).price;
    }, 0);

    setTotal(result);
    console.log(result);
  }, [cart]);

  return (
    <div>
      <Header />
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
      <Cart />
    </div>
  );
};

export default App;

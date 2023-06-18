import { createContext, useContext, useState } from "react";
import products from "../products.json";

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

const ProductProvider = (props) => {
  const [money, setMoney] = useState(100);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  const data = {
    money,
    setMoney,
    total,
    setTotal,
    cart,
    setCart,
    products,
  };

  return (
    <ProductContext.Provider value={data}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

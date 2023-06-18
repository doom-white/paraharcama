import React from "react";
import { useProduct } from "../context/ProductContext";

const Header = () => {
  const { money, total } = useProduct();

  return (
    <div className="header">
      <div>Toplam bütçeniz : ${money}</div>
      <div>Kalan paranız : ${money - total}</div>
      <div>Harcanan para : ${total}</div>
    </div>
  );
};

export default Header;

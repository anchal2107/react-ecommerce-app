import "./shop.styles.scss";
import Collection from "../../components/collection/collection.component";
import { SHOP_DATA } from "../../data/shop.data";
import { useState, useEffect } from "react";
const Shop = () => {
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    setShopData(SHOP_DATA);
  }, []);
  return (
    <div>
      <h1>Shop Page</h1>
      {shopData.map((category) => {
       return( <Collection key={category.id} title={category.title} items={category.items.filter((item,idx) => idx<4)}/>)
      })}
    </div>
  );
};
export default Shop;

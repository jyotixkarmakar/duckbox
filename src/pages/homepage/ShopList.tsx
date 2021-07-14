import { useEffect, useState } from "react";
import Catagory from "./Catagory";
const Shoplist = (props: any) => {
  const shoplist = [
    { shopName: "bigbazar", address: "raiganj", catagory: "Fruit" },
    {
      shopName: "Arthi Provision Store",
      address: "Jayanagar",
      catagory: "Vegetable",
    },
    { shopName: "G M store", address: "Shivajinagar", catagory: "Grocery" },
    { shopName: "Greenmart", address: "Vivek Nagar", catagory: "Vegetable" },
    { shopName: "New Darshan Store", address: "Eji pura", catagory: "Grocery" },
    { shopName: "Om Sai Ram Traders", address: "MG Road", catagory: "Fruit" },
    {
      shopName: "Fresh Mart",
      address: " Sampagni Nagar",
      catagory: "Vegetable",
    },
    {
      shopName: "Madeena Supermarket",
      address: "Neelasandra",
      catagory: "Grocery",
    },
  ];
  const [availableShop, setAvailableShop] = useState<any[]>([]);

  useEffect(() => {

    console.log("use")
    let a = shoplist.filter((shop) => {
      console.log(shop.catagory);
      return shop.catagory === props.catagory
    });
    console.log(a)
    setAvailableShop(a);
  }, [props.catagory]);
  const shopCardStyle = { background: '#000', color: '#5cc' };
  return (
    <div>
      <div>you have selected {props.catagory} </div>
      <div>
        {availableShop.map((shop) =>
          <div style={shopCardStyle}>
            <div>ShopName: {shop.shopName}</div>
            <div>Address: {shop.address}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shoplist;

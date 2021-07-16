import { useEffect, useState } from "react";
import "./styles.css";
import { useStyles } from "./jss-styles"
import { useParams } from "react-router-dom";

const CategoryDetails = (props: any) => {
  const classes = useStyles();
  let { catagoryName } = useParams<any>();
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

  const [shopDivs, setShopDivs] = useState<any>([]);

  const [availableShop, setAvailableShop] = useState<any[]>([]);
//   useEffect(() => {
//     let arr = []
//     if (availableShop && availableShop.length) {
//       for (let i = 0; i < availableShop.length; i++) {
//         let shopdiv = <div style={shopCardStyle}>
//           <div className={classes.shopName}>ShopName: {availableShop[i].shopName}</div>
//           <div>Address: {availableShop[i].address}</div>
//         </div>
//         arr.push(shopdiv);
//       }

//       setShopDivs(arr)
//     }
//   }, [availableShop])
  useEffect(() => {
    let sl: any[] = []
    // for (let i = 0; i < shoplist.length; i++) {
    //   sl.push(shoplist[i].shopName)
    // }
    shoplist.forEach((shop, index) => {
      // console.log(shop.shopName)
      sl.push(shop.shopName)
    })
    let mapFun = (item: any) => {
      return item.shopName
    }
    let sl1 = shoplist.map(mapFun)
    console.log(sl1)
    console.log(sl);
    let slF: any[] = []





    let slf1=shoplist.find(item=>{
      return  item.shopName.length <= 10
    })
    console.log(slf1)


    shoplist.forEach((shop, index) => {
      // console.log(shop.shopName)
      if (shop.shopName.length <= 10) {
        slF.push(shop)
      }
    })


    console.log("use")
    let a = shoplist.filter((shop) => {
      console.log(shop.catagory);
      return shop.catagory === catagoryName
    });
    console.log(a)
    setAvailableShop(a);
  }, [catagoryName,shoplist]);
  const shopCardStyle = { background: '#ddd', color: '#800' };
  return (
    <div className="shop-container">
      <div>you have selected {catagoryName} </div>
      <div>
        {shopDivs}
      </div>
    </div>
  );
};

export default CategoryDetails;


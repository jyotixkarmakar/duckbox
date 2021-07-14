import { useEffect, useState } from "react";
import Catagory from "./Catagory";
import {styles}  from "./homepage-styles";


const HomePage = (props: any) => {
    let productname = "Milk"
    const changeProduct = () => {
        productname = "Egg";
    }
    const changeShop = (shopName:any) => {
        setShopName(shopName);
        setCount(0);
    }
  
    const [shopName, setShopName] = useState("BBQ");
    const [count, setCount] = useState(0);
    const purchaseMilk = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        console.log("ue1")
    });

    useEffect(() => {
        console.log("ue2")
    }, []);
    useEffect(() => {
        console.log("ue3")
    }, [count]);
    return (
        <div>
             <div style={styles.parentDiv}>Product available : {productname}</div>
            <button onClick={changeProduct} style={styles.buttonStyles}>
                change Product
            </button>
            <div>Shop name : {shopName}</div>
            <button onClick={()=>changeShop("bigbazar")} style={styles.buttonStyles}>
                change shop
            </button>
            <div>You have purchased {count} packet {productname} from {shopName}</div>
            <button onClick={purchaseMilk} style={styles.buttonStyles}>
                Purchase Milk
            </button>
            <Catagory></Catagory>
        </div>
    )
}
export default HomePage;
import { useEffect, useState } from "react";

const HomePage = (props: any) => {
    let productname = "Milk"
    const changeProduct = () => {
        productname = "Egg";
    }
    const changeShop = () => {
        setShopName("Big Bazar");
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
            <h1>Essentials delivered to your doorstep</h1>
            <div style={{ display: "flex", textAlign: "center" }}>
                <div style={{ width: "32%", margin: "1%", height: "100px", background: "#eee" }}>
                    <h1>Grocery</h1>
                </div>
                <div style={{ width: "32%", margin: "1%", height: "100px", background: "#eee" }}>
                    <h1>Vegetable</h1>
                </div>
                <div style={{ width: "32%", margin: "1%", height: "100px", background: "#eee" }}>
                    <h1>Restaurant</h1>
                </div>
            </div>
            <div>Product available : {productname}</div>
            <button onClick={changeProduct}>
                change Product
            </button>
            <div>Shop name : {shopName}</div>
            <button onClick={changeShop}>
                change shop
            </button>
            <div>You have purchased {count} packet {productname} from {shopName}</div>
            <button onClick={purchaseMilk}>
                Purchase Milk
            </button>
        </div>
    )
}
export default HomePage;
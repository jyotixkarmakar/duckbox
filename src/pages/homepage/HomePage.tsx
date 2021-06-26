import { useState } from "react";

const HomePage = (props: any) => {
    let storename = "Monginish"
    const changeStore = () => {
        storename = "A B Sweets";
    }
    const changeShop = () => {
        setShopName("Big Bazar")
    }
    const [shopName, setShopName] = useState("BBQ");
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
                    <h1>Fruit</h1>
                </div>
            </div>
            <div>Store name : {storename}</div>
            <button onClick={changeStore}>
                change store
            </button>
            <div>Shop name : {shopName}</div>
            <button onClick={changeShop}>
                change shop
            </button>
        </div>
    )
}
export default HomePage;
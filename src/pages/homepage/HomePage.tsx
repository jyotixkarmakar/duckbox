const HomePage = (props: any) => {
    return (
        <div>
            <h1>Essentials delivered to your doorstep</h1>
            <div style={{ display: "flex",textAlign:"center" }}>
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
        </div>
    )
}
export default HomePage;
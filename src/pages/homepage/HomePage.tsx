import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Catagory from "./Catagory";
import { useStyles } from "./homepage-styles";
import fruits from "./../../assets/fruits.png";
import pickup from "./../../assets/pickup.png";
import groceries from "./../../assets/groceries.png";
import restaurant from "./../../assets/restaurant.jpg";


const HomePage = (props: any) => {
    const [catagoryDetails,setCatagoryDetails] = useState([])
    const classes = useStyles();
    useEffect(()=>{
        let category=[
            {
                catagoryName: "Groceries & Essentials",
                catagoryId: "grocery",
                backgroundImage: groceries
            },
            {
                catagoryName: "Pickup & DropOff",
                catagoryId: "pickup",
                backgroundImage: pickup
            },
            {
                catagoryName: "Restautrants",
                catagoryId: "restaurants",
                backgroundImage: restaurant
            },
            {
                catagoryName: "Fruits & Vegitable",
                catagoryId: "fruits-vegetables",
                backgroundImage: fruits
            },
        ]
        setCatagoryDetails(category);
    },[])
    const categoryHTML=()=>
        {catagoryDetails.map((category) => {
            <Grid item xs={3}>{category.catagoryName}</Grid>
        })}
    
    return (
        <Grid container>
            <Grid item xs={12} className={classes.topBar + " container "}>Top Bar</Grid>
            <Grid item xs={12} className={classes.catagoryContainer + " container "}>
                <Grid item xs={12} className={classes.essential}>
                    Essentials delivered to your doorstep
                </Grid>
                <Grid item xs={12}>
                   {categoryHTML}
                </Grid>
            </Grid>
            <Grid item xs={12} className={"container "}>section1</Grid>
            <Grid item xs={12} className={"container "}>section1</Grid>
        </Grid>
    )
}
export default HomePage;
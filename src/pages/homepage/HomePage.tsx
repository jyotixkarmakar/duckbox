import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import Catagory from "./Catagory";
import { useStyles } from "./homepage-styles";
import fruits from "./../../assets/fruits.png";
import pickup from "./../../assets/pickup.png";
import groceries from "./../../assets/groceries.png";
import restaurant from "./../../assets/restaurant.jpg";
import { useHistory } from "react-router-dom";

const HomePage = (props: any) => {
  const [catagoryDetails, setCatagoryDetails] = useState([]);
  const classes = useStyles();
  let history = useHistory();
  useEffect(() => {
    let category = [
      {
        catagoryName: "Groceries & Essentials",
        catagoryId: "grocery",
        backgroundImage: groceries,
      },
      {
        catagoryName: "Pickup & DropOff",
        catagoryId: "pickup",
        backgroundImage: pickup,
      },
      {
        catagoryName: "Restautrants",
        catagoryId: "restaurants",
        backgroundImage: restaurant,
      },
      {
        catagoryName: "Fruits & Vegitable",
        catagoryId: "fruits-vegetables",
        backgroundImage: fruits,
      },
    ];
    setCatagoryDetails(category);
  }, []);
const goToCatagoryDetails=(catagoryId)=>{
  let link="/catagory/" + catagoryId;
    history.push(link)
}
  return (
    <Grid container>
      <Grid item xs={12} className={classes.topBar + " container "}>
        Top Bar
      </Grid>
      <Grid item xs={12} className={classes.catagoryContainer + " container "}>
        <Grid item xs={12} className={classes.essential}>
          Essentials delivered to your doorstep
        </Grid>
        <Grid container xs={12}>
          {catagoryDetails.map((category) => {
            return (
              
              <Grid item xs={3} >
                <Card onClick={()=>{goToCatagoryDetails(category.catagoryId)}}>
                  <CardMedia className={classes.catagoryCard} image={category.backgroundImage} />
                  
                </Card>
              </Grid>
             
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={12} className={"container "}>
        section1
      </Grid>
      <Grid item xs={12} className={"container "}>
        section1
      </Grid>
    </Grid>
  );
};
export default HomePage;

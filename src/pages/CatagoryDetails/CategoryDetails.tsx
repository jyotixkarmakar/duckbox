import { useEffect, useState } from "react";
import "./styles.css";
import { useStyles } from "./jss-styles"
import { useParams } from "react-router-dom";
import axios from "axios";
import { Shop } from "@material-ui/icons";
import { Page1 } from "../page1";
import { Page2 } from "../page2";

const CategoryDetails = (props: any) => {
  const classes = useStyles();
  let { catagoryName } = useParams<any>();
  const [shops,setShops] = useState([]);
  const m1 = async () => {
    let allshops: any;


    //REST API example
    allshops = await axios.get('https://60fffde9bca46600171cf670.mockapi.io/shop');
    let filteredshops=allshops.data.filter(s=>s.catagory===catagoryName)
    setShops(filteredshops);
  }

  useEffect(() => {

    m1();

  }, [])



  return (
    <div className="shop-container">
      <div>you have selected {catagoryName} </div>
      {shops.map(shop=>{
        return <Page2 shopDetails={shop}></Page2>
      })}
      <div>
      </div>
    </div>
  );
};

export default CategoryDetails;


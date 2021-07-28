import { useEffect, useState } from "react";
import "./styles.css";
import { useStyles } from "./jss-styles"
import { useParams } from "react-router-dom";
import axios from "axios";
import { Shop } from "@material-ui/icons";

const CategoryDetails = (props: any) => {
  const classes = useStyles();
  let { catagoryName } = useParams<any>();
  const m1 = async () => {
    let shops: any;
    shops = await axios.get('https://60fffde9bca46600171cf670.mockapi.io/shop');
    console.log(shops);
    let id=Math.floor(Math.random() * 101);
    let newShop = {
      createdAt: "2021-07-27T09:32:46.083Z",
      name: "My Vodafone shop no:"+id,
      avatar: "https://cdn.fakercloud.com/avatars/brandclay_168.jpg"
    }
    let resp = await axios.post('https://60fffde9bca46600171cf670.mockapi.io/shop', newShop)
    
    let newShop1 = {
      createdAt: "2021-07-27T09:32:46.083Z",
      name: "My updated Vodafone shop no:"+id,
      avatar: "https://cdn.fakercloud.com/avatars/brandclay_168.jpg"
    }
    let resp1 = await axios.put('https://60fffde9bca46600171cf670.mockapi.io/shop/2', newShop)
    
    let resp2 = await axios.delete('https://60fffde9bca46600171cf670.mockapi.io/shop/2')
    
    console.log(resp);
  }

  useEffect(() => {

    m1();

  }, [])



  return (
    <div className="shop-container">
      <div>you have selected {catagoryName} </div>
      <div>
      </div>
    </div>
  );
};

export default CategoryDetails;


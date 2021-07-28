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

    //promise,await,try catch
    const x = new Promise((resolve, reject) => {
      setTimeout(() => {
        let i = Math.floor(Math.random() * 101);
        console.log(i)
        if (i % 2 == 0) {
          resolve(111);
        }
        else {
          reject(222)
        }
      }, 10000)
    });
    try {
      shops = await x;
    } catch (ex) {
      shops = 55555;
    }
    let a: any = [4, 6];
    try {
      console.log(a.getheight())
    } catch (ex) {
      console.log("abc")
    }
    console.log("Shoplist", shops);

    //REST API example
    shops = await axios.get('https://60fffde9bca46600171cf670.mockapi.io/shop');
    console.log(shops);
    let id = Math.floor(Math.random() * 101);
    let newShop = {
      createdAt: "2021-07-27T09:32:46.083Z",
      name: "My Vodafone shop no:" + id,
      avatar: "https://cdn.fakercloud.com/avatars/brandclay_168.jpg"
    }
    // let resp = await axios.post('https://60fffde9bca46600171cf670.mockapi.io/shop', newShop)

    let newShop1 = {
      createdAt: "2021-07-27T09:32:46.083Z",
      name: "My updated Vodafone shop no:" + id,
      avatar: "https://cdn.fakercloud.com/avatars/brandclay_168.jpg"
    }
    // try{
    let resp1 = await axios.put('https://60fffde9bca46600171cf670.mockapi.io/shop/2', newShop)
    // }
    // catch(e){
    //   console.log(e)
    // }
    let resp2 = await axios.delete('https://60fffde9bca46600171cf670.mockapi.io/shop/2')

    console.log(resp2);




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


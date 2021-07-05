import {useEffect ,useState } from "react";
import Shoplist from "./ShopList";

const Catagory = (props: any) => {
   const [catagoryName, setCatagoryName] = useState();

   const changeCatagoryName = (catagoryName:any) => {
    setCatagoryName(catagoryName);
    
   
}




 return (<div>
    <div>grocery 

     <button onClick={() =>changeCatagoryName("Grocery")}>shop</button>
    </div>
    <div>vegetable

    <button onClick={() =>changeCatagoryName("Vegetable")}>shop</button>
    </div>
    <div>fruit
    <button onClick={() =>changeCatagoryName("Fruit")}>shop</button>
    </div>
    <div>you have selected {catagoryName} catagory</div>
    
    </div>
   
    
      
  );
};
export default Catagory;

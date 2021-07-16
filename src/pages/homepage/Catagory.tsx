import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


const Catagory = (props: any) => {
  const [catagoryName, setCatagoryName] = useState();
  let history = useHistory();
  const changeCatagoryName = (catagoryName: any) => {
    let link="/catagory/" + catagoryName;
    history.push(link)


  }




  return (<div>
    <div>grocery

      <button onClick={() => changeCatagoryName("Grocery")}>shop</button>
    </div>
    <div>vegetable

      <button onClick={() => changeCatagoryName("Vegetable")}>shop</button>
    </div>
    <div>fruit
      <button onClick={() => changeCatagoryName("Fruit")}>shop</button>
    </div>
    <div>you have selected {catagoryName} catagory</div>
  </div>



  );
};
export default Catagory;

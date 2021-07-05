
 const Shoplist = (props: any) => {
    let shop1=["Bigbasket","Freshmart","Groffers"];
    let shop2=["Bigbazar","citymart","spencers"];
    let shop3=["Fruitmart","froote","Reliance"];
  
  
      return(
          <div>
          <h1>please select your shop</h1>
          <div>{shop1}</div>
          <div>{shop2}</div>
          <div>{shop3}</div>
           </div>
      )
  };
  
  
  export default Shoplist;
  
import React from "react";
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const[count,setCounert] = React.useState(0);
    const handleClick = (value)=>{
      setCounert(count+value)
    }
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
      <button onClick={()=>handleClick(-1)}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={()=>handleClick(1)}>+</button>
  </div>
  </>;
};
export default CartButton;

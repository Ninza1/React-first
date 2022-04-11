import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"

const conStyling = {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    padding: "15px",
    gridGap: "20px"

}



const GroceryDetails = ()=>{
// console.log(data)
 
    return(
        <>
        <h1>Groceries</h1>
        <div className="container" style={conStyling}>
            {/* map through the data and display the cards */}
        {
            data.map((elm)=>(
                
            //  console.log(elm)
                
                 <GroceryItem {...elm}/>
                
            
            ))
        }
        </div>
        </>
    )

}
export default GroceryDetails
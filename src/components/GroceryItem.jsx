
// reusable card component

const gryStyling = {
  border: "2px solid grey",
  borderRadius: "10px"
}
const GroceryItem = (props) => {
  // console.log(props)
  // let {imgURL, title, sellingPrice} = props
  return <>
        <div style={gryStyling}>
          <img src={props.imgURL} alt="" />
          <h4>{props.title}</h4>
          <div>
            <p>Rs {props.sellingPrice} </p> <p>{props.mrp}</p>
          </div>
          <button>Add to Cart</button>
        </div>
  </>

};
export default GroceryItem;

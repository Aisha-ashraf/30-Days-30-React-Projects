import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


const Product = (props) => {


    // eslint-disable-next-line react/prop-types
    const {id, productName, price, productImage } = props.data;
    const {addToCart ,cartItems} = useContext(ShopContext);
    const CartItemAmount = cartItems[id];

  
  return(
    <div className="product">
    <img src={productImage} />
    <div className="description">
      <p>
        <b>{productName}</b>
      </p>
      <p> ${price}</p>
    </div>
    <button className="addToCartBtn" onClick ={() => addToCart(id)} >  Add To Cart {CartItemAmount > 0 && <>({CartItemAmount})</>}</button>
      
  </div>

  ) ;
  


 
 
  
}

export default Product
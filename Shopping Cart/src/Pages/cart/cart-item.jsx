
const  CartItem = (props) => {
    const {productName, price, productImage } = props.data;
  return (
    <div className='CartItem'>
        <img src ={productImage} />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default CartItem
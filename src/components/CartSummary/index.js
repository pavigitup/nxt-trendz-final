import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalItems = cartList.length
      const totalPrice = cartList.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0,
      )
      return (
        <div className="summary-con">
          <div className="summary">
            <h1>
              Order Total: <span className="span">{totalPrice}/-</span>
            </h1>
            <p>{totalItems} Items in cart</p>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

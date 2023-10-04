import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import './Cart.css';
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, totalInCart, totalPrice, removeToCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) return (
    <div>
      <h1 className="text-white text-center mb-3">Cart Empty</h1>
      <Link to='/items' className="container d-flex text-center btn btn-primary justify-content-center">All Products</Link>
    </div>
  )

  return (
    <div className="container-fluid">
      <h1 className="text-white text-center mb-3">Cart</h1>
      {
        cart.map((item) => (
          <div className="cart-item p-4 my-3" key={item.id}>
            <h2 className="text-white cart-item-title m-0">{item.title}.</h2>
            <p className="text-white m-0">Quantity: {item.quantity}</p>
            <div className="price-container">
              <p className="text-white m-0">Price unit: ${item.price}</p>
              <p className="text-white m-0">Price total: ${item.price * item.quantity}</p>
            </div>
            <button className="remove-btn text-white" onClick={() => { removeToCart(item.id) }}>X</button>
          </div>
        ))
      }

      <h3 className="text-white text-center mb-3">Resume: {totalInCart()} Products.</h3>
      <h3 className="text-white text-center mb-3">Total price: ${totalPrice()}</h3>
      <Link to='/checkout' className="container-fluid d-flex text-center btn btn-success justify-content-center">Checkout</Link>
      <button onClick={clearCart} className="text-center btn btn-danger my-5">Clear Cart</button>
    </div>
  )
}

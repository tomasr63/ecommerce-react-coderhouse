import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
import './Checkout.css';

export const Checkout = () => {
  const [orderId, setOrderId] = useState('');
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const { register, handleSubmit } = useForm();

  const buy = (data) => {

    if(totalPrice() === 0) {
      return;
    }

    const order = {
      client: data,
      products: cart,
      resume: totalPrice()
    }

    const ordersRef = collection(db, 'ordenes');

    addDoc(ordersRef, order)
      .then(doc => {
        setOrderId(doc.id);
        clearCart();
      });
  }

  if (orderId) {
    return (
      <div className="ended-order-container">
        <h2 className="ended-order-title text-white">Thanks for buying!</h2>
        <p className="ended-order-message text-white">Your order id is: {orderId}</p>
        <Link to='/' className="btn btn-primary">Go home</Link>
      </div>
    )
  }

  return (
    <div className="container-fluid">
      <h1 className="fs-1 text-white">Checkout</h1>
      <div className="container">
        <form onSubmit={handleSubmit(buy)} className="form-checkout">

          <input type="text" required placeholder="Nombre" {...register("nombre")} />
          <input type="email" required placeholder="E-mail" {...register("email")} />
          <input type="phone" required placeholder="Telefono" {...register("telefono")} />

          <button type="submit" className="btn btn-success">Buy for ${totalPrice()}</button>

        </form>

      </div>
    </div>
  )
}

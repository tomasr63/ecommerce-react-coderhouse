import { useContext } from 'react';
import './CartWidget.css';
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

  const { totalInCart } = useContext(CartContext);

  return (
    <NavLink to="/cart" className='cart-container me-3'>
        <i className="bi bi-cart3 cart-icon"></i>
        <p className='cart-num'>{totalInCart()}</p>
    </NavLink>
  )
}
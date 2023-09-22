import { useContext } from 'react';
import './Home.css';
import { CartContext } from '../../context/CartContext';

export const Home = () => {

  const user = useContext(CartContext);

  return (
    <div className='home-container'>
      <h1>Ecommerce</h1>
      <h1>Home</h1>
      <h1>{user}</h1>
    </div>
  )
}

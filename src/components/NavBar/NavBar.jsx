import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/"><h3 className="logo">Ecommerce</h3></NavLink>

            <div className="cats-container">
                <ul className='cats-list'>
                    <li><NavLink className='category' to="/items">Todos</NavLink></li>
                    <li><NavLink className='category' to="/items/category/mens">Mens</NavLink></li>
                    <li><NavLink className='category' to="/items/category/womens">Womens</NavLink></li>
                    <li><NavLink className='category' to="/items/category/jewelery">jewelery</NavLink></li>
                    <li><NavLink className='category' to="/items/category/electronics">Electronics</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
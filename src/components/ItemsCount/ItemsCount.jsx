import { useState } from 'react';
import './ItemsCount.css';
import { Link } from 'react-router-dom';

export const ItemsCount = ({ quantity, handleCountLess, handleCountMore, handleAddCart }) => {

    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        handleAddCart();
        setAdded(true);
    }

    return (
        <>
            <div className='item-count'>

                <div className="btns-container">

                    <div className="mas-menos">
                        <button onClick={handleCountLess} className='btn btn-danger btn-count' style={added ? { display: 'none' } : { display: 'block' }}>-</button>
                        <p className='count-number'>{quantity}</p>
                        <button onClick={handleCountMore} className='btn btn-success btn-count mas' style={added ? { display: 'none' } : { display: 'block' }}>+</button>
                    </div>
                    {
                        added ? <Link className='btn btn-success' to='/cart'>Go Cart <i className="bi bi-cart3"></i></Link> : <button className='btn btn-secondary' onClick={handleAdd}>Add to Cart</button>
                    }

                </div>
            </div>
        </>
    )
}

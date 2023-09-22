import './ItemsCount.css';

export const ItemsCount = ({ cantidad, handleCountLess, handleCountMore, handleAddCart }) => {

    return (
        <>
            <div className='item-count'>

                {/* <h5 className='count-number'>cantidad: {count}</h5> */}
                <div className="btns-container">

                    <div className="mas-menos">
                        <button onClick={handleCountLess} className='btn btn-danger btn-count'>-</button>
                        <p className='count-number'>{cantidad}</p>
                        <button onClick={handleCountMore} className='btn btn-success btn-count mas'>+</button>
                    </div>
                    <button className='btn btn-secondary' onClick={handleAddCart}>Add to Cart</button>

                </div>
            </div>
        </>
    )
}

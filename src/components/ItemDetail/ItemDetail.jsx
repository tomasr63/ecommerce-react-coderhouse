import { ItemsCount } from "../ItemsCount/ItemsCount";
import { useContext, useState } from 'react';
import './ItemDetail.css';
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ item }) => {

    
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const handleCountMore = () => {
        quantity < item.stock && setQuantity((prev) => prev + 1);
    }

    const handleCountLess = () => {
        quantity > 1 && setQuantity((prev) => prev - 1);
    }

    return (
        <div className='container py-3' style={{minHeight: "50vh"}}>
            <div className="card mx-auto item d-flex flex-row align-items-center" style={{ width: "50rem", minHeight: "350px" }}>
                <img className='img' src={item.image} alt={item.title} style={{ width: "18rem", height: "100%" }} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h2 className="card-title">{item.title}</h2>
                    <h3 className="text-success">$ {item.price}</h3>
                    <p className="card-text mb-5">Cat: {item.category}</p>
                    <ItemsCount 
                        quantity={quantity} 
                        handleCountLess={handleCountLess} 
                        handleCountMore={handleCountMore} 
                        handleAddCart={() => { addToCart(item, quantity) }}
                    /> 
                </div>
            </div>
        </div>
    )
}

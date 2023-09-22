// import { Link } from "react-router-dom;"
import { ItemsCount } from "../ItemsCount/ItemsCount";
import { useState } from 'react';
import './ItemDetail.css';

export const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1);

    const handleCountMore = () => {
        cantidad < item.stock && setCantidad((prev) => prev + 1);
    }

    const handleCountLess = () => {
        cantidad > 1 && setCantidad((prev) => prev -1);
    }

    const handleAddCart = () => {
        console.log({ ...item, cantidad });
    }


    return (
        <div className='container py-3' style={{minHeight: "50vh"}}>

            <div className="card mx-auto item d-flex flex-row align-items-center" style={{ width: "50rem", minHeight: "350px" }}>
                <img className='img' src={item.image} alt={item.title} style={{ width: "18rem", height: "100%" }} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h2 className="card-title">{item.title}</h2>
                    <h3 className="text-success">$ {item.price}</h3>
                    <p className="card-text mb-5">Cat: {item.category}</p>
                    
                    {/* <Link to={`/item/id/${item.id}`} className="btn btn-success">Buy</Link> */}
                    <ItemsCount cantidad={cantidad} handleCountLess={handleCountLess} handleCountMore={handleCountMore} handleAddCart={handleAddCart} /> 
                </div>
            </div>
        </div>
    )
}

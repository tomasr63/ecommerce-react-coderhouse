import { Link } from "react-router-dom";
import './Item.css';

export const Item = ({ item }) => {
    return (
        <div className='p-2'>

            <div className="card mx-auto item" style={{ width: "18rem", height: "100%" }}>
                <div className="img-container">
                    <img className='mx-auto img' src={item.image} alt={item.title} style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title fs-6">{item.title}</h5>
                    <p className="card-text">Cat: {item.category}</p>
                    <Link to={`/item/id/${item.id}`} className="btn btn-primary">View more</Link>
                </div>
            </div>
        </div>
    )
}

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pedirDatos, pedirXCategoria } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { category } = useParams();

    const asyncFunction = category ? pedirXCategoria : pedirDatos;

    useEffect(() => {
        setLoading(true);
        asyncFunction(category)
            .then(res => {
                setProducts(res)
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [category]);

    if(loading) {
        return <h1 className='text-center text-white'>Loading...</h1>
    } 
        
    return (
        <div className='item-list-container container text-center'>
            <ItemList items={products} />
        </div>
    )
}

import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { pedirDatos, pedirXCategoria } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const { category } = useParams();

    const asyncFunction = category ? pedirXCategoria : pedirDatos;

    useEffect(() => {
        setLoading(true);

        asyncFunction(category)
            .then((res) => setProductos(res))
            .finally(setLoading(false));

    }, [category])

    if (loading) return <h1 className='text-center'>Loading...</h1>

    return (
        <div className='item-list-container container text-center'>
            <ItemList items={productos} />
        </div>
    )
}

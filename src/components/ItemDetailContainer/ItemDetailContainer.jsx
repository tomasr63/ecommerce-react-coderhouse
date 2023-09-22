import { useEffect, useState } from "react"
import { pedirXId } from "../../helpers/pedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        pedirXId(id)
            .then((res) => {
                setItem(res);
            })
            .finally(setLoading(false));
    }, [id]);

    if (loading) return <h1 className='text-center'>Loading...</h1>

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

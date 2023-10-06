import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';


export const pedirDatos = async () => {
    const prodsRef = collection(db, 'productos');

    return getDocs(prodsRef)
        .then((snapshots) => {
            return snapshots.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            });
        })
}

export const pedirXId = async (id) => {
    const prodId = doc(db, 'productos', id);
    return getDoc(prodId)
        .then((snapshot) => {
            return { id: snapshot.id, ...snapshot.data() }
        });
}

export const pedirXCategoria = (category) => {
    const prodXCatRef = query(collection(db, 'productos'), where('category', '==', category));

    return getDocs(prodXCatRef)
        .then((snapshots) => {
            return snapshots.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            } );
        })
}
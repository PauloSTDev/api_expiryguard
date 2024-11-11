"user client";

import { useEffect, useState} from "react";
import {onSnapshot, query} from "@firebase/firestore";



const Read = () => {
    const [todos, setTodos] = useState([])

    useEffect(( )  => {
        const collectionRef = db.collection('medicines')
        const q = query(collectionRef, orderBy('id', 'desc'))
        
        const medicines = onSnapshot(q, (querySnapshot) => {
            setTodos(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id})))
        })
        return medicines;
    }, [])

    return (
        <div>
            {Read.map(medicine => <div key={medicine.id}>{medicine.name}</div>)}
        </div>
    )
}

export default Read;
'use client';

import { db } from "../services/firebase";
import { collection, addDoc } from "@firebase/firestore";

function Write() {
    const saveData = async () => {
        try {

            // const docRef = await db.collection.add('medicines').setDoc({
            //     name: "Paracetamol",
            //     id: 1,
            //     price: 10,
            // });
        
            const result =  await addDoc(collection(db, "medicines"), {
                name: "Paracetamol",
                id: 1,
                price: 10,
            });

        }
        catch (error){
            console.log('Error adding', error)
        }    
    }
    return (
        <div>
            <h1>Save</h1>
            <button onClick={saveData} >saveData</button>
        </div>
    );
}
export default Write;


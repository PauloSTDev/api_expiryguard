import { NextResponse } from "next/server";
import { dbFirestore } from "../services/firebase";
import { collection, addDoc } from "@firebase/firestore";

export async  function GET() {
  return NextResponse.json({ message: 'Realize um post com o JSON com seus medicamentos'})
}

export async function POST(request: Request) {

  const data = await request.json();
  try {
    for (let index = 0; index < data.medicines.length; index++) {
      const element = data.medicines[index];
      await addDoc(collection(dbFirestore, 'medicines'), {
        name: element.name,
        id: element.id,
        price: element.price,
        description: element.description,
        quantity: element.quantity,
        betterBefore: element.betterBefore,
    });
  }
  }

  catch (error) {
      console.log('Error adding', error)
  } 
  
  return NextResponse.json(
      {data, message: 'Data received'}
  )
}
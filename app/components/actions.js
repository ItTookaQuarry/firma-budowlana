'use server'
import { redirect } from 'next/navigation'
import { text } from 'stream/consumers'
import { database, auth } from "./firebase";
import { getDocs, collection, doc, updateDoc,setDoc,getCountFromServer } from "firebase/firestore";
export async function myAction(formData) {

    const coll = collection(database, "pytania");
    const snapshot = await getCountFromServer(coll);
const id=snapshot.data().count.toString()










    const pytanie = doc(database, "pytania", id);





const email=  formData.get("email")
const number=  formData.get("number")
const textarea= formData.get("text") 
await setDoc(pytanie, { email: email, telefon: number, text: textarea });

redirect(`/?pytanie=true`)
}
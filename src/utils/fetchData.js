import { BASE_URL } from "../constants/constants";


export const fetchData = async() =>{
    try{
     const res = await fetch(`${BASE_URL}/all`);
     if(!res.ok)throw new Error("Could not  Feach data");
     return res.json();
    } catch (error){
     console.log(error.masage);
    }
     
   };

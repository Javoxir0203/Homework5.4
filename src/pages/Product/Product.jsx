import React from "react";
import { useLoaderData } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
import CountryCard from "../../components/CountryCard";


const Product = () =>{
    const products = useLoaderData();
    console.log(products);
    return(
        <div>
            <div className="container mx-auto">
                <div className="grid  grid-cols-4 gap-5 mt-5">
              {
                 products?.map((country) =>(
                    <CountryCard 
                      name={country.name.common} 
                      flag={country.flags.png}
                      population ={country.population}
                      alt={country.flags.alt}
                      capital ={country.capital}
                      />
                    )) 
              } 
                </div>
            </div>
        </div>
    )
}
export default Product


 export const ProductLoader = async () => {
   const res = await fetch(`${BASE_URL }/all`);
   if(!res.ok) return new Error("Could not fetch Products")

    return res.json();
}
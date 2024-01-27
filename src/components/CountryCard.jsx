import React from "react";

const CountryCard = ({alt,name, capital,population,flag}) =>{
    return(
     <>
     <div className="card bg-white shadow-md">
     <img src={flag} 
      alt={alt}  
      className="w-full h-60 object-cover"
       />
        <div className="card-content">
        <h2 className="text-2xl  font-semibold mb-3 text-[gray]">
        {name}</h2>

         <p className=" mb-3 text-[blue]">Population:{population}</p>
         <p className=" mb-3 text-[green]">Capital:{capital}</p>
         </div>
        </div>
     </>
    )
}
 
export default CountryCard

{/* <Header/>
<main className="container mx-auto px-4 mt-8">
 <SearchInput/>
 <CountryList/>
</main>. */}
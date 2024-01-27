import React from "react";


const SearchInput = () =>{
    return(
        <section className="flex items-center justify-between">
      <div className="flex items-center justify-between border w-[450px]  shadow-md ">
      <label htmlFor="SearchInput">
      <i className="fa-solid fa-magnifying-glass p-3"></i>
      </label>
        <input type="text" 
        id="SearchInput"
        placeholder="Search for a country..."
         className="px-4 py-2 w-full outline-none block"/>
      </div>
      <select name="counrties" id="counrties" className=" py-3 w-80 text-xl border">
        <option value="all" defaultValue disabled>Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europa">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
    )
}
export default SearchInput
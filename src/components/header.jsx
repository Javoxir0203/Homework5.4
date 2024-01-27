import React from "react";
import { NavLink } from "react-router-dom";


const Header =  () =>{
    return(
      <nav className="mt-5 ml-10">
          <ul>
              <li className="space-x-5">
                <NavLink to="/">Home</NavLink>
                 <NavLink to="about">About</NavLink>
                 <NavLink to="Services">Services</NavLink>
                 <NavLink to="Product">Product</NavLink>
              </li>
          </ul>
      </nav>
    )

}
export default Header;


{/* <header className="py-4 shadow-md">
<div className=" container mx-auto px-4 flex items-center justify-between">
<h1 className="text-3xl font-semibold">Where in the World</h1>
<button className="flex items-center justify-between">
<i className="fa-solid fa-moon mr-3 text-[25px]"></i>
<span className="text-3xl font-semibold">Dark mode</span>

</button>
</div>
</header> */}
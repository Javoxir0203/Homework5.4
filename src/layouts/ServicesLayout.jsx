import React from "react";
import { NavLink, Outlet } from "react-router-dom";


const ServicesLayout = () =>{
    return(
         <div className="services space-x-5  ml-10 text-[green] text -3xl">
            <NavLink to="web"> Web Development</NavLink>
            <NavLink to="mobile"> Mobile Development</NavLink>

            <section>
                <Outlet/>
            </section>
         </div>
    )
}
export default ServicesLayout 
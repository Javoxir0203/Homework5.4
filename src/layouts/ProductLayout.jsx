import React from "react";
import { Outlet } from "react-router-dom";

const ProductLayout  =() =>{
    return(
        <div>
            <h1 className="ml-20 text-4xl text-[cyan]">MacBook</h1>
            <section>
                <Outlet/>
            </section>
        </div>
    )
}
export default ProductLayout
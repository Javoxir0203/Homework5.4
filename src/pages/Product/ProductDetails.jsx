import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () =>{
    const {id} = useParams
    return(
        <div className=" ml-10 text-2xl text-[yellow]">ProductDetails:{id}</div>
    )
}
export default ProductDetails
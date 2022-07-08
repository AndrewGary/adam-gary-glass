import React from "react";
import {Link} from 'react-router-dom'

const ProductThumbnail = props => {

    const { product } = props;
    
    const handleClick = e => {
        console.log(product._id);
    }

    return (
        <Link to={`/productDetails/${product._id}`} onClick={handleClick} className="flex-col justify-center border border-black w-1/4 h-auto m-8">
            <h1>{product.name}</h1>
            <div className="flex justify-center">
                <img src={product.defaultImage} alt={product.name} className=" w-32 h-auto border border-red-500"/>
            </div>
            <div>
                ${product.price}
            </div>
            <div className="flex justify-evenly border border-black">
                <button className="border border-gray-500 rounded-md p-1 w-1/3">Add To Cart</button>
                <button className="border border-gray-500 rounded-md p-1 w-1/3">Add To Cart</button>
            </div>
        </Link>
    )
}

export default ProductThumbnail;
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductThumbnail from "./ProductThumbnail";

const SpecificCategory = props => {
    const { category } = props;

    const [ allProducts, setAllProducts ] = useState([]);

    useEffect(() => {
        axios.get(process.env.NODE_ENV === 'production' ? `https://adamgaryglass.herokuapp.com/api/products/${category}` : `http://localhost:9000/api/products/${category}`)
        .then(resp => {
            console.log(resp)
            setAllProducts(resp.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    useEffect(() => {

    }, [allProducts])

    return(
        <>
            <h1>{category}</h1>
            {/* // Product thumbnail container */}
            <div className="w-full justify-center flex border border-green-500">
                <div className="border border-black w-3/4 flex justify-center">
                    {allProducts.map(product => {
                        return <ProductThumbnail product={product}/>
                    })}
                </div>
            </div>
        </>
    )


}

export default SpecificCategory;
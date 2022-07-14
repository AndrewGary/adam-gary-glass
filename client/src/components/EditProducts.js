import React, { useState, useEffect} from "react";
import axios from 'axios';

const EditProducts = () => {

    const [ products, setProducts ] = useState([])

    useEffect(() => {
        axios.get(process.env.NODE_ENV === 'production' ? '/api/products/allProducts' : 'http://localhost:9000/api/products/allProducts')
        .then(resp => {
            console.log(resp);
            setProducts(resp.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    const Edit = () => {
        <button className="w-full h-full">Edit</button>
    }

    return(
        <div className="flex justify-center">
            <div className="flex flex-col items-center w-3/4">
                <h1>All Products</h1>
                <table className="w-3/4">
                    <tr>
                        <th className="border border-black m-8">Name</th>
                        <th className="border border-black m-8">Date added</th>
                        <th className="border border-black m-8">Image</th>
                        <th className="border border-black m-8">Actions</th>
                    </tr>
                    {products.map(product => {
                        return(
                            <tr>
                                <td className="border border-gray-500">{product.name}</td>
                                <td className="border border-gray-500">{product.createdAt}</td>
                                <td className="border border-gray-500"><img src={product.defaultImage} /></td>
                                <td className="border border-gray-500 flex flex-col items-center justify-center"><Edit /></td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default EditProducts;
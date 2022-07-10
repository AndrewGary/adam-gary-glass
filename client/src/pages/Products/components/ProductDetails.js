import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const ProductDetails = props => {

    const { id } = useParams();

    const [ product, setProduct ] = useState('');

    console.log('product: ', product);

    console.log('id: ', id);

    useEffect(() => {
        axios.get(`http://localhost:9000/api/products/productDetails/${id}`)
        .then(resp => {
            setProduct(resp.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div>
            { product ? <div>hello</div> : null}
        </div>
    )
}

export default ProductDetails;
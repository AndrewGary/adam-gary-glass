import React, {useState, useEffect} from "react";
import axios from 'axios';

const PromoSection = () => {

    const [ newWork, setNewWork ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:9000/api/products/newWork')
        .then(resp => {
            setNewWork(resp.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <>
            <div className=" bg-slate-500 w-3/4">
                <h2 className="my-4">New Work</h2>
            </div>
        </>
    )
}

export default PromoSection;
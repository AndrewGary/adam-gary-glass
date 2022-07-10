import React, {useState, useEffect} from "react";
import axios from 'axios';

const PromoSection = () => {

    const [ newWork, setNewWork ] = useState([])
    const [ productIndex, setProductIndex ] = useState(0);

    const increaseProductIndex = () => {
        if(productIndex === 4){
            setProductIndex(0);
        }else{
            setProductIndex(productIndex + 1);
        }
    }

    useEffect(() => {
        axios.get(process.env.NODE_ENV === 'production' ? '/api/products/newWork' : 'http://localhost:9000/api/products/newWork')
        .then(resp => {
            setNewWork(resp.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <>
            {/* {console.log('newWork[0].images[0]', newWork[0].images[0])} */}
            <div className="w-3/4">
                <h2 className="my-4">New Work</h2>
                {newWork.length !== 0 && productIndex !== null &&
                    <div className="flex justify-evenly mb-4 border border-black">
                        <div className="flex flex-col justify-evenly items-center w-1/2 border">
                            <span className="border-b border-gray-300">
                                {newWork[productIndex].name}
                            </span>

                            <span className="border-b border-gray-300">
                                {newWork[productIndex].description}
                            </span>

                            <span className="border-b border-gray-300">
                                ${newWork[productIndex].price}
                            </span>
                            
                            <a href={`/productDetails/${newWork[productIndex]._id}`} >
                                <button className="border border-gray-300 rounded-md hover:border-gray-500 w-32 py-2">
                                    View Details
                                </button>
                            </a>
                        </div>
                        <div className="flex w-1/2">
                            <img className=" w-auto h-60" src={newWork[productIndex].defaultImage} alt={newWork[productIndex].name} />
                        </div>
                        {/* <div className="flex items-center w-5">
                            <img className=" w-3.5" onClick={increaseProductIndex} src={'/RightArrow.svg'} />
                        </div> */}
                    </div>
                }
            </div>
        </>
    )
}

export default PromoSection;
import React, { useState } from "react";

const AddToEmailList = () => {

    const [ email, setEmail ] = useState('')

    const handleChange = e => {
        setEmail(e.target.value);
    }

    const handleSubmit = () => {
        
    }

    return (
        <div className="flex flex-col items-center">
            <h2>Get notified via email of upcoming drops</h2>
            <input 
                className="flex border border-gray-300 pl-3py-1 justify-center my-2"
                type='email'
                placeholder="Email"
                onChange={handleChange}
                value={email}
            />
            <button onClick={handleSubmit} className="border border-gray-300 rounded-md w-20">
                Submit
            </button>
        </div>
    )
}

export default AddToEmailList;
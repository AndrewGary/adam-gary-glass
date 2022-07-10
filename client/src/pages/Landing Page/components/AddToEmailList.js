import React, { useState } from "react";
import axios from 'axios';

const AddToEmailList = () => {

    const [ email, setEmail ] = useState('')
    const [ addEmailResp, setAddEmailResp ] = useState('');

    const handleChange = e => {
        setEmail(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(process.env.NODE_ENV === 'production' ? '/api/emailList' : 'http://localhost:9000/api/emailList', {email: email})
        .then(resp => {
            console.log("resp: ", resp);
            if(resp.status === 200){
                setAddEmailResp('Thanks for signing up for our email list!')
                setEmail('')
            }
        })
        .catch(error => {
            setAddEmailResp('The email you entered is already on the list!')
            setEmail('');
            console.log(error);
        })
    }

    return (
        <div className="flex flex-col items-center">
            <h2>Get notified via email of upcoming drops</h2>
            <h2 className="text-red-500">{addEmailResp}</h2>
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
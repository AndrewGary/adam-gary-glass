import React, { useState } from 'react'

const initialFormValues = {
    firstName: '',
    lastName: '',
    userName: '',
    email:'',
    password:'',
    address: '',
    city: '',
    state: '',
    zip: '',
    phoneNumber: ''
}

const Register = () => {

    const [ formValues, setFormValues ] = useState(initialFormValues);

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formValues);
    }

    const checkIfTheSame = e => {
        if(e.target.name === 'confirmEmail'){
            if(e.target.value === formValues.email){
                console.log('both emails are the same');
            }else{
                console.log('both emails are not the same');
            }
        }else if(e.target.name === 'confirmPassword'){
            if(e.target.value === formValues.password){
                console.log('both passwords are the same');
            }else{
                console.log('both passwords are not the same');
            }
        }
    }

    return (
        <div className='w-3/4 border border-black flex-col'>
            <div className='border border-black w-3/4'>
                <div className='border border-gray-300 mb-3 flex-col'>
                    <label className='block' htmlFor=''>First Name</label>
                    <input
                        type='text'
                        id=''
                        name='firstName'
                        onChange={handleChange}
                        className='border border-gray-500 rounded-md mb-3'
                    />
                </div>
                
                <div className='border border-gray-300 mb-3'>
                    <label htmlFor=''>Last Name</label>
                    <input
                        type='text'
                        id=''
                        name='lastName'
                        onChange={handleChange}
                        className='border border-gray-500 rounded-md mb-3'
                    />
                </div>
                
                <div className='border border-gray-300 mb-3'>
                    <label htmlFor=''>Username</label>
                    <input
                        type='text'
                        id=''
                        name='userName'
                        onChange={handleChange}
                        className='border border-gray-500 rounded-md mb-3'
                    />
                </div>
                
                <div className='border border-gray-300 mb-3'>
                    <label htmlFor=''>Email</label>
                    <input
                        type='text'
                        id=''
                        name='email'
                        onChange={handleChange}
                        className='border border-gray-500 rounded-md mb-3'
                    />
                </div>
                
                <div className='border border-gray-300 mb-3'>
                    <label htmlFor=''>Confirm Email</label>
                    <input
                        type='text'
                        id=''
                        name='confirmEmail'
                        onChange={checkIfTheSame}
                        className='border border-gray-500 rounded-md mb-3'
                    />
                </div>
                
                <div className='border border-gray-300 mb-3'>
                    <label htmlFor=''>Password</label>
                    <input
                        type='text'
                        id=''
                        name='password'
                        onChange={handleChange}
                        className='border border-gray-500 rounded-md mb-3'
                    />
                </div>
                
                <div className='border border-gray-300 mb-3'>
                    <label htmlFor=''>Confirm Password</label>
                    <input
                        type='text'
                        id=''
                        name='confirmPassword'
                        onChange={checkIfTheSame}
                        className='border border-gray-500 rounded-md mb-3'
                    />
                </div>
                
                <div className='border border-gray-300 mb-3'>
                    <label htmlFor=''>Address</label>
                    <input
                        type='text'
                        id=''
                        name='address'
                        onChange={handleChange}
                        className='border border-gray-500 rounded-md mb-3'
                    />
                </div>
                
                <div className='border border-gray-300 mb-3'>
                    <label htmlFor=''>City</label>
                    <input
                        type='text'
                        id=''
                        name='city'
                        onChange={handleChange}
                        className='border border-gray-500 rounded-md mb-3'
                    />
                </div>
                
                <div className='border border-gray-300 mb-3'>
                    <label htmlFor=''>State</label>
                    <input
                        type='text'
                        id=''
                        name='state'
                        onChange={handleChange}
                        className='border border-gray-500 rounded-md mb-3'
                    />
                </div>
                
                <div className='border border-gray-300 mb-3'>
                    <label htmlFor=''>Zip Code</label>
                    <input
                        type='text'
                        id=''
                        name='zip'
                        onChange={handleChange}
                        className='border border-gray-500 rounded-md mb-3'
                    />
                </div>
                
                <div className='border border-gray-300 mb-3'>
                    <label htmlFor=''>Phone Number</label>
                    <input
                        type='text'
                        id=''
                        name='phoneNumber'
                        onChange={handleChange}
                        className='border border-gray-500 rounded-md mb-3'
                    />
                </div>

                <button onClick={handleSubmit}>Submit</button>
            </div>
            
            
        </div>
    )
}

export default Register;
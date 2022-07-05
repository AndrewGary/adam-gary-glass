import React, { useState, useEffect } from "react";
import axios from "axios";
import { productCategories } from '../siteUtils/productCategories';

const initalFormValues = {
  name: '',
  description: '',
  price: null,
  category: '',
  colors: [],
  images: []
};

const AddNewProductForm = () => {

  const handleBlur = e =>{
    setFormValues({
      ...formValues,
      colors: e.target.value.split(', ')
    })
  }

  const handleChange = async (e) => {
    if(e.target.name === 'fileSelector'){
      const filesForState = [];
      const reader = new FileReader();
      for( const file of e.target.files){
        await new Promise(resolve => {
          reader.onload = e => {
            filesForState.push(e.target.result);
            resolve();
          }
          reader.readAsDataURL(file);
        })
      }
      setImagePreviews(filesForState);
      setFormValues({
        ...formValues,
        images: filesForState
      })
    } else{
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(process.env.NODE_ENV === 'production' ? 'https://adam-gary-glass.herokuapp.com/api/products' :'http://localhost:9000/api/products', {
      method: 'POST',
      body: JSON.stringify({data: formValues}),
      headers: {'Content-Type': 'application/json'}
    })
    .then(resp => {
      console.log('Upload successful');
    })
    .catch(error => {
      console.log(error);
    })
  };

  const [formValues, setFormValues] = useState(initalFormValues);
  const [ imagePreviews, setImagePreviews ] = useState([]);

  useEffect(() => {
    console.log('imagePreviews: ', imagePreviews);
  }, [imagePreviews])

  return (
    <>
      {/*
        This example requires updating your template:
        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="temp-icon.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Add New Product
            </h2>
          </div>
          <form className="mt-8 space-y-6" >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Product Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="border border-gray-300 placeholder-gray-500 my-2 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Product Name"
                  onChange={handleChange}
                />
              </div>
              
              <div class="mb-3 w-full">
                <label
                  htmlFor="description"
                  class="sr-only"
                >
                  Product Description
                </label>
                <textarea
                  required
                  name='description'
                  className="placeholder-gray-500 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:border-indigo-500 focus:outline-none"
                  id="description"
                  rows="3"
                  placeholder="Product Description"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <label htmlFor="price" className="sr-only">
                  Price
                </label>
                <input
                  required
                  type="number"
                  name="price"
                  id="price"
                  className="border border-gray-300 placeholder-gray-500 my-2 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Price $"
                  onChange={handleChange}
                />
              </div>

              <div className="flex border border-gray-300 rounded-md px-3 py-2 justify-start">
                <label htmlFor="category" className=" text-gray-500">
                    Category
                </label>
                <select required id="category" name="category" className="text-gray-500 border border-gray-400 ml-4" onChange={handleChange}>
                    <option>--Select a Category--</option>
                    {productCategories.map(category => {
                      return <option value={`${category.name}`}>{category.name}</option>
                    })}
                </select>
              </div>

              <div className="mb-3 w-full">
                <label
                  htmlFor="colors"
                  className="sr-only"
                >
                  Colors Used
                </label>
                <textarea
                  name='colors'
                  className="placeholder-gray-500 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:border-indigo-500 focus:outline-none"
                  id="colors"
                  rows="3"
                  placeholder='Separate colors with a comma.'
                  onBlur={handleBlur}
                ></textarea>
              </div>

              <div>
                <div className="border border-red-500 flex items-center justify-evenly">
                  {imagePreviews.length > 0 && (
                    imagePreviews.map(image => {
                      return <div className="w-14 h-14 border border-green-600"><img src={`${image}`} alt='idk'/></div>
                    })
                  )}
                </div>
                <label htmlFor="fileSelector" className=" text-gray-500">
                    Select Pictures
                    <input
                    onChange={handleChange}
                    name="fileSelector"
                    id="fileSelector"
                    type="file"
                    multiple
                    className="border border-gray-300 placeholder-gray-500 my-2 block w-full px-3 py-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    />
                </label>
              </div>


            </div>

            <div>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSubmit}
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewProductForm;
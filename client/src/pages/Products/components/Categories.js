import React from "react";
import { productCategories } from '../../../siteUtils/productCategories'

const Categories = props => {

    const { setSelectedCategory } = props

    const handleCategorySelection = e => {
        setSelectedCategory(e.target.textContent);
      }

    const index = 0;

    return (
        <>
        <div className="flex flex-col items-center md:hidden">
          <div className=" w-5/6">
          {productCategories.map(category => {
            return <div onClick={handleCategorySelection} className="my-2 py-3 border font-bold border-gray-300 hover:border-gray-500">
              {category.name}
            </div>
          })}
          </div>
        </div>

        <div className="hidden md:flex border border-red-900  justify-center">
          <div className="w-3/4">
            {/* <img src='/SherlockDefaultPhoto.jpeg' /> */}
            <h1 className=" my-4 text-3xl border-b-2 border-gray-300 pb-2">Collections</h1>
            {/* Collections conatiner */}
            <div className="flex flex-wrap justify-center w-full">
              {productCategories.map((category) => {
                return (
                  <div onClick={handleCategorySelection} className={`${category.backgound} bg-center bg-cover 
                    flex justify-center items-center m-5 w-40 h-40 border border-gray-200 text-xl font-bold
                    hover:font-extrabold hover:border-gray-400`}>
                    {category.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </>
      );
}

export default Categories;
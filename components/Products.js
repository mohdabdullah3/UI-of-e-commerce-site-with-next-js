import React from 'react'
import Product from './Product'
import data from "./items.json"

const Products = () => {

   return (
      <>
      <h3 className='text-center'>Fabrics</h3> 
      <div className='m-2 d-flex flex-wrap justify-content-around'>
         {
            data && data.map(item => {
               return(
                  <div key={item.id}>
                     <Product img={item.img} title={item.title} price={item.price} />
                  </div>
               )
            })
         }
      </div>
      </>
   )
}

export default Products
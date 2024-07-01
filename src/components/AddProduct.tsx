import { product } from '@/models/productModel'
import React from 'react'
import { useDispatch } from 'react-redux'
import {addNewProduct,clearProduct, fetchProducts} from '../pages/products/product_slice'
import { AppDispatch } from '@/pages/store'


function AddProduct() {
    const dispatch = useDispatch<AppDispatch>()

    
const productData:product[]=[
    {
        id:1,
        title:'t shirt'+new Date()
    
    },
    {
        id:2,
        title:'t shirt Men'+new Date()
    
    }
]
   const onSetProduct=()=>{
    dispatch(addNewProduct(productData))

    }


    const onFetchProduct=()=>{
        dispatch(fetchProducts(10))
    }
  return (
    <div>
        <h1>add Product</h1>
        <button onClick={onSetProduct}>Add product</button>
        <button onClick={onFetchProduct}>Fetch Api Product</button>
    </div>
  )
}

export default AddProduct
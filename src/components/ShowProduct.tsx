import { product } from '@/models/productModel'
import { RootState } from '@/pages/store'
import React from 'react'
import { useSelector } from 'react-redux'

function ShowProduct() {
    const products = useSelector((state: RootState) => state.products.newProduct)
    const isLoading = useSelector((state: RootState) => state.products.isProgress)
  
  
  return (
    <div>
        <h1>Products</h1>
        {isLoading?<h1>Hai thi is Loading</h1>:null}
        {
            products&&products.map((p:product)=>{
                return <h3>{p.title}</h3>
            })
        }
    </div>
  )
}

export default ShowProduct
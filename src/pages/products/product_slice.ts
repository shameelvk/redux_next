import { product } from "@/models/productModel"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface productState {
    newProduct:product[],
    offerProduct:product[],
    isProgress:boolean,
    isError?:any
  }

const initialState: productState = {
   newProduct:[],
   offerProduct:[],
   isProgress:false
  

  }


  export const fetchProducts = createAsyncThunk(
    'product/fetchProduct',
    async (limit: number, thunkAPI) => {
      const response = await fetch('https://fakestoreapi.com/products?limit='+limit)
      return response.json()
    },
  )
  export const productSlice=createSlice({
    initialState,
    name:"products",
    reducers:{
        addNewProduct:(state,action)=>{
            state.newProduct=action.payload;
        
        },
        addNewOfferProduct:(state,action)=>{
            state.offerProduct=action.payload
        },
        clearProduct:(state)=>{
            state.newProduct=[]
        }
    },
    extraReducers:(builder)=>{
      builder.addCase(fetchProducts.pending,(state,action)=>{
        state.isProgress=true,
        state.newProduct=[]
        
    })
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
      state.isProgress=false,
      state.newProduct=action.payload
      
  })
  builder.addCase(fetchProducts.rejected,(state,action)=>{
    state.isProgress=false,
    state.isError="this is error"
    
})
      
    },
  })

  export const { addNewProduct, addNewOfferProduct, clearProduct } = productSlice.actions

export default productSlice.reducer
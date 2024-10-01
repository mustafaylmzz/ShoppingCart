import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState={
    products: [],
    productsStatus : STATUS.IDLE,
    productDetail : [],
    productDetailStatus : STATUS.IDLE,
    
}

export const getProducts= createAsyncThunk("getproducts",async()=>{
    const response = await fetch("https://fakestoreapi.com/products")
    const data=response.json()
    return data
})
export const getCategoryProducts= createAsyncThunk("getcategoryproducts",async(category)=>{
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data=response.json()
    return data
    
})

export const getDetailProducts= createAsyncThunk("getdetailproducts",async(id)=>{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data=response.json()
    return data
})

export const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{ // pending ürünlerin sayfaya yüklenme durumu loadıng true olmalı
        builder.addCase(getProducts.pending,(state,action)=>{
            state.productsStatus=STATUS.LOADING

        }) // pendingten cıkıp tamamlandı olursa 
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.productsStatus=STATUS.SUCCESS
            state.products=action.payload
        }) // hata olma durumu var 
        .addCase(getProducts.rejected,(state,action)=>{
            state.productsStatus=STATUS.FAIL

        })//detaylar sayfası için devam ediyoz
        .addCase(getDetailProducts.pending,(state,action)=>{
            state.productDetailStatus=STATUS.LOADING

        }) // pendingten cıkıp tamamlandı olursa 
        .addCase(getDetailProducts.fulfilled,(state,action)=>{
            state.productDetailStatus=STATUS.SUCCESS
            state.productDetail=action.payload
        }) // hata olma durumu var 
        .addCase(getDetailProducts.rejected,(state,action)=>{
            state.productDetailStatus=STATUS.FAIL

        })
        .addCase(getCategoryProducts.pending,(state,action)=>{
            state.productsStatus=STATUS.LOADING

        }) // pendingten cıkıp tamamlandı olursa 
        .addCase(getCategoryProducts.fulfilled,(state,action)=>{
            state.productsStatus=STATUS.SUCCESS
            state.products=action.payload
        }) // hata olma durumu var 
        .addCase(getCategoryProducts.rejected,(state,action)=>{
            state.productsStatus=STATUS.FAIL

        })
    }
    
})

export default productSlice.reducer
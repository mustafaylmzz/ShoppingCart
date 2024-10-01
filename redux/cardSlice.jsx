import { createSlice } from "@reduxjs/toolkit";


const fetchFromLocalStorage = () => {
    try {
        let cart = localStorage.getItem("cart");
        if (cart && cart !== "undefined") {
            return JSON.parse(cart);
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error parsing JSON from localStorage", error);
        return [];
    }
};
const storeInLocalStorage=(data)=>{ //dışardan gelen verileri ls ye veren blok 
    localStorage.setItem("cart",JSON.stringify(data))
}

const initialState={
    carts:fetchFromLocalStorage(),
    itemCount : 0,
    totalAmount:0,
}

export const cardSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            if (action.payload.quantity === 0) return; 
            const isItemCart=state.carts.find(item=>item.id===action.payload.id)
            if(isItemCart){
                const tempCart=state.carts.map(item=>{
                    if(item.id===action.payload.id){
                        let tempQty=item.quantity + action.payload.quantity
                        let tempTotalPrice = tempQty * item.price
                        return{
                            ...item, quantity:tempQty, totalPrice: tempTotalPrice
                        }
                    }else{
                        return item
                    }
                })
                state.carts=tempCart
                storeInLocalStorage(state.carts)
            }else{
                state.carts.push(action.payload)
                storeInLocalStorage(state.carts)
            }
        },
        removeFromCart : (state,action)=>{
            const tempCart=state.carts.filter(item=>item.id!==action.payload)
            state.carts=tempCart
            storeInLocalStorage(state.carts)
        },
        clearFromCart : (state)=>{
            state.carts=[]
            storeInLocalStorage(state.carts)
        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.price * cartItem.quantity
            }, 0);
            state.itemCount = state.carts.length
        }

    },
    
    
})


export const {addToCart,removeFromCart,clearFromCart,getCartTotal}=cardSlice.actions
export default cardSlice.reducer
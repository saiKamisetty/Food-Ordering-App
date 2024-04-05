import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items: [],
      },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].card.info.id===action.payload) {
                    state.items.splice(i, 1); 
                    // Remove the duplicate item at index i
                    break
                }  
            }
             console.log("items",state.items)
           // state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0
        }
    },
})

export const {addItem,removeItem,clearCart}=cartSlice.actions

export default cartSlice.reducer;
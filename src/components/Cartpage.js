import ItemListCart from "./ItemListCart"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Cartpage=()=>{

    const [totalPrice ,setTotalPrice]=useState(0)
    const [filterData,setFilterData]=useState([])
    const cartItems = useSelector((store)=>store.items)
    const dispatch = useDispatch()
    const handleClaerCart=()=>{
         dispatch(clearCart())
        }

        useEffect(()=>{

            var uniqueData = Array.from(new Set(cartItems.map(item => item.card.info.id))).map(id => {
                return cartItems.find(item => item.card.info.id === id);
            });
            var filterData1 = uniqueData.map((innerData)=>{
            
        
            var totalCount= cartItems.filter((data)=>data.card.info.id === innerData.card.info.id)

            return {
                ...innerData, total:totalCount.length
            }
    
            } )
            const sum = filterData1.reduce((accumulator, currentValue) => {
                console.log(currentValue); // Check the accumulator
                return currentValue.total * (currentValue.card.info.price/100 || currentValue.card.info.defaultPrice/100) + accumulator;
            }, 0);
            
            console.log("sum",sum);
            setFilterData(filterData1)
            setTotalPrice(sum)

        },[cartItems])

       // if (filterData.length===0) return <Shimmer/>




        
    return (
        <div className='my-3 p-10 text-center '>
            <div className="w-6/12 flex justify-between mx-auto">
                <h1 className='text-2xl font-bold' >Cart</h1>
                <button  onClick={handleClaerCart} className="bg-slate-200 hover:bg-slate-300 text-black font-bold py-1 px-2 rounded">Clear Cart</button>
            </div>
            <div className="w-6/12 mx-auto my-3">
                <ItemListCart  items={filterData}/>
            </div>
            <div>
                <h1>Total Price:{totalPrice}</h1>
            </div>
        </div>

      )

}
export default Cartpage;
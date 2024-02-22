
import ItemListCart from "./ItemListCart"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice"

 

const Cartpage=()=>{

    const cartItems = useSelector((store)=>store.items)
    const dispatch = useDispatch()
    const handleClaerCart=()=>{
         dispatch(clearCart())
        }
    return (
        <div className='my-3 p-10 text-center '>
            <div className="w-6/12 flex justify-between mx-auto">
                <h1 className='text-2xl font-bold' >Cart</h1>
                <button  onClick={handleClaerCart} className="bg-slate-200 hover:bg-slate-300 text-black font-bold py-1 px-2 rounded">Clear Cart</button>
            </div>
            <div className="w-6/12 mx-auto my-3">
                <ItemListCart  items={cartItems}/>
            </div>
        </div>

      )

}
export default Cartpage;
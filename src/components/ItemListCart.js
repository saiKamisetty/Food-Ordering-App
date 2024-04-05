import React from "react"
import { useDispatch } from "react-redux"
import { addItem , removeItem } from "../utils/cartSlice"
import { IMG_LINK } from "../utils/constant"

const ItemListCart=({items})=>{

    const dispatch = useDispatch();
    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }
    const handleRemoveItem=(id)=>{
        dispatch(removeItem(id))
    }


    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="p-2 w-9/12">
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price ? item.card.info.price/100:item.card.info.defaultprice/100}</span>
                        <p className="text-xs my-2 ">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 flex ">
                        <img className="w-9/12 h-lg "src={IMG_LINK + item.card.info.imageId}/>
                        <div className="">
                            <button className="bg-slate-300 hover:bg-slate-700 text-white font-bold py-auto px-0 mx-2 my-5 rounded"onClick={()=>handleAddItem(item)} >➕ </button>
                            <div className="text-green-700"><p>Qty:{item.total}</p></div>
                            <button className="bg-slate-300 hover:bg-slate-700 text-white font-bold py-auto px-0 mx-2 my-5 rounded" onClick={()=>handleRemoveItem(item.card.info.id)} >➖ </button>
                        </div>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default ItemListCart
import React, { useState } from "react"; 
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestauarntInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./RestauarntCategory";
 

const RestaurantMenu =()=>{

    const {resId}=useParams()
    const [showIndex , setShowIndex]=useState(null)

    const resInfo = useRestauarntInfo(resId)
    console.log(resInfo)


    if (resInfo === null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage,avgRatingString,totalRatingsString}=resInfo?.cards[2]?.card?.card?.info || resInfo?.cards[0]?.card?.card?.info 

    const catagoryList =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(catagoryList)

   return(
        <div className=" text-center w-6/12 mx-auto ">
            <div className="m-3 py-2 ">
                <div className=" font-bold ">
                    <h1 className=" text-4xl ">{name}</h1>
                </div>
                <div className="mt-10 flex justify-between">
                    <div className=" text-left">
                        <h3 className="font-bold">{name}</h3>
                        <h3>{cuisines.join(" , ")}</h3>
                        <h3>{costForTwoMessage}</h3>
                    </div>
                     <div className=" border rounded-lg text-center w-[100px] h-[50px]">
                        <span><h3 className=" font-bold w-[70px] mx-auto border-grey-200 border-b-2 text-center"> ⭐ {avgRatingString}</h3></span>
                        <span><h5 className="text-sm">{totalRatingsString}</h5></span>
                    </div> 
                </div>
            </div>
            <div>
                {catagoryList.map((each,index)=>(<RestaurantCategory key={each?.card?.card?.title} data= {each?.card?.card} showItems={index === showIndex? true:false} setShowIndex={()=>setShowIndex(index)}  />))}
            </div> 
        </div>
    )
}

export default RestaurantMenu;
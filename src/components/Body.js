
import RestaurantCard ,{withLabelRestaurantCard} from "./RestaurantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_API } from "../utils/constant";


 


const Body=()=>{
    const [listofRestaurants,setListOfRestaurants]=useState([]);
    const [searchText ,setSearchText]=useState("");
    const [filteredList,setFilteredList]=useState([]);

    const RestaurantCardRated = withLabelRestaurantCard(RestaurantCard)

    useEffect(()=>{
         fetchData();
    },[]);
 

    const fetchData = async () => {
        try {
            const Data = await fetch(SWIGGY_API);
            if (!Data.ok) {
                throw new Error('Failed to fetch data');
            }
            const Raw_Data = await Data.json();
            console.log(Raw_Data);
    
            // Setting the list of restaurants and filtered list based on specific properties of the retrieved data
            setListOfRestaurants(Raw_Data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredList(Raw_Data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>Look's like you are offline , Please connect and Try Again!</h1> 



    return  listofRestaurants.length === 0 ?<Shimmer/> :(
        <div className="m-3">
             <div className="flex items-center">
                <div className=" m-3">
                    <input  class="py-2 px-4 border-solid  border-gray-300 " placeholder="Search..." type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>

                    <button className="m-3 bg-slate-300 text-black py-2 px-4 rounded-r-md" onClick={()=>{
                        filteredData1=listofRestaurants.filter((each)=>each.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
                        setFilteredList(filteredData1)
                    }}>Search</button>
                </div>
            <div className="m-3">
                    <button className=" bg-slate-300 text-black py-2 px-4 rounded-lg m-3" onClick={()=>{
                        filteredData=listofRestaurants.filter((each)=>each.info.avgRating>4.3)
                        setFilteredList(filteredData)
                        }}>Top Rated Restaurants</button>
                </div>
             </div>
            <div className='m-3 flex flex-wrap justify-start'>
                 {filteredList.map((eachRes)=>(
                    //<RestaurantCard  key={eachRes.info.id}  restaurant={eachRes}/>
                <Link key={eachRes.info.id} to={"/restaurants/"+ eachRes.info.id}>
                    { eachRes.info.avgRating>=4.3? (<RestaurantCardRated restaurant={eachRes} />):(<RestaurantCard  restaurant={eachRes}/>)}
                </Link>
                 ))}
            </div>
        </div>
    )
};

export default Body;
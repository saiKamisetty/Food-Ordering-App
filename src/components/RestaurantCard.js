const RestaurantCard = ({restaurant}) => {
    const { name, cuisines, costForTwo, areaName } = restaurant.info;
   console.log(restaurant.info.cloudinaryImageId)
    return (
      <div className="w-[270px] h-[480px] m-3 bg-black-400 shadow-lg rounded-lg hover:bg-slate-300">
        <div className=" rounded-t-lg">
          <img className="w-full p-3 h-56 " src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${restaurant.info.cloudinaryImageId}`} alt={name} />
        </div>
        <div className="m-3 p-1">
          <h3 className=" font-bold text-xl mb-2">{restaurant.info.name}</h3>
          <p className="text-gray-700 text-base"><strong>Cuisines:</strong> {cuisines.join(", ")}</p>
          <p className="text-gray-700 text-base"><strong>Cost for Two:</strong> {costForTwo}</p>
          <p className="text-gray-700 text-base"><strong>Area:</strong> {areaName}</p>
          <p className="text-gray-700 text-base"><strong>AvgRating:</strong> {restaurant.info.avgRating}</p>
        </div>
      </div>
    );
  };



// high order Component 

export const withLabelRestaurantCard =(RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className=" p-2 bg-black text-white  rounded-lg absolute  ">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard ;
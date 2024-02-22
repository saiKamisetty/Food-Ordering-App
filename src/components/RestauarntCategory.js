import ItemListCart from "./ItemListCart";

const RestaurantCategory=({data,showItems,setShowIndex})=>{

     

    const handleClick=()=>{
        setShowIndex()
    };

    //console.log(data)

    return(
        <div>
            <div className="p-2 shadow-lg bg-grey-50  mx-auto my-6 cursor-pointer ">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-m" >{data.title}({data.itemCards.length})</span>
                    <span >🔽</span>
                </div>
                {showItems && <ItemListCart items={data.itemCards} />}
            </div>
        </div>
    )
};

export default RestaurantCategory

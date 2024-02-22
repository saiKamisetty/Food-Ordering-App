
import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";



const useRestauarntInfo =(resId)=>{
const [resInfo ,setResInfo]=useState(null)

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{

        const Menu = await fetch(MENU_URL+resId);
    
        const json = await Menu.json();
        setResInfo(json?.data)
    }

    return resInfo

}

export default useRestauarntInfo
 

 
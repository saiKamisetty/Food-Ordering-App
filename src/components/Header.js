import {LOGO_LINK,CART_IMG} from "../utils/constant";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";


const Header =()=>{
const [btnNameReact,setBtnNameReact]=useState("Log in")
const onlineStatus = useOnlineStatus()

const cartItems = useSelector((store)=>store.items)
console.log(cartItems)
 

    return(
        <div className='flex justify-between bg-slate-200 m-3 shadow-lg rounded-lg'>
            <div className=''>
                <Link to="/"><img className="w-20 m-3"src={ LOGO_LINK} /></Link>
            </div>
            <div className='m-3 py-7 '>
                <ul className='flex justify-between'>
                    <li className='px-4 font-medium'>Online Status:{onlineStatus ?"🟢":"🔴"}</li>
                    <li className='px-4 font-medium'><Link to="/Grocery">Grocery Mart</Link></li>
                    <li className='px-4 font-medium'><Link to="/">Home</Link></li>
                    <li className='px-4 font-bold flex'><Link to="/Cartpage"><img className="h-6 w-8 cursor-pointer" src={CART_IMG}/> -({cartItems.length})</Link></li>
                    <li className='px-4 font-medium'><Link to="/about">About Us</Link></li>
                    <li className='px-4 font-medium'><Link to="/contact">Contact US</Link></li>
                    <li><button className="button px-4 font-medium" onClick={()=>btnNameReact === "Log in"? setBtnNameReact("Log-out"):setBtnNameReact("Log in")}>{btnNameReact}</button></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Header;
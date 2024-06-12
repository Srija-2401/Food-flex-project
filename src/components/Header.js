import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
// import Body from "./Body";
import {Link} from "react-router-dom"
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Logo from "../utils/Logo.jpg"
import cart from "../utils/cart .jpg"


const Header = ({listOfRestaurants,setlistOfRestaurants,filteredRestaurants,setfilteredRestaurants}) => {
    
    const [btnName , setbtnName] = useState("Login");
    const [searchText , setsearchText] = useState("");
    const data = useContext(UserContext);
    const cartItems= useSelector((store)=>store.cart.items);
    
    return(
        <div className="flex justify-between items-center sticky top-0 bg-white z-[1000]">
            <div className="logo">
                <img className="h-[120px]" alt ="food" src={Logo}/>
            </div>
            <div className="mr-24">
                <input className="py-2 px-3 border-slate-950 border" type="text" placeholder="Enter your item" value = {searchText} 
                onChange={(e)=>{
                   setsearchText(e.target.value);
                }}></input>
                <button onClick={()=>{
                    const filtered = listOfRestaurants.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurants(filtered);
                    
                 }} 
                className="ml-2 px-3 py-2 bg-orange-400 rounded-md text-white font-medium hover:text-orange-600 hover:bg-transparent hover:border-orange-600 hover:border">Search</button>
            </div>
            <div className = "nav-items">
                <ul className="flex mr-12 items-center"> 
                    <li className="mx-2 text-lg hover:font-medium hover:text-orange-600"><Link to="/">Home</Link></li>
                    <li className="mx-2 text-lg hover:font-medium hover:text-orange-600"><Link to="/about">About Us</Link></li>
                    <li className="mx-2 text-lg hover:font-medium hover:text-orange-600"><Link to ="/contact">Contact Us</Link></li>
                    {cartItems.length ===0 ? <li className="mx-2 text-lg hover:font-medium hover:text-orange-600"><Link to="/cart"><img className="w-[30px]" src="https://cdn-icons-png.flaticon.com/256/1170/1170678.png"/></Link></li> :
                        <div className="relative">
                            <li className="mx-2 text-lg hover:font-medium hover:text-orange-600"><Link to="/cart"><img className="w-[30px]" src="https://cdn-icons-png.flaticon.com/256/1170/1170678.png"/></Link></li>
                            <span className="absolute -top-[10px] bg-slate-800 text-white text-sm w-4 h-4 text-center right-0 rounded-xl">{cartItems.length}</span>
                        </div>}
                    
                    {/* <li className="mx-2 text-lg hover:font-medium hover:text-orange-600"><Link to="/grocery">Grocery</Link></li> */}
                    <li className="mx-2 text-lg hover:font-medium hover:text-orange-600"><button onClick={()=>{
                        btnName === "Login"? setbtnName("Logout") : setbtnName("Login")
                        console.log(btnName)
                    }} className="py-1 px-4 bg-orange-400 text-white rounded-md font-medium hover:text-orange-600 hover:bg-transparent hover:border-orange-600 hover:border">{btnName}</button></li>
                    <li className="mx-2 text-xl font-bold">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
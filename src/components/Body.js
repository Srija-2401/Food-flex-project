import Rescard,{VegCard} from "./Rescard";
import Shimmer from "./Shimmer";
import {useOutletContext} from "react-router-dom";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import useBody from "../utils/useBody";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () =>{
   
//    const [listOfRestaurants,setlistOfRestaurants] = useState([]);
const {listOfRestaurants,setlistOfRestaurants,filteredRestaurants,setfilteredRestaurants} = useOutletContext();
const [updatedlistOfRestaurants,updatedfilteredRestaurants] = useBody(listOfRestaurants,setlistOfRestaurants,filteredRestaurants,setfilteredRestaurants)
   const handlefilter = () => {
      const filteredList = updatedlistOfRestaurants.filter(
        res => res.info.avgRating>4
      )
      setfilteredRestaurants(filteredList);
     console.log(filteredList);
   }
const onlineStatus = useOnlineStatus();
const ResVegCard = VegCard(Rescard);

const {loggedInUser,setuserName} = useContext(UserContext);


if(onlineStatus===false) return <h1>Connection was lost</h1>

    return updatedlistOfRestaurants.length === 0 ? <Shimmer/> :
    (
        <div className="">
            <div className="flex items-center">
            <div className="filter">
                <button className="my-3 mx-20 mt-5 border border-black py-2 px-4 font-medium hover:bg-black hover:text-white" 
                onClick={handlefilter}
                >Top Rated Restaurants</button>
            </div>
            <div className="filter">
                <label>User Name </label>
                <input className="border border-black px-4  py-1.5" value={loggedInUser} onChange={(e)=>setuserName(e.target.value)} ></input>
            </div>
            </div>
            
            <div className="flex flex-wrap ml-[70px]">
            {updatedfilteredRestaurants.map((restaurant)=>(
                <Link to={"/restaurants/"+restaurant.info.id} key = {restaurant.info.id}>
                {restaurant.info.veg ? (
                   <ResVegCard resData={restaurant} />
                ) : ( 
                   <Rescard resData={restaurant}/>
                )}
                    </Link>
            ))}
            </div>
            
        </div>
    )
}



export default Body;
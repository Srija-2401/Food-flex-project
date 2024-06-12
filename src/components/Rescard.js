import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";

const Rescard = ({resData}) => {
    const dats = useContext(UserContext)
    const{cloudinaryImageId,name,cuisines,avgRating,sla} = resData?.info
    return (
        <div className="h-[350px] w-[350px] my-2.5 mx-3.5 rounded-lg hover:scale-95 bg-transparent">
               <img className="object-cover h-[70%] w-full rounded-lg" src={CDN_URL+cloudinaryImageId} alt="boryani"/>
            <p className="font-medium mt-2.5 text-lg">{name}</p>
            
            <div className="flex justify-between">
              <p className="font-medium">Rating : {avgRating}</p>
              <p>{sla.slaString}</p>
            </div>
            <p className="text-gray-500">{cuisines.slice(0,3).join(", ")}</p>
            <p>{dats.loggedInUser}</p>
        </div>
    )
}

export const VegCard = (Rescard) =>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-gray-800 text-white px-3 py-1 mt-0.5">Vegetarian</label>
                <Rescard {...props}/>
            </div>
        )
    }
}
export default Rescard;
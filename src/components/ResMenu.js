import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const ResMenu=()=>{
    const [showIndex ,setShowIndex] = useState(0);
    const {resId} = useParams();
    const resInfo = useResMenu(resId);

    if(resInfo===null) return <Shimmer/>

    const {name,cuisines,avgRating,sla,totalRatingsString,costForTwoMessage,areaName} = resInfo?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>
        c?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(category);
    return(
        <div>
            <div className="flex justify-center">
               <div className="w-7/12 bg-slate-900 text-white h-full px-5 py-5 shadow-lg rounded-md"> 
                   <h1 className="font-bold text-2xl pb-2 border-b mb-3">{name}</h1>
                   <div className="flex items-center gap-1.5 text-md font-semibold">
                       <img className="w-5 rounded-3xl h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDLFTzJ10flaW09v2MEa_C2iMzRR35p0zdPA&s" alt ="rating"/>
                       <h4>{avgRating} ({totalRatingsString})</h4>
                       <div className="flex items-center gap-1 relative">
                           <div className="bg-gray-500 w-2 h-2 rounded-2xl"></div>
                           <h4>{costForTwoMessage}</h4>
                       </div>
                   </div>
                    <p className="pt-1.5 font-medium">{cuisines.join(", ")}</p>

                   <p className="pt-1 font-medium">{areaName}</p>
                   <h2 className="font-medium pt-0.5">Delivery time : {sla.slaString}</h2>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center">
                    <div className=" w-7/12">
                        {category.map((category,index)=>
                            <ResCategory key={index} data={category?.card?.card} showItems={index === showIndex && true}
                            setShowIndex={()=>setShowIndex(index)}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResMenu
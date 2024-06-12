import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import non_veg from "../utils/non_veg.jpg"
import veg from "../utils/veg.jpg"

const Itemlist =({items})=>{

    const dispatch = useDispatch();
    const handleItems = (item)=>{
      dispatch(addItem(item))
    }

    return(
        <div>
            {items.map((item)=>
               <div className="flex justify-between border-t-2 mt-3 border-gray-500 pt-4 py-2" key={item.card.info.id}>
                    <div className="w-8/12"> 
                    {item.card.info.isVeg ? <img className="w-5 rounded-3xl mb-2" src={veg} alt=""/>
                        : <img className="w-5 rounded-3xl mb-2" src={non_veg} alt=""/>}
                        <div className="font-medium text-lg">{item.card.info.name}</div>
                        <div className="pt-1 font-medium text-base">₹ {item.card.info.price/100 || item.card.info.defaultPrice/100 } </div>
                        <p className="pt-5 text-gray-600 text-[15px]">{item.card.info.description}</p>
                    </div>   
                    
                        {item.card.info.imageId ? (
                            <div className="flex flex-col items-center">
                                <img className="h-40 w-40 rounded-lg object-cover" src={CDN_URL+item.card.info.imageId} alt={item.card.info.name}/>
                                <button className="bg-white text-green-600 border border-green-600 hover:bg-slate-200 font-medium text-lg py-1 px-6 rounded-md" 
                                onClick={()=>handleItems(item)}
                                >ADD  </button>
                            </div>
                        ): <button className="bg-white text-green-600 border border-green-600 hover:bg-slate-200 font-medium text-lg h-10 px-6 mt-auto shadow-lg rounded-md" 
                        onClick={()=>handleItems(item)}
                        >ADD  </button>} 
                        
                               
                </div>
            )}
        </div>
    )
}
export default Itemlist;

import {useState} from "react";
import Itemlist from "./ItemList"

const ResCategory = ({data,showItems,setShowIndex})=>{
    // const[showItems,setShowItems] = useState(false);
    const handleclick =()=>{
        setShowIndex();
    
    }
    console.log(data)
    return(
        <div>
            <div className="p-4 shadow-lg my-3">
                <div className="flex items-center justify-between font-semibold text-lg cursor-pointer" onClick={handleclick}>
                    {data.title} ({data.itemCards.length})
                    <img className="w-4" src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="down arrw"/>
                </div>
                {showItems && <Itemlist items={data.itemCards}/>}
            </div>
        </div>
    )
}
export default ResCategory